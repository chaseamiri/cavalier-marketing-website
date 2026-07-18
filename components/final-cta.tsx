import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section id="contact" className="cta-glow relative overflow-hidden border-y border-border">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
            Ready to stop losing leads?
          </h2>
          <div className="mt-9 flex justify-center">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_28px_rgba(75,94,170,0.45)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(75,94,170,0.7)]"
            >
              Book Your Free Lead Audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            No commitment. 20-minute call. See exactly where you&apos;re losing revenue.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
