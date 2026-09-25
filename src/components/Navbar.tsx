import React from "react"
import { ExternalLink, Github, Globe } from "lucide-react"
import { USER_INFO } from "../data/portfolioData"

interface NavbarProps {
  onNavClick?: (sectionId: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (onNavClick) {
      onNavClick(id)
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#141414]/10 bg-[#f6f4f0]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => scrollTo("top", e)}
          className="text-lg font-bold tracking-tight text-[#141414] hover:text-[#e5262c] transition-colors"
        >
          {USER_INFO.name}
        </a>

        {/* Zone 2: clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#141414]/80">
          <a
            href="#aura-rv-latest"
            onClick={(e) => scrollTo("aura-rv-latest", e)}
            className="hover:text-[#e5262c] transition-colors whitespace-nowrap text-[#e5262c] font-bold inline-flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e5262c] animate-pulse" />
            <span>Aura RV (Latest)</span>
          </a>
          <a
            href="#web-projects"
            onClick={(e) => scrollTo("web-projects", e)}
            className="hover:text-[#e5262c] transition-colors whitespace-nowrap"
          >
            Web Designs
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollTo("projects", e)}
            className="hover:text-[#e5262c] transition-colors whitespace-nowrap"
          >
            Projects
          </a>
          <a
            href="#github-section"
            onClick={(e) => scrollTo("github-section", e)}
            className="hover:text-[#e5262c] transition-colors whitespace-nowrap"
          >
            GitHub Repos
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollTo("skills", e)}
            className="hover:text-[#e5262c] transition-colors whitespace-nowrap"
          >
            Skills & Freelance
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo("contact", e)}
            className="hover:text-[#e5262c] transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href={USER_INFO.auraRvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#e5262c] rounded-md hover:bg-[#c81e24] transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Aura RV (Netlify)</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          <a
            href={USER_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#141414] bg-white border border-[#141414]/15 rounded-md hover:bg-neutral-100 transition-colors whitespace-nowrap shadow-xs"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  )
}
