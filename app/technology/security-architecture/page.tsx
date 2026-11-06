import type { Metadata } from 'next'
import { TechnologyDetailTemplate } from '@/components/templates/technology-detail-template'

export const metadata: Metadata = {
  title: 'Enterprise Security Architecture | Living Defense System',
  description: 'Connect applications, infrastructure, identity, cryptography, and security controls into resilient, evolutionary enterprise architectures.',
  alternates: {
    canonical: 'https://infrys.com/technology/security-architecture',
  },
  openGraph: {
    title: 'Enterprise Security Architecture | Infrys Security Technologies',
    description: 'Engineer security as a living, evolutionary system across all 7 infrastructure layers.',
    url: 'https://infrys.com/technology/security-architecture',
    type: 'website',
  },
}

export default function SecurityArchitecturePage() {
  return (
    <TechnologyDetailTemplate
      spec={{
        domainId: 'security-architecture',
        eyebrow: 'INFRYS SECURITY ARCHITECTURE / DOMAIN 04',
        title: 'ENGINEER SECURITY AS A',
        titleHighlight: 'LIVING SYSTEM.',
        subtitle: 'Connect applications, infrastructure, identity, cryptography, and operational controls into resilient, evolutionary enterprise architectures.',
        overviewHeading: '7-LAYER INTEGRATED DEFENSE SYSTEM.',
        overviewCopy1: 'Enterprise security fails when components operate in isolation. A vulnerability in identity management compromises database encryption, while static key management undermines modern application security.',
        overviewCopy2: 'Infrys Security Architecture treats defense as a living system. We design multi-layered enterprise frameworks where cryptographic controls, zero-trust identity networks, post-quantum resilience, and continuous telemetry reinforce each other across all seven infrastructure tiers.',
        keyCapabilities: [
          { title: 'Zero-Trust Network Architecture', desc: 'Micro-segmentation and continuous cryptographic identity verification across all network perimeters.' },
          { title: 'Envelope Data Protection', desc: 'Multi-layer database and object storage encryption backed by dynamic key wrapping.' },
          { title: 'Identity & Access PKI', desc: 'Robust public key infrastructure issuing hardware-backed credentials for services and devices.' },
          { title: 'Continuous Security Telemetry', desc: 'Real-time telemetry and SIEM integration monitoring cryptographic integrity and threat anomalies.' },
        ],
        technicalSpecs: [
          { label: 'ARCHITECTURE MODEL', value: '7-Layer Living Defense System' },
          { label: 'IDENTITY VERIFICATION', value: 'mTLS / SPIFFE / OAuth 2.0 PKCE' },
          { label: 'DATA PROTECTION', value: 'Multi-Tenant Envelope Encryption' },
          { label: 'COMPLIANCE ALIGNMENT', value: 'NIST CSF 2.0 / ISO 27001:2022' },
        ],
        architectureLayers: [
          { num: '01', title: 'Applications Layer', desc: 'API gateways, web interfaces, and microservices authenticated via crypto-agile tokens.' },
          { num: '02', title: 'Data Layer', desc: 'Enterprise databases and blob storage protected by hybrid envelope encryption.' },
          { num: '03', title: 'Cryptographic Layer', desc: 'Decoupled abstraction brokers isolating key management from application code.' },
          { num: '04', title: 'Key Management Layer', desc: 'Automated certificate authorities, key rotation, and split-knowledge key wrapping.' },
          { num: '05', title: 'PQC Layer', desc: 'NIST ML-KEM and ML-DSA lattice algorithms safeguarding against quantum decryption.' },
          { num: '06', title: 'HSM Infrastructure Layer', desc: 'Tamper-resistant hardware security modules providing hot-swappable algorithm support.' },
          { num: '07', title: 'Security Operations Layer', desc: 'Real-time cryptographic telemetry, audit compliance reporting, and incident response.' },
        ],
        relatedPages: [
          { title: 'Cryptographic Foundations', href: '/technology/cryptography' },
          { title: 'Post-Quantum Cryptography', href: '/technology/post-quantum-cryptography' },
          { title: 'Crypto-Agility Architecture', href: '/technology/crypto-agility' },
        ],
      }}
    />
  )
}
