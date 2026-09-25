import React from "react"
import { ArrowUp, Github, Globe, Mail } from "lucide-react"
import { USER_INFO } from "../data/portfolioData"

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-[#141414]/90 backdrop-blur-md text-white py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="text-lg font-bold tracking-tight text-white">
              {USER_INFO.name}
            </span>
            <p className="mt-1 text-xs text-white/60">
              Chip Engineer · OS Developer · Systems Architect · Freelance Consultant
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-white/70">
            <a
              href="#aura-rv-latest"
              className="text-[#e5262c] font-semibold hover:underline transition-colors"
            >
              Aura RV (Latest)
            </a>
            <a
              href="#web-projects"
              className="hover:text-white transition-colors"
            >
              Web Designs
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href={USER_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${USER_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/20 text-xs font-medium text-white hover:bg-white/10 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Sudhanshu Mishra. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Special feature showcase:</span>
            <a
              href={USER_INFO.renderSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e5262c] hover:underline"
            >
              sudhanshu-wxc2.onrender.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
