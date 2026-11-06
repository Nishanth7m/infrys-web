'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

// =========================================================================
// INFRYS CRYPTOGRAPHIC CORE — PROCEDURAL MATTE 3D WEBGL ENGINE
// Engineered to match reference aesthetics (media_1793684986360_b0397d6d.jpg):
// - Iconic "S" 3D Möbius / figure-8 ribbon curve with wide architectural band
// - Tactile matte obsidian/slate ceramic finish with soft Fresnel rim
// - Subpixel anti-aliased laser-etched CAD grid (analytical fwidth in GLSL)
// - Radiant intersection spark nodes at every grid vertex
// - Incandescent molten orange spine channel with traveling photon starbursts
// - Soft circular optical particles & starburst flare sprites
// - Vertical telemetry antenna spikes on top crest with varying heights
// - Gyroscopic concentric orbital coordinate rings with dashed CAD arcs
// - Dynamic mouse parallax with physical damping (Emil Kowalski craft)
// =========================================================================

export function CryptographicCore() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let width = container.clientWidth || 640
    let height = container.clientHeight || 640

    // --- 1. THREE.JS SCENE, CAMERA, RENDERER ---
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100)
    camera.position.set(0, 0, 8.5)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.25
    container.appendChild(renderer.domElement)

    // Master Group for mouse parallax & global rotation
    const masterGroup = new THREE.Group()
    scene.add(masterGroup)

    // Initial subtle pitch tilt to match reference elevation angle
    masterGroup.rotation.x = 0.08
    masterGroup.rotation.z = -0.04

    // --- 2. SOFT CIRCULAR PARTICLE & OPTICAL STARBURST TEXTURES ---
    const createCircleTexture = () => {
      const c = document.createElement('canvas')
      c.width = 64
      c.height = 64
      const ctx = c.getContext('2d')!
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 30)
      g.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)')
      g.addColorStop(0.25, 'rgba(255, 220, 160, 0.85)')
      g.addColorStop(0.6, 'rgba(244, 113, 23, 0.35)')
      g.addColorStop(1.0, 'rgba(244, 113, 23, 0.0)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(32, 32, 30, 0, Math.PI * 2)
      ctx.fill()
      return new THREE.CanvasTexture(c)
    }

    const createStarburstTexture = () => {
      const c = document.createElement('canvas')
      c.width = 128
      c.height = 128
      const ctx = c.getContext('2d')!
      const cx = 64
      const cy = 64

      // Central radiant bloom
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 58)
      g.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)')
      g.addColorStop(0.18, 'rgba(255, 235, 180, 0.95)')
      g.addColorStop(0.45, 'rgba(244, 113, 23, 0.55)')
      g.addColorStop(0.8, 'rgba(244, 113, 23, 0.12)')
      g.addColorStop(1.0, 'rgba(244, 113, 23, 0.0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, 128, 128)

      // Horizontal ray
      const gH = ctx.createLinearGradient(0, cy, 128, cy)
      gH.addColorStop(0.0, 'rgba(255, 200, 120, 0.0)')
      gH.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)')
      gH.addColorStop(1.0, 'rgba(255, 200, 120, 0.0)')
      ctx.fillStyle = gH
      ctx.fillRect(0, cy - 1.5, 128, 3)

      // Vertical ray
      const gV = ctx.createLinearGradient(cx, 0, cx, 128)
      gV.addColorStop(0.0, 'rgba(255, 200, 120, 0.0)')
      gV.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)')
      gV.addColorStop(1.0, 'rgba(255, 200, 120, 0.0)')
      ctx.fillStyle = gV
      ctx.fillRect(cx - 1.5, 0, 3, 128)

      return new THREE.CanvasTexture(c)
    }

    const circleTex = createCircleTexture()
    const starburstTex = createStarburstTexture()

    // --- 3. PARAMETRIC "S" 3D RIBBON CURVE FORMULA ---
    // Mathematically mirrored to form the classic S-curve diagonal from top-right to lower-left
    const A = 1.82 // horizontal width amplitude
    const B = 2.08 // vertical height amplitude
    const C = 1.35 // depth amplitude
    const D = 0.38 // harmonic depth tilt

    const getCenterLine = (u: number): THREE.Vector3 => {
      // Mirrored X so crossing sweeps from upper-right down to lower-left in front
      const x = -Math.sin(2 * u) * A - Math.cos(u) * 0.18
      const y = Math.cos(u) * B
      const z = Math.sin(u) * C - Math.cos(2 * u) * D
      return new THREE.Vector3(x, y, z)
    }

    const getTangent = (u: number): THREE.Vector3 => {
      const eps = 0.001
      const p1 = getCenterLine(u - eps)
      const p2 = getCenterLine(u + eps)
      return new THREE.Vector3().subVectors(p2, p1).normalize()
    }

    // Target surface normal to orient ribbon faces toward camera
    const getTargetNormal = (u: number): THREE.Vector3 => {
      const nx = -Math.sin(2 * u) * 0.22
      const ny = Math.cos(u) * 0.65
      const nz = Math.sin(u) * 0.75 + Math.cos(2 * u) * 0.35 + 0.25
      return new THREE.Vector3(nx, ny, nz).normalize()
    }

    // --- 4. CONSTRUCT WIDE 3D ARCHITECTURAL RIBBON MESH ---
    const SEGMENTS_U = 360 // longitudinal resolution
    const SEGMENTS_V = 24  // latitudinal resolution
    const RIBBON_WIDTH = 1.05 // broad, majestic architectural band

    const vertexCount = (SEGMENTS_U + 1) * (SEGMENTS_V + 1)
    const positions = new Float32Array(vertexCount * 3)
    const normals = new Float32Array(vertexCount * 3)
    const uvs = new Float32Array(vertexCount * 2)

    let ptrPos = 0
    let ptrNorm = 0
    let ptrUV = 0

    for (let i = 0; i <= SEGMENTS_U; i++) {
      const uFrac = i / SEGMENTS_U
      const u = uFrac * Math.PI * 2

      const center = getCenterLine(u)
      const tangent = getTangent(u)
      const targetNorm = getTargetNormal(u)

      // Binormal / width vector orthogonal to tangent
      const widthVec = new THREE.Vector3().crossVectors(tangent, targetNorm).normalize()
      // Surface normal orthogonal to width and tangent
      const surfNorm = new THREE.Vector3().crossVectors(widthVec, tangent).normalize()

      for (let j = 0; j <= SEGMENTS_V; j++) {
        const vFrac = j / SEGMENTS_V
        const vOffset = (vFrac - 0.5) * RIBBON_WIDTH

        positions[ptrPos++] = center.x + widthVec.x * vOffset
        positions[ptrPos++] = center.y + widthVec.y * vOffset
        positions[ptrPos++] = center.z + widthVec.z * vOffset

        normals[ptrNorm++] = surfNorm.x
        normals[ptrNorm++] = surfNorm.y
        normals[ptrNorm++] = surfNorm.z

        uvs[ptrUV++] = uFrac
        uvs[ptrUV++] = vFrac
      }
    }

    const indexList: number[] = []
    const stride = SEGMENTS_V + 1
    for (let i = 0; i < SEGMENTS_U; i++) {
      for (let j = 0; j < SEGMENTS_V; j++) {
        const a = i * stride + j
        const b = (i + 1) * stride + j
        const c = (i + 1) * stride + (j + 1)
        const d = i * stride + (j + 1)

        indexList.push(a, b, d)
        indexList.push(b, c, d)
      }
    }

    const ribbonGeo = new THREE.BufferGeometry()
    ribbonGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    ribbonGeo.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
    ribbonGeo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
    ribbonGeo.setIndex(indexList)

    // --- 5. PROCEDURAL MATTE GLSL SHADER MATERIAL ---
    const ribbonMaterial = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uBaseColor: { value: new THREE.Color('#0F111E') },
        uRimColor: { value: new THREE.Color('#3A486D') },
        uSpineColor: { value: new THREE.Color('#FF6200') },
        uSpineCore: { value: new THREE.Color('#FFF5E6') },
        uGridColor: { value: new THREE.Color('#FFB066') },
        uEdgeColor: { value: new THREE.Color('#FF781F') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldPosition;
        uniform float uTime;

        void main() {
          vUv = uv;
          // Organic micro-wave undulation
          float wave = sin(uv.x * 10.0 - uTime * 2.0) * 0.005;
          vec3 displacedPos = position + normal * wave;

          vec4 worldPos = modelMatrix * vec4(displacedPos, 1.0);
          vWorldPosition = worldPos.xyz;

          vec4 mvPosition = modelViewMatrix * vec4(displacedPos, 1.0);
          vViewPosition = -mvPosition.xyz;
          vNormal = normalize(normalMatrix * normal);

          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldPosition;

        uniform float uTime;
        uniform vec3 uBaseColor;
        uniform vec3 uRimColor;
        uniform vec3 uSpineColor;
        uniform vec3 uSpineCore;
        uniform vec3 uGridColor;
        uniform vec3 uEdgeColor;

        void main() {
          vec3 N = normalize(vNormal);
          if (!gl_FrontFacing) N = -N;
          vec3 V = normalize(vViewPosition);

          // Studio Diffuse Lighting
          vec3 lightDirKey = normalize(vec3(2.5, 4.0, 5.0));
          vec3 lightDirFill = normalize(vec3(-3.0, -3.5, 2.0));

          float diffKey = max(0.0, dot(N, lightDirKey));
          diffKey = pow(diffKey * 0.5 + 0.5, 2.2);

          float diffFill = max(0.0, dot(N, lightDirFill)) * 0.35;
          float diffuse = clamp(diffKey * 0.8 + diffFill + 0.18, 0.0, 1.0);

          // Matte Fresnel Rim Highlight (velvety silhouette luster)
          float NdotV = max(0.0, dot(N, V));
          float fresnel = pow(1.0 - NdotV, 2.6) * 0.7;

          // Tactile Matte Base Surface
          vec3 matteBody = uBaseColor * diffuse + uRimColor * fresnel;

          // Subpixel Anti-Aliased Laser CAD Grid (nearly square cells)
          vec2 gridScale = vec2(110.0, 12.0);
          vec2 gridCoord = vUv * gridScale;
          vec2 gridFract = abs(fract(gridCoord - 0.5) - 0.5);
          vec2 gridDist = gridFract / fwidth(gridCoord);
          float lineFactor = 1.0 - min(min(gridDist.x, gridDist.y), 1.0);

          // Grid Intersection Radiant Sparks
          float nodeDist = length(gridFract) * 12.0;
          float nodeSpark = smoothstep(1.0, 0.06, nodeDist);

          // Central Incandescent Molten Spine Groove
          float dCenter = abs(vUv.y - 0.5);
          float spineCoreMask = exp(-dCenter * dCenter * 1500.0);
          float spineGlowMask = exp(-dCenter * dCenter * 110.0);
          float spineAmbientMask = exp(-dCenter * dCenter * 24.0);

          // Traveling Photon Energy Waves
          float pulse1 = exp(-pow(fract(vUv.x - uTime * 0.08) - 0.5, 2.0) * 160.0);
          float pulse2 = exp(-pow(fract(vUv.x - uTime * 0.08 + 0.48) - 0.5, 2.0) * 160.0);
          float pulseActive = pulse1 + pulse2 * 0.85;

          // Edge Wireframe Borders
          float dEdge = min(vUv.y, 1.0 - vUv.y);
          float edgeWire = smoothstep(0.038, 0.005, dEdge);

          // Color Assembler
          vec3 gridEmissive = mix(uGridColor * 0.55, uSpineColor, spineGlowMask * 0.7);
          vec3 gridFinal = gridEmissive * (lineFactor * 0.6 + nodeSpark * 0.95);

          vec3 spineLight = mix(uSpineColor, uSpineCore, spineCoreMask * 0.85);
          vec3 spineFinal = spineLight * (spineCoreMask * 2.4 + spineGlowMask * 1.4 + spineAmbientMask * 0.45);

          vec3 pulseFinal = mix(uSpineColor, vec3(1.0, 0.95, 0.85), 0.7) * pulseActive * (spineGlowMask * 2.4 + lineFactor * 0.8 + 0.15);
          vec3 edgeFinal = uEdgeColor * edgeWire * 0.85;

          vec3 finalColor = matteBody + gridFinal + spineFinal + pulseFinal + edgeFinal;
          gl_FragColor = vec4(finalColor, 0.96);
        }
      `,
    })

    const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMaterial)
    masterGroup.add(ribbonMesh)

    // --- 6. TRAVELING PHOTON STARBURST FLARES ---
    const flareCount = 3
    const flareSprites: THREE.Sprite[] = []
    const flareMat = new THREE.SpriteMaterial({
      map: starburstTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    for (let i = 0; i < flareCount; i++) {
      const sprite = new THREE.Sprite(flareMat)
      sprite.scale.set(1.4, 1.4, 1.0)
      masterGroup.add(sprite)
      flareSprites.push(sprite)
    }

    // --- 7. VERTICAL CAD TELEMETRY SPIKES (Antenna Pins on Top Crest) ---
    const pinCount = 22
    const pinPositions: number[] = []
    const pinDotPositions: number[] = []

    for (let i = 0; i < pinCount; i++) {
      const u = (Math.PI * 2 * (0.91 + (i / pinCount) * 0.18)) % (Math.PI * 2)
      const center = getCenterLine(u)
      const targetNorm = getTargetNormal(u)
      const tangent = getTangent(u)
      const widthVec = new THREE.Vector3().crossVectors(tangent, targetNorm).normalize()

      const offsetV = ((i % 5) - 2) * 0.11
      const basePos = new THREE.Vector3().copy(center).addScaledVector(widthVec, offsetV)

      const pinHeight = 0.38 + ((i * 7) % 11) * 0.1
      const topPos = new THREE.Vector3(basePos.x, basePos.y + pinHeight, basePos.z)

      pinPositions.push(basePos.x, basePos.y, basePos.z)
      pinPositions.push(topPos.x, topPos.y, topPos.z)

      pinDotPositions.push(topPos.x, topPos.y, topPos.z)
    }

    const pinLineGeo = new THREE.BufferGeometry()
    pinLineGeo.setAttribute('position', new THREE.Float32BufferAttribute(pinPositions, 3))
    const pinLineMat = new THREE.LineBasicMaterial({
      color: 0xF47117,
      transparent: true,
      opacity: 0.5,
    })
    const pinLines = new THREE.LineSegments(pinLineGeo, pinLineMat)
    masterGroup.add(pinLines)

    const pinDotGeo = new THREE.BufferGeometry()
    pinDotGeo.setAttribute('position', new THREE.Float32BufferAttribute(pinDotPositions, 3))
    const pinDotMat = new THREE.PointsMaterial({
      map: circleTex,
      color: 0xFFE3B3,
      sizeAttenuation: false,
      size: 5.5,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const pinDots = new THREE.Points(pinDotGeo, pinDotMat)
    masterGroup.add(pinDots)

    // --- 8. GYROSCOPIC CONCENTRIC ORBITAL RINGS ---
    const ringGroup = new THREE.Group()
    masterGroup.add(ringGroup)

    const createCadRing = (radius: number, segments: number, rotX: number, rotY: number, color: number, opacity: number) => {
      const ringGeo = new THREE.BufferGeometry()
      const ringPts: number[] = []
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2
        ringPts.push(Math.cos(theta) * radius, Math.sin(theta) * radius, 0)
      }
      ringGeo.setAttribute('position', new THREE.Float32BufferAttribute(ringPts, 3))
      const ringMat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
      })
      const ring = new THREE.Line(ringGeo, ringMat)
      ring.rotation.x = rotX
      ring.rotation.y = rotY
      return ring
    }

    const ring1 = createCadRing(2.95, 128, Math.PI * 0.32, Math.PI * 0.15, 0xF47117, 0.38)
    const ring2 = createCadRing(3.3, 128, -Math.PI * 0.22, Math.PI * 0.45, 0xE8985A, 0.28)
    const ring3 = createCadRing(3.65, 96, Math.PI * 0.48, -Math.PI * 0.1, 0x8E92A4, 0.2)
    ringGroup.add(ring1, ring2, ring3)

    // --- 9. AMBIENT QUANTUM OPTICAL SPARK PARTICLES ---
    const PARTICLE_COUNT = 90
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3)
    const particleColors = new Float32Array(PARTICLE_COUNT * 3)
    const cAmber = new THREE.Color('#F47117')
    const cGold = new THREE.Color('#FFD166')
    const cWhite = new THREE.Color('#FFF5EA')

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlePositions[i * 3 + 0] = (Math.random() - 0.5) * 8.5
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 7.5
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5.0

      const randC = Math.random()
      const col = randC > 0.6 ? cAmber : randC > 0.25 ? cGold : cWhite
      particleColors[i * 3 + 0] = col.r
      particleColors[i * 3 + 1] = col.g
      particleColors[i * 3 + 2] = col.b
    }

    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))
    const particleMat = new THREE.PointsMaterial({
      map: circleTex,
      sizeAttenuation: false,
      size: 4.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const particleField = new THREE.Points(particleGeo, particleMat)
    masterGroup.add(particleField)

    // --- 10. DYNAMIC MOUSE PARALLAX WITH EMIL KOWALSKI CRAFT DAMPING ---
    let targetRotX = 0
    let targetRotY = 0
    let currentRotX = 0
    let currentRotY = 0

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1
      targetRotX = -ny * 0.25
      targetRotY = nx * 0.35
    }

    const onPointerLeave = () => {
      targetRotX = 0
      targetRotY = 0
    }

    window.addEventListener('mousemove', onPointerMove)
    container.addEventListener('mouseleave', onPointerLeave)

    const handleResize = () => {
      if (!container) return
      width = container.clientWidth || 640
      height = container.clientHeight || 640
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // --- 11. ANIMATION LOOP (60FPS) ---
    const startTime = performance.now()
    let animationFrameId: number

    const flareOffsets = [0.0, 0.38, 0.72]

    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsed = (now - startTime) / 1000

      // Damped spring physics for mouse parallax
      currentRotX += (targetRotX - currentRotX) * 0.05
      currentRotY += (targetRotY - currentRotY) * 0.05

      // Continuous stately tumbling rotation + living floating respiration
      const floatY = Math.sin(elapsed * 1.4) * 0.07
      const slowSpinY = elapsed * 0.12

      masterGroup.rotation.x = 0.08 + currentRotX + Math.sin(elapsed * 0.8) * 0.04
      masterGroup.rotation.y = currentRotY + slowSpinY
      masterGroup.position.y = floatY

      // Position traveling photon starbursts along the ribbon spline
      flareSprites.forEach((flare, idx) => {
        const uFlare = ((elapsed * 0.08 + flareOffsets[idx]) % 1.0) * Math.PI * 2
        const pt = getCenterLine(uFlare)
        flare.position.set(pt.x, pt.y, pt.z)

        const pulseScale = 1.25 + Math.sin(elapsed * 4.0 + idx * 2.0) * 0.2
        flare.scale.set(pulseScale, pulseScale, 1.0)
      })

      // Gyroscopic counter-rotation of orbit rings
      ring1.rotation.z = elapsed * 0.16
      ring2.rotation.z = -elapsed * 0.12
      ring3.rotation.z = elapsed * 0.08

      // Slow particle field drift
      particleField.rotation.y = elapsed * 0.035

      // Update shader uniform
      ribbonMaterial.uniforms.uTime.value = elapsed

      renderer.render(scene, camera)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onPointerMove)
      container.removeEventListener('mouseleave', onPointerLeave)
      window.removeEventListener('resize', handleResize)

      circleTex.dispose()
      starburstTex.dispose()
      ribbonGeo.dispose()
      ribbonMaterial.dispose()
      flareMat.dispose()
      pinLineGeo.dispose()
      pinLineMat.dispose()
      pinDotGeo.dispose()
      pinDotMat.dispose()
      ring1.geometry.dispose()
      ring2.geometry.dispose()
      ring3.geometry.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(580px, 76vh, 760px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      {/* Soft Ambient Radial Core Aura */}
      <div
        style={{
          position: 'absolute',
          inset: '-10%',
          background: 'radial-gradient(circle at 50% 50%, rgba(244, 113, 23, 0.14), rgba(254, 163, 77, 0.04) 45%, transparent 70%)',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
        }}
      />

      {/* TOP-RIGHT TECHNICAL HUD ANNOTATION */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          right: 36,
          zIndex: 10,
          pointerEvents: 'none',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 10,
        }}
      >
        <span
          style={{
            color: '#F47117',
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: 1,
            marginTop: 1,
          }}
        >
          +
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ color: '#FEF3E5', fontWeight: 600, fontSize: '10px', letterSpacing: '0.14em' }}>
            INFRYS / CRYPTOGRAPHIC CORE
          </span>
          <span style={{ color: '#8E92A4', fontSize: '9px', letterSpacing: '0.12em' }}>
            CRYPTOGRAPHIC SYSTEM / <span style={{ color: '#F47117', fontWeight: 600 }}>ACTIVE</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CryptographicCore
