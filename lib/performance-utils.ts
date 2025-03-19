// Performance optimization utilities

// Add these TypeScript interface definitions at the top of the file
interface PerformanceEventTiming extends PerformanceEntry {
    processingStart: number
  }
  
  interface LayoutShift extends PerformanceEntry {
    value: number
    hadRecentInput: boolean
  }
  
  /**
   * Debounce function to limit how often a function can be called
   */
  export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null
  
    return (...args: Parameters<T>) => {
      const later = () => {
        timeout = null
        func(...args)
      }
  
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  /**
   * Throttle function to limit the rate at which a function can fire
   */
  export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
    let inThrottle = false
  
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        setTimeout(() => {
          inThrottle = false
        }, limit)
      }
    }
  }
  
  /**
   * Lazy load images that are not in the viewport
   */
  export function lazyLoadImages() {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return
  
    const images = document.querySelectorAll("img[data-src]")
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement
          image.src = image.dataset.src || ""
          image.removeAttribute("data-src")
          imageObserver.unobserve(image)
        }
      })
    })
  
    images.forEach((image) => {
      imageObserver.observe(image)
    })
  }
  
  /**
   * Preload critical resources
   */
  export function preloadCriticalResources(resources: string[]) {
    if (typeof window === "undefined") return
  
    resources.forEach((resource) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.href = resource
  
      if (resource.endsWith(".js")) {
        link.as = "script"
      } else if (resource.endsWith(".css")) {
        link.as = "style"
      } else if (/\.(jpe?g|png|gif|webp)$/i.test(resource)) {
        link.as = "image"
      } else if (/\.(woff2?|ttf|otf|eot)$/i.test(resource)) {
        link.as = "font"
        link.crossOrigin = "anonymous"
      }
  
      document.head.appendChild(link)
    })
  }
  
  /**
   * Measure and report Core Web Vitals
   */
  export function reportWebVitals() {
    if (typeof window === "undefined" || !("performance" in window)) return
  
    // Report LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log("LCP:", lastEntry.startTime / 1000, "seconds")
  
      // You can send this to your analytics here
    })
  
    observer.observe({ type: "largest-contentful-paint", buffered: true })
  
    // Report FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Cast to PerformanceEventTiming which has the processingStart property
        const fidEntry = entry as PerformanceEventTiming
        const delay = fidEntry.processingStart - fidEntry.startTime
        console.log("FID:", delay, "ms")
  
        // You can send this to your analytics here
      })
    })
  
    fidObserver.observe({ type: "first-input", buffered: true })
  
    // Report CLS (Cumulative Layout Shift)
    let clsValue = 0
    const clsEntries = []
  
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Cast to LayoutShift which has hadRecentInput and value properties
        const layoutShiftEntry = entry as LayoutShift
        // Only count layout shifts without recent user input
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value
          clsEntries.push(layoutShiftEntry)
        }
      })
  
      console.log("CLS:", clsValue)
  
      // You can send this to your analytics here
    })
  
    clsObserver.observe({ type: "layout-shift", buffered: true })
  }
  
  