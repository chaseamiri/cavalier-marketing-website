import { Reveal } from '@/components/reveal'

const flows = [
  {
    stage: 'Before Cavalier',
    quote: 'Calls missed during jobs went straight to voicemail — and most never called back.',
    outcome: 'Leads leaking daily',
  },
  {
    stage: 'Week one',
    quote: 'Every missed call gets an instant text-back and the AI starts qualifying on its own.',
    outcome: 'Response time under 30s',
  },
  {
    stage: 'Typical outcome',
    quote: 'More of the same ad spend turns into booked jobs, tracked in one dashboard.',
    outcome: 'Up to 40% more jobs booked',
  },
]

const stats = [
  { value: '30s', label: 'average response time' },
  { value: '3x', label: 'faster lead follow-up' },
  { value: '10+', label: 'hours saved per week' },
]

export function ResultsSection() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-[0.25em] text-secondary">How it typically flows</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
          Built for businesses that can&apos;t afford to lose a lead
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {flows.map((flow, i) => (
          <Reveal key={flow.stage} delay={i * 100}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-panel p-7">
              <span className="text-xs uppercase tracking-[0.2em] text-subtle">{flow.stage}</span>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground text-pretty">
                {flow.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 font-display text-sm font-medium text-secondary">
                {flow.outcome}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card px-6 py-8 text-center">
              <p className="font-display text-4xl font-semibold text-foreground">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <p className="mt-6 text-center text-xs text-subtle">
        Illustrative figures shown while we collect verified client results.
      </p>
    </section>
  )
}
