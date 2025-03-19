"use client";

import type React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  FileText,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { AnimatedGradientText } from "@/components/animated-gradient-text";
import WebsitePlanning from "@/app/website-planning/page";
import * as Accordion from "@radix-ui/react-accordion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "dosaweb7@gmail.com",
    link: "mailto:dosaweb7@gmail.com",
  },
  {
    icon: Phone,
    title: "Tel1",
    content: "+254 702383309",
    link: "tel:+254702383309",
  },
  {
    icon: Phone,
    title: "Tel2",
    content: "+254 726851015",
    link: "tel:+254726851015",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Worldwide",
    link: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "24/7",
    link: "#",
  },
];

const stats = [
  { value: "100+", label: "Projects Completed", icon: Globe },
  { value: "99%", label: "Client Satisfaction", icon: CheckCircle },
  { value: "24/7", label: "Client Support", icon: Zap },
  { value: "100%", label: "Secure Process", icon: Shield },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months.",
    icon: Clock,
  },
  {
    question: "What information do you need to get started?",
    answer:
      "The information in this form is a great start! We'll also schedule a discovery call to discuss your project in more detail.",
    icon: FileText,
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we offer various maintenance and support packages to keep your website secure, updated, and performing optimally.",
    icon: Zap,
  },
  {
    question: "How is the payment structured?",
    answer:
      "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments.",
    icon: Shield,
  },
  {
    question: "Can you help with content creation?",
    answer:
      "Absolutely! We offer professional copywriting and content creation services to help you communicate your message effectively.",
    icon: FileText,
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, we work with clients worldwide. Our team is set up to collaborate remotely with effective communication tools and processes.",
    icon: Globe,
  },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="contact" className="relative overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10" />

          {/* Animated 3D shapes */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-white/10 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full border border-white/10 animate-spin-slow-reverse"></div>

          {/* Animated particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/30"
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

          {/* Modern geometric shapes */}
          <div className="absolute top-20 left-20 w-40 h-40 border border-white/20 rounded-xl rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-white/20 rounded-md rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <Badge className="mb-4 bg-white/10 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
              Get in Touch
            </Badge>

            <AnimatedGradientText className="text-4xl text-white md:text-6xl font-bold mb-6">
              Let's Create Something Extraordinary
            </AnimatedGradientText>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform your digital presence with our award-winning team of designers and developers. We're ready to
              bring your vision to life.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-36 text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-white/80" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-1"
              >
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {contactInfo.slice(0, 3).map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <item.icon className="h-4 w-4 text-white/80" />
                      <span className="text-sm text-white">{item.content}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Modern wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px] text-white"
            fill="currentColor"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h2>
                <p className="text-gray-600">
                  Fill out the form below to discuss your project with our team of experts. We'll create a tailored
                  solution that meets your specific needs and objectives.
                </p> */}
              </motion.div>

              <Card className="border-0 shadow-2xl overflow-hidden bg-white">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
                <CardContent className="p-8">
                  <WebsitePlanning />
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Contact Information */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Enhanced Modern FAQ Section with Accordion - Clean Look */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    Frequently Asked Questions
                  </h3>

                  <Accordion.Root type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <Accordion.Item key={index} value={`item-${index}`} className="group">
                        <Accordion.Trigger className="w-full text-left">
                          <div className="border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100 overflow-hidden bg-white">
                            <div className="px-6 py-4">
                              <div className="flex items-center gap-4">
                                <div className="flex-shrink-0">
                                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <faq.icon className="h-5 w-5" />
                                  </div>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {faq.question}
                                </h4>
                                <ChevronDown className="ml-auto h-5 w-5 text-gray-400 group-data-[state=open]:rotate-180 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </Accordion.Trigger>
                        <Accordion.Content className="px-6 py-4 text-gray-600 pl-14">
                          {faq.answer}
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-600">Still have questions?</p>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Support
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-600">Our Location</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us Worldwide</h2>
            <p className="text-gray-900 max-w-2xl mx-auto">
              While we're based in multiple locations, our team works remotely to serve clients around the globe. No
              matter where you are, we're ready to bring your vision to life.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 bg-[url('/map2.jpg')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">Global Reach, Local Touch</h3>
                <p className="text-black mb-6">
                  We work with clients worldwide, providing personalized service regardless of location.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Schedule a Virtual Meeting</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10" />
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
              <span className="text-white font-medium">Ready to Get Started?</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Create Something Extraordinary Together</h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you need a stunning website, a powerful digital marketing strategy, or a complete brand identity,
              we're here to help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <a href="#website-planning" className="flex items-center">
                  Start Your Project
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <a href="tel:+254702383309" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}