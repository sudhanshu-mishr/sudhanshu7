import React from "react"
import { Cpu, Terminal, Layers, Briefcase, Check, ArrowUpRight } from "lucide-react"
import { SKILL_CATEGORIES, FREELANCE_HIGHLIGHTS, USER_INFO } from "../data/portfolioData"

export const SkillsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu className="w-5 h-5 text-[#e5262c]" />
      case 1:
        return <Terminal className="w-5 h-5 text-[#e5262c]" />
      case 2:
        return <Layers className="w-5 h-5 text-[#e5262c]" />
      default:
        return <Briefcase className="w-5 h-5 text-[#e5262c]" />
    }
  }

  return (
    <section id="skills" className="relative w-full py-20 bg-white/85 backdrop-blur-sm border-b border-[#141414]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e5262c] mb-3">
            <Cpu className="w-4 h-4" />
            <span>Core Capabilities & Freelance Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
            Chip Engineering, OS Systems & Software Stack
          </h2>
          <p className="mt-2 text-base text-[#141414]/70">
            A specialized full-spectrum profile spanning silicon RTL, custom operating system microkernels, and production web engineering backed by substantial freelance experience.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.category}
              className="p-6 rounded-2xl border border-[#141414]/10 bg-[#fbfaf8] hover:border-[#141414]/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white border border-[#141414]/10 shadow-xs">
                    {getIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#141414] leading-snug">{category.category}</h3>
                  </div>
                </div>
                <p className="text-xs text-[#141414]/65 mb-4 leading-normal">{category.description}</p>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 py-1 px-2.5 rounded-md bg-white border border-[#141414]/8 text-xs font-medium text-[#141414]/85"
                    >
                      <Check className="w-3 h-3 text-[#e5262c] shrink-0" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Freelance Experience Highlights Banner */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#e5262c]">
              <Briefcase className="w-4 h-4" />
              <span>Freelance Consulting Highlights</span>
            </div>
            <a
              href={`mailto:${USER_INFO.email}?subject=Contract/Freelance Inquiry`}
              className="text-xs font-semibold text-[#141414] hover:text-[#e5262c] inline-flex items-center gap-1 transition-colors"
            >
              <span>Discuss a Contract</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FREELANCE_HIGHLIGHTS.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-[#141414]/15 bg-[#f6f4f0] space-y-3"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#e5262c] font-semibold">
                  0{i + 1} · {item.focus}
                </div>
                <h4 className="text-base font-bold text-[#141414]">{item.role}</h4>
                <p className="text-xs text-[#141414]/75 leading-relaxed">{item.impact}</p>

                <div className="pt-3 border-t border-[#141414]/10 flex flex-wrap gap-1.5 text-[11px] font-mono text-[#141414]/70">
                  {item.stack.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-white border border-[#141414]/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-[#141414]/15 bg-[#141414] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <span className="text-xs font-mono font-bold text-[#e5262c] uppercase tracking-wider">
              Hardware-to-Software Co-Design
            </span>
            <h4 className="text-lg font-bold text-white">
              Bridging Silicon Instruction Pipelines to Operating Systems & High-Craft Web
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Rare fluency across all levels of the computer stack: from RISC-V RTL state machines, virtual memory MMU traps, and C kernel routines to modern reactive web user interfaces.
            </p>
          </div>

          <a
            href={USER_INFO.auraRvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold rounded-md bg-[#e5262c] hover:bg-[#c81e24] text-white transition-colors shrink-0 whitespace-nowrap"
          >
            Explore Aura RV (Netlify)
          </a>
        </div>
      </div>
    </section>
  )
}
