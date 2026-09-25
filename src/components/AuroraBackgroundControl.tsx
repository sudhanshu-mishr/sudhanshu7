import React, { useState } from "react"
import { Sparkles, Sliders, ChevronDown, ChevronUp, Sun, Moon, Gauge } from "lucide-react"

export interface AuroraSettings {
  colorStops: [string, string, string]
  blend: number
  amplitude: number
  speed: number
  lightMode: boolean
  swarmCursorEnabled?: boolean
}

export const AURORA_PRESETS: { name: string; stops: [string, string, string]; description: string }[] = [
  {
    name: "React Bits Cosmic",
    stops: ["#7cff67", "#B497CF", "#5227FF"],
    description: "Original vibrant green-purple-indigo spectrum",
  },
  {
    name: "Vermilion Silicon",
    stops: ["#e5262c", "#ff735c", "#5227FF"],
    description: "Sudhanshu signature vermilion red & deep indigo",
  },
  {
    name: "Electric Aurora",
    stops: ["#00f0ff", "#7cff67", "#3b82f6"],
    description: "High-voltage cyan, emerald & electric cobalt",
  },
  {
    name: "Sunset Plasma",
    stops: ["#f59e0b", "#e5262c", "#8b5cf6"],
    description: "Warm amber, crimson flare, and violet dusk",
  },
]

interface AuroraBackgroundControlProps {
  settings: AuroraSettings
  onChange: (newSettings: AuroraSettings) => void
}

export const AuroraBackgroundControl: React.FC<AuroraBackgroundControlProps> = ({
  settings,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const activePresetIndex = AURORA_PRESETS.findIndex(
    (p) => JSON.stringify(p.stops) === JSON.stringify(settings.colorStops)
  )

  return (
    <div className="fixed bottom-4 left-4 z-40 font-mono text-xs select-none">
      {/* Collapsed Pill */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#141414] border border-[#141414]/15 shadow-lg backdrop-blur-md transition-all hover:scale-105"
          title="Customize Aurora background effect"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold text-[11px]">Aurora Background</span>
          <Sliders className="w-3 h-3 text-[#141414]/60" />
        </button>
      )}

      {/* Expanded Control Panel */}
      {isOpen && (
        <div className="w-72 p-3.5 rounded-2xl bg-white/95 text-[#141414] border border-[#141414]/15 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between border-b border-[#141414]/10 pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e5262c]" />
              <span className="font-bold text-[11px] uppercase tracking-wider">Aurora Shader Controls</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[#141414]/60 hover:text-[#141414] hover:bg-neutral-100 transition-colors"
              title="Minimize panel"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {/* Palette Presets */}
            <div>
              <div className="text-[10px] uppercase text-[#141414]/50 mb-1 font-semibold">Color Ramp:</div>
              <div className="grid grid-cols-2 gap-1.5">
                {AURORA_PRESETS.map((p, idx) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => onChange({ ...settings, colorStops: p.stops })}
                    className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg border text-[10px] text-left transition-all ${
                      activePresetIndex === idx
                        ? "border-[#141414] bg-neutral-100 font-bold shadow-xs"
                        : "border-[#141414]/10 hover:border-[#141414]/25 bg-neutral-50/50"
                    }`}
                  >
                    <div className="flex -space-x-1 shrink-0">
                      {p.stops.map((color, i) => (
                        <span
                          key={i}
                          className="w-2.5 h-2.5 rounded-full border border-white"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="truncate">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Speed & Amplitude Controls */}
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#141414]/10 text-[11px]">
              <div>
                <div className="text-[10px] text-[#141414]/50 mb-1 flex items-center justify-between">
                  <span>Speed:</span>
                  <span className="font-bold">{settings.speed.toFixed(1)}x</span>
                </div>
                <div className="flex gap-1">
                  {[0.2, 0.5, 1.0].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => onChange({ ...settings, speed: s })}
                      className={`flex-1 py-0.5 rounded text-[10px] ${
                        settings.speed === s
                          ? "bg-[#141414] text-white font-bold"
                          : "bg-neutral-100 hover:bg-neutral-200"
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] text-[#141414]/50 mb-1 flex items-center justify-between">
                  <span>Intensity:</span>
                  <span className="font-bold">{settings.amplitude.toFixed(1)}</span>
                </div>
                <div className="flex gap-1">
                  {[0.6, 1.0, 1.4].map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => onChange({ ...settings, amplitude: a })}
                      className={`flex-1 py-0.5 rounded text-[10px] ${
                        settings.amplitude === a
                          ? "bg-[#141414] text-white font-bold"
                          : "bg-neutral-100 hover:bg-neutral-200"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Light / Dark Shader Mode */}
            <div className="flex items-center justify-between pt-1 border-t border-[#141414]/10">
              <span className="text-[10px] text-[#141414]/60">Chroma Blending Mode:</span>
              <button
                type="button"
                onClick={() => onChange({ ...settings, lightMode: !settings.lightMode })}
                className={`relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-medium transition-all duration-300 ease-out shadow-xs ${
                  settings.lightMode
                    ? "bg-[#e5262c] text-white shadow-[#e5262c]/20"
                    : "bg-neutral-100 text-[#141414] hover:bg-neutral-200 border border-neutral-200/60"
                }`}
              >
                <span className="transition-transform duration-300 ease-out transform">
                  {settings.lightMode ? (
                    <Sun className="w-3 h-3 text-amber-200 animate-spin-slow" />
                  ) : (
                    <Moon className="w-3 h-3 text-indigo-500" />
                  )}
                </span>
                <span className="tracking-tight transition-colors duration-300">
                  {settings.lightMode ? "High Chroma (Light)" : "Ambient Wave"}
                </span>
              </button>
            </div>

            {/* Swarm Cursor Particle Fluid Toggle */}
            <div className="flex items-center justify-between pt-1 border-t border-[#141414]/10">
              <span className="text-[10px] text-[#141414]/60">Swarm Cursor:</span>
              <button
                type="button"
                onClick={() =>
                  onChange({
                    ...settings,
                    swarmCursorEnabled: settings.swarmCursorEnabled === false ? true : false,
                  })
                }
                className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                  settings.swarmCursorEnabled !== false
                    ? "bg-[#141414] text-white"
                    : "bg-neutral-100 text-[#141414]/60 hover:bg-neutral-200"
                }`}
              >
                {settings.swarmCursorEnabled !== false ? "Active (Scatter on Click)" : "Muted"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AuroraBackgroundControl
