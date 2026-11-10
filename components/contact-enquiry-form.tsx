'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUpRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react'

const ENQUIRY_TOPICS = [
  'Post-Quantum Cryptography (PQC) Migration',
  'Vulnerability Assessment & Penetration Testing (VAPT)',
  'Governance, Risk & Compliance (GRC)',
  'Crypto-Agility & Security Architecture',
  'Managed Security Services (24/7 SOC)',
  'Sector-Specific Security Consultation',
  'Technical Briefing / Publication Request',
  'Careers / Expression of Interest',
  'General Enterprise Security Enquiry',
]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function ContactEnquiryForm() {
  const [fullName, setFullName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [role, setRole] = useState('')
  const [topic, setTopic] = useState(ENQUIRY_TOPICS[0])
  const [message, setMessage] = useState('')
  const [privacyConsent, setPrivacyConsent] = useState(false)
  const [websiteHoneypot, setWebsiteHoneypot] = useState('')
  const [startedAt, setStartedAt] = useState<number>(0)

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState('')

  useEffect(() => {
    setStartedAt(Date.now())
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const queryTopic = params.get('topic')
      if (queryTopic) {
        const q = queryTopic.toLowerCase()
        const exactOrSubstring = ENQUIRY_TOPICS.find(
          (t) => t.toLowerCase().includes(q) || q.includes(t.toLowerCase())
        )
        if (exactOrSubstring) {
          setTopic(exactOrSubstring)
        } else if (q.includes('career') || q.includes('interest')) {
          setTopic('Careers / Expression of Interest')
        } else if (q.includes('vapt') || q.includes('vulnerability') || q.includes('penetration')) {
          setTopic('Vulnerability Assessment & Penetration Testing (VAPT)')
        } else if (q.includes('grc') || q.includes('governance')) {
          setTopic('Governance, Risk & Compliance (GRC)')
        } else if (q.includes('managed')) {
          setTopic('Managed Security Services (24/7 SOC)')
        } else if (q.includes('agility') || q.includes('architecture')) {
          setTopic('Crypto-Agility & Security Architecture')
        } else if (q.includes('pqc') || q.includes('quantum') || q.includes('cryptography')) {
          setTopic('Post-Quantum Cryptography (PQC) Migration')
        } else if (q.includes('consultation')) {
          setTopic('Sector-Specific Security Consultation')
          setMessage((prev) => (prev ? prev : `Regarding: ${queryTopic}\n\n`))
        } else {
          setTopic('Technical Briefing / Publication Request')
          setMessage((prev) => (prev ? prev : `Regarding: ${queryTopic}\n\n`))
        }
      }
    }
  }, [])

  function validateClient(): Record<string, string> {
    const errors: Record<string, string> = {}
    if (fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name.'
    }
    if (!EMAIL_REGEX.test(workEmail.trim())) {
      errors.workEmail = 'Please enter a valid work email address.'
    }
    if (organization.trim().length < 2) {
      errors.organization = 'Please enter your organization name.'
    }
    if (role.trim().length < 2) {
      errors.role = 'Please enter your professional role or title.'
    }
    if (!topic.trim()) {
      errors.topic = 'Please select an enquiry topic.'
    }
    if (message.trim().length < 20) {
      errors.message = 'Please enter at least 20 characters describing your security requirements.'
    }
    if (!privacyConsent) {
      errors.privacyConsent = 'Please acknowledge the Privacy Policy before submitting.'
    }
    return errors
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const clientErrors = validateClient()
    setFieldErrors(clientErrors)

    if (Object.keys(clientErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('submitting')
    setServerMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          workEmail: workEmail.trim(),
          organization: organization.trim(),
          role: role.trim(),
          topic,
          message: message.trim(),
          privacyConsent,
          website_url: websiteHoneypot,
          startedAt,
        }),
      })

      const data = await res.json().catch(() => null)

      if (res.ok && data?.delivered === true) {
        setStatus('success')
        setServerMessage(
          data.message ||
            'Your security enquiry has been delivered to the Infrys engineering desk. A specialist will respond via work email.'
        )
        setFullName('')
        setWorkEmail('')
        setOrganization('')
        setRole('')
        setMessage('')
        setPrivacyConsent(false)
        setStartedAt(Date.now())
      } else {
        setStatus('error')
        if (data?.fieldErrors) {
          setFieldErrors(data.fieldErrors)
        }
        setServerMessage(
          data?.error ||
            'Automated email delivery could not be completed. Please dispatch your enquiry directly to info@infrys.com using the button below.'
        )
      }
    } catch {
      setStatus('error')
      setServerMessage(
        'Network error while connecting to the enquiry service. Your message was not sent automatically. Please use the direct email button below.'
      )
    }
  }

  const fallbackMailtoHref = `mailto:info@infrys.com?subject=${encodeURIComponent(
    `[Infrys Enquiry] ${topic} — ${organization || 'Enterprise'}`
  )}&body=${encodeURIComponent(
    `Full Name: ${fullName}\nWork Email: ${workEmail}\nOrganization: ${organization}\nRole: ${role}\nTopic: ${topic}\n\nMessage:\n${message}`
  )}`

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '13px 16px',
    borderRadius: 6,
    border: '1px solid #D9DCE3',
    background: '#FFFFFF',
    color: '#1D1E33',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.1em',
    color: '#1D1E33',
    marginBottom: 8,
  }

  const errorTextStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'Inter', sans-serif",
    fontSize: 12,
    color: '#C93B2B',
    marginTop: 6,
  }

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #D9DCE3',
        borderRadius: 8,
        padding: '40px 36px',
        boxShadow: '0 12px 32px rgba(29, 30, 51, 0.06)',
      }}
    >
      <div style={{ marginBottom: 28 }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#F47117', letterSpacing: '0.14em', fontWeight: 600, display: 'block', marginBottom: 8 }}>
          ENTERPRISE SECURITY ENQUIRY // DIRECT DISPATCH
        </span>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(26px, 3.2vw, 36px)', color: '#1D1E33', margin: '0 0 10px', fontWeight: 700, letterSpacing: '-0.03em' }}>
          Schedule a Technical Consultation
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#63667A', lineHeight: 1.6, margin: 0 }}>
          Complete the form below to connect with Infrys cryptographic engineers, VAPT specialists, or GRC advisors.
        </p>
      </div>

      {status === 'success' && (
        <div
          role="status"
          aria-live="polite"
          style={{
            background: '#1D1E33',
            color: '#FFFFFF',
            border: '1px solid #F47117',
            borderRadius: 8,
            padding: '24px',
            marginBottom: 28,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <CheckCircle2 size={20} style={{ color: '#F47117' }} />
            <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, color: '#FFFFFF' }}>
              Enquiry Delivered
            </strong>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#CBD0D9', lineHeight: 1.6, margin: 0 }}>
            {serverMessage}
          </p>
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            background: '#FFF5F2',
            color: '#1D1E33',
            border: '1px solid #F47117',
            borderRadius: 8,
            padding: '24px',
            marginBottom: 28,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <AlertTriangle size={20} style={{ color: '#F47117', flexShrink: 0 }} />
            <strong style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: '#1D1E33' }}>
              Automated Delivery Unavailable — Action Required
            </strong>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#4A4D61', lineHeight: 1.6, margin: '0 0 16px' }}>
            {serverMessage}
          </p>
          <a
            href={fallbackMailtoHref}
            style={{
              background: '#1D1E33',
              color: '#FFFFFF',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              padding: '12px 20px',
              borderRadius: 4,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            OPEN PRE-FILLED EMAIL TO INFO@INFRYS.COM <ArrowUpRight size={14} />
          </a>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot anti-spam field (hidden from assistive tech & visual users) */}
        <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
          <label htmlFor="contact-website-url">Website URL (Leave blank)</label>
          <input
            id="contact-website-url"
            name="website_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={websiteHoneypot}
            onChange={(e) => setWebsiteHoneypot(e.target.value)}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 20 }}>
          <div>
            <label htmlFor="contact-full-name" style={labelStyle}>
              FULL NAME <span style={{ color: '#F47117' }}>*</span>
            </label>
            <input
              id="contact-full-name"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. Arjun Mehta"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              aria-invalid={Boolean(fieldErrors.fullName)}
              style={{
                ...inputStyle,
                borderColor: fieldErrors.fullName ? '#C93B2B' : '#D9DCE3',
              }}
            />
            {fieldErrors.fullName && <span style={errorTextStyle}>{fieldErrors.fullName}</span>}
          </div>

          <div>
            <label htmlFor="contact-work-email" style={labelStyle}>
              WORK EMAIL <span style={{ color: '#F47117' }}>*</span>
            </label>
            <input
              id="contact-work-email"
              name="workEmail"
              type="email"
              required
              autoComplete="email"
              placeholder="name@enterprise.com"
              value={workEmail}
              onChange={(e) => setWorkEmail(e.target.value)}
              aria-invalid={Boolean(fieldErrors.workEmail)}
              style={{
                ...inputStyle,
                borderColor: fieldErrors.workEmail ? '#C93B2B' : '#D9DCE3',
              }}
            />
            {fieldErrors.workEmail && <span style={errorTextStyle}>{fieldErrors.workEmail}</span>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 20 }}>
          <div>
            <label htmlFor="contact-organization" style={labelStyle}>
              ORGANIZATION <span style={{ color: '#F47117' }}>*</span>
            </label>
            <input
              id="contact-organization"
              name="organization"
              type="text"
              required
              autoComplete="organization"
              placeholder="Organization or Agency Name"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              aria-invalid={Boolean(fieldErrors.organization)}
              style={{
                ...inputStyle,
                borderColor: fieldErrors.organization ? '#C93B2B' : '#D9DCE3',
              }}
            />
            {fieldErrors.organization && <span style={errorTextStyle}>{fieldErrors.organization}</span>}
          </div>

          <div>
            <label htmlFor="contact-role" style={labelStyle}>
              ROLE / TITLE <span style={{ color: '#F47117' }}>*</span>
            </label>
            <input
              id="contact-role"
              name="role"
              type="text"
              required
              autoComplete="organization-title"
              placeholder="e.g. CISO, VP of Security, Principal Architect"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              aria-invalid={Boolean(fieldErrors.role)}
              style={{
                ...inputStyle,
                borderColor: fieldErrors.role ? '#C93B2B' : '#D9DCE3',
              }}
            />
            {fieldErrors.role && <span style={errorTextStyle}>{fieldErrors.role}</span>}
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label htmlFor="contact-topic" style={labelStyle}>
            ENQUIRY TOPIC <span style={{ color: '#F47117' }}>*</span>
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            aria-invalid={Boolean(fieldErrors.topic)}
            style={{
              ...inputStyle,
              borderColor: fieldErrors.topic ? '#C93B2B' : '#D9DCE3',
            }}
          >
            {ENQUIRY_TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {fieldErrors.topic && <span style={errorTextStyle}>{fieldErrors.topic}</span>}
        </div>

        <div style={{ marginBottom: 20 }}>
          <label htmlFor="contact-message" style={labelStyle}>
            SECURITY REQUIREMENTS / MESSAGE <span style={{ color: '#F47117' }}>*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Describe your infrastructure scope, regulatory timeline, or post-quantum assessment goals..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
            style={{
              ...inputStyle,
              resize: 'vertical',
              borderColor: fieldErrors.message ? '#C93B2B' : '#D9DCE3',
            }}
          />
          {fieldErrors.message && <span style={errorTextStyle}>{fieldErrors.message}</span>}
        </div>

        <div style={{ marginBottom: 24 }}>
          <label
            htmlFor="contact-privacy-consent"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: '#4A4D61',
              lineHeight: 1.5,
            }}
          >
            <input
              id="contact-privacy-consent"
              name="privacyConsent"
              type="checkbox"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              style={{ marginTop: 3, accentColor: '#F47117' }}
            />
            <span>
              I consent to Infrys Security Technologies LLP processing my business contact details solely to respond to this security enquiry in accordance with the{' '}
              <a href="/privacy-policy" style={{ color: '#F47117', fontWeight: 600 }}>
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" style={{ color: '#F47117', fontWeight: 600 }}>
                Terms of Use
              </a>
              .
            </span>
          </label>
          {fieldErrors.privacyConsent && <span style={errorTextStyle}>{fieldErrors.privacyConsent}</span>}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="button-primary"
            style={{
              background: '#F47117',
              borderColor: '#F47117',
              color: '#FFFFFF',
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.1em',
              padding: '16px 28px',
              borderRadius: 4,
              border: '1px solid #F47117',
              cursor: status === 'submitting' ? 'wait' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              opacity: status === 'submitting' ? 0.75 : 1,
            }}
          >
            {status === 'submitting' ? 'DISPATCHING ENQUIRY...' : 'SUBMIT SECURITY ENQUIRY'}
            <ArrowUpRight size={16} />
          </button>

          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#63667A' }}>
            <ShieldCheck size={14} style={{ color: '#F47117' }} />
            PRIVACY-CONSCIOUS HANDLING · NO MARKETING LISTS
          </span>
        </div>
      </form>
    </div>
  )
}

