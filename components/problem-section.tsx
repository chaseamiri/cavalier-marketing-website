import { X, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const losing = [
  'Techs under a house or on a roof can\u2019t answer the phone.',
  'After-hours calls go straight to a generic voicemail.',
  'Homeowners immediately call the next HVAC shop on Google.',
  'Office staff burns hours chasing cold voicemail leads.',
]

const captured = [
  'Missed call triggers instant text response in under 15 seconds.',
  '24/7 AI voice receptionist answers, screens, and schedules jobs.',
  'Homeowner gets instantly engaged and stops shopping around.',
  'Calendar fills with pre-qualified dispatch appointments.',
]

export function ProblemSection() {
  return (
    <section id="problem" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
          Every missed call is a job that just went to your competitor
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {/* Losing installs */}
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-panel p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-destructive">The Traditional Way</p>
            <h3 className="mt-2 font-display text-xl font-medium text-foreground">Losing Installs</h3>
            <ul className="mt-6 space-y-4">
              {losing.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/15">
                    <X className="h-3 w-3 text-destructive" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* 100% captured */}
        <Reveal delay={120}>
          <div className="h-full rounded-2xl border border-deep bg-card p-8 shadow-[0_0_40px_rgba(75,94,170,0.18)]">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">The Cavalier AI Way</p>
            <h3 className="mt-2 font-display text-xl font-medium text-foreground">100% Captured</h3>
            <ul className="mt-6 space-y-4">
              {captured.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15">
                    <Check className="h-3 w-3 text-success" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
