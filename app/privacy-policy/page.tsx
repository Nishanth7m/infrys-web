import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { EnterpriseFooter } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Infrys Security Technologies',
  description:
    'Privacy Policy for Infrys Security Technologies LLP detailing how business enquiry data, website telemetry, and enterprise communications are handled and protected.',
  alternates: {
    canonical: 'https://infrys.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Infrys Security Technologies',
    description: 'Privacy-conscious data handling practices for Infrys Security Technologies LLP.',
    url: 'https://infrys.com/privacy-policy',
    type: 'website',
  },
}

const POLICY_SECTIONS = [
  {
    num: '01',
    title: 'Scope & Data Controller',
    body: 'This Privacy Policy describes how Infrys Security Technologies LLP ("Infrys", "we", "our", or "us"), headquartered at 11th Floor, Prestige Tech Park, Platina 2, Outer Ring Road, Kadubeesanahalli, Bengaluru, Karnataka 560103, India, collects, uses, and safeguards information obtained through infrys.com and our enterprise security enquiry channels.',
  },
  {
    num: '02',
    title: 'Information We Collect',
    body: 'When you submit a security consultation enquiry or correspond with our engineering desk, we collect only the business contact details you explicitly provide: Full Name, Work Email Address, Organization Name, Professional Role/Title, Enquiry Topic, and the contents of your message. We also process minimal operational server telemetry (such as IP address for rate-limiting and anti-spam protection).',
  },
  {
    num: '03',
    title: 'Purpose of Processing',
    body: 'We process business contact information strictly to: (a) respond to your technical or commercial security enquiries; (b) scope requested vulnerability assessments, GRC reviews, or post-quantum cryptographic briefings; (c) protect our infrastructure against automated spam or abuse; and (d) comply with applicable legal obligations.',
  },
  {
    num: '04',
    title: 'No Sale of Data & Third-Party Processors',
    body: 'Infrys does not sell, rent, or trade personal or corporate contact information. Enquiry submissions are transmitted over TLS-encrypted channels through our transactional email provider solely for delivery to authorized Infrys security personnel.',
  },
  {
    num: '05',
    title: 'Data Security & Retention',
    body: 'As an enterprise cybersecurity and cryptographic engineering organization, Infrys applies strict access controls, encryption in transit, and least-privilege governance to all business correspondence. Enquiry records are retained only for the duration necessary to fulfill the business relationship or statutory retention requirements.',
  },
  {
    num: '06',
    title: 'Your Rights & Contact',
    body: 'You may request access to, correction of, or deletion of your business contact details at any time by contacting our privacy and security desk at info@infrys.com.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="site-shell" style={{ background: '#FEF3E5', color: '#1D1E33', minHeight: '100vh' }}>
      <EnterpriseHeader />

      {/* HERO */}
      <section style={{ background: '#1D1E33', color: '#FFFFFF', padding: '95px 7vw 80px', borderBottom: '1px solid rgba(203, 208, 217, 0.15)' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', marginBottom: 16, fontWeight: 600 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', marginRight: 8, borderRadius: '50%' }} />
            LEGAL &amp; DATA GOVERNANCE
          </p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.05, margin: '0 0 20px', color: '#FFFFFF' }}>
            PRIVACY <span style={{ color: '#F47117' }}>POLICY.</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#CBD0D9', lineHeight: 1.65, maxWidth: 680, margin: 0 }}>
            Effective Date: November 2026 · Infrys Security Technologies LLP
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: '#FEF3E5', color: '#1D1E33', padding: '90px 7vw', borderBottom: '1px solid rgba(29, 30, 51, 0.12)' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gap: 24 }}>
          {POLICY_SECTIONS.map((sec) => (
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
                SECTION {sec.num}
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

