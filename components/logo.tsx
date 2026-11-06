'use client'

import React from 'react'

interface LogoProps {
  variant?: 'icon' | 'full' | 'horizontal'
  theme?: 'dark' | 'light'
  className?: string
  width?: number | string
  height?: number | string
}

export function InfrysKeyIcon({ width = 48, height = 24, className = '' }: { width?: number | string; height?: number | string; className?: string }) {
  return (
    <img
      src="/infrys-key-symbol.png"
      alt="INFRYS Key Icon"
      width={width}
      height={height}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', height: 'auto', objectFit: 'contain' }}
    />
  )
}

export function InfrysHeaderLogo({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const subtextColor = theme === 'dark' ? '#CBD0D9' : '#1D1E33'
  const wordmarkSrc =
    theme === 'dark'
      ? '/infrys-wordmark-original-darkbg.png'
      : '/infrys-wordmark-original.png'

  return (
    <div
      className="infrys-brand-lockup"
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: 12,
        userSelect: 'none',
      }}
    >
      {/* 1. KEY SYMBOL — Centered directly with the INFRYS wordmark / letter I */}
      <div style={{ display: 'flex', alignItems: 'center', height: 22 }}>
        <img
          src="/infrys-key-symbol.png"
          alt="INFRYS Key Symbol"
          style={{
            height: 28,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
            flexShrink: 0,
            transform: 'translateY(-1px)',
          }}
        />
      </div>

      {/* 2. AUTHENTIC INFRYS GEOMETRIC WORDMARK + DESCRIPTOR */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={wordmarkSrc}
          alt="INFRYS"
          style={{
            height: 22,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 600,
            fontSize: 8.5,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: subtextColor,
            marginTop: 4,
            display: 'block',
            textAlign: 'center',
            width: '100%',
            whiteSpace: 'nowrap',
          }}
        >
          SECURITY TECHNOLOGIES
        </span>
      </div>
    </div>
  )
}

export function InfrysLogo({
  variant = 'full',
  theme = 'light',
  className = '',
  width,
  height = 46,
}: LogoProps) {
  if (variant === 'horizontal') {
    return <InfrysHeaderLogo theme={theme} />
  }

  const src =
    variant === 'icon'
      ? '/infrys-key-symbol.png'
      : theme === 'dark'
      ? '/infrys-logo-original-darkbg.png'
      : '/infrys-logo-original-transparent.png'

  return (
    <div className={`inline-flex items-center ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <img
        src={src}
        alt="INFRYS Security Technologies"
        style={{
          height: typeof height === 'number' ? `${height}px` : height,
          width: width ? (typeof width === 'number' ? `${width}px` : width) : 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  )
}
