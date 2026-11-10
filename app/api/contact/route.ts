import { NextRequest } from 'next/server'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5
const ipRequestLog = new Map<string, number[]>()

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const ALLOWED_TOPICS = new Set([
  'Post-Quantum Cryptography (PQC) Migration',
  'Vulnerability Assessment & Penetration Testing (VAPT)',
  'Governance, Risk & Compliance (GRC)',
  'Crypto-Agility & Security Architecture',
  'Managed Security Services (24/7 SOC)',
  'Technical Briefing / Publication Request',
  'General Enterprise Security Enquiry',
])

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const recent = (ipRequestLog.get(ip) || []).filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS)
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequestLog.set(ip, recent)
    return false
  }
  recent.push(now)
  ipRequestLog.set(ip, recent)
  return true
}

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for')
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : 'local'

    if (!checkRateLimit(clientIp)) {
      return Response.json(
        {
          delivered: false,
          error: 'Too many enquiry attempts from this network. Please wait a few minutes or email info@infrys.com directly.',
        },
        { status: 429 }
      )
    }

    const body = await request.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return Response.json(
        { delivered: false, error: 'Invalid request payload.' },
        { status: 400 }
      )
    }

    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : ''
    const workEmail = typeof body.workEmail === 'string' ? body.workEmail.trim() : ''
    const organization = typeof body.organization === 'string' ? body.organization.trim() : ''
    const role = typeof body.role === 'string' ? body.role.trim() : ''
    const topic = typeof body.topic === 'string' ? body.topic.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const websiteHoneypot = typeof body.website_url === 'string' ? body.website_url.trim() : ''
    const startedAt = typeof body.startedAt === 'number' ? body.startedAt : 0
    const privacyConsent = Boolean(body.privacyConsent)

    // Spam protection: Honeypot check & minimum submission timing check
    if (websiteHoneypot.length > 0) {
      return Response.json(
        { delivered: false, error: 'Automated spam submission rejected.' },
        { status: 400 }
      )
    }

    if (startedAt > 0 && Date.now() - startedAt < 1200) {
      return Response.json(
        { delivered: false, error: 'Submission occurred too quickly. Please review your details and try again.' },
        { status: 400 }
      )
    }

    // Server-side field validation
    const fieldErrors: Record<string, string> = {}
    if (fullName.length < 2 || fullName.length > 120) {
      fieldErrors.fullName = 'Please enter your full name (2–120 characters).'
    }
    if (!EMAIL_REGEX.test(workEmail) || workEmail.length > 160) {
      fieldErrors.workEmail = 'Please enter a valid work email address.'
    }
    if (organization.length < 2 || organization.length > 160) {
      fieldErrors.organization = 'Please enter your organization name.'
    }
    if (role.length < 2 || role.length > 120) {
      fieldErrors.role = 'Please enter your professional role or title.'
    }
    if (topic.length < 2 || topic.length > 160) {
      fieldErrors.topic = 'Please select an enquiry topic.'
    }
    if (message.length < 20 || message.length > 4000) {
      fieldErrors.message = 'Please provide a brief project or security description (20–4000 characters).'
    }
    if (!privacyConsent) {
      fieldErrors.privacyConsent = 'Please acknowledge the Privacy Policy to submit your enquiry.'
    }

    if (Object.keys(fieldErrors).length > 0) {
      return Response.json(
        {
          delivered: false,
          error: 'Please correct the highlighted fields and try again.',
          fieldErrors,
        },
        { status: 422 }
      )
    }

    const normalizedTopic = ALLOWED_TOPICS.has(topic) ? topic : `Enterprise Enquiry: ${topic}`

    // Verify configured email provider (Resend HTTP API)
    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@infrys.com'
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Infrys Security Desk <onboarding@resend.dev>'

    if (!resendApiKey) {
      // Strictly never claim success when email provider is not configured
      return Response.json(
        {
          delivered: false,
          code: 'EMAIL_PROVIDER_UNCONFIGURED',
          error:
            'Automated email dispatch is not currently configured on this environment (RESEND_API_KEY missing). Your enquiry was validated but has NOT been sent automatically. Please use the direct email dispatch button below to send your pre-filled enquiry to info@infrys.com.',
        },
        { status: 503 }
      )
    }

    const htmlBody = `
      <div style="font-family: system-ui, -apple-system, sans-serif; color: #1D1E33; max-width: 640px; line-height: 1.6;">
        <h2 style="color: #1D1E33; border-bottom: 2px solid #F47117; padding-bottom: 8px;">
          New Enterprise Security Enquiry — Infrys
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr><td style="padding: 6px 0; font-weight: 600; width: 160px;">Full Name:</td><td>${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Work Email:</td><td>${escapeHtml(workEmail)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Organization:</td><td>${escapeHtml(organization)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Role / Title:</td><td>${escapeHtml(role)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Enquiry Topic:</td><td>${escapeHtml(normalizedTopic)}</td></tr>
        </table>
        <div style="background: #FEF3E5; padding: 16px; border-left: 3px solid #F47117; border-radius: 4px;">
          <strong>Message:</strong>
          <p style="white-space: pre-wrap; margin: 8px 0 0;">${escapeHtml(message)}</p>
        </div>
      </div>
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: workEmail,
        subject: `[Infrys Enquiry] ${normalizedTopic} — ${organization}`,
        html: htmlBody,
      }),
    })

    if (!resendResponse.ok) {
      return Response.json(
        {
          delivered: false,
          code: 'EMAIL_DELIVERY_FAILED',
          error:
            'The email delivery service returned an error and your enquiry could not be dispatched automatically. Please send your pre-filled enquiry directly to info@infrys.com using the button below.',
        },
        { status: 502 }
      )
    }

    return Response.json(
      {
        delivered: true,
        message:
          'Your security enquiry has been delivered to the Infrys engineering desk. A specialist will respond via work email.',
      },
      { status: 200 }
    )
  } catch {
    return Response.json(
      {
        delivered: false,
        error:
          'An unexpected server error occurred while dispatching your enquiry. Please use the direct email link to info@infrys.com.',
      },
      { status: 500 }
    )
  }
}

