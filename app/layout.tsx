import type { Metadata } from "next"
import { Inter, Playfair_Display, Poppins } from 'next/font/google'
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"

// Configure the fonts with built-in next/font
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair"
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: {
    default: "Digital Agency | Web Development & Digital Marketing Agency",
    template: "%s | Digital Agency",
  },
  description:
    "Transform your digital presence with our agency. Expert web development, SEO, and digital marketing services to help your business grow online.",
  keywords: [
    "web development",
    "digital marketing",
    "SEO services",
    "web design",
    "social media marketing",
    "Digital Agency",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </div>
      </body>
    </html>
  )
}