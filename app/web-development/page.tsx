"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Smartphone, Globe, ShoppingCart, Zap, Server, CheckCircle, Sparkles } from "lucide-react"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { ThreeDCard } from "@/components/3d-card"

export default function WebDevelopmentPage() {
  // Parallax scrolling effect
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  const technologies = [
    { name: "Javascript", icon: "/javascript1.webp", description: "Building interactive UIs" },
    { name: "React", icon: "/reactjs.webp", description: "Building interactive UIs" },
    { name: "Next.js", icon: "/nextjs.webp", description: "Server-side rendering & static generation" },
    { name: "python", icon: "/python.webp", description: "Backend development" },
    { name: "Node.js", icon: "/nodejs.webp", description: "Backend development" },
    { name: "TypeScript", icon: "/type.webp", description: "Type-safe code" },
    { name: "Tailwind CSS", icon: "/taicss.webp", description: "Utility-first styling" },
    { name: "SQL", icon: "/sql.webp", description: "SQL database" },
    { name: "Mongodb", icon: "/mongodb.webp", description: "No SQL database" },
  ]

  const services = [
    {
      title: "Custom Website Development",
      description: "Tailor-made websites designed to meet your specific business needs and goals.",
      icon: Globe,
      features: [
        "Responsive design for all devices",
        "SEO-friendly architecture",
        "Fast loading speeds",
        "Custom functionality",
      ],
    },
    {
      title: "E-commerce Solutions",
      description: "Powerful online stores that drive sales and provide seamless shopping experiences.",
      icon: ShoppingCart,
      features: ["Secure payment processing", "Inventory management", "Customer accounts", "Order tracking"],
    },
    {
      title: "Web Applications",
      description: "Complex web applications that solve specific business problems and improve efficiency.",
      icon: Code,
      features: ["User authentication", "Real-time updates", "Data visualization", "API integrations"],
    },
    {
      title: "Mobile-First Development",
      description: "Websites optimized for mobile users, ensuring great experiences across all devices.",
      icon: Smartphone,
      features: [
        "Touch-friendly interfaces",
        "Optimized performance",
        "Progressive Web Apps (PWAs)",
        "Responsive layouts",
      ],
    },
    {
      title: "Performance Optimization",
      description: "Speed up your existing website to improve user experience and search rankings.",
      icon: Zap,
      features: ["Core Web Vitals improvement", "Image optimization", "Code minification", "Caching strategies"],
    },
    {
      title: "API Development & Integration",
      description: "Connect your website with third-party services or create custom APIs for your business.",
      icon: Server,
      features: ["RESTful API design", "Third-party integrations", "Authentication & security", "Documentation"],
    },
  ]

  const process = [
    {
      title: "Discovery & Planning",
      description:
        "We start by understanding your business, goals, and target audience to create a strategic foundation for your web project.",
      number: "01",
    },
    {
      title: "Design & Prototyping",
      description:
        "Our designers create wireframes and interactive prototypes to visualize the user experience before development begins.",
      number: "02",
    },
    {
      title: "Development",
      description:
        "Our developers bring the designs to life using modern technologies and best practices for performance and security.",
      number: "03",
    },
    {
      title: "Testing & Quality Assurance",
      description: "We rigorously test your website across devices and browsers to ensure a flawless user experience.",
      number: "04",
    },
    {
      title: "Launch & Training",
      description: "We deploy your website and provide training on how to manage and update your content.",
      number: "05",
    },
    {
      title: "Ongoing Support",
      description:
        "Our relationship doesn't end at launch. We provide ongoing support and maintenance to keep your site running smoothly.",
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
                  Web Development
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Cutting-Edge{" "}
                <span className="relative inline-block">
                  Web Solutions
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
                We build fast, responsive, and user-friendly websites that drive business growth and deliver exceptional
                user experiences.
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
                    Start Your Project
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
              <div className="absolute -inset-4 bg-white rounded-2xl blur-xl" />
              <ThreeDCard
                intensity={15}
                className="bg-white/5 backdrop-blur-sm border border-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src="/Development.jpg" alt="Web Development" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <Code className="h-6 w-6" />
                </motion.div>
              </ThreeDCard>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* Technologies Section */}
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
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-1.5">Our Tech Stack</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Powered by <span className="text-blue-600">Modern Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest technologies to build fast, scalable, and maintainable web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                      <Image
                        src={tech.icon || `/placeholder.svg?height=64&width=64`}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-blue-800">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
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
              Comprehensive <span className="text-blue-600">Web Development</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple websites to complex web applications, we have the expertise to bring your vision to life
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
              How We <span className="text-blue-600">Build</span> Your Website
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven development process ensures a smooth journey from concept to launch
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
              <span className="text-white font-medium">Ready to Get Started?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Your Next Digital Experience Together</h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you need a simple website or a complex web application, we have the expertise to bring your vision
              to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/website-planning" className="flex items-center">
                  Start Your Project
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

