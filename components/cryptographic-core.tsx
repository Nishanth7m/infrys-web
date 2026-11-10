'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

// ============================================================================
// INFRYS — CENTRAL CRYPTOGRAPHIC HUD, ORBITAL SYSTEM & INTERACTIVE NODES
// Single Fixed Central Anchor (shared with WebGL 3-beam intersection):
// - Desktop (> 1024px):   left: 62%, top: 51%  (WebGL: vec2(aspect * 0.24, -0.02))
// - Tablet (801–1024px):  left: 60%, top: 52%  (WebGL: vec2(aspect * 0.20, -0.04))
// - Mobile (<= 800px):    left: 50%, top: 66%  (WebGL: vec2(0.0, -0.32))
// All SVG layers use viewBox="0 0 760 760" with fixed center (380, 380) (50% 50%).
// ============================================================================

const CX = 380
const CY = 380

const DEGREE_TICKS = Array.from({ length: 72 }, (_, idx) => {
  const deg = idx * 5
  const isMajor = deg % 30 === 0
  const isMedium = !isMajor && deg % 15 === 0
  const innerR = 136
  const outerR = isMajor ? 145 : isMedium ? 142 : 139.5
  const rad = (deg * Math.PI) / 180
  const x1 = Number((CX + Math.cos(rad) * innerR).toFixed(2))
  const y1 = Number((CY + Math.sin(rad) * innerR).toFixed(2))
  const x2 = Number((CX + Math.cos(rad) * outerR).toFixed(2))
  const y2 = Number((CY + Math.sin(rad) * outerR).toFixed(2))
  return { deg, isMajor, isMedium, x1, y1, x2, y2 }
})

