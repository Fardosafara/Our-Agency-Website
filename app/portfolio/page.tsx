"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

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

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white from-white to-gray-50">
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
          <p className="text-xl text-gray-600">Discover how we've helped businesses transform their digital presence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12">
            <CardContent className="space-y-6">
              <h3 className="text-3xl font-bold">Ready to Start Your Project?</h3>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Let's collaborate to bring your digital vision to life
              </p>
              <Button
                variant="outline"
                size="lg"
                className="mt-6 border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="/contact">Start a Conversation</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

