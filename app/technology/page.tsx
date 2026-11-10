import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { TechnologyHero } from '@/components/sections/technology-hero'
import { TechnologyLandscape } from '@/components/sections/technology-landscape'
import { TechnologyDomains } from '@/components/sections/technology-domains'
import { TechnologyTransition } from '@/components/sections/technology-transition'
import { TechnologyArchitecture } from '@/components/sections/technology-architecture'
import { TechnologyPathways } from '@/components/sections/technology-pathways'
import { PageCTA } from '@/components/sections/page-cta'
import { EnterpriseFooter } from '@/components/sections/footer'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise Technology Platform | Cryptography, PQC & Crypto-Agility | Infrys',
  description:
    'Cryptographic engineering, post-quantum readiness (NIST FIPS 203 ML-KEM & FIPS 204 ML-DSA), decoupled crypto-agility, and 7-layer living security architecture.',
  alternates: {
    canonical: 'https://infrys.com/technology',
  },
  openGraph: {
    title: 'Enterprise Technology Platform | Infrys Security Technologies',
    description: 'Cryptographic engineering, post-quantum readiness, crypto-agility and 7-layer living security architecture.',
    url: 'https://infrys.com/technology',
    type: 'website',
  },
}

interface TechDomainSpec {
  id: string
  eyebrow: string
  titleLine1: string
  titleHighlight: string
  subtitle: string
  overviewHeading: string
  overviewCopy1: string
  overviewCopy2: string
  keyCapabilities: { title: string; desc: string }[]
  technicalSpecs: { label: string; value: string }[]
  standardsList?: { code: string; title: string; desc: string }[]
  hasInteractiveArchitecture?: boolean
  consultTopic: string
  consultLabel: string
  relatedSolutionHref: string
  relatedSolutionLabel: string
}

