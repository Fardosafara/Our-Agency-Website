"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-blue-600 text-white relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-lg bg-white/10 p-6 md:p-12 rounded-2xl shadow-2xl border border-white/20">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Limited Time Offer
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-center">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 text-center">
              Get a free consultation and website audit worth $500. Let's discuss how we can help your business grow
              online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base md:text-lg bg-white text-blue-600 hover:bg-blue-50 group relative overflow-hidden"
              >
                <Link href="/website-planning" className="flex items-center relative z-10">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg bg-white text-blue-600 hover:bg-blue-50 group relative overflow-hidden"
              >
                <Link href="tel:+254 702383309" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Custom Badge component for CTA section
function Badge({ children, className = "" }) {
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`}>{children}</div>
  )
}

