import Link from "next/link"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"

interface BreadcrumbItem {
  name: string
  url: string
  isCurrent?: boolean
}

interface SEOBreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function SEOBreadcrumbs({ items, className = "" }: SEOBreadcrumbsProps) {
  // Generate structured data for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema(items)

  return (
    <>
      <nav aria-label="Breadcrumb" className={`py-3 ${className}`}>
        <ol className="flex flex-wrap items-center space-x-1 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              {item.isCurrent ? (
                <span aria-current="page" className="text-blue-600 font-medium">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="text-gray-600 hover:text-blue-600 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Add structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

