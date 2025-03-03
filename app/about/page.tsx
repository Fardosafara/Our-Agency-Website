"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Heart, Trophy } from "lucide-react"
import CountUp from "react-countup"
import Image from "next/image"

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

const teamMembers = [
  {
    name: "Fardosa Gedi",
    role: "Lead Developer & Software Engineer",
    image: "/founder1.jpeg",
  },
  {
    name: "Fardosa Abdullahi",
    role: "Creative Director & Software Engineer",
    image: "/founder2.jpeg",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-black font-semibold text-lg mb-4 block font-poppins">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 font-playfair">
            Transforming Digital Dreams Into Reality
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-poppins">
            In 2024, two best friends and software engineering graduates, both named Fardowsa, founded DosaWeb
            Solutions—a company born from their shared passion for technology and digital innovation. What started as
            late-night brainstorming sessions became a thriving business dedicated to building modern websites and
            offering strategic digital marketing services.
            <br />
            <br />
            Their mission? To help businesses create a strong online presence and drive growth through cutting-edge
            solutions in web development, SEO, social media management, and branding. With a focus on collaboration,
            creativity, and results, DosaWeb Solutions is more than a company—it's a partnership driven by passion and a
            vision for the future.
            <br />
            <br />
            Let's build something amazing together.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { number: 100, label: "Projects Delivered" },
              { number: 50, label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  <CountUp start={0} end={stat.number} duration={2.5} delay={0} suffix="+" />
                </div>
                <div className="text-black">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
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
                  <p className="text-black leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-blue-600 font-bold mb-4">Meet Our Founders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The creative minds and technical experts behind DosaWeb's success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-black">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

