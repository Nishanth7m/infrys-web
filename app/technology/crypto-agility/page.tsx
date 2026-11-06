import type { Metadata } from 'next'
import { TechnologyDetailTemplate } from '@/components/templates/technology-detail-template'

export const metadata: Metadata = {
  title: 'Crypto-Agility Architecture | Decoupled Cryptographic Abstraction',
  description: 'Design enterprise infrastructure capable of hot-swapping algorithms and cryptographic providers without rewriting application code.',
  alternates: {
    canonical: 'https://infrys.com/technology/crypto-agility',
  },
  openGraph: {
    title: 'Crypto-Agility Architecture | Infrys Security Technologies',
    description: 'Decouple cryptography from application code for zero-downtime algorithm updates.',
    url: 'https://infrys.com/technology/crypto-agility',
    type: 'website',
  },
}

export default function CryptoAgilityPage() {
  return (
    <TechnologyDetailTemplate
      spec={{
        domainId: 'crypto-agility',
        eyebrow: 'INFRYS CRYPTO-AGILITY / DOMAIN 03',
        title: 'DECOUPLE CRYPTOGRAPHY',
        titleHighlight: 'FROM APPLICATION CODE.',
        subtitle: 'Design enterprise infrastructure that can adapt algorithms, key lengths, and hardware security providers without rebuilding the entire application stack.',
        overviewHeading: 'HOT-SWAPPABLE ALGORITHM ABSTRACTION.',
        overviewCopy1: 'Tightly coupling cryptographic calls directly into application code creates fragile enterprise systems. When a cryptographic algorithm is deprecated or a vulnerability is discovered, modifying hundreds of microservices requires massive code refactoring.',
        overviewCopy2: 'Infrys Crypto-Agility architecture introduces a decoupled cryptographic broker layer. Applications invoke high-level security primitives while the underlying cryptographic provider, algorithm, key size, and HSM hardware can be hot-swapped seamlessly without downtime.',
        keyCapabilities: [
          { title: 'Cryptographic Broker Layer', desc: 'Abstracted API middleware isolating application logic from underlying algorithm implementations.' },
          { title: 'Zero-Downtime Hot-Swapping', desc: 'Dynamically switch encryption algorithms or key lengths in production without restarting microservices.' },
          { title: 'Multi-Provider HSM Abstraction', desc: 'Unified cryptographic interface across cloud HSMs (AWS CloudHSM, Azure Key Vault, PKCS#11 hardware).' },
          { title: 'Algorithm Decay Telemetry', desc: 'Real-time monitoring signaling deprecation timelines and automated algorithm migration triggers.' },
        ],
        technicalSpecs: [
          { label: 'ABSTRACTION PATTERN', value: 'Cryptographic Broker & Proxy Wrapper' },
          { label: 'HARDWARE INTERFACE', value: 'PKCS#11 v3.0 / KMIP 2.1 / REST API' },
          { label: 'KEY ROTATION SPEED', value: '< 50ms Dynamic Provider Switch' },
          { label: 'COMPATIBILITY', value: 'Cloud, On-Premises, & Hybrid HSMs' },
        ],
        standardsList: [
          { code: 'NIST SP 800-131A', title: 'Transitions: Recommendation for Transitioning Cryptographic Algorithms', desc: 'Framework for managing algorithm deprecation and phased cryptographic replacement timelines.' },
          { code: 'OASIS KMIP 2.1', title: 'Key Management Interoperability Protocol', desc: 'Standardized communication protocol connecting enterprise applications to centralized key management servers.' },
          { code: 'PKCS#11 v3.0', title: 'Cryptographic Token Interface Standard', desc: 'Unified interface specification enabling application independence from hardware security modules.' },
        ],
        relatedPages: [
          { title: 'Cryptographic Foundations', href: '/technology/cryptography' },
          { title: 'Post-Quantum Cryptography', href: '/technology/post-quantum-cryptography' },
          { title: 'Security Architecture', href: '/technology/security-architecture' },
        ],
      }}
    />
  )
}
