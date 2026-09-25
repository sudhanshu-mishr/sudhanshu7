import React, { useState, useEffect } from "react"
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Search,
  RefreshCw,
  Code,
  Copy,
  Check,
  FolderGit2,
} from "lucide-react"
import { Repository, USER_INFO, FALLBACK_REPOSITORIES } from "../data/portfolioData"

export const GithubSection: React.FC = () => {
  const [username, setUsername] = useState(USER_INFO.githubUsername)
  const [repos, setRepos] = useState<Repository[]>(FALLBACK_REPOSITORIES)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All")
  const [copiedCloneId, setCopiedCloneId] = useState<string | number | null>(null)

  const fetchGithubRepos = async (targetUser: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`https://api.github.com/users/${targetUser}/repos?sort=updated&per_page=30`)
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error(`GitHub user "${targetUser}" not found. Showing curated projects.`)
        } else if (res.status === 403) {
          throw new Error("GitHub API rate limit reached. Displaying cached repositories.")
        } else {
          throw new Error(`Unable to fetch repos (${res.status}). Showing curated projects.`)
        }
      }
      const data: Repository[] = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        setRepos(data)
      } else {
        setRepos(FALLBACK_REPOSITORIES)
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "GitHub lookup notice"
      setError(message)
      setRepos(FALLBACK_REPOSITORIES)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGithubRepos(username)
  }, [])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      fetchGithubRepos(username.trim())
    }
  }

  // Get unique languages
  const languages = ["All", ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean) as string[]))]

  const filteredRepos = repos.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesLang = selectedLanguage === "All" || r.language === selectedLanguage
    return matchesSearch && matchesLang
  })

  const copyCloneUrl = (repo: Repository) => {
    navigator.clipboard.writeText(`git clone ${repo.html_url}.git`)
    setCopiedCloneId(repo.id)
    setTimeout(() => setCopiedCloneId(null), 2000)
  }

  return (
    <section id="github-section" className="relative w-full py-20 bg-white/85 backdrop-blur-sm border-b border-[#141414]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e5262c] mb-3">
              <FolderGit2 className="w-4 h-4" />
              <span>Open Source & GitHub Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
              Connected GitHub Profile & Repositories
            </h2>
            <p className="mt-2 text-base text-[#141414]/70 max-w-2xl">
              Live synchronized code repositories, algorithmic experiments, and full-stack projects directly from GitHub (
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#e5262c] hover:underline"
              >
                @{username}
              </a>
              ).
            </p>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#141414] bg-[#f6f4f0] hover:bg-neutral-200 border border-[#141414]/10 rounded-md transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* GitHub User Search & Filters Bar */}
        <div className="mb-8 p-4 rounded-xl border border-[#141414]/10 bg-[#fbfaf8] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* User Search Switcher */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 max-w-md w-full">
            <div className="relative flex-1">
              <Github className="w-4 h-4 text-[#141414]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="GitHub Username"
                className="w-full pl-9 pr-3 py-2 text-xs rounded-md border border-[#141414]/15 bg-white text-[#141414] focus:outline-none focus:ring-1 focus:ring-[#e5262c] font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-3.5 py-2 text-xs font-medium bg-[#141414] text-white rounded-md hover:bg-[#e5262c] transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>{loading ? "Syncing..." : "Sync"}</span>
            </button>
          </form>

          {/* Repo Name Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="w-3.5 h-3.5 text-[#141414]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search repositories..."
              className="w-full pl-8 pr-3 py-2 text-xs rounded-md border border-[#141414]/15 bg-white text-[#141414] focus:outline-none focus:ring-1 focus:ring-[#e5262c]"
            />
          </div>

          {/* Language filter pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
            {languages.slice(0, 5).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setSelectedLanguage(lang)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  selectedLanguage === lang
                    ? "bg-[#141414] text-white"
                    : "bg-white text-[#141414]/70 border border-[#141414]/10 hover:text-[#141414]"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Notice/Error Banner if fallback is used */}
        {error && (
          <div className="mb-6 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center justify-between">
            <span>{error}</span>
            <button
              type="button"
              onClick={() => {
                setUsername(USER_INFO.githubUsername)
                fetchGithubRepos(USER_INFO.githubUsername)
              }}
              className="underline font-semibold ml-2 hover:text-amber-900"
            >
              Reset to @{USER_INFO.githubUsername}
            </button>
          </div>
        )}

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col justify-between p-5 rounded-xl border border-[#141414]/10 bg-white hover:border-[#141414]/30 hover:shadow-xs transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#e5262c] shrink-0" />
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sm text-[#141414] group-hover:text-[#e5262c] transition-colors truncate"
                      title={repo.name}
                    >
                      {repo.name}
                    </a>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#141414]/40 hover:text-[#141414] transition-colors"
                    aria-label={`Open ${repo.name} on GitHub`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-[#141414]/70 line-clamp-3 leading-relaxed">
                  {repo.description || "Open source project & modular codebase by Sudhanshu Mishra."}
                </p>
              </div>

              {/* Repo Footer Metadata */}
              <div className="pt-4 mt-4 border-t border-[#141414]/10 flex items-center justify-between text-xs text-[#141414]/60">
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="flex items-center gap-1 font-mono text-[11px] text-[#141414]/80">
                      <span className="w-2 h-2 rounded-full bg-[#e5262c]" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <GitFork className="w-3 h-3" />
                    {repo.forks_count}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => copyCloneUrl(repo)}
                  title="Copy git clone command"
                  className="p-1 rounded text-[#141414]/50 hover:text-[#141414] hover:bg-neutral-100 transition-colors"
                >
                  {copiedCloneId === repo.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12 border border-dashed border-[#141414]/15 rounded-xl bg-[#fbfaf8]">
            <p className="text-sm text-[#141414]/60">No repositories found matching "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("")
                setSelectedLanguage("All")
              }}
              className="mt-3 text-xs font-semibold text-[#e5262c] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
