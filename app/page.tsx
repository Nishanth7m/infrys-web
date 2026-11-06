'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, CheckCircle2, Shield, Lock, Cpu, Server, FileText, Globe, RefreshCw, ChevronRight } from 'lucide-react'
import { Cover } from '@/components/ui/cover'
import { AtomicGlobe } from '@/components/atomic-globe'
import { AsciiWaterReveal } from '@/components/ui/ascii-water-reveal'
import { EnterpriseHeader } from '@/components/header'
import { EnterpriseFooter } from '@/components/sections/footer'
import { InfrysLogo } from '@/components/logo'
import { CryptographicCore } from '@/components/cryptographic-core'
import { Logo3DCarousel } from '@/components/ui/logo-3d-carousel'

const services = [
  ['ASSESS', 'VAPT', 'Find attack paths before they become incidents through comprehensive vulnerability testing.'],
  ['GOVERN', 'GRC', 'Turn complex regulatory obligations into a measurable, audit-ready security posture.'],
  ['TRANSFORM', 'CRYPTOGRAPHY + PQC', 'Move from today’s asymmetric cryptography to quantum-resistant lattice systems.'],
  ['PROTECT', 'MANAGED SECURITY', 'Extend your enterprise security team with continuous intelligence and 24/7 incident response.'],
]

const timeline = ['TODAY', 'QUANTUM RISK', 'PQC MIGRATION', 'CRYPTO-AGILITY', 'FUTURE']

const howWeWorkSteps = [
  { num: '01', title: 'DISCOVER', desc: 'Identify every cryptographic key, algorithm dependency, and PKI asset across enterprise infrastructure.' },
  { num: '02', title: 'ASSESS', desc: 'Evaluate Harvest-Now-Decrypt-Later (HNDL) exposure and prioritize high-risk asymmetric primitives.' },
  { num: '03', title: 'DESIGN', desc: 'Architect a decoupled Crypto-Agility abstraction layer and select standardized NIST PQC algorithms.' },
  { num: '04', title: 'IMPLEMENT', desc: 'Deploy hybrid dual-key encapsulation mechanisms and upgrade HSM firmware without downtime.' },
  { num: '05', title: 'VALIDATE', desc: 'Conduct cryptographic vulnerability testing and verify zero performance regression across services.' },
  { num: '06', title: 'EVOLVE', desc: 'Maintain continuous cryptographic telemetry and adapt to evolving regulatory and NIST standards.' },
]

const industries = [
  { name: 'FINANCIAL SERVICES', desc: 'High-frequency transaction encryption, SWIFT key wrapping, and SOC2/ISO GRC compliance.' },
  { name: 'HEALTHCARE', desc: 'Long-term patient telemetry, HIPAA data at rest protection, and medical IoT device security.' },
  { name: 'TECHNOLOGY', desc: 'Microservice mesh TLS, cloud blob envelope encryption, and CI/CD code signing PKI.' },
  { name: 'TELECOMMUNICATIONS', desc: '5G core signal encryption, subscriber identity module security, and optical network protection.' },
  { name: 'MANUFACTURING', desc: 'OT/ICS firmware integrity verification, industrial SCADA isolation, and supply chain PKI.' },
  { name: 'GOVERNMENT', desc: 'Classified data longevity protection and FIPS 203/204 post-quantum migration mandates.' },
  { name: 'CRITICAL INFRASTRUCTURE', desc: 'Grid control telemetry, hardware security module management, and resilient zero-trust architecture.' },
]

const caseStudyPlaceholders = [
  {
    title: 'Post-Quantum Migration Approach for High-Frequency Transactional Systems',
    category: 'SECURITY FRAMEWORKS',
    challenge: 'High-value transactional data with 25-year longevity exposed to Harvest-Now-Decrypt-Later (HNDL) threat models.',
    approach: 'Hybrid ML-KEM-768 key encapsulation deployment alongside existing ECDH TLS gateways.',
    outcome: 'Quantum-resistant key exchange model without degrading network handshake latency.',
  },
  {
    title: 'Crypto-Agile Abstraction & Broker Pattern for Enterprise Services',
    category: 'SELECTED SECURITY APPROACHES',
    challenge: 'Tightly coupled application code directly invoking legacy RSA-2048 primitives across microservices.',
    approach: 'Abstracted cryptographic broker layer decoupling key management from application logic.',
    outcome: 'Architecture pattern supporting zero-downtime algorithm hot-swapping.',
  },
]

