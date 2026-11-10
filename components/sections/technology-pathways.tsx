'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export function TechnologyPathways() {
  const pathways = [
    {
      kicker: 'SOLUTIONS // CRYPTOGRAPHY & PQC',
      title: 'POST-QUANTUM MIGRATION SERVICES',
      desc: 'Discover cryptographic dependencies, deploy hybrid ML-KEM / ML-DSA key exchange, and modernize enterprise HSMs.',
      href: '/solutions#cryptography-pqc',
      cta: 'EXPLORE PQC SOLUTIONS',
    },
    {
      kicker: 'SOLUTIONS // OFFENSIVE SECURITY',
      title: 'VULNERABILITY ASSESSMENT & PENETRATION TESTING',
      desc: 'Validate application, API, cloud, and cryptographic implementations against real-world adversarial exploit chains.',
      href: '/solutions#vapt',
      cta: 'EXPLORE VAPT SOLUTIONS',
    },
    {
      kicker: 'INDUSTRIES // SECTOR ARCHITECTURE',
      title: 'INDUSTRY-SPECIFIC SECURITY ARCHITECTURES',
      desc: 'See how Infrys applies cryptographic resilience across Financial Services, Healthcare, Telecom, Government, and Critical Infrastructure.',
      href: '/industries',
      cta: 'EXPLORE 7 INDUSTRIES',
    },
    {
      kicker: 'INSIGHTS // TECHNICAL ROADMAPS',
      title: 'PQC MIGRATION GUIDES & RESEARCH BRIEFS',
      desc: 'Read our four-stage CBOM discovery, HNDL prioritization, and crypto-agile broker implementation guides.',
      href: '/insights#pqc',
      cta: 'READ MIGRATION GUIDES',
    },
  ]

  return (
    <section
      style={{
        background: '#FEF3E5',
        color: '#1D1E33',
        padding: '100px 7vw 110px',
        borderBottom: '1px solid rgba(29, 30, 51, 0.12)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 50 }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              color: '#1D1E33',
              letterSpacing: '0.14em',
              marginBottom: 16,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', borderRadius: '50%' }} />
            PUT TECHNOLOGY INTO PRACTICE / 09
          </p>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(36px, 4.8vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              lineHeight: 1.05,
              margin: 0,
              color: '#1D1E33',
            }}
          >
            FROM ARCHITECTURE TO<br />
            <span style={{ color: '#F47117' }}>DEPLOYMENT.</span>
          </h2>
        </div>

        {/* 4 FORWARD CROSS-NAVIGATION PATHWAYS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {pathways.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="hover-card-enterprise"
              style={{
                textDecoration: 'none',
                background: '#FFFFFF',
                border: '1px solid #D9DCE3',
                padding: '26px 30px',
                borderRadius: 8,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 20,
                alignItems: 'center',
              }}
            >
              <div>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', fontWeight: 600, letterSpacing: '0.12em', display: 'block', marginBottom: 6 }}>
                  {item.kicker}
                </span>
                <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#1D1E33', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                  {item.title}
                </strong>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#63667A', lineHeight: 1.5 }}>
                  {item.desc}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600 }}>
                <span>{item.cta}</span>
                <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
