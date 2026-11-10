import type { Metadata } from 'next'
import { EnterpriseHeader } from '@/components/header'
import { PageCTA } from '@/components/sections/page-cta'
import { EnterpriseFooter } from '@/components/sections/footer'
import { ArrowUpRight, ShieldCheck, FileCheck, KeyRound, Radio, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise Security Solutions | VAPT, GRC, PQC & Managed Security | Infrys',
  description:
    'Proactive vulnerability assessments (VAPT), regulatory governance (GRC), post-quantum cryptographic modernization (FIPS 203/204/205), and 24/7 managed security services.',
  alternates: {
    canonical: 'https://infrys.com/solutions',
  },
  openGraph: {
    title: 'Enterprise Security Solutions | Infrys Security Technologies',
    description: 'VAPT, GRC, Cryptography & PQC Modernization, and 24/7 Managed Security Services.',
    url: 'https://infrys.com/solutions',
    type: 'website',
  },
}

interface SolutionSectionSpec {
  id: string
  num: string
  kicker: string
  eyebrow: string
  title: string
  headline: string
  titleLine1: string
  titleHighlight: string
  subtitle: string
  overviewHeading: string
  overviewCopy1: string
  overviewCopy2: string
  deliverables: { title: string; desc: string }[]
  keyMetrics: { label: string; value: string }[]
  methodologySteps: { step: string; title: string; desc: string }[]
  relatedTechLabel: string
  relatedTechHref: string
  relatedIndustryLabel: string
  relatedIndustryHref: string
}