const insightsList = [
  { tag: 'RESEARCH BRIEF', title: 'NIST FIPS 203 & 204 Migration Readiness Assessment', date: 'TECHNICAL RESEARCH' },
  { tag: 'WHITE PAPER', title: 'Mitigating Harvest-Now-Decrypt-Later (HNDL) Risks in Data Storage', date: 'PQC ANALYSIS' },
  { tag: 'ENGINEERING GUIDE', title: 'Designing Decoupled Crypto-Agile Abstraction Layers', date: 'SECURITY ARCHITECTURE' },
  { tag: 'REGULATORY ANALYSIS', title: 'Post-Quantum Compliance Frameworks for Global Regulators', date: 'GRC FRAMEWORK' },
]

const resourcesList = [
  { type: 'WHITE PAPER · COMING SOON', title: 'The Executive Guide to Post-Quantum Cryptography Migration' },
  { type: 'TECHNICAL BRIEF · COMING SOON', title: 'Lattice-Based Encryption vs Classical RSA: Latency & Overhead Benchmarks' },
  { type: 'GUIDE · COMING SOON', title: 'Cryptographic Inventory & Dependency Discovery Framework' },
  { type: 'WEBINAR · COMING SOON', title: 'Preparing Your Hardware Security Modules (HSMs) for PQC' },
]

function Eyebrow({ children, color = '#63667A' }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="eyebrow" style={{ color }}>
      <span style={{ background: '#F47117' }} />
      {children}
    </p>
  )
}



