'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react'

import { InfrysHeaderLogo } from '@/components/logo'

type NavCategory = 'TECHNOLOGY' | 'SOLUTIONS' | 'INDUSTRIES' | 'INSIGHTS' | 'COMPANY'

const CATEGORY_ROUTES: Record<NavCategory, string> = {
  TECHNOLOGY: '/technology',
  SOLUTIONS: '/solutions',
  INDUSTRIES: '/industries',
  INSIGHTS: '/insights',
  COMPANY: '/company',
}

const MEGA_MENUS: Record<NavCategory, { label: string; desc: string; href: string }[]> = {
  TECHNOLOGY: [
    { label: 'Cryptography', desc: 'Mathematical trust for critical enterprise infrastructure.', href: '/technology/cryptography' },
    { label: 'Post-Quantum Cryptography', desc: 'NIST-standardized lattice-based protection against quantum threat.', href: '/technology/post-quantum-cryptography' },
    { label: 'Crypto-Agility', desc: 'Decoupled cryptographic layer for hot-swappable algorithms.', href: '/technology/crypto-agility' },
    { label: 'Security Architecture', desc: '5-layer living defense stack across applications, data, and hardware.', href: '/technology/security-architecture' },
  ],
  SOLUTIONS: [
    { label: 'VAPT', desc: 'Vulnerability Assessment & Penetration Testing to find attack paths.', href: '/solutions/vapt' },
    { label: 'GRC', desc: 'Governance, Risk & Compliance aligned with modern obligations.', href: '/solutions/grc' },
    { label: 'Cryptography & PQC', desc: 'Cryptographic modernization and post-quantum migration.', href: '/solutions/cryptography-pqc' },
    { label: 'Managed Security', desc: 'Continuous security monitoring, intelligence, and incident response.', href: '/solutions/managed-security' },
  ],
  INDUSTRIES: [
    { label: 'Financial Services', desc: 'High-frequency transaction encryption & regulatory GRC.', href: '/industries/financial-services' },
    { label: 'Healthcare', desc: 'Long-term patient telemetry & HIPPA encrypted data protection.', href: '/industries/healthcare' },
    { label: 'Technology', desc: 'SaaS PKI, microservice mesh TLS, and cloud infrastructure.', href: '/industries/technology' },
    { label: 'Telecommunications', desc: '5G core signal encryption & subscriber identity security.', href: '/industries/telecommunications' },
    { label: 'Manufacturing', desc: 'OT/ICS firmware integrity & supply chain hardware security.', href: '/industries/manufacturing' },
    { label: 'Government & Critical Infrastructure', desc: 'State-secret longevity & national security PQC migration.', href: '/industries/government' },
  ],
  INSIGHTS: [
    { label: 'Research', desc: 'Peer-reviewed studies on quantum risk timelines & lattice resilience.', href: '/insights/research' },
    { label: 'PQC Migration Guides', desc: 'Actionable migration roadmaps for enterprise CISOs.', href: '/insights/pqc' },
    { label: 'Cryptography', desc: 'Deep-dives into symmetric key wrapping & asymmetric vulnerabilities.', href: '/insights/cryptography' },
    { label: 'Security Architecture', desc: 'Design patterns for zero-downtime algorithm hot-swapping.', href: '/insights/security-architecture' },
    { label: 'GRC & Standards', desc: 'NIST FIPS 203, 204, 205 compliance frameworks.', href: '/insights/grc' },
  ],
  COMPANY: [
    { label: 'About INFRYS', desc: 'Engineered for what’s next in enterprise security technologies.', href: '/company/about' },
    { label: 'How We Work', desc: 'Our 6-phase engineering process from assessment to resilience.', href: '/company/how-we-work' },
    { label: 'Insights & Research', desc: 'Explore our latest technical briefs and PQC publications.', href: '/insights' },
    { label: 'Contact Us', desc: 'Connect with our cryptographic security experts.', href: '/contact' },
  ],
}

