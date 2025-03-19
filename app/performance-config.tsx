// Configuration for Static Generation and ISR
export const dynamicParams = false // Default to static generation for all pages

// Revalidation periods for different content types
export const revalidationTimes = {
  homepage: 3600, // Homepage revalidates every hour
  blogPosts: 86400, // Blog posts revalidate daily
  products: 43200, // Products revalidate every 12 hours
  staticPages: false, // Static pages like About, Contact never revalidate
}

// Example usage in a page:
// export const revalidate = revalidationTimes.homepage;