const SOLUTIONS_DATA: SolutionSectionSpec[] = [
  {
    id: 'vapt',
    num: '01',
    kicker: 'ASSESS',
    eyebrow: 'INFRYS OFFENSIVE SECURITY / SOLUTION 01',
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    headline: 'Find attack paths before adversaries do.',
    titleLine1: 'FIND ATTACK PATHS',
    titleHighlight: 'BEFORE ADVERSARIES DO.',
    subtitle:
      'Comprehensive offensive security testing across web applications, cloud APIs, microservice meshes, and internal enterprise networks.',
    overviewHeading: 'OFFENSIVE SECURITY ENGINEERING.',
    overviewCopy1:
      'Automated vulnerability scanners produce false positives while missing complex logic flaws, authorization bypasses, and multi-step exploit chains across modern microservice environments.',
    overviewCopy2:
      'Infrys VAPT engineers combine manual threat hunting with custom exploit payload development. We simulate real-world adversarial tactics to uncover critical attack paths, evaluate business risk, and provide actionable remediation code.',
    deliverables: [
      {
        title: 'Web & API Penetration Testing',
        desc: 'Manual testing for OWASP Top 10 vulnerabilities, broken object-level authorization (BOLA), and JWT flaw exploitation.',
      },
      {
        title: 'Cloud & Infrastructure Audits',
        desc: 'IAM policy evaluation, container breakout analysis, and Kubernetes cluster security verification.',
      },
      {
        title: 'Network & Perimeter Testing',
        desc: 'External port scanning, service exploitation, and active directory privilege escalation testing.',
      },
      {
        title: 'Remediation & Re-Testing',
        desc: 'Step-by-step developer patch guides and structured post-remediation re-testing to verify vulnerability elimination.',
      },
    ],
    keyMetrics: [
      { label: 'TESTING METHODOLOGY', value: 'OWASP ASVS 4.0 / PTES Framework' },
      { label: 'REPORTING STRUCTURE', value: 'Executive Risk Summary & Developer Remediation Guide' },
      { label: 'RE-TESTING WORKFLOW', value: 'Structured Post-Remediation Patch Verification' },
      { label: 'COMPLIANCE SUPPORT', value: 'PCI-DSS 4.0 / ISO 27001 / SOC 2' },
    ],
    methodologySteps: [
      {
        step: '01',
        title: 'Scoping & Rules of Engagement',
        desc: 'Define target IP ranges, API endpoints, and testing schedules to prevent production disruption.',
      },
      {
        step: '02',
        title: 'Reconnaissance & Mapping',
        desc: 'Map asset surfaces, discover hidden endpoints, and analyze technology stack signatures.',
      },
      {
        step: '03',
        title: 'Threat Hunting & Exploitation',
        desc: 'Execute manual exploit chains to verify proof-of-concept impact without data loss.',
      },
      {
        step: '04',
        title: 'Reporting & Remediation Support',
        desc: 'Deliver executive summaries, technical vulnerability details, and developer patch guidelines.',
      },
    ],
    relatedTechLabel: '7-Layer Security Architecture',
    relatedTechHref: '/technology#security-architecture',
    relatedIndustryLabel: 'Financial Services & Cloud Sectors',
    relatedIndustryHref: '/industries#financial-services',
  },
  {
    id: 'grc',
    num: '02',
    kicker: 'GOVERN',
    eyebrow: 'INFRYS COMPLIANCE & RISK / SOLUTION 02',
    title: 'Governance, Risk & Compliance (GRC)',
    headline: 'Turn complex mandates into audit-ready posture.',
    titleLine1: 'TURN OBLIGATIONS INTO',
    titleHighlight: 'AUDIT-READY POSTURE.',
    subtitle:
      'Align enterprise operations with NIST CSF 2.0, ISO 27001:2022, SOC 2, HIPAA, and emerging post-quantum regulatory compliance frameworks.',
    overviewHeading: 'ENTERPRISE RISK & COMPLIANCE.',
    overviewCopy1:
      'Regulatory environments are escalating requirements around data privacy, third-party supply chain risk, and cryptographic key governance. Managing compliance manually via spreadsheets leaves blind spots and audit exposure.',
    overviewCopy2:
      'Infrys GRC engineers translate complex regulatory mandates into actionable security controls. We design measurable governance frameworks, automate compliance evidence collection, and prepare enterprise CISOs for third-party certification audits.',
    deliverables: [
      {
        title: 'ISO 27001:2022 Implementation',
        desc: 'Complete Information Security Management System (ISMS) design, gap analysis, and auditor readiness.',
      },
      {
        title: 'NIST CSF 2.0 Mapping',
        desc: 'Enterprise cybersecurity framework alignment across Govern, Identify, Protect, Detect, Respond, and Recover pillars.',
      },
      {
        title: 'SOC 2 Type II Compliance',
        desc: 'Trust Services Criteria control mapping, continuous policy enforcement, and audit evidence preparation.',
      },
      {
        title: 'PQC Regulatory Preparedness',
        desc: 'Aligning enterprise cryptographic key management with emerging federal and industry post-quantum mandates.',
      },
    ],
    keyMetrics: [
      { label: 'FRAMEWORKS SUPPORTED', value: 'NIST CSF 2.0 / ISO 27001:2022 / SOC 2 / HIPAA' },
      { label: 'AUDIT PREPARATION', value: 'Structured Third-Party Audit Readiness & Defense' },
      { label: 'EVIDENCE AUTOMATION', value: 'Continuous Control Monitoring Integration' },
      { label: 'PQC COMPLIANCE', value: 'FIPS 203 / 204 / 205 Migration Roadmap Alignment' },
    ],
    methodologySteps: [
      {
        step: '01',
        title: 'Gap Assessment & Risk Scoping',
        desc: 'Analyze existing policies, technical controls, and regulatory requirements to identify compliance gaps.',
      },
      {
        step: '02',
        title: 'Control Design & Policy Engineering',
        desc: 'Draft tailored security policies, incident response plans, and cryptographic governance guidelines.',
      },
      {
        step: '03',
        title: 'Evidence Collection & Implementation',
        desc: 'Deploy automated evidence collection workflows and verify control operational effectiveness.',
      },
      {
        step: '04',
        title: 'Audit Preparation & Defense',
        desc: 'Conduct mock audit walkthroughs and provide direct engineering support during external certification audits.',
      },
    ],
    relatedTechLabel: 'Why PQC & HNDL Exposure',
    relatedTechHref: '/technology#why-pqc',
    relatedIndustryLabel: 'Government & Regulated Sectors',
    relatedIndustryHref: '/industries#government',
  },
  {
    id: 'cryptography-pqc',
    num: '03',
    kicker: 'TRANSFORM',
    eyebrow: 'INFRYS CRYPTOGRAPHIC MODERNIZATION / SOLUTION 03',
    title: 'Cryptography & Post-Quantum Cryptography',
    headline: 'Migrate legacy encryption to quantum-resistant lattice standards.',
    titleLine1: 'MIGRATE LEGACY ENCRYPTION TO',
    titleHighlight: 'QUANTUM-RESISTANT LATTICES.',
    subtitle:
      'Discover cryptographic dependencies across microservices, databases, and HSMs, and deploy NIST ML-KEM & ML-DSA lattice encryption alongside crypto-agile abstraction brokers.',
    overviewHeading: 'POST-QUANTUM TRANSITION SERVICES.',
    overviewCopy1:
      'Legacy asymmetric algorithms (RSA, ECDH, ECDSA) are vulnerable to future quantum decryption. Systems processing high-longevity confidential records face immediate Harvest-Now-Decrypt-Later (HNDL) risk.',
    overviewCopy2:
      'Infrys provides end-to-end cryptographic modernization—discovering hidden key assets, implementing hybrid dual-key encapsulation, and architecting crypto-agile abstraction brokers for seamless algorithm upgrades.',
    deliverables: [
      {
        title: 'Cryptographic Dependency Mapping',
        desc: 'Automated inventory discovery identifying asymmetric keys, certificate chains, and algorithm dependencies.',
      },
      {
        title: 'NIST ML-KEM & ML-DSA Deployment',
        desc: 'Integration of lattice-based key encapsulation (FIPS 203) and digital signatures (FIPS 204).',
      },
      {
        title: 'Hybrid Dual-Key Key Exchange',
        desc: 'Parallel deployment of classical ECDH and lattice ML-KEM to preserve current compliance during migration.',
      },
      {
        title: 'HSM Firmware Modernization',
        desc: 'Upgrading hardware security modules (HSM) and cloud Key Vaults to support post-quantum algorithm suites.',
      },
    ],
    keyMetrics: [
      { label: 'ALGORITHMS SUPPORTED', value: 'ML-KEM (FIPS 203) / ML-DSA (FIPS 204) / SLH-DSA (FIPS 205)' },
      { label: 'INVENTORY COVERAGE', value: 'Comprehensive Application, PKI & HSM Dependency Discovery' },
      { label: 'MIGRATION PATTERN', value: 'Hybrid Dual-Key & Crypto-Agile Abstraction' },
      { label: 'TRANSPORT ENGINEERING', value: 'Latency-Optimized Hybrid TLS Key Exchange' },
    ],
    methodologySteps: [
      {
        step: '01',
        title: 'Cryptographic Inventory & Discovery',
        desc: 'Scan codebases, container images, network TLS proxies, and HSMs to build a complete key dependency map.',
      },
      {
        step: '02',
        title: 'HNDL Exposure & Risk Prioritization',
        desc: 'Quantify data longevity requirements and prioritize high-risk asymmetric key pairs for early migration.',
      },
      {
        step: '03',
        title: 'Hybrid PQC Architecture & Staging',
        desc: 'Deploy hybrid dual-key TLS endpoints and test lattice key exchange in staging environments.',
      },
      {
        step: '04',
        title: 'Production Migration & Agility Activation',
        desc: 'Execute phased algorithm upgrades and activate continuous cryptographic telemetry.',
      },
    ],
    relatedTechLabel: 'NIST FIPS 203/204/205 & Crypto-Agility',
    relatedTechHref: '/technology#post-quantum-cryptography',
    relatedIndustryLabel: 'Healthcare & Critical Infrastructure',
    relatedIndustryHref: '/industries#healthcare',
  },
  {
    id: 'managed-security',
    num: '04',
    kicker: 'PROTECT',
    eyebrow: 'INFRYS MANAGED DEFENSE / SOLUTION 04',
    title: 'Managed Security Services',
    headline: 'Continuous security intelligence and 24/7 incident response.',
    titleLine1: 'CONTINUOUS INTELLIGENCE &',
    titleHighlight: '24/7 INCIDENT RESPONSE.',
    subtitle:
      'Extend your enterprise defense team with real-time threat monitoring, automated cryptographic telemetry, and rapid incident containment.',
    overviewHeading: '24/7 MANAGED ENTERPRISE DEFENSE.',
    overviewCopy1:
      'Sophisticated cyber attacks occur outside normal business hours, leveraging automated exploit toolkits, credential theft, and stealthy lateral movement across cloud workloads.',
    overviewCopy2:
      'Infrys Managed Security Services combine round-the-clock Threat Operations Center (TOC) monitoring with automated SIEM telemetry and expert incident response engineers. We detect anomalies, contain breaches, and maintain continuous oversight over enterprise cryptographic infrastructure.',
    deliverables: [
      {
        title: '24/7 SOC & Threat Operations',
        desc: 'Continuous human-led monitoring and automated threat detection across cloud, network, and endpoint logs.',
      },
      {
        title: 'Priority Incident Containment',
        desc: 'Rapid priority alert triage and active threat isolation led by dedicated incident response engineers.',
      },
      {
        title: 'Cryptographic Telemetry Monitoring',
        desc: 'Real-time telemetry tracking key usage spikes, certificate expiration, and unauthorized algorithm invocation.',
      },
      {
        title: 'Executive Intelligence Reports',
        desc: 'Periodic threat landscape summaries, vulnerability trend analyses, and compliance posture scorecards.',
      },
    ],
    keyMetrics: [
      { label: 'MONITORING COVERAGE', value: '24/7/365 Continuous SOC Operations' },
      { label: 'INCIDENT RESPONSE', value: 'Priority SLA-Backed Critical Alert Triage & Containment' },
      { label: 'SIEM INTEGRATION', value: 'Splunk / Microsoft Sentinel / Datadog' },
      { label: 'TELEMETRY FOCUS', value: 'Endpoint, Cloud Workloads & Cryptographic Keys' },
    ],
    methodologySteps: [
      {
        step: '01',
        title: 'Onboarding & Log Ingestion',
        desc: 'Integrate cloud APIs, firewall logs, endpoint agents, and HSM audit trails into central SIEM analytics.',
      },
      {
        step: '02',
        title: 'Baseline Behavior Modeling',
        desc: 'Establish normal operational baselines for network traffic, user authentication, and API call volumes.',
      },
      {
        step: '03',
        title: '24/7 Active Monitoring & Triage',
        desc: 'Triage security alerts continuously, filtering noise to pinpoint authentic security incidents.',
      },
      {
        step: '04',
        title: 'Containment & Post-Incident Review',
        desc: 'Execute rapid threat containment, conduct root-cause forensics, and harden perimeter defenses.',
      },
    ],
    relatedTechLabel: 'Crypto-Agile Telemetry & Brokers',
    relatedTechHref: '/technology#crypto-agility',
    relatedIndustryLabel: 'Critical Infrastructure & Telecom',
    relatedIndustryHref: '/industries#critical-infrastructure',
  },
]

