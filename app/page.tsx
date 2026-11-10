'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ShieldCheck, KeyRound, Cpu, Layers } from 'lucide-react'
import { AtomicGlobe } from '@/components/atomic-globe'
import { EnterpriseHeader } from '@/components/header'
import { EnterpriseFooter } from '@/components/sections/footer'
import { CryptographicCore } from '@/components/cryptographic-core'
import { Logo3DCarousel } from '@/components/ui/logo-3d-carousel'
import { LaserCollection } from '@designcodeio/threeui'
import '@designcodeio/threeui/style.css'

export function Scene() {
  return (
    <div className="shader-frame">
      <LaserCollection
        speed={1.00}
        size={1.00}
        length={1.00}
        density={1.00}
        opacity={1.00}
        hue={0}
        saturation={1.00}
        brightness={1.00}
      />
    </div>
  )
}

const solutionsDirectory = [
  {
    kicker: 'ASSESS',
    title: 'VAPT',
    desc: 'Find attack paths before they become incidents through comprehensive vulnerability assessment and manual penetration testing.',
    href: '/solutions#vapt',
  },
  {
    kicker: 'GOVERN',
    title: 'GRC',
    desc: 'Turn complex regulatory obligations into a measurable, audit-ready security posture aligned with ISO 27001, SOC 2, HIPAA, and NIST CSF 2.0.',
    href: '/solutions#grc',
  },
  {
    kicker: 'TRANSFORM',
    title: 'CRYPTOGRAPHY + PQC',
    desc: 'Discover cryptographic dependencies and migrate from legacy RSA/ECC to NIST-standardized quantum-resistant lattice systems.',
    href: '/solutions#cryptography-pqc',
  },
  {
    kicker: 'PROTECT',
    title: 'MANAGED SECURITY',
    desc: 'Extend your enterprise security team with continuous 24/7 SOC intelligence, cryptographic telemetry, and rapid incident containment.',
    href: '/solutions#managed-security',
  },
]

const technologyShowcase = [
  {
    num: '01',
    tag: 'FOUNDATIONAL MATH',
    title: 'CRYPTOGRAPHY',
    headline: 'TRUST IN THE MATHEMATICS.',
    desc: 'Symmetric key wrapping, asymmetric primitives, and PKI dependency mapping protecting identities, communications, and transactions.',
    href: '/technology#cryptography',
  },
  {
    num: '02',
    tag: 'NIST FIPS 203 / 204 / 205',
    title: 'POST-QUANTUM CRYPTOGRAPHY',
    headline: 'PREPARE BEFORE THE THREAT ARRIVES.',
    desc: 'Standardized lattice-based encryption (ML-KEM & ML-DSA) and Harvest-Now-Decrypt-Later (HNDL) risk mitigation.',
    href: '/technology#post-quantum-cryptography',
  },
  {
    num: '03',
    tag: 'DECOUPLED ABSTRACTION',
    title: 'CRYPTO-AGILITY',
    headline: 'SECURITY THAT CAN EVOLVE.',
    desc: 'Decouple applications from underlying algorithms for hot-swappable cryptographic updates without rewriting operational codebases.',
    href: '/technology#crypto-agility',
  },
  {
    num: '04',
    tag: '7-LAYER DEFENSE SYSTEM',
    title: 'SECURITY ARCHITECTURE',
    headline: 'ENGINEER SECURITY AS A SYSTEM.',
    desc: 'Connect applications, data, identity, cryptography, PQC, HSMs, and telemetry into a resilient 7-layer enterprise architecture.',
    href: '/technology#security-architecture',
  },
]

