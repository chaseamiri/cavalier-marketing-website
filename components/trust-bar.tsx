import { Reveal } from '@/components/reveal'

const stats = [
  { number: '$5,000+', text: 'Average lost revenue per missed install call' },
  { number: '15 Seconds', text: 'Average AI text-back response time' },
  { number: '85%', text: 'Homeowners hire the first contractor who responds' },
]

const integrations = ['ServiceTitan', 'Housecall Pro', 'FieldEdge', 'Google Calendar', 'Twilio']

export function TrustBar() {
  return (
    <section id="metrics" className="scroll-mt-16 border-y border-border bg-panel/50">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.number} delay={i * 100}>
              <div className="h-full bg-card px-6 py-8 text-center">
                <p className="font-display text-4xl font-semibold text-secondary sm:text-5xl">{stat.number}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{stat.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.25em] text-subtle">
          Plugs into the tools your shop already runs
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {integrations.map((tool) => (
            <span
              key={tool}
              className="font-display text-lg font-medium tracking-wide text-subtle/70 transition-colors hover:text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
