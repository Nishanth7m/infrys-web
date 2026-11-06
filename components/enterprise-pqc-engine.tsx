'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useReducedMotion } from 'motion/react'
import { Shield, Lock, Cpu, Activity, CheckCircle2 } from 'lucide-react'

// =========================================================================
// INFRYS ENTERPRISE PQC DEFENSE ARCHITECTURE
// Elite MNC / Global Enterprise 3D Security Engine
// Modeled after Fortune 500 Standards (Apple Pro, IBM Quantum, Cloudflare):
// - Optical Sapphire / Glass NIST FIPS 203 Cryptographic Lattice Prism
// - Multi-Track Architectural Data Ribbon with dynamic cryptographic signal pulses
// - Interactive specular light reflections and calibrated 3D mouse parallax
// - Swiss architectural CAD instrumentation & vector coordinate anchors
// =========================================================================

const PALETTE = {
  NAVY: 0x1d1e33,
  CREAM: 0xfef3e5,
  WHITE: 0xffffff,
  SLATE: 0x63667a,
  GRAY: 0xcbd0d9,
  ORANGE: 0xf47117,
  AMBER: 0xfca34d,
  GOLD: 0xffd166,
  LIGHT_ORANGE: 0xff8c38,
}

export function EnterprisePqcEngine() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const width = container.clientWidth
    const height = container.clientHeight

    // 1. SCENE & CAMERA (Dignified architectural telephoto focal length)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100)
    camera.position.set(0, 0.2, 9.8)

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(width, height)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.25

    // Master 3D Group (Scaled with elite MNC negative space)
    const masterGroup = new THREE.Group()
    masterGroup.position.set(0.15, -0.05, 0)
    masterGroup.scale.setScalar(0.86)
    scene.add(masterGroup)

    // 2. STUDIO EXECUTIVE LIGHTING RIG
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85)
    scene.add(ambientLight)

    // Warm Key Light (Infrys Amber-Gold)
    const keyLight = new THREE.DirectionalLight(0xffa843, 3.5)
    keyLight.position.set(6, 7, 7)
    scene.add(keyLight)

    // Cool Technical Rim Light
    const rimLight = new THREE.DirectionalLight(0x7888a6, 2.5)
    rimLight.position.set(-7, -5, -4)
    scene.add(rimLight)

    // Core Internal Point Light (Emanates from inside the cryptographic lattice)
    const coreLight = new THREE.PointLight(0xf47117, 4.5, 12, 1.5)
    coreLight.position.set(0, 0, 0)
    masterGroup.add(coreLight)

    // Interactive Specular Spotlight (Tracks mouse across crystal facets)
    const specularLight = new THREE.PointLight(0xffd166, 2.5, 14, 1.8)
    specularLight.position.set(0, 0, 6)
    scene.add(specularLight)

    // 3. ARCHITECTURAL PERSPECTIVE FOUNDATION GRID
    const gridGroup = new THREE.Group()
    gridGroup.position.set(0, -3.4, 0)
    gridGroup.rotation.x = -Math.PI * 0.48
    masterGroup.add(gridGroup)

    const gridHelper = new THREE.GridHelper(18, 16, 0xf47117, 0x3d435e)
    const gridMat = gridHelper.material as THREE.LineBasicMaterial
    gridMat.transparent = true
    gridMat.opacity = 0.22
    gridGroup.add(gridHelper)

    // 4. CENTRAL NIST ML-KEM CRYSTALLINE LATTICE PRISM
    const crystalGroup = new THREE.Group()
    masterGroup.add(crystalGroup)

    // Outer Faceted Crystal: Truncated Icosahedron
    const crystalGeo = new THREE.IcosahedronGeometry(1.65, 0)
    const crystalWireGeo = new THREE.WireframeGeometry(crystalGeo)

    // Luminous Translucent Amber-Obsidian Glass Facet Material
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x1d1e33,
      emissive: 0xf47117,
      emissiveIntensity: 0.22,
      roughness: 0.18,
      metalness: 0.75,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    })
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat)
    crystalGroup.add(crystalMesh)

    // Laser-etched titanium wireframe edges
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.9,
    })
    const wireMesh = new THREE.LineSegments(crystalWireGeo, wireMat)
    crystalGroup.add(wireMesh)

    // Inner Crystalline Lattice: Geodesic Quantum Icosahedron
    const innerGeo = new THREE.IcosahedronGeometry(1.15, 1)
    const innerWireGeo = new THREE.WireframeGeometry(innerGeo)
    const innerWireMat = new THREE.LineBasicMaterial({
      color: 0xf47117,
      transparent: true,
      opacity: 0.85,
    })
    const innerWireMesh = new THREE.LineSegments(innerWireGeo, innerWireMat)
    crystalGroup.add(innerWireMesh)

    // Luminous Quantum Singularity Beacon (Center Heart)
    const coreSphereGeo = new THREE.SphereGeometry(0.38, 24, 24)
    const coreSphereMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.98,
    })
    const coreSphere = new THREE.Mesh(coreSphereGeo, coreSphereMat)
    crystalGroup.add(coreSphere)

    // Glowing Vertex Beacons at each polyhedral corner
    const vertexPoints: THREE.Vector3[] = []
    const posAttr = crystalGeo.getAttribute('position')
    for (let v = 0; v < posAttr.count; v++) {
      vertexPoints.push(new THREE.Vector3(posAttr.getX(v), posAttr.getY(v), posAttr.getZ(v)))
    }
    const vertexGeo = new THREE.BufferGeometry().setFromPoints(vertexPoints)
    const vertexMat = new THREE.PointsMaterial({
      color: 0xffd166,
      size: 0.08,
      transparent: true,
      opacity: 0.95,
    })
    const vertexMesh = new THREE.Points(vertexGeo, vertexMat)
    crystalGroup.add(vertexMesh)

    // 5. CONCENTRIC CRYPTOGRAPHIC GIMBAL & CALIBRATION RINGS
    const ringsGroup = new THREE.Group()
    masterGroup.add(ringsGroup)

    // Primary Coordinate Ring (Tilted 35 degrees)
    const r1Radius = 2.45
    const r1Points: THREE.Vector3[] = []
    const RING_SEGS = 96
    for (let s = 0; s <= RING_SEGS; s++) {
      const th = (s / RING_SEGS) * Math.PI * 2
      r1Points.push(new THREE.Vector3(Math.cos(th) * r1Radius, Math.sin(th) * r1Radius, 0))
    }
    const r1Geo = new THREE.BufferGeometry().setFromPoints(r1Points)
    const r1Mat = new THREE.LineBasicMaterial({
      color: 0xfca34d,
      transparent: true,
      opacity: 0.65,
    })
    const ring1 = new THREE.LineLoop(r1Geo, r1Mat)
    ring1.rotation.x = Math.PI * 0.35
    ringsGroup.add(ring1)

    // Secondary Telemetry Ring
    const r2Radius = 3.25
    const r2Points: THREE.Vector3[] = []
    for (let s = 0; s <= RING_SEGS; s++) {
      const th = (s / RING_SEGS) * Math.PI * 2
      r2Points.push(new THREE.Vector3(Math.cos(th) * r2Radius, 0, Math.sin(th) * r2Radius))
    }
    const r2Geo = new THREE.BufferGeometry().setFromPoints(r2Points)
    const r2Mat = new THREE.LineBasicMaterial({
      color: 0x63667a,
      transparent: true,
      opacity: 0.45,
    })
    const ring2 = new THREE.LineLoop(r2Geo, r2Mat)
    ring2.rotation.z = -Math.PI * 0.22
    ringsGroup.add(ring2)

    // 6. SWEEPING ARCHITECTURAL CRYPTOGRAPHIC DATA BANDS (Spline Ribbon)
    // 40 High-Density Parallel Vector Splines sweeping gracefully around the engine
    const SPLINE_SAMPLES = 200
    const splineControlPoints: THREE.Vector3[] = [
      new THREE.Vector3(-3.2, -1.8, -1.2),
      new THREE.Vector3(-2.4, -0.4, 0.4),
      new THREE.Vector3(-0.8, 1.8, 1.4),
      new THREE.Vector3(1.4, 2.2, 0.8),
      new THREE.Vector3(3.1, 1.2, -0.6),
      new THREE.Vector3(2.6, -0.8, -1.4),
      new THREE.Vector3(0.4, -2.1, -0.4),
      new THREE.Vector3(-1.8, -2.0, 0.8),
      new THREE.Vector3(-3.2, -0.6, 1.5),
    ]
    const bandCurve = new THREE.CatmullRomCurve3(splineControlPoints, true, 'centripetal')

    const curvePoints: THREE.Vector3[] = []
    const tangents: THREE.Vector3[] = []
    const normals: THREE.Vector3[] = []
    const binormals: THREE.Vector3[] = []

    let tempNormal = new THREE.Vector3(0, 1, 0)
    for (let i = 0; i < SPLINE_SAMPLES; i++) {
      const u = i / SPLINE_SAMPLES
      const pt = bandCurve.getPoint(u)
      const nextPt = bandCurve.getPoint((u + 0.004) % 1.0)
      const tgt = new THREE.Vector3().subVectors(nextPt, pt).normalize()

      tempNormal = tempNormal.clone().sub(tgt.clone().multiplyScalar(tempNormal.dot(tgt))).normalize()
      const binormal = new THREE.Vector3().crossVectors(tgt, tempNormal).normalize()

      curvePoints.push(pt)
      tangents.push(tgt)
      normals.push(tempNormal)
      binormals.push(binormal)
    }

    // 40 Fine Parallel Vector Strands
    const NUM_STRANDS = 40
    const totalLineSegs = SPLINE_SAMPLES * NUM_STRANDS
    const strandPositions = new Float32Array(totalLineSegs * 6)
    const strandColors = new Float32Array(totalLineSegs * 6)
    const baseStrandColors = new Float32Array(totalLineSegs * 6)

    const cSlate = new THREE.Color(PALETTE.SLATE)
    const cCream = new THREE.Color(PALETTE.CREAM)
    const cOrange = new THREE.Color(PALETTE.ORANGE)
    const cAmber = new THREE.Color(PALETTE.AMBER)
    const cWhite = new THREE.Color(PALETTE.WHITE)

    let ptr = 0
    const BAND_WIDTH = 0.95
    for (let s = 0; s < NUM_STRANDS; s++) {
      const offset = (s / (NUM_STRANDS - 1) - 0.5) * BAND_WIDTH
      const isCore = Math.abs(offset) < 0.14
      const isEdge = Math.abs(offset) > 0.38

      for (let i = 0; i < SPLINE_SAMPLES; i++) {
        const nextI = (i + 1) % SPLINE_SAMPLES

        const p1 = curvePoints[i].clone().add(binormals[i].clone().multiplyScalar(offset))
        const p2 = curvePoints[nextI].clone().add(binormals[nextI].clone().multiplyScalar(offset))

        strandPositions[ptr] = p1.x
        strandPositions[ptr + 1] = p1.y
        strandPositions[ptr + 2] = p1.z
        strandPositions[ptr + 3] = p2.x
        strandPositions[ptr + 4] = p2.y
        strandPositions[ptr + 5] = p2.z

        // Depth & core shading
        let col = cSlate.clone()
        if (isCore) {
          col.lerp(cAmber, 0.75).lerp(cWhite, 0.25)
        } else if (isEdge) {
          col.lerp(cOrange, 0.5)
        } else {
          col.lerp(cCream, 0.38)
        }

        const depth = Math.max(0.18, (p1.z + 1.8) / 3.4)
        col.multiplyScalar(0.42 + 0.58 * depth)

        strandColors[ptr] = col.r
        strandColors[ptr + 1] = col.g
        strandColors[ptr + 2] = col.b
        strandColors[ptr + 3] = col.r
        strandColors[ptr + 4] = col.g
        strandColors[ptr + 5] = col.b

        baseStrandColors[ptr] = col.r
        baseStrandColors[ptr + 1] = col.g
        baseStrandColors[ptr + 2] = col.b
        baseStrandColors[ptr + 3] = col.r
        baseStrandColors[ptr + 4] = col.g
        baseStrandColors[ptr + 5] = col.b

        ptr += 6
      }
    }

    const strandGeo = new THREE.BufferGeometry()
    strandGeo.setAttribute('position', new THREE.BufferAttribute(strandPositions, 3))
    strandGeo.setAttribute('color', new THREE.BufferAttribute(strandColors, 3))

    const strandMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.94,
      linewidth: 1,
    })
    const strandMesh = new THREE.LineSegments(strandGeo, strandMat)
    masterGroup.add(strandMesh)

    // 7. ENCRYPTED KEY DATA PACKETS (Luminous Rhombus Capsules along the rail)
    const packetCount = 2
    const packets: THREE.Group[] = []
    const packetLight = new THREE.PointLight(0xf47117, 3.2, 5, 2)
    masterGroup.add(packetLight)

    for (let p = 0; p < packetCount; p++) {
      const pGroup = new THREE.Group()

      // Diamond core
      const pCoreGeo = new THREE.OctahedronGeometry(0.14, 0)
      const pCoreMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const pCore = new THREE.Mesh(pCoreGeo, pCoreMat)
      pGroup.add(pCore)

      // Outer aura ring
      const pAuraGeo = new THREE.RingGeometry(0.22, 0.28, 16)
      const pAuraMat = new THREE.MeshBasicMaterial({
        color: 0xf47117,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      })
      const pAura = new THREE.Mesh(pAuraGeo, pAuraMat)
      pGroup.add(pAura)

      masterGroup.add(pGroup)
      packets.push(pGroup)
    }

    // 8. ARCHITECTURAL CAD LABELS & CROSSHAIRS
    const crosshairCoords: number[] = []
    const markers = [
      new THREE.Vector3(3.2, 2.2, 0),
      new THREE.Vector3(-3.0, -2.4, 0),
      new THREE.Vector3(3.4, -1.9, 0),
      new THREE.Vector3(-3.4, 1.8, 0),
    ]
    const CH_SIZE = 0.16
    markers.forEach((m) => {
      crosshairCoords.push(
        m.x - CH_SIZE, m.y, m.z, m.x + CH_SIZE, m.y, m.z,
        m.x, m.y - CH_SIZE, m.z, m.x, m.y + CH_SIZE, m.z
      )
    })
    const chGeo = new THREE.BufferGeometry()
    chGeo.setAttribute('position', new THREE.Float32BufferAttribute(crosshairCoords, 3))
    const chMat = new THREE.LineBasicMaterial({
      color: 0x63667a,
      transparent: true,
      opacity: 0.4,
    })
    const chMesh = new THREE.LineSegments(chGeo, chMat)
    masterGroup.add(chMesh)

    // 9. DAMPED EXECUTIVE PARALLAX TILT
    const targetTilt = { x: 0, y: 0 }
    const currentTilt = { x: 0, y: 0 }

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1)

      // Calm, disciplined 3.2-degree maximum tilt
      targetTilt.y = nx * 0.055
      targetTilt.x = -ny * 0.045

      // Move specular spotlight
      specularLight.position.x = nx * 5.0
      specularLight.position.y = ny * 4.0
    }

    const onPointerLeave = () => {
      targetTilt.x = 0
      targetTilt.y = 0
    }

    container.addEventListener('mousemove', onPointerMove)
    container.addEventListener('mouseleave', onPointerLeave)

    // 10. ANIMATION LOOP (Calm 60fps Executive Respiration)
    let animationFrameId: number
    const startTime = performance.now()

    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsed = (now - startTime) / 1000

      // Damped Parallax Response
      if (!reduceMotion) {
        currentTilt.x += (targetTilt.x - currentTilt.x) * 0.05
        currentTilt.y += (targetTilt.y - currentTilt.y) * 0.05
      }

      // Calm, authoritative master breathing rotation
      masterGroup.rotation.y = currentTilt.y + Math.sin(elapsed * 0.15) * 0.07
      masterGroup.rotation.x = currentTilt.x + Math.sin(elapsed * 0.11) * 0.035

      // Rotate Crystal Core
      crystalGroup.rotation.y = elapsed * 0.16
      crystalGroup.rotation.x = Math.sin(elapsed * 0.08) * 0.1

      innerWireMesh.rotation.y = -elapsed * 0.32
      innerWireMesh.rotation.z = elapsed * 0.2

      // Core pulse
      const coreScale = 1.0 + Math.sin(elapsed * 2.2) * 0.07
      coreSphere.scale.setScalar(coreScale)
      coreLight.intensity = 3.2 + Math.sin(elapsed * 2.2) * 0.8

      // Rotate Rings
      ring1.rotation.z = elapsed * 0.2
      ring2.rotation.y = -elapsed * 0.25

      // Subtly rotate ground grid
      gridGroup.rotation.z = elapsed * 0.025

      // ADVANCE DATA PACKETS ALONG THE RAIL
      const strandColAttr = strandGeo.getAttribute('color') as THREE.BufferAttribute
      const strandPosAttr = strandGeo.getAttribute('position') as THREE.BufferAttribute

      for (let p = 0; p < packetCount; p++) {
        const uVal = ((elapsed * 0.09) + (p / packetCount)) % 1.0
        const pt = bandCurve.getPoint(uVal)
        packets[p].position.copy(pt)

        // Rotate diamond
        packets[p].rotation.x = elapsed * 2
        packets[p].rotation.y = elapsed * 3

        if (p === 0) {
          packetLight.position.copy(pt)
        }
      }

      // ILLUMINATE SPLINE LINES NEAR PACKET
      const leadPt = packets[0].position
      const ILLUM_RADIUS = 1.35
      const ILLUM_RADIUS_SQ = ILLUM_RADIUS * ILLUM_RADIUS

      for (let i = 0; i < totalLineSegs * 2; i++) {
        const vx = strandPosAttr.getX(i)
        const vy = strandPosAttr.getY(i)
        const vz = strandPosAttr.getZ(i)

        const dx = vx - leadPt.x
        const dy = vy - leadPt.y
        const dz = vz - leadPt.z
        const distSq = dx * dx + dy * dy + dz * dz

        const baseR = baseStrandColors[i * 3]
        const baseG = baseStrandColors[i * 3 + 1]
        const baseB = baseStrandColors[i * 3 + 2]

        if (distSq < ILLUM_RADIUS_SQ) {
          const factor = (1.0 - Math.sqrt(distSq) / ILLUM_RADIUS) * 0.92
          strandColAttr.setXYZ(
            i,
            baseR + (cOrange.r - baseR) * factor,
            baseG + (cOrange.g - baseG) * factor,
            baseB + (cOrange.b - baseB) * factor
          )
        } else {
          strandColAttr.setXYZ(i, baseR, baseG, baseB)
        }
      }
      strandColAttr.needsUpdate = true

      renderer.render(scene, camera)
    }

    animationFrameId = requestAnimationFrame(animate)

    // 11. RESIZE HANDLER
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      if (w === 0 || h === 0) return

      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    // 12. CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousemove', onPointerMove)
      container.removeEventListener('mouseleave', onPointerLeave)

      crystalGeo.dispose()
      crystalWireGeo.dispose()
      crystalMat.dispose()
      wireMat.dispose()
      innerGeo.dispose()
      innerWireGeo.dispose()
      innerWireMat.dispose()
      coreSphereGeo.dispose()
      coreSphereMat.dispose()
      vertexGeo.dispose()
      vertexMat.dispose()
      r1Geo.dispose()
      r1Mat.dispose()
      r2Geo.dispose()
      r2Mat.dispose()
      strandGeo.dispose()
      strandMat.dispose()
      chGeo.dispose()
      chMat.dispose()
      renderer.dispose()
    }
  }, [reduceMotion])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '620px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          zIndex: 1,
        }}
      />

      {/* TOP-RIGHT EXECUTIVE TECHNICAL ANNOTATION (Swiss CAD Design) */}
      <div
        style={{
          position: 'absolute',
          top: 24,
          right: 28,
          zIndex: 10,
          pointerEvents: 'none',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '9.5px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          background: 'rgba(29, 30, 51, 0.76)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '11px 16px',
          borderRadius: 4,
          border: '1px solid rgba(244, 113, 23, 0.3)',
          boxShadow: '0 8px 32px rgba(10, 11, 20, 0.5)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#F47117',
              boxShadow: '0 0 8px #F47117',
              display: 'inline-block',
            }}
          />
          <span style={{ color: '#FEF3E5', fontWeight: 600 }}>
            INFRYS // PQC DEFENSE ARCHITECTURE
          </span>
        </div>

        <div style={{ display: 'flex', gap: 14, color: '#CBD0D9', fontSize: '8.5px' }}>
          <span>NIST FIPS 203 // ML-KEM</span>
          <span style={{ color: '#F47117' }}>STATUS: VERIFIED</span>
        </div>
      </div>
    </div>
  )
}

export default EnterprisePqcEngine
