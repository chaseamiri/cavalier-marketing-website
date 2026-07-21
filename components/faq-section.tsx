'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Will the AI voice sound like a cheap robot to my customers?',
    a: 'No. Our voice agent uses natural, conversational speech that mirrors a trained receptionist — it greets callers warmly, asks the right HVAC triage questions, and handles interruptions. Most homeowners can\u2019t tell they\u2019re talking to AI.',
  },
  {
    q: 'How does the AI know when my techs are available?',
    a: 'It syncs directly with your calendar and CRM. The AI only offers appointment slots that are actually open, respects your dispatch rules, and books jobs straight into your existing schedule in real time.',
  },
  {
    q: 'What happens if a caller has a complex emergency?',
    a: 'The AI runs emergency triage to separate routine maintenance from urgent system failures. For high-priority or complex situations, it can flag the job, escalate, and route the caller to a human on your team immediately.',
  },
  {
    q: 'Does this require changing my business phone number?',
    a: 'No. Cavalier works with your existing business number using call forwarding and text-enabled routing, so customers keep reaching you exactly the way they always have.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-16 px-5 py-20 md:px-8 md:py-28">
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
