"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface LazyComponentProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  placeholder?: React.ReactNode
}

export function LazyComponent({
  children,
  threshold = 0.1,
  rootMargin = "200px",
  triggerOnce = true,
  placeholder = <div className="min-h-[100px] bg-gray-100 animate-pulse rounded-md"></div>,
}: LazyComponentProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  })

  useEffect(() => {
    if (inView) {
      setShouldRender(true)
    }
  }, [inView])

  return <div ref={ref}>{shouldRender ? children : placeholder}</div>
}