const TECH_DOMAINS_SPECS: TechDomainSpec[] = [
  {
    id: 'cryptography',
    eyebrow: 'INFRYS CRYPTOGRAPHY / DOMAIN 01',
    titleLine1: 'TRUST IN THE',
    titleHighlight: 'MATHEMATICS.',
    subtitle:
      'The cryptographic foundations that protect identities, communications, data, and digital transactions across enterprise environments.',
    overviewHeading: 'FOUNDATIONAL MATHEMATICAL SECURITY.',
    overviewCopy1:
      'Every modern enterprise application relies on mathematical assumptions beneath every TLS handshake, API authentication token, and database envelope encryption.',
    overviewCopy2:
      'Infrys cryptographic engineering brings mathematical clarity to complex environments—discovering legacy asymmetric dependencies, establishing split-knowledge key wrapping, and hardening PKI certificate authorities against cryptanalytic threats.',
    keyCapabilities: [
      {
        title: 'Cryptographic Inventory',
        desc: 'Automated scanning of application codebases, databases, and HSM hardware to discover algorithm dependencies.',
      },
      {
        title: 'Symmetric Key Wrapping',
        desc: 'High-speed envelope encryption utilizing AES-256-GCM and HMAC authentication.',
      },
      {
        title: 'PKI & Certificate Management',
        desc: 'Enterprise Public Key Infrastructure architecture supporting automated key lifecycle rotation.',
      },
      {
        title: 'Dependency Mapping',
        desc: 'Graph-based visualization mapping cryptographic primitives across multi-cloud services.',
      },
    ],
    technicalSpecs: [
      { label: 'SYMMETRIC ENCRYPTION', value: 'AES-256-GCM / ChaCha20-Poly1305' },
      { label: 'HASH FUNCTIONS', value: 'SHA-384 / SHA-512 / BLAKE2b' },
      { label: 'KEY WRAPPING', value: 'NIST SP 800-38F (KW / KWP)' },
      { label: 'PKI ARCHITECTURE', value: 'X.509 v3 / EST / ACME Protocol' },
    ],
    standardsList: [
      {
        code: 'NIST SP 800-57',
        title: 'Recommendation for Key Management',
        desc: 'Guidelines for key generation, storage, wrapping, and destruction across enterprise lifecycles.',
      },
      {
        code: 'FIPS 140-3',
        title: 'Security Requirements for Cryptographic Modules',
        desc: 'Validation requirements for hardware security modules (HSM) and software cryptographic primitives.',
      },
      {
        code: 'RFC 5280',
        title: 'Internet X.509 PKI Profile',
        desc: 'Standardized certificate and CRL profiles securing enterprise transport layer communication.',
      },
    ],
    consultTopic: 'Post-Quantum Cryptography (PQC) Migration',
    consultLabel: 'CONSULT ON CRYPTOGRAPHY',
    relatedSolutionHref: '/solutions#cryptography-pqc',
    relatedSolutionLabel: 'VIEW CRYPTOGRAPHY & PQC SOLUTION',
  },
  {
    id: 'post-quantum-cryptography',
    eyebrow: 'INFRYS PQC TECHNOLOGY / DOMAIN 02',
    titleLine1: 'PREPARE BEFORE THE',
    titleHighlight: 'THREAT ARRIVES.',
    subtitle:
      'Assess cryptographic exposure, defend against Harvest-Now-Decrypt-Later (HNDL) threats, and migrate enterprise systems to NIST-standardized lattice algorithms.',
    overviewHeading: 'QUANTUM-RESISTANT LATTICE ENCRYPTION.',
    overviewCopy1:
      'Adversaries actively harvest encrypted enterprise data today to decrypt it once Cryptanalytically Relevant Quantum Computers (CRQCs) become operational. High-value transactions, intellectual property, and government records with multi-decade longevity are immediately vulnerable.',
    overviewCopy2:
      'Infrys implements standardized NIST FIPS post-quantum algorithms—deploying ML-KEM (formerly CRYSTALS-Kyber) for key encapsulation and ML-DSA for digital signatures in hybrid dual-key configurations alongside existing RSA/ECC infrastructure.',
    keyCapabilities: [
      {
        title: 'ML-KEM (FIPS 203) Key Encapsulation',
        desc: 'Lattice-based key exchange mechanism safeguarding data confidentiality against quantum cryptanalysis.',
      },
      {
        title: 'ML-DSA (FIPS 204) Digital Signatures',
        desc: 'Primary lattice-based digital signature algorithm providing quantum-resistant authentication.',
      },
      {
        title: 'SLH-DSA (FIPS 205) Hash-Based Signatures',
        desc: 'Stateless hash-based signature scheme offering conservative fallback protection.',
      },
      {
        title: 'Hybrid Dual-Key Deployment',
        desc: 'Parallel execution of classical ECDH and lattice ML-KEM to maintain regulatory compliance during migration.',
      },
    ],
    technicalSpecs: [
      { label: 'KEY ENCAPSULATION', value: 'ML-KEM-512 / 768 / 1024 (FIPS 203)' },
      { label: 'DIGITAL SIGNATURES', value: 'ML-DSA-44 / 65 / 87 (FIPS 204)' },
      { label: 'HASH SIGNATURES', value: 'SLH-DSA-SHA2-128f / 256f (FIPS 205)' },
      { label: 'SECURITY CATEGORIES', value: 'NIST Security Levels 1, 3, & 5' },
    ],
    standardsList: [
      {
        code: 'NIST FIPS 203',
        title: 'Module-Lattice-Based Key-Encapsulation Mechanism',
        desc: 'Standardized ML-KEM algorithm (formerly CRYSTALS-Kyber) for quantum-resistant secret key exchange.',
      },
      {
        code: 'NIST FIPS 204',
        title: 'Module-Lattice-Based Digital Signature Standard',
        desc: 'Standardized ML-DSA algorithm (formerly CRYSTALS-Dilithium) for quantum-resistant identity signatures.',
      },
      {
        code: 'NIST FIPS 205',
        title: 'Stateless Hash-Based Digital Signature Standard',
        desc: 'Standardized SLH-DSA algorithm (formerly SPHINCS+) providing hash-backed signature resilience.',
      },
    ],
    consultTopic: 'Post-Quantum Cryptography (PQC) Migration',
    consultLabel: 'CONSULT ON PQC MIGRATION',
    relatedSolutionHref: '/solutions#cryptography-pqc',
    relatedSolutionLabel: 'VIEW PQC MIGRATION SOLUTION',
  },
  {
    id: 'crypto-agility',
    eyebrow: 'INFRYS CRYPTO-AGILITY / DOMAIN 03',
    titleLine1: 'DECOUPLE CRYPTOGRAPHY',
    titleHighlight: 'FROM APPLICATION CODE.',
    subtitle:
      'Design enterprise infrastructure that can adapt algorithms, key lengths, and hardware security providers without rebuilding the entire application stack.',
    overviewHeading: 'HOT-SWAPPABLE ALGORITHM ABSTRACTION.',
    overviewCopy1:
      'Tightly coupling cryptographic calls directly into application code creates fragile enterprise systems. When a cryptographic algorithm is deprecated or a vulnerability is discovered, modifying hundreds of microservices requires massive code refactoring.',
    overviewCopy2:
      'Infrys Crypto-Agility architecture introduces a decoupled cryptographic broker layer. Applications invoke high-level security primitives while the underlying cryptographic provider, algorithm, key size, and HSM hardware can be hot-swapped seamlessly without downtime.',
    keyCapabilities: [
      {
        title: 'Cryptographic Broker Layer',
        desc: 'Abstracted API middleware isolating application logic from underlying algorithm implementations.',
      },
      {
        title: 'Zero-Downtime Hot-Swapping',
        desc: 'Dynamically switch encryption algorithms or key lengths in production without restarting microservices.',
      },
      {
        title: 'Multi-Provider HSM Abstraction',
        desc: 'Unified cryptographic interface across cloud HSMs (AWS CloudHSM, Azure Key Vault, PKCS#11 hardware).',
      },
      {
        title: 'Algorithm Decay Telemetry',
        desc: 'Real-time monitoring signaling deprecation timelines and automated algorithm migration triggers.',
      },
    ],
    technicalSpecs: [
      { label: 'ABSTRACTION PATTERN', value: 'Cryptographic Broker & Proxy Wrapper' },
      { label: 'HARDWARE INTERFACE', value: 'PKCS#11 v3.0 / KMIP 2.1 / REST API' },
      { label: 'PROVIDER ORCHESTRATION', value: 'Hot-Swappable Dynamic Provider Switching' },
      { label: 'COMPATIBILITY', value: 'Cloud, On-Premises, & Hybrid HSMs' },
    ],
    standardsList: [
      {
        code: 'NIST SP 800-131A',
        title: 'Transitions: Recommendation for Transitioning Cryptographic Algorithms',
        desc: 'Framework for managing algorithm deprecation and phased cryptographic replacement timelines.',
      },
      {
        code: 'OASIS KMIP 2.1',
        title: 'Key Management Interoperability Protocol',
        desc: 'Standardized communication protocol connecting enterprise applications to centralized key management servers.',
      },
      {
        code: 'PKCS#11 v3.0',
        title: 'Cryptographic Token Interface Standard',
        desc: 'Unified interface specification enabling application independence from hardware security modules.',
      },
    ],
    consultTopic: 'Crypto-Agility & Security Architecture',
    consultLabel: 'CONSULT ON CRYPTO-AGILITY',
    relatedSolutionHref: '/solutions#cryptography-pqc',
    relatedSolutionLabel: 'VIEW CRYPTO-AGILITY SOLUTION',
  },
  {
    id: 'security-architecture',
    eyebrow: 'INFRYS SECURITY ARCHITECTURE / DOMAIN 04',
    titleLine1: 'ENGINEER SECURITY AS A',
    titleHighlight: 'LIVING SYSTEM.',
    subtitle:
      'Connect applications, infrastructure, identity, cryptography, and operational controls into resilient, evolutionary 7-layer enterprise architectures.',
    overviewHeading: '7-LAYER INTEGRATED DEFENSE SYSTEM.',
    overviewCopy1:
      'Enterprise security fails when components operate in isolation. A vulnerability in identity management compromises database encryption, while static key management undermines modern application security.',
    overviewCopy2:
      'Infrys Security Architecture treats defense as a living system. We design multi-layered enterprise frameworks where cryptographic controls, zero-trust identity networks, post-quantum resilience, and continuous telemetry reinforce each other across all seven infrastructure tiers.',
    keyCapabilities: [
      {
        title: 'Zero-Trust Network Architecture',
        desc: 'Micro-segmentation and continuous cryptographic identity verification across all network perimeters.',
      },
      {
        title: 'Envelope Data Protection',
        desc: 'Multi-layer database and object storage encryption backed by dynamic key wrapping.',
      },
      {
        title: 'Identity & Access PKI',
        desc: 'Robust public key infrastructure issuing hardware-backed credentials for services and devices.',
      },
      {
        title: 'Continuous Security Telemetry',
        desc: 'Real-time telemetry and SIEM integration monitoring cryptographic integrity and threat anomalies.',
      },
    ],
    technicalSpecs: [
      { label: 'ARCHITECTURE MODEL', value: '7-Layer Living Defense System' },
      { label: 'IDENTITY VERIFICATION', value: 'mTLS / SPIFFE / OAuth 2.0 PKCE' },
      { label: 'DATA PROTECTION', value: 'Multi-Tenant Envelope Encryption' },
      { label: 'COMPLIANCE ALIGNMENT', value: 'NIST CSF 2.0 / ISO 27001:2022' },
    ],
    hasInteractiveArchitecture: true,
    consultTopic: 'Crypto-Agility & Security Architecture',
    consultLabel: 'CONSULT ON SECURITY ARCHITECTURE',
    relatedSolutionHref: '/solutions#managed-security',
    relatedSolutionLabel: 'VIEW MANAGED SECURITY & SOC',
  },
]

