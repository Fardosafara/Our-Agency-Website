"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll } from "framer-motion"
import { Menu } from "lucide-react"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md backdrop-blur-sm bg-white/90" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Link href="/">
            <Image src="/logo3.png" alt="DosaWeb Logo" width={80} height={80} className="h-20 w-auto" priority />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-blue-600 hover:text-blue-700 text-base font-medium transition-colors relative ${
                    isActive ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600"
                      layoutId="navbar-underline"
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-blue-600 text-white hover:bg-blue-700 transition-colors px-4 py-2 rounded-md"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600 hover:text-blue-700 p-2">
            <Menu className="h-8 w-8" />
          </button>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full right-0 w-screen bg-white shadow-lg p-4 mt-2"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors ${
                        isActive ? "font-bold" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <Link
                  href="/contact"
                  className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors px-4 py-2 rounded-md text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

