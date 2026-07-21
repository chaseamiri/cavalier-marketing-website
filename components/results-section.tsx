import { MessageSquareText, PhoneCall } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const cards = [
  {
    icon: MessageSquareText,
    title: 'Instant Missed-Call Text-Back',
    points: [
      'Fires an automated SMS within 10 seconds of an unanswered call.',
      'Triage prompts screen the issue ("No cool air?", "System leaking?").',
      'Includes an interactive text-based self-scheduling link.',
    ],
  },
  {
    icon: PhoneCall,
    title: '24/7 AI Inbound Voice Agent',
    points: [
      'Natural, conversational voice intake for overflow & after-hours calls.',
      'Emergency triage differentiates maintenance vs. system failures.',
      'Schedules appointments into your CRM/calendar with full job notes.',
    ],
  },
]

export function ResultsSection() {
  return (
    <section id="deliverables" className="border-y border-border bg-panel/40">
      <div className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.25em] text-secondary">Core deliverables</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            Two engines working around the clock
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <Reveal key={card.title} delay={i * 120}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-deep">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-inset ring-deep">
                    <Icon className="h-5 w-5 text-secondary" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium text-foreground">{card.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
