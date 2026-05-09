import { Star, Quote } from "lucide-react"

type Review = {
  name: string
  handle: string
  rating: number
  quote: string
  initials: string
}

const reviews: Review[] = [
  {
    name: "Marcus Chen",
    handle: "Podcast Host",
    rating: 5,
    quote:
      "My voice finally sounds the way I always heard it in my head. Deeper, calmer, and way more authoritative on every episode.",
    initials: "MC",
  },
  {
    name: "Priya Sharma",
    handle: "Product Manager",
    rating: 5,
    quote:
      "I used to dread big meetings. After two weeks of daily exercises, I lead the room without forcing it. Genuinely life-changing.",
    initials: "PS",
  },
  {
    name: "Daniel Okafor",
    handle: "Sales Lead",
    rating: 5,
    quote:
      "Clarity went up, filler words went down. My close rate is up and my team keeps asking what I changed.",
    initials: "DO",
  },
  {
    name: "Sofia Romano",
    handle: "Voice Coach",
    rating: 5,
    quote:
      "The exercise design is the best I have seen in a consumer app. I now recommend it to my own students.",
    initials: "SR",
  },
  {
    name: "Hiroshi Tanaka",
    handle: "Founder",
    rating: 5,
    quote:
      "Pitching investors used to wreck me. Now my voice carries. Same words, completely different reception.",
    initials: "HT",
  },
  {
    name: "Aaliyah Brooks",
    handle: "Creator",
    rating: 5,
    quote:
      "Voiceovers in one take. The depth and warmth in my recordings is on another level since I started.",
    initials: "AB",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Testimonials</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Loved by people who speak for a living.
          </h2>
          <p className="mt-4 text-pretty text-white/60 md:text-lg">
            Real stories from creators, founders, and professionals who found their voice.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-white text-white" />
              ))}
            </div>
            <span className="text-sm text-white/60">
              <span className="text-white">4.9</span> from 2,400+ reviews
            </span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />

              <Quote aria-hidden className="size-5 text-white/20" />

              <div className="mt-4 flex items-center gap-0.5" aria-label={`Rated ${review.rating} out of 5`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-white text-white" />
                ))}
              </div>

              <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-white/75">
                {review.quote}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-medium tracking-wide text-white">
                  {review.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">{review.name}</span>
                  <span className="text-xs text-white/40">{review.handle}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
