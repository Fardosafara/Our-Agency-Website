"use client"

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "contact@dosaweb.com",
    link: "mailto:contact@dosaweb.com",
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
]

export default function Contact() {
  const { toast } = useToast()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: FormData) {
    try {
      // In a real application, this would send data to a backend
      console.log("Form submitted:", values)
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      })
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="py-24 bg-white from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-black font-semibold text-lg mb-4 block">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl text-gray-600">Ready to transform your digital presence? We'd love to hear from you!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <a href={item.link} className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Proof */}
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
                    Get everything you need to grow your business online with our affordable and flexible pricing
                    options
                  </p>
                  <Button variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Get Started Now
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project"
                              className="min-h-[150px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

