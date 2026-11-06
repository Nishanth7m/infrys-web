'use client'

import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react'

// =========================================================================
// INFRYS 3D LOGO & COMPLIANCE STANDARDS CAROUSEL
// Ported directly from Framer 3D Carousel Architecture:
// - Exact trigonometric 3D focal lens magnification curve (Sine/Cosine warping)
// - Dynamic progressive depth of field with quadratic Gaussian blur
// - Interactive pointer drag with inertia easing & pause-on-hover
// - Built-in NIST PQC & Global Enterprise Cybersecurity Standards
// =========================================================================

export interface LogoItem {
  id?: string
  name: string
  sub?: string
  image?: string // Image URL or SVG data URI
  width?: number
  height?: number
  href?: string
}

export interface Logo3DCarouselProps {
  logos?: LogoItem[]
  itemHeight?: number
  gap?: number
  speed?: number
  direction?: 'left' | 'right'
  maxBlur?: number
  blurEnd?: number
  pauseOnHover?: boolean
  easingResponsiveness?: number
  enableDrag?: boolean
  minScale?: number
  maxScale?: number
  className?: string
  style?: React.CSSProperties
}

// Generate bespoke SVG Data URI for an enterprise standard badge
function createStandardBadgeSvg(
  code: string,
  sub: string,
  iconType: 'shield' | 'lock' | 'cpu' | 'lattice' | 'check' | 'key' | 'globe'
): string {
  const iconPaths: Record<string, string> = {
    shield:
      '<path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" fill="none" stroke="#F47117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" fill="none" stroke="#FEF3E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    lock:
      '<rect x="4" y="11" width="16" height="11" rx="2" ry="2" fill="none" stroke="#F47117" stroke-width="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="#FEF3E5" stroke-width="2"/>',
    cpu:
      '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="#F47117" stroke-width="2"/><rect x="9" y="9" width="6" height="6" fill="#F47117" opacity="0.4"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" stroke="#FEF3E5" stroke-width="1.8"/>',
    lattice:
      '<polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" fill="none" stroke="#F47117" stroke-width="2"/><polyline points="2,8.5 12,14.5 22,8.5" fill="none" stroke="#FEF3E5" stroke-width="1.5"/><line x1="12" y1="14.5" x2="12" y2="22" stroke="#FEF3E5" stroke-width="1.5"/>',
    check:
      '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="none" stroke="#F47117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="#FEF3E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    key:
      '<path d="M21 2l-2 2m-1.5 1.5L16 7l-4 4m0 0l-1.5-1.5a5.66 5.66 0 1 0-8 8 5.66 5.66 0 0 0 8-8L12 11zm3-3l2 2m-2-2l2-2" fill="none" stroke="#F47117" stroke-width="2" stroke-linecap="round"/>',
    globe:
      '<circle cx="12" cy="12" r="10" fill="none" stroke="#F47117" stroke-width="2"/><line x1="2" y1="12" x2="22" y2="12" stroke="#FEF3E5" stroke-width="1.5"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="#FEF3E5" stroke-width="1.5"/>',
  }

  const safeSub = sub.replace(/&/g, '&amp;').toUpperCase()
  const safeCode = code.replace(/&/g, '&amp;').toUpperCase()

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="230" height="54" viewBox="0 0 230 54">
    <rect width="228" height="52" x="1" y="1" rx="6" fill="#17182b" stroke="rgba(244, 113, 23, 0.35)" stroke-width="1.2"/>
    <g transform="translate(14, 15)">
      ${iconPaths[iconType] || iconPaths.shield}
    </g>
    <text x="50" y="23" font-family="'IBM Plex Mono', monospace" font-size="9" font-weight="600" fill="#F47117" letter-spacing="0.12em">${safeSub}</text>
    <text x="50" y="39" font-family="'Space Grotesk', sans-serif" font-size="13.5" font-weight="700" fill="#FEF3E5" letter-spacing="0.04em">${safeCode}</text>
  </svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

// Built-in Default Standards showcasing Infrys's Enterprise & PQC Authority
export const DEFAULT_INFRYS_STANDARDS: LogoItem[] = [
  {
    name: 'NIST FIPS 203',
    sub: 'STANDARDIZED PQC',
    image: createStandardBadgeSvg('FIPS 203 // ML-KEM', 'NIST STANDARDIZED', 'lattice'),
  },
  {
    name: 'NIST FIPS 204',
    sub: 'DIGITAL SIGNATURES',
    image: createStandardBadgeSvg('FIPS 204 // ML-DSA', 'LATTICE SIGNATURES', 'key'),
  },
  {
    name: 'FIPS 140-3',
    sub: 'CRYPTOGRAPHIC MODULES',
    image: createStandardBadgeSvg('FIPS 140-3 VALIDATED', 'SECURITY REQUIREMENTS', 'shield'),
  },
  {
    name: 'ISO/IEC 27001',
    sub: 'INFORMATION SECURITY',
    image: createStandardBadgeSvg('ISO/IEC 27001', 'CERTIFIED MANAGEMENT', 'check'),
  },
  {
    name: 'SOC 2 TYPE II',
    sub: 'ENTERPRISE TRUST',
    image: createStandardBadgeSvg('SOC 2 TYPE II', 'SECURITY & AUDIT', 'shield'),
  },
  {
    name: 'PCI-DSS v4.0',
    sub: 'TRANSACTION SECURITY',
    image: createStandardBadgeSvg('PCI-DSS v4.0', 'PAYMENT INTEGRITY', 'lock'),
  },
  {
    name: 'PKCS#11 v3.0',
    sub: 'HARDWARE CRYPTOGRAPHY',
    image: createStandardBadgeSvg('PKCS#11 HSM', 'CRYPTO INTERFACE', 'cpu'),
  },
  {
    name: 'ETSI QSC',
    sub: 'QUANTUM-SAFE EUROPE',
    image: createStandardBadgeSvg('ETSI QUANTUM-SAFE', 'TELECOM STANDARDS', 'globe'),
  },
  {
    name: 'SWIFT CSP',
    sub: 'BANKING ENCRYPTION',
    image: createStandardBadgeSvg('SWIFT CSP', 'FINANCIAL NETWORK', 'lock'),
  },
  {
    name: 'NIST FIPS 205',
    sub: 'HASH STATELESS PQC',
    image: createStandardBadgeSvg('FIPS 205 // SLH-DSA', 'STATELESS HASH PQC', 'lattice'),
  },
  {
    name: 'CSA QUANTUM',
    sub: 'CLOUD SECURITY',
    image: createStandardBadgeSvg('CSA QUANTUM-SAFE', 'CLOUD RESILIENCE', 'check'),
  },
  {
    name: 'HIPAA HITECH',
    sub: 'PATIENT DATA CIPHER',
    image: createStandardBadgeSvg('HIPAA SECURITY', 'HEALTHCARE PRIVACY', 'shield'),
  },
]

// 3D Lens Trigonometric Magnification Calculation
const calculateMagnification = (
  distanceFromCenter: number,
  screenCenter: number,
  avgScale: number,
  scaleConstant: number,
  piDivCenter: number,
  centerDivPi: number,
  minScale: number
) => {
  let warpedX: number
  let finalScale: number

  if (Math.abs(distanceFromCenter) <= screenCenter) {
    warpedX =
      avgScale * distanceFromCenter +
      scaleConstant * centerDivPi * Math.sin(distanceFromCenter * piDivCenter)
    finalScale =
      avgScale + scaleConstant * Math.cos(distanceFromCenter * piDivCenter)
  } else {
    const sign = Math.sign(distanceFromCenter)
    warpedX =
      sign * (avgScale * screenCenter) +
      minScale * (distanceFromCenter - sign * screenCenter)
    finalScale = minScale
  }

  return { warpedX, finalScale }
}

const MAX_SCREEN_WIDTH_BUFFER = 4840

export function Logo3DCarousel({
  logos = DEFAULT_INFRYS_STANDARDS,
  itemHeight = 52,
  gap = 48,
  speed = 40,
  direction = 'left',
  maxBlur = 4.5,
  blurEnd = 60,
  pauseOnHover = true,
  easingResponsiveness = 4,
  enableDrag = true,
  minScale = 0.35,
  maxScale = 1.75,
  className,
  style,
}: Logo3DCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const globalOffsetRef = useRef(0)
  const isHoveredRef = useRef(false)
  const isDraggingRef = useRef(false)
  const lastDragXRef = useRef(0)

  const [containerWidth, setContainerWidth] = useState(0)
  const [loadedImages, setLoadedImages] = useState<(HTMLImageElement | null)[]>([])

  const propsRef = useRef({
    gap,
    speed,
    direction,
    maxBlur,
    blurEnd,
    pauseOnHover,
    easingResponsiveness,
    minScale,
    maxScale,
  })

  propsRef.current = {
    gap,
    speed,
    direction,
    maxBlur,
    blurEnd,
    pauseOnHover,
    easingResponsiveness,
    minScale,
    maxScale,
  }

  const containerHeight = itemHeight * 1.85
  const baseItemHeight = itemHeight / maxScale
  const canvasPaddingY = Math.ceil(maxBlur) * 4
  const extendedCanvasHeight = containerHeight + canvasPaddingY * 2

  // Pre-calculate natural aspect ratios
  const { safeLogos, renderCount, precalculatedWidths } = useMemo(() => {
    const sLogos = logos && logos.length > 0 ? logos : DEFAULT_INFRYS_STANDARDS

    // Default badge aspect ratio is 220:52 = 4.23
    const widths = sLogos.map((l) => {
      const w = l.width || 220
      const h = l.height || 52
      return (baseItemHeight / h) * w
    })

    const setWidth = widths.reduce((sum, w) => sum + w + gap, 0)
    const setsNeeded = Math.max(
      3,
      Math.ceil(MAX_SCREEN_WIDTH_BUFFER / (setWidth || 1))
    )

    return {
      safeLogos: sLogos,
      renderCount: setsNeeded * sLogos.length,
      precalculatedWidths: widths,
    }
  }, [logos, baseItemHeight, gap])

  // ResizeObserver for Container Width
  useLayoutEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setContainerWidth(entry.contentRect.width)
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Pre-load images/SVGs
  useEffect(() => {
    let active = true
    const pendingImages: HTMLImageElement[] = []

    Promise.all(
      safeLogos.map(
        (logo) =>
          new Promise<HTMLImageElement | null>((resolve) => {
            const src = logo.image
            if (!src) return resolve(null)
            const img = new Image()
            pendingImages.push(img)
            img.crossOrigin = 'anonymous'
            img.onload = () => resolve(img)
            img.onerror = () => resolve(null)
            img.src = src
          })
      )
    ).then((results) => {
      if (active) setLoadedImages(results)
    })

    return () => {
      active = false
      pendingImages.forEach((img) => {
        img.onload = null
        img.onerror = null
        img.src = ''
      })
    }
  }, [safeLogos])

  // Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container || containerWidth === 0 || loadedImages.length === 0)
      return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId = 0
    let lastTime = performance.now()
    let isVisible = false
    let currentSpeed =
      propsRef.current.pauseOnHover && isHoveredRef.current
        ? 0
        : propsRef.current.speed

    const screenCenter = containerWidth / 2
    const piDivCenter = Math.PI / screenCenter
    const centerDivPi = screenCenter / Math.PI

    const positions = new Float32Array(renderCount)
    let wrapLength = 0
    let maxW = 0

    for (let i = 0; i < renderCount; i++) {
      const texIdx = i % safeLogos.length
      const w = precalculatedWidths[texIdx] || baseItemHeight * 4.2
      if (w > maxW) maxW = w
      positions[i] = wrapLength
      wrapLength += w + propsRef.current.gap
    }

    const minXBound = -maxW * 2
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = containerWidth * dpr
    canvas.height = extendedCanvasHeight * dpr
    ctx.scale(dpr, dpr)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    const render = (currentTime: number) => {
      if (!isVisible) return

      const p = propsRef.current
      const scaleConstant = (p.maxScale - p.minScale) / 2
      const avgScale = p.minScale + scaleConstant
      const scaleRange = p.maxScale - p.minScale
      const blurEndRadius = screenCenter * (p.blurEnd / 100)
      const dirMultiplier = p.direction === 'right' ? -1 : 1

      const delta = currentTime - lastTime
      lastTime = currentTime
      const dt = Math.min(delta / 1000, 0.05)

      const targetSpeed =
        (p.pauseOnHover && isHoveredRef.current) || isDraggingRef.current
          ? 0
          : p.speed
      currentSpeed += (targetSpeed - currentSpeed) * p.easingResponsiveness * dt
      globalOffsetRef.current += currentSpeed * dt * dirMultiplier

      ctx.clearRect(0, 0, containerWidth, extendedCanvasHeight)

      for (let i = 0; i < renderCount; i++) {
        const texIdx = i % safeLogos.length
        const img = loadedImages[texIdx]
        const w = precalculatedWidths[texIdx] || baseItemHeight * 4.2

        const baseX = positions[i]
        let relativeX = (baseX - globalOffsetRef.current - minXBound) % wrapLength
        if (relativeX < 0) relativeX += wrapLength
        const currentX = relativeX + minXBound

        const unwarpedCenter = currentX + w / 2
        const distanceFromCenter = unwarpedCenter - screenCenter

        const { warpedX, finalScale } = calculateMagnification(
          distanceFromCenter,
          screenCenter,
          avgScale,
          scaleConstant,
          piDivCenter,
          centerDivPi,
          p.minScale
        )

        const finalX = screenCenter + warpedX - w / 2
        const absDist = Math.abs(distanceFromCenter)

        let exactBlurAmount = 0
        if (p.maxBlur > 0) {
          if (blurEndRadius <= 0 || absDist >= blurEndRadius) {
            exactBlurAmount = p.maxBlur
          } else {
            const blurProgress = absDist / blurEndRadius
            const smoothProgress =
              blurProgress * blurProgress * (3 - 2 * blurProgress)
            exactBlurAmount = smoothProgress * p.maxBlur
          }
        }

        const depthRatio = (finalScale - p.minScale) / scaleRange
        const opacity = 0.35 + 0.65 * depthRatio

        const centerX = finalX + w / 2
        const centerY = extendedCanvasHeight / 2

        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.scale(finalScale, finalScale)
        ctx.globalAlpha = opacity

        const localBlur = exactBlurAmount / finalScale
        ctx.filter = localBlur > 0.15 ? `blur(${localBlur.toFixed(2)}px)` : 'none'

        const drawX = -w / 2
        const drawY = -baseItemHeight / 2

        if (img) {
          ctx.drawImage(img, drawX, drawY, w, baseItemHeight)
        } else {
          // Fallback sleek card
          ctx.fillStyle = 'rgba(29, 30, 51, 0.85)'
          ctx.strokeStyle = 'rgba(244, 113, 23, 0.4)'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.roundRect(drawX, drawY, w, baseItemHeight, 6)
          ctx.fill()
          ctx.stroke()
        }

        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible = true
        lastTime = performance.now()
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(render)
        }
      } else {
        isVisible = false
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = 0
        }
      }
    })

    observer.observe(container)

    return () => {
      observer.disconnect()
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [
    containerWidth,
    loadedImages,
    renderCount,
    precalculatedWidths,
    baseItemHeight,
    extendedCanvasHeight,
    safeLogos,
  ])

  // Drag interaction
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enableDrag) return
    isDraggingRef.current = true
    lastDragXRef.current = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing'
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enableDrag || !isDraggingRef.current) return
    const deltaX = e.clientX - lastDragXRef.current
    lastDragXRef.current = e.clientX
    globalOffsetRef.current -= deltaX
  }

  const handlePointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enableDrag) return
    isDraggingRef.current = false
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {}
    if (containerRef.current) containerRef.current.style.cursor = 'grab'
  }

  return (
    <div
      ref={containerRef}
      onPointerEnter={() => (isHoveredRef.current = true)}
      onPointerLeave={() => (isHoveredRef.current = false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUpOrCancel}
      onPointerCancel={handlePointerUpOrCancel}
      className={className}
      style={{
        width: '100%',
        height: containerHeight,
        position: 'relative',
        overflow: 'visible',
        cursor: enableDrag ? 'grab' : 'default',
        touchAction: enableDrag ? 'pan-y' : 'auto',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: extendedCanvasHeight,
          position: 'absolute',
          top: -canvasPaddingY,
          left: 0,
          pointerEvents: 'none',
          display: 'block',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
        }}
      />
    </div>
  )
}

export default Logo3DCarousel
