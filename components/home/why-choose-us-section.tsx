"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Users } from "lucide-react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export default function WhyChooseUsSection() {
  // Stats section animation
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  // Simplified parallax effect
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800">Why Choose Us</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            We Deliver Results That Exceed Expectations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Our data-driven approach and commitment to excellence ensure your digital presence stands out from the
            competition.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-800">Our Approach</h3>
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "Strategic Approach",
                  description: "We develop custom strategies tailored to your specific business goals.",
                  icon: Lightbulb,
                },
                {
                  title: "Technical Excellence",
                  description: "Our team stays at the forefront of technology to deliver cutting-edge solutions.",
                  icon: Code,
                },
                {
                  title: "Dedicated Support",
                  description: "We provide ongoing support to ensure your digital assets continue to perform.",
                  icon: Users,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                      <item.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-2 gap-6"
            >
              {[
                { number: 100, label: "Projects Completed", icon: "✨" },
                { number: 99, label: "Client Satisfaction", suffix: "%", icon: "⭐" },
                // { number: 2, label: "Years Experience", icon: "👥" },
                // { number: 5, label: "Industry Awards", icon: "🏆" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-50"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {statsInView ? (
                      <CountUp start={0} end={stat.number} duration={2.5} suffix={stat.suffix || ""} />
                    ) : (
                      "0"
                    )}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: The DosaWeb Difference */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-800">The DosaWeb Difference</h3>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/5 to-blue-600/10 rounded-3xl blur-xl transform -rotate-1"></div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sparkles"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M3 5h4" />
                      <path d="M19 17v4" />
                      <path d="M17 19h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
                    What Makes Us Different
                  </h3>
                </div>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Unlike other web designers who just create 'pretty' websites, we focus on{" "}
                  <span className="font-semibold text-blue-700">results</span>. We build websites that drive real
                  business growth by making sure they are:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Conversion-Focused",
                      description: "Designed to turn visitors into customers",
                      icon: "💰",
                    },
                    {
                      title: "Mobile-Optimized",
                      description: "Looks great on any device",
                      icon: "📱",
                    },
                    {
                      title: "SEO-Friendly",
                      description: "Helps you rank higher on Google",
                      icon: "🔍",
                    },
                    {
                      title: "Fast & Secure",
                      description: "Performance matters for your success",
                      icon: "🚀",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl shadow-sm">
                            {feature.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-blue-800 mb-1">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-10 p-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-quote"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold">Our Promise</h4>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    We don't just build websites - we build digital experiences that convert visitors into customers and
                    help your business grow. Every project we take on is treated with the same level of dedication and
                    excellence.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

