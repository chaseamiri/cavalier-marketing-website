import { ClipboardList, Plug, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: ClipboardList,
    title: 'The Missed Call Audit',
    desc: 'We analyze your call logs to calculate exactly how much lost revenue is slipping away every month.',
  },
  {
    icon: Plug,
    title: 'Plug-and-Play Integration',
    desc: 'We connect the text-back and voice intake engines to your existing phone lines and CRM in under 7 days.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Lost Dispatches',
    desc: 'AI handles instant intake 24/7 while your techs stay focused on field installations.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-y border-border bg-panel/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.25em] text-secondary">How it works</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            Live in under 7 days — with zero lost dispatches
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} delay={i * 100}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-7 transition-colors hover:border-deep">
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
