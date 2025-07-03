"use client"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />

        {/* Floating Geometric Shapes - Hidden on mobile for performance */}
        <div className="hidden sm:block">
          <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/30 rotate-45 animate-bounce" />
          <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-pink-400/30 rotate-45 animate-bounce delay-500" />
          <div className="absolute bottom-20 right-20 w-5 h-5 bg-emerald-400/30 rounded-full animate-pulse delay-1000" />
        </div>
      </div>

      <ScrollProgress />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
