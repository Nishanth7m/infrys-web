import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { PageCTA } from '@/components/sections/page-cta'
import { EnterpriseFooter } from '@/components/sections/footer'
import { ArrowUpRight, CheckCircle2, Landmark, HeartPulse, Cpu, Radio, Factory, Building2, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries We Support | Enterprise & Critical Infrastructure Security | Infrys',
  description:
    'Sector-specialized cybersecurity, post-quantum cryptography (PQC) migration, and regulatory compliance for Financial Services, Healthcare, Technology, Telecommunications, Manufacturing, Government, and Critical Infrastructure.',
  alternates: {
    canonical: 'https://infrys.com/industries',
  },
  openGraph: {
    title: 'Industries We Support | Infrys Security Technologies',
    description:
      'Specialized cryptographic modernization, VAPT, and GRC across seven high-compliance enterprise and national infrastructure sectors.',
    url: 'https://infrys.com/industries',
    type: 'website',
  },
}

interface IndustrySpec {
  id: string
  num: string
  name: string
  kicker: string
  summary: string
  riskProfile: string
  cryptographicPriority: string
  complianceFrameworks: string[]
  capabilities: { title: string; desc: string }[]
}

const INDUSTRIES_DATA: IndustrySpec[] = [
  {
    id: 'financial-services',
    num: '01',
    name: 'Financial Services',
    kicker: 'BANKING, CAPITAL MARKETS & PAYMENTS',
    summary: 'High-frequency transaction encryption, interbank key wrapping, and multi-jurisdictional GRC compliance.',
    riskProfile:
      'Financial institutions process high-velocity payment rails, ledger settlements, and long-term customer records that are prime targets for both active API exploitation and Harvest-Now-Decrypt-Later (HNDL) interception.',
    cryptographicPriority:
      'Migrating payment HSMs, TLS termination gateways, and interbank messaging channels from legacy RSA/ECC to hybrid ML-KEM (FIPS 203) and ML-DSA (FIPS 204) without disrupting transaction throughput.',
    complianceFrameworks: ['PCI-DSS 4.0', 'ISO 27001:2022', 'SOC 2 Type II', 'NIST CSF 2.0', 'FIPS 140-3 / 203 / 204'],
    capabilities: [
      {
        title: 'Payment & Ledger HSM Modernization',
        desc: 'Audit and upgrade hardware security modules protecting payment switches, custody keys, and settlement rails.',
      },
      {
        title: 'High-Frequency API & Core Banking VAPT',
        desc: 'Manual offensive testing of trading APIs, open-banking gateways, and authorization logic.',
      },
      {
        title: 'Hybrid PQC TLS Gateways',
        desc: 'Latency-optimized dual-key encapsulation protecting sensitive financial data in transit.',
      },
      {
        title: 'Continuous Regulatory Governance',
        desc: 'Automated control evidence mapping aligned with PCI-DSS 4.0 and financial supervisory mandates.',
      },
    ],
  },
  {
    id: 'healthcare',
    num: '02',
    name: 'Healthcare',
    kicker: 'HOSPITAL NETWORKS, LIFE SCIENCES & MEDTECH',
    summary: 'Long-term patient telemetry, HIPAA data-at-rest protection, and connected medical IoT device security.',
    riskProfile:
      'Electronic health records (EHR), genomic research data, and connected clinical devices require multi-decade confidentiality. Compromised patient records cannot be re-issued once exposed.',
    cryptographicPriority:
      'Protecting long-lived patient archives with quantum-resistant envelope encryption and securing resource-constrained medical IoT telemetry with lightweight authenticated primitives.',
    complianceFrameworks: ['HIPAA Security Rule', 'HITRUST CSF', 'ISO 27001:2022', 'NIST SP 800-66', 'FDA Premarket Cybersecurity'],
    capabilities: [
      {
        title: 'HIPAA & EHR Envelope Encryption',
        desc: 'Multi-tenant database and object storage key wrapping safeguarding long-term clinical and genomic records.',
      },
      {
        title: 'Connected Medical Device & IoT PKI',
        desc: 'Hardware-backed device identity certificates and firmware signing for clinical and diagnostic equipment.',
      },
      {
        title: 'Clinical Network Segmentation & VAPT',
        desc: 'Penetration testing across hospital applications, telehealth APIs, and internal clinical networks.',
      },
      {
        title: '24/7 Healthcare SOC Telemetry',
        desc: 'Continuous monitoring to detect ransomware staging, unauthorized EHR access, and anomalous key usage.',
      },
    ],
  },
  {
    id: 'technology',
    num: '03',
    name: 'Technology',
    kicker: 'CLOUD PLATFORMS, SAAS & ENTERPRISE SOFTWARE',
    summary: 'Microservice mesh mTLS, multi-tenant cloud envelope encryption, and CI/CD code signing PKI.',
    riskProfile:
      'Software and cloud providers sit at the center of enterprise supply chains. Hardcoded cryptographic primitives across hundreds of microservices create systemic migration bottlenecks.',
    cryptographicPriority:
      'Decoupling cryptographic calls from application code via crypto-agile broker layers and securing software build pipelines with quantum-resistant digital signatures.',
    complianceFrameworks: ['SOC 2 Type II', 'ISO 27001:2022', 'NIST SSDF (SP 800-218)', 'CSA STAR', 'FIPS 204 (ML-DSA)'],
    capabilities: [
      {
        title: 'Crypto-Agile Microservice Mesh',
        desc: 'Abstracted cryptographic broker middleware enabling algorithm updates without rewriting application services.',
      },
      {
        title: 'Quantum-Resistant Code & Container Signing',
        desc: 'Protect CI/CD pipelines and software artifacts using ML-DSA and SLH-DSA signature architectures.',
      },
      {
        title: 'Cloud-Native & Multi-Tenant VAPT',
        desc: 'Deep offensive testing for tenant isolation bypasses, Kubernetes cluster misconfigurations, and IAM escalation.',
      },
      {
        title: 'Automated PKI & Certificate Lifecycle',
        desc: 'Short-lived mTLS identity issuance using SPIFFE/ACME across dynamic cloud workloads.',
      },
    ],
  },
  {
    id: 'telecommunications',
    num: '04',
    name: 'Telecommunications',
    kicker: '5G CORE, CARRIER BACKBONE & OPTICAL NETWORKS',
    summary: '5G core signal encryption, subscriber identity module security, and optical network transport protection.',
    riskProfile:
      'Telecommunications carriers transport sovereign, financial, and enterprise traffic across national backbones, making core signaling and optical links high-priority targets for bulk interception.',
    cryptographicPriority:
      'Hardening 5G service-based architecture (SBA) interfaces, interconnect roaming links, and subscriber identity provisioning against classical and quantum cryptanalysis.',
    complianceFrameworks: ['3GPP Security Standards', 'NIST CSF 2.0', 'ISO 27001:2022', 'ITU-T X.1811 (PQC)', 'ETSI TS 103 744'],
    capabilities: [
      {
        title: '5G Core & Signaling Security Architecture',
        desc: 'Cryptographic hardening and mutual authentication across 5G network functions and edge nodes.',
      },
      {
        title: 'Backbone & Interconnect PQC Readiness',
        desc: 'Hybrid quantum-resistant key exchange for high-capacity carrier peering and IPsec transport tunnels.',
      },
      {
        title: 'Subscriber Identity & SIM PKI Governance',
        desc: 'Key lifecycle management and HSM governance for subscriber authentication credentials.',
      },
      {
        title: 'Telecom Infrastructure Penetration Testing',
        desc: 'Offensive security evaluation of carrier OSS/BSS platforms, management planes, and customer portals.',
      },
    ],
  },
  {
    id: 'manufacturing',
    num: '05',
    name: 'Manufacturing',
    kicker: 'INDUSTRIAL OT/ICS, AUTOMOTIVE & SUPPLY CHAIN',
    summary: 'OT/ICS firmware integrity verification, industrial SCADA isolation, and hardware supply chain PKI.',
    riskProfile:
      'Modern manufacturing converges operational technology (OT) with cloud analytics while deploying industrial equipment and connected vehicles that remain in the field for 15 to 25 years.',
    cryptographicPriority:
      'Embedding crypto-agile roots of trust and post-quantum firmware verification into long-lifespan industrial controllers and connected hardware.',
    complianceFrameworks: ['IEC 62443', 'NIST SP 800-82', 'ISO/SAE 21434', 'ISO 27001:2022', 'NIST FIPS 204 / 205'],
    capabilities: [
      {
        title: 'OT/ICS & SCADA Boundary Architecture',
        desc: 'Zero-trust segmentation and encrypted telemetry gateways isolating plant-floor networks from IT exposure.',
      },
      {
        title: 'Long-Lifespan Firmware Signing (PQC)',
        desc: 'Quantum-resistant code signing (ML-DSA / SLH-DSA) ensuring secure OTA updates across multi-decade hardware lifecycles.',
      },
      {
        title: 'Industrial & Embedded Security Testing',
        desc: 'Non-disruptive vulnerability assessment of industrial protocols, PLC interfaces, and supply chain portals.',
      },
      {
        title: 'Intellectual Property Encryption',
        desc: 'Envelope encryption and strict key access governance for CAD blueprints, proprietary formulas, and R&D repositories.',
      },
    ],
  },
  {
    id: 'government',
    num: '06',
    name: 'Government',
    kicker: 'PUBLIC SECTOR, DEFENSE & SOVEREIGN SYSTEMS',
    summary: 'Classified data longevity protection and NIST FIPS 203 / 204 / 205 post-quantum migration mandates.',
    riskProfile:
      'Government agencies steward national security communications, citizen identity registries, and diplomatic archives with statutory multi-decade confidentiality mandates.',
    cryptographicPriority:
      'Executing structured cryptographic inventory discovery and phased migration to CNSA 2.0 and NIST FIPS 203, 204, and 205 post-quantum standards.',
    complianceFrameworks: ['NIST FIPS 203 / 204 / 205', 'NIST SP 800-53 Rev. 5', 'CNSA 2.0 Guidance', 'NIST CSF 2.0', 'FIPS 140-3'],
    capabilities: [
      {
        title: 'Mandated Cryptographic Inventory & CBOM',
        desc: 'Comprehensive discovery of asymmetric algorithms, certificates, and cryptographic bill of materials (CBOM) across agency systems.',
      },
      {
        title: 'FIPS 203 / 204 / 205 Migration Engineering',
        desc: 'Phased architecture and deployment of ML-KEM, ML-DSA, and SLH-DSA across sovereign identity and communication platforms.',
      },
      {
        title: 'Sovereign PKI & HSM Architecture',
        desc: 'Split-knowledge key ceremonies, air-gapped root certificate authorities, and hardware security module governance.',
      },
      {
        title: 'Red-Team & Adversarial VAPT',
        desc: 'Rigorous offensive security assessments simulating advanced persistent threat (APT) attack vectors.',
      },
    ],
  },
  {
    id: 'critical-infrastructure',
    num: '07',
    name: 'Critical Infrastructure',
    kicker: 'ENERGY GRIDS, UTILITIES, AVIATION & LOGISTICS',
    summary: 'Grid control telemetry, hardware security module management, and resilient zero-trust architecture.',
    riskProfile:
      'Power generation, water treatment, aviation, and transport networks rely on distributed remote terminal units (RTUs) and real-time telemetry where availability and command integrity are paramount.',
    cryptographicPriority:
      'Securing distributed control plane commands with authenticated, low-latency cryptographic channels and resilient key distribution that operates reliably under degraded network conditions.',
    complianceFrameworks: ['NERC CIP', 'IEC 62443', 'NIST CSF 2.0', 'NIST SP 800-82', 'ISO 27001:2022'],
    capabilities: [
      {
        title: 'Grid & Utility Telemetry Authentication',
        desc: 'Cryptographic integrity protection for substation automation, SCADA command channels, and distributed energy resources.',
      },
      {
        title: 'Resilient Zero-Trust Control Planes',
        desc: 'Mutual cryptographic authentication and micro-segmentation preventing lateral movement between IT and OT tiers.',
      },
      {
        title: 'HSM Lifecycle & Key Continuity',
        desc: 'High-availability key management and disaster recovery architectures for mission-critical infrastructure.',
      },
      {
        title: '24/7 Threat Operations & Incident Readiness',
        desc: 'Continuous telemetry monitoring, anomaly detection, and rapid containment protocols for critical national assets.',
      },
    ],
  },
]

