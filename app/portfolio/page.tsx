// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef, useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { AspectRatio } from "@/components/ui/aspect-ratio"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { ExternalLink, Filter } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { AnimatedGradientText } from "@/components/animated-gradient-text"

// const projects = [
//   {
//     title: "Hospital",
//     category: "Web Development",
//     description: "A fully integrated healthcare website to streamline hospital operations.",
//     image: "/portfolio3.jpeg",
//     link: "https://complete-ten.vercel.app/",
//     tags: ["Web Development", "Healthcare", "UI/UX"],
//   },
//   {
//     title: "Travel Agency",
//     category: "Web Development",
//     description: "A dynamic and user-friendly website for effortless travel booking and exploration.",
//     image: "/portfolio2.jpeg",
//     link: "https://ewangan-tour-safaris-1nqj.vercel.app/",
//     tags: ["Web Development", "Travel", "E-commerce"],
//   },
//   {
//     title: "Event Planner",
//     category: "Web Development",
//     description: "An intuitive event planner platform showcasing past events and seamless booking.",
//     image: "/portfolio1.jpeg",
//     link: "https://trium-events.vercel.app/",
//     tags: ["Web Development", "Events", "Booking System"],
//   },
//   {
//     title: "Hospital",
//     category: "Web Development",
//     description: "A cutting-edge hospital website with seamless patient and doctor interaction.",
//     image: "/portfolio5.jpeg",
//     link: "https://www.mnqcare.com/",
//     tags: ["Web Development", "Healthcare", "Patient Portal"],
//   },
// ]

// const categories = ["All", "Web Development", "E-commerce", "Healthcare", "Travel", "Events"]

// export default function Portfolio() {
//   const [activeFilter, setActiveFilter] = useState("All")

//   // Parallax scrolling effect
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   })

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

//   const filteredProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter((project) => project.tags.includes(activeFilter) || project.category === activeFilter)

//   return (
//     <section id="portfolio" className="relative overflow-hidden" ref={containerRef}>
//       {/* Background Elements */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 right-0 -mt-40 -mr-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
//         <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl" />
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl"
//           style={{ y: y1 }}
//         />
//       </div>

//       {/* Hero Section */}
//       <div className="py-24 bg-white bg-opacity-80 backdrop-blur-sm">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="max-w-3xl mx-auto text-center mb-16"
//           >
//             <Badge className="mb-4">Featured Work</Badge>
//             <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</AnimatedGradientText>
//             <p className="text-xl text-gray-600">
//               Discover how we've helped businesses transform their digital presence
//             </p>
//           </motion.div>

//           {/* Filter Controls */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex flex-wrap justify-center gap-3 mb-12"
//           >
//             <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
//               <Filter className="h-4 w-4 text-gray-500" />
//               <span className="text-sm font-medium text-gray-700">Filter by:</span>
//             </div>

//             {categories.map((category, index) => (
//               <motion.button
//                 key={category}
//                 onClick={() => setActiveFilter(category)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                   activeFilter === category ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 + index * 0.05 }}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card className="overflow-hidden group border-0 shadow-lg">
//                   <CardContent className="p-0">
//                     <AspectRatio ratio={16 / 9}>
//                       <div className="relative h-full">
//                         <Image
//                           src={project.image || "/placeholder.svg?height=400&width=600"}
//                           alt={project.title}
//                           fill
//                           className="object-cover transition-transform duration-700 group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                         <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                           <div className="flex flex-wrap gap-2 mb-3">
//                             {project.tags.map((tag, i) => (
//                               <span key={i} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>
//                           <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
//                           <p className="text-sm text-gray-300 mb-4">{project.description}</p>
//                           <Button
//                             variant="outline"
//                             className="self-start border-white bg-transparent text-white hover:bg-white hover:text-blue-600"
//                             asChild
//                           >
//                             <a href={project.link} target="_blank" rel="noopener noreferrer">
//                               View Project
//                               <ExternalLink className="ml-2 h-4 w-4" />
//                             </a>
//                           </Button>
//                         </div>
//                       </div>
//                     </AspectRatio>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           {/* Empty State */}
//           {filteredProjects.length === 0 && (
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
//               <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
//                 <Filter className="h-8 w-8 text-gray-400" />
//               </div>
//               <h3 className="text-xl font-medium text-gray-700 mb-2">No projects found</h3>
//               <p className="text-gray-500 mb-6">Try changing your filter criteria</p>
//               <Button variant="outline" onClick={() => setActiveFilter("All")} className="mx-auto">
//                 Clear Filters
//               </Button>
//             </motion.div>
//           )}
//         </div>
//       </div>

//       {/* Call to Action */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="py-24 bg-gray-50"
//       >
//         <div className="container mx-auto px-4">
//           <Card className="bg-blue-800 text-white p-12 border-0 overflow-hidden relative">
//             {/* Background Elements */}
//             <div className="absolute inset-0 overflow-hidden">
//               <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-10" />
//               <motion.div
//                 className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.3, 0.6, 0.3],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                 }}
//               />
//             </div>

//             <CardContent className="space-y-6 relative z-10">
//               <h3 className="text-3xl font-bold">Ready to Start Your Project?</h3>
//               <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//                 Let's collaborate to bring your digital vision to life
//               </p>
//               <Button size="lg" className="mt-6 bg-white text-blue-600 hover:bg-blue-50" asChild>
//                 <Link href="/contact">Start a Conversation</Link>
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

