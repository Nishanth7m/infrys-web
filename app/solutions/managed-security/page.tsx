import type { Metadata } from 'next'
import { SolutionDetailTemplate } from '@/components/templates/solution-detail-template'

export const metadata: Metadata = {
  title: 'Managed Security Services | 24/7 Threat Intelligence & Incident Response',
  description: 'Extend your enterprise security team with continuous 24/7 threat monitoring, automated cryptographic telemetry, and rapid incident containment.',
  alternates: {
    canonical: 'https://infrys.com/solutions/managed-security',
  },
  openGraph: {
    title: 'Managed Security Services | Infrys Security Technologies',
    description: 'Continuous security monitoring, intelligence, and 24/7 incident response.',
    url: 'https://infrys.com/solutions/managed-security',
    type: 'website',
  },
}

export default function ManagedSecurityPage() {
  return (
    <SolutionDetailTemplate
      spec={{
        solutionId: 'managed-security',
        eyebrow: 'INFRYS MANAGED DEFENSE / SOLUTION 04',
        title: 'CONTINUOUS INTELLIGENCE &',
        titleHighlight: '24/7 INCIDENT RESPONSE.',
        subtitle: 'Extend your enterprise defense team with real-time threat monitoring, automated cryptographic telemetry, and rapid containment.',
        overviewHeading: '24/7 MANAGED ENTERPRISE DEFENSE.',
        overviewCopy1: 'Sophisticated cyber attacks occur outside normal business hours, leveraging automated exploit toolkits, credential theft, and stealthy lateral movement across cloud workloads.',
        overviewCopy2: 'Infrys Managed Security Services combine round-the-clock Threat Operations Center (TOC) monitoring with automated SIEM telemetry and expert incident response engineers. We detect anomalies, contain breaches, and maintain continuous oversight over enterprise cryptographic infrastructure.',
        deliverables: [
          { title: '24/7 SOC & Threat Operations', desc: 'Continuous human-led monitoring and automated threat detection across cloud, network, and endpoint logs.' },
          { title: 'Rapid Incident Containment SLA', desc: 'Guaranteed 15-minute response time for critical security alerts with active threat isolation.' },
          { title: 'Cryptographic Telemetry Monitoring', desc: 'Real-time telemetry tracking key usage spikes, certificate expiration, and unauthorized algorithm invocation.' },
          { title: 'Executive Intelligence Reports', desc: 'Monthly threat landscape summaries, vulnerability trend analyses, and compliance posture scorecards.' },
        ],
        keyMetrics: [
          { label: 'MONITORING COVERAGE', value: '24/7/365 Continuous SOC Operations' },
          { label: 'INCIDENT RESPONSE SLA', value: '< 15-Minute Critical Containment' },
          { label: 'SIEM INTEGRATION', value: 'Splunk / Microsoft Sentinel / Datadog' },
          { label: 'TELEMETRY FOCUS', value: 'Endpoint, Cloud Workloads, & Cryptographic Keys' },
        ],
        methodologySteps: [
          { step: '01', title: 'Onboarding & Log Ingestion', desc: 'Integrate cloud APIs, firewall logs, endpoint agents, and HSM audit trails into central SIEM analytics.' },
          { step: '02', title: 'Baseline Behavior Modeling', desc: 'Establish normal operational baselines for network traffic, user authentication, and API call volumes.' },
          { step: '03', title: '24/7 Active Monitoring & Triage', desc: 'Triage security alerts continuously, filtering noise to pinpoint authentic security incidents.' },
          { step: '04', title: 'Containment & Post-Incident Review', desc: 'Execute immediate threat containment, conduct root-cause forensics, and harden perimeter defenses.' },
        ],
        relatedSolutions: [
          { title: 'Vulnerability Assessment & Penetration Testing (VAPT)', href: '/solutions/vapt' },
          { title: 'Governance, Risk & Compliance (GRC)', href: '/solutions/grc' },
          { title: 'Cryptography & PQC Modernization', href: '/solutions/cryptography-pqc' },
        ],
      }}
    />
  )
}
