"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Palette, Type, ImageIcon, Layers, PenTool, Compass, CheckCircle, Sparkles } from "lucide-react"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { ThreeDCard } from "@/components/3d-card"

export default function BrandIdentityPage() {
  // Parallax scrolling effect
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  const services = [
    {
      title: "Logo Design",
      description: "Create a distinctive visual mark that represents your brand's essence and values.",
      icon: PenTool,
      features: [
        "Multiple concept options",
        "Vector-based designs",
        "Color variations",
        "Responsive versions",
        "File formats for all uses",
      ],
    },
    {
      title: "Brand Guidelines",
      description: "Establish clear rules for consistent brand application across all touchpoints.",
      icon: Compass,
      features: [
        "Logo usage specifications",
        "Color palette definitions",
        "Typography guidelines",
        "Imagery style guide",
        "Brand voice and tone",
      ],
    },
    {
      title: "Visual Identity System",
      description: "Develop a cohesive visual language that communicates your brand personality.",
      icon: Layers,
      features: [
        "Business cards & stationery",
        "Marketing materials",
        "Digital assets",
        "Signage & environmental design",
        "Brand patterns & textures",
      ],
    },
    {
      title: "Typography Selection",
      description: "Choose typefaces that reflect your brand character and enhance readability.",
      icon: Type,
      features: [
        "Primary & secondary typefaces",
        "Font hierarchy system",
        "Custom font development",
        "Web font implementation",
        "Typography guidelines",
      ],
    },
    {
      title: "Color Strategy",
      description: "Define a strategic color palette that evokes the right emotions and associations.",
      icon: Palette,
      features: [
        "Primary & secondary colors",
        "Color psychology analysis",
        "Accessibility considerations",
        "Color codes for all mediums",
        "Application examples",
      ],
    },
    {
      title: "Brand Photography",
      description: "Establish a distinctive visual style for all brand imagery and photography.",
      icon: ImageIcon,
      features: [
        "Photography style guide",
        "Art direction",
        "Photo editing templates",
        "Stock photo curation",
        "Custom photoshoot direction",
      ],
    },
  ]

  const process = [
    {
      title: "Discovery & Research",
      description:
        "We dive deep into understanding your business, audience, competitors, and industry to inform our creative strategy.",
      number: "01",
    },
    {
      title: "Strategy Development",
      description:
        "We define your brand positioning, personality, values, and messaging to create a solid foundation for your visual identity.",
      number: "02",
    },
    {
      title: "Creative Exploration",
      description:
        "Our designers explore multiple creative directions based on the strategic foundation we've established.",
      number: "03",
    },
    {
      title: "Concept Refinement",
      description: "We refine the selected direction, perfecting every detail of your brand identity system.",
      number: "04",
    },
    {
      title: "Brand Guidelines",
      description: "We document all elements of your brand identity with clear guidelines for consistent application.",
      number: "05",
    },
    {
      title: "Implementation Support",
      description:
        "We provide ongoing support to ensure your new brand identity is implemented effectively across all touchpoints.",
      number: "06",
    },
  ]

  // const brandShowcase = [
  //   {
  //     name: "Eco Essentials",
  //     industry: "Sustainable Products",
  //     image: "/brand-identity/brand1.jpg",
  //   },
  //   {
  //     name: "Fusion Finance",
  //     industry: "Financial Services",
  //     image: "/brand-identity/brand2.jpg",
  //   },
  //   {
  //     name: "Harvest Kitchen",
  //     industry: "Restaurant",
  //     image: "/brand-identity/brand3.jpg",
  //   },
  //   {
  //     name: "Pulse Fitness",
  //     industry: "Health & Wellness",
  //     image: "/brand-identity/brand4.jpg",
  //   },
  // ]

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
                  Brand Identity
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Craft a{" "}
                <span className="relative inline-block">
                  Memorable Brand
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
                We create distinctive brand identities that communicate your values, connect with your audience, and set
                you apart from competitors.
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
                    Start Your Brand Project
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
                  className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
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
              <div className="absolute -inset-4 bg-white  to-blue-400/20 rounded-2xl blur-xl" />
              <ThreeDCard
                intensity={15}
                className="bg-white/5 backdrop-blur-sm border border-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src="/branding.jpg" alt="Brand Identity" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <Palette className="h-6 w-6" />
                </motion.div>
              </ThreeDCard>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* Brand Showcase Section
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-1.5">Our Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Brands We've <span className="text-blue-600">Transformed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent brand identity projects across various industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandShowcase.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <ThreeDCard className="h-full">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                    <Image
                      src={brand.image || `/placeholder.svg?height=400&width=400`}
                      alt={brand.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                          <h3 className="text-white font-bold">{brand.name}</h3>
                          <p className="text-white/80 text-sm">{brand.industry}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-blue-800">{brand.name}</h3>
                  <p className="text-gray-600">{brand.industry}</p>
                </ThreeDCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
              Comprehensive <span className="text-blue-600">Brand Identity</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From logo design to complete visual identity systems, we offer everything you need to build a strong brand
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
              How We <span className="text-blue-600">Build</span> Your Brand
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven branding process ensures we create a distinctive and effective brand identity
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
              <span className="text-white font-medium">Ready to Transform Your Brand?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create a Brand Identity That Stands Out</h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you're starting from scratch or refreshing your existing brand, we're here to help you make a
              lasting impression.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/website-planning" className="flex items-center">
                  Start Your Brand Project
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
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
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

