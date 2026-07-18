import { ArrowDown, ArrowRight, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const funnel = [
  { label: 'Leads Captured', value: '142', sub: 'this month', pct: 100 },
  { label: 'Qualified', value: '98', sub: '69% of leads', pct: 69 },
  { label: 'Booked', value: '61', sub: '62% of qualified', pct: 43 },
  { label: 'Revenue Attributed', value: '$47,200', sub: 'from booked jobs', pct: 30, revenue: true },
]

export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Built for home service businesses
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Stop Losing Leads You Already Paid For
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Cavalier builds AI-powered systems that capture, qualify, and book every lead your business gets — even the
            ones you&apos;re missing right now.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_24px_rgba(75,94,170,0.35)] transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(75,94,170,0.65)]"
            >
              Get Your Free Lead Audit
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              See how it works
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          {/* glow behind card */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/20 blur-3xl"
          />
          <div className="rounded-2xl border border-border bg-card/80 p-5 shadow-2xl backdrop-blur-sm sm:p-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-subtle">Lead Pipeline</p>
                <p className="mt-1 font-display text-sm font-medium text-foreground">Live Reporting</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-panel px-2.5 py-1 text-xs text-success">
                <TrendingUp className="h-3.5 w-3.5" />
                Live
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {funnel.map((step, i) => (
                <div key={step.label}>
                  <div className="flex items-end justify-between rounded-xl border border-border bg-panel px-4 py-3">
                    <div>
                      <p className="text-xs text-subtle">{step.label}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{step.sub}</p>
                    </div>
                    <span
                      className={`font-display text-2xl font-semibold ${
                        step.revenue ? 'text-success' : 'text-secondary'
                      }`}
                    >
                      {step.value}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-panel">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${step.pct}%` }}
                    />
                  </div>
                  {i < funnel.length - 1 && (
                    <div className="flex justify-center py-1" aria-hidden>
                      <ArrowDown className="h-3.5 w-3.5 text-deep" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
