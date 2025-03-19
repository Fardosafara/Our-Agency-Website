"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Code,
  LineChart,
  ShoppingCart,
  Megaphone,
  PenTool,
  Layers,
  Phone,
  Sparkles,
  Zap,
  Globe,
  Shield,
  Clock,
  ArrowUpRight,
} from "lucide-react"

// Glassmorphic card component
const GlassmorphicCard = ({ children, className = "" }) => (
  <div
    className={`relative backdrop-blur-md bg-white/80 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/40 overflow-hidden ${className}`}
  >
    {children}
  </div>
)

// Neumorphic card component
const NeumorphicCard = ({ children, className = "", isActive = false }) => (
  <div
    className={`relative rounded-2xl ${
      isActive
        ? "bg-gradient-to-br from-blue-50 to-white shadow-[inset_-8px_-8px_12px_rgba(255,255,255,0.9),inset_8px_8px_12px_rgba(37,99,235,0.1),0_0_0_1px_rgba(37,99,235,0.1)]"
        : "bg-gradient-to-br from-gray-50 to-white shadow-[8px_8px_16px_rgba(0,0,0,0.05),-8px_-8px_16px_rgba(255,255,255,0.8),0_0_0_1px_rgba(0,0,0,0.02)]"
    } ${className}`}
  >
    {children}
  </div>
)

// 3D Text component
const Text3D = ({ children, className = "" }) => (
  <span
    className={`relative text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-800 
    [text-shadow:0_1px_0_rgba(255,255,255,0.4),0_2px_0_rgba(255,255,255,0.3),0_3px_0_rgba(255,255,255,0.2),
    0_4px_0_rgba(255,255,255,0.1),0_12px_8px_rgba(0,0,0,0.1)] ${className}`}
  >
    {children}
  </span>
)

// Gradient mesh background
const GradientMeshBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 opacity-90"></div>
    <div className="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full filter blur-[120px] opacity-30 animate-pulse"></div>
    <div
      className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-blue-300 rounded-full filter blur-[120px] opacity-20 animate-pulse"
      style={{ animationDelay: "2s" }}
    ></div>
  </div>
)

