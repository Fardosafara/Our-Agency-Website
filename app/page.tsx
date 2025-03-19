import type { Metadata } from "next"
import { generateSocialMeta } from "@/lib/seo-utils"
import HomeClient from "./home-client"

// Set revalidation time for homepage
export const revalidate = 3600 // Revalidate every hour

// Enhanced metadata for the homepage
export const metadata: Metadata = {
  title: "DosaWeb Solutions | Web Development & Digital Marketing Agency",
  description:
    "We create stunning websites and powerful digital marketing strategies that drive growth and deliver exceptional results for businesses worldwide.",
  ...generateSocialMeta({
    title: "DosaWeb Solutions | Web Development & Digital Marketing Agency",
    description:
      "We create stunning websites and powerful digital marketing strategies that drive growth and deliver exceptional results.",
    url: "/",
    image: "/og-home.jpg",
  }),
}

export default function Home() {
  return <HomeClient />
}

