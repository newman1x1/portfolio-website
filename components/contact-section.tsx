"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, Github, Linkedin, Instagram, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent successfully!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate? Let's turn your ideas into reality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:arun777387@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm">Email</div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      arun777387@gmail.com
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+919872017165"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm">Phone</div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      +91 9872017165
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>

              <div className="grid grid-cols-1 gap-4">
                <motion.a
                  href="https://github.com/newman1x1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg">
                    <Github size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm">GitHub</div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">newman1x1</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/arun-9b05b032b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm">LinkedIn</div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      Connect with me
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://instagram.com/be_happy_145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg">
                    <Instagram size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm">Instagram</div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      be_happy_145
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
