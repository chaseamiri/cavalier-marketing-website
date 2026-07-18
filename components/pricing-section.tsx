import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const tiers = [
  {
    name: 'Starter',
    setup: '$1,500 setup',
    price: '$990',
    period: '/mo',
    desc: 'For single-location shops ready to stop missing calls.',
    features: ['Missed-call text-back', 'AI lead qualification', 'Booking automation', 'Reporting dashboard'],
    highlighted: false,
  },
  {
    name: 'Growth',
    setup: '$2,500 setup',
    price: '$1,990',
    period: '/mo',
    desc: 'For growing teams scaling ad spend and call volume.',
    features: [
      'Everything in Starter',
      'Multi-channel capture (call, form, ads)',
      'Priority routing & follow-up sequences',
      'Advanced analytics & attribution',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    setup: 'Custom setup',
    price: 'Custom',
    period: '',
    desc: 'For multi-location operators with custom needs.',
    features: [
      'Everything in Growth',
      'Voice AI answering (premium add-on)',
      'Dedicated integration engineering',
      'SLA & dedicated account manager',
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-y border-border bg-panel/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.25em] text-secondary">Pricing</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            Simple pricing, real ROI
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? 'border-primary bg-card shadow-[0_0_40px_rgba(75,94,170,0.25)]'
                    : 'border-border bg-card'
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-medium text-foreground">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.desc}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-semibold text-foreground">{tier.price}</span>
                  <span className="pb-1 text-sm text-muted-foreground">{tier.period}</span>
                </div>
                <p className="mt-1 text-xs text-subtle">{tier.setup}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-shadow duration-300 ${
                    tier.highlighted
                      ? 'bg-primary text-primary-foreground hover:shadow-[0_0_28px_rgba(75,94,170,0.6)]'
                      : 'border border-border bg-panel text-foreground hover:border-deep'
                  }`}
                >
                  Book Your Free Lead Audit
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
