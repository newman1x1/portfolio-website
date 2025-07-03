"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ExternalLink, Github, Shield, Zap, Database, Brain, Wifi, Code } from "lucide-react"

const projects = [
  {
    title: "W-Book",
    description:
      "📚 A secure and stunning digital bookshelf with elegant glass-morphism design. Password-protected and fully responsive.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <Database className="w-6 h-6" />,
    github: "https://github.com/newman1x1/w-book",
    demo: "https://newman1x1.github.io/w-book/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "SpotDL Wrapper",
    description:
      "🎵 Advanced Spotify downloader with interactive menu system and robust error handling for seamless music downloads.",
    tech: ["Python", "CLI"],
    icon: <Zap className="w-6 h-6" />,
    github: "https://github.com/newman1x1/SpotDL_Wrape",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Realtek RTW89 Wi-Fi Driver",
    description:
      "🔧 Essential Wi-Fi driver solution specifically optimized for Kali Linux systems with Realtek RTW89 chipsets.",
    tech: ["Linux", "Drivers"],
    icon: <Wifi className="w-6 h-6" />,
    github: "https://github.com/newman1x1/Realtek-RTW89-Wi-Fi-Driver",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Code Weavers",
    description:
      "🔐 Privacy-first collaborative coding platform with advanced security features and seamless team integration.",
    tech: ["Web", "Security"],
    icon: <Shield className="w-6 h-6" />,
    github: "https://github.com/newman1x1/code-weavers",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Py Visualizer",
    description:
      "📊 Interactive data visualization tool featuring force-directed graphs and dynamic network representations.",
    tech: ["Python", "D3.js"],
    icon: <Code className="w-6 h-6" />,
    github: "https://github.com/newman1x1/py_visualer",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Chat With Cat v2.1",
    description: "🤖 Smart AI chatbot with enhanced Google Forms integration and advanced conversational capabilities.",
    tech: ["AI", "Python"],
    icon: <Brain className="w-6 h-6" />,
    github: "https://github.com/newman1x1/Chat-With-Cat-v2.1",
    color: "from-teal-500 to-cyan-500",
  },
]

export default function ProjectsSection() {
  const handleLinkClick = (url: string, event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my passion for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-6 h-full transition-all duration-300 hover:bg-white/15">
                {/* Project Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.color} mb-4 relative z-10`}>
                  {project.icon}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{project.title}</h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-4 line-clamp-3 relative z-10">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/20 text-cyan-400 rounded-full border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto relative z-20">
                  <button
                    onClick={(e) => handleLinkClick(project.github, e)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 flex-1 justify-center cursor-pointer hover:scale-105 active:scale-95 relative z-30"
                    type="button"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">GitHub</span>
                  </button>

                  {project.demo && (
                    <button
                      onClick={(e) => handleLinkClick(project.demo, e)}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg transition-all duration-300 flex-1 justify-center cursor-pointer hover:scale-105 active:scale-95 relative z-30`}
                      type="button"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </button>
                  )}
                </div>

                {/* Hover Effect - Lower z-index */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl z-0`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
