import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { ContactEnquiryForm } from '@/components/contact-enquiry-form'
import { PageCTA } from '@/components/sections/page-cta'
import { EnterpriseFooter } from '@/components/sections/footer'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Infrys Security Technologies | Talk to an Expert',
  description:
    'Connect with Infrys security engineers and post-quantum cryptography specialists for enterprise vulnerability assessments, GRC readiness, and PQC migration.',
  alternates: {
    canonical: 'https://infrys.com/contact',
  },
  openGraph: {
    title: 'Contact Infrys Security Technologies | Talk to an Expert',
    description: 'Connect with Infrys security engineers and post-quantum cryptography specialists.',
    url: 'https://infrys.com/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="site-shell" style={{ background: '#FEF3E5', color: '#1D1E33', minHeight: '100vh' }}>
      <EnterpriseHeader />

      {/* 01 HERO / CONTACT HEADER (NAVY #1D1E33) */}
      <section style={{ background: '#1D1E33', color: '#FFFFFF', padding: '100px 7vw 90px', borderBottom: '1px solid rgba(203, 208, 217, 0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 800 }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', marginBottom: 16, fontWeight: 600 }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', marginRight: 8, borderRadius: '50%' }} />
              CONTACT INFRYS / 01
            </p>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 1.05, margin: 0, color: '#FFFFFF' }}>
              TALK TO A<br />
              <span style={{ color: '#F47117' }}>SECURITY SPECIALIST.</span>
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#CBD0D9', margin: '24px 0 0', lineHeight: 1.6, maxWidth: 640 }}>
              Connect with our cryptographic engineers to evaluate your security posture, plan post-quantum migrations, or conduct technical assessments.
            </p>
          </div>
        </div>
      </section>

      {/* 02 ENQUIRY FORM & DIRECT CONTACT DIRECTORY (CREAM #FEF3E5) */}
      <section id="enquiry" style={{ background: '#FEF3E5', color: '#1D1E33', padding: '95px 7vw', borderBottom: '1px solid rgba(29, 30, 51, 0.12)' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 48,
            alignItems: 'start',
          }}
        >
          {/* LEFT / MAIN: ENQUIRY FORM */}
          <div style={{ gridColumn: 'span 1' }}>
            <ContactEnquiryForm />
          </div>

          {/* RIGHT: DIRECT ADVISORY CHANNELS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Direct Email */}
            <div style={{ background: '#FFFFFF', border: '1px solid #D9DCE3', padding: 32, borderRadius: 8 }}>
              <Mail size={24} style={{ color: '#F47117', marginBottom: 14 }} />
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#1D1E33', margin: '0 0 10px', fontWeight: 700 }}>
                Direct Inquiries
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#63667A', lineHeight: 1.6, margin: '0 0 18px' }}>
                For general inquiries, technical briefings, or vulnerability assessments:
              </p>
              <a
                href="mailto:info@infrys.com"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 14,
                  color: '#F47117',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                info@infrys.com <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Telephone */}
            <div style={{ background: '#FFFFFF', border: '1px solid #D9DCE3', padding: 32, borderRadius: 8 }}>
              <Phone size={24} style={{ color: '#F47117', marginBottom: 14 }} />
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#1D1E33', margin: '0 0 10px', fontWeight: 700 }}>
                Telephone Support
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#63667A', lineHeight: 1.6, margin: '0 0 18px' }}>
                Speak directly with our enterprise security desk:
              </p>
              <a
                href="tel:+919916800685"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 14,
                  color: '#1D1E33',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                +91 9916800685
              </a>
            </div>

            {/* Location */}
            <div style={{ background: '#FFFFFF', border: '1px solid #D9DCE3', padding: 32, borderRadius: 8 }}>
              <MapPin size={24} style={{ color: '#F47117', marginBottom: 14 }} />
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#1D1E33', margin: '0 0 10px', fontWeight: 700 }}>
                Technology Headquarters
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#63667A', lineHeight: 1.7, margin: 0 }}>
                Infrys Security Technologies LLP<br />
                11th Floor, Prestige Tech Park, Platina 2<br />
                Outer Ring Road, Kadubeesanahalli<br />
                Bengaluru, Karnataka 560103, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 FINAL CTA */}
      <PageCTA
        eyebrow="THE INFRYS SIGNAL / 03"
        headingLine1="READY FOR"
        headingLine2="WHAT'S NEXT?"
        supportingText="Prefer direct email? Reach our enterprise security desk directly at info@infrys.com."
        primaryCtaText="SEND DIRECT EMAIL"
        primaryCtaHref="mailto:info@infrys.com"
        secondaryCtaText="EXPLORE SOLUTIONS"
        secondaryCtaHref="/solutions"
      />

      {/* 04 FOOTER */}
      <EnterpriseFooter />
    </main>
  )
}
