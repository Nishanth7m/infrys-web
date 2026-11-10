import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { PageCTA } from '@/components/sections/page-cta'
import { EnterpriseFooter } from '@/components/sections/footer'
import { ArrowUpRight, ChevronRight, FileText, BookOpen, Shield, Layers, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insights, PQC Research & Security Frameworks | Infrys Security Technologies',
  description:
    'Technical research briefs, NIST FIPS 203/204/205 post-quantum migration guides, crypto-agile reference architectures, and enterprise security publications.',
  alternates: {
    canonical: 'https://infrys.com/insights',
  },
  openGraph: {
    title: 'Insights & Research | Infrys Security Technologies',
    description:
      'Peer-informed technical briefs on post-quantum cryptography, Harvest-Now-Decrypt-Later (HNDL) mitigation, and crypto-agile architecture.',
    url: 'https://infrys.com/insights',
    type: 'website',
  },
}

const EDITORIAL_RESEARCH = [
  {
    id: 'fips-203-204-readiness',
    tag: 'RESEARCH BRIEF',
    category: 'TECHNICAL RESEARCH',
    title: 'NIST FIPS 203 & 204 Migration Readiness Assessment',
    summary:
      'Architectural analysis of Module-Lattice-Based Key-Encapsulation (ML-KEM) and Digital Signature (ML-DSA) parameter sets, key sizes, and hybrid TLS handshake considerations across enterprise gateways.',
    relatedHref: '/technology#post-quantum-cryptography',
    relatedLabel: 'EXPLORE PQC STANDARDS',
  },
  {
    id: 'hndl-storage-mitigation',
    tag: 'WHITE PAPER',
    category: 'PQC ANALYSIS',
    title: 'Mitigating Harvest-Now-Decrypt-Later (HNDL) Risks in Data Storage',
    summary:
      'Evaluating data longevity exposure across financial ledgers, healthcare archives, and sovereign databases, with hybrid envelope encryption strategies to protect long-lived records.',
    relatedHref: '/technology#why-pqc',
    relatedLabel: 'EXPLORE HNDL RISK',
  },
  {
    id: 'crypto-agile-abstraction',
    tag: 'ENGINEERING GUIDE',
    category: 'SECURITY ARCHITECTURE',
    title: 'Designing Decoupled Crypto-Agile Abstraction Layers',
    summary:
      'How to isolate application microservices from underlying cryptographic primitives using broker middleware, PKCS#11 v3.0, and KMIP 2.1 orchestration.',
    relatedHref: '/technology#crypto-agility',
    relatedLabel: 'EXPLORE CRYPTO-AGILITY',
  },
  {
    id: 'pqc-compliance-frameworks',
    tag: 'REGULATORY ANALYSIS',
    category: 'GRC FRAMEWORK',
    title: 'Post-Quantum Compliance Frameworks for Global Regulators',
    summary:
      'Mapping cryptographic bill of materials (CBOM) discovery and NIST SP 800-131A algorithm transition schedules into ISO 27001:2022 and NIST CSF 2.0 governance programs.',
    relatedHref: '/solutions#grc',
    relatedLabel: 'EXPLORE GRC SOLUTION',
  },
]

const PQC_MIGRATION_GUIDES = [
  {
    phase: 'GUIDE 01',
    title: 'Cryptographic Bill of Materials (CBOM) & Dependency Discovery',
    desc: 'Establish visibility across source repositories, container images, TLS termination proxies, X.509 certificate authorities, and hardware security modules.',
    href: '/technology#cryptography',
    cta: 'EXPLORE CRYPTOGRAPHY INVENTORY',
  },
  {
    phase: 'GUIDE 02',
    title: 'Data Longevity & HNDL Risk Prioritization Matrix',
    desc: 'Classify information assets by confidentiality retention window and prioritize external-facing asymmetric key exchange channels for immediate hybrid remediation.',
    href: '/technology#why-pqc',
    cta: 'EXPLORE WHY PQC & HNDL',
  },
  {
    phase: 'GUIDE 03',
    title: 'Hybrid Dual-Key TLS & Envelope Encryption Deployment',
    desc: 'Combine classical ECDH/ECDSA with NIST ML-KEM (FIPS 203) and ML-DSA (FIPS 204) to maintain existing regulatory compliance while adding quantum resistance.',
    href: '/technology#post-quantum-cryptography',
    cta: 'VIEW PQC SPECIFICATIONS',
  },
  {
    phase: 'GUIDE 04',
    title: 'Crypto-Agile Broker & HSM Firmware Modernization',
    desc: 'Replace hardcoded cryptographic API calls with policy-driven abstraction brokers capable of switching providers and parameter sets without application rewrites.',
    href: '/technology#crypto-agility',
    cta: 'EXPLORE CRYPTO-AGILITY',
  },
]

