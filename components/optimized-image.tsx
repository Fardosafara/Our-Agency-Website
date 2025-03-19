"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  fill?: boolean
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = false,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(priority)

  useEffect(() => {
    if (priority) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "200px", // Load images 200px before they come into view
      },
    )

    const currentElement = document.getElementById(`image-${alt.replace(/\s+/g, "-").toLowerCase()}`)
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [alt, priority])

  return (
    <div
      id={`image-${alt.replace(/\s+/g, "-").toLowerCase()}`}
      className={`relative ${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      style={fill ? { width: "100%", height: "100%" } : { width, height }}
    >
      {shouldLoad && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          priority={priority}
          sizes={sizes}
          fill={fill}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={() => setIsLoaded(true)}
          className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        />
      )}
    </div>
  )
}

