"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface ThreeDCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function ThreeDCard({ children, className = "", intensity = 10 }: ThreeDCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * -intensity
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * intensity

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseEnter = () => {
    setScale(1.02)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  // For touch devices, disable the 3D effect
  const isTouchDevice = () => {
    if (typeof window === "undefined") {
      return false
    }
    return "ontouchstart" in window || navigator.maxTouchPoints > 0
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform:
          typeof window === "undefined" || isTouchDevice()
            ? `scale(${scale})`
            : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: "transform 0.1s ease-out",
      }}
      onMouseMove={isTouchDevice() ? undefined : handleMouseMove}
      onMouseEnter={isTouchDevice() ? undefined : handleMouseEnter}
      onMouseLeave={isTouchDevice() ? undefined : handleMouseLeave}
      whileHover={isTouchDevice() ? { scale: 1.02 } : undefined}
    >
      {children}
    </motion.div>
  )
}

