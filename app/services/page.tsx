"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Megaphone, Share2, Globe, Package, Sparkles } from "lucide-react"

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

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white from-gray-50 to-white">
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
          <p className="text-xl text-gray-600">
            Comprehensive packages designed to boost your online presence and drive business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                {service.isPopular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-black text-white">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{service.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{service.price}</span>
                    {service.subtitle && <span className="block text-sm text-black mt-1">{service.subtitle}</span>}
                    {service.alternatePrice && (
                      <span className="block text-sm text-gray-500 mt-1">{service.alternatePrice}</span>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
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
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

