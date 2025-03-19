import Link from "next/link"
import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section
        <div className="py-12 border-b border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mb-0">
                Stay updated with the latest trends, tips, and insights in digital marketing and web development.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-blue-600"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo3.png"
                alt="DosaWeb Solutions"
                width={150}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-black mb-6">
              We create stunning websites and powerful digital marketing strategies that drive growth and deliver
              results.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-black hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-black hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-black hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-black hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                // { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
                // { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-blue-600 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="mr-2 h-3 w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Web Development", href: "/web-development" },
                { label: "Digital Marketing", href: "/digital-marketing" },
                { label: "Brand Identity", href: "/brand-identity" },
                { label: "Get Started", href: "/website-planning" },
                // { label: "E-commerce Solutions", href: "/web-development" },
                // { label: "SEO Optimization", href: "/services" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-black hover:text-blue-600 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="mr-2 h-3 w-3" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-black">
                  Worldwide
                  <br />
                  Remote
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <Link href="tel:+1234567890" className="text-black hover:text-blue-600 transition-colors">
                  +254 702383309
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <Link href="mailto:info@example.com" className="text-black hover:text-blue-600 transition-colors">
                  dosaweb7@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-black text-center md:flex md:justify-between md:text-left">
          <p className="text-black mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DosaWeb Solutions. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <Link href="/privacy-policy" className="text-black hover:text-blue-600 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-black hover:text-blue-600 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

