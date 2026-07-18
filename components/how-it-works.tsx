import { PhoneCall, MessageSquareText, ListChecks, CalendarCheck, BellRing, LayoutDashboard } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: PhoneCall, title: 'Lead comes in', desc: 'A call, form submission, or ad click hits your business.' },
  { icon: MessageSquareText, title: 'Instant AI response', desc: 'An SMS or chat reply goes out within seconds — never leave them waiting.' },
  { icon: ListChecks, title: 'AI qualifies the lead', desc: 'It gathers the issue, urgency, and location before you lift a finger.' },
  { icon: CalendarCheck, title: 'Automatic booking', desc: 'Qualified leads are dropped straight into your calendar.' },
  { icon: BellRing, title: 'Confirmation + reminder', desc: 'The customer gets a confirmation and reminder so they show up.' },
  { icon: LayoutDashboard, title: 'One clear dashboard', desc: 'Every lead, booking, and dollar tracked in a single view.' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-panel/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.25em] text-secondary">How it works</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            From missed call to booked job — automatically
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} delay={(i % 3) * 100}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-deep">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 font-display text-sm font-semibold text-secondary ring-1 ring-inset ring-deep">
                      {i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
