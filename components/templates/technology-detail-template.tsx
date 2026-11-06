'use client'

import React from 'react'
import { ArrowUpRight, ChevronRight, CheckCircle2 } from 'lucide-react'
import { EnterpriseHeader } from '@/components/header'
import { PageCTA } from '@/components/sections/page-cta'
import { EnterpriseFooter } from '@/components/sections/footer'

export interface TechDetailSpec {
  domainId: string
  eyebrow: string
  title: string
  titleHighlight: string
  subtitle: string
  overviewHeading: string
  overviewCopy1: string
  overviewCopy2: string
  keyCapabilities: { title: string; desc: string }[]
  technicalSpecs: { label: string; value: string }[]
  architectureLayers?: { num: string; title: string; desc: string }[]
  standardsList?: { code: string; title: string; desc: string }[]
  relatedPages: { title: string; href: string }[]
}

export function TechnologyDetailTemplate({ spec }: { spec: TechDetailSpec }) {
  return (
    <main className="site-shell" style={{ background: '#1D1E33', color: '#FFFFFF', minHeight: '100vh' }}>
      {/* 00 HEADER */}
      <EnterpriseHeader />

      {/* 01 SUBPAGE HERO (NAVY #1D1E33) */}
      <section
        style={{
          background: '#1D1E33',
          color: '#FFFFFF',
          padding: '90px 7vw 80px',
          borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* BREADCRUMB */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#CBD0D9', marginBottom: 24 }}>
            <a href="/" style={{ color: '#CBD0D9', textDecoration: 'none' }}>HOME</a>
            <ChevronRight size={12} style={{ color: '#F47117' }} />
            <a href="/technology" style={{ color: '#CBD0D9', textDecoration: 'none' }}>TECHNOLOGY</a>
            <ChevronRight size={12} style={{ color: '#F47117' }} />
            <span style={{ color: '#F47117', fontWeight: 600 }}>{spec.domainId.toUpperCase()}</span>
          </div>

          <div style={{ maxWidth: 840 }}>
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
              {spec.eyebrow}
            </p>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(38px, 5vw, 64px)',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                lineHeight: 1.05,
                margin: '0 0 24px',
                color: '#FFFFFF',
              }}
            >
              {spec.title}<br />
              <span style={{ color: '#F47117' }}>{spec.titleHighlight}</span>
            </h1>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                color: '#CBD0D9',
                lineHeight: 1.65,
                margin: '0 0 36px',
              }}
            >
              {spec.subtitle}
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a
                className="button-primary"
                href="/contact"
                style={{
                  background: '#F47117',
                  borderColor: '#F47117',
                  color: '#FFFFFF',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  padding: '14px 24px',
                  borderRadius: 4,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                TALK TO AN EXPERT <ArrowUpRight size={15} />
              </a>

              <a
                href="#overview"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(203, 208, 217, 0.4)',
                  color: '#FFFFFF',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  padding: '14px 24px',
                  borderRadius: 4,
                  textDecoration: 'none',
                }}
              >
                EXPLORE SPECIFICATIONS ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02 TECHNICAL OVERVIEW (CREAM #FEF3E5) */}
      <section
        id="overview"
        style={{
          background: '#FEF3E5',
          color: '#1D1E33',
          padding: '90px 7vw',
          borderBottom: '1px solid rgba(29, 30, 51, 0.12)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60 }}>
          <div>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              TECHNICAL OVERVIEW / 02
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(30px, 3.8vw, 48px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0, color: '#1D1E33' }}>
              {spec.overviewHeading}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#63667A', lineHeight: 1.75 }}>
            <p style={{ margin: 0 }}>{spec.overviewCopy1}</p>
            <p style={{ margin: 0 }}>{spec.overviewCopy2}</p>
          </div>
        </div>
      </section>

      {/* 03 KEY CAPABILITIES & SPECIFICATIONS (NAVY #1D1E33) */}
      <section
        style={{
          background: '#1D1E33',
          color: '#FFFFFF',
          padding: '95px 7vw',
          borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              CAPABILITIES &amp; ARCHITECTURE / 03
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0, color: '#FFFFFF' }}>
              ENGINEERING CAPABILITIES.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 56 }}>
            {spec.keyCapabilities.map((cap) => (
              <div
                key={cap.title}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(203, 208, 217, 0.18)',
                  padding: '28px 24px',
                  borderRadius: 6,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <CheckCircle2 size={18} style={{ color: '#F47117' }} />
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: '#FFFFFF', margin: 0, fontWeight: 700 }}>
                    {cap.title}
                  </h3>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#CBD0D9', lineHeight: 1.6, margin: 0 }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          {/* SPECIFICATIONS GRID */}
          <div style={{ background: 'rgba(244, 113, 23, 0.04)', border: '1px solid rgba(244, 113, 23, 0.3)', borderRadius: 8, padding: '32px 36px' }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', letterSpacing: '0.14em', display: 'block', marginBottom: 20, fontWeight: 600 }}>
              TECHNICAL MATRIX &amp; SPECIFICATIONS
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
              {spec.technicalSpecs.map((s) => (
                <div key={s.label}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#CBD0D9', display: 'block', marginBottom: 4 }}>
                    {s.label}
                  </span>
                  <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: '#FEF3E5', fontWeight: 600 }}>
                    {s.value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 STANDARDS / LAYERS SECTION (CREAM #FEF3E5) */}
      {(spec.standardsList || spec.architectureLayers) && (
        <section
          style={{
            background: '#FEF3E5',
            color: '#1D1E33',
            padding: '90px 7vw',
            borderBottom: '1px solid rgba(29, 30, 51, 0.12)',
          }}
        >
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ marginBottom: 44 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 12 }}>
                STANDARDS &amp; FRAMEWORKS / 04
              </span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(30px, 3.8vw, 48px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0, color: '#1D1E33' }}>
                COMPLIANCE &amp; IMPLEMENTATION.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {(spec.standardsList || []).map((std) => (
                <div key={std.code} style={{ background: '#FFFFFF', border: '1px solid #D9DCE3', padding: '28px 24px', borderRadius: 6 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                    {std.code}
                  </span>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: '#1D1E33', margin: '0 0 10px', fontWeight: 700 }}>
                    {std.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#63667A', lineHeight: 1.6, margin: 0 }}>
                    {std.desc}
                  </p>
                </div>
              ))}

              {(spec.architectureLayers || []).map((layer) => (
                <div key={layer.num} style={{ background: '#FFFFFF', border: '1px solid #D9DCE3', padding: '28px 24px', borderRadius: 6 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                    LAYER {layer.num}
                  </span>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: '#1D1E33', margin: '0 0 10px', fontWeight: 700 }}>
                    {layer.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#63667A', lineHeight: 1.6, margin: 0 }}>
                    {layer.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 RELATED TECHNOLOGY PAGES (NAVY #1D1E33) */}
      <section
        style={{
          background: '#1D1E33',
          color: '#FFFFFF',
          padding: '90px 7vw',
          borderBottom: '1px solid rgba(203, 208, 217, 0.15)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#CBD0D9', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 20 }}>
            EXPLORE RELATED DOMAINS / 05
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {spec.relatedPages.map((rel) => (
              <a
                key={rel.title}
                href={rel.href}
                style={{
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(203, 208, 217, 0.18)',
                  padding: '24px 24px',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
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
                <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: '#FFFFFF', fontWeight: 600 }}>
                  {rel.title}
                </strong>
                <ArrowUpRight size={16} style={{ color: '#F47117' }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 06 FINAL CTA (ORANGE #F47117) */}
      <PageCTA
        eyebrow={`INFRYS ${spec.domainId.toUpperCase()} SIGNAL`}
        headingLine1="READY TO SECURE YOUR"
        headingLine2="CRYPTOGRAPHIC FUTURE?"
        supportingText="Connect with Infrys security specialists for technical assessments and post-quantum migration planning."
        primaryCtaText="TALK TO AN EXPERT"
        primaryCtaHref="/contact"
        secondaryCtaText="EXPLORE ALL TECHNOLOGY"
        secondaryCtaHref="/technology"
      />

      {/* 07 FOOTER (NAVY #1D1E33) */}
      <EnterpriseFooter />
    </main>
  )
}
