import type { Metadata } from 'next'
import { TechnologyDetailTemplate } from '@/components/templates/technology-detail-template'

export const metadata: Metadata = {
  title: 'Cryptography & Mathematical Trust | Infrys Security Technologies',
  description: 'Foundational cryptographic engineering, symmetric key wrapping, asymmetric primitives, and PKI dependency mapping for enterprise systems.',
  alternates: {
    canonical: 'https://infrys.com/technology/cryptography',
  },
  openGraph: {
    title: 'Cryptography & Mathematical Trust | Infrys Security Technologies',
    description: 'Mathematical trust for critical enterprise infrastructure.',
    url: 'https://infrys.com/technology/cryptography',
    type: 'website',
  },
}

export default function CryptographyPage() {
  return (
    <TechnologyDetailTemplate
      spec={{
        domainId: 'cryptography',
        eyebrow: 'INFRYS CRYPTOGRAPHY / DOMAIN 01',
        title: 'TRUST IN THE',
        titleHighlight: 'MATHEMATICS.',
        subtitle: 'The cryptographic foundations that protect identities, communications, data, and digital transactions across enterprise environments.',
        overviewHeading: 'FOUNDATIONAL MATHEMATICAL SECURITY.',
        overviewCopy1: 'Every modern enterprise application relies on mathematical assumptions beneath every TLS handshake, API authentication token, and database envelope encryption.',
        overviewCopy2: 'Infrys cryptographic engineering brings mathematical clarity to complex environments—discovering legacy asymmetric dependencies, establishing split-knowledge key wrapping, and hardening PKI certificate authorities against cryptanalytic threats.',
        keyCapabilities: [
          { title: 'Cryptographic Inventory', desc: 'Automated scanning of application codebases, databases, and HSM hardware to discover algorithm dependencies.' },
          { title: 'Symmetric Key Wrapping', desc: 'High-speed envelope encryption utilizing AES-256-GCM and HMAC authentication.' },
          { title: 'PKI & Certificate Management', desc: 'Enterprise Public Key Infrastructure architecture supporting automated key lifecycle rotation.' },
          { title: 'Dependency Mapping', desc: 'Graph-based visualization mapping cryptographic primitives across multi-cloud services.' },
        ],
        technicalSpecs: [
          { label: 'SYMMETRIC ENCRYPTION', value: 'AES-256-GCM / ChaCha20-Poly1305' },
          { label: 'HASH FUNCTIONS', value: 'SHA-384 / SHA-512 / BLAKE2b' },
          { label: 'KEY WRAPPING', value: 'NIST SP 800-38F (KW / KWP)' },
          { label: 'PKI ARCHITECTURE', value: 'X.509 v3 / EST / ACME Protocol' },
        ],
        standardsList: [
          { code: 'NIST SP 800-57', title: 'Recommendation for Key Management', desc: 'Guidelines for key generation, storage, wrapping, and destruction across enterprise lifecycles.' },
          { code: 'FIPS 140-3', title: 'Security Requirements for Cryptographic Modules', desc: 'Validation requirements for hardware security modules (HSM) and software cryptographic primitives.' },
          { code: 'RFC 5280', title: 'Internet X.509 PKI Profile', desc: 'Standardized certificate and CRL profiles securing enterprise transport layer communication.' },
        ],
        relatedPages: [
          { title: 'Post-Quantum Cryptography', href: '/technology/post-quantum-cryptography' },
          { title: 'Crypto-Agility', href: '/technology/crypto-agility' },
          { title: 'Security Architecture', href: '/technology/security-architecture' },
        ],
      }}
    />
  )
}
