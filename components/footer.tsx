import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <Image src="/logo2.png" alt="DosaWeb Logo" width={128} height={128} className="h-32 w-auto" />
            </Link>
            <p className="mt-4 text-white">Creating exceptional digital experiences for forward-thinking businesses.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white hover:text-white/80 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-white/80 transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-white/80 transition-colors">
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-white/80 transition-colors">
                  Brand Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-white/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white hover:text-white/80 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-white/80 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white">
              <li>
                <a href="mailto:contact@dosaweb.com" className="hover:text-white/80 transition-colors">
                  contact@dosaweb.com
                </a>
              </li>
              <li>
                <a href="tel:+254702383309" className="hover:text-white/80 transition-colors">
                  +254 702383309
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} DosaWeb Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