const REFERENCE_FRAMEWORKS = [
  {
    id: 'cryptography',
    category: 'SECURITY FRAMEWORKS // CRYPTOGRAPHY & PQC',
    title: 'Post-Quantum Migration Approach for High-Frequency Transactional Systems',
    challenge:
      'High-value transactional data with multi-decade confidentiality requirements exposed to Harvest-Now-Decrypt-Later (HNDL) interception across external TLS gateways.',
    approach:
      'Phased hybrid ML-KEM-768 key encapsulation deployment alongside existing ECDH TLS termination proxies and split-knowledge symmetric key wrapping.',
    outcome:
      'Quantum-resistant key exchange architecture engineered to preserve transport throughput and regulatory compliance.',
    techHref: '/technology#post-quantum-cryptography',
    techLabel: 'VIEW PQC PLATFORM',
    solutionHref: '/solutions#cryptography-pqc',
    solutionLabel: 'VIEW PQC SOLUTION',
  },
  {
    id: 'security-architecture',
    category: 'SELECTED SECURITY APPROACHES // CRYPTO-AGILITY',
    title: 'Crypto-Agile Abstraction & Broker Pattern for Enterprise Services',
    challenge:
      'Tightly coupled application code directly invoking legacy RSA-2048 and ECDSA primitives across distributed cloud microservices.',
    approach:
      'Abstracted cryptographic broker layer decoupling key lifecycle management and algorithm selection from application business logic.',
    outcome:
      'Resilient 7-layer architecture pattern supporting policy-driven algorithm updates and multi-provider HSM orchestration.',
    techHref: '/technology#security-architecture',
    techLabel: 'INSPECT 7-LAYER ARCHITECTURE',
    solutionHref: '/technology#crypto-agility',
    solutionLabel: 'EXPLORE CRYPTO-AGILITY',
  },
]

const GRC_STANDARDS_BRIEFS = [
  {
    code: 'NIST CSF 2.0 // GOVERN & PROTECT',
    title: 'Enterprise Cryptographic Governance & Risk Oversight',
    desc: 'Aligning board-level cybersecurity risk management with continuous cryptographic asset inventory, policy enforcement, and supply chain key assurance.',
  },
  {
    code: 'ISO/IEC 27001:2022 // ANNEX A.8.24',
    title: 'Use of Cryptography & Key Lifecycle Controls',
    desc: 'Auditable policy frameworks governing key generation, split-knowledge custody, rotation schedules, archival destruction, and HSM access control.',
  },
  {
    code: 'PCI-DSS 4.0 & FINANCIAL MANDATES',
    title: 'Strong Cryptography for Payment & Ledger Environments',
    desc: 'Transitioning payment switches, TLS cipher suites, and interbank key-wrapping hierarchies away from deprecated algorithms toward quantum-resilient controls.',
  },
  {
    code: 'CBOM & NIST SP 800-131A',
    title: 'Cryptographic Bill of Materials & Transition Readiness',
    desc: 'Establishing machine-readable cryptographic dependency inventories to satisfy emerging federal and sector-specific post-quantum transition audits.',
  },
]

const ENTERPRISE_RESOURCES = [
  {
    type: 'WHITE PAPER · BRIEFING AVAILABLE',
    title: 'The Executive Guide to Post-Quantum Cryptography Migration',
    topic: 'Executive Guide to PQC Migration',
  },
  {
    type: 'TECHNICAL BRIEF · BRIEFING AVAILABLE',
    title: 'Lattice-Based Encryption vs Classical RSA: Architectural Tradeoffs & Sizing',
    topic: 'Lattice vs RSA Technical Brief',
  },
  {
    type: 'ENGINEERING GUIDE · BRIEFING AVAILABLE',
    title: 'Cryptographic Inventory & Dependency Discovery Framework',
    topic: 'Cryptographic Inventory Framework',
  },
  {
    type: 'ARCHITECTURAL BRIEF · BRIEFING AVAILABLE',
    title: 'Preparing Your Hardware Security Modules (HSMs) for PQC',
    topic: 'HSM PQC Readiness Brief',
  },
]

