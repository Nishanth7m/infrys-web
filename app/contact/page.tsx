import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { InfrysLogo } from '@/components/logo'
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Infrys Security Technologies | Talk to an Expert',
  description: 'Connect with Infrys security engineers and post-quantum cryptography specialists for enterprise security assessments.',
  alternates: {
    canonical: 'https://infrys.com/contact',
  },
  openGraph: {
    title: 'Contact Infrys Security Technologies',
    description: 'Connect with Infrys security engineers and post-quantum cryptography specialists.',
    url: 'https://infrys.com/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="site-shell" style={{ background: '#FEF3E5', color: '#1D1E33', minHeight: '100vh' }}>
      <EnterpriseHeader />

      {/* HERO / CONTACT HEADER */}
      <section style={{ background: '#1D1E33', color: '#FFFFFF', padding: '100px 7vw 90px' }}>
        <div style={{ maxWidth: 800 }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', marginBottom: 16, fontWeight: 600 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', marginRight: 8, borderRadius: '50%' }} />
            CONTACT INFRYS / CANONICAL
          </p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 1.05, margin: 0, color: '#FFFFFF' }}>
            TALK TO A<br />
            <span style={{ color: '#F47117' }}>SECURITY SPECIALIST.</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#CBD0D9', margin: '24px 0 0', lineHeight: 1.6, maxWidth: 640 }}>
            Connect with our cryptographic engineers to evaluate your security posture, plan post-quantum migrations, or conduct technical assessments.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION & DIRECTORY */}
      <section style={{ background: '#FEF3E5', color: '#1D1E33', padding: '90px 7vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
          {/* Direct Email */}
          <div style={{ background: '#FFFFFF', border: '1px solid #D9DCE3', padding: 36, borderRadius: 8 }}>
            <Mail size={24} style={{ color: '#F47117', marginBottom: 16 }} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#1D1E33', margin: '0 0 12px', fontWeight: 600 }}>
              Direct Inquiries
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#63667A', lineHeight: 1.6, margin: '0 0 20px' }}>
              For general inquiries, technical briefings, or vulnerability assessments:
            </p>
            <a href="mailto:info@infrys.com" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, color: '#F47117', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              info@infrys.com <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Telephone */}
          <div style={{ background: '#FFFFFF', border: '1px solid #D9DCE3', padding: 36, borderRadius: 8 }}>
            <Phone size={24} style={{ color: '#F47117', marginBottom: 16 }} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#1D1E33', margin: '0 0 12px', fontWeight: 600 }}>
              Telephone Support
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#63667A', lineHeight: 1.6, margin: '0 0 20px' }}>
              Speak directly with our enterprise security desk:
            </p>
            <a href="tel:+919916800685" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, color: '#1D1E33', fontWeight: 600, textDecoration: 'none' }}>
              +91 9916800685
            </a>
          </div>

          {/* Location */}
          <div style={{ background: '#FFFFFF', border: '1px solid #D9DCE3', padding: 36, borderRadius: 8 }}>
            <MapPin size={24} style={{ color: '#F47117', marginBottom: 16 }} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#1D1E33', margin: '0 0 12px', fontWeight: 600 }}>
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
      </section>

      {/* FINAL CTA SECTION */}
      <section style={{ background: '#F47117', color: '#FFFFFF', padding: '100px 7vw', textAlign: 'left' }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#FFFFFF', letterSpacing: '0.14em', marginBottom: 16, fontWeight: 600 }}>
          THE INFRYS SIGNAL
        </p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.06em', lineHeight: 0.9, margin: '0 0 24px', color: '#FFFFFF', fontWeight: 700 }}>
          READY FOR<br />
          <span style={{ color: '#1D1E33' }}>WHAT&apos;S NEXT?</span>
        </h2>
        <a
          href="mailto:info@infrys.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#1D1E33',
            color: '#FFFFFF',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            fontWeight: 600,
            padding: '16px 28px',
            borderRadius: 6,
            textDecoration: 'none',
          }}
        >
          SEND DIRECT EMAIL <ArrowUpRight size={16} />
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1D1E33', color: '#FFFFFF', padding: '60px 7vw 30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, font: "400 11px 'IBM Plex Mono', monospace", color: '#CBD0D9', borderTop: '1px solid rgba(203,208,217,0.2)', paddingTop: 30 }}>
          <span>© 2026 Infrys Security Technologies LLP. All rights reserved.</span>
          <span>Canonical Route: /contact</span>
        </div>
      </footer>
    </main>
  )
}
