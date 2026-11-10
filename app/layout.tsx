import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://infrys.com'),
  title: "Infrys Security Technologies | Security for What's Next.",
  description:
    'Enterprise cybersecurity, post-quantum cryptography (PQC) migration, crypto-agility architecture, VAPT, GRC, and 24/7 managed security services.',
  alternates: {
    canonical: 'https://infrys.com',
  },
  openGraph: {
    title: "Infrys Security Technologies | Security for What's Next.",
    description:
      'Protecting the systems, data and technologies that power modern enterprises through post-quantum cryptography and crypto-agile security.',
    url: 'https://infrys.com',
    siteName: 'Infrys Security Technologies',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#1D1E33' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