export function EnterpriseHeader() {
  const [activeMenu, setActiveMenu] = useState<NavCategory | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header
      className="enterprise-header"
      onMouseLeave={() => setActiveMenu(null)}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 82,
        background: '#FEF3E5',
        borderBottom: '1px solid rgba(29, 30, 51, 0.15)',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5vw',
        color: '#1D1E33',
      }}
    >
      {/* Brand Logo - Controlled HTML/CSS Lockup */}
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <InfrysHeaderLogo theme="light" />
      </a>

      {/* Desktop Navigation Links */}
      <nav className="desktop-nav" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {(Object.keys(MEGA_MENUS) as NavCategory[]).map((cat) => (
          <div
            key={cat}
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveMenu(cat)}
          >
            <a
              href={CATEGORY_ROUTES[cat]}
              onClick={(e) => {
                // Allow direct navigation to main category page while toggling mega-menu
              }}
              aria-expanded={activeMenu === cat}
              style={{
                background: 'none',
                border: 0,
                color: activeMenu === cat ? '#F47117' : '#1D1E33',
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: '28px 0',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {cat}
              <ChevronDown
                size={14}
                style={{
                  transform: activeMenu === cat ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                  color: activeMenu === cat ? '#F47117' : '#1D1E33',
                }}
              />
            </a>
          </div>
        ))}
      </nav>

      {/* Right Action CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <a
          className="button-primary"
          href="/contact"
          style={{
            background: '#F47117',
            borderColor: '#F47117',
            color: '#FFFFFF',
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 500,
            fontSize: 11,
            letterSpacing: '0.1em',
            padding: '12px 20px',
            borderRadius: 4,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: '0 2px 6px rgba(244, 113, 23, 0.2)',
          }}
        >
          TALK TO AN EXPERT <ArrowUpRight size={14} />
        </a>

        <button
          className="mobile-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 0,
            color: '#1D1E33',
            cursor: 'pointer',
            padding: 8,
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mega Menu Dropdown Layer */}
      {activeMenu && (
        <div
          className="mega-menu-overlay"
          style={{
            position: 'absolute',
            top: 82,
            left: 0,
            right: 0,
            background: '#FEF3E5',
            borderBottom: '1px solid rgba(29, 30, 51, 0.18)',
            boxShadow: '0 20px 40px rgba(29, 30, 51, 0.12)',
            padding: '32px 5vw 40px',
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: 40,
            animation: 'menuFade 0.2s ease-out forwards',
          }}
        >
          <div style={{ borderRight: '1px solid rgba(29, 30, 51, 0.15)', paddingRight: 32 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#F47117', letterSpacing: '0.12em', display: 'block', marginBottom: 12, fontWeight: 500 }}>
              CATEGORY / {activeMenu}
            </span>
            <h4 style={{ margin: '0 0 16px', fontSize: 18, color: '#1D1E33', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>
              Enterprise {activeMenu.toLowerCase()} solutions built for what’s next.
            </h4>
            <a
              href={CATEGORY_ROUTES[activeMenu]}
              onClick={() => setActiveMenu(null)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 11,
                fontFamily: "'IBM Plex Mono', monospace",
                color: '#F47117',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              EXPLORE {activeMenu} OVERVIEW <ArrowUpRight size={13} />
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {MEGA_MENUS[activeMenu].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveMenu(null)}
                style={{
                  textDecoration: 'none',
                  background: '#FFFFFF',
                  border: '1px solid rgba(29, 30, 51, 0.12)',
                  padding: '16px 20px',
                  borderRadius: 6,
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(244, 113, 23, 0.6)'
                  e.currentTarget.style.background = 'rgba(244, 113, 23, 0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(29, 30, 51, 0.12)'
                  e.currentTarget.style.background = '#FFFFFF'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: 14, color: '#1D1E33', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>{item.label}</strong>
                  <ArrowUpRight size={14} style={{ color: '#F47117' }} />
                </div>
                <p style={{ margin: 0, fontSize: 12, color: '#63667A', lineHeight: 1.5, fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: 'absolute',
            top: 82,
            left: 0,
            right: 0,
            background: '#FEF3E5',
            borderBottom: '1px solid rgba(29, 30, 51, 0.2)',
            padding: '24px 7vw 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {(Object.keys(MEGA_MENUS) as NavCategory[]).map((cat) => (
            <div key={cat} style={{ borderBottom: '1px solid rgba(29,30,51,0.1)', paddingBottom: 16 }}>
              <a
                href={CATEGORY_ROUTES[cat]}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                  fontSize: 12,
                  color: '#F47117',
                  letterSpacing: '0.12em',
                  display: 'block',
                  marginBottom: 10,
                  textDecoration: 'none',
                }}
              >
                {cat} →
              </a>
              <div style={{ display: 'grid', gap: 10, paddingLeft: 12 }}>
                {MEGA_MENUS[cat].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{ textDecoration: 'none', color: '#1D1E33', fontSize: 14, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
