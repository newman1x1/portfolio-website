"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown, Mail, Phone } from "lucide-react"

const titles = ["Arun: Developer.", "Arun: Problem Solver.", "Arun: Code Alchemist."]

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = titles[currentTitle]

        if (!isDeleting) {
          setDisplayText(current.substring(0, displayText.length + 1))

          if (displayText === current) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setDisplayText(current.substring(0, displayText.length - 1))

          if (displayText === "") {
            setIsDeleting(false)
            setCurrentTitle((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitle])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50" />
        {isClient &&
          [...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
      </div>

      {/* Contact Info */}
      <motion.div
        className="absolute top-4 right-4 z-10 hidden lg:flex flex-col gap-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2 text-cyan-400 backdrop-blur-md bg-white/10 px-3 py-2 rounded-full border border-white/20 text-xs">
          <Mail size={14} />
          <span>arun777387@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-cyan-400 backdrop-blur-md bg-white/10 px-3 py-2 rounded-full border border-white/20 text-xs">
          <Phone size={14} />
          <span>+91 9872017165</span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {displayText}
            <span className="animate-pulse text-cyan-400">|</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
            Turning complex problems into elegant digital solutions
          </p>
        </motion.div>

        <motion.button
          onClick={scrollToProjects}
          className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">View My Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-cyan-400"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}
