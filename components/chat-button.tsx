"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const scriptLoaded = useRef(false)

  // Toggle the chat panel
  const toggleChat = () => {
    setIsOpen((prev) => !prev)

    // Load the script when opening for the first time
    if (!isLoaded) {
      setIsLoaded(true)
    }
  }

  // Handle script loading and Jotform initialization
  useEffect(() => {
    if (isLoaded && !scriptLoaded.current) {
      const script = document.createElement("script")
      script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
      script.async = true
      script.onload = () => {
        if (
          typeof window !== "undefined" &&
          window.jotformEmbedHandler &&
          document.getElementById("JotFormIFrame-0195708c68827649ac317a730142fba982be")
        ) {
          window.jotformEmbedHandler(
            "iframe[id='JotFormIFrame-0195708c68827649ac317a730142fba982be']",
            "https://www.jotform.com",
          )
        }
      }

      document.body.appendChild(script)
      scriptLoaded.current = true
    }

    // Cleanup function
    return () => {
      if (scriptLoaded.current) {
        const script = document.querySelector(
          'script[src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"]',
        )
        if (script) {
          document.body.removeChild(script)
          scriptLoaded.current = false
        }
      }
    }
  }, [isLoaded])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <Button
          onClick={toggleChat}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${
            isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-blue-600 hover:bg-blue-700"
          } transition-colors duration-300`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageSquare className="h-6 w-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] md:w-[450px] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                <h3 className="font-medium">Chat with Us</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-blue-700 rounded-full"
                onClick={toggleChat}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Content */}
            <div className="h-[500px] max-h-[70vh]">
              {isLoaded ? (
                <iframe
                  ref={iframeRef}
                  id="JotFormIFrame-0195708c68827649ac317a730142fba982be"
                  title="Fardowsa: Web Design Expert"
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen"
                  src="https://agent.jotform.com/0195708c68827649ac317a730142fba982be?embedMode=iframe&background=1&shadow=1"
                  frameBorder="0"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  scrolling="no"
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-2" />
                    <p className="text-gray-500">Loading chat agent...</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Add TypeScript declaration for the jotformEmbedHandler
declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, domain: string) => void
  }
}

