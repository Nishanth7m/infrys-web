import type { Metadata } from 'next'
import { SolutionDetailTemplate } from '@/components/templates/solution-detail-template'

export const metadata: Metadata = {
  title: 'Governance, Risk & Compliance (GRC) | Enterprise Audit Readiness',
  description: 'Align enterprise security operations with NIST CSF 2.0, ISO 27001:2022, SOC2, HIPAA, and post-quantum compliance mandates.',
  alternates: {
    canonical: 'https://infrys.com/solutions/grc',
  },
  openGraph: {
    title: 'Governance, Risk & Compliance (GRC) | Infrys Security Technologies',
    description: 'Turn complex regulatory obligations into a measurable, audit-ready security posture.',
    url: 'https://infrys.com/solutions/grc',
    type: 'website',
  },
}

export default function GRCPage() {
  return (
    <SolutionDetailTemplate
      spec={{
        solutionId: 'grc',
        eyebrow: 'INFRYS COMPLIANCE & RISK / SOLUTION 02',
        title: 'TURN OBLIGATIONS INTO',
        titleHighlight: 'AUDIT-READY POSTURE.',
        subtitle: 'Align enterprise operations with NIST CSF 2.0, ISO 27001:2022, SOC2, HIPAA, and emerging post-quantum regulatory compliance frameworks.',
        overviewHeading: 'ENTERPRISE RISK & COMPLIANCE.',
        overviewCopy1: 'Regulatory environments are escalating requirements around data privacy, third-party supply chain risk, and cryptographic key governance. Managing compliance manually via spreadsheets leaves blind spots and audit exposure.',
        overviewCopy2: 'Infrys GRC engineers translate complex regulatory mandates into actionable security controls. We design measurable governance frameworks, automate compliance evidence collection, and prepare enterprise CISOs for successful third-party audits.',
        deliverables: [
          { title: 'ISO 27001:2022 Implementation', desc: 'Complete Information Security Management System (ISMS) design, gap analysis, and auditor readiness.' },
          { title: 'NIST CSF 2.0 Mapping', desc: 'Enterprise cybersecurity framework alignment across Identify, Protect, Detect, Respond, and Recover pillars.' },
          { title: 'SOC 2 Type II Compliance', desc: 'Trust Services Criteria control mapping, continuous policy enforcement, and audit evidence prep.' },
          { title: 'PQC Regulatory Preparedness', desc: 'Aligning enterprise cryptographic key management with emerging federal and industry PQC mandates.' },
        ],
        keyMetrics: [
          { label: 'FRAMEWORKS SUPPORTED', value: 'NIST CSF / ISO 27001 / SOC 2 / HIPAA' },
          { label: 'AUDIT SUCCESS RATE', value: '100% Auditor Acceptance Rate' },
          { label: 'EVIDENCE AUTOMATION', value: 'Continuous Control Monitoring Integration' },
          { label: 'PQC COMPLIANCE', value: 'FIPS 203/204 Migration Roadmap Included' },
        ],
        methodologySteps: [
          { step: '01', title: 'Gap Assessment & Risk Scoping', desc: 'Analyze existing policies, technical controls, and regulatory requirements to identify compliance gaps.' },
          { step: '02', title: 'Control Design & Policy Engineering', desc: 'Draft tailored security policies, incident response plans, and cryptographic governance guidelines.' },
          { step: '03', title: 'Evidence Collection & Implementation', desc: 'Deploy automated evidence collection tools and verify control operational effectiveness.' },
          { step: '04', title: 'Audit Preparation & Defense', desc: 'Conduct mock audit walkthroughs and provide direct support during external certification audits.' },
        ],
        relatedSolutions: [
          { title: 'Vulnerability Assessment & Penetration Testing (VAPT)', href: '/solutions/vapt' },
          { title: 'Cryptography & PQC Modernization', href: '/solutions/cryptography-pqc' },
          { title: 'Managed Security Services', href: '/solutions/managed-security' },
        ],
      }}
    />
  )
}
