export function generateOrganizationSchema(organization: any) {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      ...organization,
    }
  }
  
  export function generateWebPageSchema(webPage: any) {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      ...webPage,
    }
  }
  
  export function generateServiceSchema(service: any) {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      ...service,
    }
  }
  
  export function generateBreadcrumbSchema(items: any) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item: any, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }
  }
  
  export function generateFAQSchema(mainEntity: any) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: mainEntity.map((item: any) => ({
        "@type": "Question",
        name: item.name,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.text,
        },
      })),
    }
  }
  
  interface SocialMetaProps {
    title: string
    description: string
    url: string
    image: string
  }
  
  export function generateSocialMeta({ title, description, url, image }: SocialMetaProps) {
    return {
      openGraph: {
        title,
        description,
        url,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    }
  }
  
  interface ConstructMetadataProps {
    title: string
    description: string
    canonical?: string
    openGraph?: {
      type: string
      images: Array<{
        url: string
        width: number
        height: number
        alt: string
      }>
    }
    additionalMetaTags?: Array<{
      name: string
      content: string
    }>
  }
  
  export function constructMetadata({
    title,
    description,
    canonical,
    openGraph,
    additionalMetaTags,
  }: ConstructMetadataProps) {
    const metadata = {
      title: title,
      description: description,
    }
  
    if (canonical) {
      Object.assign(metadata, { canonical: canonical })
    }
  
    if (openGraph) {
      Object.assign(metadata, { openGraph: openGraph })
    }
  
    if (additionalMetaTags) {
      Object.assign(metadata, {
        metadataBase: new URL("https://yourdomain.com"),
        ...metadata,
        ...Object.fromEntries(additionalMetaTags.map((tag) => [tag.name, tag.content])),
      })
    }
  
    return metadata
  }
  
  