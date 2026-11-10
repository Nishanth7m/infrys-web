import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { PageCTA } from '@/components/sections/page-cta'
import { EnterpriseFooter } from '@/components/sections/footer'
import { ArrowUpRight, Shield, KeyRound, FileCheck, Radio, CheckCircle2, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers at Infrys Security Technologies | Cybersecurity & PQC Engineering',
  description:
    'Explore career opportunities and engineering practice areas at Infrys Security Technologies LLP across Post-Quantum Cryptography, VAPT, GRC, and Managed Security.',
  alternates: {
    canonical: 'https://infrys.com/careers',
  },
  openGraph: {
    title: 'Careers at Infrys Security Technologies | Build Security for What’s Next',
    description:
      'Join cryptographic engineers, offensive security researchers, and governance specialists building enterprise security for the post-quantum era.',
    url: 'https://infrys.com/careers',
    type: 'website',
  },
}

const PRACTICE_AREAS = [
  {
    icon: KeyRound,
    code: 'PRACTICE AREA 01',
    title: 'Cryptographic & PQC Engineering',
    desc: 'Researching and implementing NIST-standardized post-quantum lattice algorithms (FIPS 203 ML-KEM, FIPS 204 ML-DSA, FIPS 205 SLH-DSA), PKI certificate authorities, HSM key ceremonies, and crypto-agile broker middleware.',
    skills: ['Lattice Cryptography & NIST PQC Standards', 'PKI / X.509 / ACME / SPIFFE', 'PKCS#11 & KMIP HSM Integration', 'Hybrid TLS & Envelope Encryption'],
    relatedHref: '/technology#post-quantum-cryptography',
    relatedLabel: 'EXPLORE PQC TECHNOLOGY',
  },
  {
    icon: Shield,
    code: 'PRACTICE AREA 02',
    title: 'Offensive Security & VAPT',
    desc: 'Conducting manual vulnerability assessments, multi-step exploit chain verification, API authorization testing, and cloud-native infrastructure security audits across enterprise environments.',
    skills: ['Web, API & Microservice Penetration Testing', 'Cloud IAM & Kubernetes Security Audits', 'Network & Active Directory Exploitation', 'Developer-Focused Remediation Guidance'],
    relatedHref: '/solutions#vapt',
    relatedLabel: 'EXPLORE VAPT SOLUTIONS',
  },
  {
    icon: FileCheck,
    code: 'PRACTICE AREA 03',
    title: 'Governance, Risk & Compliance (GRC)',
    desc: 'Translating regulatory mandates and cryptographic transition schedules into measurable security controls across ISO 27001:2022, NIST CSF 2.0, SOC 2 Type II, HIPAA, and PCI-DSS 4.0.',
    skills: ['ISO 27001:2022 & NIST CSF 2.0 Architecture', 'SOC 2 Type II & PCI-DSS 4.0 Readiness', 'Cryptographic Bill of Materials (CBOM) Governance', 'Continuous Control Evidence Automation'],
    relatedHref: '/solutions#grc',
    relatedLabel: 'EXPLORE GRC SOLUTIONS',
  },
  {
    icon: Radio,
    code: 'PRACTICE AREA 04',
    title: 'Managed Security & Threat Operations',
    desc: 'Operating continuous security monitoring, SIEM detection engineering, cryptographic key usage telemetry, and rapid incident containment for critical enterprise workloads.',
    skills: ['24/7 Threat Detection & Alert Triage', 'SIEM Engineering (Sentinel / Splunk / Datadog)', 'Cryptographic & Certificate Telemetry', 'Incident Containment & Root-Cause Forensics'],
    relatedHref: '/solutions#managed-security',
    relatedLabel: 'EXPLORE MANAGED SECURITY',
  },
]

const EVALUATION_STEPS = [
  {
    step: '01',
    title: 'Expression of Interest & Technical Review',
    desc: 'Submit your background, area of specialization, and relevant technical work or research via our enquiry desk. Our engineering leads review submissions directly.',
  },
  {
    step: '02',
    title: 'Domain & Architecture Conversation',
    desc: 'When a matching role opens, you speak directly with a practice engineer about cryptographic fundamentals, offensive security methodology, or governance frameworks.',
  },
  {
    step: '03',
    title: 'Practical Problem-Solving Exercise',
    desc: 'Walk through a realistic enterprise scenario—such as scoping a hybrid PQC migration, analyzing an API attack path, or mapping a regulatory control matrix.',
  },
  {
    step: '04',
    title: 'Leadership & Engagement Alignment',
    desc: 'Discuss how we partner with enterprise clients, our standards of technical integrity and confidentiality, and mutual career objectives.',
  },
]

