import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { EngineeringPrinciples } from '@/components/sections/engineering-principles'
import { PageCTA } from '@/components/sections/page-cta'
import { EnterpriseFooter } from '@/components/sections/footer'
import { ArrowUpRight, Shield, KeyRound, Cpu, Layers, MapPin, Mail, Phone, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Infrys Security Technologies | Capabilities & How We Work',
  description:
    'Infrys Security Technologies engineers enterprise cybersecurity, post-quantum cryptography (PQC) migration, crypto-agile architectures, and offensive security testing.',
  alternates: {
    canonical: 'https://infrys.com/company',
  },
  openGraph: {
    title: 'About Infrys Security Technologies | Engineered for What’s Next',
    description:
      'Discover our foundational cryptographic capabilities, 6-phase engineering methodology, and enterprise security mission.',
    url: 'https://infrys.com/company',
    type: 'website',
  },
}

const FOUNDATIONAL_CAPABILITIES = [
  {
    icon: Shield,
    title: 'SECURITY ENGINEERING',
    desc: 'Deep technical assessment and manual offensive security testing built on rigorous vulnerability research across web, API, cloud, and network infrastructure.',
    href: '/solutions#vapt',
    linkLabel: 'EXPLORE VAPT SOLUTIONS',
  },
  {
    icon: KeyRound,
    title: 'CRYPTOGRAPHIC EXPERTISE',
    desc: 'Mathematical key governance, PKI lifecycle design, split-knowledge key wrapping, and hybrid key encapsulation protocol engineering.',
    href: '/technology#cryptography',
    linkLabel: 'EXPLORE CRYPTOGRAPHY',
  },
  {
    icon: Cpu,
    title: 'POST-QUANTUM READINESS',
    desc: 'Cryptographic inventory discovery, Harvest-Now-Decrypt-Later (HNDL) exposure analysis, and NIST FIPS 203 / 204 / 205 lattice migration frameworks.',
    href: '/technology#post-quantum-cryptography',
    linkLabel: 'EXPLORE PQC PLATFORM',
  },
  {
    icon: Layers,
    title: 'ENTERPRISE ARCHITECTURE',
    desc: 'Decoupled 7-layer living defense systems and crypto-agility abstraction brokers enabling seamless hardware security module (HSM) integration.',
    href: '/technology#security-architecture',
    linkLabel: 'EXPLORE 7-LAYER ARCHITECTURE',
  },
]

const HOW_WE_WORK_PHASES = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'Identify every cryptographic key, algorithm dependency, attack surface, and PKI asset across enterprise infrastructure.',
  },
  {
    num: '02',
    title: 'ASSESS',
    desc: 'Evaluate Harvest-Now-Decrypt-Later (HNDL) exposure, conduct manual penetration testing, and prioritize high-risk asymmetric primitives.',
  },
  {
    num: '03',
    title: 'DESIGN',
    desc: 'Architect a decoupled Crypto-Agility abstraction layer, zero-trust controls, and standardized NIST PQC migration blueprints.',
  },
  {
    num: '04',
    title: 'IMPLEMENT',
    desc: 'Deploy hybrid dual-key encapsulation mechanisms (ML-KEM / ML-DSA) and upgrade HSM firmware without operational downtime.',
  },
  {
    num: '05',
    title: 'VALIDATE',
    desc: 'Conduct cryptographic and offensive vulnerability re-testing and benchmark operational performance across services.',
  },
  {
    num: '06',
    title: 'EVOLVE',
    desc: 'Maintain continuous 24/7 cryptographic telemetry, SIEM monitoring, and alignment with evolving regulatory and NIST standards.',
  },
]

