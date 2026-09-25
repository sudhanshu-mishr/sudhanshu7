import React, { useState } from "react"
import { Mail, Github, Globe, Copy, Check, Send, ArrowUpRight } from "lucide-react"
import { USER_INFO } from "../data/portfolioData"

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [senderName, setSenderName] = useState("")
  const [senderSubject, setSenderSubject] = useState("")
  const [senderMessage, setSenderMessage] = useState("")

  const copyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(senderSubject || `Portfolio Inquiry from ${senderName || "Website Visitor"}`)
    const body = encodeURIComponent(
      `Hi Sudhanshu,\n\n${senderMessage}\n\nFrom: ${senderName || "Visitor"}`
    )
    window.location.href = `mailto:${USER_INFO.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative w-full py-20 bg-[#f6f4f0]/85 backdrop-blur-sm border-b border-[#141414]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e5262c] mb-3">
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
                Let's Build Something High-Impact Together
              </h2>
              <p className="mt-3 text-sm text-[#141414]/75 leading-relaxed">
                Whether you need specialized RISC-V chip architecture consulting, custom OS kernel and driver development, or high-performance modern web platforms, my inbox is open for contracts and collaborations.
              </p>
            </div>

            {/* Direct Connect Cards */}
            <div className="space-y-3 pt-2">
              {/* Latest Project: Aura RV */}
              <a
                href={USER_INFO.auraRvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-[#e5262c]/30 bg-white flex items-center justify-between gap-3 hover:border-[#e5262c] transition-colors shadow-xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#e5262c]/10 text-[#e5262c] shrink-0 font-bold text-xs">
                    RV
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#e5262c] font-semibold">Latest Project (Silicon & OS)</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#141414] group-hover:text-[#e5262c] transition-colors">
                      aurarv.netlify.app
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#e5262c] transition-colors" />
              </a>

              {/* Email Card */}
              <div className="p-4 rounded-xl border border-[#141414]/10 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2 rounded-lg bg-[#e5262c]/10 text-[#e5262c] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono uppercase text-[#141414]/50">Direct Email</div>
                    <a
                      href={`mailto:${USER_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#141414] hover:text-[#e5262c] transition-colors truncate block"
                    >
                      {USER_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2.5 py-1.5 rounded-md border border-[#141414]/15 hover:bg-neutral-100 text-xs font-medium text-[#141414] transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Web Hub Card */}
              <a
                href={USER_INFO.renderSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-[#141414]/10 bg-white flex items-center justify-between gap-3 hover:border-[#e5262c]/40 transition-colors shadow-xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-100 text-[#141414] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#141414]/50">Web Projects Showcase</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#141414] group-hover:text-[#e5262c] transition-colors">
                      sudhanshu-wxc2.onrender.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#141414]/40 group-hover:text-[#e5262c] transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={USER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-[#141414]/10 bg-white flex items-center justify-between gap-3 hover:border-[#141414]/40 transition-colors shadow-xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-100 text-[#141414] shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#141414]/50">GitHub Repositories</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#141414] group-hover:text-[#e5262c] transition-colors">
                      github.com/{USER_INFO.githubUsername}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#141414]/40 group-hover:text-[#141414] transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-[#141414]/15 bg-white shadow-xs">
              <h3 className="text-lg font-bold text-[#141414] mb-1">Send a Direct Message</h3>
              <p className="text-xs text-[#141414]/65 mb-6">
                Fill in the details below to launch your email client pre-addressed to Sudhanshu Mishra.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#141414]/80 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-[#141414]/15 bg-[#fbfaf8] text-[#141414] focus:outline-none focus:ring-1 focus:ring-[#e5262c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#141414]/80 mb-1.5">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={senderSubject}
                      onChange={(e) => setSenderSubject(e.target.value)}
                      placeholder="e.g. Website Redesign Project"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-[#141414]/15 bg-[#fbfaf8] text-[#141414] focus:outline-none focus:ring-1 focus:ring-[#e5262c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#141414]/80 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Tell me about your website goals, timeline, or design questions..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-[#141414]/15 bg-[#fbfaf8] text-[#141414] focus:outline-none focus:ring-1 focus:ring-[#e5262c] resize-none"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-[#141414]/50">
                    Typical response time: Within 24 hours
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#e5262c] hover:bg-[#c81e24] rounded-md transition-colors shadow-sm"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
