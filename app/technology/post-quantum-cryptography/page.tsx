import type { Metadata } from 'next'
import { TechnologyDetailTemplate } from '@/components/templates/technology-detail-template'

export const metadata: Metadata = {
  title: 'Post-Quantum Cryptography (PQC) | NIST FIPS 203 & 204 Migration',
  description: 'NIST-standardized lattice-based encryption (ML-KEM / ML-DSA) and Harvest-Now-Decrypt-Later (HNDL) risk mitigation for enterprise systems.',
  alternates: {
    canonical: 'https://infrys.com/technology/post-quantum-cryptography',
  },
  openGraph: {
    title: 'Post-Quantum Cryptography (PQC) | Infrys Security Technologies',
    description: 'Prepare enterprise infrastructure before quantum computing threats arrive.',
    url: 'https://infrys.com/technology/post-quantum-cryptography',
    type: 'website',
  },
}

export default function PostQuantumCryptographyPage() {
  return (
    <TechnologyDetailTemplate
      spec={{
        domainId: 'post-quantum-cryptography',
        eyebrow: 'INFRYS PQC TECHNOLOGY / DOMAIN 02',
        title: 'PREPARE BEFORE THE',
        titleHighlight: 'THREAT ARRIVES.',
        subtitle: 'Assess cryptographic exposure, defend against Harvest-Now-Decrypt-Later (HNDL) threats, and migrate enterprise systems to NIST-standardized lattice algorithms.',
        overviewHeading: 'QUANTUM-RESISTANT LATTICE ENCRYPTION.',
        overviewCopy1: 'Adversaries actively harvest encrypted enterprise data today to decrypt it once Cryptanalytically Relevant Quantum Computers (CRQCs) become operational. High-value transactions, intellectual property, and government records with 20+ year longevity are immediately vulnerable.',
        overviewCopy2: 'Infrys implements standardized NIST FIPS post-quantum algorithms—deploying ML-KEM (formerly CRYSTALS-Kyber) for key encapsulation and ML-DSA for digital signatures in hybrid dual-key configurations alongside existing RSA/ECC infrastructure.',
        keyCapabilities: [
          { title: 'ML-KEM (FIPS 203) Key Encapsulation', desc: 'Lattice-based key exchange mechanism safeguarding data confidentiality against quantum cryptanalysis.' },
          { title: 'ML-DSA (FIPS 204) Digital Signatures', desc: 'Primary lattice-based digital signature algorithm providing quantum-resistant authentication.' },
          { title: 'SLH-DSA (FIPS 205) Hash-Based Signatures', desc: 'Stateless hash-based signature scheme offering conservative fallback protection.' },
          { title: 'Hybrid Dual-Key Deployment', desc: 'Parallel execution of classical ECDH and lattice ML-KEM to maintain FIPS compliance during migration.' },
        ],
        technicalSpecs: [
          { label: 'KEY ENCAPSULATION', value: 'ML-KEM-512 / 768 / 1024 (FIPS 203)' },
          { label: 'DIGITAL SIGNATURES', value: 'ML-DSA-44 / 65 / 87 (FIPS 204)' },
          { label: 'HASH SIGNATURES', value: 'SLH-DSA-SHA2-128f / 256f (FIPS 205)' },
          { label: 'SECURITY CATEGORIES', value: 'NIST Security Levels 1, 3, & 5' },
        ],
        standardsList: [
          { code: 'NIST FIPS 203', title: 'Module-Lattice-Based Key-Encapsulation Mechanism', desc: 'Standardized ML-KEM algorithm (formerly CRYSTALS-Kyber) for quantum-resistant secret key exchange.' },
          { code: 'NIST FIPS 204', title: 'Module-Lattice-Based Digital Signature Standard', desc: 'Standardized ML-DSA algorithm (formerly CRYSTALS-Dilithium) for quantum-resistant identity signatures.' },
          { code: 'NIST FIPS 205', title: 'Stateless Hash-Based Digital Signature Standard', desc: 'Standardized SLH-DSA algorithm (formerly SPHINCS+) providing hash-backed signature resilience.' },
        ],
        relatedPages: [
          { title: 'Cryptography Foundations', href: '/technology/cryptography' },
          { title: 'Crypto-Agility Architecture', href: '/technology/crypto-agility' },
          { title: 'Security Architecture', href: '/technology/security-architecture' },
        ],
      }}
    />
  )
}
