'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export function TechnologyPathways() {
  const pathways = [
    {
      title: 'CRYPTOGRAPHY',
      desc: 'Mathematical trust for critical enterprise infrastructure.',
      href: '/technology/cryptography',
    },
    {
      title: 'POST-QUANTUM CRYPTOGRAPHY',
      desc: 'NIST ML-KEM & ML-DSA lattice encryption standards.',
      href: '/technology/post-quantum-cryptography',
    },
    {
      title: 'CRYPTO-AGILITY',
      desc: 'Decoupled cryptographic brokers for hot-swappable algorithm updates.',
      href: '/technology/crypto-agility',
    },
    {
      title: 'SECURITY ARCHITECTURE',
      desc: 'Living 5-layer enterprise defense stack across applications & hardware.',
      href: '/technology/security-architecture',
    },
  ]

  return (
    <section
      style={{
        background: '#1D1E33',
        color: '#FFFFFF',
        padding: '100px 7vw 110px',
        borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 50 }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              color: '#CBD0D9',
              letterSpacing: '0.14em',
              marginBottom: 16,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', borderRadius: '50%' }} />
            TECHNOLOGY PATHWAYS / 07
          </p>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(36px, 4.8vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              lineHeight: 1.05,
              margin: 0,
              color: '#FFFFFF',
            }}
          >
            EXPLORE THE<br />
            <span style={{ color: '#F47117' }}>TECHNOLOGY.</span>
          </h2>
        </div>

        {/* 4 PATHWAYS LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {pathways.map((item) => (
            <a
              key={item.title}
              href={item.href}
              style={{
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(203, 208, 217, 0.18)',
                padding: '24px 30px',
                borderRadius: 8,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 20,
                alignItems: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#F47117'
                e.currentTarget.style.background = 'rgba(244, 113, 23, 0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(203, 208, 217, 0.18)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
              }}
            >
              <div>
                <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#FFFFFF', fontWeight: 700, display: 'block', marginBottom: 4 }}>
                  {item.title}
                </strong>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9' }}>
                  {item.desc}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#F47117', fontWeight: 600 }}>
                <span>EXPLORE ROUTE</span>
                <ArrowUpRight size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