export default function InsightsPage() {
  return (
    <main className="site-shell" style={{ background: '#1D1E33', color: '#FFFFFF', minHeight: '100vh' }}>
      <EnterpriseHeader />

      {/* 01 HERO (NAVY #1D1E33) */}
      <section style={{ background: '#1D1E33', color: '#FFFFFF', padding: '100px 7vw 90px', borderBottom: '1px solid rgba(203, 208, 217, 0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#CBD0D9', letterSpacing: '0.14em', marginBottom: 16, fontWeight: 600 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', marginRight: 8, borderRadius: '50%' }} />
            INSIGHTS &amp; RESEARCH / 01
          </p>

          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 1.05, margin: '0 0 24px', color: '#FFFFFF' }}>
            THE SIGNAL<br />
            IS <span style={{ color: '#F47117' }}>CHANGING.</span>
          </h1>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#CBD0D9', lineHeight: 1.65, maxWidth: 640, margin: '0 0 36px' }}>
            Technical research, post-quantum migration roadmaps, reference security architectures, and regulatory compliance briefings from Infrys security engineers.
          </p>

          {/* TOPIC FILTER ANCHOR BAR */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              { label: '01 / EDITORIAL RESEARCH', href: '#research', icon: FileText },
              { label: '02 / PQC MIGRATION GUIDES', href: '#pqc', icon: Shield },
              { label: '03 / SECURITY FRAMEWORKS', href: '#frameworks', icon: Layers },
              { label: '04 / GRC & STANDARDS', href: '#grc', icon: Scale },
              { label: '05 / PUBLICATIONS & BRIEFS', href: '#resources', icon: BookOpen },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <a
                  key={tab.href}
                  href={tab.href}
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#FFFFFF',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(203, 208, 217, 0.22)',
                    padding: '12px 18px',
                    borderRadius: 4,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Icon size={14} style={{ color: '#F47117' }} />
                  {tab.label}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* 02 EDITORIAL RESEARCH (#research) */}
      <section
        id="research"
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
              EDITORIAL RESEARCH / 02
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.06, margin: 0, color: '#FFFFFF' }}>
              TECHNICAL RESEARCH &amp; <span style={{ color: '#F47117' }}>ANALYSIS.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {EDITORIAL_RESEARCH.map((item) => (
              <div
                key={item.id}
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', fontWeight: 600, letterSpacing: '0.12em' }}>
                      {item.tag}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#CBD0D9' }}>
                      {item.category}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#FFFFFF', fontWeight: 700, margin: '0 0 12px', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.65, margin: 0 }}>
                    {item.summary}
                  </p>
                </div>

                <div style={{ marginTop: 28, paddingTop: 18, borderTop: '1px solid rgba(203, 208, 217, 0.15)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                  <a
                    href={item.relatedHref}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 10,
                      color: '#CBD0D9',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                    }}
                  >
                    {item.relatedLabel} <ArrowUpRight size={13} style={{ color: '#F47117' }} />
                  </a>
                  <a
                    href={`/contact?topic=${encodeURIComponent(item.title)}`}
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
                    REQUEST BRIEFING <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 PQC MIGRATION GUIDES (#pqc) */}
      <section
        id="pqc"
        style={{
          scrollMarginTop: 82,
          background: '#FEF3E5',
          color: '#1D1E33',
          padding: '95px 7vw',
          borderBottom: '1px solid rgba(29, 30, 51, 0.12)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              PQC MIGRATION GUIDES / 03
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: '0 0 16px', color: '#1D1E33' }}>
              ENTERPRISE PQC <span style={{ color: '#F47117' }}>MIGRATION ROADMAP.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#63667A', maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
              Actionable four-stage engineering guidance for CISOs and security architects transitioning from classical RSA/ECC to NIST-standardized post-quantum cryptography.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {PQC_MIGRATION_GUIDES.map((guide) => (
              <div
                key={guide.phase}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #D9DCE3',
                  padding: '30px 26px',
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 10 }}>
                    {guide.phase}
                  </span>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, color: '#1D1E33', fontWeight: 700, margin: '0 0 12px', lineHeight: 1.35 }}>
                    {guide.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#63667A', lineHeight: 1.65, margin: 0 }}>
                    {guide.desc}
                  </p>
                </div>
                <a
                  href={guide.href}
                  style={{
                    marginTop: 24,
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
                  {guide.cta} <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 SECURITY IN PRACTICE — REFERENCE FRAMEWORKS (#frameworks, #cryptography, #security-architecture) */}
      <section
        id="frameworks"
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
              PROOF &amp; REFERENCE FRAMEWORKS / 04
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: 0, color: '#FFFFFF' }}>
              SECURITY IN <span style={{ color: '#F47117' }}>PRACTICE.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gap: 28 }}>
            {REFERENCE_FRAMEWORKS.map((cs) => (
              <div
                key={cs.id}
                id={cs.id}
                style={{
                  scrollMarginTop: 96,
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(203, 208, 217, 0.18)',
                  padding: '36px 32px',
                  borderRadius: 8,
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600 }}>
                  {cs.category}
                </span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, color: '#FFFFFF', margin: '10px 0 24px', fontWeight: 700 }}>
                  {cs.title}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
                  <div style={{ borderLeft: '2px solid rgba(203, 208, 217, 0.3)', paddingLeft: 16 }}>
                    <b style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#CBD0D9', display: 'block', letterSpacing: '0.12em' }}>
                      ARCHITECTURAL CHALLENGE
                    </b>
                    <p style={{ fontFamily: "'Inter', sans-serif", margin: '8px 0 0', fontSize: 13, color: '#CBD0D9', lineHeight: 1.65 }}>
                      {cs.challenge}
                    </p>
                  </div>
                  <div style={{ borderLeft: '2px solid #F47117', paddingLeft: 16 }}>
                    <b style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', display: 'block', letterSpacing: '0.12em' }}>
                      ENGINEERING APPROACH
                    </b>
                    <p style={{ fontFamily: "'Inter', sans-serif", margin: '8px 0 0', fontSize: 13, color: '#CBD0D9', lineHeight: 1.65 }}>
                      {cs.approach}
                    </p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(254, 243, 229, 0.5)', paddingLeft: 16 }}>
                    <b style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#FEF3E5', display: 'block', letterSpacing: '0.12em' }}>
                      TARGET OUTCOME
                    </b>
                    <p style={{ fontFamily: "'Inter', sans-serif", margin: '8px 0 0', fontSize: 13, color: '#CBD0D9', lineHeight: 1.65 }}>
                      {cs.outcome}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid rgba(203, 208, 217, 0.15)', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
                  <a
                    href={cs.techHref}
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
                    {cs.techLabel} <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={cs.solutionHref}
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
                    {cs.solutionLabel} <ArrowUpRight size={14} style={{ color: '#F47117' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 GRC & STANDARDS BRIEFINGS (#grc) */}
      <section
        id="grc"
        style={{
          scrollMarginTop: 82,
          background: '#FEF3E5',
          color: '#1D1E33',
          padding: '95px 7vw',
          borderBottom: '1px solid rgba(29, 30, 51, 0.12)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 44 }}>
            <div>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
                GRC &amp; STANDARDS ALIGNMENT / 05
              </span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: 0, color: '#1D1E33' }}>
                STANDARDS &amp; <span style={{ color: '#F47117' }}>COMPLIANCE BRIEFS.</span>
              </h2>
            </div>
            <a
              href="/solutions#grc"
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
              EXPLORE GRC SOLUTION <ArrowUpRight size={14} />
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {GRC_STANDARDS_BRIEFS.map((item) => (
              <div
                key={item.code}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #D9DCE3',
                  padding: '28px 24px',
                  borderRadius: 6,
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                  {item.code}
                </span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, color: '#1D1E33', margin: '0 0 10px', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#63667A', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 ENTERPRISE PUBLICATIONS & BRIEFS (#resources) */}
      <section
        id="resources"
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
              PUBLICATIONS &amp; BRIEFS / 06
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: 0, color: '#FFFFFF' }}>
              ENTERPRISE <span style={{ color: '#F47117' }}>RESOURCES.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {ENTERPRISE_RESOURCES.map((res) => (
              <div
                key={res.title}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(203, 208, 217, 0.18)',
                  padding: '28px 24px',
                  borderRadius: 6,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', fontWeight: 600, letterSpacing: '0.14em' }}>
                    {res.type}
                  </span>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, color: '#FFFFFF', margin: '12px 0 0', fontWeight: 600, lineHeight: 1.45 }}>
                    {res.title}
                  </h3>
                </div>
                <a
                  href={`/contact?topic=${encodeURIComponent(res.topic)}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#F47117',
                    marginTop: 24,
                    textDecoration: 'none',
                  }}
                >
                  REQUEST PUBLICATION <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 FINAL CTA */}
      <PageCTA
        eyebrow="INFRYS RESEARCH SIGNAL / 07"
        headingLine1="SCHEDULE A TECHNICAL"
        headingLine2="PQC BRIEFING."
        supportingText="Request a tailored executive or engineering briefing on post-quantum readiness and crypto-agile architecture."
        primaryCtaText="REQUEST BRIEFING"
        primaryCtaHref="/contact"
        secondaryCtaText="EXPLORE TECHNOLOGY"
        secondaryCtaHref="/technology"
      />

      {/* 08 FOOTER */}
      <EnterpriseFooter />
    </main>
  )
}