export default function TechnologyPage() {
  return (
    <main className="site-shell" style={{ background: '#1D1E33', color: '#FFFFFF', minHeight: '100vh' }}>
      {/* 00 HEADER */}
      <EnterpriseHeader />

      {/* 01 TECHNOLOGY HERO (NAVY #1D1E33) */}
      <TechnologyHero />

      {/* 02 TECHNOLOGY LANDSCAPE (CREAM #FEF3E5) */}
      <TechnologyLandscape />

      {/* 03 FOUR TECHNOLOGY DOMAINS DIRECTORY (NAVY #1D1E33) */}
      <TechnologyDomains />

      {/* 04 CRYPTOGRAPHIC TRANSITION INTERACTIVE STEPPER (CREAM #FEF3E5) */}
      <TechnologyTransition />

      {/* 04B WHY THE TRANSITION MATTERS — HNDL THREAT MODEL (NAVY #1D1E33) */}
      <section
        id="why-pqc"
        style={{
          scrollMarginTop: 82,
          background: '#1D1E33',
          color: '#FFFFFF',
          padding: '95px 7vw',
          borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(28px, 5vw, 56px)', alignItems: 'center' }}>
            <div>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  color: '#CBD0D9',
                  letterSpacing: '0.14em',
                  marginBottom: 16,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', borderRadius: '50%' }} />
                WHY THE TRANSITION MATTERS / HNDL EXPOSURE
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(34px, 4.4vw, 54px)',
                  fontWeight: 700,
                  letterSpacing: '-0.05em',
                  lineHeight: 1.06,
                  margin: '0 0 20px',
                  color: '#FFFFFF',
                }}
              >
                THE CRYPTOGRAPHIC<br />
                <span style={{ color: '#F47117' }}>LANDSCAPE IS CHANGING.</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#CBD0D9', lineHeight: 1.7, margin: '0 0 24px' }}>
                Harvest-Now-Decrypt-Later (HNDL) adversary operations mean confidential enterprise records intercepted today remain at risk of future quantum decryption.
              </p>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, letterSpacing: '0.12em' }}>
                THE MIGRATION STARTS BEFORE THE THREAT ARRIVES.
              </span>
            </div>

            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { num: '01', stage: 'HARVEST', desc: 'Adversaries intercept and collect encrypted enterprise traffic and data archives today.' },
                { num: '02', stage: 'STORE', desc: 'Financial, healthcare, intellectual property, and state records retain value for decades.' },
                { num: '03', stage: 'DECRYPT', desc: 'Future Cryptanalytically Relevant Quantum Computers (CRQCs) break legacy asymmetric keys.' },
              ].map((item) => (
                <div
                  key={item.stage}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(203, 208, 217, 0.18)',
                    borderLeft: '3px solid #F47117',
                    padding: '22px 24px',
                    borderRadius: 6,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600 }}>{item.num}</span>
                    <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: '#FFFFFF', fontWeight: 700 }}>{item.stage}</strong>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05–08 CONSOLIDATED DEEP-DIVE SECTIONS FOR ALL FOUR TECHNOLOGY DOMAINS */}
      {TECH_DOMAINS_SPECS.map((spec, idx) => {
        const isCream = idx % 2 === 0
        return (
          <section
            key={spec.id}
            id={spec.id}
            style={{
              scrollMarginTop: 82,
              background: isCream ? '#FEF3E5' : '#1D1E33',
              color: isCream ? '#1D1E33' : '#FFFFFF',
              padding: '100px 7vw',
              borderBottom: isCream ? '1px solid rgba(29, 30, 51, 0.12)' : '1px solid rgba(203, 208, 217, 0.15)',
            }}
          >
            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
              {/* DOMAIN HEADER & OVERVIEW */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(28px, 5vw, 60px)', marginBottom: 60 }}>
                <div>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 14 }}>
                    {spec.eyebrow}
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(34px, 4.4vw, 56px)',
                      fontWeight: 700,
                      letterSpacing: '-0.05em',
                      lineHeight: 1.05,
                      margin: '0 0 20px',
                      color: isCream ? '#1D1E33' : '#FFFFFF',
                    }}
                  >
                    {spec.titleLine1}<br />
                    <span style={{ color: '#F47117' }}>{spec.titleHighlight}</span>
                  </h2>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: isCream ? '#4A4D61' : '#CBD0D9', lineHeight: 1.65, margin: 0 }}>
                    {spec.subtitle}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.12em', fontWeight: 600 }}>
                    {spec.overviewHeading}
                  </span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: isCream ? '#63667A' : '#CBD0D9', lineHeight: 1.75, margin: 0 }}>
                    {spec.overviewCopy1}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: isCream ? '#63667A' : '#CBD0D9', lineHeight: 1.75, margin: 0 }}>
                    {spec.overviewCopy2}
                  </p>
                </div>
              </div>

              {/* ENGINEERING CAPABILITIES */}
              <div style={{ marginBottom: 48 }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 20 }}>
                  ENGINEERING CAPABILITIES · {spec.id.toUpperCase()}
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
                  {spec.keyCapabilities.map((cap) => (
                    <div
                      key={cap.title}
                      style={{
                        background: isCream ? '#FFFFFF' : 'rgba(255, 255, 255, 0.03)',
                        border: isCream ? '1px solid #D9DCE3' : '1px solid rgba(203, 208, 217, 0.18)',
                        padding: '28px 24px',
                        borderRadius: 6,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <CheckCircle2 size={18} style={{ color: '#F47117', flexShrink: 0 }} />
                        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: isCream ? '#1D1E33' : '#FFFFFF', margin: 0, fontWeight: 700 }}>
                          {cap.title}
                        </h3>
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: isCream ? '#63667A' : '#CBD0D9', lineHeight: 1.6, margin: 0 }}>
                        {cap.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECHNICAL MATRIX & SPECIFICATIONS */}
              <div
                style={{
                  background: isCream ? '#1D1E33' : 'rgba(244, 113, 23, 0.05)',
                  border: '1px solid rgba(244, 113, 23, 0.35)',
                  borderRadius: 8,
                  padding: '28px 32px',
                  marginBottom: 48,
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', letterSpacing: '0.14em', display: 'block', marginBottom: 18, fontWeight: 600 }}>
                  TECHNICAL MATRIX &amp; SPECIFICATIONS
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
                  {spec.technicalSpecs.map((s) => (
                    <div key={s.label}>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#CBD0D9', display: 'block', marginBottom: 4 }}>
                        {s.label}
                      </span>
                      <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: '#FEF3E5', fontWeight: 600 }}>
                        {s.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* STANDARDS & FRAMEWORKS */}
              {spec.standardsList && (
                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600 }}>
                      STANDARDS &amp; COMPLIANCE FRAMEWORKS
                    </span>
                    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                      <a
                        href={spec.relatedSolutionHref}
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 11,
                          color: isCream ? '#1D1E33' : '#CBD0D9',
                          fontWeight: 600,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        {spec.relatedSolutionLabel} <ArrowUpRight size={14} />
                      </a>
                      <a
                        href={`/contact?topic=${encodeURIComponent(spec.consultTopic)}`}
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
                        {spec.consultLabel} <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                    {spec.standardsList.map((std) => (
                      <div
                        key={std.code}
                        style={{
                          background: isCream ? '#FFFFFF' : 'rgba(255, 255, 255, 0.03)',
                          border: isCream ? '1px solid #D9DCE3' : '1px solid rgba(203, 208, 217, 0.18)',
                          padding: '26px 24px',
                          borderRadius: 6,
                        }}
                      >
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                          {std.code}
                        </span>
                        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: isCream ? '#1D1E33' : '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>
                          {std.title}
                        </h4>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: isCream ? '#63667A' : '#CBD0D9', lineHeight: 1.6, margin: 0 }}>
                          {std.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CANONICAL SINGLE INTERACTIVE 7-LAYER ARCHITECTURE INSPECTOR (INSIDE DOMAIN 04 #security-architecture) */}
              {spec.hasInteractiveArchitecture && (
                <div>
                  <TechnologyArchitecture />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 24, flexWrap: 'wrap', marginTop: 28 }}>
                    <a
                      href={spec.relatedSolutionHref}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11,
                        color: '#CBD0D9',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      {spec.relatedSolutionLabel} <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={`/contact?topic=${encodeURIComponent(spec.consultTopic)}`}
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
                      {spec.consultLabel} <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>
        )
      })}

      {/* 09 PUT TECHNOLOGY INTO PRACTICE — FORWARD CROSS-NAVIGATION (CREAM #FEF3E5) */}
      <TechnologyPathways />

      {/* 10 FINAL CTA (ORANGE #F47117) */}
      <PageCTA
        eyebrow="INFRYS TECHNOLOGY SIGNAL / 10"
        headingLine1="READY TO BUILD FOR"
        headingLine2="WHAT'S NEXT?"
        supportingText="Start a conversation with Infrys security engineers and post-quantum specialists."
        primaryCtaText="TALK TO AN EXPERT"
        primaryCtaHref="/contact"
        secondaryCtaText="EXPLORE SOLUTIONS"
        secondaryCtaHref="/solutions"
      />

      {/* 11 FOOTER */}
      <EnterpriseFooter />
    </main>
  )
}
