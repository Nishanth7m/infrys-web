'use client'

import React from 'react'

export function TechnologyLandscape() {
  const pillars = [
    {
      num: '01',
      title: 'CRYPTOGRAPHIC FOUNDATIONS',
      desc: 'Mathematical primitives, symmetric key wrapping, and PKI identity trust securing data in transit and at rest.',
      href: '#cryptography',
      linkLabel: 'EXPLORE CRYPTOGRAPHY ↓',
    },
    {
      num: '02',
      title: 'HNDL EXPOSURE & RISK',
      desc: 'Active tracking of Harvest-Now-Decrypt-Later (HNDL) threats and asymmetric key dependencies across microservices and HSMs.',
      href: '#why-pqc',
      linkLabel: 'EXPLORE HNDL RISK ↓',
    },
    {
      num: '03',
      title: 'POST-QUANTUM TRANSITION',
      desc: 'NIST ML-KEM and ML-DSA lattice encryption shielding long-term confidential assets against future quantum decryption.',
      href: '#post-quantum-cryptography',
      linkLabel: 'EXPLORE PQC STANDARDS ↓',
    },
    {
      num: '04',
      title: 'ARCHITECTURAL ADAPTABILITY',
      desc: 'Decoupled crypto-agility abstraction layers enabling seamless zero-downtime algorithm hot-swapping.',
      href: '#crypto-agility',
      linkLabel: 'EXPLORE CRYPTO-AGILITY ↓',
    },
  ]

  return (
    <section
      style={{
        background: '#FEF3E5',
        color: '#1D1E33',
        padding: '90px 7vw',
        borderBottom: '1px solid rgba(29, 30, 51, 0.12)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, marginBottom: 56 }}>
          <div>
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
              THE TECHNOLOGY LANDSCAPE / 02
            </p>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(34px, 4.5vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                lineHeight: 1.08,
                margin: 0,
                color: '#1D1E33',
              }}
            >
              SECURITY CANNOT<br />
              <span style={{ color: '#F47117' }}>REMAIN STATIC.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                color: '#63667A',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Modern enterprise security can no longer treat cryptography as a static configuration file. As computational capabilities advance and NIST post-quantum mandates take effect, resilience requires an adaptable cryptographic lifecycle.
            </p>
          </div>
        </div>

        {/* STRUCTURED TECHNICAL SYSTEM GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {pillars.map((pillar) => (
            <a
              key={pillar.title}
              href={pillar.href}
              className="hover-card-enterprise"
              style={{
                textDecoration: 'none',
                background: '#FFFFFF',
                border: '1px solid #D9DCE3',
                padding: '32px 26px',
                borderRadius: 6,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    color: '#F47117',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    display: 'block',
                    marginBottom: 12,
                  }}
                >
                  SYSTEM PILLAR / {pillar.num}
                </span>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 16,
                    color: '#1D1E33',
                    fontWeight: 700,
                    margin: '0 0 12px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: '#63667A',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: '1px solid #D9DCE3',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 10,
                  color: '#F47117',
                  fontWeight: 600,
                }}
              >
                <span>{pillar.linkLabel}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
