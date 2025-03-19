import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"
import { JsonLd } from "@/components/json-ld"

// Optimize font loading with display swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
})

// Base URL for canonical links and OG images
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com"

// Enhanced metadata with comprehensive SEO attributes
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | DosaWeb Solutions",
    default: "DosaWeb Solutions | Web Development & Digital Marketing Agency",
  },
  description:
    "We create stunning websites and powerful digital marketing strategies that drive growth and deliver exceptional results for businesses worldwide.",
  keywords: [
    "web development",
    "digital marketing",
    "SEO",
    "web design",
    "brand identity",
    "e-commerce",
    "responsive design",
  ],
  authors: [{ name: "DosaWeb Solutions", url: baseUrl }],
  creator: "DosaWeb Solutions",
  publisher: "DosaWeb Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "fr-FR": "/fr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "DosaWeb Solutions",
    title: "DosaWeb Solutions | Web Development & Digital Marketing Agency",
    description:
      "We create stunning websites and powerful digital marketing strategies that drive growth and deliver exceptional results.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "DosaWeb Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DosaWeb Solutions | Web Development & Digital Marketing Agency",
    description:
      "We create stunning websites and powerful digital marketing strategies that drive growth and deliver exceptional results.",
    creator: "@dosaweb",
    images: [`${baseUrl}/twitter-image.jpg`],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    // Use 'other' for custom verification properties
    other: {
      "msvalidate.01": "bing-verification-code", // Correct format for Bing verification
    },
  },
  category: "technology",
}

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  themeColor: "#0000ff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        {/* DNS Prefetching for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical assets */}
        <link rel="preload" href="/logo3.png" as="image" />
      </head>
      <body className="font-poppins antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </div>
        {/* Structured data for organization */}
        <JsonLd />
      </body>
    </html>
  )
}

