"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { LoadingIndicator } from "@/components/loading-indicator"
import { PerformanceMonitor } from "@/components/performance-monitor"

// Dynamically import heavy components with code splitting
const HeroSection = dynamic(() => import("@/components/home/hero-section"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      <LoadingIndicator />
    </div>
  ),
  ssr: true,
})

const AnimatedTextBanner = dynamic(() => import("@/components/home/animated-text-banner"), {
  loading: () => <div className="h-20 bg-white"></div>,
  ssr: false, // Client-side only for animations
})

const ServicesSection = dynamic(() => import("@/components/home/services-section"), {
  loading: () => <div className="py-16 bg-white"></div>,
  ssr: true,
})

const WhyChooseUsSection = dynamic(() => import("@/components/home/why-choose-us-section"), {
  loading: () => <div className="py-16 bg-gray-50"></div>,
  ssr: true,
})

const ProcessSection = dynamic(() => import("@/components/home/process-section"), {
  loading: () => <div className="py-16 bg-white"></div>,
  ssr: true,
})

const TestimonialsSection = dynamic(() => import("@/components/home/testimonials-section"), {
  loading: () => <div className="py-16 bg-gray-50"></div>,
  ssr: true,
})

const CTASection = dynamic(() => import("@/components/home/cta-section"), {
  loading: () => <div className="py-16 bg-blue-600"></div>,
  ssr: true,
})

// Import the ChatButton component with lazy loading
const ChatButton = dynamic(() => import("@/components/chat-button"), {
  loading: () => null,
  ssr: false, // Client-side only since it contains client-side scripts
})

export default function HomeClient() {
  return (
    <div className="relative">
      {/* Performance monitoring in production */}
      <PerformanceMonitor />

      {/* Hero section with high priority */}
      <Suspense fallback={<LoadingIndicator />}>
        <HeroSection />
      </Suspense>

      {/* Animated text banner - client-side rendered */}
      <Suspense fallback={<div className="h-20 bg-white"></div>}>
        <AnimatedTextBanner />
      </Suspense>

      {/* Services section - important content */}
      <Suspense fallback={<div className="py-16 bg-white"></div>}>
        <ServicesSection />
      </Suspense>

      {/* Why Choose Us section - lazy loaded */}
      <Suspense fallback={<div className="py-16 bg-gray-50"></div>}>
        <WhyChooseUsSection />
      </Suspense>

      {/* Process section - lazy loaded */}
      <Suspense fallback={<div className="py-16 bg-white"></div>}>
        <ProcessSection />
      </Suspense>

      {/* Testimonials section - lazy loaded */}
      <Suspense fallback={<div className="py-16 bg-gray-50"></div>}>
        <TestimonialsSection />
      </Suspense>

      {/* CTA section - lazy loaded */}
      <Suspense fallback={<div className="py-16 bg-blue-600"></div>}>
        <CTASection />
      </Suspense>

      {/* Chat button - client-side only */}
      <ChatButton />
    </div>
  )
}

