import type { Metadata } from 'next'
import { SolutionDetailTemplate } from '@/components/templates/solution-detail-template'

export const metadata: Metadata = {
  title: 'Cryptography & PQC Modernization | Post-Quantum Migration Services',
  description: 'Cryptographic inventory discovery, lattice-based PQC implementation (ML-KEM / ML-DSA), and hybrid dual-key migration for enterprises.',
  alternates: {
    canonical: 'https://infrys.com/solutions/cryptography-pqc',
  },
  openGraph: {
    title: 'Cryptography & PQC Modernization | Infrys Security Technologies',
    description: 'Prepare enterprise infrastructure before quantum computing threats arrive.',
    url: 'https://infrys.com/solutions/cryptography-pqc',
    type: 'website',
  },
}

export default function CryptographyPQCPage() {
  return (
    <SolutionDetailTemplate
      spec={{
        solutionId: 'cryptography-pqc',
        eyebrow: 'INFRYS CRYPTOGRAPHIC MODERNIZATION / SOLUTION 03',
        title: 'MIGRATE LEGACY ENCRYPTION TO',
        titleHighlight: 'QUANTUM-RESISTANT LATTICES.',
        subtitle: 'Discover cryptographic dependencies across microservices, databases, and HSMs, and deploy NIST ML-KEM & ML-DSA lattice encryption.',
        overviewHeading: 'POST-QUANTUM TRANSITION SERVICES.',
        overviewCopy1: 'Legacy asymmetric algorithms (RSA, ECDH, ECDSA) are vulnerable to future quantum decryption. Systems processing high-longevity confidential records face immediate Harvest-Now-Decrypt-Later (HNDL) risk.',
        overviewCopy2: 'Infrys provides end-to-end cryptographic modernization—discovering hidden key assets, implementing hybrid dual-key encapsulation, and architecting crypto-agile abstraction brokers for seamless zero-downtime algorithm hot-swapping.',
        deliverables: [
          { title: 'Cryptographic Dependency Mapping', desc: 'Automated inventory discovery identifying asymmetric keys, certificate chains, and algorithm dependencies.' },
          { title: 'NIST ML-KEM & ML-DSA Deployment', desc: 'Integration of lattice-based key encapsulation (FIPS 203) and digital signatures (FIPS 204).' },
          { title: 'Hybrid Dual-Key Key Exchange', desc: 'Parallel deployment of classical ECDH and lattice ML-KEM to preserve current compliance during migration.' },
          { title: 'HSM Firmware Modernization', desc: 'Upgrading hardware security modules (HSM) and cloud Key Vaults to support PQC algorithm suites.' },
        ],
        keyMetrics: [
          { label: 'ALGORITHMS SUPPORTED', value: 'ML-KEM (FIPS 203) / ML-DSA (FIPS 204) / SLH-DSA (FIPS 205)' },
          { label: 'INVENTORY COVERAGE', value: '100% Application & HSM Dependency Discovery' },
          { label: 'MIGRATION PATTERN', value: 'Hybrid Dual-Key & Crypto-Agile Abstraction' },
          { label: 'PERFORMANCE IMPACT', value: 'Zero Handshake Latency Overhead' },
        ],
        methodologySteps: [
          { step: '01', title: 'Cryptographic Inventory & Discovery', desc: 'Scan codebases, container images, network TLS proxies, and HSMs to build a complete key dependency map.' },
          { step: '02', title: 'HNDL Exposure & Risk Prioritization', desc: 'Quantify data longevity requirements and prioritize high-risk asymmetric key pairs for early migration.' },
          { step: '03', title: 'Hybrid PQC Architecture & Staging', desc: 'Deploy hybrid dual-key TLS endpoints and test lattice key exchange in sandbox environments.' },
          { step: '04', title: 'Production Migration & Agility Activation', desc: 'Execute zero-downtime algorithm upgrades and activate continuous cryptographic telemetry.' },
        ],
        relatedSolutions: [
          { title: 'Vulnerability Assessment & Penetration Testing (VAPT)', href: '/solutions/vapt' },
          { title: 'Governance, Risk & Compliance (GRC)', href: '/solutions/grc' },
          { title: 'Managed Security Services', href: '/solutions/managed-security' },
        ],
      }}
    />
  )
}
