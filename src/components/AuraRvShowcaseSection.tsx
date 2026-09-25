import React, { useState } from "react"
import {
  ExternalLink,
  Globe,
  Sparkles,
  Cpu,
  Copy,
  Check,
  ArrowUpRight,
  Terminal,
  Binary,
  Layers,
  Wand2,
  Sliders,
} from "lucide-react"
import { AURA_RV_DETAILS } from "../data/portfolioData"
import DitherVeil from "./ui/DitherVeil"

type ViewTab = "architecture" | "dither" | "iframe"
type DitherPattern = "floyd" | "bayer" | "lines" | "noise" | "atkinson"

const SILICON_DIE_IMAGE =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"

export const AuraRvShowcaseSection: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<ViewTab>("architecture")

  // Interactive Dither controls
  const [pattern, setPattern] = useState<DitherPattern>("floyd")
  const [pixelSize, setPixelSize] = useState<number>(2)
  const [palette, setPalette] = useState<"duotone" | "rgb">("duotone")
  const [wander, setWander] = useState<boolean>(false)

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(AURA_RV_DETAILS.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="aura-rv-latest" className="relative w-full py-20 bg-white/85 backdrop-blur-sm border-b border-[#141414]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Latest Project Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e5262c]/10 border border-[#e5262c]/20 text-[#e5262c] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{AURA_RV_DETAILS.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414] text-balance">
              {AURA_RV_DETAILS.title}
            </h2>
            <p className="mt-3 text-base text-[#141414]/75 leading-relaxed">
              Explore Sudhanshu’s latest milestone project (
              <span className="font-mono text-xs bg-[#f6f4f0] px-1.5 py-0.5 rounded border border-[#141414]/10 text-[#141414] font-semibold">
                aurarv.netlify.app
              </span>
              ), demonstrating end-to-end chip engineering, RISC-V instruction pipeline simulation, and operating system kernel primitives.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopyUrl}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#141414] bg-[#f6f4f0] border border-[#141414]/15 rounded-md hover:bg-neutral-200 transition-colors shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#141414]/60" />}
              <span>{copied ? "URL Copied!" : "Copy Link"}</span>
            </button>

            <a
              href={AURA_RV_DETAILS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#e5262c] hover:bg-[#c81e24] rounded-md transition-colors shadow-sm"
            >
              <Cpu className="w-4 h-4" />
              <span>Launch Aura RV</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Showcase Frame & Details Container */}
        <div className="rounded-2xl border border-[#141414]/15 bg-[#fbfaf8] shadow-xs overflow-hidden">
          {/* Simulated Browser Bar with View Switchers */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 border-b border-[#141414]/10 bg-white gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#e5262c]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span className="ml-3 hidden sm:inline-block text-xs font-mono text-[#141414]/50">
                Netlify Silicon & OS Environment
              </span>
            </div>

            {/* Address bar */}
            <div className="flex items-center gap-2 px-3 py-1 bg-[#f6f4f0] rounded-md border border-[#141414]/10 text-xs font-mono text-[#141414]/80 max-w-sm w-full truncate">
              <Globe className="w-3.5 h-3.5 text-[#e5262c] shrink-0" />
              <span className="truncate">{AURA_RV_DETAILS.url}</span>
            </div>

            {/* 3-Mode View Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-[#f6f4f0] rounded-lg border border-[#141414]/10">
              <button
                type="button"
                onClick={() => setActiveTab("architecture")}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  activeTab === "architecture"
                    ? "bg-white text-[#141414] shadow-xs font-semibold"
                    : "text-[#141414]/70 hover:text-[#141414]"
                }`}
              >
                Architecture
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("dither")}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors inline-flex items-center gap-1.5 ${
                  activeTab === "dither"
                    ? "bg-[#141414] text-white shadow-xs font-semibold"
                    : "text-[#141414]/70 hover:text-[#141414]"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#e5262c] animate-pulse" />
                <span>Silicon Dither Lab</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("iframe")}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  activeTab === "iframe"
                    ? "bg-white text-[#141414] shadow-xs font-semibold"
                    : "text-[#141414]/70 hover:text-[#141414]"
                }`}
              >
                Live Netlify Frame
              </button>
            </div>
          </div>

          {/* Tab 1: Silicon Dither Lab (Powered by React Bits DitherVeil) */}
          {activeTab === "dither" && (
            <div className="relative w-full bg-[#0d0f14] text-white overflow-hidden">
              {/* Top Controls Bar */}
              <div className="px-6 py-3 border-b border-white/10 bg-black/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-white/80">
                  <Sliders className="w-3.5 h-3.5 text-[#e5262c]" />
                  <span className="font-semibold text-white">Silicon Dither Veil Controls:</span>
                  <span className="hidden md:inline text-white/50">
                    Hover pointer to dissolve veil · Click to trigger silicon shockwaves
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Pattern Picker */}
                  <div className="flex items-center gap-1">
                    <span className="text-white/50 text-[11px]">Pattern:</span>
                    {(["floyd", "bayer", "lines", "noise", "atkinson"] as DitherPattern[]).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPattern(p)}
                        className={`px-2 py-0.5 rounded text-[11px] capitalize transition-colors ${
                          pattern === p
                            ? "bg-[#e5262c] text-white font-bold"
                            : "bg-white/10 hover:bg-white/20 text-white/70"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  {/* Pixel Size Picker */}
                  <div className="flex items-center gap-1">
                    <span className="text-white/50 text-[11px]">Size:</span>
                    {[1, 2, 4].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setPixelSize(s)}
                        className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                          pixelSize === s
                            ? "bg-white text-[#141414] font-bold"
                            : "bg-white/10 hover:bg-white/20 text-white/70"
                        }`}
                      >
                        {s}px
                      </button>
                    ))}
                  </div>

                  {/* Palette Mode */}
                  <button
                    type="button"
                    onClick={() => setPalette(palette === "duotone" ? "rgb" : "duotone")}
                    className="px-2.5 py-0.5 rounded text-[11px] bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
                  >
                    Palette: {palette.toUpperCase()}
                  </button>

                  {/* Drift / Wander toggle */}
                  <button
                    type="button"
                    onClick={() => setWander(!wander)}
                    className={`px-2 py-0.5 rounded text-[11px] flex items-center gap-1 transition-colors ${
                      wander
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    <Wand2 className="w-3 h-3" />
                    <span>Auto-Drift</span>
                  </button>
                </div>
              </div>

              {/* DitherVeil Canvas Container */}
              <div className="relative w-full h-[520px] cursor-crosshair">
                <DitherVeil
                  src={SILICON_DIE_IMAGE}
                  pattern={pattern}
                  pixelSize={pixelSize}
                  palette={palette}
                  inkColor="#0d0f14"
                  paperColor="#f6f4f0"
                  revealRadius={220}
                  softness={0.65}
                  linger={1.2}
                  rimColor="#e5262c"
                  rim={0.08}
                  clickBurst={true}
                  wander={wander}
                  fit="cover"
                />

                {/* Floating Bottom HUD Badge */}
                <div className="absolute bottom-4 left-4 z-10 pointer-events-none bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2 text-white">
                    <span className="w-2 h-2 rounded-full bg-[#e5262c] animate-ping" />
                    <span className="font-bold text-white">Aura RV Silicon Microarchitecture</span>
                  </div>
                  <div className="text-[11px] text-white/60 mt-0.5">
                    1-Bit Dither Algorithm · Shockwave Propagation · WebGL Shader Pipeline
                  </div>
                </div>

                {/* Action button inside canvas */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href={AURA_RV_DETAILS.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#141414] bg-white hover:bg-neutral-100 rounded-md shadow-lg transition-colors font-sans"
                  >
                    <Cpu className="w-3.5 h-3.5 text-[#e5262c]" />
                    <span>Open Live Simulator</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Live Netlify Frame */}
          {activeTab === "iframe" && (
            <div className="relative w-full h-[540px] bg-neutral-100">
              <iframe
                src={AURA_RV_DETAILS.url}
                title="Aura RV - RISC-V Silicon & OS Architecture"
                className="w-full h-full border-none"
                loading="lazy"
              />
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#141414]/10 text-xs shadow-sm flex items-center gap-2">
                <span>Direct link:</span>
                <a
                  href={AURA_RV_DETAILS.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#e5262c] hover:underline inline-flex items-center gap-1"
                >
                  Open in New Tab <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Tab 3: Architecture Overview */}
          {activeTab === "architecture" && (
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Architecture Pillars */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e5262c]">
                      <Binary className="w-4 h-4" />
                      <span>Silicon Architecture & OS Co-Design</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#141414]">
                      {AURA_RV_DETAILS.subtitle}
                    </h3>
                    <p className="text-sm sm:text-base text-[#141414]/75 leading-relaxed">
                      {AURA_RV_DETAILS.description}
                    </p>
                  </div>

                  {/* 4 Technical Pillars Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {AURA_RV_DETAILS.pillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-[#141414]/10 bg-white hover:border-[#141414]/25 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="w-6 h-6 rounded-md bg-[#e5262c]/10 text-[#e5262c] text-xs font-mono font-bold flex items-center justify-center">
                            0{idx + 1}
                          </span>
                          <h4 className="text-sm font-semibold text-[#141414]">
                            {pillar.title}
                          </h4>
                        </div>
                        <p className="text-xs text-[#141414]/70 leading-normal pl-8.5">
                          {pillar.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags & Action */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#141414]/60">
                      {AURA_RV_DETAILS.tags.map((tag, i) => (
                        <React.Fragment key={tag}>
                          {i > 0 && <span aria-hidden="true">·</span>}
                          <span>{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveTab("dither")}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#141414] bg-white border border-[#141414]/15 rounded-md hover:bg-neutral-100 transition-colors"
                      >
                        <Layers className="w-3.5 h-3.5 text-[#e5262c]" />
                        <span>Interactive Dither Lab</span>
                      </button>

                      <a
                        href={AURA_RV_DETAILS.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#141414] hover:bg-[#e5262c] rounded-md transition-colors"
                      >
                        <span>Explore aurarv.netlify.app</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Dark Silicon Cockpit Mockup with Embedded Mini DitherVeil Preview */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl bg-gradient-to-br from-[#0c0f14] via-[#141824] to-[#1a1e2e] text-white shadow-xl overflow-hidden border border-white/10">
                    {/* Embedded Mini Dither Veil Window */}
                    <div className="relative w-full h-44 overflow-hidden border-b border-white/10 bg-black">
                      <DitherVeil
                        src={SILICON_DIE_IMAGE}
                        pattern="floyd"
                        pixelSize={2}
                        inkColor="#0c0f14"
                        paperColor="#e5262c"
                        revealRadius={120}
                        softness={0.6}
                        linger={1}
                        rimColor="#ffffff"
                        rim={0.06}
                        wander={true}
                        fit="cover"
                      />
                      <div className="absolute top-2 left-2 z-10 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-white/80 border border-white/15">
                        Interactive Silicon Veil (Touch to dissolve)
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#e5262c]" />
                          <span className="text-xs font-mono tracking-wider text-white/80">
                            RISC-V PIPELINE & KERNEL
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          NETLIFY LIVE
                        </span>
                      </div>

                      <div>
                        <div className="text-xs font-mono text-[#e5262c] mb-1">
                          HARDWARE-SOFTWARE CO-DESIGN
                        </div>
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          Aura RV Architecture
                        </h4>
                        <p className="mt-1 text-xs text-white/70 leading-relaxed font-mono">
                          Instruction Stepper · Hazard Forwarding · MMU Paging · OS Task Scheduler
                        </p>
                      </div>

                      {/* Technical Specs Bento Rows */}
                      <div className="space-y-2 pt-1 border-t border-white/10 text-xs">
                        <div className="flex justify-between text-white/60">
                          <span>Target ISA</span>
                          <span className="font-mono text-white">RV32I / RV64I Privileged</span>
                        </div>
                        <div className="flex justify-between text-white/60">
                          <span>OS Primitives</span>
                          <span className="text-white">Paging (SV32/39), Traps, Syscalls</span>
                        </div>
                        <div className="flex justify-between text-white/60">
                          <span>Deployment URL</span>
                          <span className="font-mono text-emerald-400">aurarv.netlify.app</span>
                        </div>
                        <div className="flex justify-between text-white/60">
                          <span>Engineer</span>
                          <span className="text-white">Sudhanshu Mishra (Chip & OS)</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <a
                          href={AURA_RV_DETAILS.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#141414] bg-white hover:bg-[#f6f4f0] rounded-lg transition-colors shadow-sm"
                        >
                          <Terminal className="w-3.5 h-3.5 text-[#e5262c]" />
                          <span>Open Aura RV in New Window</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default AuraRvShowcaseSection;
