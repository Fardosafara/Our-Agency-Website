"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Trophy, Users, Award, Lightbulb, Zap, Star, ArrowRight, CheckCircle, Sparkles } from "lucide-react"

// Core values
const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, treating their goals as our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're genuinely passionate about technology and helping businesses succeed online.",
  },
]

// Milestones
const milestones = [
  {
    year: "2024",
    title: "Company Founded",
    description: "DosaWeb Solutions was founded by two friends with a shared vision for digital excellence.",
  },
  {
    year: "2024",
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered a project that exceeded expectations.",
  },
  {
    year: "2024",
    title: "Innovative Approach",
    description: "Developed our signature approach to web development and digital marketing solutions.",
  },
]

// Awards and recognitions
const awards = [
  {
    title: "Best Web Design Agency",
    organization: "Digital Excellence Awards",
    year: "2024",
    icon: Trophy,
  },
  {
    title: "Top UX Design Studio",
    organization: "UX Design Awards",
    year: "2024",
    icon: Star,
  },
  {
    title: "Innovation in Digital Marketing",
    organization: "MarTech Breakthrough Awards",
    year: "2024",
    icon: Lightbulb,
  },
  {
    title: "Rising Star Agency",
    organization: "Clutch Top Agencies",
    year: "2024",
    icon: Sparkles,
  },
]

// Particle background component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-600/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