const ICON_MAP = {
  vapt: ShieldCheck,
  grc: FileCheck,
  'cryptography-pqc': KeyRound,
  'managed-security': Radio,
} as const

export default function SolutionsPage() {
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

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#CBD0D9', lineHeight: 1.65, maxWidth: 620, margin: '0 0 36px' }}>
            From offensive vulnerability discovery and regulatory governance to post-quantum cryptographic migration and round-the-clock managed security.
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
              href="#solution-directory"
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
              EXPLORE 4 SOLUTION DOMAINS ↓
            </a>
          </div>
        </div>
      </section>

      {/* 02 SOLUTION FRAMEWORK (CREAM #FEF3E5) */}
      <section style={{ background: '#FEF3E5', color: '#1D1E33', padding: '90px 7vw', borderBottom: '1px solid rgba(29, 30, 51, 0.12)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(28px, 5vw, 60px)' }}>
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

      {/* 03 FOUR SOLUTION DOMAINS DIRECTORY (NAVY #1D1E33) */}
      <section
        id="solution-directory"
        style={{
          scrollMarginTop: 82,
          background: '#1D1E33',
          color: '#FFFFFF',
          padding: '100px 7vw 110px',
          borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
        }}
      >
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
            {SOLUTIONS_DATA.map((item) => {
              const Icon = ICON_MAP[item.id as keyof typeof ICON_MAP]
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
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
                      {item.subtitle}
                    </p>
                  </div>

                  <div style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600 }}>
                    JUMP TO SPECIFICATIONS <ArrowUpRight size={14} />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* 04–07 CONSOLIDATED DEEP-DIVE SECTIONS FOR ALL FOUR SOLUTIONS */}
      {SOLUTIONS_DATA.map((spec, idx) => {
        const isCreamHeader = idx % 2 === 0
        return (
          <section
            key={spec.id}
            id={spec.id}
            style={{
              scrollMarginTop: 82,
              background: isCreamHeader ? '#FEF3E5' : '#1D1E33',
              color: isCreamHeader ? '#1D1E33' : '#FFFFFF',
              padding: '100px 7vw',
              borderBottom: isCreamHeader
                ? '1px solid rgba(29, 30, 51, 0.12)'
                : '1px solid rgba(203, 208, 217, 0.15)',
            }}
          >
            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
              {/* HEADER & OVERVIEW */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(28px, 5vw, 60px)', marginBottom: 64 }}>
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
                      color: isCreamHeader ? '#1D1E33' : '#FFFFFF',
                    }}
                  >
                    {spec.titleLine1}<br />
                    <span style={{ color: '#F47117' }}>{spec.titleHighlight}</span>
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 16,
                      color: isCreamHeader ? '#4A4D61' : '#CBD0D9',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {spec.subtitle}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.12em', fontWeight: 600 }}>
                    {spec.overviewHeading}
                  </span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: isCreamHeader ? '#63667A' : '#CBD0D9', lineHeight: 1.75, margin: 0 }}>
                    {spec.overviewCopy1}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: isCreamHeader ? '#63667A' : '#CBD0D9', lineHeight: 1.75, margin: 0 }}>
                    {spec.overviewCopy2}
                  </p>
                </div>
              </div>

              {/* CORE DELIVERABLES */}
              <div style={{ marginBottom: 48 }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 20 }}>
                  CORE DELIVERABLES · {spec.kicker}
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
                  {spec.deliverables.map((del) => (
                    <div
                      key={del.title}
                      style={{
                        background: isCreamHeader ? '#FFFFFF' : 'rgba(255, 255, 255, 0.03)',
                        border: isCreamHeader ? '1px solid #D9DCE3' : '1px solid rgba(203, 208, 217, 0.18)',
                        padding: '28px 24px',
                        borderRadius: 6,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <CheckCircle2 size={18} style={{ color: '#F47117', flexShrink: 0 }} />
                        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: isCreamHeader ? '#1D1E33' : '#FFFFFF', margin: 0, fontWeight: 700 }}>
                          {del.title}
                        </h3>
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: isCreamHeader ? '#63667A' : '#CBD0D9', lineHeight: 1.6, margin: 0 }}>
                        {del.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ENGAGEMENT PARAMETERS & TECHNICAL MATRIX */}
              <div
                style={{
                  background: isCreamHeader ? '#1D1E33' : 'rgba(244, 113, 23, 0.05)',
                  border: '1px solid rgba(244, 113, 23, 0.35)',
                  borderRadius: 8,
                  padding: '28px 32px',
                  marginBottom: 48,
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', letterSpacing: '0.14em', display: 'block', marginBottom: 18, fontWeight: 600 }}>
                  ENGAGEMENT PARAMETERS &amp; STANDARDS ALIGNMENT
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
                  {spec.keyMetrics.map((m) => (
                    <div key={m.label}>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#CBD0D9', display: 'block', marginBottom: 4 }}>
                        {m.label}
                      </span>
                      <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: '#FEF3E5', fontWeight: 600 }}>
                        {m.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-STEP EXECUTION METHODOLOGY */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600 }}>
                    EXECUTION METHODOLOGY · {spec.title.toUpperCase()}
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
                    <a
                      href={spec.relatedTechHref}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11,
                        color: isCreamHeader ? '#1D1E33' : '#CBD0D9',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      TECH: {spec.relatedTechLabel.toUpperCase()} <ArrowUpRight size={13} style={{ color: '#F47117' }} />
                    </a>
                    <a
                      href={spec.relatedIndustryHref}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11,
                        color: isCreamHeader ? '#1D1E33' : '#CBD0D9',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      SECTORS: {spec.relatedIndustryLabel.toUpperCase()} <ArrowUpRight size={13} style={{ color: '#F47117' }} />
                    </a>
                    <a
                      href={`/contact?topic=${encodeURIComponent(spec.title)}`}
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
                      REQUEST {spec.kicker} ENGAGEMENT <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
                  {spec.methodologySteps.map((m) => (
                    <div
                      key={m.step}
                      style={{
                        background: isCreamHeader ? '#FFFFFF' : 'rgba(255, 255, 255, 0.03)',
                        border: isCreamHeader ? '1px solid #D9DCE3' : '1px solid rgba(203, 208, 217, 0.16)',
                        padding: '24px 22px',
                        borderRadius: 6,
                      }}
                    >
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                        STEP {m.step}
                      </span>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: isCreamHeader ? '#1D1E33' : '#FFFFFF', margin: '0 0 8px', fontWeight: 700 }}>
                        {m.title}
                      </h4>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: isCreamHeader ? '#63667A' : '#CBD0D9', lineHeight: 1.6, margin: 0 }}>
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* 08 CONNECTED PLATFORM & SECTOR PATHWAYS (CREAM #FEF3E5) */}
      <section style={{ background: '#FEF3E5', color: '#1D1E33', padding: '95px 7vw', borderBottom: '1px solid rgba(29, 30, 51, 0.12)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 44 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              ARCHITECTURE, SECTORS &amp; DELIVERY / 08
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.08, margin: 0, color: '#1D1E33' }}>
              EXPLORE THE <span style={{ color: '#F47117' }}>ECOSYSTEM.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                tag: 'TECHNOLOGY PLATFORM',
                title: 'Cryptographic Core & 7-Layer Stack',
                desc: 'Inspect our NIST FIPS 203/204/205 post-quantum standards, crypto-agile abstraction brokers, and interactive 7-layer architecture.',
                href: '/technology',
                cta: 'EXPLORE TECHNOLOGY',
              },
              {
                tag: 'SECTOR SPECIALIZATION',
                title: 'Seven Regulated Industries',
                desc: 'See how VAPT, GRC, PQC, and Managed Security apply to Banking, Healthcare, Cloud, Telecom, Manufacturing, Government, and Critical Infrastructure.',
                href: '/industries',
                cta: 'EXPLORE INDUSTRIES',
              },
              {
                tag: 'DELIVERY MODEL',
                title: '6-Phase Engineering Lifecycle',
                desc: 'Review how Infrys partners with enterprise security teams from initial discovery and HNDL risk modeling through production validation.',
                href: '/company#how-we-work',
                cta: 'VIEW HOW WE WORK',
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="hover-card-enterprise"
                style={{
                  textDecoration: 'none',
                  background: '#FFFFFF',
                  border: '1px solid #D9DCE3',
                  padding: '32px 28px',
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', fontWeight: 600, letterSpacing: '0.12em', display: 'block', marginBottom: 10 }}>
                    {item.tag}
                  </span>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#1D1E33', margin: '0 0 10px', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#63667A', lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600 }}>
                  {item.cta} <ArrowUpRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 09 FINAL CTA (ORANGE #F47117) */}
      <PageCTA
        eyebrow="INFRYS SOLUTIONS SIGNAL / 09"
        headingLine1="READY TO ELEVATE YOUR"
        headingLine2="SECURITY POSTURE?"
        supportingText="Connect with Infrys security engineers to schedule an initial vulnerability assessment, GRC readiness review, or PQC discovery."
        primaryCtaText="TALK TO AN EXPERT"
        primaryCtaHref="/contact"
        secondaryCtaText="EXPLORE TECHNOLOGY PLATFORM"
        secondaryCtaHref="/technology"
      />

      {/* 10 FOOTER */}
      <EnterpriseFooter />
    </main>
  )
}
