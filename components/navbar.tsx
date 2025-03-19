"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Portfolio", href: "/portfolio" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "All Services", href: "/services" },
        { name: "Web Development", href: "/web-development" },
        { name: "Digital Marketing", href: "/digital-marketing" },
        { name: "Brand Identity", href: "/brand-identity" },
      ],
    },
    
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Link href="/">
            <Image src="/logo3.png" alt="DosaWeb Logo" width={40} height={40} className="h-20 w-auto" priority />
          </Link>
        </motion.div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                      "text-gray-700 hover:text-blue-600",
                      "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full",
                      activeDropdown === link.name ? "text-blue-600 after:w-full" : "",
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        activeDropdown === link.name ? "rotate-180" : "",
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                      "text-gray-700 hover:text-blue-600",
                      "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full",
                      pathname === link.href ? "text-blue-600 after:w-full" : "",
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden"
                      >
                        <div className="py-1">
                          {link.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Updated to link to website-planning */}
          <div className="hidden md:block">
            <Link
              href="/website-planning"
              className="inline-flex items-center px-5 py-2.5 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="rounded-md overflow-hidden">
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(link.name)}
                          className={cn(
                            "flex items-center justify-between w-full px-4 py-3 text-sm font-medium transition-colors",
                            "text-gray-700 hover:text-blue-600 hover:bg-blue-50",
                            activeDropdown === link.name ? "bg-blue-50 text-blue-600" : "",
                          )}
                        >
                          {link.name}
                          <ChevronDown
                            className={cn(
                              "ml-1 h-4 w-4 transition-transform duration-200",
                              activeDropdown === link.name ? "rotate-180" : "",
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-gray-50"
                            >
                              {link.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-6 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                  onClick={() => {
                                    setActiveDropdown(null)
                                    setIsOpen(false)
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-4 py-3 text-sm font-medium transition-colors",
                          "text-gray-700 hover:text-blue-600 hover:bg-blue-50",
                          pathname === link.href ? "bg-blue-50 text-blue-600" : "",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                {/* Mobile CTA Button - Updated to link to website-planning */}
                <Link
                  href="/website-planning"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