const industries = [
  { slug: 'financial-services', name: 'FINANCIAL SERVICES', desc: 'High-frequency transaction encryption, interbank key wrapping, and PCI-DSS / SOC 2 / ISO GRC compliance.' },
  { slug: 'healthcare', name: 'HEALTHCARE', desc: 'Long-term patient telemetry, HIPAA data-at-rest protection, and medical IoT device PKI security.' },
  { slug: 'technology', name: 'TECHNOLOGY', desc: 'Microservice mesh mTLS, cloud blob envelope encryption, and quantum-resistant CI/CD code signing.' },
  { slug: 'telecommunications', name: 'TELECOMMUNICATIONS', desc: '5G core signal encryption, subscriber identity module security, and optical network transport protection.' },
  { slug: 'manufacturing', name: 'MANUFACTURING', desc: 'OT/ICS firmware integrity verification, industrial SCADA isolation, and long-lifespan supply chain PKI.' },
  { slug: 'government', name: 'GOVERNMENT', desc: 'Classified data longevity protection and mandated NIST FIPS 203 / 204 / 205 post-quantum migration.' },
  { slug: 'critical-infrastructure', name: 'CRITICAL INFRASTRUCTURE', desc: 'Grid control telemetry authentication, hardware security module governance, and zero-trust control planes.' },
]

const howWeWorkSteps = [
  { num: '01', title: 'DISCOVER', desc: 'Identify every cryptographic key, algorithm dependency, attack surface, and PKI asset across enterprise infrastructure.' },
  { num: '02', title: 'ASSESS', desc: 'Evaluate Harvest-Now-Decrypt-Later (HNDL) exposure, conduct manual penetration testing, and prioritize high-risk primitives.' },
  { num: '03', title: 'DESIGN', desc: 'Architect a decoupled Crypto-Agility abstraction layer, zero-trust controls, and standardized NIST PQC blueprints.' },
  { num: '04', title: 'IMPLEMENT', desc: 'Deploy hybrid dual-key encapsulation mechanisms (ML-KEM / ML-DSA) and upgrade HSM firmware without downtime.' },
  { num: '05', title: 'VALIDATE', desc: 'Conduct cryptographic and offensive vulnerability re-testing and benchmark operational performance across services.' },
  { num: '06', title: 'EVOLVE', desc: 'Maintain continuous 24/7 cryptographic telemetry and adapt to evolving regulatory and NIST standards.' },
]

const whyInfrysPillars = [
  {
    icon: ShieldCheck,
    tag: 'OFFENSIVE & DEFENSIVE DEPTH',
    title: 'Manual Engineering Over Automated Noise',
    desc: 'We combine manual threat hunting, exploit chain verification, and 24/7 SOC telemetry rather than relying on superficial automated scanner checklists.',
  },
  {
    icon: KeyRound,
    tag: 'CRYPTOGRAPHIC AUTHORITY',
    title: 'Mathematical Key & PKI Governance',
    desc: 'From split-knowledge HSM key ceremonies to enterprise X.509 certificate lifecycle automation, we engineer trust at the mathematical root.',
  },
  {
    icon: Cpu,
    tag: 'STANDARDS-ALIGNED PQC',
    title: 'NIST FIPS 203, 204 & 205 Readiness',
    desc: 'Practical hybrid dual-key migrations implementing standardized ML-KEM, ML-DSA, and SLH-DSA algorithms without disrupting production latency.',
  },
  {
    icon: Layers,
    tag: 'EVOLUTIONARY ARCHITECTURE',
    title: 'Decoupled 7-Layer Security Systems',
    desc: 'Our crypto-agile broker pattern isolates application logic from underlying algorithms so enterprise security can evolve without code rewrites.',
  },
]

function Eyebrow({ children, color = '#63667A' }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="eyebrow" style={{ color }}>
      <span style={{ background: '#F47117' }} />
      {children}
    </p>
  )
}

