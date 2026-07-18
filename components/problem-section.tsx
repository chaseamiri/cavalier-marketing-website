import { Reveal } from '@/components/reveal'

const stats = [
  { number: '78%', text: 'of customers buy from whoever responds first' },
  { number: '1 in 4', text: 'calls to service businesses goes unanswered' },
  { number: '5 min', text: 'is all it takes for most leads to go cold' },
]

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
          Every missed call is a job that just went to your competitor
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <Reveal key={stat.number} delay={i * 100}>
            <div className="h-full rounded-2xl border border-border bg-panel p-8 text-center transition-colors hover:border-deep">
              <p className="font-display text-5xl font-semibold text-secondary">{stat.number}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">{stat.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