// Animated service card with glassmorphic styling
const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative z-10 p-8 rounded-2xl h-full flex flex-col"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glassmorphic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg z-0"></div>

        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full translate-x-16 -translate-y-16 filter blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100/20 rounded-full -translate-x-12 translate-y-12 filter blur-xl"></div>

        <div className="relative z-10">
          <div className="mb-6 relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-md transform transition-transform group-hover:scale-110 duration-300">
              <service.icon className="h-8 w-8" />
            </div>
          </div>

          <motion.h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
            {service.title}
          </motion.h3>

          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

          <div className="space-y-3 mb-6 flex-grow">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0.8, x: 0 }}
                animate={isHovered ? { opacity: 1, x: 5 } : { opacity: 0.8, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto">
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <a
                href="mailto:dosaweb7@gmail.com"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
              >
                Request custom quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Process step component with 3D effect
const ProcessStep = ({ step, index, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center text-center relative"
      onClick={() => onClick(index)}
    >
      <NeumorphicCard
        isActive={isActive}
        className={`w-24 h-24 flex items-center justify-center mb-6 z-10 relative cursor-pointer transition-all duration-300 ${isActive ? "scale-110" : "hover:scale-105"}`}
      >
        <div className={`text-2xl font-bold ${isActive ? "text-blue-600" : "text-gray-700"}`}>{step.number}</div>

        {/* Animated ring for active step */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-blue-400"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(37, 99, 235, 0)",
                "0 0 0 4px rgba(37, 99, 235, 0.3)",
                "0 0 0 0 rgba(37, 99, 235, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}
      </NeumorphicCard>

      <motion.h3
        className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? "text-blue-600" : "text-gray-900"}`}
        animate={isActive ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {step.title}
      </motion.h3>

      <p className={`text-sm transition-colors duration-300 ${isActive ? "text-gray-700" : "text-gray-500"}`}>
        {step.description}
      </p>
    </motion.div>
  )
}

// Animated feature card
const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <GlassmorphicCard className="p-8 h-full border-l-2 border-blue-600 hover:border-l-4 transition-all duration-300">
        <div className="relative z-10">
          <motion.h3
            className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors"
            animate={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {feature.title}
          </motion.h3>

          <p className="text-gray-600">{feature.description}</p>

          {/* Decorative icon */}
          <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <ArrowUpRight className="h-12 w-12 text-blue-600" />
          </div>
        </div>
      </GlassmorphicCard>
    </motion.div>
  )
}

// Parallax section divider
const ParallaxDivider = ({ children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>

      {/* Animated shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[80px]"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-[80px]"
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">{children}</div>
    </motion.div>
  )
}

// Marquee text animation
const MarqueeText = ({ children, direction = 1, speed = 50 }) => {
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="whitespace-nowrap flex"
        animate={{
          x: direction > 0 ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 1000 / speed,
            ease: "linear",
          },
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="mx-4 text-xl font-medium text-blue-600/80">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Services() {
  // For scroll-triggered animations
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.8, 0])
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  // For process section interactivity
  const [activeProcessStep, setActiveProcessStep] = useState(0)

  // For mouse-following effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Auto-advance process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcessStep((prev) => (prev + 1) % 5)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites crafted with precision, designed to captivate your audience and drive meaningful engagement.",
      features: [
        "Custom design & development",
        "Responsive across all devices",
        "SEO-optimized architecture",
        "Performance-focused build",
      ],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Strategic campaigns that amplify your brand's voice and connect with your ideal audience, delivering measurable results.",
      features: [
        "Comprehensive strategy development",
        "Data-driven campaign management",
        "Advanced analytics & reporting",
        "Conversion rate optimization",
      ],
    },
    {
      icon: PenTool,
      title: "Brand Identity",
      description:
        "Distinctive visual identities that communicate your essence and values, creating lasting impressions in a crowded marketplace.",
      features: [
        "Logo & visual system design",
        "Brand strategy development",
        "Typography & color selection",
        "Brand guidelines creation",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Sophisticated online stores that transform browsers into buyers with seamless shopping experiences and optimized conversion paths.",
      features: [
        "Custom storefront development",
        "Secure payment integration",
        "Inventory management systems",
        "Mobile-optimized checkout",
      ],
    },
    {
      icon: LineChart,
      title: "SEO & Analytics",
      description:
        "Data-informed strategies that improve visibility, drive qualified traffic, and provide actionable insights for continuous growth.",
      features: [
        "Comprehensive SEO audits",
        "Keyword strategy development",
        "Technical SEO implementation",
        "Performance tracking",
      ],
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description:
        "Intuitive, elegant interfaces that delight users while achieving your business objectives through thoughtful, research-backed design.",
      features: [
        "User research & personas",
        "Information architecture",
        "Wireframing & prototyping",
        "Visual design & interaction",
      ],
    },
  ]

  const processSteps = [
    { 
      number: "01", 
      title: "Discovery", 
      description: "Understanding your business, audience, and objectives",
      image: "/discovery.jpeg" // Add the image path here
    },
    { 
      number: "02", 
      title: "Strategy", 
      description: "Developing a tailored approach to achieve your goals",
      image: "/strategy.jpeg" // Add the image path here
    },
    { 
      number: "03", 
      title: "Design", 
      description: "Creating compelling visuals and experiences",
      image: "/discovery1.jpeg" // Add the image path here
    },
    { 
      number: "04", 
      title: "Development", 
      description: "Building with precision and attention to detail",
      image: "/Development1.jpeg" // Add the image path here
    },
    { 
      number: "05", 
      title: "Launch & Growth", 
      description: "Ongoing support and optimization",
      image: "/deployment.jpeg" // Add the image path here
    },
  ]

  const features = [
    {
      title: "Strategic Approach",
      description: "We develop custom strategies tailored to your specific business goals and target audience.",
    },
    {
      title: "Creative Excellence",
      description:
        "Our design team creates visually stunning, emotionally resonant experiences that captivate and convert.",
    },
    {
      title: "Technical Mastery",
      description: "We leverage cutting-edge technologies and best practices to build robust, scalable solutions.",
    },
    {
      title: "Dedicated Partnership",
      description: "We function as an extension of your team, providing transparent communication throughout.",
    },
    {
      title: "Results-Driven",
      description: "Our focus is on delivering tangible business outcomes through data-informed strategies.",
    },
    {
      title: "Timely Delivery",
      description: "We respect your timelines and deliver exceptional quality work within agreed-upon schedules.",
    },
  ]

  return (
    <div className="relative pt-24 bg-white" ref={containerRef}>
      {/* Hero Section - Glassmorphism & Gradient Mesh */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <GradientMeshBackground />

        {/* Floating 3D objects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { size: 60, x: "20%", y: "20%", delay: 0 },
            { size: 40, x: "80%", y: "30%", delay: 1 },
            { size: 80, x: "70%", y: "70%", delay: 2 },
            { size: 30, x: "30%", y: "80%", delay: 3 },
            { size: 50, x: "10%", y: "60%", delay: 4 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/20 backdrop-blur-sm"
              style={{
                width: item.size,
                height: item.size,
                left: item.x,
                top: item.y,
                background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: item.delay,
                times: [0, 0.5, 1],
              }}
            />
          ))}
        </div>

        {/* Mouse-following effect */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-white/10 backdrop-blur-sm pointer-events-none hidden md:block"
          animate={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            mass: 0.5,
          }}
        />

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ opacity: opacity1, scale: scale1, y: y1 }}
            >
              <Badge className="mb-6 bg-white/20 text-white border-none px-4 py-1.5 text-sm backdrop-blur-sm">
                Our Services
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ opacity: opacity1, scale: scale1, y: y1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white"
            >
              Digital solutions <br />
              <span className="text-white/90">that</span>{" "}
              <Text3D className="text-6xl md:text-7xl lg:text-8xl">drive growth</Text3D>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ opacity: opacity1, scale: scale1, y: y1 }}
              className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl"
            >
              We craft exceptional digital experiences that captivate audiences and deliver measurable results for
              forward-thinking brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ opacity: opacity1, scale: scale1, y: y1 }}
            >
              <GlassmorphicCard className="inline-block p-1 backdrop-blur-md bg-white/10 border-white/30">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-white/90 shadow-lg text-lg px-8 py-6 relative overflow-hidden group"
                  >
                    <Link href="/contact" className="flex items-center relative z-10">
                      Discuss Your Project
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          ease: "easeInOut",
                          times: [0, 0.6, 1],
                        }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Link>

                    {/* Button hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </Button>
                </motion.div>
              </GlassmorphicCard>
            </motion.div>
          </div>
        </div>

        {/* Animated wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <motion.path
              d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 70C1248 80 1344 100 1392 110L1440 120V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
              fill="white"
              animate={{
                d: [
                  "M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 70C1248 80 1344 100 1392 110L1440 120V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z",
                  "M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 65C1248 60 1344 60 1392 60L1440 60V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z",
                  "M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 70C1248 80 1344 100 1392 110L1440 120V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z",
                ],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      </section>

      {/* Marquee Text Section */}
      <section className="py-6 bg-white overflow-hidden">
        <MarqueeText direction={1} speed={30}>
          Web Development • Digital Marketing • Brand Identity • E-Commerce • SEO & Analytics • UI/UX Design •
        </MarqueeText>
        <MarqueeText direction={-1} speed={25}>
          Custom Solutions • Responsive Design • User Experience • Performance Optimization • Conversion Rate •
        </MarqueeText>
      </section>

      {/* Services Overview with 3D cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />

        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50 filter blur-[100px] opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-600 px-4 py-1.5 border-none">Our Expertise</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <Text3D>Digital Services</Text3D>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a full spectrum of digital solutions tailored to elevate your brand and achieve your business
              objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Divider */}
      <ParallaxDivider>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <span className="text-white font-medium">Our Approach</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We don't just build websites, <br />
            we build <Text3D className="text-white">digital experiences</Text3D>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our process is designed to create solutions that not only look great but drive real business results.
          </p>
        </motion.div>
      </ParallaxDivider>

      {/* Process Section with interactive timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />

        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-50 filter blur-[100px] opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-600 px-4 py-1.5 border-none">Our Process</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              A Streamlined Process for <Text3D>Exceptional Results</Text3D>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our refined methodology ensures exceptional results through a collaborative, strategic approach.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Animated timeline line */}
              <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200 hidden md:block"></div>
              <motion.div
                className="absolute left-0 top-1/2 h-0.5 bg-blue-600 hidden md:block"
                style={{ width: `${(activeProcessStep / (processSteps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              <div className="grid md:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={index}
                    step={step}
                    index={index}
                    isActive={activeProcessStep === index}
                    onClick={setActiveProcessStep}
                  />
                ))}
              </div>
            </div>

            {/* Process details */}
            <motion.div
              key={activeProcessStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <GlassmorphicCard className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg mb-6">
                      {processSteps[activeProcessStep].number}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {processSteps[activeProcessStep].title} Phase
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {activeProcessStep === 0 &&
                        "We dive deep to understand your business, audience, and objectives. This foundational phase ensures we create solutions that truly address your needs."}
                      {activeProcessStep === 1 &&
                        "Based on our discoveries, we develop a comprehensive strategy tailored to your specific goals, outlining the roadmap for your digital success."}
                      {activeProcessStep === 2 &&
                        "Our creative team crafts visually stunning designs that align with your brand identity and create meaningful connections with your audience."}
                      {activeProcessStep === 3 &&
                        "We bring designs to life with clean, efficient code, ensuring your digital solution is robust, scalable, and performs flawlessly."}
                      {activeProcessStep === 4 &&
                        "We don't just launch and leave. We provide ongoing support, optimization, and strategic guidance to ensure continued growth and success."}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Sparkles className="h-5 w-5" />
                      <span className="font-medium">Key activities in this phase:</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {activeProcessStep === 0 &&
                        [
                          "Stakeholder interviews",
                          "Market & competitor analysis",
                          "User research & persona development",
                          "Business goals alignment",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      {activeProcessStep === 1 &&
                        [
                          "Strategic planning sessions",
                          "Technical requirements definition",
                          "Content strategy development",
                          "Project roadmap creation",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      {activeProcessStep === 2 &&
                        [
                          "Wireframing & prototyping",
                          "Visual design exploration",
                          "User interface design",
                          "Design system creation",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      {activeProcessStep === 3 &&
                        [
                          "Frontend development",
                          "Backend implementation",
                          "Content integration",
                          "Quality assurance testing",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      {activeProcessStep === 4 &&
                        [
                          "Launch preparation & execution",
                          "Post-launch monitoring",
                          "Performance optimization",
                          "Ongoing support & maintenance",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <Image
                        src={processSteps[activeProcessStep].image} // Dynamic image path
                        alt={processSteps[activeProcessStep].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                      {activeProcessStep === 0 && <Zap className="h-6 w-6" />}
                      {activeProcessStep === 1 && <LineChart className="h-6 w-6" />}
                      {activeProcessStep === 2 && <PenTool className="h-6 w-6" />}
                      {activeProcessStep === 3 && <Code className="h-6 w-6" />}
                      {activeProcessStep === 4 && <Globe className="h-6 w-6" />}
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100+", label: "Projects Completed", icon: Globe },
              { value: "99%", label: "Client Satisfaction", icon: CheckCircle },
              { value: "24/7", label: "Client Support", icon: Clock },
              { value: "100%", label: "Secure Process", icon: Shield },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <NeumorphicCard className="p-6 text-center h-full">
                  <div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </NeumorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <GradientMeshBackground />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>

            <p className="text-xl text-white/80 mb-10">
              Contact us today for a personalized consultation. Our team will create a tailored solution designed to
              meet your specific needs.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <GlassmorphicCard className="p-1 backdrop-blur-md bg-white/10 border-white/30">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-white/90 shadow-lg text-lg px-8 py-6 relative overflow-hidden group"
                  >
                    <Link href="/contact" className="flex items-center relative z-10">
                      Schedule a Consultation
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          ease: "easeInOut",
                          times: [0, 0.6, 1],
                        }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Link>

                    {/* Button hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </Button>
                </motion.div>
              </GlassmorphicCard>

              <GlassmorphicCard className="p-1 backdrop-blur-md bg-white/10 border-white/30">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                  >
                    <Link href="tel:+254702383309" className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us Directly
                    </Link>
                  </Button>
                </motion.div>
              </GlassmorphicCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - With glassmorphic cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />

        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-50 filter blur-[100px] opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-600 px-4 py-1.5 border-none">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              The <Text3D>DosaWeb</Text3D> Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart is our unwavering commitment to excellence and our unique approach to digital
              solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Neumorphic style */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <NeumorphicCard className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Discuss Your Project?</h2>

              <p className="text-lg text-gray-600 mb-10">
                Contact us today for a personalized consultation and custom quote tailored to your specific
                requirements.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg text-lg px-8 py-6 relative overflow-hidden group"
                >
                  <Link href="/contact" className="flex items-center relative z-10">
                    Get in Touch
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        ease: "easeInOut",
                        times: [0, 0.6, 1],
                      }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </NeumorphicCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}