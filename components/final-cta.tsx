import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section id="contact" className="cta-glow relative overflow-hidden border-y border-border">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
            Stop sending $5,000 installs to your competitors down the street.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Book a 15-minute Missed Call Audit to see how many calls your shop is dropping every month.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-lg border-t border-white/20 bg-indigo-600/80 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-indigo-500/20 backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]"
            >
              Get Your Free Missed Call Audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
