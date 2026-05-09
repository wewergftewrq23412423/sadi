import { AudioLines, MessageSquareText, Sparkles, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: AudioLines,
    title: "Deep Voice Experience",
    description: "Refined low-end resonance and tonal depth, tuned for a natural, grounded presence.",
  },
  {
    icon: MessageSquareText,
    title: "Communication Enhancement",
    description: "Sharper clarity and articulation, so every word lands with the weight you intend.",
  },
  {
    icon: Sparkles,
    title: "Clean & Fast Interface",
    description: "A minimal, distraction-free experience built for speed, focus, and effortless control.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Simple Usage",
    description: "On-device processing by default. No accounts, no tracking — just your voice.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Features</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Built for the way you speak.
          </h2>
          <p className="mt-4 text-pretty text-white/60 md:text-lg">
            Every detail is designed to disappear, so your voice can do the work.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/25 hover:from-white/[0.12] hover:to-white/[0.06] hover:shadow-lg hover:shadow-white/5"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />

                <div className="flex size-12 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-white/90 transition-colors group-hover:border-white/25 group-hover:bg-gradient-to-br group-hover:from-white/[0.12] group-hover:to-white/[0.06] group-hover:text-white">
                  <Icon className="size-6" />
                </div>

                <h3 className="mt-7 text-base font-semibold tracking-tight text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
