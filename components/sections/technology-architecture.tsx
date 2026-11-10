'use client'

import React, { useState } from 'react'

export function TechnologyArchitecture() {
  const [activeLayer, setActiveLayer] = useState<number>(4)

  const architectureLayers = [
    {
      num: '01',
      name: 'APPLICATIONS',
      tech: 'Web, Mobile, SaaS & Microservice Mesh',
      detail: 'API gateways and application microservices interacting via crypto-agile broker tokens.',
    },
    {
      num: '02',
      name: 'DATA',
      tech: 'Database Envelope Encryption & Blob Storage',
      detail: 'High-speed symmetric data encryption backed by hybrid lattice key wrapping.',
    },
    {
      num: '03',
      name: 'CRYPTOGRAPHIC SERVICES',
      tech: 'Abstraction Layer & Algorithm Brokers',
      detail: 'Decoupled cryptographic brokers isolating application logic from underlying algorithm selection.',
    },
    {
      num: '04',
      name: 'KEY MANAGEMENT',
      tech: 'PKI Certificate Authority & Key Rotation',
      detail: 'Automated certificate lifecycle management, key generation, and split-knowledge key wrapping.',
    },
    {
      num: '05',
      name: 'PQC',
      tech: 'NIST ML-KEM (FIPS 203) & ML-DSA (FIPS 204)',
      detail: 'Quantum-resistant key encapsulation and lattice digital signatures built for long-term data security.',
    },
    {
      num: '06',
      name: 'HSM / CRYPTO-AGILITY',
      tech: 'Hardware Security Modules & Dynamic Providers',
      detail: 'Tamper-resistant HSM firmware supporting hot-swappable algorithm updates without service interruption.',
    },
    {
      num: '07',
      name: 'SECURITY OPERATIONS',
      tech: 'Continuous Telemetry & Compliance SIEM',
      detail: 'Real-time cryptographic telemetry monitoring key usage, algorithm decay, and regulatory audit compliance.',
    },
  ]

  return (
    <div>
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          color: '#F47117',
          letterSpacing: '0.14em',
          fontWeight: 600,
          display: 'block',
          marginBottom: 20,
        }}
      >
        INTERACTIVE 7-LAYER ENTERPRISE SECURITY ARCHITECTURE INSPECTOR
      </span>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(24px, 4vw, 32px)' }}>
        {/* LAYERS LIST (SEMANTIC BUTTONS) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {architectureLayers.map((layer, idx) => {
            const isActive = activeLayer === idx
            return (
              <button
                key={layer.name}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveLayer(idx)}
                onMouseEnter={() => setActiveLayer(idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: isActive ? 'rgba(244, 113, 23, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${isActive ? '#F47117' : 'rgba(203, 208, 217, 0.15)'}`,
                  borderRadius: 6,
                  padding: '14px 20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: isActive ? '#F47117' : '#CBD0D9', fontWeight: 600 }}>
                    {layer.num}
                  </span>
                  <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: isActive ? '#FFFFFF' : '#CBD0D9', fontWeight: 600 }}>
                    {layer.name}
                  </strong>
                </div>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: isActive ? '#F47117' : 'rgba(203, 208, 217, 0.4)' }}>
                  {isActive ? 'INSPECTING' : 'LAYER 0' + (idx + 1)}
                </span>
              </button>
            )
          })}
        </div>

        {/* INSPECTOR PANEL */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(244, 113, 23, 0.4)',
            borderRadius: 8,
            padding: '36px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', letterSpacing: '0.14em', display: 'block', marginBottom: 12, fontWeight: 600 }}>
              LAYER 0{activeLayer + 1} SPECIFICATION
            </span>

            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, color: '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>
              {architectureLayers[activeLayer].name}
            </h3>

            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#F47117', margin: '0 0 16px', fontWeight: 500 }}>
              {architectureLayers[activeLayer].tech}
            </p>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#CBD0D9', lineHeight: 1.65, margin: 0 }}>
              {architectureLayers[activeLayer].detail}
            </p>
          </div>

          <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid rgba(203, 208, 217, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#CBD0D9' }}>STATUS</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#FEF3E5', background: 'rgba(244, 113, 23, 0.2)', padding: '4px 10px', borderRadius: 4 }}>
              ACTIVE LAYER
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
