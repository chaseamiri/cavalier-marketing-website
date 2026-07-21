import { ArrowDown, ArrowRight, PhoneMissed, MessageSquareText, PhoneCall, ShieldAlert, CalendarCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        {/* Left: copy stack */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            24/7 AI Speed-to-Lead for HVAC Contractors
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Turn Missed HVAC Calls Into Booked Jobs Before Competitors Even Pick Up.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            When homeowners have an AC emergency, they call the next contractor on Google if you don&apos;t answer. We
            deploy AI text-back and 24/7 voice intake that responds in 15 seconds to book the job on your calendar.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_24px_rgba(75,94,170,0.35)] transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(75,94,170,0.65)]"
            >
              Get Your Free Missed Call Audit
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pipeline"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              See live HVAC call handling
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* Right: split pipeline preview card */}
        <Reveal delay={120} className="relative">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/20 blur-3xl" />
          <div id="pipeline" className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card/80 shadow-2xl backdrop-blur-sm">
            {/* Top half: Missed call -> Instant SMS */}
            <div className="border-b border-border p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-subtle">Missed Call → Instant Text-Back</p>
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-panel px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/15">
                  <PhoneMissed className="h-4 w-4 text-destructive" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Missed call from (480) 555-0142</p>
                  <p className="text-xs text-subtle">No answer — tech on a roof</p>
                </div>
              </div>
              <div className="my-2 flex justify-center" aria-hidden>
                <ArrowDown className="h-3.5 w-3.5 text-deep" />
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-deep bg-primary/10 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
                  <MessageSquareText className="h-4 w-4 text-secondary" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Auto-SMS sent in 15s</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    &ldquo;Hi! Sorry we missed you — is your AC not cooling? Reply and we&apos;ll get a tech booked
                    today.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom half: 24/7 voice intake -> qualification -> dispatch */}
            <div className="p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-subtle">24/7 Inbound AI Voice Call</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-panel px-4 py-3">
                  <PhoneCall className="h-4 w-4 shrink-0 text-secondary" />
                  <p className="text-sm text-muted-foreground">AI receptionist answers on ring one</p>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-panel px-4 py-3">
                  <ShieldAlert className="h-4 w-4 shrink-0 text-secondary" />
                  <p className="text-sm text-muted-foreground">Emergency qualification: no cool air, urgent</p>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-deep bg-success/10 px-4 py-3">
                  <CalendarCheck className="h-4 w-4 shrink-0 text-success" />
                  <p className="text-sm font-medium text-foreground">Dispatch booked — 2:30 PM today</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