export default function About() {
  const [activeTab, setActiveTab] = useState("story")
  const [scrollY, setScrollY] = useState(0)

  // Parallax scrolling effect
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale1 = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className="relative overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Office Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/luxury-office.jpg" alt="Luxury Office" fill className="object-cover opacity-90" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-blue-900/30"></div>
        </div>

        {/* Particle background */}
        <ParticleBackground />

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[100px]"
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
            className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px]"
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

        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
            style={{
              opacity: opacity1,
              scale: scale1,
            }}
          >
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <Badge className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
                  About Us
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
              >
                We're{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 text-transparent bg-clip-text">
                    DosaWeb Solutions
                  </span>
                  <motion.span
                    className="absolute bottom-2 left-0 w-full h-2 bg-blue-600/30 rounded-full"
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
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
              >
                Crafting digital experiences that elevate brands and drive exceptional results
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center"
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group text-lg px-8 py-6"
                >
                  <Link href="/contact" className="flex items-center">
                    Work With Us
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
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px] text-white"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          {/* Tabs Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <Tabs defaultValue="story" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid grid-cols-2 w-full max-w-md bg-gray-100 p-1 rounded-full">
                  <TabsTrigger
                    value="story"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all duration-300"
                  >
                    Our Story
                  </TabsTrigger>
                  <TabsTrigger
                    value="mission"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all duration-300"
                  >
                    Mission & Values
                  </TabsTrigger>
                </TabsList>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="story" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="text-4xl font-bold mb-8 text-black leading-tight">
                          From Vision to <span className="text-blue-600">Digital Excellence</span>
                        </h2>
                        <p className="text-gray-800 mb-6 leading-relaxed text-lg">
                          In 2024, two best friends and software engineering graduates, both named Fardosa, founded
                          DosaWeb Solutions—a company born from their shared passion for technology and digital
                          innovation. What started as late-night brainstorming sessions became a thriving business
                          dedicated to building modern websites and offering strategic digital marketing services.
                        </p>
                        <p className="text-gray-800 mb-8 leading-relaxed text-lg">
                          Our mission? To help businesses create a strong online presence and drive growth through
                          cutting-edge solutions in web development, SEO, social media management, and branding. With a
                          focus on collaboration, creativity, and results, DosaWeb Solutions is more than a company—it's
                          a partnership driven by passion and a vision for the future.
                        </p>

                        {/* Awards */}
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                          <h3 className="text-xl font-bold mb-4 text-black">Awards & Recognition</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {awards.slice(0, 4).map((award, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3"
                              >
                                <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 flex-shrink-0">
                                  <award.icon className="h-4 w-4" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-black text-sm">{award.title}</h4>
                                  <p className="text-gray-600 text-xs">
                                    {award.organization}, {award.year}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {/* Timeline */}
                        <div className="relative">
                          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/5 to-blue-600/5 rounded-3xl blur-xl transform -rotate-1"></div>

                          <div className="relative">
                            <h3 className="text-2xl font-bold mb-8 text-black">Our Journey</h3>

                            <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-blue-600 before:to-blue-600">
                              {milestones.map((milestone, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.1 }}
                                  viewport={{ once: true }}
                                  className="pl-16 relative"
                                >
                                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                    {milestone.year.substring(2)}
                                  </div>
                                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    <h3 className="text-xl font-bold text-black mb-2">{milestone.title}</h3>
                                    <p className="text-gray-600">{milestone.description}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            {/* Future */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.6 }}
                              viewport={{ once: true }}
                              className="mt-12 pl-16 relative"
                            >
                              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                <Sparkles className="h-6 w-6" />
                              </div>
                              <div className="bg-gradient-to-r from-blue-600 to-blue-600 p-6 rounded-xl text-white shadow-lg">
                                <h3 className="text-xl font-bold mb-2">The Future</h3>
                                <p className="text-blue-100">
                                  As we continue to grow, our commitment to excellence and innovation remains
                                  unwavering. We're excited about the future and the opportunity to help more businesses
                                  thrive in the digital landscape.
                                </p>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </TabsContent>

                  <TabsContent value="mission" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="text-4xl font-bold mb-8 text-black leading-tight">
                          Our <span className="text-blue-600">Mission</span> & Vision
                        </h2>

                        <div className="relative mb-12">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl blur opacity-25"></div>
                          <div className="relative bg-white p-8 rounded-xl border border-blue-100 shadow-lg">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mb-6">
                              <Star className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
                            <p className="text-xl text-gray-800 italic leading-relaxed">
                              "To empower businesses with innovative digital solutions that drive growth, enhance brand
                              visibility, and create meaningful connections with their audience."
                            </p>
                          </div>
                        </div>

                        <div className="relative mb-12">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl blur opacity-25"></div>
                          <div className="relative bg-white p-8 rounded-xl border border-blue-100 shadow-lg">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mb-6">
                              <Lightbulb className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-black">Our Vision</h3>
                            <p className="text-xl text-gray-800 italic leading-relaxed">
                              "To be the catalyst that transforms ideas into impactful digital experiences, setting new
                              standards for excellence in web development and digital marketing."
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 p-6 bg-blue-50 rounded-xl mb-8">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 flex items-center justify-center text-white shadow-lg">
                            <Zap className="h-7 w-7" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-black mb-1">What Sets Us Apart</h3>
                            <p className="text-gray-700">
                              Our unique blend of technical expertise and creative vision allows us to deliver solutions
                              that not only look great but also drive real business results.
                            </p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-blue-600 p-8 rounded-xl text-white shadow-lg">
                          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                          <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                            We're committed to delivering exceptional quality, maintaining transparent communication,
                            and fostering long-term partnerships with our clients. Your success is our success.
                          </p>
                          <div className="flex items-center text-white font-medium">
                            <Link href="/contact" className="flex items-center group">
                              <span>Start your journey with us</span>
                              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h2 className="text-4xl font-bold mb-8 text-black leading-tight">
                          Our Core <span className="text-blue-600">Values</span>
                        </h2>

                        <div className="grid grid-cols-1 gap-8">
                          {values.map((value, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ y: -5 }}
                              className="group"
                            >
                              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-blue-600 group-hover:w-full group-hover:opacity-10 transition-all duration-500"></div>
                                <div className="flex items-start gap-6">
                                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-600 flex items-center justify-center text-white shadow-lg">
                                    <value.icon className="h-8 w-8" />
                                  </div>
                                  <div>
                                    <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-blue-600 transition-colors duration-300">
                                      {value.title}
                                    </h3>
                                    <p className="text-gray-700 text-lg">{value.description}</p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          viewport={{ once: true }}
                          className="mt-12"
                        >
                          <div className="bg-black p-8 rounded-xl text-white shadow-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
                            <div className="relative z-10">
                              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                                <CheckCircle className="h-6 w-6 text-blue-400" />
                              </div>
                              <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                              <p className="text-gray-300 mb-6">
                                Every project we undertake goes through a rigorous quality assurance process to ensure
                                it meets our high standards and exceeds client expectations.
                              </p>
                              <div className="grid grid-cols-2 gap-4">
                                {[
                                  "Thorough testing",
                                  "Performance optimization",
                                  "Cross-browser compatibility",
                                  "Responsive design verification",
                                ].map((item, i) => (
                                  <div key={i} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center">
                                      <CheckCircle className="h-3 w-3 text-blue-400" />
                                    </div>
                                    <span className="text-sm text-gray-300">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
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
              <span className="text-white font-medium">Ready to Transform Your Digital Presence?</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Create Something Amazing Together</h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you need a stunning website, a powerful digital marketing strategy, or a complete brand identity,
              we're here to help you achieve your goals.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group text-lg px-8 py-6"
            >
              <Link href="/contact" className="flex items-center">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

