"use client"

import { useRef, useEffect } from "react"

export default function AnimatedTextBanner() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const content = container.firstElementChild as HTMLElement

    if (!content) return

    // Clone the content for seamless looping
    const clone = content.cloneNode(true) as HTMLElement
    container.appendChild(clone)

    // Set the animation
    const duration = 30 // seconds
    let animationId: number
    let startTime: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = (elapsed / (duration * 1000)) % 1

      if (container) {
        const translateX = -progress * content.offsetWidth
        container.style.transform = `translateX(${translateX}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="bg-white py-8 md:py-12 overflow-hidden border-y border-blue-100">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-50"></div>

        <div className="relative z-10 overflow-hidden">
          <div ref={containerRef} className="flex whitespace-nowrap">
            <div className="flex text-blue-600 font-semibold text-xl md:text-2xl">
              <span className="block mr-8">WEB DEVELOPMENT</span>
              <span className="block mr-8">•</span>
              <span className="block mr-8">DIGITAL MARKETING</span>
              <span className="block mr-8">•</span>
              <span className="block mr-8">BRAND IDENTITY</span>
              <span className="block mr-8">•</span>
              <span className="block mr-8">UI/UX DESIGN</span>
              <span className="block mr-8">•</span>
              <span className="block mr-8">ECOMMERCE</span>
              <span className="block mr-8">•</span>
              <span className="block mr-8">SEO</span>
              <span className="block mr-8">•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

