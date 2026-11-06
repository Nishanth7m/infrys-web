'use client'

import React, { useState } from 'react'

export function TechnologyTransition() {
  const [activeStep, setActiveStep] = useState<number>(3)

  const steps = [
    {
      stage: '01',
      title: 'TODAY',
      subtitle: 'Classical Asymmetric Infrastructure',
      detail: 'RSA-2048 & ECDSA signatures securing traditional PKI, web TLS handshakes, and database encryption.',
      status: 'LEGACY EXPIRATION RISK',
    },
    {
      stage: '02',
      title: 'CRYPTOGRAPHIC INVENTORY',
      subtitle: 'Asset & Dependency Discovery',
      detail: 'Automated discovery of asymmetric keys, hardcoded certificate chains, and HSM algorithm dependencies across systems.',
      status: 'INVENTORY MAPPED',
    },
    {
      stage: '03',
      title: 'QUANTUM RISK',
      subtitle: 'Harvest-Now-Decrypt-Later Exposure',
      detail: 'Adversarial data harvesting targeting high-longevity confidential records before quantum computers arrive.',
      status: 'EXPOSURE EVALUATED',
    },
    {
      stage: '04',
      title: 'PQC MIGRATION',
      subtitle: 'NIST Standardized Lattice Deployment',
      detail: 'Deployment of ML-KEM (FIPS 203) key encapsulation & ML-DSA (FIPS 204) signatures alongside classical dual-keys.',
      status: 'PQC DEPLOYED',
    },
    {
      stage: '05',
      title: 'CRYPTO-AGILITY',
      subtitle: 'Decoupled Abstraction Layer',
      detail: 'Decoupled cryptographic brokers enabling hot-swappable algorithm replacement with zero downtime.',
      status: 'AGILITY ACTIVE',
    },
    {
      stage: '06',
      title: 'FUTURE SECURITY',
      subtitle: 'Living Enterprise Resilience',
      detail: 'Continuous telemetry, automated policy enforcement, and dynamic key rotation built for evolving threats.',
      status: 'FUTURE PROOF',
    },
  ]

  return (
    <section
      style={{
        background: '#FEF3E5',
        color: '#1D1E33',
        padding: '95px 7vw',
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
            CRYPTOGRAPHIC TRANSITION / 04
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
            FROM TODAY&apos;S CRYPTOGRAPHY<br />
            <span style={{ color: '#F47117' }}>TO WHAT COMES NEXT.</span>
          </h2>
        </div>

        {/* STEPPER TRACK & ACTIVE INSPECTOR */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
          {/* STEP SELECTION LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {steps.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  style={{
                    background: isActive ? '#FFFFFF' : 'rgba(29, 30, 51, 0.03)',
                    border: `1px solid ${isActive ? '#F47117' : 'rgba(29, 30, 51, 0.12)'}`,
                    borderRadius: 6,
                    padding: '16px 20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11,
                        color: isActive ? '#F47117' : '#63667A',
                        fontWeight: 600,
                      }}
                    >
                      {step.stage}
                    </span>
                    <strong
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 14,
                        color: isActive ? '#1D1E33' : '#63667A',
                        fontWeight: 600,
                      }}
                    >
                      {step.title}
                    </strong>
                  </div>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: isActive ? '#F47117' : '#63667A' }}>
                    {isActive ? 'ACTIVE SIGNAL →' : 'SELECT'}
                  </span>
                </div>
              )
            })}
          </div>

          {/* ACTIVE STEP INSPECTOR DISPLAY */}
          <div
            style={{
              background: '#1D1E33',
              color: '#FFFFFF',
              borderRadius: 8,
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(244, 113, 23, 0.35)',
              boxShadow: '0 12px 32px rgba(29, 30, 51, 0.2)',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  color: '#F47117',
                  letterSpacing: '0.14em',
                  display: 'block',
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                PHASE 0{activeStep + 1} INSPECTOR / {steps[activeStep].title}
              </span>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 24,
                  color: '#FFFFFF',
                  margin: '0 0 8px',
                  fontWeight: 700,
                }}
              >
                {steps[activeStep].subtitle}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: '#CBD0D9',
                  lineHeight: 1.7,
                  margin: '16px 0 0',
                }}
              >
                {steps[activeStep].detail}
              </p>
            </div>

            <div
              style={{
                marginTop: 32,
                paddingTop: 20,
                borderTop: '1px solid rgba(203, 208, 217, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#CBD0D9' }}>
                TRANSITION STATE
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  color: '#FEF3E5',
                  background: 'rgba(244, 113, 23, 0.2)',
                  padding: '4px 10px',
                  borderRadius: 4,
                  border: '1px solid rgba(244, 113, 23, 0.4)',
                  fontWeight: 600,
                }}
              >
                {steps[activeStep].status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
