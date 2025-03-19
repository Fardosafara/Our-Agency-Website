"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  ArrowLeft,
  Megaphone,
  LineChart,
  Share2,
  BarChart,
  Target,
  Mail,
  CheckCircle,
  Sparkles,
} from "lucide-react"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { ThreeDCard } from "@/components/3d-card"

export default function DigitalMarketingPage() {
  // Parallax scrolling effect
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  // 3D Poster Carousel
  const [currentPoster, setCurrentPoster] = useState(0)
  const posters = [
    {
      image: "/poster1.jpeg",
      title: "Summer Sale Campaign",
      client: "Fashion Retailer",
    },
    {
      image: "/poster2.jpeg",
      title: "Product Launch",
      client: "Tech Startup",
    },
    {
      image: "/poster3.jpeg",
      title: "Holiday Promotion",
      client: "E-commerce Store",
    },
    {
      image: "/poster4.jpeg",
      title: "Brand Awareness",
      client: "Lifestyle Brand",
    },
    {
      image: "/poster5.jpeg",
      title: "Event Announcement",
      client: "Corporate Client",
    },
    {
      image: "/poster6.jpeg",
      title: "Summer Sale Campaign",
      client: "Fashion Retailer",
    },
    {
      image: "/poster7.jpeg",
      title: "Product Launch",
      client: "Tech Startup",
    },
    {
      image: "/poster8.jpeg",
      title: "Holiday Promotion",
      client: "E-commerce Store",
    },
    {
      image: "/poster9.jpeg",
      title: "Brand Awareness",
      client: "Lifestyle Brand",
    },
    {
      image: "/poster10.jpeg",
      title: "Event Announcement",
      client: "Corporate Client",
    },
  ]

  const nextPoster = () => {
    setCurrentPoster((prev) => (prev === posters.length - 1 ? 0 : prev + 1))
  }

  const prevPoster = () => {
    setCurrentPoster((prev) => (prev === 0 ? posters.length - 1 : prev - 1))
  }

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your visibility in search results and drive organic traffic to your website.",
      icon: Target,
      features: [
        "Keyword research and optimization",
        "On-page SEO improvements",
        "Technical SEO audits",
        "Content strategy development",
        "Link building campaigns",
      ],
    },
    {
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across social platforms.",
      icon: Share2,
      features: [
        "Platform strategy and setup",
        "Content creation and scheduling",
        "Community management",
        "Paid social campaigns",
        "Performance analytics",
      ],
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Drive targeted traffic and conversions with strategic paid advertising campaigns.",
      icon: Megaphone,
      features: [
        "Google Ads management",
        "Social media advertising",
        "Display and remarketing",
        "Landing page optimization",
        "Conversion tracking",
      ],
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and build customer loyalty with personalized email campaigns.",
      icon: Mail,
      features: [
        "Email strategy development",
        "Campaign design and copywriting",
        "Automation workflows",
        "List segmentation",
        "Performance analysis",
      ],
    },
    {
      title: "Content Marketing",
      description: "Attract and engage your target audience with valuable, relevant content.",
      icon: LineChart,
      features: [
        "Content strategy development",
        "Blog writing and management",
        "Infographics and visual content",
        "Video content production",
        "Content distribution",
      ],
    },
    {
      title: "Analytics & Reporting",
      description: "Gain insights into your marketing performance and make data-driven decisions.",
      icon: BarChart,
      features: [
        "Custom dashboard setup",
        "Regular performance reports",
        "Conversion tracking",
        "ROI analysis",
        "Competitive benchmarking",
      ],
    },
  ]

  const process = [
    {
      title: "Research & Strategy",
      description:
        "We analyze your business, competitors, and target audience to develop a tailored marketing strategy.",
      number: "01",
    },
    {
      title: "Campaign Development",
      description: "Our team creates compelling campaigns designed to reach your specific marketing objectives.",
      number: "02",
    },
    {
      title: "Implementation",
      description: "We execute your campaigns across the appropriate channels with precision and attention to detail.",
      number: "03",
    },
    {
      title: "Monitoring & Optimization",
      description: "We continuously monitor performance and make data-driven adjustments to maximize results.",
      number: "04",
    },
    {
      title: "Reporting & Analysis",
      description: "Regular reports provide transparent insights into campaign performance and ROI.",
      number: "05",
    },
    {
      title: "Refinement & Growth",
      description: "We use learnings to refine strategies and identify new opportunities for growth.",
      number: "06",
    },
  ]

  return (
    <div className="relative pt-24" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <Badge className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
                  Digital Marketing
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Strategic{" "}
                <span className="relative inline-block">
                  Marketing Solutions
                  <motion.span
                    className="absolute bottom-2 left-0 w-full h-2 bg-blue-400/30 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-blue-100 mb-8 leading-relaxed"
              >
                Drive growth, increase brand awareness, and connect with your target audience through data-driven
                digital marketing strategies.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="/website-planning" className="flex items-center">
                    Start Your Campaign
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                 className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="/portfolio" className="flex items-center">
                    View Our Work
                  </Link>
                </Button> */}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-white to-blue-400/20 rounded-2xl blur-xl" />
              <ThreeDCard
                intensity={15}
                className="bg-white/5 backdrop-blur-sm border border-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/digimark.jpg"
                    alt="Digital Marketing"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <Megaphone className="h-6 w-6" />
                </motion.div>
              </ThreeDCard>
            </motion.div>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>
    
      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-1.5">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive <span className="text-blue-600">Digital Marketing</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From SEO to social media, we offer a full range of digital marketing services to help you reach your goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <GlassMorphicCard className="border border-blue-50">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 mb-6 text-white shadow-lg">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassMorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-1.5">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              How We <span className="text-blue-600">Drive Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven marketing process ensures we deliver measurable results for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                  <CardContent className="p-6 md:p-8">
                    <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-blue-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10" />
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">Ready to Grow Your Business?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Create Your Next Successful Marketing Campaign
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you need a complete marketing strategy or help with specific channels, we're here to help you
              achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/website-planning" className="flex items-center">
                  Start Your Campaign
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/contact" className="flex items-center">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

