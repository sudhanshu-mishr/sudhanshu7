import React from "react"

export interface SectionDividerProps {
  label?: string
  sectionNumber?: string
  className?: string
  accent?: boolean
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  label,
  sectionNumber,
  className = "",
  accent = false,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none py-1 ${className}`}
      aria-hidden="true"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Left Rule */}
          <div className="flex-1 h-px bg-[#141414]/15" />

          {/* Center / Swiss Index Marker (if provided) */}
          {(sectionNumber || label) && (
            <div className="mx-4 flex items-center gap-2.5 px-3 py-1 font-mono text-[10px] tracking-widest uppercase bg-[#f6f4f0]/90 backdrop-blur-xs border border-[#141414]/10 rounded-xs shadow-2xs">
              {sectionNumber && (
                <span
                  className={`font-bold ${
                    accent ? "text-[#e5262c]" : "text-[#141414]/60"
                  }`}
                >
                  § {sectionNumber}
                </span>
              )}
              {sectionNumber && label && (
                <span className="w-1 h-1 rounded-full bg-[#141414]/20" />
              )}
              {label && (
                <span className="text-[#141414]/75 font-medium tracking-wider">
                  {label}
                </span>
              )}
            </div>
          )}

          {/* Right Rule */}
          <div className="flex-1 h-px bg-[#141414]/15" />

          {/* Right End Notch Indicator */}
          <div className="ml-3 hidden sm:flex items-center gap-1">
            <span className="w-1.5 h-1.5 border border-[#141414]/25 rotate-45" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionDivider
