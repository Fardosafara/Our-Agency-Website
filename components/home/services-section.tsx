"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, ChevronRight, Globe, LineChart, Zap } from "lucide-react"
import { GlassMorphicCard } from "@/components/glassmorphic-card"

export default function ServicesSection() {
  // Services data
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites that are fast, responsive, and optimized for conversion.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimization", "Performance Tuning"],
    },
    {
      icon: LineChart,
      title: "Digital Marketing",
      description: "Data-driven strategies that increase visibility and drive qualified traffic.",
      features: ["SEO & SEM", "Content Strategy", "Social Media", "Analytics & Reporting"],
    },
    {
      icon: Zap,
      title: "Brand Identity",
      description: "Compelling visual identities that communicate your brand's unique value.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800">Our Services</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end services to help your business thrive in the digital landscape
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassMorphicCard>
                <div className="inline-flex p-3 rounded-xl bg-blue-600 mb-6 text-white">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </GlassMorphicCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button asChild className="mt-4 md:mt-8 group bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/services" className="flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

