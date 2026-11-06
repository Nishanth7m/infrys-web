import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { PageCTA } from '@/components/sections/page-cta'
import { EnterpriseFooter } from '@/components/sections/footer'
import { ArrowUpRight, ShieldCheck, FileCheck, KeyRound, Radio } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise Security Solutions | Infrys Security Technologies',
  description: 'Proactive vulnerability assessments (VAPT), regulatory governance (GRC), cryptographic modernization (PQC), and 24/7 managed security.',
  alternates: {
    canonical: 'https://infrys.com/solutions',
  },
  openGraph: {
    title: 'Enterprise Security Solutions | Infrys Security Technologies',
    description: 'VAPT, GRC, Cryptography & PQC Modernization, and Managed Security Services.',
    url: 'https://infrys.com/solutions',
    type: 'website',
  },
}

export default function SolutionsPage() {
  const solutionsList = [
    {
      id: 'vapt',
      icon: ShieldCheck,
      kicker: 'ASSESS',
      title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
      headline: 'Find attack paths before adversaries do.',
      desc: 'Comprehensive offensive security testing across web applications, cloud APIs, microservice meshes, and internal network infrastructure.',
      href: '/solutions/vapt',
    },
    {
      id: 'grc',
      icon: FileCheck,
      kicker: 'GOVERN',
      title: 'Governance, Risk & Compliance (GRC)',
      headline: 'Turn complex mandates into audit-ready posture.',
      desc: 'Align enterprise operations with NIST CSF 2.0, ISO 27001:2022, SOC2, and emerging post-quantum regulatory compliance frameworks.',
      href: '/solutions/grc',
    },
    {
      id: 'cryptography-pqc',
      icon: KeyRound,
      kicker: 'TRANSFORM',
      title: 'Cryptography & Post-Quantum Cryptography',
      headline: 'Migrate legacy encryption to quantum-resistant lattice standards.',
      desc: 'Discover cryptographic dependencies and deploy NIST ML-KEM & ML-DSA lattice encryption alongside crypto-agile abstraction brokers.',
      href: '/solutions/cryptography-pqc',
    },
    {
      id: 'managed-security',
      icon: Radio,
      kicker: 'PROTECT',
      title: 'Managed Security Services',
      headline: 'Continuous security intelligence and 24/7 incident response.',
      desc: 'Extend your enterprise defense team with real-time threat monitoring, automated cryptographic telemetry, and rapid containment.',
      href: '/solutions/managed-security',
    },
  ]

  return (
    <main className="site-shell" style={{ background: '#1D1E33', color: '#FFFFFF', minHeight: '100vh' }}>
      <EnterpriseHeader />

      {/* 01 HERO (NAVY #1D1E33) */}
      <section style={{ background: '#1D1E33', color: '#FFFFFF', padding: '100px 7vw 90px', borderBottom: '1px solid rgba(203, 208, 217, 0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#CBD0D9', letterSpacing: '0.14em', marginBottom: 16, fontWeight: 600 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', marginRight: 8, borderRadius: '50%' }} />
            ENTERPRISE SOLUTIONS / 01
          </p>

          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 1.05, margin: '0 0 24px', color: '#FFFFFF' }}>
            BUILT FOR THE<br />
            COMPLEXITY<br />
            <span style={{ color: '#F47117' }}>AHEAD.</span>
          </h1>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#CBD0D9', lineHeight: 1.65, maxWidth: 580, margin: '0 0 36px' }}>
            From offensive vulnerability discovery to post-quantum cryptographic migration and round-the-clock managed security.
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
          </div>
        </div>
      </section>

      {/* 02 SOLUTION FRAMEWORK (CREAM #FEF3E5) */}
      <section style={{ background: '#FEF3E5', color: '#1D1E33', padding: '90px 7vw', borderBottom: '1px solid rgba(29, 30, 51, 0.12)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60 }}>
          <div>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              PROACTIVE GOVERNANCE / 02
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: 0, color: '#1D1E33' }}>
              SECURITY IS NOT A<br />
              <span style={{ color: '#F47117' }}>ONE-TIME AUDIT.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#63667A', lineHeight: 1.75, margin: 0 }}>
              Enterprise security requires continuous alignment between technical vulnerability testing, regulatory compliance, mathematical key governance, and managed incident readiness.
            </p>
          </div>
        </div>
      </section>

      {/* 03 FOUR SOLUTION DOMAINS (NAVY #1D1E33) */}
      <section style={{ background: '#1D1E33', color: '#FFFFFF', padding: '100px 7vw 110px', borderBottom: '1px solid rgba(203, 208, 217, 0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#CBD0D9', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              FOUR ENTERPRISE SOLUTIONS / 03
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(34px, 4.5vw, 56px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.05, margin: 0, color: '#FFFFFF' }}>
              OUR SOLUTION DIRECTORY.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {solutionsList.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="hover-card-enterprise"
                  style={{
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(203, 208, 217, 0.18)',
                    padding: '36px 30px',
                    borderRadius: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                      <Icon size={22} style={{ color: '#F47117' }} />
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#CBD0D9', letterSpacing: '0.12em' }}>
                        {item.kicker}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#FFFFFF', fontWeight: 700, margin: '0 0 10px' }}>
                      {item.title}
                    </h3>

                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: '#F47117', fontWeight: 600, margin: '0 0 16px' }}>
                      {item.headline}
                    </h4>

                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600 }}>
                    EXPLORE SOLUTION <ArrowUpRight size={14} />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>


      {/* 04 LIFECYCLE (CREAM #FEF3E5) */}
      <section style={{ background: '#FEF3E5', color: '#1D1E33', padding: '95px 7vw', borderBottom: '1px solid rgba(29, 30, 51, 0.12)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 44 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              6-PHASE ENGINEERING METHODOLOGY / 04
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: 0, color: '#1D1E33' }}>
              HOW WE DELIVER RESILIENCE.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { num: '01', title: 'DISCOVER', desc: 'Map asset exposure, open ports, certificate dependencies, and key storage.' },
              { num: '02', title: 'ASSESS', desc: 'Conduct threat modeling, penetration testing, and Harvest-Now-Decrypt-Later risk analysis.' },
              { num: '03', title: 'DESIGN', desc: 'Architect tailored crypto-agile abstractions, zero-trust controls, and GRC policies.' },
              { num: '04', title: 'IMPLEMENT', desc: 'Deploy NIST ML-KEM/ML-DSA lattice algorithms and upgrade HSM firmware without downtime.' },
              { num: '05', title: 'VALIDATE', desc: 'Conduct vulnerability re-testing and verify zero performance regression across applications.' },
              { num: '06', title: 'EVOLVE', desc: 'Provide continuous 24/7 security intelligence, automated telemetry, and policy updates.' },
            ].map((step) => (
              <div key={step.num} style={{ background: '#FFFFFF', border: '1px solid #D9DCE3', padding: '28px 24px', borderRadius: 6 }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                  PHASE {step.num}
                </span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: '#1D1E33', margin: '0 0 10px', fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#63667A', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 FINAL CTA (ORANGE #F47117) */}
      <PageCTA
        eyebrow="INFRYS SOLUTIONS SIGNAL / 05"
        headingLine1="READY TO ELEVATE YOUR"
        headingLine2="SECURITY POSTURE?"
        supportingText="Connect with Infrys security engineers to schedule an initial vulnerability assessment or GRC discovery."
        primaryCtaText="TALK TO AN EXPERT"
        primaryCtaHref="/contact"
        secondaryCtaText="EXPLORE VAPT SERVICES"
        secondaryCtaHref="/solutions/vapt"
      />

      {/* 06 FOOTER (NAVY #1D1E33) */}
      <EnterpriseFooter />
    </main>
  )
}
