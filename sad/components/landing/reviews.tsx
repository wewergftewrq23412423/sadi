import { Heart, MessageSquare, TrendingUp, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Review = {
  icon: LucideIcon
  title: string
  description: string
}

const reviews: Review[] = [
  {
    icon: Heart,
    title: "Confidence That Lasts",
    description: "Users report sustained improvements in vocal presence. The gains stick around weeks after finishing the program.",
  },
  {
    icon: MessageSquare,
    title: "Real Results, Real Fast",
    description: "Two weeks of daily exercises. Measurable changes in clarity, depth, and expressiveness. Visible on every call.",
  },
  {
    icon: TrendingUp,
    title: "Professional Edge",
    description: "Podcast hosts, founders, and sales leaders see direct impact on audience engagement and deal closures.",
  },
  {
    icon: Users,
    title: "Recommended by Experts",
    description: "Voice coaches and speaking professionals endorse the method. Works for everyone from beginners to broadcasters.",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Testimonials</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Trusted by thousands worldwide.
          </h2>
          <p className="mt-4 text-pretty text-white/60 md:text-lg">
            Real transformations from creators, leaders, and professionals who found their voice.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => {
            const Icon = review.icon
            return (
              <div
                key={review.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />

                <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-6 text-base font-medium tracking-tight text-white">{review.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{review.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
