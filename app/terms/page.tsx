import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { EnterpriseFooter } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Terms of Use | Infrys Security Technologies',
  description:
    'Terms of Use governing access to the Infrys Security Technologies LLP website, technical publications, and enterprise cybersecurity information.',
  alternates: {
    canonical: 'https://infrys.com/terms',
  },
  openGraph: {
    title: 'Terms of Use | Infrys Security Technologies',
    description: 'Terms of Use for Infrys Security Technologies LLP.',
    url: 'https://infrys.com/terms',
    type: 'website',
  },
}

const TERMS_SECTIONS = [
  {
    num: '01',
    title: 'Acceptance of Terms',
    body: 'By accessing and using infrys.com (the "Website"), operated by Infrys Security Technologies LLP ("Infrys"), you agree to comply with these Terms of Use. If you do not agree with any part of these terms, please discontinue use of the Website.',
  },
  {
    num: '02',
    title: 'Informational Purpose & No Advisory Warranty',
    body: 'All technical descriptions, post-quantum cryptographic (PQC) migration frameworks, NIST FIPS references, and compliance materials published on this Website are provided for general informational purposes. Formal security assessments, penetration testing (VAPT), and cryptographic engineering engagements are governed exclusively by executed Master Services Agreements (MSAs) and Statements of Work (SOWs) with explicit Rules of Engagement.',
  },
  {
    num: '03',
    title: 'Intellectual Property',
    body: 'All content on this Website—including the Infrys brand identity, logo lockups, interactive cryptographic visualizations, architectural diagrams, and research briefs—is the intellectual property of Infrys Security Technologies LLP or its licensors and is protected under applicable copyright and trademark laws.',
  },
  {
    num: '04',
    title: 'Acceptable Use',
    body: 'You agree not to conduct unauthorized vulnerability scanning, denial-of-service testing, automated scraping, or form abuse against this Website or its supporting infrastructure.',
  },
  {
    num: '05',
    title: 'Limitation of Liability',
    body: 'To the maximum extent permitted by applicable law, Infrys Security Technologies LLP shall not be liable for any indirect, incidental, or consequential damages arising from reliance on general informational materials published on this Website.',
  },
  {
    num: '06',
    title: 'Governing Law & Contact',
    body: 'These Terms of Use are governed by the laws of India, with exclusive jurisdiction in the courts of Bengaluru, Karnataka. For legal or contractual enquiries, contact info@infrys.com.',
  },
]

export default function TermsPage() {
  return (
    <main className="site-shell" style={{ background: '#FEF3E5', color: '#1D1E33', minHeight: '100vh' }}>
      <EnterpriseHeader />

      {/* HERO */}
      <section style={{ background: '#1D1E33', color: '#FFFFFF', padding: '95px 7vw 80px', borderBottom: '1px solid rgba(203, 208, 217, 0.15)' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', marginBottom: 16, fontWeight: 600 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', marginRight: 8, borderRadius: '50%' }} />
            LEGAL &amp; GOVERNANCE
          </p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.05, margin: '0 0 20px', color: '#FFFFFF' }}>
            TERMS OF <span style={{ color: '#F47117' }}>USE.</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#CBD0D9', lineHeight: 1.65, maxWidth: 680, margin: 0 }}>
            Effective Date: November 2026 · Infrys Security Technologies LLP
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: '#FEF3E5', color: '#1D1E33', padding: '90px 7vw', borderBottom: '1px solid rgba(29, 30, 51, 0.12)' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gap: 24 }}>
          {TERMS_SECTIONS.map((sec) => (
            <div
              key={sec.num}
              style={{
                background: '#FFFFFF',
                border: '1px solid #D9DCE3',
                borderRadius: 8,
                padding: '32px 30px',
              }}
            >
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                CLAUSE {sec.num}
              </span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, color: '#1D1E33', margin: '0 0 12px', fontWeight: 700 }}>
                {sec.title}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#4A4D61', lineHeight: 1.75, margin: 0 }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <EnterpriseFooter />
    </main>
  )
}

