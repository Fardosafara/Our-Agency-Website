type JsonLdProps = {
    type: "organization" | "webpage" | "service" | "breadcrumb" | "faq"
    data?: any
  }
  
  export function JsonLd() {
    // Enhanced schema markup with more detailed information
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "DosaWeb Solutions",
      image: "https://yourdomain.com/logo.png",
      "@id": "https://yourdomain.com",
      url: "https://yourdomain.com",
      telephone: "+1-555-555-5555",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Marketing Street",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94105",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.7749,
        longitude: -122.4194,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      sameAs: [
        "https://www.facebook.com/digitalsparkagency",
        "https://twitter.com/digitalsparkagency",
        "https://www.linkedin.com/company/digitalsparkagency",
        "https://www.instagram.com/digitalsparkagency",
      ],
      description:
        "Leading web development and digital marketing agency specializing in custom websites, SEO, PPC, and social media marketing. Transform your online presence with our expert solutions.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
              description: "Custom website development with modern technologies",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Services",
              description: "Search engine optimization to improve your online visibility",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing",
              description: "Comprehensive digital marketing solutions",
            },
          },
        ],
      },
      // Add aggregate rating if you have reviews
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "89",
      },
      // Add FAQ section for rich results
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does DosaWeb Solutions offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DosaWeb Solutions offers web development, digital marketing, SEO optimization, brand identity design, and e-commerce solutions.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our typical website development timeline ranges from 4-8 weeks depending on the complexity and scope of the project.",
          },
        },
      ],
    }
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  }
  
  