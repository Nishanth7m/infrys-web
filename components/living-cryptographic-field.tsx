'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShieldCheck, Cpu, Lock, Sparkles, Activity, KeyRound, Zap } from 'lucide-react'

// =========================================================================
// INFRYS LIVING CRYPTOGRAPHIC FIELD — POST-QUANTUM LATTICE FIELD (ML-KEM)
// Ultra-Premium WebGL 3D Experience:
// - Luminous Additive Particle Quanta with custom soft-glow radiant sprites
// - Dynamic Cryptographic Constellation Filaments (Lattice Edge Graph)
// - Post-Quantum Cryptographic Nexus (Faceted Singularity + Gimbal Rings)
// - Gravitational Wave Pointer Probe with live laser targeting reticle
// - Interactive Key Encapsulation Shockwave (Click event)
// - Live Enterprise Cryptographic Telemetry HUD & Entropy Stream
// =========================================================================

// Generate custom high-dynamic-range soft radial glow particle sprite
function createGlowSpriteTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext('2d')!

  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  grad.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)') // Razor-sharp white quantum core
  grad.addColorStop(0.12, 'rgba(255, 246, 225, 0.95)') // Solar cream highlight
  grad.addColorStop(0.28, 'rgba(254, 163, 77, 0.55)') // Radiant amber halo
  grad.addColorStop(0.52, 'rgba(244, 113, 23, 0.16)') // Delicate Infrys flame orange
  grad.addColorStop(1.0, 'rgba(244, 113, 23, 0.0)') // Zero-alpha edge feather

  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 128, 128)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export function LivingCryptographicField() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pulseCount, setPulseCount] = useState(768)
  const [isEncapsulating, setIsEncapsulating] = useState(false)
  const [keyHash, setKeyHash] = useState('0x7F4A...B92C')
  const [entropy, setEntropy] = useState('99.98%')
  const [latency, setLatency] = useState('0.14ms')
  const triggerEncapsulationRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 1. CONFIGURATION
    const isMobile = window.innerWidth < 768
    const LATTICE_COUNT = isMobile ? 5500 : 9200
    const DUST_COUNT = isMobile ? 1200 : 2400
    const TOTAL_POINTS = LATTICE_COUNT + DUST_COUNT

    const width = container.clientWidth || window.innerWidth
    const height = container.clientHeight || window.innerHeight

    // 2. THREE.JS SCENE SETUP
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1d1e33)
    scene.fog = new THREE.FogExp2(0x1d1e33, 0.0075)

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1200)
    camera.position.set(12, 1, 92)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(0x1d1e33, 1)
    container.appendChild(renderer.domElement)

    // 3. ORBIT CONTROLS (Gentle cinematic drift, no page scroll hijack)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.04
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.4
    controls.enableZoom = false
    controls.enablePan = false
    controls.target.set(10, 0, 0)

    // 4. POST PROCESSING — ANAMORPHIC BLOOM PASS
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    renderPass.clearColor = new THREE.Color(0x1d1e33)
    renderPass.clearAlpha = 1
    composer.addPass(renderPass)

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.72, // Tasteful, non-blinding bloom intensity
      0.44, // Refined bloom radius
      0.26  // Clean threshold ensuring crisp contrast and zero haze
    )
    composer.addPass(bloomPass)

    // 5. GLOW PARTICLE SPRITE TEXTURE
    const glowTexture = createGlowSpriteTexture()

    // 6. QUANTUM LATTICE POINTS BUFFER
    const positions = new Float32Array(TOTAL_POINTS * 3)
    const colors = new Float32Array(TOTAL_POINTS * 3)
    const basePositions = new Float32Array(TOTAL_POINTS * 3)
    const velocities = new Float32Array(TOTAL_POINTS * 3)
    const energies = new Float32Array(TOTAL_POINTS)

    // Initialize Lattice points (Toroidal manifold + hyper-harmonic wave, centered rightward)
    for (let i = 0; i < LATTICE_COUNT; i++) {
      const u = i / LATTICE_COUNT
      const band = Math.floor(u * 140)
      const theta = (u * 140 - band) * Math.PI * 2
      const phi = band * 0.18

      const rMajor = 30 + 10 * Math.sin(phi * 2.2)
      const rMinor = 13 + 5 * Math.cos(phi * 3.4)

      const bx = (rMajor + rMinor * Math.cos(theta)) * Math.cos(phi) + 14
      const by = (rMajor + rMinor * Math.cos(theta)) * Math.sin(phi) * 0.6
      const bz = rMinor * Math.sin(theta) + Math.sin(phi * 4.0) * 8

      const idx = i * 3
      positions[idx] = bx + (Math.random() - 0.5) * 2.5
      positions[idx + 1] = by + (Math.random() - 0.5) * 2.5
      positions[idx + 2] = bz + (Math.random() - 0.5) * 2.5

      basePositions[idx] = bx
      basePositions[idx + 1] = by
      basePositions[idx + 2] = bz

      // Initial color: Infrys orange/amber with golden accents
      colors[idx] = 0.96
      colors[idx + 1] = 0.44 + Math.random() * 0.22
      colors[idx + 2] = 0.09 + Math.random() * 0.12
      energies[i] = Math.random() * 0.3
    }

    // Initialize Deep Quantum Dust points (Faint background stars)
    for (let i = LATTICE_COUNT; i < TOTAL_POINTS; i++) {
      const idx = i * 3
      const radius = 38 + Math.random() * 70
      const theta = Math.random() * Math.PI * 2
      const phi = (Math.random() - 0.5) * Math.PI

      const x = radius * Math.cos(phi) * Math.cos(theta) + 14
      const y = radius * Math.sin(phi) * 0.65
      const z = radius * Math.cos(phi) * Math.sin(theta)

      positions[idx] = x
      positions[idx + 1] = y
      positions[idx + 2] = z

      basePositions[idx] = x
      basePositions[idx + 1] = y
      basePositions[idx + 2] = z

      // Muted ambient gold & soft sky tint
      colors[idx] = 0.8
      colors[idx + 1] = 0.5
      colors[idx + 2] = 0.2
      energies[i] = 0.05
    }

    const pointsGeometry = new THREE.BufferGeometry()
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const pointsMaterial = new THREE.PointsMaterial({
      size: isMobile ? 1.4 : 1.75, // Razor-sharp crystalline points
      map: glowTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
      sizeAttenuation: true,
    })

    const pointCloud = new THREE.Points(pointsGeometry, pointsMaterial)
    scene.add(pointCloud)

    // 7. DYNAMIC CRYPTOGRAPHIC CONSTELLATION FILAMENTS (LATTICE EDGES)
    // Dynamic lines connecting neighboring lattice nodes to form the NIST lattice graph
    const MAX_LINES = isMobile ? 350 : 700
    const linePositions = new Float32Array(MAX_LINES * 2 * 3)
    const lineColors = new Float32Array(MAX_LINES * 2 * 3)

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      linewidth: 1,
    })

    const constellationLines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(constellationLines)

    // 8. POST-QUANTUM CRYPTOGRAPHIC NEXUS (SINGULARITY & GIMBAL SYSTEM)
    // Anchored at x = 12.5, perfectly visible in the right side of the hero
    const nexusGroup = new THREE.Group()
    nexusGroup.position.set(13.5, 0, 0)
    scene.add(nexusGroup)

    // Core Singularity (Luminous pulsating sphere)
    const coreSphereGeom = new THREE.SphereGeometry(1.6, 24, 24)
    const coreSphereMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    })
    const coreSphere = new THREE.Mesh(coreSphereGeom, coreSphereMat)
    nexusGroup.add(coreSphere)

    // Core Warm Glow Halo
    const haloGeom = new THREE.SphereGeometry(3.2, 24, 24)
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xf47117,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      wireframe: true,
    })
    const coreHalo = new THREE.Mesh(haloGeom, haloMat)
    nexusGroup.add(coreHalo)

    // Inner Crystalline Dodecahedron (Faceted Lattice Unit Cell)
    const dodecaGeom = new THREE.DodecahedronGeometry(4.6)
    const dodecaMat = new THREE.MeshBasicMaterial({
      color: 0xfca34d,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    })
    const dodecaMesh = new THREE.Mesh(dodecaGeom, dodecaMat)
    nexusGroup.add(dodecaMesh)

    // Outer Geodesic Icosahedron Cage
    const icosaGeom = new THREE.IcosahedronGeometry(7.2, 1)
    const icosaMat = new THREE.MeshBasicMaterial({
      color: 0xf47117,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    })
    const icosaMesh = new THREE.Mesh(icosaGeom, icosaMat)
    nexusGroup.add(icosaMesh)

    // Concentric Precision Cryptographic Gimbal Rings
    // Ring 1: Inner Coordinate Ring
    const ring1Pts: THREE.Vector3[] = []
    const RING_SEGS = 72
    for (let s = 0; s <= RING_SEGS; s++) {
      const th = (s / RING_SEGS) * Math.PI * 2
      ring1Pts.push(new THREE.Vector3(Math.cos(th) * 9.5, Math.sin(th) * 9.5, 0))
    }
    const ring1Geom = new THREE.BufferGeometry().setFromPoints(ring1Pts)
    const ring1Mat = new THREE.LineBasicMaterial({
      color: 0xfca34d,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })
    const ring1 = new THREE.LineLoop(ring1Geom, ring1Mat)
    ring1.rotation.x = Math.PI * 0.25
    nexusGroup.add(ring1)

    // Ring 2: Counter-rotating Outer Ring with tick graduation marks
    const ring2Pts: THREE.Vector3[] = []
    for (let s = 0; s <= RING_SEGS; s++) {
      const th = (s / RING_SEGS) * Math.PI * 2
      ring2Pts.push(new THREE.Vector3(Math.cos(th) * 12.2, 0, Math.sin(th) * 12.2))
    }
    const ring2Geom = new THREE.BufferGeometry().setFromPoints(ring2Pts)
    const ring2Mat = new THREE.LineBasicMaterial({
      color: 0xf47117,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    })
    const ring2 = new THREE.LineLoop(ring2Geom, ring2Mat)
    ring2.rotation.z = -Math.PI * 0.2
    nexusGroup.add(ring2)

    // Ring 3: Equatorial Telemetry Boundary Ring
    const ring3Pts: THREE.Vector3[] = []
    for (let s = 0; s <= RING_SEGS; s++) {
      const th = (s / RING_SEGS) * Math.PI * 2
      ring3Pts.push(new THREE.Vector3(Math.cos(th) * 14.8, Math.sin(th) * 14.8, 0))
    }
    const ring3Geom = new THREE.BufferGeometry().setFromPoints(ring3Pts)
    const ring3Mat = new THREE.LineBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    })
    const ring3 = new THREE.LineLoop(ring3Geom, ring3Mat)
    nexusGroup.add(ring3)

    // Orbiting Cryptographic Data Packets on Ring 2
    const packetCount = 4
    const packets: THREE.Mesh[] = []
    const packetGeom = new THREE.BoxGeometry(0.55, 0.55, 0.55)
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    })
    for (let p = 0; p < packetCount; p++) {
      const pMesh = new THREE.Mesh(packetGeom, packetMat)
      nexusGroup.add(pMesh)
      packets.push(pMesh)
    }

    // 9. HOLOGRAPHIC CURSOR PROBE RETICLE & LASER TARGETING
    const reticleGroup = new THREE.Group()
    scene.add(reticleGroup)
    reticleGroup.visible = false

    // Inner reticle circle
    const reticleRingPts: THREE.Vector3[] = []
    for (let s = 0; s <= 48; s++) {
      const th = (s / 48) * Math.PI * 2
      reticleRingPts.push(new THREE.Vector3(Math.cos(th) * 2.2, Math.sin(th) * 2.2, 0))
    }
    const reticleRingGeom = new THREE.BufferGeometry().setFromPoints(reticleRingPts)
    const reticleRingMat = new THREE.LineBasicMaterial({
      color: 0xffa043,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })
    const reticleRing = new THREE.LineLoop(reticleRingGeom, reticleRingMat)
    reticleGroup.add(reticleRing)

    // Reticle crosshair ticks
    const tickPts: THREE.Vector3[] = [
      new THREE.Vector3(-3.2, 0, 0), new THREE.Vector3(-2.2, 0, 0),
      new THREE.Vector3(2.2, 0, 0), new THREE.Vector3(3.2, 0, 0),
      new THREE.Vector3(0, -3.2, 0), new THREE.Vector3(0, -2.2, 0),
      new THREE.Vector3(0, 2.2, 0), new THREE.Vector3(0, 3.2, 0),
    ]
    const tickGeom = new THREE.BufferGeometry().setFromPoints(tickPts)
    const tickLines = new THREE.LineSegments(tickGeom, reticleRingMat)
    reticleGroup.add(tickLines)

    // Laser lines shooting from reticle to nearest 4 lattice nodes
    const targetLaserPositions = new Float32Array(4 * 2 * 3)
    const targetLaserGeom = new THREE.BufferGeometry()
    targetLaserGeom.setAttribute('position', new THREE.BufferAttribute(targetLaserPositions, 3))
    const targetLaserMat = new THREE.LineBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    })
    const targetLaserLines = new THREE.LineSegments(targetLaserGeom, targetLaserMat)
    scene.add(targetLaserLines)

    // 10. INTERACTIVE MOUSE 3D PROJECTION & SHOCKWAVE STATE
    const mouseNorm = new THREE.Vector2(-999, -999)
    const mouseWorld = new THREE.Vector3(999, 999, 0)
    const targetMouseWorld = new THREE.Vector3(999, 999, 0)
    const raycaster = new THREE.Raycaster()
    const planeZ0 = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)

    let mouseActive = false
    let shockwaveOrigin = new THREE.Vector3(0, 0, 0)
    let shockwaveRadius = 0
    let shockwaveIntensity = 0

    const triggerShockwave = (origin?: THREE.Vector3) => {
      shockwaveOrigin.copy(origin || (mouseActive ? mouseWorld : nexusGroup.position))
      shockwaveRadius = 1.0
      shockwaveIntensity = 1.0
      setIsEncapsulating(true)
      setPulseCount((prev) => prev + 1)

      // Generate realistic cryptographic ML-KEM telemetry
      const hexChars = '0123456789ABCDEF'
      let newHash = '0x'
      for (let h = 0; h < 4; h++) newHash += hexChars[Math.floor(Math.random() * 16)]
      newHash += '...'
      for (let h = 0; h < 4; h++) newHash += hexChars[Math.floor(Math.random() * 16)]
      setKeyHash(newHash)

      const latVal = (0.12 + Math.random() * 0.04).toFixed(2)
      setLatency(`${latVal}ms`)
      setEntropy((99.96 + Math.random() * 0.03).toFixed(2) + '%')

      setTimeout(() => setIsEncapsulating(false), 900)
    }

    triggerEncapsulationRef.current = () => triggerShockwave()

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      mouseNorm.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseNorm.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      mouseActive = true

      raycaster.setFromCamera(mouseNorm, camera)
      const hit = new THREE.Vector3()
      if (raycaster.ray.intersectPlane(planeZ0, hit)) {
        targetMouseWorld.copy(hit)
      }
    }

    const onPointerDown = () => {
      triggerShockwave()
    }

    const onPointerLeave = () => {
      mouseActive = false
      targetMouseWorld.set(999, 999, 0)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    container.addEventListener('pointerdown', onPointerDown)
    container.addEventListener('pointerleave', onPointerLeave)

    // 11. MAIN ANIMATION & SIMULATION LOOP
    let animationFrameId: number
    const startTime = performance.now()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const time = (performance.now() - startTime) * 0.001
      controls.update()

      // Smooth mouse reticle follow
      if (mouseActive) {
        mouseWorld.lerp(targetMouseWorld, 0.12)
        reticleGroup.visible = true
        reticleGroup.position.copy(mouseWorld)
        reticleGroup.position.z = 2
        reticleRing.rotation.z = time * 1.5
      } else {
        reticleGroup.visible = false
      }

      // Rotate Nexus Polyhedra & Rings
      coreSphere.scale.setScalar(1.0 + Math.sin(time * 3.2) * 0.12)
      coreHalo.rotation.y = time * 0.3
      dodecaMesh.rotation.x = time * 0.38
      dodecaMesh.rotation.y = time * 0.52
      icosaMesh.rotation.y = -time * 0.28
      icosaMesh.rotation.z = time * 0.18
      ring1.rotation.z = time * 0.45
      ring2.rotation.y = -time * 0.65
      ring3.rotation.z = time * 0.22

      // Orbit Data Packets along Ring 2
      for (let p = 0; p < packetCount; p++) {
        const pAngle = time * 0.85 + (p / packetCount) * Math.PI * 2
        const pRadius = 12.2
        const px = Math.cos(pAngle) * pRadius
        const pz = Math.sin(pAngle) * pRadius
        // Rotate into Ring 2's frame
        packets[p].position.set(px, pz * Math.sin(-Math.PI * 0.2), pz * Math.cos(-Math.PI * 0.2))
        packets[p].rotation.x = time * 2
        packets[p].rotation.y = time * 2.5
      }

      // Advance Shockwave
      if (shockwaveIntensity > 0) {
        shockwaveRadius += 1.85
        shockwaveIntensity -= 0.016
      }

      // PARTICLE SIMULATION (Fluid 4D Lattice Manifold + Gravitational Lens)
      const MOUSE_RADIUS = 28
      const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS
      const nearestParticles: { distSq: number; idx: number }[] = []

      for (let i = 0; i < LATTICE_COUNT; i++) {
        const idx = i * 3
        const u = i / LATTICE_COUNT
        const band = Math.floor(u * 140)

        // 4D Harmonic lattice wave motion
        const wave1 = Math.sin(band * 0.16 + time * 0.68)
        const wave2 = Math.cos(band * 0.24 - time * 0.48)
        const wave3 = Math.sin(u * Math.PI * 8 + time * 0.35)

        const tx = basePositions[idx] + wave1 * 2.2 + Math.cos(time * 0.3 + band * 0.08) * 1.5
        const ty = basePositions[idx + 1] + wave2 * 2.8 + wave3 * 1.4
        const tz = basePositions[idx + 2] + Math.sin(band * 0.12 + time * 0.55) * 3.2

        // Smooth spring return to equilibrium
        positions[idx] += (tx - positions[idx]) * 0.08 + velocities[idx]
        positions[idx + 1] += (ty - positions[idx + 1]) * 0.08 + velocities[idx + 1]
        positions[idx + 2] += (tz - positions[idx + 2]) * 0.08 + velocities[idx + 2]

        // Damping velocities
        velocities[idx] *= 0.88
        velocities[idx + 1] *= 0.88
        velocities[idx + 2] *= 0.88

        let pEnergy = energies[i] * 0.94 // Natural decay

        // Gravitational Pointer Lens
        if (mouseActive) {
          const dx = positions[idx] - mouseWorld.x
          const dy = positions[idx + 1] - mouseWorld.y
          const dz = positions[idx + 2] - mouseWorld.z
          const distSq = dx * dx + dy * dy + dz * dz

          if (distSq < MOUSE_RADIUS_SQ) {
            const dist = Math.sqrt(distSq)
            const force = (1 - dist / MOUSE_RADIUS) * 0.65
            const invDist = 1 / (dist + 0.001)

            // Elastic deflection + gentle orbital swirl around cursor
            velocities[idx] += dx * invDist * force - dy * invDist * force * 0.45
            velocities[idx + 1] += dy * invDist * force + dx * invDist * force * 0.45
            velocities[idx + 2] += dz * invDist * force * 0.3

            pEnergy = Math.max(pEnergy, Math.pow(1 - dist / MOUSE_RADIUS, 1.2))
          }

          // Track nearest particles for laser targeting
          if (nearestParticles.length < 4) {
            nearestParticles.push({ distSq, idx })
          } else {
            let maxDistIdx = 0
            for (let k = 1; k < nearestParticles.length; k++) {
              if (nearestParticles[k].distSq > nearestParticles[maxDistIdx].distSq) {
                maxDistIdx = k
              }
            }
            if (distSq < nearestParticles[maxDistIdx].distSq) {
              nearestParticles[maxDistIdx] = { distSq, idx }
            }
          }
        }

        // Encapsulation Shockwave Impulse
        if (shockwaveIntensity > 0) {
          const dx = positions[idx] - shockwaveOrigin.x
          const dy = positions[idx + 1] - shockwaveOrigin.y
          const dz = positions[idx + 2] - shockwaveOrigin.z
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
          const delta = Math.abs(dist - shockwaveRadius)

          if (delta < 6.0) {
            const push = (1 - delta / 6.0) * shockwaveIntensity * 3.2
            const invDist = 1 / (dist + 0.001)
            velocities[idx] += dx * invDist * push
            velocities[idx + 1] += dy * invDist * push
            velocities[idx + 2] += dz * invDist * push * 0.6
            pEnergy = Math.max(pEnergy, 1.0)
          }
        }

        energies[i] = pEnergy

        // HIGH-DYNAMIC-RANGE COLOR BLENDING
        // Base: Infrys Orange (#F47117: 0.957, 0.443, 0.090)
        // High Energy / Hover / Shockwave: Incandescent White-Gold (#FFFFFF / #FFD166)
        let r = 0.957
        let g = 0.443
        let b = 0.090

        if (pEnergy > 0.1) {
          const factor = Math.min(1.0, (pEnergy - 0.1) / 0.9)
          r = THREE.MathUtils.lerp(0.957, 1.0, factor)
          g = THREE.MathUtils.lerp(0.443, 0.96, factor)
          b = THREE.MathUtils.lerp(0.090, 0.85, factor)
        } else {
          const ambientWave = 0.72 + 0.28 * Math.sin(band * 0.14 + time * 0.4)
          r *= ambientWave
          g *= ambientWave
          b *= ambientWave
        }

        colors[idx] = r
        colors[idx + 1] = g
        colors[idx + 2] = b
      }

      // Update ambient stardust
      for (let i = LATTICE_COUNT; i < TOTAL_POINTS; i++) {
        const idx = i * 3
        positions[idx + 1] += Math.sin(time * 0.2 + i * 0.1) * 0.04
        positions[idx] += Math.cos(time * 0.15 + i * 0.1) * 0.03
      }

      pointsGeometry.attributes.position.needsUpdate = true
      pointsGeometry.attributes.color.needsUpdate = true

      // UPDATE CONSTELLATION FILAMENTS (LATTICE EDGES)
      let lineIndex = 0
      const BOND_DIST = 6.2
      const BOND_DIST_SQ = BOND_DIST * BOND_DIST
      const step = Math.floor(LATTICE_COUNT / MAX_LINES)

      for (let i = 0; i < LATTICE_COUNT && lineIndex < MAX_LINES; i += step) {
        const next = (i + 13) % LATTICE_COUNT
        const idx1 = i * 3
        const idx2 = next * 3

        const dx = positions[idx1] - positions[idx2]
        const dy = positions[idx1 + 1] - positions[idx2 + 1]
        const dz = positions[idx1 + 2] - positions[idx2 + 2]
        const dSq = dx * dx + dy * dy + dz * dz

        if (dSq < BOND_DIST_SQ) {
          const vIdx = lineIndex * 6
          linePositions[vIdx] = positions[idx1]
          linePositions[vIdx + 1] = positions[idx1 + 1]
          linePositions[vIdx + 2] = positions[idx1 + 2]

          linePositions[vIdx + 3] = positions[idx2]
          linePositions[vIdx + 4] = positions[idx2 + 1]
          linePositions[vIdx + 5] = positions[idx2 + 2]

          const avgEnergy = (energies[i] + energies[next]) * 0.5
          const alpha = 0.35 + avgEnergy * 0.65

          lineColors[vIdx] = 0.98 * alpha
          lineColors[vIdx + 1] = 0.62 * alpha
          lineColors[vIdx + 2] = 0.18 * alpha

          lineColors[vIdx + 3] = 0.98 * alpha
          lineColors[vIdx + 4] = 0.62 * alpha
          lineColors[vIdx + 5] = 0.18 * alpha

          lineIndex++
        }
      }

      // Zero out unused line segments
      for (let l = lineIndex; l < MAX_LINES; l++) {
        const vIdx = l * 6
        for (let k = 0; k < 6; k++) {
          linePositions[vIdx + k] = 0
          lineColors[vIdx + k] = 0
        }
      }

      lineGeometry.attributes.position.needsUpdate = true
      lineGeometry.attributes.color.needsUpdate = true

      // UPDATE TARGETING LASERS TO NEAREST NODES
      if (mouseActive && nearestParticles.length > 0) {
        targetLaserLines.visible = true
        for (let k = 0; k < 4; k++) {
          const vIdx = k * 6
          targetLaserPositions[vIdx] = mouseWorld.x
          targetLaserPositions[vIdx + 1] = mouseWorld.y
          targetLaserPositions[vIdx + 2] = 2.0

          if (k < nearestParticles.length) {
            const pIdx = nearestParticles[k].idx
            targetLaserPositions[vIdx + 3] = positions[pIdx]
            targetLaserPositions[vIdx + 4] = positions[pIdx + 1]
            targetLaserPositions[vIdx + 5] = positions[pIdx + 2]
          } else {
            targetLaserPositions[vIdx + 3] = mouseWorld.x
            targetLaserPositions[vIdx + 4] = mouseWorld.y
            targetLaserPositions[vIdx + 5] = 2.0
          }
        }
        targetLaserGeom.attributes.position.needsUpdate = true
      } else {
        targetLaserLines.visible = false
      }

      composer.render()
    }

    animate()

    // 12. WINDOW RESIZE HANDLER
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      if (w === 0 || h === 0) return

      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      composer.setSize(w, h)
      bloomPass.setSize(w, h)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    // 13. CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerdown', onPointerDown)
      container.removeEventListener('pointerleave', onPointerLeave)
      resizeObserver.disconnect()

      controls.dispose()
      composer.dispose()
      pointsGeometry.dispose()
      pointsMaterial.dispose()
      glowTexture.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      coreSphereGeom.dispose()
      coreSphereMat.dispose()
      haloGeom.dispose()
      haloMat.dispose()
      dodecaGeom.dispose()
      dodecaMat.dispose()
      icosaGeom.dispose()
      icosaMat.dispose()
      ring1Geom.dispose()
      ring1Mat.dispose()
      ring2Geom.dispose()
      ring2Mat.dispose()
      ring3Geom.dispose()
      ring3Mat.dispose()
      packetGeom.dispose()
      packetMat.dispose()
      reticleRingGeom.dispose()
      reticleRingMat.dispose()
      tickGeom.dispose()
      targetLaserGeom.dispose()
      targetLaserMat.dispose()
      renderer.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: '#1D1E33',
        zIndex: 1,
      }}
    >
      {/* Cinematic Ambient Radial Lighting behind the 3D Nexus */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 65% 75% at 68% 48%, rgba(244, 113, 23, 0.16) 0%, rgba(254, 163, 77, 0.05) 45%, rgba(29, 30, 51, 0) 78%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          inset: 0,
          cursor: 'crosshair',
          zIndex: 2,
        }}
      />

      {/* ULTRA-PREMIUM PQC TELEMETRY CARD (Top-Right) */}
      <div
        style={{
          position: 'absolute',
          top: 24,
          right: '4.5vw',
          zIndex: 10,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '9px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          background: 'rgba(23, 24, 42, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '14px 18px',
          borderRadius: 8,
          border: '1px solid rgba(244, 113, 23, 0.35)',
          boxShadow: '0 16px 40px rgba(10, 11, 20, 0.65), 0 0 24px rgba(244, 113, 23, 0.12)',
          minWidth: 260,
          userSelect: 'none',
        }}
      >
        {/* Header line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: isEncapsulating ? '#00FF9D' : '#F47117',
                boxShadow: isEncapsulating ? '0 0 12px #00FF9D' : '0 0 10px #F47117',
                display: 'inline-block',
                transition: 'all 0.3s ease',
              }}
            />
            <span style={{ color: '#FEF3E5', fontWeight: 600, letterSpacing: '0.14em' }}>
              NIST FIPS 203 // ML-KEM
            </span>
          </div>
          <span
            style={{
              color: isEncapsulating ? '#00FF9D' : '#F47117',
              fontWeight: 600,
              fontSize: '8.5px',
              padding: '2px 7px',
              borderRadius: 4,
              background: isEncapsulating ? 'rgba(0, 255, 157, 0.15)' : 'rgba(244, 113, 23, 0.15)',
              border: `1px solid ${isEncapsulating ? 'rgba(0, 255, 157, 0.35)' : 'rgba(244, 113, 23, 0.3)'}`,
              transition: 'all 0.3s ease',
            }}
          >
            {isEncapsulating ? 'ENCAPSULATING' : 'LATTICE ACTIVE'}
          </span>
        </div>

        {/* Cryptographic Parameters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#CBD0D9', fontSize: '8px', borderTop: '1px solid rgba(203, 208, 217, 0.12)', paddingTop: 6 }}>
          <span>LATTICE MODULUS: q=3329</span>
          <span style={{ color: '#FEF3E5' }}>DIM: {pulseCount}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#CBD0D9', fontSize: '8px' }}>
          <span>LIVE ENTROPY: <strong style={{ color: '#FCA34D' }}>{entropy}</strong></span>
          <span>LATENCY: <strong style={{ color: '#FEF3E5' }}>{latency}</strong></span>
        </div>

        {/* Live Ephemeral Key Stream & Encapsulate Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2, gap: 10 }}>
          <div style={{ color: '#8E92A4', fontSize: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            KEY: <span style={{ color: '#FEF3E5' }}>{keyHash}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              triggerEncapsulationRef.current?.()
            }}
            style={{
              background: 'rgba(244, 113, 23, 0.22)',
              border: '1px solid rgba(244, 113, 23, 0.45)',
              color: '#FEF3E5',
              borderRadius: 4,
              padding: '3px 8px',
              fontSize: '8px',
              fontFamily: "'IBM Plex Mono', monospace",
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F47117'
              e.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(244, 113, 23, 0.22)'
              e.currentTarget.style.color = '#FEF3E5'
            }}
          >
            <Zap size={10} style={{ color: '#FCA34D' }} />
            PULSE
          </button>
        </div>
      </div>

      {/* INTERACTIVE HINT BADGE (Bottom-Right) */}
      <div
        style={{
          position: 'absolute',
          bottom: 26,
          right: '4.5vw',
          zIndex: 10,
          pointerEvents: 'none',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '9px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#CBD0D9',
          background: 'rgba(23, 24, 42, 0.76)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          padding: '7px 16px',
          borderRadius: 20,
          border: '1px solid rgba(244, 113, 23, 0.28)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: 9,
        }}
      >
        <Sparkles size={12} style={{ color: '#F47117' }} />
        <span>DRAG TO ROTATE 3D LATTICE • HOVER TO PROBE • CLICK TO ENCAPSULATE</span>
      </div>
    </div>
  )
}

export default LivingCryptographicField
