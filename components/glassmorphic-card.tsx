"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface GlassMorphicCardProps {
  children: ReactNode
  className?: string
}

export function GlassMorphicCard({ children, className = "" }: GlassMorphicCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`relative overflow-hidden rounded-xl bg-white p-6 shadow-lg border border-gray-100 h-full ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-80" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

