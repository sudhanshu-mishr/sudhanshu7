import React, { useState } from "react"
import WavingPortfolioLanding from "@/components/ui/waving-portfolio-landing"
import { Palette } from "lucide-react"
import { USER_INFO } from "../data/portfolioData"

const PALETTES = [
  { name: "Vermilion Poster", accent: "#e5262c", paper: "#f6f4f0", ink: "#141414" },
  { name: "Electric Cobalt", accent: "#1d4ed8", paper: "#f4f6fa", ink: "#0f172a" },
  { name: "Forest Emerald", accent: "#047857", paper: "#f3f6f3", ink: "#062817" },
  { name: "Ochre Amber", accent: "#b45309", paper: "#faf6f0", ink: "#1c1407" },
  { name: "Monochrome Ink", accent: "#18181b", paper: "#f4f4f5", ink: "#09090b" },
]

export const HeroSection: React.FC = () => {
  const [selectedPalette, setSelectedPalette] = useState(PALETTES[0])
  const [greeting, setGreeting] = useState("Hi! I'm Sudhanshu · Chip & OS Eng")

  return (
    <section id="hero-poster" className="relative w-full border-b border-[#141414]/10 bg-[#f6f4f0]/70 backdrop-blur-xs transition-colors overflow-hidden">
      {/* Editorial Top Micro-Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#141414]/5">
        <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-[#141414]/70 font-mono">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chip Engineer & OS Developer</span>
          <span aria-hidden="true">·</span>
          <span>Available for Global Freelance</span>
          <span aria-hidden="true">·</span>
          <span className="hidden md:inline font-semibold text-[#e5262c]">Latest: aurarv.netlify.app</span>
        </div>

        {/* Live Accent Palette Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-[#141414]/60 mr-1">
            <Palette className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Poster Accent:</span>
          </div>
          <div className="flex items-center gap-1.5 p-1 bg-white/80 rounded-lg border border-[#141414]/10 shadow-xs">
            {PALETTES.map((p) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setSelectedPalette(p)}
                title={p.name}
                className={`w-5 h-5 rounded-full transition-transform ${
                  selectedPalette.name === p.name ? "scale-125 ring-2 ring-offset-1 ring-[#141414]" : "hover:scale-110 opacity-80"
                }`}
                style={{ backgroundColor: p.accent }}
                aria-label={`Select ${p.name}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* The Waving Portfolio Landing Hero Component */}
      <div className="relative w-full" style={{ minHeight: "680px", height: "78svh" }}>
        <WavingPortfolioLanding
          name="Sudhanshu Mishra"
          year="2026"
          roles={["Chip Engineer", "OS Developer"]}
          lettersLeft={["P", "F"]}
          giantLetter="O"
          lettersRight={["RT", "LIO"]}
          title="Sudhanshu Mishra - Chip Engineer & OS Developer Portfolio"
          signature="SUDHANSHU / MISHRA"
          greeting={greeting}
          accent={selectedPalette.accent}
          paper={selectedPalette.paper}
          ink={selectedPalette.ink}
          intro={true}
          height="100%"
        />
      </div>
    </section>
  )
}
