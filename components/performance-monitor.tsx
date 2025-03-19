"use client"

import { useEffect } from "react"
import { reportWebVitals } from "@/lib/performance-utils"

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV === "production") {
      reportWebVitals()
    }

    // Clean up event listeners on unmount
    return () => {
      if (typeof window !== "undefined") {
        // Clean up any observers or listeners here
      }
    }
  }, [])

  // This component doesn't render anything
  return null
}

