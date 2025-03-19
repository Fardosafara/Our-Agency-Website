"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedGradientTextProps {
  children: ReactNode
  className?: string
}

export function AnimatedGradientText({ children, className = "" }: AnimatedGradientTextProps) {
  return (
    <motion.h1
      className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-size-200 ${className}`}
      animate={{
        backgroundPosition: ["0% center", "200% center"],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      {children}
    </motion.h1>
  )
}