export function CryptographicCore() {
  const waveCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = waveCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = motionQuery.matches

    let width = 0
    let height = 0
    let dpr = 1
    let animationFrameId = 0

    let targetMouseX = 0
    let targetMouseY = 0
    let currentMouseX = 0
    let currentMouseY = 0

    const resize = () => {
      const parent = canvas.parentElement
      width = parent ? parent.clientWidth : window.innerWidth
      height = parent ? parent.clientHeight : window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
    }

    const onPointerMove = (e: PointerEvent) => {
      if (reducedMotion) return
      const nx = (e.clientX / Math.max(1, window.innerWidth)) * 2 - 1
      const ny = (e.clientY / Math.max(1, window.innerHeight)) * 2 - 1
      targetMouseX = nx
      targetMouseY = ny
    }

    const onPointerLeave = () => {
      targetMouseX = 0
      targetMouseY = 0
    }

    // Shared central coordinate reference matching WebGL shader & CSS anchor
    const getJunctionCenter = (w: number, h: number) => {
      if (w > 1024) {
        return { cx: w * 0.62, cy: h * 0.51 }
      }
      if (w > 800) {
        return { cx: w * 0.60, cy: h * 0.52 }
      }
      return { cx: w * 0.50, cy: h * 0.66 }
    }

    const drawParticleWaves = (now: number) => {
      const t = reducedMotion ? 2.4 : now * 0.001

      currentMouseX += (targetMouseX - currentMouseX) * 0.04
      currentMouseY += (targetMouseY - currentMouseY) * 0.04

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      const { cx, cy } = getJunctionCenter(width, height)
      const isMobile = width <= 800
      const isTablet = width > 800 && width <= 1024

      const colsA = isMobile ? 32 : isTablet ? 48 : 68
      const rowsA = isMobile ? 12 : isTablet ? 18 : 26

      const colsB = isMobile ? 22 : isTablet ? 34 : 48
      const rowsB = isMobile ? 8 : isTablet ? 12 : 16

      const fov = 560
      const parX = currentMouseX * 14
      const parY = currentMouseY * 10

      // --- WAVE SHEET A: Primary flowing cryptographic data topography ---
      const spanWidthA = width * (isMobile ? 1.05 : 0.88)
      const depthSpanA = isMobile ? 210 : 340
      const startXA = cx - spanWidthA * 0.52
      const baseYA = cy + (isMobile ? 65 : 105)

      for (let r = 0; r < rowsA; r++) {
        const v = r / Math.max(1, rowsA - 1)
        const zWorld = (v - 0.35) * depthSpanA

        for (let c = 0; c < colsA; c++) {
          const u = c / Math.max(1, colsA - 1)
          const xWorld = startXA + u * spanWidthA - cx + (v - 0.5) * 90
          const slopeY = (0.5 - u) * (isMobile ? 95 : 175)

          const phase1 = u * 7.2 - t * 0.65 + v * 2.8
          const phase2 = u * 4.4 + t * 0.42 - v * 3.4
          const phase3 = (u - v) * 5.5 - t * 0.3

          const waveH =
            Math.sin(phase1) * (isMobile ? 22 : 38) +
            Math.cos(phase2) * (isMobile ? 14 : 26) +
            Math.sin(phase3) * 10

          const yWorld = baseYA - cy + slopeY + waveH
          const scale = fov / Math.max(140, fov + zWorld)
          const sx = cx + xWorld * scale + parX * (1.1 - v * 0.5)
          const sy = cy + yWorld * scale + parY * (1.1 - v * 0.5)

          if (sx < -10 || sx > width + 10 || sy < -10 || sy > height + 10) continue

          const crest = Math.max(0, Math.min(1, (Math.sin(phase1) + Math.cos(phase2) + 1.4) * 0.38))
          const distFromCenter = Math.hypot(sx - cx, sy - cy)

          const coreClearance = Math.min(1, Math.max(0.15, (distFromCenter - 26) / 72))
          const edgeFade = Math.sin(u * Math.PI) * Math.sin(v * Math.PI)
          const alpha = Math.min(0.82, (0.12 + crest * 0.52) * edgeFade * coreClearance * scale)

          if (alpha < 0.03) continue

          const ptRadius = Math.max(0.65, (0.82 + crest * 0.7) * scale)

          if (crest > 0.62) {
            ctx.fillStyle = `rgba(244, 113, 23, ${alpha.toFixed(3)})`
          } else if (crest > 0.42) {
            ctx.fillStyle = `rgba(254, 243, 229, ${(alpha * 0.82).toFixed(3)})`
          } else {
            ctx.fillStyle = `rgba(203, 208, 217, ${(alpha * 0.58).toFixed(3)})`
          }

          ctx.beginPath()
          ctx.arc(sx, sy, ptRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // --- WAVE SHEET B: Upper-right harmonic counter-wave ---
      const spanWidthB = width * (isMobile ? 0.75 : 0.52)
      const depthSpanB = isMobile ? 160 : 250
      const startXB = cx - spanWidthB * 0.18
      const baseYB = cy - (isMobile ? 15 : 28)

      for (let r = 0; r < rowsB; r++) {
        const v = r / Math.max(1, rowsB - 1)
        const zWorld = (v - 0.3) * depthSpanB

        for (let c = 0; c < colsB; c++) {
          const u = c / Math.max(1, colsB - 1)
          const xWorld = startXB + u * spanWidthB - cx + (v - 0.5) * 65
          const slopeY = (0.3 - u) * (isMobile ? 45 : 85)

          const phase1 = u * 6.4 - t * 0.52 - v * 2.5
          const phase2 = u * 3.8 + t * 0.36 + v * 3.1
          const waveH =
            Math.sin(phase1) * (isMobile ? 16 : 30) +
            Math.cos(phase2) * (isMobile ? 12 : 20)

          const yWorld = baseYB - cy + slopeY + waveH
          const scale = fov / Math.max(140, fov + zWorld)
          const sx = cx + xWorld * scale + parX * (0.8 - v * 0.4)
          const sy = cy + yWorld * scale + parY * (0.8 - v * 0.4)

          if (sx < -10 || sx > width + 10 || sy < -10 || sy > height + 10) continue

          const crest = Math.max(0, Math.min(1, (Math.sin(phase1) + Math.cos(phase2) + 1.3) * 0.36))
          const edgeFade = Math.sin(u * Math.PI) * Math.sin(v * Math.PI)
          const alpha = Math.min(0.68, (0.09 + crest * 0.44) * edgeFade * scale)

          if (alpha < 0.03) continue

          const ptRadius = Math.max(0.6, (0.72 + crest * 0.62) * scale)
          ctx.fillStyle =
            crest > 0.55
              ? `rgba(244, 113, 23, ${alpha.toFixed(3)})`
              : `rgba(254, 243, 229, ${(alpha * 0.7).toFixed(3)})`

          ctx.beginPath()
          ctx.arc(sx, sy, ptRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(drawParticleWaves)
      }
    }

    const onMotionChange = () => {
      reducedMotion = motionQuery.matches
      cancelAnimationFrame(animationFrameId)
      drawParticleWaves(performance.now())
    }

    resize()
    drawParticleWaves(performance.now())

    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave, { passive: true })
    motionQuery.addEventListener('change', onMotionChange)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      motionQuery.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <div className="infrys-crypto-enhancement">
      {/* Flowing Mathematical Particle Data Waves */}
      <canvas ref={waveCanvasRef} className="infrys-particle-waves" aria-hidden="true" />

      {/* SINGLE FIXED CENTRAL ANCHOR (permanently locked to the 3-beam orange intersection) */}
      <div className="infrys-junction-anchor">
        {/* Static Central Convergence Glow */}
        <div className="infrys-junction-glow" aria-hidden="true" />

        {/* LAYER 1: STATIC BASE CIRCLES, RADIAL AXES, TICKS & NODE LEADER LINES (NEVER MOVES) */}
        <svg
          className="infrys-hud-svg"
          viewBox="0 0 760 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="infrysCorePulseGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FEF3E5" stopOpacity="0.32" />
              <stop offset="38%" stopColor="#F47117" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#1D1E33" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Static Central Radial Glow (opacity pulse only, fixed at CX, CY) */}
          <circle cx={CX} cy={CY} r="64" fill="url(#infrysCorePulseGrad)" className="hud-core-pulse" />

          {/* Static Radial Measurement Axes */}
          <g className="hud-radial-axes" opacity="0.25">
            <line x1={CX - 248} y1={CY} x2={CX - 46} y2={CY} stroke="#CBD0D9" strokeWidth="0.6" strokeDasharray="2 5" />
            <line x1={CX + 46} y1={CY} x2={CX + 248} y2={CY} stroke="#CBD0D9" strokeWidth="0.6" strokeDasharray="2 5" />
            <line x1={CX} y1={CY - 248} x2={CX} y2={CY - 46} stroke="#CBD0D9" strokeWidth="0.6" strokeDasharray="2 5" />
            <line x1={CX} y1={CY + 46} x2={CX} y2={CY + 248} stroke="#CBD0D9" strokeWidth="0.6" strokeDasharray="2 5" />
            <line x1={CX - 145} y1={CY - 145} x2={CX - 38} y2={CY - 38} stroke="#F47117" strokeWidth="0.55" strokeDasharray="1.5 6" />
            <line x1={CX + 38} y1={CY + 38} x2={CX + 145} y2={CY + 145} stroke="#F47117" strokeWidth="0.55" strokeDasharray="1.5 6" />
          </g>

          {/* Static Concentric Base Rings (Fixed centered circles at r=54, 96, 136, 176, 182, 234) */}
          <circle cx={CX} cy={CY} r="54" stroke="#FEF3E5" strokeOpacity="0.22" strokeWidth="0.75" />
          <circle cx={CX} cy={CY} r="96" stroke="#CBD0D9" strokeOpacity="0.16" strokeWidth="0.7" />
          <circle cx={CX} cy={CY} r="136" stroke="#F47117" strokeOpacity="0.22" strokeWidth="0.65" />
          <circle cx={CX} cy={CY} r="176" stroke="#CBD0D9" strokeOpacity="0.15" strokeWidth="0.6" strokeDasharray="3 7" />
          <circle cx={CX} cy={CY} r="182" stroke="#F47117" strokeOpacity="0.24" strokeWidth="0.85" />
          <circle cx={CX} cy={CY} r="234" stroke="#CBD0D9" strokeOpacity="0.14" strokeWidth="0.65" />

          {/* Static Polar Degree Ticks around r=136 */}
          <g className="hud-ring-ticks">
            {DEGREE_TICKS.map((t) => (
              <line
                key={t.deg}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                stroke={t.isMajor ? '#F47117' : '#CBD0D9'}
                strokeOpacity={t.isMajor ? '0.75' : t.isMedium ? '0.42' : '0.22'}
                strokeWidth={t.isMajor ? '1.05' : '0.65'}
              />
            ))}
          </g>

          {/* Static Ambient Field Reticles */}
          <g className="hud-field-reticles" opacity="0.56">
            <g transform={`translate(${CX - 75}, ${CY - 278})`}>
              <line x1="-28" y1="0" x2="12" y2="0" stroke="#F47117" strokeWidth="0.7" strokeDasharray="1.5 3" />
              <path d="M 18 -4 L 18 4 M 14 0 L 22 0" stroke="#FEF3E5" strokeWidth="0.9" />
            </g>
            <g transform={`translate(${CX - 86}, ${CY + 266})`}>
              <line x1="-18" y1="-2" x2="-18" y2="2" stroke="#F47117" strokeWidth="1" />
              <line x1="-12" y1="-2" x2="-12" y2="2" stroke="#F47117" strokeWidth="1" />
              <line x1="-6" y1="-3" x2="-6" y2="3" stroke="#FEF3E5" strokeWidth="1.1" />
              <line x1="0" y1="-2" x2="0" y2="2" stroke="#F47117" strokeWidth="1" />
              <line x1="6" y1="-2" x2="6" y2="2" stroke="#F47117" strokeWidth="1" />
            </g>
            <g transform={`translate(${CX + 278}, ${CY - 32})`}>
              <line x1="-14" y1="0" x2="14" y2="0" stroke="#F47117" strokeWidth="0.75" strokeDasharray="2 3" />
              <circle cx="0" cy="0" r="1.8" fill="#F47117" />
              <path d="M 18 -3.5 L 18 3.5 M 14.5 0 L 21.5 0" stroke="#FEF3E5" strokeWidth="0.85" />
            </g>
          </g>

          {/* Static Connected Technical Leader Lines & Traveling Light Pulses */}
          <g className="hud-node-connections">
            {/* Connection 01 -> CRYPTOGRAPHY (Upper-Left) */}
            <polyline
              points={`${CX - 116},${CY - 102} ${CX - 158},${CY - 162} ${CX - 346},${CY - 162}`}
              stroke="#CBD0D9"
              strokeOpacity="0.38"
              strokeWidth="0.9"
            />
            <polyline
              points={`${CX - 116},${CY - 102} ${CX - 158},${CY - 162} ${CX - 346},${CY - 162}`}
              stroke="#F47117"
              strokeWidth="1.35"
              strokeDasharray="42 280"
              strokeLinecap="round"
              className="hud-leader-pulse pulse-delay-1"
            />
            <circle cx={CX - 116} cy={CY - 102} r="5.5" fill="#F47117" fillOpacity="0.24" className="hud-anchor-halo halo-delay-1" />
            <circle cx={CX - 116} cy={CY - 102} r="2.8" fill="#FEF3E5" stroke="#F47117" strokeWidth="1.4" />

            {/* Connection 02 -> PQC READINESS (Upper-Right) */}
            <polyline
              points={`${CX + 114},${CY - 106} ${CX + 156},${CY - 162} ${CX + 358},${CY - 162}`}
              stroke="#CBD0D9"
              strokeOpacity="0.38"
              strokeWidth="0.9"
            />
            <polyline
              points={`${CX + 114},${CY - 106} ${CX + 156},${CY - 162} ${CX + 358},${CY - 162}`}
              stroke="#F47117"
              strokeWidth="1.35"
              strokeDasharray="42 280"
              strokeLinecap="round"
              className="hud-leader-pulse pulse-delay-2"
            />
            <circle cx={CX + 114} cy={CY - 106} r="5.5" fill="#F47117" fillOpacity="0.24" className="hud-anchor-halo halo-delay-2" />
            <circle cx={CX + 114} cy={CY - 106} r="2.8" fill="#FEF3E5" stroke="#F47117" strokeWidth="1.4" />

            {/* Connection 03 -> CRYPTO-AGILITY (Lower-Right) */}
            <polyline
              points={`${CX + 94},${CY + 126} ${CX + 138},${CY + 184} ${CX + 340},${CY + 184}`}
              stroke="#CBD0D9"
              strokeOpacity="0.38"
              strokeWidth="0.9"
            />
            <polyline
              points={`${CX + 94},${CY + 126} ${CX + 138},${CY + 184} ${CX + 340},${CY + 184}`}
              stroke="#F47117"
              strokeWidth="1.35"
              strokeDasharray="42 280"
              strokeLinecap="round"
              className="hud-leader-pulse pulse-delay-3"
            />
            <circle cx={CX + 94} cy={CY + 126} r="5.5" fill="#F47117" fillOpacity="0.24" className="hud-anchor-halo halo-delay-3" />
            <circle cx={CX + 94} cy={CY + 126} r="2.8" fill="#FEF3E5" stroke="#F47117" strokeWidth="1.4" />
          </g>
        </svg>

        {/* LAYER 2: INNER ROTOR — 35s Clockwise Rotation around exact center (380, 380) */}
        <svg
          className="infrys-hud-rotor rotor-inner"
          viewBox="0 0 760 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx={CX}
            cy={CY}
            r="54"
            stroke="#F47117"
            strokeOpacity="0.78"
            strokeWidth="1.25"
            strokeDasharray="28 85 18 110"
            strokeLinecap="round"
          />
          <line x1={CX} y1={CY - 49} x2={CX} y2={CY - 59} stroke="#F47117" strokeWidth="1" />
          <line x1={CX + 49} y1={CY} x2={CX + 59} y2={CY} stroke="#F47117" strokeWidth="1" />
          <line x1={CX} y1={CY + 49} x2={CX} y2={CY + 59} stroke="#F47117" strokeWidth="1" />
          <line x1={CX - 49} y1={CY} x2={CX - 59} y2={CY} stroke="#F47117" strokeWidth="1" />
          <circle cx={CX} cy={CY - 54} r="2.2" fill="#FEF3E5" stroke="#F47117" strokeWidth="1.2" />
        </svg>

        {/* LAYER 3: MIDDLE ROTOR — 50s Counterclockwise Rotation around exact center (380, 380) */}
        <svg
          className="infrys-hud-rotor rotor-middle"
          viewBox="0 0 760 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="infrysMiddleArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F47117" stopOpacity="0.92" />
              <stop offset="55%" stopColor="#FEF3E5" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#F47117" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <circle
            cx={CX}
            cy={CY}
            r="96"
            stroke="url(#infrysMiddleArcGrad)"
            strokeWidth="1.35"
            strokeDasharray="92 190 44 210"
            strokeLinecap="round"
          />
          <circle cx={CX + 96} cy={CY} r="2.6" fill="#FEF3E5" stroke="#F47117" strokeWidth="1.5" />
          <circle cx={CX - 67.88} cy={CY - 67.88} r="2.2" fill="#F47117" />
          {/* Segmented measurement arcs on r=149 */}
          <path
            d={`M ${CX + 48} ${CY - 142} A 150 150 0 0 1 ${CX + 118} ${CY - 92}`}
            stroke="#F47117"
            strokeOpacity="0.52"
            strokeWidth="3.8"
            strokeDasharray="12 4 24 4 8 4"
          />
          <path
            d={`M ${CX - 144} ${CY + 38} A 149 149 0 0 1 ${CX - 102} ${CY + 108}`}
            stroke="#F47117"
            strokeOpacity="0.42"
            strokeWidth="3.0"
            strokeDasharray="18 5 10 5"
          />
          {/* Partial illuminated orbital arcs on r=182 */}
          <circle
            cx={CX}
            cy={CY}
            r="182"
            stroke="#F47117"
            strokeOpacity="0.65"
            strokeWidth="1.3"
            strokeDasharray="58 324 58 324 58 324"
            strokeLinecap="round"
          />
        </svg>

        {/* LAYER 4: OUTER ROTOR — 75s Clockwise Rotation around exact center (380, 380) */}
        <svg
          className="infrys-hud-rotor rotor-outer"
          viewBox="0 0 760 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx={CX}
            cy={CY}
            r="224"
            stroke="#FEF3E5"
            strokeOpacity="0.28"
            strokeWidth="1"
            strokeDasharray="1.5 6.5"
          />
          <path
            d={`M ${CX - 226} ${CY - 58} A 234 234 0 0 1 ${CX - 198} ${CY - 124}`}
            stroke="#F47117"
            strokeWidth="2.0"
            strokeLinecap="round"
          />
          <path
            d={`M ${CX - 38} ${CY - 231} A 234 234 0 0 1 ${CX + 68} ${CY - 224}`}
            stroke="#F47117"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d={`M ${CX - 42} ${CY + 230} A 234 234 0 0 0 ${CX + 58} ${CY + 226}`}
            stroke="#F47117"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <circle cx={CX} cy={CY - 234} r="2.8" fill="#F47117" />
          <circle cx={CX - 202.6} cy={CY + 117} r="2.5" fill="#FEF3E5" stroke="#F47117" strokeWidth="1.2" />
          <circle cx={CX + 202.6} cy={CY + 117} r="2.4" fill="#F47117" />
        </svg>

        {/* LAYER 5: CRYPTO-AGILITY ORBIT MARKERS (Fixed circular path r=182 around exact center) */}
        <div className="infrys-orbit-rotor" aria-hidden="true">
          <div className="infrys-orbit-slot slot-adapt">
            <div className="infrys-orbit-counter">
              <span className="orbit-marker-dot" />
              <span className="orbit-marker-label">
                <b>01</b> — ADAPT
              </span>
            </div>
          </div>

          <div className="infrys-orbit-slot slot-migrate">
            <div className="infrys-orbit-counter">
              <span className="orbit-marker-dot" />
              <span className="orbit-marker-label">
                <b>02</b> — MIGRATE
              </span>
            </div>
          </div>

          <div className="infrys-orbit-slot slot-evolve">
            <div className="infrys-orbit-counter">
              <span className="orbit-marker-dot" />
              <span className="orbit-marker-label">
                <b>03</b> — EVOLVE
              </span>
            </div>
          </div>
        </div>

        {/* LAYER 6: FIXED-POSITION INTERACTIVE TECHNICAL INFORMATION NODES */}
        {/* NODE 01 — CRYPTOGRAPHY -> /technology#cryptography */}
        <Link
          href="/technology#cryptography"
          className="infrys-tech-node node-cryptography"
          aria-label="Explore Cryptography technology: Algorithm, Keys, and Trust"
        >
          <span className="node-bracket bracket-tl" aria-hidden="true" />
          <span className="node-bracket bracket-tr" aria-hidden="true" />
          <span className="node-bracket bracket-bl" aria-hidden="true" />
          <span className="node-bracket bracket-br" aria-hidden="true" />
          <div className="node-icon icon-crypto" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="8.5" cy="12" r="4.5" stroke="#F47117" strokeWidth="1.5" className="crypto-key-ring" />
              <circle cx="8.5" cy="12" r="1.6" fill="#FEF3E5" className="crypto-key-core" />
              <path
                d="M13 12H21M18 12V15.5M21 12V14.5"
                stroke="#F47117"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="crypto-key-bit"
              />
            </svg>
          </div>
          <div className="node-body">
            <div className="node-header">
              <span className="node-index">01</span>
              <span className="node-title">CRYPTOGRAPHY</span>
              <span className="node-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="node-supporting">Algorithm · Keys · Trust</div>
          </div>
        </Link>

        {/* NODE 02 — PQC READINESS -> /technology#post-quantum-cryptography */}
        <Link
          href="/technology#post-quantum-cryptography"
          className="infrys-tech-node node-pqc"
          aria-label="Explore Post-Quantum Cryptography Readiness: NIST FIPS 203, 204, and 205 (ML-KEM, ML-DSA, SLH-DSA)"
        >
          <span className="node-bracket bracket-tl pqc-corner-1" aria-hidden="true" />
          <span className="node-bracket bracket-tr pqc-corner-2" aria-hidden="true" />
          <span className="node-bracket bracket-br pqc-corner-3" aria-hidden="true" />
          <span className="node-bracket bracket-bl pqc-corner-4" aria-hidden="true" />
          <div className="node-icon icon-pqc" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3.5L20 8L12 12.5L4 8L12 3.5Z"
                stroke="#F47117"
                strokeWidth="1.4"
                strokeLinejoin="round"
                className="pqc-layer-1"
              />
              <path
                d="M4 12.5L12 17L20 12.5"
                stroke="#FEF3E5"
                strokeOpacity="0.88"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pqc-layer-2"
              />
              <path
                d="M4 16.5L12 21L20 16.5"
                stroke="#F47117"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pqc-layer-3"
              />
            </svg>
          </div>
          <div className="node-body">
            <div className="node-header">
              <span className="node-index">02</span>
              <span className="node-title">PQC READINESS</span>
              <span className="node-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="node-supporting">NIST FIPS 203 / 204 / 205</div>
            <div className="node-standards">
              <span className="pqc-std-item std-1">ML-KEM</span>
              <span className="pqc-std-sep"> · </span>
              <span className="pqc-std-item std-2">ML-DSA</span>
              <span className="pqc-std-sep"> · </span>
              <span className="pqc-std-item std-3">SLH-DSA</span>
            </div>
          </div>
        </Link>

        {/* NODE 03 — CRYPTO-AGILITY -> /technology#crypto-agility */}
        <Link
          href="/technology#crypto-agility"
          className="infrys-tech-node node-agility"
          aria-label="Explore Crypto-Agility technology: Adapt, Migrate, and Evolve"
        >
          <span className="node-bracket bracket-tl" aria-hidden="true" />
          <span className="node-bracket bracket-tr" aria-hidden="true" />
          <span className="node-bracket bracket-bl" aria-hidden="true" />
          <span className="node-bracket bracket-br" aria-hidden="true" />
          <div className="node-icon icon-agility" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M8.5 7H15.5M7.4 9.2L10.6 15.6M16.6 9.2L13.4 15.6"
                stroke="#F47117"
                strokeOpacity="0.78"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <circle cx="6" cy="7" r="2.5" stroke="#F47117" strokeWidth="1.5" className="agility-dot agility-dot-1" />
              <circle cx="18" cy="7" r="2.5" stroke="#FEF3E5" strokeWidth="1.4" className="agility-dot agility-dot-2" />
              <circle cx="12" cy="18" r="2.5" stroke="#F47117" strokeWidth="1.5" className="agility-dot agility-dot-3" />
            </svg>
          </div>
          <div className="node-body">
            <div className="node-header">
              <span className="node-index">03</span>
              <span className="node-title">CRYPTO-AGILITY</span>
              <span className="node-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="node-supporting">Adapt · Migrate · Evolve</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CryptographicCore
