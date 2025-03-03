"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Heart,
  Trophy,
  Megaphone,
  Share2,
  Globe,
  Package,
  Sparkles,
  ExternalLink,
} from "lucide-react"
import CountUp from "react-countup"
import { AspectRatio } from "@/components/ui/aspect-ratio"

// Define features directly in home page
const features = [
  {
    icon: Code,
    title: "Innovative Solutions",
    description: "We craft cutting-edge digital solutions that push the boundaries of what's possible online.",
  },
  {
    icon: Heart,
    title: "Passionate Team",
    description:
      "Our team brings together passion, creativity, and technical expertise to deliver exceptional results.",
  },
  {
    icon: Trophy,
    title: "Proven Success",
    description: "With countless successful projects, we've helped businesses achieve their digital dreams.",
  },
]

// Define services directly in home page
const services = [
  {
    icon: Megaphone,
    title: "Google Ads Campaign",
    price: "$10/day",
    subtitle: "Full Month: $300",
    alternatePrice: "Budget Option: $160/month (4 days/week)",
    features: [
      "Setup & Optimization of Google Ads",
      "Keyword Research & Audience Targeting",
      "Performance Tracking & Reporting",
    ],
    gradient: "from-blue-600 to-black",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    price: "$150/month",
    features: [
      "Content Creation (Posters, Graphics)",
      "Meta Advertisements",
      "Engagement Tracking & Analytics",
      "Community Management & Growth Strategy",
    ],
    gradient: "from-blue-600 to-black",
  },
  {
    icon: Globe,
    title: "Website Development",
    price: "$1000",
    subtitle: "One-Time Payment",
    features: [
      "Website Design & Development",
      "Backend Functionality",
      "Domain & Hosting Setup",
      "Google My Business Registration",
      "Technical SEO Optimization",
    ],
    gradient: "from-blue-600 to-black",
  },
  {
    icon: Package,
    title: "Full Digital Package",
    price: "$1450",
    subtitle: "Best Value",
    features: [
      "1 Month Google Ads Campaign",
      "Full Social Media Management",
      "Complete Website Development",
      "Backend & SEO Setup",
      "Google Business Integration",
    ],
    isPopular: true,
    gradient: "from-blue-600 to-black",
  },
]

// Define projects directly in home page
const projects = [
  {
    title: "Hospital",
    category: "Web Development",
    description: "A fully integrated healthcare website to streamline hospital operations.",
    image: "/portfolio3.jpeg",
    link: "https://complete-ten.vercel.app/",
  },
  {
    title: "Travel Agency",
    category: "Web Development",
    description: "A dynamic and user-friendly website for effortless travel booking and exploration.",
    image: "/portfolio2.jpeg",
    link: "https://ewangan-tour-safaris-1nqj.vercel.app/",
  },
  {
    title: "Event Planner",
    category: "Web Development",
    description: "An intuitive event planner platform showcasing past events and seamless booking.",
    image: "/portfolio1.jpeg",
    link: "https://trium-events.vercel.app/",
  },
  {
    title: "Hospital",
    category: "Web Development",
    description: "A cutting-edge hospital website with seamless patient and doctor interaction.",
    image: "/portfolio5.jpeg",
    link: "https://www.mnqcare.com/",
  },
]

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Crafting Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl"
            >
              We transform ideas into powerful digital experiences that captivate, engage, and deliver results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="text-lg text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-white border-white text-blue-600 hover:bg-white hover:text-blue-600 w-full sm:w-auto"
              >
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20"
            >
              {[
                { number: 100, label: "Projects Completed" },
                { number: 50, label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {statsInView ? <CountUp start={0} end={stat.number} duration={2} suffix="+" /> : "0"}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <span className="text-black font-semibold text-lg mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">
              Transforming Digital Dreams Into Reality
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              In 2024, two best friends and software engineering graduates, both named Fardowsa, founded DosaWeb
              Solutions—a company born from their shared passion for technology and digital innovation.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Digital Marketing Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive packages designed to boost your online presence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.price}</p>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-black font-semibold text-lg mb-4 block">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Our Portfolio</h2>
            <p className="text-xl text-gray-600">
              Discover how we've helped businesses transform their digital presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group">
                  <CardContent className="p-0">
                    <AspectRatio ratio={16 / 9}>
                      <div className="relative h-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <p className="text-sm font-medium text-white mb-2">{project.category}</p>
                          <h3 className="text-2xl font-bold text-blue-600 mb-2">{project.title}</h3>
                          <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                          <Button
                            variant="outline"
                            className="self-start border-white bg-transparent text-white hover:bg-white hover:text-blue-600"
                            asChild
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              View Project
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </AspectRatio>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-black font-semibold text-lg mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your digital presence? We'd love to hear from you!
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
              <div className="inline-flex items-center gap-2 mb-6 bg-white/10 px-4 py-2 rounded-full">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <span className="text-white font-medium">Why Choose Our Package?</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Transform Your Digital Presence Today</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Get everything you need to grow your business online with our affordable and flexible pricing options
              </p>
              <Button variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/contact">Get Started Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

