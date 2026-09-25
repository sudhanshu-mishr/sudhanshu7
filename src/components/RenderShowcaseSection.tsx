import React, { useState } from "react"
import { ExternalLink, Globe, Sparkles, Layout, Zap, Layers, Copy, Check, ArrowUpRight } from "lucide-react"
import { RENDER_SITE_DETAILS } from "../data/portfolioData"

export const RenderShowcaseSection: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [showIframe, setShowIframe] = useState(false)

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(RENDER_SITE_DETAILS.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="web-projects" className="relative w-full py-20 bg-[#f6f4f0]/85 backdrop-blur-sm border-b border-[#141414]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e5262c] mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Special Feature · Live Production Project</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414] text-balance">
              Website Design & Web-Driven Projects
            </h2>
            <p className="mt-3 text-base text-[#141414]/75 leading-relaxed">
              Explore Sudhanshu’s dedicated web hub (
              <span className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-[#141414]/10 text-[#141414]">
                sudhanshu-wxc2.onrender.com
              </span>
              ), crafted specifically for creative website designing, digital branding, responsive architectures, and client-driven web experiences.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopyUrl}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#141414] bg-white border border-[#141414]/15 rounded-md hover:bg-neutral-100 transition-colors shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#141414]/60" />}
              <span>{copied ? "URL Copied!" : "Copy Link"}</span>
            </button>

            <a
              href={RENDER_SITE_DETAILS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#e5262c] hover:bg-[#c81e24] rounded-md transition-colors shadow-sm"
            >
              <Globe className="w-4 h-4" />
              <span>Launch Live Site</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Studio Showcase Card */}
        <div className="rounded-2xl border border-[#141414]/15 bg-white shadow-xs overflow-hidden">
          {/* Simulated Browser Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#141414]/10 bg-[#f9f8f6]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#e5262c]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span className="ml-3 hidden sm:inline-block text-xs font-mono text-[#141414]/50">
                Render Cloud Showcase Window
              </span>
            </div>

            {/* Address bar */}
            <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-md border border-[#141414]/10 text-xs font-mono text-[#141414]/80 max-w-md w-full mx-4 truncate">
              <Globe className="w-3.5 h-3.5 text-[#e5262c] shrink-0" />
              <span className="truncate">{RENDER_SITE_DETAILS.url}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowIframe(!showIframe)}
                className="px-2.5 py-1 text-xs font-medium rounded border border-[#141414]/15 bg-white hover:bg-neutral-50 text-[#141414] transition-colors"
              >
                {showIframe ? "Show Architecture" : "Live View Frame"}
              </button>
            </div>
          </div>

          {/* Interactive Content Area */}
          {showIframe ? (
            <div className="relative w-full h-[520px] bg-neutral-100">
              <iframe
                src={RENDER_SITE_DETAILS.url}
                title="Sudhanshu Mishra Web Design Showcase"
                className="w-full h-full border-none"
                loading="lazy"
              />
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#141414]/10 text-xs shadow-sm flex items-center gap-2">
                <span>Direct link:</span>
                <a
                  href={RENDER_SITE_DETAILS.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#e5262c] hover:underline inline-flex items-center gap-1"
                >
                  Open in New Tab <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Overview */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#e5262c]">
                      Core Specialty
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#141414]">
                      {RENDER_SITE_DETAILS.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#141414]/75 leading-relaxed">
                      {RENDER_SITE_DETAILS.description}
                    </p>
                  </div>

                  {/* 4 Feature Pillars Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {RENDER_SITE_DETAILS.pillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-[#141414]/10 bg-[#fbfaf8] hover:border-[#141414]/25 transition-colors"
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
                    <div className="flex items-center gap-2 text-xs text-[#141414]/60">
                      <span>Web Design</span>
                      <span aria-hidden="true">·</span>
                      <span>Render Hosted</span>
                      <span aria-hidden="true">·</span>
                      <span>Frontend Engineering</span>
                      <span aria-hidden="true">·</span>
                      <span>Interactive UI</span>
                    </div>

                    <a
                      href={RENDER_SITE_DETAILS.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#141414] hover:bg-[#e5262c] rounded-md transition-colors"
                    >
                      <span>Explore sudhanshu-wxc2.onrender.com</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Visual Card Mockup */}
                <div className="lg:col-span-5">
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#141414] to-[#27272a] text-white shadow-xl overflow-hidden">
                    {/* Background Graphic Lines */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#e5262c]/20 blur-2xl" />
                    <div className="relative space-y-5">
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2">
                          <Layout className="w-5 h-5 text-[#e5262c]" />
                          <span className="text-xs font-mono tracking-wider text-white/70">
                            RENDER APP HOSTED
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          ONLINE
                        </span>
                      </div>

                      <div>
                        <div className="text-xs font-mono text-[#e5262c] mb-1">
                          PRIMARY DEPLOYMENT
                        </div>
                        <h4 className="text-xl font-bold text-white tracking-tight">
                          Website Design Showcase
                        </h4>
                        <p className="mt-2 text-xs text-white/70 leading-relaxed">
                          "Built for visitors who value high aesthetic standards, typography precision, and frictionless digital architecture."
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs">
                        <div className="flex justify-between text-white/60">
                          <span>Hosting Target</span>
                          <span className="font-mono text-white">Render Web Service</span>
                        </div>
                        <div className="flex justify-between text-white/60">
                          <span>Design Domain</span>
                          <span className="text-white">Custom Web & Digital Design</span>
                        </div>
                        <div className="flex justify-between text-white/60">
                          <span>Creator</span>
                          <span className="text-white">Sudhanshu Mishra</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <a
                          href={RENDER_SITE_DETAILS.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#141414] bg-white hover:bg-[#f6f4f0] rounded-lg transition-colors"
                        >
                          <Globe className="w-3.5 h-3.5 text-[#e5262c]" />
                          <span>Open Live Site in New Window</span>
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
