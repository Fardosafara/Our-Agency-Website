import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { createGzip } from "zlib"
import { pipeline } from "stream"
import { promisify } from "util"

// Secret token for secure sitemap generation
const SITEMAP_TOKEN = process.env.SITEMAP_TOKEN

// Helper to create a gzipped file
const pipelineAsync = promisify(pipeline)

export async function POST(request: NextRequest) {
  try {
    // Verify the request has the correct token
    const token = request.headers.get("x-sitemap-token")

    if (token !== SITEMAP_TOKEN) {
      return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com"

    // Get all dynamic routes from your CMS or database
    // This is just an example - replace with your actual data source
    const pages = [
      { url: "/", lastmod: new Date().toISOString(), priority: 1.0, changefreq: "daily" },
      { url: "/about", lastmod: new Date().toISOString(), priority: 0.8, changefreq: "monthly" },
      { url: "/services", lastmod: new Date().toISOString(), priority: 0.9, changefreq: "weekly" },
      { url: "/contact", lastmod: new Date().toISOString(), priority: 0.7, changefreq: "monthly" },
      // Add more pages here
    ]

    // Generate sitemap XML
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    pages.forEach((page) => {
      sitemap += "  <url>\n"
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`
      sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`
      sitemap += `    <priority>${page.priority}</priority>\n`
      sitemap += "  </url>\n"
    })

    sitemap += "</urlset>"

    // Write sitemap to public directory
    const publicDir = path.join(process.cwd(), "public")
    const sitemapPath = path.join(publicDir, "sitemap.xml")
    const gzipPath = path.join(publicDir, "sitemap.xml.gz")

    fs.writeFileSync(sitemapPath, sitemap)

    // Create gzipped version
    const gzip = createGzip()
    const source = fs.createReadStream(sitemapPath)
    const destination = fs.createWriteStream(gzipPath)

    await pipelineAsync(source, gzip, destination)

    return NextResponse.json({
      success: true,
      message: "Sitemap generated successfully",
    })
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return NextResponse.json({ success: false, message: "Error generating sitemap" }, { status: 500 })
  }
}

