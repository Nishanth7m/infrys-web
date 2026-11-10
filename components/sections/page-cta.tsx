'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface PageCTAProps {
  eyebrow?: string
  headingLine1?: string
  headingLine2?: string
  supportingText?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function PageCTA({
  eyebrow = 'THE INFRYS SIGNAL',
  headingLine1 = 'READY TO BUILD FOR',
  headingLine2 = "WHAT'S NEXT?",
  supportingText = 'Start a conversation with Infrys security engineers and post-quantum specialists.',
  primaryCtaText = 'TALK TO AN EXPERT',
  primaryCtaHref = '/contact',
  secondaryCtaText = 'EXPLORE PQC ROADMAP',
  secondaryCtaHref = '/technology#post-quantum-cryptography',
}: PageCTAProps) {
  return (
    <section
      className="final-cta"
      id="contact"
      style={{
        background: '#F47117',
        color: '#FFFFFF',
        padding: '120px 7vw 130px',
        textAlign: 'left',
        position: 'relative',
      }}
    >
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          color: '#FFFFFF',
          letterSpacing: '0.14em',
          marginBottom: 16,
          fontWeight: 600,
          textTransform: 'uppercase',
        }}
      >
        <span style={{ display: 'inline-block', width: 6, height: 6, background: '#FFFFFF', marginRight: 8, borderRadius: '50%' }} />
        {eyebrow}
      </p>

      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(44px, 6.5vw, 88px)',
          letterSpacing: '-0.07em',
          lineHeight: 0.9,
          margin: '20px 0 24px',
          color: '#FFFFFF',
          fontWeight: 700,
        }}
      >
        {headingLine1}<br />
        <span style={{ color: '#1D1E33' }}>{headingLine2}</span>
      </h2>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 18,
          color: '#FFFFFF',
          opacity: 0.95,
          maxWidth: 520,
          margin: '0 0 36px',
          lineHeight: 1.6,
        }}
      >
        {supportingText}
      </p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <a
          className="button-primary"
          href={primaryCtaHref}
          style={{
            background: '#1D1E33',
            borderColor: '#1D1E33',
            color: '#FFFFFF',
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: '0.1em',
            padding: '16px 26px',
            borderRadius: 6,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          {primaryCtaText} <ArrowUpRight size={16} />
        </a>

        {secondaryCtaText && (
          <a
            className="button-primary"
            href={secondaryCtaHref}
            style={{
              background: 'transparent',
              borderColor: '#FFFFFF',
              color: '#FFFFFF',
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.1em',
              padding: '16px 26px',
              borderRadius: 6,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            {secondaryCtaText}
          </a>
        )}
      </div>
    </section>
  )
}