export default function CareersPage() {
  return (
    <main className="site-shell" style={{ background: '#1D1E33', color: '#FFFFFF', minHeight: '100vh' }}>
      <EnterpriseHeader />

      {/* 01 HERO (#top — NAVY #1D1E33) */}
      <section
        id="top"
        style={{
          background: '#1D1E33',
          color: '#FFFFFF',
          padding: '100px 7vw 90px',
          borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              color: '#CBD0D9',
              letterSpacing: '0.14em',
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', marginRight: 8, borderRadius: '50%' }} />
            CAREERS AT INFRYS / 01
          </p>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.06em',
              lineHeight: 1.05,
              margin: '0 0 24px',
              color: '#FFFFFF',
            }}
          >
            BUILD SECURITY<br />
            FOR <span style={{ color: '#F47117' }}>WHAT&apos;S NEXT.</span>
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 18,
              color: '#CBD0D9',
              lineHeight: 1.65,
              maxWidth: 660,
              margin: '0 0 36px',
            }}
          >
            Infrys Security Technologies LLP brings together cryptographic engineers, offensive security specialists, and compliance architects dedicated to solving foundational security challenges across modern enterprise infrastructure.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              className="button-primary"
              href="#openings"
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
              VIEW CURRENT OPENINGS ↓
            </a>
            <a
              href="/contact?topic=Careers%20%2F%20Expression%20of%20Interest"
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
              SUBMIT EXPRESSION OF INTEREST <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 02 WORKING AT INFRYS (#working-at-infrys — CREAM #FEF3E5) */}
      <section
        id="working-at-infrys"
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
            gap: 60,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                color: '#F47117',
                letterSpacing: '0.14em',
                fontWeight: 600,
                display: 'block',
                marginBottom: 12,
              }}
            >
              WORKING AT INFRYS / 02
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(32px, 4.2vw, 54px)',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                lineHeight: 1.08,
                margin: 0,
                color: '#1D1E33',
              }}
            >
              ENGINEERING RIGOR &amp; <span style={{ color: '#F47117' }}>TECHNICAL DEPTH.</span>
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: '#63667A',
              lineHeight: 1.75,
            }}
          >
            <p style={{ margin: 0 }}>
              At Infrys, security is approached as an engineering discipline rather than a checklist exercise. Our work spans manual penetration testing, regulatory risk governance, cryptographic inventory discovery, and post-quantum architecture design.
            </p>
            <p style={{ margin: 0 }}>
              Headquartered in Bengaluru, India, we collaborate closely with enterprise engineering, infrastructure, and security leadership teams to build systems that remain resilient as threats and cryptographic standards evolve.
            </p>
          </div>
        </div>
      </section>

      {/* 03 ENGINEERING & ADVISORY PRACTICE AREAS (#teams — NAVY #1D1E33) */}
      <section
        id="teams"
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
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                color: '#F47117',
                letterSpacing: '0.14em',
                fontWeight: 600,
                display: 'block',
                marginBottom: 12,
              }}
            >
              PRACTICE AREAS &amp; DISCIPLINES / 03
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(32px, 4.2vw, 54px)',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                lineHeight: 1.08,
                margin: '0 0 16px',
                color: '#FFFFFF',
              }}
            >
              WHERE WE <span style={{ color: '#F47117' }}>ENGINEER.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#CBD0D9', maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
              Our technical work is organized around four core security and cryptographic domains.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {PRACTICE_AREAS.map((area) => {
              const Icon = area.icon
              return (
                <div
                  key={area.title}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(203, 208, 217, 0.18)',
                    padding: '32px 28px',
                    borderRadius: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                      <Icon size={22} style={{ color: '#F47117' }} />
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', fontWeight: 600, letterSpacing: '0.12em' }}>
                        {area.code}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#FFFFFF', fontWeight: 700, margin: '0 0 12px' }}>
                      {area.title}
                    </h3>

                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.65, margin: '0 0 20px' }}>
                      {area.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                      {area.skills.map((skill) => (
                        <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <CheckCircle2 size={14} style={{ color: '#F47117', flexShrink: 0 }} />
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#FEF3E5' }}>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ paddingTop: 16, borderTop: '1px solid rgba(203, 208, 217, 0.15)' }}>
                    <a
                      href={area.relatedHref}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11,
                        color: '#F47117',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      {area.relatedLabel} <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 04 CURRENT OPENINGS (#openings — CREAM #FEF3E5) */}
      <section
        id="openings"
        style={{
          scrollMarginTop: 82,
          background: '#FEF3E5',
          color: '#1D1E33',
          padding: '95px 7vw',
          borderBottom: '1px solid rgba(29, 30, 51, 0.12)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                color: '#F47117',
                letterSpacing: '0.14em',
                fontWeight: 600,
                display: 'block',
                marginBottom: 12,
              }}
            >
              OPEN POSITIONS / 04
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(32px, 4.2vw, 54px)',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                lineHeight: 1.08,
                margin: 0,
                color: '#1D1E33',
              }}
            >
              CURRENT <span style={{ color: '#F47117' }}>OPENINGS.</span>
            </h2>
          </div>

          {/* HONEST NO CURRENT PUBLIC OPENINGS STATE */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #D9DCE3',
              borderLeft: '4px solid #F47117',
              borderRadius: 8,
              padding: '40px 36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 36,
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 10,
                  color: '#F47117',
                  letterSpacing: '0.14em',
                  fontWeight: 600,
                  display: 'inline-block',
                  background: 'rgba(244, 113, 23, 0.1)',
                  padding: '5px 10px',
                  borderRadius: 4,
                  marginBottom: 14,
                }}
              >
                STATUS: NO CURRENT PUBLIC OPENINGS
              </span>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, color: '#1D1E33', margin: '0 0 12px', fontWeight: 700 }}>
                No Current Public Openings — Rolling Expressions of Interest
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#63667A', lineHeight: 1.7, margin: 0 }}>
                We do not have active public job requisitions posted at this moment. However, we review expressions of interest from experienced cryptographic engineers, penetration testers, and GRC specialists for upcoming engagements.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
              <a
                className="button-primary"
                href="/contact?topic=Careers%20%2F%20Expression%20of%20Interest"
                style={{
                  background: '#1D1E33',
                  borderColor: '#1D1E33',
                  color: '#FFFFFF',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  padding: '16px 24px',
                  borderRadius: 6,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                SUBMIT EXPRESSION OF INTEREST <ArrowUpRight size={15} />
              </a>

              <a
                href="mailto:info@infrys.com?subject=Careers%20Expression%20of%20Interest%20%E2%80%94%20Infrys%20Security%20Technologies"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 12,
                  color: '#F47117',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <Mail size={15} /> OR EMAIL INFO@INFRYS.COM DIRECTLY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 05 APPLICATION & EVALUATION PROCESS (#process — NAVY #1D1E33) */}
      <section
        id="process"
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
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                color: '#F47117',
                letterSpacing: '0.14em',
                fontWeight: 600,
                display: 'block',
                marginBottom: 12,
              }}
            >
              APPLICATION PROCESS / 05
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(32px, 4.2vw, 54px)',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                lineHeight: 1.08,
                margin: 0,
                color: '#FFFFFF',
              }}
            >
              HOW WE <span style={{ color: '#F47117' }}>EVALUATE TALENT.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {EVALUATION_STEPS.map((item) => (
              <div
                key={item.step}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(203, 208, 217, 0.18)',
                  padding: '28px 24px',
                  borderRadius: 6,
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 10 }}>
                  STAGE {item.step}
                </span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, color: '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 FINAL CTA */}
      <PageCTA
        eyebrow="INFRYS CAREERS SIGNAL / 06"
        headingLine1="INTERESTED IN"
        headingLine2="BUILDING WITH US?"
        supportingText="Introduce yourself and share your technical focus in cryptography, offensive security, or compliance engineering."
        primaryCtaText="SUBMIT EXPRESSION OF INTEREST"
        primaryCtaHref="/contact?topic=Careers%20%2F%20Expression%20of%20Interest"
        secondaryCtaText="ABOUT INFRYS"
        secondaryCtaHref="/company#about"
      />

      <EnterpriseFooter />
    </main>
  )
}

