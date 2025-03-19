"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface ParallaxTextProps {
  children: string
  baseVelocity?: number
  className?: string
}

export function ParallaxText({ children, baseVelocity = 5, className = "" }: ParallaxTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={`flex overflow-hidden whitespace-nowrap m-0 cursor-default ${className}`}>
      <motion.div
        className="flex whitespace-nowrap text-xl md:text-2xl font-medium"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="block mr-8">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

