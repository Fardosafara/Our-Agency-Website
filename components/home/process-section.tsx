"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code, LineChart, MessageSquare, Zap } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function ProcessSection() {
  // Process section animation
  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // For interactive step selection
  const [activeStep, setActiveStep] = useState(0)

  // For parallax effect
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.3, 1, 0.3])

  // Process steps data
  const processSteps = [
    {
      title: "Discovery",
      description: "We learn about your business, goals, and target audience to create a strategic foundation.",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600",
      details: [
        "Comprehensive client questionnaire",
        "Market and competitor analysis",
        "User persona development",
        "Business goals alignment",
      ],
    },
    {
      title: "Strategy & Planning",
      description: "We develop a comprehensive roadmap tailored to your specific objectives and requirements.",
      icon: LineChart,
      color: "from-indigo-500 to-purple-500",
      details: [
        "Project scope definition",
        "Technical requirements planning",
        "Content strategy development",
        "Timeline and milestone creation",
      ],
    },
    {
      title: "Design & Development",
      description: "Our team brings your vision to life with cutting-edge design and development techniques.",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      details: [
        "UI/UX wireframing and prototyping",
        "Responsive design implementation",
        "Frontend and backend development",
        "Performance optimization",
      ],
    },
    {
      title: "Launch & Growth",
      description: "We deploy your solution and implement strategies to drive continuous improvement and growth.",
      icon: Zap,
      color: "from-pink-500 to-red-500",
      details: [
        "Quality assurance testing",
        "Deployment and launch support",
        "Analytics implementation",
        "Ongoing maintenance and updates",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-5"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-blue-100 opacity-20 blur-3xl"
          style={{ y: y2, opacity: opacity1 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-indigo-100 opacity-20 blur-3xl"
          style={{ y: y1, opacity: opacity1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <Badge className="mb-4 bg-blue-600 text-white px-4 py-1.5 text-sm">Our Process</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            <span className="relative inline-block">
              How We Bring
              <span className="relative">
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 rounded-full"></span>
              </span>
            </span>{" "}
            <span className="text-blue-600">Your Vision to Life</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto">
            Our proven methodology ensures a smooth journey from concept to launch
          </p>
        </motion.div>

        {/* Interactive Process Timeline */}
        <div className="relative" ref={processRef}>
          {/* Step Indicators */}
          <div className="flex justify-between items-center max-w-4xl mx-auto mb-16 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400 -translate-y-1/2"></div>
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: processInView ? 1 : 0.8,
                  opacity: processInView ? 1 : 0,
                }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center relative transition-all duration-300 ${
                    index <= activeStep
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-900 border-2 border-gray-400"
                  }`}
                >
                  {index < activeStep ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="text-xl font-bold">{index + 1}</span>
                  )}

                  {/* Pulse animation for active step */}
                  {index === activeStep && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: ["0 0 0 0 rgba(37, 99, 235, 0.4)", "0 0 0 10px rgba(37, 99, 235, 0)"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    />
                  )}

                  {/* Step label */}
                  <div
                    className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium ${
                      index <= activeStep ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Active Step Content */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="p-0 overflow-hidden border border-gray-400 shadow-2xl">
              <div className="grid md:grid-cols-2">
                {/* Left Content - Visual */}
                <div className="bg-blue-600 p-8 md:p-12 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8 shadow-lg">
                      {React.createElement(processSteps[activeStep].icon, { className: "h-10 w-10" })}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      Step {activeStep + 1}: {processSteps[activeStep].title}
                    </h3>

                    <p className="text-xl text-white/90 mb-8 leading-relaxed">{processSteps[activeStep].description}</p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <span className="text-white font-medium">
                        Phase {activeStep + 1} of {processSteps.length}
                      </span>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"></div>
                </div>

                {/* Right Content - Details */}
                <div className="bg-white p-8 md:p-12">
                  <h4 className="text-xl font-bold text-black mb-6">What happens in this phase:</h4>

                  <div className="space-y-4">
                    {processSteps[activeStep].details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white shadow-md">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="text-lg text-gray-900">{detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4">
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
                          className="lucide lucide-lightbulb"
                        >
                          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                          <path d="M9 18h6" />
                          <path d="M10 22h4" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-black">Why this matters</h5>
                        <p className="text-gray-900">
                          A thorough {processSteps[activeStep].title.toLowerCase()} phase ensures your project has a
                          solid foundation for success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                activeStep === 0
                  ? "bg-white text-gray-900 cursor-not-allowed border border-gray-400"
                  : "bg-white text-blue-600 shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all border border-blue-600"
              }`}
            >
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
                className="lucide lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
              disabled={activeStep === processSteps.length - 1}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                activeStep === processSteps.length - 1
                  ? "bg-white text-gray-900 cursor-not-allowed border border-gray-400"
                  : "bg-white text-blue-600 shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all border border-blue-600"
              }`}
            >
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
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

