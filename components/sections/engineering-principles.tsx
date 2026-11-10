'use client'

import React from 'react'

export function EngineeringPrinciples({ sectionNumber = '04' }: { sectionNumber?: string }) {
  const principles = [
    {
      num: '01',
      title: 'DISCOVER',
      headline: 'Know where cryptography exists.',
      desc: 'Identify every key, algorithm dependency, and PKI asset across applications, data stores, and cloud hardware.',
    },
    {
      num: '02',
      title: 'ASSESS',
      headline: 'Understand exposure and dependency.',
      desc: 'Evaluate Harvest-Now-Decrypt-Later (HNDL) risk models and quantify legacy asymmetric encryption vulnerabilities.',
    },
    {
      num: '03',
      title: 'ADAPT',
      headline: 'Design for algorithm and infrastructure change.',
      desc: 'Deploy decoupled crypto-agile abstraction layers supporting hot-swappable algorithm updates without downtime.',
    },
    {
      num: '04',
      title: 'VALIDATE',
      headline: 'Continuously verify security posture.',
      desc: 'Conduct automated cryptographic vulnerability testing and ensure ongoing alignment with NIST PQC standards.',
    },
  ]

  return (
    <section
      id="principles"
      style={{
        scrollMarginTop: 82,
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
            ENGINEERING PRINCIPLES / {sectionNumber}
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
            ENGINEERED FOR<br />
            <span style={{ color: '#F47117' }}>CHANGE.</span>
          </h2>
        </div>

        {/* 4 PRINCIPLES GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {principles.map((p) => (
            <div
              key={p.title}
              style={{
                background: '#FFFFFF',
                border: '1px solid #D9DCE3',
                padding: '32px 26px',
                borderRadius: 6,
              }}
            >
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#F47117', fontWeight: 600 }}>
                PRINCIPLE / {p.num}
              </span>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#1D1E33', margin: '10px 0 8px', fontWeight: 700 }}>
                {p.title}
              </h3>

              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: '#F47117', margin: '0 0 12px', fontWeight: 600 }}>
                {p.headline}
              </h4>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#63667A', lineHeight: 1.6, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
