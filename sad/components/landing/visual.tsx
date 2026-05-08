"use client"

const screens = [
  { src: "/app-home.jpeg", alt: "Home screen showing voice training plan" },
  { src: "/app-explore.jpeg", alt: "Explore screen with voice exercises" },
  { src: "/app-analysis.jpeg", alt: "Voice analysis results" },
]

export function Visual() {
  // Duplicate the list so the vertical translate loop is seamless.
  const loop = [...screens, ...screens]

  return (
    <section className="relative px-6 pb-24 md:pb-32">
      <div className="relative mx-auto max-w-5xl">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 mx-auto h-[560px] max-w-3xl rounded-full bg-white/[0.06] blur-3xl"
        />

        <div className="relative mx-auto flex justify-center">
          {/* iPhone 15 frame */}
          <div className="relative w-[300px] md:w-[340px]">
            {/* Side buttons */}
            <span
              aria-hidden
              className="absolute -left-[3px] top-[110px] h-8 w-[3px] rounded-l-sm bg-neutral-800"
            />
            <span
              aria-hidden
              className="absolute -left-[3px] top-[160px] h-14 w-[3px] rounded-l-sm bg-neutral-800"
            />
            <span
              aria-hidden
              className="absolute -left-[3px] top-[220px] h-14 w-[3px] rounded-l-sm bg-neutral-800"
            />
            <span
              aria-hidden
              className="absolute -right-[3px] top-[180px] h-20 w-[3px] rounded-r-sm bg-neutral-800"
            />

            {/* Outer titanium bezel */}
            <div className="relative aspect-[9/19.5] w-full rounded-[2.75rem] bg-gradient-to-b from-neutral-700 via-neutral-900 to-neutral-800 p-[3px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)]">
              {/* Inner frame */}
              <div className="relative h-full w-full rounded-[2.6rem] bg-black p-[8px]">
                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-black">
                  {/* Dynamic Island */}
                  <div className="absolute left-1/2 top-2 z-20 h-[26px] w-[95px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/5">
                    <span className="absolute right-3 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-neutral-800" />
                  </div>

                  {/* Auto-scrolling screenshots */}
                  <div
                    className="absolute inset-0 will-change-transform"
                    style={{
                      animation: "vox-phone-scroll 18s linear infinite",
                    }}
                  >
                    {loop.map((s, i) => (
                      <div key={i} className="relative h-full w-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.src || "/placeholder.svg"}
                          alt={s.alt}
                          className="block h-full w-full object-cover"
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Subtle screen reflection */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[2.1rem] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"
                  />
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
        @keyframes vox-phone-scroll {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="vox-phone-scroll"] { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