export default function Page() {
  const [progress, setProgress] = useState(0)
  const [serviceActive, setServiceActive] = useState(2)

  useEffect(() => {
    const update = () => setProgress(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight))
    window.addEventListener('scroll', update, { passive: true })
    update()
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('section:not(.hero-pqc), footer'))
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).dataset.revealed = 'true'
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    )
    revealItems.forEach((item) => observer.observe(item))
    return () => {
      window.removeEventListener('scroll', update)
      observer.disconnect()
    }
  }, [])

  return (
    <main className="site-shell" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
      <div className="page-progress" style={{ transform: `scaleX(${progress})`, background: '#F47117' }} />

      {/* Global Enterprise Header & Mega-Menu */}
      <EnterpriseHeader />

      {/* 01 HERO SECTION — SECURITY FOR WHAT'S NEXT */}
      <section className="hero-pqc" id="top" style={{ background: '#1D1E33', color: '#FFFFFF', position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 82px)' }}>
        {/* Full-Bleed Matrix Junction Laser Background */}
        <Scene />

        {/* Central Cryptographic HUD, PQC & Agility Nodes, Orbit & Particle Waves */}
        <CryptographicCore />

        {/* Top-Right Technical HUD Annotation */}
        <div
          className="hero-telemetry-readout"
          style={{
            position: 'absolute',
            top: 36,
            right: '5vw',
            zIndex: 10,
            pointerEvents: 'none',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}
        >
          <span
            style={{
              color: '#F47117',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: 1,
              marginTop: 1,
            }}
          >
            +
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ color: '#FEF3E5', fontWeight: 600, fontSize: '10px', letterSpacing: '0.14em' }}>
              INFRYS / MATRIX JUNCTION
            </span>
            <span style={{ color: '#8E92A4', fontSize: '9px', letterSpacing: '0.12em' }}>
              CRYPTOGRAPHIC SYSTEM / <span style={{ color: '#F47117', fontWeight: 600 }}>ACTIVE</span>
            </span>
          </div>
        </div>

        {/* Hero Left Content */}
        <div className="hero-copy" style={{ zIndex: 10, position: 'relative', maxWidth: 580 }}>
          <Eyebrow color="#CBD0D9">SECURITY TECHNOLOGY / 01</Eyebrow>
          <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(46px, 5.2vw, 84px)', fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 0.94, margin: 0 }}>
            SECURITY<br />
            FOR WHAT&apos;S<br />
            <span style={{ color: '#F47117' }}>NEXT.</span>
          </h1>
          <p className="hero-copyp" style={{ color: '#CBD0D9', fontSize: 16, lineHeight: 1.7, marginTop: 20, maxWidth: 480 }}>
            Protecting the systems, data and technologies that power modern enterprises.
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
            <a className="button-primary" href="/contact" style={{ background: '#F47117', borderColor: '#F47117', color: '#FFFFFF', padding: '16px 24px', fontSize: 11 }}>
              TALK TO AN EXPERT <ArrowUpRight size={16} />
            </a>
            <a href="#sec-landscape" aria-label="Scroll to The Security Landscape" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#F47117', fontSize: 20, textDecoration: 'none' }}>
              ↓
            </a>
          </div>
        </div>

        {/* Right Column / Mobile Stage Spacer for Hero Balance */}
        <div className="hero-visual-spacer" aria-hidden="true" style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }} />

        <div className="hero-footer" style={{ borderColor: 'rgba(203,208,217,0.18)', color: '#CBD0D9', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ font: "400 9px 'IBM Plex Mono', monospace", letterSpacing: '0.14em', paddingLeft: 2 }}>
            01 — 09
          </span>
          <span style={{ font: "500 9px 'IBM Plex Mono', monospace", color: '#F47117', letterSpacing: '0.14em' }}>
            TODAY&apos;S CRYPTOGRAPHY → PQC → CRYPTO-AGILITY
          </span>
        </div>
      </section>

      {/* STANDARDIZED POST-QUANTUM & ENTERPRISE COMPLIANCE 3D CAROUSEL (Part of Hero Stage) */}
      <section
        style={{
          background: '#141524',
          borderTop: '1px solid rgba(244, 113, 23, 0.24)',
          borderBottom: '1px solid rgba(29, 30, 51, 0.15)',
          padding: '42px 0 46px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 24, padding: '0 5vw' }}>
          <p
            style={{
              font: "600 10px 'IBM Plex Mono', monospace",
              color: '#8E92A4',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            <span style={{ color: '#F47117', marginRight: 8 }}>●</span>
            STANDARDIZED ARCHITECTURE // GLOBAL SECURITY &amp; PQC COMPLIANCE FRAMEWORKS
          </p>
        </div>
        <Logo3DCarousel itemHeight={48} speed={36} gap={48} minScale={0.35} maxScale={1.65} />
      </section>

      {/* 02 THE SECURITY LANDSCAPE */}
      <section className="sec-landscape section-rule" id="sec-landscape" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">THE SECURITY LANDSCAPE / 02</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            THE SECURITY LANDSCAPE<br />
            <span style={{ color: '#F47117' }}>IS CHANGING.</span>
          </h2>
          <a
            href="/technology#why-pqc"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 24,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#F47117',
              textDecoration: 'none',
            }}
          >
            EXPLORE HNDL RISK &amp; PQC TIMELINE <ArrowUpRight size={15} />
          </a>
        </div>
        <div>
          <p className="body-copy" style={{ color: '#63667A', fontSize: 16, lineHeight: 1.8 }}>
            Modern enterprise security can no longer rely solely on legacy asymmetric encryption. As adversarial sophistication grows and quantum computational capabilities draw closer, security architectures must address today&apos;s vulnerabilities while preparing proactively for post-quantum resilience.
          </p>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              ['TODAY’S CRYPTOGRAPHY', 'RSA-2048 & ECC primitives securing current enterprise identities, APIs, and web traffic.'],
              ['QUANTUM RISK (HNDL)', 'Shor’s algorithm capability rendering asymmetric key pairs vulnerable to Harvest-Now-Decrypt-Later interception.'],
              ['POST-QUANTUM SECURITY', 'NIST-standardized lattice cryptography (FIPS 203 / 204 / 205) and crypto-agile brokers safeguarding long-term trust.'],
            ].map(([stage, text], idx) => (
              <div key={stage} style={{ borderLeft: '2px solid #F47117', paddingLeft: 16 }}>
                <span style={{ font: "600 10px 'IBM Plex Mono', monospace", color: '#F47117', display: 'block', letterSpacing: '0.12em' }}>
                  STAGE 0{idx + 1} — {stage}
                </span>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: '#63667A' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 OUR SOLUTIONS */}
      <section className="services section-rule" id="solutions" style={{ background: '#1D1E33', color: '#FFFFFF' }}>
        <div>
          <Eyebrow color="#CBD0D9">OUR SOLUTIONS / 03</Eyebrow>
          <h2 style={{ color: '#FFFFFF' }}>
            Built for the<br />
            <span style={{ color: '#F47117' }}>complexity ahead.</span>
          </h2>
          <p className="body-copy" style={{ color: '#CBD0D9', marginTop: 16 }}>
            Comprehensive offensive security, regulatory governance, post-quantum cryptographic modernization, and 24/7 managed defense.
          </p>
          <a
            href="/solutions"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 24,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#F47117',
              textDecoration: 'none',
            }}
          >
            EXPLORE ALL SOLUTIONS <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="service-list" style={{ borderTop: '1px solid rgba(203,208,217,0.2)' }}>
          {solutionsDirectory.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className={serviceActive === index ? 'active' : ''}
              onMouseEnter={() => setServiceActive(index)}
              onFocus={() => setServiceActive(index)}
              style={{
                textDecoration: 'none',
                borderBottom: '1px solid rgba(203,208,217,0.2)',
                background: serviceActive === index ? 'rgba(244,113,23,0.06)' : 'transparent',
                borderColor: serviceActive === index ? '#F47117' : 'rgba(203,208,217,0.2)',
                color: '#FFFFFF',
                padding: '22px 16px',
                display: 'grid',
                gridTemplateColumns: '90px 180px 1fr 24px',
                gap: 20,
                alignItems: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: serviceActive === index ? '#F47117' : '#CBD0D9' }}>
                {item.kicker}
              </span>
              <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: serviceActive === index ? '#F47117' : '#FFFFFF' }}>
                {item.title}
              </strong>
              <p style={{ margin: 0, fontSize: 13, color: '#CBD0D9', lineHeight: 1.5 }}>{item.desc}</p>
              <ArrowUpRight size={18} style={{ color: serviceActive === index ? '#F47117' : '#CBD0D9' }} />
            </a>
          ))}
        </div>
      </section>

      {/* 04 OUR TECHNOLOGY */}
      <section className="our-technology section-rule" id="technology" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">OUR TECHNOLOGY / 04</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            ENGINEERED FOR<br />
            <span style={{ color: '#F47117' }}>MATHEMATICAL TRUST.</span>
          </h2>
          <p className="body-copy" style={{ color: '#63667A', marginTop: 16 }}>
            Four core technology pillars connecting foundational cryptography, NIST post-quantum lattice standards, decoupled crypto-agility, and 7-layer security architecture.
          </p>
          <a
            href="/technology"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 24,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#F47117',
              textDecoration: 'none',
            }}
          >
            EXPLORE TECHNOLOGY PLATFORM <ArrowUpRight size={15} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {technologyShowcase.map((domain) => (
            <a
              key={domain.title}
              href={domain.href}
              className="hover-card-enterprise"
              style={{
                textDecoration: 'none',
                background: '#FFFFFF',
                border: '1px solid #D9DCE3',
                padding: '28px 24px',
                borderRadius: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600 }}>
                    DOMAIN {domain.num}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#63667A', letterSpacing: '0.1em' }}>
                    {domain.tag}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, color: '#1D1E33', fontWeight: 700, margin: '0 0 6px' }}>
                  {domain.title}
                </h3>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 12 }}>
                  {domain.headline}
                </span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#63667A', lineHeight: 1.6, margin: 0 }}>
                  {domain.desc}
                </p>
              </div>
              <div style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', fontWeight: 600 }}>
                EXPLORE {domain.title} <ArrowUpRight size={13} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 05 INDUSTRIES WE SUPPORT */}
      <section className="industries section-rule" id="industries" style={{ background: '#1D1E33', color: '#FFFFFF' }}>
        <div>
          <Eyebrow color="#CBD0D9">SECTOR SPECIALIZATION / 05</Eyebrow>
          <h2 style={{ color: '#FFFFFF' }}>
            SECURITY FOR<br />
            <span style={{ color: '#F47117' }}>COMPLEX ENVIRONMENTS.</span>
          </h2>
          <p className="body-copy" style={{ color: '#CBD0D9', marginTop: 16 }}>
            Specialized cryptographic and offensive security architectures across seven high-compliance enterprise and critical infrastructure sectors.
          </p>
          <a
            href="/industries"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 24,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#F47117',
              textDecoration: 'none',
            }}
          >
            EXPLORE ALL 7 INDUSTRIES <ArrowUpRight size={15} />
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {industries.map((ind) => (
            <a
              key={ind.name}
              href={`/industries#${ind.slug}`}
              className="hover-card-enterprise"
              style={{
                textDecoration: 'none',
                borderBottom: '1px solid rgba(203, 208, 217, 0.18)',
                padding: '18px 14px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 16,
                alignItems: 'center',
              }}
            >
              <strong style={{ fontSize: 16, color: '#FFFFFF', letterSpacing: '-0.02em', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {ind.name}
                <ArrowUpRight size={14} style={{ color: '#F47117' }} />
              </strong>
              <p style={{ margin: 0, fontSize: 13, color: '#CBD0D9', lineHeight: 1.5 }}>{ind.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 06 HOW WE WORK */}
      <section className="how-we-work section-rule" id="how-we-work" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">ENGAGEMENT PROCESS / 06</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            FROM ASSESSMENT<br />
            <span style={{ color: '#F47117' }}>TO RESILIENCE.</span>
          </h2>
          <p className="body-copy" style={{ color: '#63667A' }}>
            A structured 6-phase engineering lifecycle guiding enterprise security and post-quantum modernization from initial discovery to continuous defense.
          </p>
          <a
            href="/company#how-we-work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 20,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#F47117',
              textDecoration: 'none',
            }}
          >
            EXPLORE HOW WE WORK <ArrowUpRight size={15} />
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {howWeWorkSteps.map((step) => (
            <div
              key={step.num}
              style={{
                background: '#FFFFFF',
                border: '1px solid #D9DCE3',
                padding: '24px 20px',
                borderRadius: 6,
              }}
            >
              <span style={{ font: "600 12px 'IBM Plex Mono', monospace", color: '#F47117' }}>PHASE {step.num}</span>
              <h3 style={{ fontSize: 16, color: '#1D1E33', margin: '8px 0 10px', fontWeight: 700 }}>{step.title}</h3>
              <p style={{ margin: 0, fontSize: 12, color: '#63667A', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 07 WHY INFRYS — CAPABILITIES & CREDIBILITY */}
      <section className="why-final section-rule" id="why-infrys" style={{ background: '#1D1E33', color: '#FFFFFF' }}>
        <div>
          <Eyebrow color="#CBD0D9">WHY INFRYS / 07</Eyebrow>
          <h2 style={{ color: '#FFFFFF' }}>
            ENGINEERED FOR<br />
            <span style={{ color: '#F47117' }}>HIGH-TRUST SYSTEMS.</span>
          </h2>
          <p className="body-copy" style={{ color: '#CBD0D9', marginTop: 16 }}>
            Organizations trust Infrys because we bridge present-day offensive security and regulatory compliance with deep cryptographic engineering built for the post-quantum era.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 24 }}>
            <a
              href="/company#capabilities"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#F47117',
                textDecoration: 'none',
              }}
            >
              OUR CORE CAPABILITIES <ArrowUpRight size={15} />
            </a>
            <a
              href="/insights#research"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#CBD0D9',
                textDecoration: 'none',
              }}
            >
              READ TECHNICAL RESEARCH <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {whyInfrysPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(203, 208, 217, 0.18)',
                  padding: '28px 24px',
                  borderRadius: 8,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <Icon size={20} style={{ color: '#F47117' }} />
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#F47117', letterSpacing: '0.1em', fontWeight: 600 }}>
                    {pillar.tag}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, color: '#FFFFFF', fontWeight: 700, margin: '0 0 10px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.65, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 08 GLOBAL SECURITY INTELLIGENCE (3D ATOMIC GLOBE) */}
      <section
        id="globe"
        className="section-rule"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: 0,
          background: '#1D1E33',
          display: 'flex',
          flexDirection: 'column',
          color: '#FFFFFF',
          borderTop: '1px solid rgba(203, 208, 217, 0.14)',
        }}
      >
        <div
          style={{
            padding: '52px 5vw 0',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <div>
            <Eyebrow color="#CBD0D9">GLOBAL SECURITY INTELLIGENCE / 08</Eyebrow>
            <h2 style={{ fontSize: 'clamp(32px, 4.2vw, 56px)', margin: 0, fontWeight: 600, letterSpacing: '-0.06em', color: '#FFFFFF', lineHeight: 1.04 }}>
              CONNECTED ENTERPRISE<br />
              <span style={{ color: '#F47117' }}>SECURITY NETWORK.</span>
            </h2>
          </div>
          <p style={{ margin: 0, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#CBD0D9', letterSpacing: '0.08em' }}>
            HOVER TO INSPECT · CLICK ANY NODE TO EXPLORE DOMAIN ↗
          </p>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '650px', minHeight: '540px' }}>
          <AtomicGlobe style={{ width: '100%', height: '100%' }} theme="infrys" routeStyle="pulse" routeWidth={1.5} dotSize={4.5} />
        </div>
      </section>

      {/* 09 FINAL CTA AND FOOTER */}
      <section
        className="final-cta"
        id="contact"
        style={{
          background: '#F47117',
          color: '#FFFFFF',
          padding: '120px 10vw 130px',
          textAlign: 'left',
          position: 'relative',
        }}
      >
        <Eyebrow color="#FFFFFF">THE INFRYS SIGNAL / 09</Eyebrow>
        <h2 style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.08em', lineHeight: 0.88, margin: '20px 0 24px', color: '#FFFFFF', fontWeight: 700 }}>
          READY FOR<br />
          <span style={{ color: '#1D1E33' }}>WHAT&apos;S NEXT?</span>
        </h2>
        <p style={{ fontSize: 18, color: '#FFFFFF', opacity: 0.95, maxWidth: 480, margin: '0 0 36px', lineHeight: 1.6 }}>
          Start your security assessment or post-quantum cryptographic transition today. Connect with our security engineers and specialists.
        </p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <a
            className="button-primary"
            href="/contact"
            style={{
              background: '#1D1E33',
              borderColor: '#1D1E33',
              color: '#FFFFFF',
              padding: '16px 24px',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 11,
            }}
          >
            TALK TO AN EXPERT <ArrowUpRight size={16} />
          </a>
          <a
            className="button-primary"
            href="/solutions"
            style={{
              background: 'transparent',
              borderColor: '#FFFFFF',
              color: '#FFFFFF',
              padding: '16px 24px',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 11,
            }}
          >
            EXPLORE SOLUTIONS
          </a>
        </div>
      </section>

      <EnterpriseFooter />
    </main>
  )
}
