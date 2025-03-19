"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

// Update the testimonials data to be about DosaWeb
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechSolutions Inc.",
    image: "/sahara.jpg",
    rating: 5,
    text: "Working with DosaWeb transformed our online presence completely. Their team was professional, responsive, and delivered beyond our expectations. Our website traffic increased by 200% and conversions improved dramatically.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "Innovate Studios",
    image: "/michal.jpg",
    rating: 5,
    text: "The team at DosaWeb delivered a stunning website that perfectly captures our brand identity. Their attention to detail and technical expertise is unmatched. I highly recommend their services to anyone looking to elevate their digital presence.",
  },
  {
    name: "jessica Williams",
    role: "Operations Manager",
    company: "GrowthForce",
    image: "/jessica.jpg",
    rating: 5,
    text: "DosaWeb's strategic approach to digital marketing helped us reach new audiences and grow our business. The ROI has been exceptional, and their ongoing support is invaluable. They're truly invested in our success.",
  },
]

const ratingStats = [
  { stars: 5, percentage: 99},
  { stars: 4.8, percentage: 1 },
  { stars: 4.7, percentage: 0 },
  { stars: 4.5, percentage: 0 },

]

export default function TestimonialsSection() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    rating: 5,
    review: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setReviewData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (rating: number) => {
    setReviewData((prev) => ({ ...prev, rating }))
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the review data to your backend
    console.log("Review submitted:", reviewData)

    // Show success message
    toast({
      title: "Review Submitted",
      description: "Thank you for sharing your feedback!",
    })

    // Close modal and reset form
    setIsReviewModalOpen(false)
    setReviewData({
      name: "",
      email: "",
      rating: 5,
      review: "",
    })
  }

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 -mt-40 -mr-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
          
        </motion.div>
        </div>

        {/* Then modify the layout structure to place testimonials next to customer reviews
        Replace the existing grid and testimonials section with this: */}

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Customer Reviews */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 text-blue-600 fill-blue-600"
                  />
                ))}
                <span className="ml-2 text-gray-600">Based on 87 reviews</span>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2 mb-8">
                {ratingStats.map((stat) => (
                  <div key={stat.stars} className="flex items-center gap-2">
                    <div className="w-6 text-right">{stat.stars}</div>
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                    <div className="flex-1 h-6">
                      <div className="h-full bg-gray-200 rounded-sm overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                    <div className="w-12 text-right text-gray-600">{stat.percentage}%</div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Share your thoughts</h3>
                <p className="text-gray-600 mb-4">
                  If you've used our services, share your thoughts with other customers
                </p>
                <Button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Write a review
                </Button>
              </div>
            </div>

            {/* Right Column: Testimonials */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 pb-8 last:border-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image || `/placeholder.svg?height=48&width=48`}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <div className="flex gap-1 my-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-blue-600 fill-blue-600"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      

      {/* Review Modal */}
      <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Write a Review</DialogTitle>
            <DialogDescription>
              Share your experience with our services to help others make better decisions.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmitReview} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                name="name"
                value={reviewData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={reviewData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Your Rating</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= reviewData.rating ? "text-blue-600 fill-blue-600" : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="review">Your Review</Label>
              <Textarea
                id="review"
                name="review"
                value={reviewData.review}
                onChange={handleInputChange}
                placeholder="Share your experience with our services..."
                rows={5}
                required
              />
            </div>

            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Submit Review
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}

