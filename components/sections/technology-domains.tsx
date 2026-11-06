'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export function TechnologyDomains() {
  const domains = [
    {
      num: '01',
      tag: 'FOUNDATIONAL MATH',
      title: 'CRYPTOGRAPHY',
      headline: 'TRUST IN THE MATHEMATICS.',
      desc: 'The cryptographic foundations that protect identities, communications, data and digital transactions.',
      href: '/technology/cryptography',
    },
    {
      num: '02',
      tag: 'POST-QUANTUM RESILIENCE',
      title: 'POST-QUANTUM CRYPTOGRAPHY',
      headline: 'PREPARE BEFORE THE THREAT ARRIVES.',
      desc: 'Assess cryptographic exposure and prepare enterprise systems for the post-quantum transition.',
      href: '/technology/post-quantum-cryptography',
    },
    {
      num: '03',
      tag: 'DECOUPLED ABSTRACTION',
      title: 'CRYPTO-AGILITY',
      headline: 'DECOUPLE CRYPTOGRAPHY FROM CODE.',
      desc: 'Design infrastructure that can adapt algorithms and cryptographic providers without rebuilding the entire application stack.',
      href: '/technology/crypto-agility',
    },
    {
      num: '04',
      tag: 'ENTERPRISE SYSTEM',
      title: 'SECURITY ARCHITECTURE',
      headline: 'ENGINEER SECURITY AS A SYSTEM.',
      desc: 'Connect applications, infrastructure, identity, cryptography and security controls into resilient enterprise architectures.',
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
        <div style={{ marginBottom: 56 }}>
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
            FOUR TECHNOLOGY DOMAINS / 03
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
            CORE CAPABILITIES OF THE<br />
            <span style={{ color: '#F47117' }}>INFRYS PLATFORM.</span>
          </h2>
        </div>

        {/* DOMAIN CARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
          {domains.map((card) => (
            <a
              key={card.title}
              href={card.href}
              style={{
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(203, 208, 217, 0.18)',
                padding: '36px 30px',
                borderRadius: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25 ease',
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600 }}>
                    DOMAIN {card.num}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#CBD0D9', letterSpacing: '0.1em' }}>
                    {card.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 20,
                    color: '#FFFFFF',
                    fontWeight: 700,
                    margin: '0 0 10px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {card.title}
                </h3>

                <h4
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14,
                    color: '#F47117',
                    fontWeight: 600,
                    margin: '0 0 16px',
                  }}
                >
                  {card.headline}
                </h4>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: '#CBD0D9',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: 32,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  color: '#F47117',
                  fontWeight: 600,
                }}
              >
                EXPLORE DOMAIN <ArrowUpRight size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
