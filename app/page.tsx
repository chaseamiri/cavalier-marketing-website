import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { ProblemSection } from '@/components/problem-section'
import { HowItWorks } from '@/components/how-it-works'
import { ResultsSection } from '@/components/results-section'
import { FaqSection } from '@/components/faq-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { OceanBreathing } from '@/components/ocean-breathing'

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <OceanBreathing />
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <ResultsSection />
      <HowItWorks />
      <FaqSection />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}
