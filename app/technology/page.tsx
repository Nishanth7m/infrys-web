import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { TechnologyHero } from '@/components/sections/technology-hero'
import { TechnologyLandscape } from '@/components/sections/technology-landscape'
import { TechnologyDomains } from '@/components/sections/technology-domains'
import { TechnologyTransition } from '@/components/sections/technology-transition'
import { TechnologyArchitecture } from '@/components/sections/technology-architecture'
import { EngineeringPrinciples } from '@/components/sections/engineering-principles'
import { TechnologyPathways } from '@/components/sections/technology-pathways'
import { PageCTA } from '@/components/sections/page-cta'
import { EnterpriseFooter } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Enterprise Technology Platform | Infrys Security Technologies',
  description: 'Cryptographic engineering, post-quantum readiness (ML-KEM / ML-DSA), crypto-agility and security architecture for systems built to evolve.',
  alternates: {
    canonical: 'https://infrys.com/technology',
  },
  openGraph: {
    title: 'Enterprise Technology Platform | Infrys Security Technologies',
    description: 'Cryptographic engineering, post-quantum readiness, crypto-agility and living security architecture.',
    url: 'https://infrys.com/technology',
    type: 'website',
  },
}

export default function TechnologyPage() {
  return (
    <main className="site-shell" style={{ background: '#1D1E33', color: '#FFFFFF', minHeight: '100vh' }}>
      {/* 00 HEADER */}
      <EnterpriseHeader />

      {/* 01 TECHNOLOGY HERO (NAVY #1D1E33) */}
      <TechnologyHero />

      {/* 02 TECHNOLOGY LANDSCAPE (CREAM #FEF3E5) */}
      <TechnologyLandscape />

      {/* 03 FOUR TECHNOLOGY DOMAINS (NAVY #1D1E33) */}
      <TechnologyDomains />

      {/* 04 CRYPTOGRAPHIC TRANSITION (CREAM #FEF3E5) */}
      <TechnologyTransition />

      {/* 05 TECHNOLOGY ARCHITECTURE (NAVY #1D1E33) */}
      <TechnologyArchitecture />

      {/* 06 ENGINEERING PRINCIPLES (CREAM #FEF3E5) */}
      <EngineeringPrinciples />

      {/* 07 TECHNOLOGY PATHWAYS (NAVY #1D1E33) */}
      <TechnologyPathways />

      {/* 08 FINAL CTA (ORANGE #F47117) */}
      <PageCTA
        eyebrow="INFRYS TECHNOLOGY SIGNAL / 08"
        headingLine1="READY TO BUILD FOR"
        headingLine2="WHAT'S NEXT?"
        supportingText="Start a conversation with Infrys security engineers and post-quantum specialists."
        primaryCtaText="TALK TO AN EXPERT"
        primaryCtaHref="/contact"
        secondaryCtaText="EXPLORE PQC ROADMAP"
        secondaryCtaHref="/technology/post-quantum-cryptography"
      />

      {/* 09 FOOTER (NAVY #1D1E33) */}
      <EnterpriseFooter />
    </main>
  )
}
