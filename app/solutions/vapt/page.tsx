import type { Metadata } from 'next'
import { SolutionDetailTemplate } from '@/components/templates/solution-detail-template'

export const metadata: Metadata = {
  title: 'Vulnerability Assessment & Penetration Testing (VAPT) | Infrys',
  description: 'Comprehensive offensive security testing across enterprise web applications, cloud APIs, microservices, and network perimeters.',
  alternates: {
    canonical: 'https://infrys.com/solutions/vapt',
  },
  openGraph: {
    title: 'Vulnerability Assessment & Penetration Testing (VAPT) | Infrys',
    description: 'Find attack paths before adversaries do through comprehensive VAPT.',
    url: 'https://infrys.com/solutions/vapt',
    type: 'website',
  },
}

export default function VAPTPage() {
  return (
    <SolutionDetailTemplate
      spec={{
        solutionId: 'vapt',
        eyebrow: 'INFRYS OFFENSIVE SECURITY / SOLUTION 01',
        title: 'FIND ATTACK PATHS',
        titleHighlight: 'BEFORE ADVERSARIES DO.',
        subtitle: 'Comprehensive offensive security testing across web applications, cloud APIs, microservice meshes, and internal enterprise networks.',
        overviewHeading: 'OFFENSIVE SECURITY ENGINEERING.',
        overviewCopy1: 'Automated vulnerability scanners produce false positives while missing complex logic flaws, authorization bypasses, and multi-step exploit chains across modern microservice environments.',
        overviewCopy2: 'Infrys VAPT engineers combine manual threat hunting with custom exploit payload development. We simulate real-world adversarial tactics to uncover critical attack paths, evaluate business risk, and provide actionable remediation code.',
        deliverables: [
          { title: 'Web & API Penetration Testing', desc: 'Manual testing for OWASP Top 10 vulnerabilities, broken object-level authorization (BOLA), and JWT flaw exploitation.' },
          { title: 'Cloud & Infrastructure Audits', desc: 'IAM policy evaluation, container breakout analysis, and Kubernetes cluster security verification.' },
          { title: 'Network & Perimeter Testing', desc: 'External port scanning, service exploitation, and active directory privilege escalation testing.' },
          { title: 'Remediation & Re-Testing', desc: 'Step-by-step developer patch guides and zero-cost re-testing to verify vulnerability elimination.' },
        ],
        keyMetrics: [
          { label: 'TESTING METHODOLOGY', value: 'OWASP ASVS 4.0 / PTES Framework' },
          { label: 'DELIVERABLE TIME', value: 'Detailed Report within 5 Business Days' },
          { label: 'RE-TESTING WINDOW', value: 'Inclusive 90-Day Patch Verification' },
          { label: 'COMPLIANCE SUPPORT', value: 'PCI-DSS 4.0 / ISO 27001 / SOC 2' },
        ],
        methodologySteps: [
          { step: '01', title: 'Scoping & Rules of Engagement', desc: 'Define target IP ranges, API endpoints, and testing schedules to prevent production disruption.' },
          { step: '02', title: 'Reconnaissance & Mapping', desc: 'Map asset surfaces, discover hidden endpoints, and analyze technology stack signatures.' },
          { step: '03', title: 'Threat Hunting & Exploitation', desc: 'Execute manual exploit chains to verify proof-of-concept impact without data loss.' },
          { step: '04', title: 'Reporting & Remediation Support', desc: 'Deliver executive summaries, technical vulnerability details, and developer patch guidelines.' },
        ],
        relatedSolutions: [
          { title: 'Governance, Risk & Compliance (GRC)', href: '/solutions/grc' },
          { title: 'Cryptography & PQC Modernization', href: '/solutions/cryptography-pqc' },
          { title: 'Managed Security Services', href: '/solutions/managed-security' },
        ],
      }}
    />
  )
}
