"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-6 sm:p-8">
              <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-purple-600 p-1">
                  <img
                    src="https://i.ibb.co/VYXRQgWr/picofme-21.png"
                    alt="Arun - Developer"
                    className="w-full h-full object-cover rounded-full bg-white"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>

            <motion.div
              className="flex items-center justify-center gap-2 mt-4 text-cyan-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <MapPin size={20} />
              <span className="text-sm sm:text-base">Samrala, Punjab</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Digital Artisan</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                A passionate developer from Samrala, Punjab, with a love for turning complex problems into elegant
                digital solutions. I thrive on building tools that are not only powerful but also a joy to use.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                From crafting interactive front-end experiences to building robust back-end scripts, I bring creativity
                and precision to every line of code. My journey spans web development, automation, AI integration, and
                system optimization.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">6+</div>
                <div className="text-gray-300 text-sm sm:text-base">Projects</div>
              </div>
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">10+</div>
                <div className="text-gray-300 text-sm sm:text-base">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
