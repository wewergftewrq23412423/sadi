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

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />

                <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-6 text-base font-medium tracking-tight text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