const INDUSTRY_ICONS = {
  'financial-services': Landmark,
  healthcare: HeartPulse,
  technology: Cpu,
  telecommunications: Radio,
  manufacturing: Factory,
  government: Building2,
  'critical-infrastructure': Zap,
} as const

export default function IndustriesPage() {
  return (
    <main className="site-shell" style={{ background: '#1D1E33', color: '#FFFFFF', minHeight: '100vh' }}>
      <EnterpriseHeader />

      {/* 01 HERO (NAVY #1D1E33) */}
      <section style={{ background: '#1D1E33', color: '#FFFFFF', padding: '100px 7vw 90px', borderBottom: '1px solid rgba(203, 208, 217, 0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#CBD0D9', letterSpacing: '0.14em', marginBottom: 16, fontWeight: 600 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', marginRight: 8, borderRadius: '50%' }} />
            SECTOR SPECIALIZATION / 01
          </p>

          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 1.05, margin: '0 0 24px', color: '#FFFFFF' }}>
            SECURITY FOR<br />
            COMPLEX<br />
            <span style={{ color: '#F47117' }}>ENVIRONMENTS.</span>
          </h1>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#CBD0D9', lineHeight: 1.65, maxWidth: 640, margin: '0 0 36px' }}>
            Infrys engineers cryptographic resilience, offensive vulnerability testing, and regulatory compliance across seven regulated enterprise and critical infrastructure sectors.
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
              TALK TO A SECTOR SPECIALIST <ArrowUpRight size={16} />
            </a>
            <a
              href="#sectors"
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
              EXPLORE 7 SECTORS ↓
            </a>
          </div>
        </div>
      </section>

      {/* 02 SEVEN SECTOR DIRECTORY (CREAM #FEF3E5) */}
      <section
        id="sectors"
        style={{
          scrollMarginTop: 82,
          background: '#FEF3E5',
          color: '#1D1E33',
          padding: '90px 7vw',
          borderBottom: '1px solid rgba(29, 30, 51, 0.12)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              SEVEN INDUSTRY SPECIALIZATIONS / 02
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: 0, color: '#1D1E33' }}>
              INDUSTRIES WE <span style={{ color: '#F47117' }}>SUPPORT.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.id as keyof typeof INDUSTRY_ICONS]
              return (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="hover-card-enterprise"
                  style={{
                    textDecoration: 'none',
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                      <Icon size={22} style={{ color: '#F47117' }} />
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', fontWeight: 600 }}>
                        SECTOR {ind.num}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#1D1E33', fontWeight: 700, margin: '0 0 8px' }}>
                      {ind.name}
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#63667A', lineHeight: 1.6, margin: 0 }}>
                      {ind.summary}
                    </p>
                  </div>
                  <div style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600 }}>
                    VIEW SECTOR ARCHITECTURE <ArrowUpRight size={14} />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* 03–09 DETAILED INDUSTRY SECTIONS */}
      {INDUSTRIES_DATA.map((ind, idx) => {
        const isDark = idx % 2 === 0
        return (
          <section
            key={ind.id}
            id={ind.id}
            style={{
              scrollMarginTop: 82,
              background: isDark ? '#1D1E33' : '#FEF3E5',
              color: isDark ? '#FFFFFF' : '#1D1E33',
              padding: '95px 7vw',
              borderBottom: isDark ? '1px solid rgba(203, 208, 217, 0.15)' : '1px solid rgba(29, 30, 51, 0.12)',
            }}
          >
            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, marginBottom: 48 }}>
                <div>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
                    SECTOR {ind.num} // {ind.kicker}
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(32px, 4.2vw, 52px)',
                      fontWeight: 700,
                      letterSpacing: '-0.05em',
                      lineHeight: 1.06,
                      margin: '0 0 18px',
                      color: isDark ? '#FFFFFF' : '#1D1E33',
                    }}
                  >
                    {ind.name.toUpperCase()}
                  </h2>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: isDark ? '#CBD0D9' : '#4A4D61', lineHeight: 1.65, margin: '0 0 24px' }}>
                    {ind.summary}
                  </p>

                  {/* COMPLIANCE BADGES */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {ind.complianceFrameworks.map((fw) => (
                      <span
                        key={fw}
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          color: '#F47117',
                          background: 'rgba(244, 113, 23, 0.12)',
                          border: '1px solid rgba(244, 113, 23, 0.35)',
                          padding: '5px 10px',
                          borderRadius: 4,
                        }}
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div
                    style={{
                      background: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                      border: isDark ? '1px solid rgba(203, 208, 217, 0.18)' : '1px solid #D9DCE3',
                      padding: '24px',
                      borderRadius: 6,
                    }}
                  >
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', letterSpacing: '0.12em', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                      SECTOR THREAT &amp; LONGEVITY PROFILE
                    </span>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: isDark ? '#CBD0D9' : '#63667A', lineHeight: 1.65, margin: 0 }}>
                      {ind.riskProfile}
                    </p>
                  </div>

                  <div
                    style={{
                      background: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                      border: isDark ? '1px solid rgba(203, 208, 217, 0.18)' : '1px solid #D9DCE3',
                      padding: '24px',
                      borderRadius: 6,
                    }}
                  >
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', letterSpacing: '0.12em', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                      POST-QUANTUM &amp; CRYPTOGRAPHIC PRIORITY
                    </span>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: isDark ? '#CBD0D9' : '#63667A', lineHeight: 1.65, margin: 0 }}>
                      {ind.cryptographicPriority}
                    </p>
                  </div>
                </div>
              </div>

              {/* CAPABILITIES GRID */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                {ind.capabilities.map((cap) => (
                  <div
                    key={cap.title}
                    style={{
                      background: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                      border: isDark ? '1px solid rgba(203, 208, 217, 0.18)' : '1px solid #D9DCE3',
                      padding: '26px 24px',
                      borderRadius: 6,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <CheckCircle2 size={17} style={{ color: '#F47117', flexShrink: 0 }} />
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: isDark ? '#FFFFFF' : '#1D1E33', margin: 0, fontWeight: 700 }}>
                        {cap.title}
                      </h3>
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: isDark ? '#CBD0D9' : '#63667A', lineHeight: 1.6, margin: 0 }}>
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* APPLICABLE SOLUTIONS & SECTOR CONSULTATION BAR */}
              <div
                style={{
                  background: isDark ? 'rgba(244, 113, 23, 0.06)' : '#1D1E33',
                  border: '1px solid rgba(244, 113, 23, 0.35)',
                  borderRadius: 8,
                  padding: '22px 28px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 20,
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', fontWeight: 600, letterSpacing: '0.12em', marginRight: 6 }}>
                    APPLICABLE SOLUTIONS:
                  </span>
                  {[
                    { label: 'VAPT', href: '/solutions#vapt' },
                    { label: 'GRC & Compliance', href: '/solutions#grc' },
                    { label: 'Cryptography & PQC', href: '/solutions#cryptography-pqc' },
                    { label: 'Managed Security', href: '/solutions#managed-security' },
                  ].map((sol) => (
                    <a
                      key={sol.href}
                      href={sol.href}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 10,
                        fontWeight: 600,
                        color: '#FEF3E5',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(203, 208, 217, 0.25)',
                        padding: '6px 12px',
                        borderRadius: 4,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                      }}
                    >
                      {sol.label} <ArrowUpRight size={11} style={{ color: '#F47117' }} />
                    </a>
                  ))}
                </div>

                <a
                  href={`/contact?topic=${encodeURIComponent(`${ind.name} Security Consultation`)}`}
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    color: '#F47117',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  CONSULT ON {ind.name.toUpperCase()} <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </section>
        )
      })}

      {/* 10 FINAL CTA */}
      <PageCTA
        eyebrow="INFRYS SECTOR SIGNAL / 10"
        headingLine1="PROTECT YOUR"
        headingLine2="CRITICAL SYSTEMS."
        supportingText="Connect with Infrys sector engineers to align your cryptographic and security posture with regulatory mandates."
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

