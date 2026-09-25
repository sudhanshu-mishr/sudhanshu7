import React, { useState } from "react"
import { ExternalLink, Github, Sparkles, X, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { CURATED_PROJECTS, ProjectItem } from "../data/portfolioData"

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null)

  const categories = ["All", "Web Design", "Creative Tech", "Full-Stack", "Open Source"]

  const filteredProjects = CURATED_PROJECTS.filter((p) => {
    if (selectedCategory === "All") return true
    return p.category === selectedCategory
  })

  return (
    <section id="projects" className="relative w-full py-20 bg-[#f6f4f0]/85 backdrop-blur-sm border-b border-[#141414]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e5262c] mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Curated Portfolio & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
              Selected Web Engineering & Design Works
            </h2>
            <p className="mt-2 text-base text-[#141414]/70 max-w-2xl">
              From creative vector animation posters to full-scale web design systems and cloud-hosted platforms.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-[#141414]/10 shadow-xs overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#141414] text-white shadow-xs"
                    : "text-[#141414]/70 hover:text-[#141414]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all ${
                project.isFeatured
                  ? "bg-white border-[#141414]/20 shadow-xs ring-1 ring-[#141414]/5"
                  : "bg-white/80 border-[#141414]/10 hover:border-[#141414]/25"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs text-[#141414]/60">
                    <span className="font-semibold text-[#e5262c]">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.metrics}</span>
                  </div>

                  {project.isFeatured && (
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#e5262c]/10 text-[#e5262c] font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                <div>
                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-xl sm:text-2xl font-bold text-[#141414] hover:text-[#e5262c] cursor-pointer transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#141414]/80">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#141414]/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key feature list preview */}
                <ul className="space-y-1.5 pt-2">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#141414]/75">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e5262c] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Action row */}
              <div className="pt-6 mt-6 border-t border-[#141414]/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#141414]/60">
                  {project.tags.map((t, idx) => (
                    <React.Fragment key={t}>
                      {idx > 0 && <span aria-hidden="true">·</span>}
                      <span>{t}</span>
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="px-3 py-1.5 text-xs font-medium rounded-md border border-[#141414]/15 bg-[#f6f4f0] hover:bg-neutral-200 text-[#141414] transition-colors"
                  >
                    Details
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith("#") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-[#e5262c] hover:bg-[#c81e24] text-white transition-colors"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && !project.liveUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-[#141414] hover:bg-neutral-800 text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Lightbox / Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#141414]/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#141414]/10 bg-[#fbfaf8]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#e5262c]">
                <span>{activeModalProject.category.toUpperCase()}</span>
                <span aria-hidden="true">·</span>
                <span>CASE STUDY</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1 rounded-md text-[#141414]/50 hover:text-[#141414] hover:bg-neutral-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div>
                <h3 className="text-2xl font-bold text-[#141414]">{activeModalProject.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#141414]/80">{activeModalProject.tagline}</p>
                <p className="mt-4 text-sm text-[#141414]/75 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414] mb-3">
                  Technical Pillars & Outcomes
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141414]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#e5262c] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414] mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeModalProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#f6f4f0] border border-[#141414]/10 font-mono text-[#141414]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 border-t border-[#141414]/10 bg-[#fbfaf8] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-medium text-[#141414] hover:bg-neutral-100 rounded-md transition-colors"
              >
                Close
              </button>

              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target={activeModalProject.liveUrl.startsWith("#") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  onClick={() => setActiveModalProject(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#e5262c] text-white hover:bg-[#c81e24] rounded-md transition-colors"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#141414] text-white hover:bg-neutral-800 rounded-md transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