function Architecture() {
  const [activeLayer, setActiveLayer] = useState(3)
  const layers = [
    { title: 'APPLICATIONS', detail: 'API gateways, web interfaces, and microservices authenticated via crypto-agile credentials.', status: 'ENCRYPTED' },
    { title: 'DATA', detail: 'Enterprise databases and blob storage protected by hybrid lattice-based envelope encryption.', status: 'PROTECTED' },
    { title: 'CRYPTOGRAPHIC LAYER', detail: 'Abstraction layer decoupling key management from application logic for seamless algorithm upgrades.', status: 'ABSTRACTED' },
    { title: 'PQC PROTECTION', detail: 'NIST-standardized post-quantum algorithms (ML-KEM / ML-DSA) safeguarding against quantum decryption.', status: 'QUANTUM-RESISTANT' },
    { title: 'CRYPTO-AGILE INFRASTRUCTURE', detail: 'Dynamic hardware security modules (HSMs) capable of hot-swapping algorithms without downtime.', status: 'AGILE' },
  ]
  return (
    <section className="architecture section-rule" id="architecture" style={{ background: '#1D1E33', color: '#FFFFFF' }}>
      <div>
        <Eyebrow color="#CBD0D9">INFRYS PQC ARCHITECTURE / 05</Eyebrow>
        <h2 style={{ color: '#FFFFFF' }}>
          Protection is<br />
          <span style={{ color: '#F47117' }}>a living layer.</span>
        </h2>
        <p className="body-copy" style={{ color: '#CBD0D9' }}>
          Signals move through the stack. At the PQC layer, cryptographic intelligence becomes protection — without rebuilding the enterprise.
        </p>
        <div style={{ marginTop: 24, padding: '20px 24px', borderRadius: 8, background: '#1D1E33', border: '1px solid rgba(244, 113, 23, 0.35)', boxShadow: '0 12px 30px rgba(0,0,0,0.4)' }}>
          <div style={{ font: "400 9px 'DM Mono', monospace", color: '#F47117', letterSpacing: '0.14em', marginBottom: 8 }}>
            INSPECTING LAYER 0{activeLayer + 1} — {layers[activeLayer].title}
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#CBD0D9' }}>{layers[activeLayer].detail}</p>
          <div style={{ display: 'inline-block', marginTop: 12, font: "600 9px 'DM Mono', monospace", color: '#FEF3E5', background: 'rgba(244,113,23,0.2)', padding: '4px 10px', borderRadius: 4, border: '1px solid rgba(244,113,23,0.4)' }}>
            STATE: {layers[activeLayer].status}
          </div>
        </div>
      </div>
      <div className="architecture-visual">
        {layers.map((layer, index) => (
          <div
            key={layer.title}
            className={`architecture-layer layer-${index}`}
            onMouseEnter={() => setActiveLayer(index)}
            onClick={() => setActiveLayer(index)}
            style={{
              cursor: 'pointer',
              borderColor: activeLayer === index ? '#F47117' : 'rgba(203, 208, 217, 0.2)',
              background: activeLayer === index ? 'rgba(244, 113, 23, 0.08)' : 'transparent',
              paddingLeft: activeLayer === index ? 12 : 0,
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ color: activeLayer === index ? '#F47117' : '#CBD0D9' }}>0{index + 1}</span>
            <strong style={{ color: activeLayer === index ? '#F47117' : '#FFFFFF' }}>{layer.title}</strong>
            <i style={{ background: '#F47117' }} />
            <b style={{ background: '#F47117' }} />
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return <EnterpriseFooter />
}


export default function Page() {
  const [progress, setProgress] = useState(0)
  const [transitionActive, setTransitionActive] = useState(0)
  const [serviceActive, setServiceActive] = useState(2)
  const [activeHeroService, setActiveHeroService] = useState(2)

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

      {/* 01 HERO SECTION */}
      <section className="hero-pqc" id="top" style={{ background: '#1D1E33', color: '#FFFFFF', position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 82px)' }}>
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
            <a className="button-primary" href="#contact" style={{ background: '#F47117', borderColor: '#F47117', color: '#FFFFFF', padding: '16px 24px', fontSize: 11 }}>
              TALK TO AN EXPERT <ArrowUpRight size={16} />
            </a>
            <a href="#sec-landscape" aria-label="Scroll down" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#F47117', fontSize: 20, textDecoration: 'none' }}>
              ↓
            </a>
          </div>
        </div>

        {/* Hero Right Visual: Architectural 3D Cryptographic Ribbon Core */}
        <div style={{ zIndex: 5, position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CryptographicCore />
        </div>

        <div className="hero-footer" style={{ borderColor: 'rgba(203,208,217,0.18)', color: '#CBD0D9', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ font: "400 9px 'IBM Plex Mono', monospace", letterSpacing: '0.14em', paddingLeft: 2 }}>
            01 — 10
          </span>
          <span style={{ font: "500 9px 'IBM Plex Mono', monospace", color: '#F47117', letterSpacing: '0.14em' }}>
            TODAY&apos;S CRYPTOGRAPHY → PQC → CRYPTO-AGILITY
          </span>
        </div>
      </section>

      {/* 01.5 STANDARDIZED POST-QUANTUM & ENTERPRISE COMPLIANCE 3D CAROUSEL */}
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

      {/* 02 SECURITY LANDSCAPE */}
      <section className="sec-landscape section-rule" id="sec-landscape" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">THE EVOLUTION / 02</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            THE SECURITY LANDSCAPE<br />
            <span style={{ color: '#F47117' }}>IS CHANGING.</span>
          </h2>
        </div>
        <div>
          <p className="body-copy" style={{ color: '#63667A', fontSize: 16, lineHeight: 1.8 }}>
            Modern enterprise security can no longer rely solely on legacy asymmetric encryption. As quantum computational capabilities draw closer, security architectures must evolve proactively from classical algorithms to post-quantum resilience.
          </p>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              ['TODAY’S CRYPTOGRAPHY', 'RSA-2048 & ECC primitives securing current identities and web traffic.'],
              ['QUANTUM RISK', 'Shor’s algorithm capability rendering asymmetric key pairs vulnerable to decryption.'],
              ['POST-QUANTUM SECURITY', 'NIST-standardized lattice cryptography safeguarding enterprise longevity.'],
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

      {/* 03 CRYPTOGRAPHIC TRANSITION */}
      <section className="transition section-rule" id="technology" style={{ background: '#1D1E33', color: '#FFFFFF' }}>
        <div className="transition-copy">
          <Eyebrow color="#CBD0D9">THE CRYPTOGRAPHIC TRANSITION / 03</Eyebrow>
          <h2 style={{ color: '#FFFFFF' }}>
            From today’s<br />
            <span style={{ color: '#F47117' }}>cryptography.</span>
          </h2>
          <p className="body-copy" style={{ color: '#CBD0D9' }}>
            Quantum computing changes the security assumptions beneath every critical system. The answer is not a single upgrade. It is a deliberate migration toward post-quantum, crypto-agile infrastructure.
          </p>
        </div>
        <div className={`transition-system state-${transitionActive}`}>
          <div className="transition-label" style={{ color: '#FFFFFF' }}>SELECT A STATE</div>
          <div className="transition-track" style={{ borderColor: 'rgba(203,208,217,0.2)' }}>
            {timeline.map((item, index) => (
              <button
                key={item}
                className={index === transitionActive ? 'active' : ''}
                onClick={() => setTransitionActive(index)}
                style={{ color: index === transitionActive ? '#F47117' : '#CBD0D9', borderColor: 'rgba(203,208,217,0.2)' }}
              >
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <i style={{ background: index === transitionActive ? '#F47117' : 'rgba(203,208,217,0.2)' }} />
              </button>
            ))}
          </div>
          <div className="transition-field" style={{ position: 'relative', background: '#1D1E33', borderColor: 'rgba(244,113,23,0.35)', borderRadius: 8, marginTop: 32 }}>
            <AsciiWaterReveal style={{ position: 'absolute', inset: 0, opacity: 0.4 }} color="244, 113, 23" maxOpacity={0.4} fontSize={14} />
            <div className="field-grid" />
            <div className="field-core" style={{ color: '#F47117' }}>
              {transitionActive === 0 ? 'CLASSICAL' : transitionActive === 1 ? 'QUANTUM RISK' : transitionActive === 2 ? 'PQC' : transitionActive === 3 ? 'AGILE' : 'FUTURE'}
            </div>
            <div className="field-readout" style={{ color: '#CBD0D9' }}>
              MATHEMATICAL STATE / 0{transitionActive + 1}<br />
              SIGNAL INTEGRITY / {transitionActive > 2 ? 'PROTECTED' : 'TRANSITIONING'}
            </div>
          </div>
        </div>
      </section>

      {/* 04 WHY PQC */}
      <section className="why-pqc section-rule" id="why-pqc" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">WHY THE TRANSITION MATTERS / 04</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            THE CRYPTOGRAPHIC<br />
            <span style={{ color: '#F47117' }}>LANDSCAPE IS CHANGING.</span>
          </h2>
        </div>
        <div className="harvest">
          <div>
            <b style={{ color: '#F47117' }}>01</b>
            <strong style={{ color: '#1D1E33' }}>HARVEST</strong>
            <p style={{ color: '#63667A' }}>Adversaries can collect encrypted data today.</p>
          </div>
          <div>
            <b style={{ color: '#F47117' }}>02</b>
            <strong style={{ color: '#1D1E33' }}>STORE</strong>
            <p style={{ color: '#63667A' }}>That data may remain valuable for decades.</p>
          </div>
          <div>
            <b style={{ color: '#F47117' }}>03</b>
            <strong style={{ color: '#1D1E33' }}>DECRYPT</strong>
            <p style={{ color: '#63667A' }}>Future quantum capability changes the equation.</p>
          </div>
          <em style={{ color: '#F47117', marginTop: 28, display: 'block', fontStyle: 'normal' }}>
            THE MIGRATION STARTS BEFORE THE THREAT ARRIVES.
          </em>
        </div>
      </section>

      {/* 05 INFRYS PQC ARCHITECTURE */}
      <Architecture />

      {/* 06 GLOBAL SECURITY INTELLIGENCE */}
      <section
        id="globe"
        className="section-rule"
        style={{
          position: 'relative',
          width: '100%',
          height: '740px',
          minHeight: '740px',
          overflow: 'hidden',
          padding: '60px 5vw 0',
          background: '#FEF3E5',
          display: 'block',
          color: '#1D1E33',
        }}
      >
        <div style={{ position: 'absolute', top: '40px', left: '5vw', zIndex: 10, pointerEvents: 'none' }}>
          <Eyebrow color="#1D1E33">GLOBAL SECURITY INTELLIGENCE / 06</Eyebrow>
          <h2 style={{ fontSize: 'clamp(32px, 4.2vw, 56px)', margin: 0, fontWeight: 600, letterSpacing: '-0.06em', color: '#1D1E33' }}>
            CONNECTED ENTERPRISE<br />
            <span style={{ color: '#F47117' }}>SECURITY NETWORK.</span>
          </h2>
        </div>
        <AtomicGlobe style={{ width: '100%', height: '100%' }} theme="infrys" routeStyle="pulse" routeWidth={1.5} dotSize={4.5} />
      </section>

      {/* 07 CRYPTOGRAPHY */}
      <section className="cryptography section-rule" id="cryptography" style={{ background: '#1D1E33', color: '#FFFFFF' }}>
        <div>
          <Eyebrow color="#CBD0D9">CRYPTOGRAPHY / 07</Eyebrow>
          <h2 style={{ color: '#FFFFFF' }}>
            TRUST IN THE<br />
            <span style={{ color: '#F47117' }}>mathematics.</span>
          </h2>
          <p className="body-copy" style={{ color: '#CBD0D9' }}>
            Every critical system depends on mathematics that must remain trustworthy as the threat model changes.
          </p>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {['Cryptographic Inventory', 'Algorithm Selection', 'Key Management PKI', 'Dependency Mapping'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#FFFFFF', fontWeight: 600 }}>
                <CheckCircle2 size={16} style={{ color: '#F47117' }} />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="cipher-sequence">
          <span style={{ color: '#FFFFFF' }}>ENCRYPTED</span>
          <i style={{ color: '#CBD0D9' }}>↓</i>
          <strong style={{ color: '#F47117' }}>SCRAMBLED</strong>
          <i style={{ color: '#CBD0D9' }}>↓</i>
          <b style={{ color: '#F47117' }}>PROTECTED</b>
        </div>
      </section>

      {/* 08 POST-QUANTUM CRYPTOGRAPHY */}
      <section className="pqc-major section-rule" id="pqc" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">POST-QUANTUM CRYPTOGRAPHY / 08</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            PREPARE FOR<br />
            <span style={{ color: '#F47117' }}>THE POST-QUANTUM ERA.</span>
          </h2>
          <p className="body-copy" style={{ color: '#63667A', marginTop: 20 }}>
            Standardized lattice-based encryption algorithms designed to withstand attacks by Cryptanalytically Relevant Quantum Computers (CRQCs).
          </p>
        </div>
        <div className="major-timeline" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {['DISCOVER', 'ASSESS', 'PRIORITIZE', 'MIGRATE', 'VALIDATE'].map((step, index) => (
            <div key={step} className="timeline-on" style={{ display: 'grid', gap: 12 }}>
              <span style={{ font: "400 9px 'IBM Plex Mono', monospace", color: '#F47117' }}>0{index + 1}</span>
              <strong style={{ fontSize: 13, color: '#1D1E33' }}>{step}</strong>
              <i style={{ background: '#F47117', height: 2, display: 'block' }} />
            </div>
          ))}
        </div>
      </section>

      {/* 09 CRYPTO-AGILITY */}
      <section className="agility section-rule" id="agility" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">CRYPTO-AGILITY / 09</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            SECURITY THAT<br />
            <span style={{ color: '#F47117' }}>CAN EVOLVE.</span>
          </h2>
          <p className="body-copy" style={{ color: '#63667A', marginTop: 16 }}>
            Decouple applications from underlying algorithms to allow rapid cryptographic hot-swapping without rewriting operational codebases.
          </p>
        </div>
        <div className="agility-visual">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <i key={index} className={`module module-${index}`} style={{ borderColor: '#F47117' }} />
          ))}
          <p style={{ color: '#63667A' }}>
            ADAPT WITHOUT REBUILDING<br />
            <b style={{ color: '#F47117' }}>THE WHOLE INFRASTRUCTURE</b>
          </p>
        </div>
      </section>

      {/* 10 SOLUTIONS DIRECTORY */}
      <section className="services section-rule" id="solutions" style={{ background: '#1D1E33', color: '#FFFFFF' }}>
        <div>
          <Eyebrow color="#CBD0D9">SOLUTIONS DIRECTORY / 10</Eyebrow>
          <h2 style={{ color: '#FFFFFF' }}>
            Built for the<br />
            <span style={{ color: '#F47117' }}>complexity ahead.</span>
          </h2>
        </div>
        <div className="service-list" style={{ borderTop: '1px solid rgba(203,208,217,0.2)' }}>
          {services.map(([kicker, title, desc], index) => (
            <button
              key={title}
              className={serviceActive === index ? 'active' : ''}
              onMouseEnter={() => setServiceActive(index)}
              onFocus={() => setServiceActive(index)}
              style={{
                borderBottom: '1px solid rgba(203,208,217,0.2)',
                background: serviceActive === index ? 'rgba(244,113,23,0.06)' : 'transparent',
                borderColor: serviceActive === index ? '#F47117' : 'rgba(203,208,217,0.2)',
                color: '#FFFFFF',
              }}
            >
              <span style={{ color: serviceActive === index ? '#F47117' : '#CBD0D9' }}>{kicker}</span>
              <strong style={{ color: serviceActive === index ? '#F47117' : '#FFFFFF' }}>{title}</strong>
              <p style={{ color: '#CBD0D9' }}>{desc}</p>
              <ArrowUpRight size={18} style={{ color: serviceActive === index ? '#F47117' : '#CBD0D9' }} />
            </button>
          ))}
        </div>
      </section>

      {/* 11 HOW WE WORK */}
      <section className="how-we-work section-rule" id="how-we-work" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">ENGAGEMENT PROCESS / 11</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            FROM ASSESSMENT<br />
            <span style={{ color: '#F47117' }}>TO RESILIENCE.</span>
          </h2>
          <p className="body-copy" style={{ color: '#63667A' }}>
            A structured 6-phase engineering lifecycle for enterprise security modernization.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {howWeWorkSteps.map((step) => (
            <div
              key={step.num}
              className="hover-card-enterprise"
              style={{
                background: '#FFFFFF',
                border: '1px solid #D9DCE3',
                padding: '24px 20px',
                borderRadius: 6,
              }}
            >
              <span style={{ font: "600 12px 'DM Mono', monospace", color: '#F47117' }}>{step.num}</span>
              <h3 style={{ fontSize: 16, color: '#1D1E33', margin: '8px 0 10px', fontWeight: 700 }}>{step.title}</h3>
              <p style={{ margin: 0, fontSize: 12, color: '#63667A', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 08 INDUSTRIES */}
      <section className="industries section-rule" id="industries" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">SECTOR SPECIALIZATION / 08</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            SECURITY FOR<br />
            <span style={{ color: '#F47117' }}>COMPLEX ENVIRONMENTS.</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="hover-card-enterprise"
              style={{
                borderBottom: '1px solid #D9DCE3',
                padding: '18px 12px',
                display: 'grid',
                gridTemplateColumns: '260px 1fr',
                gap: 20,
                alignItems: 'center',
              }}
            >
              <strong style={{ fontSize: 16, color: '#1D1E33', letterSpacing: '-0.02em' }}>{ind.name}</strong>
              <p style={{ margin: 0, fontSize: 13, color: '#63667A', lineHeight: 1.5 }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 09 WHY INFRYS */}
      <section className="why-infrys section-rule" id="why-infrys" style={{ background: '#1D1E33', color: '#FFFFFF' }}>
        <div>
          <Eyebrow color="#CBD0D9">FOUNDATIONAL CAPABILITIES / 09</Eyebrow>
          <h2 style={{ color: '#FFFFFF' }}>
            ENGINEERED FOR<br />
            <span style={{ color: '#F47117' }}>WHAT&apos;S NEXT.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            ['SECURITY ENGINEERING', 'Deep technical assessment and offensive security testing built on rigorous vulnerability research.'],
            ['CRYPTOGRAPHIC EXPERTISE', 'Lattice-based PQC implementation and hybrid key encapsulation protocol design.'],
            ['POST-QUANTUM READINESS', 'Inventory discovery and Y2Q threat mitigation frameworks for enterprise CISOs.'],
            ['ENTERPRISE ARCHITECTURE', 'Decoupled crypto-agility abstraction for seamless hardware security module integration.'],
          ].map(([title, desc]) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(203,208,217,0.18)', padding: 24, borderRadius: 6 }}>
              <strong style={{ fontSize: 14, color: '#F47117', font: "600 11px 'DM Mono', monospace", display: 'block', marginBottom: 8 }}>
                {title}
              </strong>
              <p style={{ margin: 0, fontSize: 13, color: '#CBD0D9', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 14 CASE STUDIES / PROOF */}
      <section className="case-studies section-rule" id="case-studies" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">PROOF &amp; FRAMEWORKS / 14</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            SECURITY IN<br />
            <span style={{ color: '#F47117' }}>PRACTICE.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gap: 24 }}>
          {caseStudyPlaceholders.map((cs) => (
            <div
              key={cs.title}
              style={{
                background: '#FFFFFF',
                border: '1px solid #D9DCE3',
                padding: 28,
                borderRadius: 8,
              }}
            >
              <span style={{ font: "600 9px 'IBM Plex Mono', monospace", color: '#F47117', letterSpacing: '0.14em' }}>{cs.category}</span>
              <h3 style={{ fontSize: 18, color: '#1D1E33', margin: '8px 0 16px', fontWeight: 600 }}>{cs.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, fontStyle: 'normal' }}>
                <div>
                  <b style={{ font: "400 9px 'IBM Plex Mono', monospace", color: '#1D1E33', display: 'block' }}>CHALLENGE</b>
                  <p style={{ margin: '4px 0 0', fontSize: 12, color: '#63667A' }}>{cs.challenge}</p>
                </div>
                <div>
                  <b style={{ font: "400 9px 'IBM Plex Mono', monospace", color: '#F47117', display: 'block' }}>APPROACH</b>
                  <p style={{ margin: '4px 0 0', fontSize: 12, color: '#63667A' }}>{cs.approach}</p>
                </div>
                <div>
                  <b style={{ font: "400 9px 'IBM Plex Mono', monospace", color: '#1D1E33', display: 'block' }}>OUTCOME</b>
                  <p style={{ margin: '4px 0 0', fontSize: 12, color: '#63667A' }}>{cs.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 15 INSIGHTS & RESEARCH */}
      <section className="insights section-rule" id="insights" style={{ background: '#1D1E33', color: '#FFFFFF' }}>
        <div>
          <Eyebrow color="#CBD0D9">EDITORIAL RESEARCH / 15</Eyebrow>
          <h2 style={{ color: '#FFFFFF' }}>
            THE SIGNAL<br />
            <span style={{ color: '#F47117' }}>IS CHANGING.</span>
          </h2>
        </div>
        <div className="insight-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {insightsList.map((item) => (
            <div key={item.title} className="insight-listdiv hover-card-enterprise" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(203,208,217,0.15)', padding: 24, borderRadius: 6 }}>
              <span style={{ color: '#F47117', font: "600 10px 'IBM Plex Mono', monospace" }}>{item.tag}</span>
              <strong style={{ fontSize: 16, color: '#FFFFFF', display: 'block', margin: '10px 0 14px' }}>{item.title}</strong>
              <em style={{ color: '#CBD0D9', fontSize: 11, fontStyle: 'normal' }}>{item.date}</em>
            </div>
          ))}
        </div>
      </section>

      {/* 16 RESOURCES */}
      <section className="resources section-rule" id="resources" style={{ background: '#FEF3E5', color: '#1D1E33' }}>
        <div>
          <Eyebrow color="#1D1E33">PUBLICATIONS &amp; BRIEFS / 16</Eyebrow>
          <h2 style={{ color: '#1D1E33' }}>
            ENTERPRISE<br />
            <span style={{ color: '#F47117' }}>RESOURCES.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {resourcesList.map((res) => (
            <div
              key={res.title}
              className="hover-card-enterprise"
              style={{
                background: '#FFFFFF',
                border: '1px solid #D9DCE3',
                padding: 24,
                borderRadius: 6,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span style={{ font: "600 9px 'IBM Plex Mono', monospace", color: '#F47117', letterSpacing: '0.14em' }}>{res.type}</span>
                <h4 style={{ fontSize: 15, color: '#1D1E33', margin: '10px 0 0', fontWeight: 600, lineHeight: 1.5 }}>{res.title}</h4>
              </div>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: "500 10px 'IBM Plex Mono', monospace", color: '#F47117', marginTop: 20, textDecoration: 'none' }}>
                REQUEST PUBLICATION <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 17 FINAL CTA (FULL ORANGE SECTION) */}
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
        <Eyebrow color="#FFFFFF">THE INFRYS SIGNAL / 17</Eyebrow>
        <h2 style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.08em', lineHeight: 0.88, margin: '20px 0 24px', color: '#FFFFFF', fontWeight: 700 }}>
          READY FOR<br />
          <span style={{ color: '#1D1E33' }}>WHAT&apos;S NEXT?</span>
        </h2>
        <p style={{ fontSize: 18, color: '#FFFFFF', opacity: 0.95, maxWidth: 480, margin: '0 0 36px', lineHeight: 1.6 }}>
          Start your cryptographic transition today. Connect with our security engineers and post-quantum specialists.
        </p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <a
            className="button-primary"
            href="mailto:info@infrys.com"
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
            href="#pqc"
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
            EXPLORE PQC ROADMAP
          </a>
        </div>
      </section>

      {/* 18 FOOTER */}
      <Footer />
    </main>
  )
}
