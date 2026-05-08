import { Mic, Pause } from "lucide-react"

function Waveform() {
  // A static, deterministic set of bar heights so SSR and CSR match.
  const bars = [
    18, 32, 56, 28, 72, 44, 88, 60, 38, 74, 52, 92, 48, 30, 66, 40, 78, 36, 84, 50, 24, 68, 46, 90, 54, 32, 70, 42, 80,
    34, 58, 26,
  ]

  return (
    <div className="flex h-24 items-center justify-center gap-[3px]">
      {bars.map((h, i) => (
        <span
          key={i}
          className="block w-[3px] rounded-full bg-gradient-to-t from-white/20 via-white/70 to-white"
          style={{
            height: `${h}%`,
            animation: `vox-pulse 1.6s ease-in-out ${i * 0.04}s infinite alternate`,
          }}
        />
      ))}
    </div>
  )
}

export function Visual() {
  return (
    <section className="relative px-6 pb-24 md:pb-32">
      <div className="relative mx-auto max-w-5xl">
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 mx-auto h-[520px] max-w-3xl rounded-full bg-white/[0.06] blur-3xl"
        />

        <div className="relative mx-auto flex justify-center">
          {/* Phone frame */}
          <div className="relative aspect-[9/19] w-[300px] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-3 shadow-[0_30px_120px_-20px_rgba(255,255,255,0.15)] md:w-[340px]">
            {/* Inner screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black">
              {/* Notch */}
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />

              {/* Screen content */}
              <div className="flex h-full flex-col px-5 pt-12 pb-6">
                <div className="flex items-center justify-between text-[10px] text-white/50">
                  <span>9:41</span>
                  <span>Vox</span>
                </div>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-widest text-white/40">Now recording</p>
                  <h3 className="mt-1 text-xl font-medium tracking-tight text-white">Deep Tone · Studio</h3>
                </div>

                {/* Waveform card */}
                <div className="relative mt-6 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <Waveform />

                  <div className="mt-6 flex items-center justify-between text-[11px] text-white/50">
                    <span className="font-mono">00:42</span>
                    <span className="font-mono">02:18</span>
                  </div>

                  <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/3 rounded-full bg-white/80" />
                  </div>

                  <div className="mt-6 flex items-center justify-around">
                    <button className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60">
                      <span className="block h-2 w-2 rounded-full bg-white/60" />
                    </button>
                    <button className="flex size-14 items-center justify-center rounded-full bg-white text-black shadow-[0_0_30px_-5px_rgba(255,255,255,0.6)]">
                      <Mic className="size-5" />
                    </button>
                    <button className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60">
                      <Pause className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Preset chips */}
                <div className="mt-5 flex gap-2 text-[11px]">
                  <span className="rounded-full border border-white/10 bg-white text-black px-3 py-1">Deep</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-white/60">
                    Warm
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-white/60">
                    Clear
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating callouts */}
          <div className="absolute -left-4 top-16 hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur md:block">
            <p className="text-[10px] uppercase tracking-widest text-white/40">Latency</p>
            <p className="mt-1 font-mono text-sm text-white">12ms</p>
          </div>

          <div className="absolute -right-6 bottom-24 hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur md:block">
            <p className="text-[10px] uppercase tracking-widest text-white/40">Clarity</p>
            <p className="mt-1 font-mono text-sm text-white">+38%</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes vox-pulse {
          0% { transform: scaleY(0.4); opacity: 0.6; }
          100% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
