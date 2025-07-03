"use client"

import { motion } from "framer-motion"
import { Database, Globe, Zap, Cpu } from "lucide-react"

const skillsData = [
  {
    category: "Frontend Development",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    category: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "Node.js", level: 80 },
      { name: "Flask", level: 85 },
      { name: "SQL", level: 75 },
      { name: "API Development", level: 80 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "Linux", level: 85 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
    ],
  },
  {
    category: "Specializations",
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Web Development", level: 90 },
      { name: "Automation", level: 85 },
      { name: "AI/ML Integration", level: 75 },
      { name: "System Optimization", level: 80 },
      { name: "UI/UX Design", level: 70 },
    ],
  },
]

const additionalSkills = [
  "D3.js",
  "Postman",
  "Security",
  "Performance Optimization",
  "Responsive Design",
  "Version Control",
  "Problem Solving",
  "Team Collaboration",
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Additional Expertise</h3>
            <p className="text-gray-300">Other technologies and skills in my toolkit</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 rounded-full text-cyan-400 font-medium hover:scale-105 transition-transform duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4 sm:gap-6 mt-12"
        >
          <div className="text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-gray-300 text-sm sm:text-base">Years Experience</div>
          </div>
          <div className="text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300 text-sm sm:text-base">Technologies</div>
          </div>
          <div className="text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">6+</div>
            <div className="text-gray-300 text-sm sm:text-base">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
