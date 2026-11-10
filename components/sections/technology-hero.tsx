'use client'

import React, { useState } from 'react'
import { ArrowUpRight, Shield, Cpu, Lock, Layers, RefreshCw, KeyRound } from 'lucide-react'

export function TechnologyHero() {
  const [activeStack, setActiveStack] = useState<number | null>(4)

  const stackLayers = [
    { label: 'APPLICATIONS', desc: 'APIs, web gateways & enterprise microservices', icon: Shield },
    { label: 'DATA', desc: 'Database envelope encryption & hybrid blob storage', icon: Layers },
    { label: 'CRYPTOGRAPHIC SERVICES', desc: 'Abstraction layer & decoupled algorithm brokers', icon: Lock },
    { label: 'KEY MANAGEMENT', desc: 'PKI certificate authority & split-knowledge key wrapping', icon: KeyRound },
    { label: 'PQC', desc: 'NIST ML-KEM (FIPS 203) & ML-DSA (FIPS 204) lattice encryption', icon: Cpu },
    { label: 'HSM / CRYPTO-AGILITY', desc: 'Hardware security modules & hot-swappable providers', icon: RefreshCw },
    { label: 'SECURITY OPERATIONS', desc: 'Continuous cryptographic telemetry & SIEM compliance', icon: Shield },
  ]

  return (
    <section
      className="hero-technology"
      style={{
        background: '#1D1E33',
        color: '#FFFFFF',
        padding: '100px 7vw 90px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 60,
          alignItems: 'center',
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        {/* LEFT COLUMN: HERO CONTENT */}
        <div>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              color: '#CBD0D9',
              letterSpacing: '0.14em',
              marginBottom: 20,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ display: 'inline-block', width: 6, height: 6, background: '#F47117', borderRadius: '50%' }} />
            INFRYS TECHNOLOGY / 01
          </p>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(40px, 5.2vw, 68px)',
              fontWeight: 700,
              letterSpacing: '-0.06em',
              lineHeight: 1.05,
              margin: '0 0 24px',
              color: '#FFFFFF',
            }}
          >
            THE TECHNOLOGY<br />
            BEHIND SECURITY&apos;S<br />
            <span style={{ color: '#F47117' }}>NEXT ERA.</span>
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: '#CBD0D9',
              lineHeight: 1.65,
              maxWidth: 540,
              margin: '0 0 36px',
            }}
          >
            Cryptographic engineering, post-quantum readiness and security architecture for systems built to evolve.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              className="button-primary"
              href="#post-quantum-cryptography"
              style={{
                background: '#F47117',
                borderColor: '#F47117',
                color: '#FFFFFF',
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: '0.1em',
                padding: '16px 24px',
                borderRadius: 4,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 4px 14px rgba(244, 113, 23, 0.25)',
              }}
            >
              EXPLORE POST-QUANTUM CRYPTOGRAPHY <ArrowUpRight size={16} />
            </a>

            <a
              href="/contact"
              style={{
                background: 'transparent',
                border: '1px solid rgba(203, 208, 217, 0.4)',
                color: '#FFFFFF',
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: '0.1em',
                padding: '16px 24px',
                borderRadius: 4,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              TALK TO AN EXPERT
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: TECHNICAL ARCHITECTURAL STACK DIAGRAM (NAVIGATES TO #security-architecture) */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(203, 208, 217, 0.15)',
            borderRadius: 8,
            padding: '28px 24px',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, borderBottom: '1px solid rgba(203, 208, 217, 0.15)', paddingBottom: 12 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', letterSpacing: '0.12em', fontWeight: 600 }}>
              INFRYS ARCHITECTURAL STACK
            </span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#CBD0D9' }}>
              7-LAYER LIVING DEFENSE
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {stackLayers.map((layer, idx) => {
              const Icon = layer.icon
              const isActive = activeStack === idx
              return (
                <a
                  key={layer.label}
                  href="#security-architecture"
                  onMouseEnter={() => setActiveStack(idx)}
                  onFocus={() => setActiveStack(idx)}
                  style={{
                    textDecoration: 'none',
                    background: isActive ? 'rgba(244, 113, 23, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${isActive ? '#F47117' : 'rgba(203, 208, 217, 0.15)'}`,
                    borderRadius: 6,
                    padding: '12px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Icon size={16} style={{ color: isActive ? '#F47117' : '#CBD0D9' }} />
                    <div>
                      <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: isActive ? '#F47117' : '#FFFFFF', display: 'block' }}>
                        0{idx + 1} — {layer.label}
                      </strong>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#CBD0D9' }}>{layer.desc}</span>
                    </div>
                  </div>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: isActive ? '#F47117' : 'rgba(203, 208, 217, 0.5)' }}>
                    INSPECT ↓
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
