'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'How fast can this be set up?',
    a: 'Most systems are live within 5 to 7 business days. We handle the setup, connect it to your existing tools, and test everything before it goes live — you barely lift a finger.',
  },
  {
    q: 'Do I need new phone numbers?',
    a: 'No. Cavalier works with your existing business number using call forwarding and text-enabled routing, so customers keep reaching you the same way they always have.',
  },
  {
    q: 'What if I already use dispatch software?',
    a: 'That is exactly the point. We integrate with the tools you already run — ServiceTitan, Housecall Pro, Jobber, and more — so bookings flow straight into your current calendar and workflow.',
  },
  {
    q: 'Is this locked into a long-term contract?',
    a: 'No long-term lock-in. We earn your business month to month. If Cavalier is not booking you more jobs, you are free to leave.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-secondary">FAQ</p>
      <h2 className="mt-4 text-center font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
        Questions, answered
      </h2>

      <div className="mt-12 space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div key={faq.q} className="overflow-hidden rounded-xl border border-border bg-panel">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base font-medium text-foreground">{faq.q}</span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