export default function CompanyPage() {
  return (
    <main className="site-shell" style={{ background: '#1D1E33', color: '#FFFFFF', minHeight: '100vh' }}>
      <EnterpriseHeader />

      {/* 01 HERO (NAVY #1D1E33) */}
      <section style={{ background: '#1D1E33', color: '#FFFFFF', padding: '100px 7vw 90px', borderBottom: '1px solid rgba(203, 208, 217, 0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#CBD0D9', letterSpacing: '0.14em', marginBottom: 16, fontWeight: 600 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', marginRight: 8, borderRadius: '50%' }} />
            COMPANY &amp; CAPABILITIES / 01
          </p>

          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 1.05, margin: '0 0 24px', color: '#FFFFFF' }}>
            ENGINEERED FOR<br />
            <span style={{ color: '#F47117' }}>WHAT&apos;S NEXT.</span>
          </h1>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#CBD0D9', lineHeight: 1.65, maxWidth: 640, margin: '0 0 36px' }}>
            Infrys Security Technologies LLP is an enterprise cybersecurity and cryptographic engineering firm dedicated to protecting critical systems, data, and infrastructure through the post-quantum transition.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              className="button-primary"
              href="/contact"
              style={{
                background: '#F47117',
                borderColor: '#F47117',
                color: '#FFFFFF',
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: '0.1em',
                padding: '16px 26px',
                borderRadius: 4,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              TALK TO AN EXPERT <ArrowUpRight size={16} />
            </a>
            <a
              href="#how-we-work"
              style={{
                background: 'transparent',
                border: '1px solid rgba(203, 208, 217, 0.4)',
                color: '#FFFFFF',
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: '0.1em',
                padding: '16px 26px',
                borderRadius: 4,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              HOW WE WORK ↓
            </a>
          </div>
        </div>
      </section>

      {/* 02 ABOUT INFRYS (#about) */}
      <section
        id="about"
        style={{
          scrollMarginTop: 82,
          background: '#FEF3E5',
          color: '#1D1E33',
          padding: '95px 7vw',
          borderBottom: '1px solid rgba(29, 30, 51, 0.12)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60 }}>
          <div>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              ABOUT INFRYS / 02
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: 0, color: '#1D1E33' }}>
              ARCHITECTING TRUST IN AN ERA OF <span style={{ color: '#F47117' }}>QUANTUM CHANGE.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#63667A', lineHeight: 1.75 }}>
            <p style={{ margin: 0 }}>
              Enterprise security stands at a generational inflection point. Legacy asymmetric encryption primitives that have protected digital commerce, sovereign communications, and cloud workloads for decades face structural obsolescence as quantum computing advances.
            </p>
            <p style={{ margin: 0 }}>
              Infrys bridges present-day offensive security and compliance with long-term cryptographic resilience. We combine manual penetration testing (VAPT), audit-ready governance (GRC), and 24/7 managed defense with deep specialization in NIST post-quantum cryptography and decoupled crypto-agile systems.
            </p>
          </div>
        </div>
      </section>

      {/* 03 FOUNDATIONAL CAPABILITIES (#capabilities) */}
      <section
        id="capabilities"
        style={{
          scrollMarginTop: 82,
          background: '#1D1E33',
          color: '#FFFFFF',
          padding: '95px 7vw',
          borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              FOUNDATIONAL CAPABILITIES / 03
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: 0, color: '#FFFFFF' }}>
              CORE ENGINEERING <span style={{ color: '#F47117' }}>PILLARS.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {FOUNDATIONAL_CAPABILITIES.map((cap) => {
              const Icon = cap.icon
              return (
                <a
                  key={cap.title}
                  href={cap.href}
                  className="hover-card-enterprise"
                  style={{
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(203, 208, 217, 0.18)',
                    padding: '32px 26px',
                    borderRadius: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <Icon size={22} style={{ color: '#F47117', marginBottom: 16 }} />
                    <h3 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#F47117', fontWeight: 600, letterSpacing: '0.1em', margin: '0 0 12px' }}>
                      {cap.title}
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.65, margin: 0 }}>
                      {cap.desc}
                    </p>
                  </div>
                  <div style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', fontWeight: 600 }}>
                    {cap.linkLabel} <ArrowUpRight size={13} />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* 04 ENGINEERING PRINCIPLES (#principles — CANONICAL LOCATION) */}
      <EngineeringPrinciples sectionNumber="04" />

      {/* 05 HOW WE WORK (#how-we-work — CANONICAL 6-PHASE LIFECYCLE) */}
      <section
        id="how-we-work"
        style={{
          scrollMarginTop: 82,
          background: '#1D1E33',
          color: '#FFFFFF',
          padding: '95px 7vw',
          borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              ENGAGEMENT PROCESS / 05
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: '0 0 16px', color: '#FFFFFF' }}>
              FROM ASSESSMENT TO <span style={{ color: '#F47117' }}>RESILIENCE.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#CBD0D9', maxWidth: 640, lineHeight: 1.7, margin: 0 }}>
              A structured 6-phase engineering lifecycle for enterprise security and post-quantum modernization.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {HOW_WE_WORK_PHASES.map((step) => (
              <div
                key={step.num}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(203, 208, 217, 0.18)',
                  padding: '28px 24px',
                  borderRadius: 6,
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                  PHASE {step.num}
                </span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, color: '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 CAREERS & ENGINEERING CULTURE (#careers-cta — CREAM #FEF3E5) */}
      <section
        id="careers-cta"
        style={{
          scrollMarginTop: 82,
          background: '#FEF3E5',
          color: '#1D1E33',
          padding: '95px 7vw',
          borderBottom: '1px solid rgba(29, 30, 51, 0.12)',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              CAREERS AT INFRYS / 06
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: '0 0 16px', color: '#1D1E33' }}>
              JOIN OUR SECURITY <span style={{ color: '#F47117' }}>ENGINEERING TEAM.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#63667A', lineHeight: 1.7, margin: 0 }}>
              We look for engineers and researchers passionate about post-quantum cryptography, manual offensive security testing, and enterprise risk governance.
            </p>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #D9DCE3',
              padding: '36px 32px',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              alignItems: 'flex-start',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Briefcase size={22} style={{ color: '#F47117' }} />
              <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 19, color: '#1D1E33' }}>
                Explore Practice Areas &amp; Opportunities
              </strong>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#63667A', lineHeight: 1.65, margin: 0 }}>
              Learn how we work across Cryptographic Engineering, VAPT, GRC, and Managed Security, view current opening status, or submit an expression of interest.
            </p>
            <a
              className="button-primary"
              href="/careers"
              style={{
                background: '#1D1E33',
                borderColor: '#1D1E33',
                color: '#FFFFFF',
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: '0.1em',
                padding: '14px 22px',
                borderRadius: 4,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              EXPLORE CAREERS AT INFRYS <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 07 GLOBAL PRESENCE & HEADQUARTERS (#global-network — NAVY #1D1E33) */}
      <section
        id="global-network"
        style={{
          scrollMarginTop: 82,
          background: '#1D1E33',
          color: '#FFFFFF',
          padding: '95px 7vw',
          borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 44 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              GLOBAL PRESENCE &amp; HEADQUARTERS / 07
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: 0, color: '#FFFFFF' }}>
              OUR ENGINEERING <span style={{ color: '#F47117' }}>HEADQUARTERS.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(203, 208, 217, 0.18)', padding: '32px 28px', borderRadius: 8 }}>
              <MapPin size={22} style={{ color: '#F47117', marginBottom: 14 }} />
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, color: '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>
                Technology Headquarters
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.7, margin: 0 }}>
                Infrys Security Technologies LLP<br />
                11th Floor, Prestige Tech Park, Platina 2<br />
                Outer Ring Road, Kadubeesanahalli<br />
                Bengaluru, Karnataka 560103, India
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(203, 208, 217, 0.18)', padding: '32px 28px', borderRadius: 8 }}>
              <Mail size={22} style={{ color: '#F47117', marginBottom: 14 }} />
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, color: '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>
                Enterprise Advisory Desk
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.7, margin: '0 0 16px' }}>
                Direct engineering contact for security assessments, PQC readiness reviews, and GRC briefings:
              </p>
              <a href="mailto:info@infrys.com" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#F47117', fontWeight: 600, textDecoration: 'none' }}>
                info@infrys.com →
              </a>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(203, 208, 217, 0.18)', padding: '32px 28px', borderRadius: 8 }}>
              <Phone size={22} style={{ color: '#F47117', marginBottom: 14 }} />
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, color: '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>
                Telephone Support
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.7, margin: '0 0 16px' }}>
                Speak directly with our enterprise security desk:
              </p>
              <a href="tel:+919042790110" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#FEF3E5', fontWeight: 600, textDecoration: 'none' }}>
                +91 9042790110
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 08 FINAL CTA */}
      <PageCTA
        eyebrow="INFRYS COMPANY SIGNAL / 08"
        headingLine1="PARTNER WITH"
        headingLine2="INFRYS ENGINEERS."
        supportingText="Initiate a technical conversation on offensive security, regulatory compliance, or post-quantum cryptographic migration."
        primaryCtaText="TALK TO AN EXPERT"
        primaryCtaHref="/contact"
        secondaryCtaText="EXPLORE CAREERS"
        secondaryCtaHref="/careers"
      />

      {/* 09 FOOTER */}
      <EnterpriseFooter />
    </main>
  )
}
