'use client'

import React, { useState } from 'react'
import { InfrysHeaderLogo } from '@/components/logo'

export function EnterpriseFooter() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const navColumns = [
    {
      title: 'SOLUTIONS',
      links: [
        { label: 'VAPT (Offensive Security)', href: '/solutions#vapt' },
        { label: 'Governance, Risk & Compliance', href: '/solutions#grc' },
        { label: 'Cryptography & PQC Migration', href: '/solutions#cryptography-pqc' },
        { label: 'Managed Security (24/7 SOC)', href: '/solutions#managed-security' },
      ],
    },
    {
      title: 'TECHNOLOGY',
      links: [
        { label: 'Cryptography', href: '/technology#cryptography' },
        { label: 'Post-Quantum Cryptography', href: '/technology#post-quantum-cryptography' },
        { label: 'Crypto-Agility', href: '/technology#crypto-agility' },
        { label: '7-Layer Security Architecture', href: '/technology#security-architecture' },
        { label: 'Why PQC & HNDL Risk', href: '/technology#why-pqc' },
      ],
    },
    {
      title: 'INDUSTRIES',
      links: [
        { label: 'Financial Services', href: '/industries#financial-services' },
        { label: 'Healthcare', href: '/industries#healthcare' },
        { label: 'Technology', href: '/industries#technology' },
        { label: 'Telecommunications', href: '/industries#telecommunications' },
        { label: 'Manufacturing', href: '/industries#manufacturing' },
        { label: 'Government', href: '/industries#government' },
        { label: 'Critical Infrastructure', href: '/industries#critical-infrastructure' },
      ],
    },
    {
      title: 'INSIGHTS',
      links: [
        { label: 'Technical Research', href: '/insights#research' },
        { label: 'PQC Migration Guides', href: '/insights#pqc' },
        { label: 'Reference Architectures', href: '/insights#frameworks' },
        { label: 'GRC & Compliance Briefs', href: '/insights#grc' },
        { label: 'Publications & Briefings', href: '/insights#resources' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'About Infrys', href: '/company#about' },
        { label: 'Core Capabilities', href: '/company#capabilities' },
        { label: 'How We Work', href: '/company#how-we-work' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  ]

  return (
    <footer
      className="site-footer"
      style={{
        background: '#FEF3E5',
        color: '#1D1E33',
        position: 'relative',
        overflow: 'hidden',
        borderTop: 'none',
        borderBottom: 'none',
        marginTop: 0,
        marginBottom: 0,
        padding: 0,
        transform: 'none',
      }}
    >
      {/* RESPONSIVE CSS INJECTION FOR MNC GRID LAYOUT */}
      <style jsx>{`
        .site-footer {
          background: #FEF3E5 !important;
          color: #1D1E33 !important;
          margin-top: 0 !important;
          border-top: none !important;
          transform: none !important;
        }
        .site-footer a {
          color: #1D1E33 !important;
        }
        .site-footer a:hover {
          color: #F47117 !important;
        }
        .infrys-footer-container {
          width: calc(100% - 96px);
          max-width: none;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 44px 48px 24px;
        }
        .infrys-footer-nav-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.1fr 1fr 1fr 0.9fr;
          gap: 32px;
          border-top: 1px solid rgba(29, 30, 51, 0.15);
          padding: 28px 0;
        }
        .infrys-footer-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.2fr;
          gap: 32px;
          border-top: 1px solid rgba(29, 30, 51, 0.15);
          padding: 20px 0;
        }

        @media (max-width: 1120px) {
          .infrys-footer-container {
            width: 100%;
            padding: 32px 4vw 18px;
          }
          .infrys-footer-nav-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }
          .infrys-footer-contact-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .infrys-footer-container {
            padding: 24px 4vw 14px;
          }
          .infrys-footer-nav-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }
          .infrys-footer-contact-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }
      `}</style>

      <div className="infrys-footer-container">
        {/* LAYER 01 — COMPACT BRAND ROW */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 24,
            paddingBottom: 28,
          }}
        >
          {/* LEFT — BRAND LOCKUP */}
          <div>
            <a href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              <InfrysHeaderLogo theme="light" />
            </a>
          </div>

          {/* RIGHT — ENTERPRISE POSITIONING */}
          <div style={{ maxWidth: 380 }}>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: '#F47117',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 6,
              }}
            >
              CYBERSECURITY · CRYPTOGRAPHY · POST-QUANTUM
            </span>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: '#1D1E33',
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              Engineering security architectures for evolving enterprise environments.
            </p>
          </div>
        </div>

        {/* LAYER 02 — NAVIGATION GRID (5 COLUMNS) */}
        <nav aria-label="Footer Navigation" className="infrys-footer-nav-grid">
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: '#F47117',
                  textTransform: 'uppercase',
                  margin: '0 0 14px',
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((link) => {
                  const isHovered = hoveredLink === link.href + link.label
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(link.href + link.label)}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          fontWeight: 500,
                          color: isHovered ? '#F47117' : '#1D1E33',
                          textDecoration: 'none',
                          transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                          lineHeight: 1.4,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                        }}
                      >
                        <span>{link.label}</span>
                        <span
                          style={{
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? 'translateX(3px)' : 'translateX(-4px)',
                            transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                            fontSize: 13,
                            color: '#F47117',
                            display: 'inline-block',
                            lineHeight: 1,
                          }}
                        >
                          →
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* LAYER 03 — CONTACT ROW */}
        <div className="infrys-footer-contact-grid">
          {/* EMAIL */}
          <div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.12em',
                color: '#F47117',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 4,
                fontWeight: 600,
              }}
            >
              EMAIL INQUIRIES
            </span>
            <a
              href="mailto:info@infrys.com"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: '#1D1E33',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F47117')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1D1E33')}
            >
              info@infrys.com
            </a>
          </div>

          {/* PHONE */}
          <div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.12em',
                color: '#F47117',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 4,
                fontWeight: 600,
              }}
            >
              TELEPHONE SUPPORT
            </span>
            <a
              href="tel:+919916800685"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: '#1D1E33',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F47117')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1D1E33')}
            >
              +91 9916800685
            </a>
          </div>

          {/* LOCATION & ADDRESS */}
          <div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.12em',
                color: '#F47117',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 4,
                fontWeight: 600,
              }}
            >
              HEADQUARTERS
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: '#1D1E33',
                display: 'block',
              }}
            >
              Bengaluru, India
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                color: '#4A4D61',
                display: 'block',
                marginTop: 3,
                lineHeight: 1.4,
                maxWidth: 360,
              }}
            >
              11th Floor, Prestige Tech Park, Platina 2, Outer Ring Road, Kadubeesanahalli, Bengaluru, Karnataka 560103
            </span>
          </div>
        </div>

        {/* LAYER 04 — COPYRIGHT / LEGAL BAR */}
        <div
          style={{
            borderTop: '1px solid rgba(29, 30, 51, 0.15)',
            paddingTop: 16,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          {/* COPYRIGHT */}
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              fontWeight: 500,
              color: '#4A4D61',
            }}
          >
            © 2026 Infrys Security Technologies LLP. All rights reserved.
          </span>

          {/* LEGAL LINKS */}
          <div style={{ display: 'flex', gap: 20, fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, fontWeight: 500 }}>
            <a
              href="/privacy-policy"
              style={{ color: '#4A4D61', textDecoration: 'none', transition: 'color 200ms ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F47117')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A4D61')}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              style={{ color: '#4A4D61', textDecoration: 'none', transition: 'color 200ms ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F47117')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A4D61')}
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
