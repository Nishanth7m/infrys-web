"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import * as THREE from "three"

/* ------------------------------------------------------------------ *
 * Coastline data & distance transform
 * ------------------------------------------------------------------ */
const GRID_COLS = 448
const GRID_ROWS = 224

const COAST_RUNS = [
  "LR3iWfC1291A1W622w12~1Sa7Q14t221J1w23g89M6b1k6X1B123329O29z6326Y2cC1Z19c29c2W57234k4z2E1751~27~8444G1x289137",
  "3i3X4a528522232dax2H11U17D1hw49utscx3Z1e65566452724X45g32fsL1$26x1vw1853Y3uy15~2I1H29G4ca345254239qI1Z24tF11",
  "655g5Y23eY16134g5Z2E1x1b5224123412131319D472d1446125ipE1$24h4311x2ddC11pH317d5s7V1E1kp35216i43A19n2mof212bl6",
  "54rgE1R1dJ172H3d2bb2S32555w1lR1x1jd5664245h3l4vk2fw284e73688kvS1rj15218352C82u335w1W1rdb3257291347225~1eaeC3",
  "614bdpX1y1422v2G81y121253qy12onafb31~2227b2a3E38d33cijbw1e3d6~a3f3dvamfhf561y383h1bU25413b314hdq2y1e3y63B63e",
  "Z1bh225pX2B1X2b131231263k9Y1f4N52fcc242F56fX18s8kV2A1h141y2kat4Y1g4E5513ar87B55hZ11o16alZ1641e31D1a21eV1kc33",
  "S2f7Y43474I14mN497j2D2ikP1p4T1313oP1jjC24f125721L4m8G19mO46433d4C2jeU1u3M13y1U1clA24d2248M4n8K18oL4a222c4A2n",
  "6Y1C12P2Y13sX1534ax522j6N15gI56624W1s4X132R315V14tV13473K5f3T12f22H528w2s3W1y4S222~171J522W222J581~12352G212",
  "A412C24254y212L522X213P5Z186F212F412E277Z1P531Y215H32g1N1~12cG2I4G21121F2E1333d6G3F3G36j3D1G2K2I4C223J2h3i52",
  "3c6G362V257G34adh343bL214B2G4z2I2g31553efa4D377V2112cw369736c36316gH2A2G4w2M2de53c384a7Z2d2~23e82Q24s1121141",
  "561acN2~1H4$1M2ca272345s5P22223g3$23f39M26s4441kcN2Z1J4X1P2ak1643s6M294d3x33b45R24t528321158aP2W1M4W1P21254d",
  "d16S35495y3a448F311sg42S2V1O4U1T2lr22F38268F3412dG3vmU2P1W4L1U2puH3a311S32bH3g28uU2K1Z4I1V2w14a324I3b1C4~32y",
  "1V2E122$423t4213V2E22W2N4U23g121R1U22915m21z512jh2T2G24T2P4R25g3V1Q23ih23y542gi3P2X13g631L2R4K2117h3Y1O22jf3",
  "1E523ek1N2$13i513H2R413~1d42j2~1J21pcM514bC3w24pcZ132O425W1cq3x2M24ia42P59h134I2z23pcr1rF522k5meo3z2G23a2c9x",
  "21U11~1b75b4E2z23nii7i32I533g9gjm4y2z2423c57b$11Y3c36g125x2y25kkecf32~42ifddlj3A2A2162ciz6gW2A24hmbfgg3M43fd",
  "13fbqc4C2V2dI623623Q2C24cr8i12ee2O41efl8ta2E2O2cX6aP2F227w17lfe121H4221ea22m7B121G2P26B75P2H2D17m248e141D414",
  "1f842m7t29F2z24d4F73a9y2F246u6m256g311E411141f371n4w1N2W111g94I782jX1M2w1321l262n2B45s2m221x1M2V1o15P713oV1K",
  "2B13l2r123A4481i3m2D1H2W1ow8p21T1f4T1w23g292L45e442X1S17bS1uw8vT11g22M1Y1424d6W45c414Z1L1H2x1$7z1H2K1~1413a8",
  "K41b98215y2J1F2A1X7B1F2I1A258c7122w4232223b66C2G1G2B1U7E1D2G1D257a31z44a2113975F2F1B2H1S7J1A2D1G266833e234x3",
  "81332843766I2B1$1P1T7S1Z1A1K24a253d11dJ228cg211h4L2z1Z1S1S7V1X1x1N23h121ib4111D222c41x12Q2x1X1V1T7U1Y1x1O242",
  "2x1c91C2ctaQ2x1X1U1W7T1Y1x1V25313241f733$11f2r241A3x1Z1R1Z7Q1Z1y1z3141t3P21$3z1Z1Q1~7N1~1z1O31b1X2277M3z1~1N",
  "1w8M1w2z192A3863V247822~229A1~1L1z8K1~1A184Z2d75q1X156fY267z1~1J1E8G1w2y167Y2i45r1d2G172lX268w1w2E1L8D1w2v96",
  "X2uD11I1vW26auw2D1M8D1x2rc6T2A1L2E1R25bsz2B1M8B1z2sa6Q2G1j1y12kI1O269sB2A1M8z1C2ra6O2J1F2K1P25aqG2w1M8uI2pc4",
  "O2M1B2M1Q23doK2sL8tK2nA3O1y2N1B3mL2tK8tL2lC3N1y2N1C3kN2sK8sO2iE3M1y2M1F3hQ2qK8qR2gF3M1z2q5fI3dU2oK8nV2cJ3cbn",
  "B2lebK3aV2nK8mW24R35j21hI11rgp3Q613iH8kQ7et1d2tdR7kF8kS7cv275y1312W7jF8dD9473C9fE8eE91c3t5B8bE8dA83t4g3t2B8b",
  "11E8az94k6x9cC8ay95o5z9aB8bAjbB8aZd1G5aA88Ij8A88a4Zi8D88Cj8K8411W$4131A9111zb1S72Z84L47C11g575k7w3w13n114121",
  "26x1dI44U83G4j34hO2M2U2bz191W34P8317z33eM16G3M1L36C227P2813G8818~1132332Q24X3oY33A3Z1738q7w6131d1p9X1B7pD7T1",
  "g52125c47s1K47fO1V1z7z1B7U1C3Q2A3P1H7E1N7X1V2y2F3Q1R7A1Y7a6A1z343H137~2z189V7I1J7hab1jV2C253A3478abS7K1~737f",
  "Q3w2Q35O8x1NcG14oNcaOcsU13TO2"
].join("")

const RUN_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$~\n\r\t"
let runDigits: Record<string, number> | null = null

const digitOf = (ch: string) => {
  if (!runDigits) {
    runDigits = {}
    for (let i = 0; i < RUN_ALPHABET.length; i++) {
      runDigits[RUN_ALPHABET[i]] = i
    }
  }
  return runDigits[ch] ?? 0
}

const inflateCoastGrid = () => {
  const cells = new Uint8Array(GRID_COLS * GRID_ROWS)
  const serpentine = new Uint8Array(GRID_COLS * GRID_ROWS)
  let cursor = 0
  let write = 0
  let value = 0

  while (cursor < COAST_RUNS.length && write < serpentine.length) {
    let run = 0
    let shift = 0
    let digit = 0
    do {
      digit = digitOf(COAST_RUNS[cursor++])
      run |= (digit & 31) << shift
      shift += 5
    } while (digit & 32 && cursor < COAST_RUNS.length)

    const stop = Math.min(write + run, serpentine.length)
    if (value) serpentine.fill(1, write, stop)
    write = stop
    value ^= 1
  }

  let read = 0
  for (let row = 0; row < GRID_ROWS; row++) {
    const base = row * GRID_COLS
    if (row & 1) {
      for (let col = GRID_COLS - 1; col >= 0; col--) cells[base + col] = serpentine[read++]
    } else {
      for (let col = 0; col < GRID_COLS; col++) cells[base + col] = serpentine[read++]
    }
  }
  return cells
}

const buildProximityField = (cells: Uint8Array) => {
  const W = GRID_COLS
  const H = GRID_ROWS
  const FAR = 1e6
  const ORTHO = 1
  const DIAG = 1.41421356

  const sweep = (target: number) => {
    const d = new Float32Array(W * H)
    for (let i = 0; i < d.length; i++) d[i] = cells[i] === target ? 0 : FAR
    const wrapCol = (c: number) => (c < 0 ? c + W : c >= W ? c - W : c)
    const relax = (i: number, j: number, cost: number) => {
      const v = d[j] + cost
      if (v < d[i]) d[i] = v
    }

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const i = y * W + x
        const l = y * W + wrapCol(x - 1)
        relax(i, l, ORTHO)
        if (y > 0) {
          const up = (y - 1) * W
          relax(i, up + x, ORTHO)
          relax(i, up + wrapCol(x - 1), DIAG)
          relax(i, up + wrapCol(x + 1), DIAG)
        }
      }
    }

    for (let y = H - 1; y >= 0; y--) {
      for (let x = W - 1; x >= 0; x--) {
        const i = y * W + x
        const r = y * W + wrapCol(x + 1)
        relax(i, r, ORTHO)
        if (y < H - 1) {
          const dn = (y + 1) * W
          relax(i, dn + x, ORTHO)
          relax(i, dn + wrapCol(x - 1), DIAG)
          relax(i, dn + wrapCol(x + 1), DIAG)
        }
      }
    }
    return d
  }

  const toWater = sweep(0)
  const toLand = sweep(1)
  const field = new Float32Array(W * H)
  for (let i = 0; i < field.length; i++) {
    field[i] = cells[i] ? toWater[i] - 0.5 : 0.5 - toLand[i]
  }
  return field
}

let cachedField: Float32Array | null = null
const proximityField = () => {
  if (!cachedField) {
    try {
      cachedField = buildProximityField(inflateCoastGrid())
    } catch {
      cachedField = new Float32Array(GRID_COLS * GRID_ROWS)
    }
  }
  return cachedField
}

const inlandDepth = (u: number, v: number) => {
  const field = proximityField()
  const fx = u * GRID_COLS - 0.5
  const fy = v * GRID_ROWS - 0.5
  const x0 = Math.floor(fx)
  const y0 = Math.floor(fy)
  const tx = fx - x0
  const ty = fy - y0
  const col = (c: number) => ((c % GRID_COLS) + GRID_COLS) % GRID_COLS
  const row = (r: number) => (r < 0 ? 0 : r >= GRID_ROWS ? GRID_ROWS - 1 : r)

  const xa = col(x0)
  const xb = col(x0 + 1)
  const ya = row(y0) * GRID_COLS
  const yb = row(y0 + 1) * GRID_COLS

  const top = field[ya + xa] * (1 - tx) + field[ya + xb] * tx
  const bottom = field[yb + xa] * (1 - tx) + field[yb + xb] * tx
  return top * (1 - ty) + bottom * ty
}

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */
const DEG = Math.PI / 180
const TAU = Math.PI * 2
const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v)

const readTint = (input?: string) => {
  const tint = { rgb: new THREE.Color(0xffffff), alpha: 1 }
  if (typeof input !== "string" || !input.length) return tint

  let text = input.trim()
  if (text.slice(0, 4).toLowerCase() === "var(") {
    const split = text.indexOf(",")
    const tail = text.lastIndexOf(")")
    if (split > -1 && tail > split) text = text.slice(split + 1, tail).trim()
  }

  const hex = /^#([0-9a-f]{3,8})$/i.exec(text)
  if (hex) {
    const body = hex[1]
    if (body.length === 4 || body.length === 8) {
      const step = body.length / 4
      const slice = body.slice(3 * step)
      const raw = step === 1 ? slice + slice : slice
      tint.alpha = parseInt(raw, 16) / 255
    }
    const rgbPart = body.slice(0, body.length >= 6 ? 6 : 3)
    try {
      tint.rgb.set("#" + rgbPart)
    } catch {
      /* leave white */
    }
    return tint
  }

  const fn = /^(rgba?|hsla?)\(([^)]*)\)$/i.exec(text)
  if (fn) {
    const parts = fn[2].split(/[,/\s]+/).filter(Boolean)
    if (parts.length >= 4) {
      const last = parts[3]
      const n = parseFloat(last)
      if (!Number.isNaN(n)) tint.alpha = clamp(last.endsWith("%") ? n / 100 : n, 0, 1)
    }
  }

  try {
    tint.rgb.set(text)
  } catch {
    const embedded = /#[0-9a-f]{6}/i.exec(text)
    if (embedded) {
      try {
        tint.rgb.set(embedded[0])
      } catch {
        /* leave white */
      }
    }
  }
  return tint
}

const unitFromGeo = (latDeg: number, lngDeg: number, out?: THREE.Vector3) => {
  const lat = latDeg * DEG
  const lng = lngDeg * DEG
  const band = Math.cos(lat)
  const v = out || new THREE.Vector3()
  return v.set(Math.sin(lng) * band, Math.sin(lat), Math.cos(lng) * band)
}

const makeRandom = (seed: number) => {
  let state = (seed >>> 0) || 1
  return () => {
    state ^= state << 13
    state ^= state >>> 17
    state ^= state << 5
    state >>>= 0
    return state / 4294967296
  }
}

const scatterLandDots = (targetDots: number) => {
  const landShare = 0.292
  const sphereDots = Math.max(64, Math.round(targetDots / landShare))
  const spacing = Math.sqrt((4 * Math.PI) / sphereDots)
  const rings = Math.max(3, Math.round(Math.PI / spacing))
  const random = makeRandom(2654435769 ^ sphereDots)

  const coords: number[] = []
  const seeds: number[] = []
  const coastal: number[] = []
  const COAST_CELLS = 6

  for (let ring = 0; ring < rings; ring++) {
    const theta = (Math.PI * (ring + 0.5)) / rings
    const band = Math.sin(theta)
    const perRing = Math.max(1, Math.round((TAU * band) / spacing))
    const phase = random() * TAU
    const dTheta = Math.PI / rings
    const dPhi = TAU / perRing

    for (let step = 0; step < perRing; step++) {
      const t = theta + (random() - 0.5) * dTheta * 0.85
      const p = phase + (step + (random() - 0.5) * 0.85) * dPhi
      const sinT = Math.sin(t)
      const x = sinT * Math.sin(p)
      const y = Math.cos(t)
      const z = sinT * Math.cos(p)

      const u = 0.5 + Math.atan2(x, z) / TAU
      const v = clamp(0.5 - Math.asin(clamp(y, -1, 1)) / Math.PI, 0, 1)

      const depth = inlandDepth(u - Math.floor(u), v)
      if (depth <= 0) continue

      coords.push(x, y, z)
      seeds.push(random() * 512)
      coastal.push(clamp(depth / COAST_CELLS, 0, 1))
    }
  }

  return {
    position: new Float32Array(coords),
    seed: new Float32Array(seeds),
    coast: new Float32Array(coastal),
    count: seeds.length,
  }
}

/* ------------------------------------------------------------------ *
 * Shaders
 * ------------------------------------------------------------------ */
const FIELD_VERTEX = `
attribute float aSeed;
attribute float aCoast;

uniform float uTime;
uniform float uProgress;
uniform float uFormation;
uniform vec3  uSweepAxis;

uniform float uDotSize;
uniform float uSizeJitter;
uniform float uCoastLift;
uniform float uBackFade;

uniform float uCursorMode;
uniform vec3  uCursor;
uniform float uCursorGain;
uniform float uReach;
uniform float uWaveLength;
uniform float uWaveSpeed;
uniform float uCrest;
uniform float uSwell;
uniform float uGlow;
uniform vec3  uDrift;

varying float vHeat;
varying float vFade;
varying float vGrain;
varying float vPx;

float noise1(float s) {
    return fract(sin(s * 78.233 + 12.9898) * 43758.5453);
}

void main() {
    vec3 nrm = normalize(position);
    float rA = noise1(aSeed);
    float rB = noise1(aSeed + 4.77);
    float rC = noise1(aSeed + 9.13);

    float radius = 1.0;
    float spread = 0.0;
    float born = 1.0;

    if (uFormation < 0.5) {
        float key = 0.5 - 0.5 * dot(nrm, uSweepAxis);
        float t = clamp((uProgress - key * 0.72) / 0.28, 0.0, 1.0);
        float e = 1.0 - pow(1.0 - t, 3.0);
        radius = mix(0.82, 1.0, e) + sin(e * 3.14159) * 0.045;
        born = smoothstep(0.0, 0.35, t);
    } else if (uFormation < 1.5) {
        float t = clamp((uProgress - rA * 0.32) / 0.68, 0.0, 1.0);
        float e = 1.0 - pow(1.0 - t, 4.0);
        radius = e;
        born = smoothstep(0.0, 0.22, t);
    } else if (uFormation < 2.5) {
        float t = clamp((uProgress - rA * 0.4) / 0.6, 0.0, 1.0);
        float e = 1.0 - pow(1.0 - t, 3.0);
        radius = mix(2.05, 1.0, e);
        spread = 0.85 * (1.0 - e);
        born = smoothstep(0.0, 0.2, t);
    } else if (uFormation < 3.5) {
        float cyc = fract(uTime * 0.055 + rA * 13.0);
        float arrive = 0.22;
        if (cyc < arrive) {
            float t = cyc / arrive;
            float e = 1.0 - pow(1.0 - t, 3.0);
            radius = mix(1.85, 1.0, e);
            spread = 0.75 * (1.0 - e);
            born = smoothstep(0.0, 0.3, t);
        } else {
            born = 1.0 - smoothstep(0.90, 1.0, cyc);
        }
        born *= smoothstep(0.0, 0.18, uProgress);
    } else {
        born = uProgress;
    }

    vec3 wander = normalize(vec3(rA, rB, rC) - 0.5);
    vec3 pos = normalize(nrm + wander * spread) * radius;

    float heat = 0.0;
    float swell = 1.0;

    if (uCursorMode < 2.5 && uCursorGain > 0.002) {
        float ang = acos(clamp(dot(nrm, uCursor), -1.0, 1.0));
        float env = 1.0 - smoothstep(0.0, uReach, ang);
        env *= env;
        float amp = env * uCursorGain;

        if (uCursorMode < 0.5) {
            float wave = sin(
                ang / max(uWaveLength, 0.02) * 6.2831853
                - uTime * uWaveSpeed * 6.2831853
            );
            pos += nrm * wave * amp * uCrest;
            heat = max(0.0, wave) * amp;
            swell = 1.0 + max(0.0, wave) * amp * uSwell;
        } else if (uCursorMode < 1.5) {
            float breathe = 0.78 + 0.22 * sin(uTime * 1.7);
            heat = amp * breathe;
            swell = 1.0 + heat * uSwell * 0.6;
        } else {
            vec3 tangent = uDrift - dot(uDrift, nrm) * nrm;
            pos += tangent * amp * uCrest * 8.0;
            heat = amp * clamp(length(uDrift) * 24.0, 0.0, 1.0);
            swell = 1.0 + heat * uSwell * 0.5;
        }
    }

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    float shore = mix(1.0 + uCoastLift * 0.9, 1.0 - uCoastLift * 0.35, aCoast);
    float jitter = 1.0 + (rB - 0.5) * 2.0 * uSizeJitter;
    float breath = 0.88 + 0.12 * sin(uTime * 1.9 + rA * 21.0);

    gl_PointSize = max(
        0.0,
        uDotSize * jitter * shore * swell * breath * (2.0 / -mv.z)
    );
    vPx = gl_PointSize;

    float facing = normalize(normalMatrix * nrm).z;
    vFade = mix(uBackFade, 1.0, smoothstep(-0.22, 0.28, facing)) * born;
    vHeat = clamp(heat * uGlow, 0.0, 1.0);
    vGrain = 0.45 + 0.55 * rC;
}
`

const FIELD_FRAGMENT = `
uniform vec3  uInk;
uniform float uInkAlpha;
uniform vec3  uTint;

varying float vHeat;
varying float vFade;
varying float vGrain;
varying float vPx;

void main() {
    float r = length(gl_PointCoord - vec2(0.5));
    float edge = 1.2 / max(vPx, 1.0);
    float disc = 1.0 - smoothstep(0.5 - edge, 0.5, r);
    if (disc <= 0.0) discard;

    vec3 rgb = mix(uInk, uTint, vHeat);
    float a = disc * uInkAlpha * vGrain * vFade * (1.0 + vHeat * 0.85);
    gl_FragColor = vec4(rgb, clamp(a, 0.0, 1.0));
}
`

const ROUTE_VERTEX = `
attribute float aStep;
attribute float aOffset;

uniform float uTime;
uniform float uSpeed;
uniform float uTrail;
uniform float uSize;
uniform float uStyle;

varying float vComet;
varying float vFront;
varying float vPx;

void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;

    if (uStyle > 0.5) {
        vComet = 0.7;
    } else {
        float head = fract(uTime * uSpeed + aOffset);
        float behind = head - aStep;
        if (behind < 0.0) behind += 1.0;
        vComet = pow(clamp(1.0 - behind / max(uTrail, 0.01), 0.0, 1.0), 2.5);
    }

    vFront = smoothstep(-0.05, 0.25, normalize(normalMatrix * normalize(position)).z);
    gl_PointSize = max(0.0, uSize * (0.8 + 1.0 * vComet) * (2.0 / -mv.z));
    vPx = gl_PointSize;
}
`

const ROUTE_FRAGMENT = `
uniform vec3  uColor;
uniform float uRest;
uniform float uProgress;

varying float vComet;
varying float vFront;
varying float vPx;

void main() {
    float r = length(gl_PointCoord - vec2(0.5));
    float edge = 1.3 / max(vPx, 1.0);
    float disc = 1.0 - smoothstep(0.5 - edge, 0.5, r);
    if (disc <= 0.0) discard;

    float a = (uRest + vComet * (1.0 - uRest)) * disc * vFront * uProgress;
    gl_FragColor = vec4(uColor, clamp(a, 0.0, 1.0));
}
`

const ROUTE_LINE_VERTEX = `
attribute vec3 aTangent;
attribute float aSide;
attribute float aStep;
attribute float aOffset;

uniform vec2 uResolution;
uniform float uWidth;

varying float vStep;
varying float vOffset;
varying float vFront;

void main() {
    vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vec4 ahead = projectionMatrix * modelViewMatrix * vec4(position + aTangent * 0.01, 1.0);

    vec2 a = clip.xy / max(abs(clip.w), 0.0001);
    vec2 b = ahead.xy / max(abs(ahead.w), 0.0001);
    vec2 travel = (b - a) * uResolution;
    float len = length(travel);
    vec2 dir = len > 0.0001 ? travel / len : vec2(1.0, 0.0);
    vec2 perp = vec2(-dir.y, dir.x);

    vec2 shift = perp * aSide * uWidth * 0.5 / (uResolution * 0.5);
    gl_Position = clip;
    gl_Position.xy += shift * clip.w;

    vStep = aStep;
    vOffset = aOffset;
    vFront = smoothstep(-0.05, 0.25, normalize(normalMatrix * normalize(position)).z);
}
`

const ROUTE_LINE_FRAGMENT = `
uniform vec3  uColor;
uniform float uTime;
uniform float uSpeed;
uniform float uTrail;
uniform float uRest;
uniform float uProgress;
uniform float uStyle;
uniform float uDashCount;

varying float vStep;
varying float vOffset;
varying float vFront;

void main() {
    float a;
    if (uStyle < 0.5) {
        a = uRest;
    } else if (uStyle < 1.5) {
        float d = fract(vStep * uDashCount - uTime * uSpeed);
        if (d > 0.55) discard;
        a = uRest;
    } else {
        float head = fract(uTime * uSpeed + vOffset);
        float behind = head - vStep;
        if (behind < 0.0) behind += 1.0;
        float comet = pow(clamp(1.0 - behind / max(uTrail, 0.01), 0.0, 1.0), 2.5);
        a = uRest + comet * (1.0 - uRest);
    }
    gl_FragColor = vec4(uColor, clamp(a * vFront * uProgress, 0.0, 1.0));
}
`

/* ------------------------------------------------------------------ *
 * Runtime Engine
 * ------------------------------------------------------------------ */
const CAMERA_FOV = 45
const CAMERA_Z = 3.5
const SWEEP_AXIS = new THREE.Vector3(-0.78, 0.46, 0.42).normalize()

const CURSOR_MODE_INDEX: Record<string, number> = { sonar: 0, halo: 1, wake: 2, off: 3 }
const ROUTE_DOT_STYLES: Record<string, number> = { comet: 0, beads: 1 }
const ROUTE_LINE_STYLES: Record<string, number> = { solid: 0, dashed: 1, pulse: 2 }
const isLineRoute = (style: string) => style in ROUTE_LINE_STYLES
const RIBBON_SAMPLES = 96
const FORMATION_INDEX: Record<string, number> = { sweep: 0, bloom: 1, fall: 2, drift: 3, instant: 4 }

interface GlobePlaceInternal {
  vec: THREE.Vector3
  node: HTMLElement | null
}

class GlobeRuntime {
  host: HTMLElement
  still: boolean
  cfg: any

  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  pivot: THREE.Group
  routeGroup: THREE.Group
  field: THREE.Points | null = null

  fieldMaterial: THREE.ShaderMaterial
  fieldUniforms: Record<string, { value: any }>
  routeMaterial: THREE.ShaderMaterial
  routeUniforms: Record<string, { value: any }>
  routeLineMaterial: THREE.ShaderMaterial
  routeLineUniforms: Record<string, { value: any }>

  tier = 2
  width = 1
  height = 1
  places: GlobePlaceInternal[] = []
  progress = 0
  elapsed = 0
  spinAngle = 0
  tiltAngle = 0
  scale = 1
  flingX = 0
  dragging = false
  dragFrom = { x: 0, y: 0 }
  pointerInside = false
  pointerUV = { x: -1, y: -1 }
  hoverSince = 0
  cursorGain = 0
  contactLocal = new THREE.Vector3(0, 0, 1)
  lastWorldHit: THREE.Vector3 | null = null
  drift = new THREE.Vector3()
  visible = false
  allowed = true
  raf: number | null = null
  last: number | null = null

  ray = new THREE.Raycaster()
  ndc = new THREE.Vector2()
  localRay = new THREE.Ray()
  unitSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 1)
  inverse = new THREE.Matrix4()
  hit = new THREE.Vector3()
  scratchA = new THREE.Vector3()
  scratchB = new THREE.Vector3()
  scratchC = new THREE.Vector3()
  pivotOrigin = new THREE.Vector3()
  scratchQ = new THREE.Quaternion()

  resizeWatcher: ResizeObserver | null = null
  viewWatcher: IntersectionObserver | null = null

  constructor(host: HTMLElement, cfg: any, still: boolean) {
    this.host = host
    this.cfg = cfg
    this.still = still
    this.tier = resolveTier(cfg.quality)

    this.measure()
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: this.tier > 0,
      powerPreference: "high-performance",
    })
    this.renderer.setPixelRatio(Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, this.tier > 0 ? 2 : 1.5))
    this.renderer.setSize(this.width, this.height)
    this.renderer.domElement.style.display = "block"
    this.renderer.domElement.style.touchAction = "none"
    host.appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(CAMERA_FOV, this.width / this.height, 0.1, 80)
    this.camera.position.z = CAMERA_Z

    this.pivot = new THREE.Group()
    this.pivot.rotation.order = "XYZ"
    this.scene.add(this.pivot)

    this.routeGroup = new THREE.Group()
    this.routeGroup.renderOrder = 2
    this.pivot.add(this.routeGroup)

    this.fieldUniforms = {
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uFormation: { value: 0 },
      uSweepAxis: { value: SWEEP_AXIS.clone() },
      uDotSize: { value: 5 },
      uSizeJitter: { value: 0.6 },
      uCoastLift: { value: 0.35 },
      uBackFade: { value: 0.14 },
      uCursorMode: { value: 0 },
      uCursor: { value: new THREE.Vector3(0, 0, 1) },
      uCursorGain: { value: 0 },
      uReach: { value: 0.5 },
      uWaveLength: { value: 0.22 },
      uWaveSpeed: { value: 0.55 },
      uCrest: { value: 0.035 },
      uSwell: { value: 1.2 },
      uGlow: { value: 1 },
      uDrift: { value: new THREE.Vector3() },
      uInk: { value: new THREE.Color("#FEF3E5") },
      uInkAlpha: { value: 1 },
      uTint: { value: new THREE.Color("#F47117") },
    }

    this.fieldMaterial = new THREE.ShaderMaterial({
      uniforms: this.fieldUniforms,
      vertexShader: FIELD_VERTEX,
      fragmentShader: FIELD_FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    })

    this.routeUniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 0.22 },
      uTrail: { value: 0.3 },
      uSize: { value: 4 },
      uRest: { value: 0.22 },
      uStyle: { value: 0 },
      uProgress: { value: 0 },
      uColor: { value: new THREE.Color("#F47117") },
    }

    this.routeMaterial = new THREE.ShaderMaterial({
      uniforms: this.routeUniforms,
      vertexShader: ROUTE_VERTEX,
      fragmentShader: ROUTE_FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    })

    this.routeLineUniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 0.22 },
      uTrail: { value: 0.3 },
      uRest: { value: 0.32 },
      uProgress: { value: 0 },
      uStyle: { value: 0 },
      uWidth: { value: 2 },
      uDashCount: { value: 18 },
      uResolution: { value: new THREE.Vector2(this.width, this.height) },
      uColor: { value: new THREE.Color("#F47117") },
    }

    this.routeLineMaterial = new THREE.ShaderMaterial({
      uniforms: this.routeLineUniforms,
      vertexShader: ROUTE_LINE_VERTEX,
      fragmentShader: ROUTE_LINE_FRAGMENT,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending,
    })

    this.spinAngle = -(cfg.startLng || 0) * DEG
    this.tiltAngle = (cfg.tilt || 0) * DEG
    this.pivot.rotation.set(this.tiltAngle, this.spinAngle, 0)

    this.bindPointer()

    this.resizeWatcher = new ResizeObserver(() => this.resize())
    this.resizeWatcher.observe(host)

    this.viewWatcher = new IntersectionObserver((entries) => {
      const seen = entries[0]?.isIntersecting ?? false
      if (!this.still && this.cfg.replayOnScroll && seen !== this.visible) {
        this.progress = 0
        this.elapsed = 0
      }
      this.visible = seen
    })
    this.viewWatcher.observe(host)

    this.apply(cfg)
    this.buildField()
    this.buildRoutes()

    if (this.still) {
      this.paintStatic()
    } else {
      this.raf = requestAnimationFrame(this.tick)
    }
  }

  apply(cfg: any) {
    const prev = this.cfg
    this.cfg = cfg
    const u = this.fieldUniforms
    const r = this.routeUniforms

    const ink = readTint(cfg.ink)
    u.uInk.value.copy(ink.rgb)
    u.uInkAlpha.value = ink.alpha
    u.uTint.value.copy(readTint(cfg.tint).rgb)
    u.uBackFade.value = clamp(cfg.backFade, 0, 1)
    u.uDotSize.value = cfg.dotSize
    u.uSizeJitter.value = clamp(cfg.sizeJitter, 0, 1)
    u.uCoastLift.value = clamp(cfg.coastLift, 0, 1)
    u.uFormation.value = FORMATION_INDEX[cfg.formation] ?? 0
    u.uCursorMode.value = CURSOR_MODE_INDEX[cfg.cursorMode] ?? 3
    u.uReach.value = Math.max(0.05, cfg.reach)
    u.uWaveLength.value = Math.max(0.02, cfg.waveLength)
    u.uWaveSpeed.value = cfg.waveSpeed
    u.uCrest.value = cfg.crest
    u.uSwell.value = cfg.swell
    u.uGlow.value = cfg.glow

    const accent = readTint(cfg.accent).rgb
    r.uColor.value.copy(accent)
    r.uSpeed.value = cfg.routeSpeed
    r.uTrail.value = clamp(cfg.routeTrail, 0.02, 1)
    r.uSize.value = cfg.routeSize
    r.uRest.value = clamp(cfg.routeRest, 0, 1)
    r.uStyle.value = ROUTE_DOT_STYLES[cfg.routeStyle] ?? 0

    const ln = this.routeLineUniforms
    ln.uColor.value.copy(accent)
    ln.uSpeed.value = cfg.routeSpeed
    ln.uTrail.value = clamp(cfg.routeTrail, 0.02, 1)
    ln.uRest.value = clamp(cfg.routeRest, 0, 1)
    ln.uWidth.value = Math.max(0.5, cfg.routeWidth ?? 2)
    ln.uDashCount.value = Math.max(2, cfg.dashCount ?? 18)
    ln.uStyle.value = ROUTE_LINE_STYLES[cfg.routeStyle] ?? 0

    this.routeGroup.visible = !!cfg.routesOn

    if (prev && prev.startLng !== cfg.startLng) {
      this.spinAngle = -(cfg.startLng || 0) * DEG
    }
    if (this.still) this.paintStatic()
  }

  setPlaces(list: GlobePlace[], lift: number) {
    const radius = 1.015 + Math.max(0, lift)
    this.places = list.map((p) => ({
      vec: unitFromGeo(p.lat, p.lng).multiplyScalar(radius),
      node: null,
    }))
  }

  setPlaceNodes(nodes: (HTMLElement | null)[]) {
    for (let i = 0; i < this.places.length; i++) {
      this.places[i].node = nodes[i] || null
    }
    if (this.still) this.paintStatic()
  }

  replayEntrance() {
    this.progress = 0
    this.elapsed = 0
  }

  buildField() {
    this.disposeField()
    const budget = this.tier > 0 ? 1 : 0.45
    const data = scatterLandDots(Math.max(600, Math.round(this.cfg.dotTarget * budget)))
    if (!data.count) return

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(data.position, 3))
    geo.setAttribute("aSeed", new THREE.BufferAttribute(data.seed, 1))
    geo.setAttribute("aCoast", new THREE.BufferAttribute(data.coast, 1))
    geo.setDrawRange(0, data.count)

    this.field = new THREE.Points(geo, this.fieldMaterial)
    this.field.frustumCulled = false
    this.field.renderOrder = 1
    this.pivot.add(this.field)
    if (this.still) this.paintStatic()
  }

  buildRoutes() {
    this.disposeRoutes()
    const cfg = this.cfg
    const pts = cfg.places || []
    if (!cfg.routesOn || pts.length < 2) return

    const pairs: [number, number][] = []
    if (cfg.routeMode === "mesh") {
      for (let a = 0; a < pts.length; a++) {
        for (let b = a + 1; b < pts.length; b++) pairs.push([a, b])
      }
    } else if (cfg.routeMode === "hub") {
      for (let b = 1; b < pts.length; b++) pairs.push([0, b])
    } else {
      for (let a = 0; a < pts.length; a++) pairs.push([a, (a + 1) % pts.length])
    }
    if (!pairs.length) return

    const ribbon = isLineRoute(cfg.routeStyle)
    const samples = ribbon ? RIBBON_SAMPLES : Math.max(8, Math.round(cfg.routeDots))
    const start = new THREE.Vector3()
    const end = new THREE.Vector3()

    pairs.forEach(([a, b], index) => {
      unitFromGeo(pts[a].lat, pts[a].lng, start)
      unitFromGeo(pts[b].lat, pts[b].lng, end)
      const sweep = Math.acos(clamp(start.dot(end), -1, 1))

      const lift = 0.05 + (sweep / Math.PI) * cfg.routeAltitude
      const phase = index / pairs.length
      const xyz = new Float32Array(samples * 3)

      for (let s = 0; s < samples; s++) {
        const t = s / (samples - 1)
        let x: number, y: number, z: number
        if (sweep < 1e-4) {
          x = start.x
          y = start.y
          z = start.z
        } else {
          const k = Math.sin(sweep)
          const w0 = Math.sin((1 - t) * sweep) / k
          const w1 = Math.sin(t * sweep) / k
          x = start.x * w0 + end.x * w1
          y = start.y * w0 + end.y * w1
          z = start.z * w0 + end.z * w1
        }
        const len = Math.hypot(x, y, z) || 1
        const h = (1 + lift * Math.sin(Math.PI * t)) / len
        xyz[s * 3] = x * h
        xyz[s * 3 + 1] = y * h
        xyz[s * 3 + 2] = z * h
      }

      const geo = new THREE.BufferGeometry()
      if (!ribbon) {
        const steps = new Float32Array(samples)
        const offsets = new Float32Array(samples)
        for (let s = 0; s < samples; s++) {
          steps[s] = s / (samples - 1)
          offsets[s] = phase
        }
        geo.setAttribute("position", new THREE.BufferAttribute(xyz, 3))
        geo.setAttribute("aStep", new THREE.BufferAttribute(steps, 1))
        geo.setAttribute("aOffset", new THREE.BufferAttribute(offsets, 1))
        const strand = new THREE.Points(geo, this.routeMaterial)
        strand.frustumCulled = false
        this.routeGroup.add(strand)
        return
      }

      const verts = samples * 2
      const pos = new Float32Array(verts * 3)
      const tangent = new Float32Array(verts * 3)
      const sideAttr = new Float32Array(verts)
      const stepAttr = new Float32Array(verts)
      const offsetAttr = new Float32Array(verts)

      for (let s = 0; s < samples; s++) {
        const prev = Math.max(0, s - 1) * 3
        const next = Math.min(samples - 1, s + 1) * 3
        let tx = xyz[next] - xyz[prev]
        let ty = xyz[next + 1] - xyz[prev + 1]
        let tz = xyz[next + 2] - xyz[prev + 2]
        const tl = Math.hypot(tx, ty, tz) || 1
        tx /= tl
        ty /= tl
        tz /= tl

        for (let k = 0; k < 2; k++) {
          const v = s * 2 + k
          pos[v * 3] = xyz[s * 3]
          pos[v * 3 + 1] = xyz[s * 3 + 1]
          pos[v * 3 + 2] = xyz[s * 3 + 2]
          tangent[v * 3] = tx
          tangent[v * 3 + 1] = ty
          tangent[v * 3 + 2] = tz
          sideAttr[v] = k === 0 ? -1 : 1
          stepAttr[v] = s / (samples - 1)
          offsetAttr[v] = phase
        }
      }

      const index16 = new Uint16Array((samples - 1) * 6)
      for (let s = 0; s < samples - 1; s++) {
        const base = s * 2
        const o = s * 6
        index16[o] = base
        index16[o + 1] = base + 1
        index16[o + 2] = base + 2
        index16[o + 3] = base + 1
        index16[o + 4] = base + 3
        index16[o + 5] = base + 2
      }

      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
      geo.setAttribute("aTangent", new THREE.BufferAttribute(tangent, 3))
      geo.setAttribute("aSide", new THREE.BufferAttribute(sideAttr, 1))
      geo.setAttribute("aStep", new THREE.BufferAttribute(stepAttr, 1))
      geo.setAttribute("aOffset", new THREE.BufferAttribute(offsetAttr, 1))
      geo.setIndex(new THREE.BufferAttribute(index16, 1))

      const strand = new THREE.Mesh(geo, this.routeLineMaterial)
      strand.frustumCulled = false
      this.routeGroup.add(strand)
    })
    if (this.still) this.paintStatic()
  }

  bindPointer() {
    this.host.addEventListener("pointerdown", this.onDown)
    this.host.addEventListener("pointerleave", this.onLeave)
    window.addEventListener("pointermove", this.onMove)
    window.addEventListener("pointerup", this.onUp)
    window.addEventListener("pointercancel", this.onUp)
  }

  measure() {
    this.width = Math.max(1, this.host.clientWidth || 1)
    this.height = Math.max(1, this.host.clientHeight || 1)
  }

  fitScale() {
    const viewH = 2 * Math.tan((CAMERA_FOV * DEG) / 2) * CAMERA_Z
    const viewW = viewH * (this.width / this.height)
    return (Math.min(viewH, viewW) / 2.6) * (this.cfg.zoom ?? 1)
  }

  resize() {
    this.measure()
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
    this.routeLineUniforms.uResolution.value.set(this.width, this.height)
    if (this.still) this.paintStatic()
    else if (!this.visible) this.renderOnce()
  }

  renderOnce() {
    this.renderer.render(this.scene, this.camera)
  }

  paintStatic() {
    this.progress = 1
    this.fieldUniforms.uProgress.value = 1
    this.routeUniforms.uProgress.value = 1
    this.routeLineUniforms.uProgress.value = 1
    this.scale = this.fitScale()
    this.pivot.scale.setScalar(this.scale)
    this.pivot.position.set(this.cfg.offsetX || 0, this.cfg.offsetY || 0, 0)
    this.pivot.rotation.set(this.tiltAngle, this.spinAngle, 0)
    this.scene.updateMatrixWorld(true)
    this.renderer.render(this.scene, this.camera)
    this.placeProjection()
  }

  trackCursor(dt: number) {
    const cfg = this.cfg
    const live = cfg.cursorMode !== "off" && this.pointerInside && performance.now() - this.hoverSince >= (cfg.cursorDelay || 0) * 1e3
    let want = 0

    if (live) {
      this.ndc.set(this.pointerUV.x * 2 - 1, -(this.pointerUV.y * 2) + 1)
      this.ray.setFromCamera(this.ndc, this.camera)
      this.inverse.copy(this.pivot.matrixWorld).invert()
      this.localRay.copy(this.ray.ray).applyMatrix4(this.inverse)

      if (this.localRay.intersectSphere(this.unitSphere, this.hit)) {
        want = 1
        this.contactLocal.copy(this.hit).normalize()
        this.scratchA.copy(this.contactLocal).applyMatrix4(this.pivot.matrixWorld)

        if (this.lastWorldHit) {
          this.scratchB.copy(this.scratchA).sub(this.lastWorldHit)
          this.pivot.getWorldQuaternion(this.scratchQ).invert()
          this.scratchB.applyQuaternion(this.scratchQ).divideScalar(Math.max(0.001, this.scale))
        } else {
          this.scratchB.set(0, 0, 0)
          this.lastWorldHit = new THREE.Vector3()
        }
        this.lastWorldHit.copy(this.scratchA)
        this.drift.lerp(this.scratchB, 0.3)
      } else {
        this.lastWorldHit = null
      }
    } else {
      this.lastWorldHit = null
      this.drift.multiplyScalar(Math.pow(0.001, dt))
    }

    this.cursorGain += (want - this.cursorGain) * (1 - Math.pow(0.02, dt))
    this.fieldUniforms.uCursorGain.value = this.cursorGain
    if (this.cursorGain > 0.004) this.fieldUniforms.uCursor.value.copy(this.contactLocal)
    this.fieldUniforms.uDrift.value.copy(this.drift)
  }

  placeProjection() {
    if (!this.places.length) return
    const half = { x: this.width / 2, y: this.height / 2 }

    this.pivotOrigin.set(0, 0, 0).applyMatrix4(this.pivot.matrixWorld)

    const visible: { idx: number; node: HTMLElement; sx: number; sy: number; fade: number }[] = []

    for (let i = 0; i < this.places.length; i++) {
      const place = this.places[i]
      const node = place.node
      if (!node) continue

      this.scratchA.copy(place.vec).applyMatrix4(this.pivot.matrixWorld)
      this.scratchB.copy(this.camera.position).sub(this.scratchA).normalize()
      const facing = this.scratchC.copy(this.scratchA).sub(this.pivotOrigin).normalize().dot(this.scratchB)

      if (facing < -0.02) {
        node.style.opacity = "0"
        node.style.visibility = "hidden"
        continue
      }

      this.scratchA.project(this.camera)
      const sx = clamp((this.scratchA.x + 1) * half.x, 145, Math.max(145, this.width - 145))
      const sy = clamp((1 - this.scratchA.y) * half.y, 34, Math.max(34, this.height - 96))
      const fade = clamp((facing + 0.02) / 0.16, 0, 1) * this.progress

      visible.push({ idx: i, node, sx, sy, fade })
    }

    // 2D screen-space collision avoidance so floating labels never overlap one another
    visible.sort((a, b) => a.sy - b.sy)
    const placed: { sx: number; sy: number }[] = []
    const minDx = 205
    const minDy = 42

    for (const item of visible) {
      let adjY = item.sy
      for (const prev of placed) {
        if (Math.abs(item.sx - prev.sx) < minDx && Math.abs(adjY - prev.sy) < minDy) {
          adjY = prev.sy + minDy
        }
      }
      adjY = clamp(adjY, 34, Math.max(34, this.height - 96))
      placed.push({ sx: item.sx, sy: adjY })

      item.node.dataset.flip = adjY > this.height - 260 ? "1" : "0"
      item.node.style.visibility = "visible"
      item.node.style.opacity = String(item.fade)
      item.node.style.transform = `translate3d(${item.sx.toFixed(1)}px, ${adjY.toFixed(1)}px, 0)`
    }
  }

  onDown = (event: PointerEvent) => {
    const target = event.target as HTMLElement | null
    if (target && target.closest(".mg-interactive")) return
    this.dragging = true
    this.flingX = 0
    this.dragFrom.x = event.clientX
    this.dragFrom.y = event.clientY
    this.cfg.onBackdropPress?.()
  }

  onMove = (event: PointerEvent) => {
    const box = this.host.getBoundingClientRect()
    if (box.width <= 0 || box.height <= 0) return

    this.pointerUV.x = (event.clientX - box.left) / box.width
    this.pointerUV.y = (event.clientY - box.top) / box.height
    const within = this.pointerUV.x >= 0 && this.pointerUV.x <= 1 && this.pointerUV.y >= 0 && this.pointerUV.y <= 1

    if (within && !this.pointerInside) this.hoverSince = performance.now()
    this.pointerInside = within

    if (!this.dragging) return

    const zoomed = box.width / this.width || 1
    const dx = (event.clientX - this.dragFrom.x) / zoomed
    const dy = (event.clientY - this.dragFrom.y) / zoomed
    this.dragFrom.x = event.clientX
    this.dragFrom.y = event.clientY

    const GAIN = 0.0075
    this.flingX = dx * GAIN
    this.spinAngle += this.flingX

    if (this.cfg.allowTiltDrag) {
      const limit = (this.cfg.tiltRange ?? 70) * DEG
      this.tiltAngle = clamp(this.tiltAngle + dy * GAIN, -limit, limit)
    }
  }

  onUp = () => {
    this.dragging = false
  }

  onLeave = () => {
    if (this.dragging) return
    this.pointerInside = false
    this.lastWorldHit = null
  }

  tick = () => {
    this.raf = requestAnimationFrame(this.tick)
    if (!this.visible) return

    const now = performance.now()
    const dt = this.last === null ? 1 / 60 : Math.min(0.1, (now - this.last) / 1e3)
    this.last = now

    const frames = dt * 60
    const ease = (k: number) => 1 - Math.pow(1 - k, frames)
    const clock = now / 1e3
    const cfg = this.cfg

    if (this.progress < 1) {
      this.elapsed += dt
      this.progress = clamp(this.elapsed / Math.max(0.016, cfg.entranceSeconds || 0.016), 0, 1)
    }

    this.fieldUniforms.uTime.value = clock
    this.fieldUniforms.uProgress.value = this.progress
    this.routeUniforms.uTime.value = clock
    this.routeUniforms.uProgress.value = this.progress
    this.routeLineUniforms.uTime.value = clock
    this.routeLineUniforms.uProgress.value = this.progress

    const focus = cfg.focus ?? -1
    const lockCamera = cfg.lockCamera ?? false
    const target = focus >= 0 ? cfg.places?.[focus] : null

    if (target && lockCamera) {
      // Smoothly pan & zoom to target region when selected via domain selector
      this.spinAngle = -target.lng * DEG
      this.tiltAngle = target.lat * DEG
    } else if (target) {
      // Hovering directly on a globe node freezes rotation in place so it never shifts off the cursor
      this.flingX = 0
      this.spinAngle = this.pivot.rotation.y
      this.tiltAngle = this.pivot.rotation.x
    } else if (!this.dragging) {
      this.spinAngle += (cfg.spin * 0.016 + (1 - this.progress) * 0.014) * frames
      this.spinAngle += this.flingX * frames
      this.flingX *= Math.pow(0.94, frames)
      this.tiltAngle += (cfg.tilt * DEG - this.tiltAngle) * ease(0.055)
    }

    const wanted = this.fitScale() * (target ? (lockCamera ? 1.32 : 1.05) : 0.88 + 0.12 * this.progress)
    this.scale += (wanted - this.scale) * ease(0.08)

    this.pivot.scale.setScalar(this.scale)
    this.pivot.position.set(cfg.offsetX || 0, cfg.offsetY || 0, 0)
    this.pivot.rotation.y += (this.spinAngle - this.pivot.rotation.y) * ease(0.1)
    this.pivot.rotation.x += (this.tiltAngle - this.pivot.rotation.x) * ease(0.1)

    this.trackCursor(dt)
    this.renderer.render(this.scene, this.camera)
    this.placeProjection()
  }

  disposeField() {
    if (!this.field) return
    this.pivot.remove(this.field)
    this.field.geometry.dispose()
    this.field = null
  }

  disposeRoutes() {
    for (let i = this.routeGroup.children.length - 1; i >= 0; i--) {
      const child = this.routeGroup.children[i] as any
      child.geometry?.dispose()
      this.routeGroup.remove(child)
    }
  }

  dispose() {
    if (this.raf !== null) cancelAnimationFrame(this.raf)
    this.raf = null
    this.resizeWatcher?.disconnect()
    this.viewWatcher?.disconnect()

    this.host.removeEventListener("pointerdown", this.onDown)
    this.host.removeEventListener("pointerleave", this.onLeave)
    window.removeEventListener("pointermove", this.onMove)
    window.removeEventListener("pointerup", this.onUp)
    window.removeEventListener("pointercancel", this.onUp)

    this.disposeField()
    this.disposeRoutes()
    this.fieldMaterial.dispose()
    this.routeMaterial.dispose()
    this.routeLineMaterial.dispose()

    this.scene.clear()
    this.renderer.forceContextLoss()
    this.renderer.dispose()

    const canvas = this.renderer.domElement
    if (canvas.parentNode === this.host) this.host.removeChild(canvas)
  }
}

const resolveTier = (quality: string) => {
  if (quality === "high") return 2
  if (quality === "low") return 0
  if (typeof navigator === "undefined") return 2

  const nav = navigator as any
  const cores = nav.hardwareConcurrency || 8
  const memory = nav.deviceMemory || 8
  const handheld = /Mobi|Android|iPhone|iPad|iPod/i.test(nav.userAgent || "")
  return handheld || cores <= 4 || memory <= 4 ? 0 : 2
}

/* ------------------------------------------------------------------ *
 * Themes & Constants
 * ------------------------------------------------------------------ */
export const THEMES = {
  midnight: {
    backdrop: "#1D1E33",
    ink: "#FEF3E5",
    backFade: 0.16,
    tint: "#F47117",
    accent: "#F47117",
    labelFill: "#1D1E33",
    labelInk: "#FEF3E5",
    accentInk: "#FFFFFF",
  },
  infrys: {
    backdrop: "#1D1E33",
    ink: "#FEF3E5",
    backFade: 0.16,
    tint: "#F47117",
    accent: "#F47117",
    labelFill: "#1D1E33",
    labelInk: "#FEF3E5",
    accentInk: "#FFFFFF",
  },
  aurora: {
    backdrop: "#1D1E33",
    ink: "#FEF3E5",
    backFade: 0.16,
    tint: "#F47117",
    accent: "#F47117",
    labelFill: "#1D1E33",
    labelInk: "#FEF3E5",
    accentInk: "#FFFFFF",
  },
  ember: {
    backdrop: "#1D1E33",
    ink: "#FEF3E5",
    backFade: 0.16,
    tint: "#F47117",
    accent: "#F47117",
    labelFill: "#1D1E33",
    labelInk: "#FEF3E5",
    accentInk: "#FFFFFF",
  },
  paper: {
    backdrop: "#FEF3E5",
    ink: "#1D1E33",
    backFade: 0.22,
    tint: "#F47117",
    accent: "#F47117",
    labelFill: "#FEF3E5",
    labelInk: "#1D1E33",
    accentInk: "#FFFFFF",
  },
} as const

const DOT_BUDGET = {
  sparse: 32e3,
  balanced: 72e3,
  dense: 13e4,
  ultra: 23e4,
}

const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)"
const UI_STACK = "-apple-system, BlinkMacSystemFont, Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

const PIN_SHAPES: Record<string, (tint: string) => React.ReactNode> = {
  needle: (tint) => (
    <>
      <line x1="8" y1="10" x2="8" y2="22" stroke={tint} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="8" cy="6.5" r="5.4" fill={tint} />
      <circle cx="8" cy="6.5" r="2.1" fill="rgba(0,0,0,0.38)" />
    </>
  ),
  teardrop: (tint) => (
    <>
      <path d="M8 1.4c-3.2 0-5.9 2.6-5.9 5.9 0 4.3 5.9 11 5.9 11s5.9-6.7 5.9-11c0-3.3-2.7-5.9-5.9-5.9z" fill={tint} />
      <circle cx="8" cy="7.1" r="2.2" fill="rgba(0,0,0,0.4)" />
    </>
  ),
  ring: (tint) => (
    <>
      <line x1="8" y1="12" x2="8" y2="22" stroke={tint} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="8" cy="7" r="4.9" fill="none" stroke={tint} strokeWidth="2" />
      <circle cx="8" cy="7" r="1.6" fill={tint} />
    </>
  ),
  diamond: (tint) => (
    <>
      <line x1="8" y1="12" x2="8" y2="22" stroke={tint} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M8 1.6 13.4 7 8 12.4 2.6 7z" fill={tint} />
      <path d="M8 4.9 10.1 7 8 9.1 5.9 7z" fill="rgba(0,0,0,0.35)" />
    </>
  ),
  flag: (tint) => (
    <>
      <line x1="4.6" y1="2.6" x2="4.6" y2="22" stroke={tint} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5.8 3.3h7.4l-2.1 3.3 2.1 3.3H5.8z" fill={tint} />
    </>
  ),
}

const PlacePin = ({ shape, tint }: { shape: string; tint: string }) => (
  <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true" style={{ display: "block", flexShrink: 0 }}>
    {(PIN_SHAPES[shape] || PIN_SHAPES.needle)(tint)}
  </svg>
)

const CloseGlyph = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
    <path d="M1.5 1.5 L9.5 9.5 M9.5 1.5 L1.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export interface GlobePlace {
  label: string
  region?: string
  lat: number
  lng: number
  accent?: string
  image?: string
  body?: string
  ctaLabel?: string
  ctaLink?: string
}

export interface AtomicGlobeProps {
  style?: React.CSSProperties
  theme?: "midnight" | "infrys" | "aurora" | "ember" | "paper" | "custom"
  backdrop?: string
  ink?: string
  backFade?: number
  tint?: string
  accent?: string
  labelFill?: string
  labelInk?: string
  accentInk?: string
  places?: GlobePlace[]
  density?: "sparse" | "balanced" | "dense" | "ultra" | "exact"
  exactDots?: number
  dotSize?: number
  sizeJitter?: number
  coastLift?: number
  spin?: number
  tilt?: number
  startLng?: number
  zoom?: number
  offsetX?: number
  offsetY?: number
  allowTiltDrag?: boolean
  tiltRange?: number
  formation?: "sweep" | "bloom" | "fall" | "drift" | "instant"
  entranceSeconds?: number
  replayOnScroll?: boolean
  cursorMode?: "sonar" | "halo" | "wake" | "off"
  reach?: number
  waveLength?: number
  waveSpeed?: number
  crest?: number
  swell?: number
  glow?: number
  cursorDelay?: number
  placeMarker?: "beacon" | "pin"
  pinShape?: "needle" | "teardrop" | "ring" | "diamond" | "flag"
  placeLift?: number
  cardWidth?: number
  labelFont?: React.CSSProperties
  routesOn?: boolean
  routeMode?: "chain" | "hub" | "mesh"
  routeStyle?: "comet" | "beads" | "solid" | "dashed" | "pulse"
  routeWidth?: number
  dashCount?: number
  routeSpeed?: number
  routeAltitude?: number
  routeTrail?: number
  routeDots?: number
  routeSize?: number
  routeRest?: number
  quality?: "auto" | "high" | "low"
  editorPlayback?: boolean
  calmMotion?: boolean
}

export const DEFAULT_PLACES: GlobePlace[] = [
  {
    label: "POST-QUANTUM CRYPTOGRAPHY",
    region: "NORTH AMERICA",
    lat: 42.3601,
    lng: -74.006,
    body: "Preparing cryptographic systems for the post-quantum transition (NIST FIPS 203/204/205).",
    ctaLabel: "EXPLORE PQC",
    ctaLink: "/technology#post-quantum-cryptography",
  },
  {
    label: "CRYPTO-AGILITY",
    region: "EUROPE",
    lat: 54.5,
    lng: -4.0,
    body: "Designing decoupled abstraction systems that adapt as cryptographic standards evolve.",
    ctaLabel: "EXPLORE CRYPTO-AGILITY",
    ctaLink: "/technology#crypto-agility",
  },
  {
    label: "GRC",
    region: "SOUTH ASIA",
    lat: 6.5,
    lng: 86.0,
    body: "Governance, risk and compliance aligned with ISO 27001, SOC 2, HIPAA, and NIST CSF 2.0.",
    ctaLabel: "EXPLORE GRC",
    ctaLink: "/solutions#grc",
  },
  {
    label: "VAPT",
    region: "AMERICAS WEST",
    lat: 28.0,
    lng: -120.0,
    body: "Find attack paths before they become incidents with manual penetration testing.",
    ctaLabel: "EXPLORE VAPT",
    ctaLink: "/solutions#vapt",
  },
  {
    label: "CRYPTOGRAPHY",
    region: "EMEA",
    lat: -16.0,
    lng: 24.0,
    body: "Move from classical asymmetric infrastructure to resilient mathematical key governance.",
    ctaLabel: "EXPLORE CRYPTOGRAPHY",
    ctaLink: "/technology#cryptography",
  },
  {
    label: "SECURITY ARCHITECTURE",
    region: "APAC",
    lat: 34.0,
    lng: 132.0,
    body: "Protection built as a living 7-layer system across applications, data, and HSMs.",
    ctaLabel: "EXPLORE ARCHITECTURE",
    ctaLink: "/technology#security-architecture",
  },
  {
    label: "MANAGED SECURITY",
    region: "MIDDLE EAST",
    lat: 26.5,
    lng: 56.0,
    body: "Extend your team with continuous 24/7 SOC intelligence and rapid incident containment.",
    ctaLabel: "EXPLORE MANAGED SECURITY",
    ctaLink: "/solutions#managed-security",
  },
  {
    label: "CLOUD SECURITY",
    region: "LATAM",
    lat: -24.0,
    lng: -46.0,
    body: "Securing cloud platforms, microservice meshes, and distributed SaaS workloads.",
    ctaLabel: "EXPLORE CLOUD SECTORS",
    ctaLink: "/industries#technology",
  },
]

const usePrefersCalm = () => {
  const [calm, setCalm] = useState(false)
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setCalm(query.matches)
    sync()
    query.addEventListener?.("change", sync)
    return () => query.removeEventListener?.("change", sync)
  }, [])
  return calm
}

export function AtomicGlobe(props: AtomicGlobeProps) {
  const {
    style,
    theme = "midnight",
    places = DEFAULT_PLACES,
    density = "dense",
    exactDots = 13e4,
    dotSize = 5,
    sizeJitter = 0.6,
    coastLift = 0.35,
    spin = 0.06,
    tilt = 18,
    startLng = 21,
    zoom = 1,
    offsetX = 0,
    offsetY = 0,
    allowTiltDrag = true,
    tiltRange = 70,
    formation = "sweep",
    entranceSeconds = 2.2,
    replayOnScroll = true,
    cursorMode = "sonar",
    reach = 0.5,
    waveLength = 0.22,
    waveSpeed = 0.55,
    crest = 0.035,
    swell = 1.2,
    glow = 1,
    cursorDelay = 0,
    placeMarker = "beacon",
    pinShape = "needle",
    placeLift = 0.1,
    labelFont,
    cardWidth = 232,
    routesOn = true,
    routeMode = "chain",
    routeStyle = "comet",
    routeWidth = 2,
    dashCount = 18,
    routeSpeed = 0.22,
    routeAltitude = 0.4,
    routeTrail = 0.3,
    routeDots = 56,
    routeSize = 6,
    routeRest = 0.32,
    quality = "auto",
    editorPlayback = true,
    calmMotion = true,
  } = props

  const prefersCalm = usePrefersCalm()
  const calm = calmMotion && prefersCalm
  const hostRef = useRef<HTMLDivElement>(null)
  const runtimeRef = useRef<GlobeRuntime | null>(null)
  const nodeRefs = useRef<(HTMLElement | null)[]>([])
  const [focus, setFocus] = useState(-1)
  const [lockCamera, setLockCamera] = useState(false)

  const skin =
    theme === "custom"
      ? {
          backdrop: props.backdrop ?? THEMES.midnight.backdrop,
          ink: props.ink ?? THEMES.midnight.ink,
          backFade: props.backFade ?? THEMES.midnight.backFade,
          tint: props.tint ?? THEMES.midnight.tint,
          accent: props.accent ?? THEMES.midnight.accent,
          labelFill: props.labelFill ?? THEMES.midnight.labelFill,
          labelInk: props.labelInk ?? THEMES.midnight.labelInk,
          accentInk: props.accentInk ?? THEMES.midnight.accentInk,
        }
      : THEMES[theme] || THEMES.midnight

  const spots = useMemo(
    () =>
      (Array.isArray(places) ? places : [])
        .filter((p) => p && Number.isFinite(+p.lat) && Number.isFinite(+p.lng))
        .map((p) => ({ ...p, lat: +p.lat, lng: +p.lng })),
    [places]
  )

  const spotKey = useMemo(() => spots.map((p) => `${p.lat},${p.lng}`).join("|"), [spots])
  const dotTarget = density === "exact" ? exactDots : DOT_BUDGET[density] ?? DOT_BUDGET.dense

  const liveFormation = calm ? "instant" : formation
  const liveCursor = calm && cursorMode !== "off" ? "halo" : cursorMode

  const config = {
    ink: skin.ink,
    tint: skin.tint,
    accent: skin.accent,
    backFade: skin.backFade,
    dotSize,
    sizeJitter,
    coastLift,
    dotTarget,
    spin: calm ? 0 : spin,
    tilt,
    startLng,
    zoom,
    offsetX,
    offsetY,
    allowTiltDrag,
    tiltRange,
    formation: liveFormation,
    entranceSeconds: calm ? 0.4 : entranceSeconds,
    replayOnScroll: calm ? false : replayOnScroll,
    cursorMode: liveCursor,
    reach,
    waveLength,
    waveSpeed: calm ? 0 : waveSpeed,
    crest,
    swell,
    glow,
    cursorDelay,
    routesOn,
    routeMode,
    routeStyle,
    routeWidth,
    dashCount,
    routeSpeed: calm ? 0 : routeSpeed,
    routeAltitude,
    routeTrail,
    routeDots,
    routeSize,
    routeRest,
    quality,
    editorPlayback,
    places: spots,
    focus,
    lockCamera,
    onBackdropPress: () => {
      setFocus(-1)
      setLockCamera(false)
    },
  }

  const configRef = useRef(config)
  configRef.current = config

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    let runtime: GlobeRuntime | null = null
    try {
      runtime = new GlobeRuntime(host, configRef.current, false)
    } catch (err) {
      return
    }
    runtimeRef.current = runtime
    return () => {
      runtimeRef.current = null
      runtime?.dispose()
    }
  }, [quality])

  useEffect(() => {
    runtimeRef.current?.apply(configRef.current)
  })

  useEffect(() => {
    runtimeRef.current?.buildField()
  }, [dotTarget])

  useEffect(() => {
    setFocus(-1)
    nodeRefs.current = nodeRefs.current.slice(0, spots.length)
    const runtime = runtimeRef.current
    if (!runtime) return
    runtime.setPlaces(spots, placeMarker === "pin" ? placeLift : 0)
    runtime.setPlaceNodes(nodeRefs.current)
  }, [spotKey, placeMarker, placeLift, spots])

  useEffect(() => {
    runtimeRef.current?.setPlaceNodes(nodeRefs.current)
  })

  useEffect(() => {
    runtimeRef.current?.buildRoutes()
  }, [spotKey, routesOn, routeMode, routeStyle, routeAltitude, routeDots])

  useEffect(() => {
    if (!calm) runtimeRef.current?.replayEntrance()
  }, [formation, entranceSeconds, calm])

  const labelStyle: React.CSSProperties = {
    fontFamily: UI_STACK,
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.2px",
    ...(labelFont || {}),
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minWidth: 80,
        minHeight: 80,
        ...style,
        position: "relative",
        overflow: "hidden",
        background: skin.backdrop,
        userSelect: "none",
        WebkitUserSelect: "none",
        ["--mg-fill" as any]: skin.labelFill,
        ["--mg-ink" as any]: skin.labelInk,
        ["--mg-accent" as any]: skin.accent,
        ["--mg-accent-ink" as any]: skin.accentInk,
      }}
    >
      <style>{`
        @keyframes mgPing {
            0%   { transform: translate(-50%, -50%) scale(0.45); opacity: 0.55; }
            65%  { opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(3);    opacity: 0; }
        }
        [data-flip="1"] .mg-card-popover {
          top: auto !important;
          bottom: 100% !important;
          padding-top: 0 !important;
          padding-bottom: 8px !important;
        }
      `}</style>
      <div ref={hostRef} style={{ position: "absolute", inset: 0, zIndex: 1, touchAction: "none", cursor: "grab" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 2, overflow: "hidden", pointerEvents: "none" }}>
        {spots.map((spot, index) => {
          const open = focus === index
          const accent = spot.accent || skin.accent
          const hasCard = !!(spot.image || spot.body || spot.ctaLabel)
          const resolvedCardW = Math.max(cardWidth, 272)
          return (
            <div
              key={`${spot.lat},${spot.lng},${index}`}
              ref={(node) => {
                nodeRefs.current[index] = node
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
                visibility: "hidden",
                willChange: "transform, opacity",
                pointerEvents: "none",
                zIndex: open ? 10 : 1,
              }}
            >
              {placeMarker === "pin" ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "5px 13px 5px 7px",
                    borderRadius: 999,
                    width: "max-content",
                    background: "var(--mg-fill)",
                    color: "var(--mg-ink)",
                    transform: "translate(-50%, -100%)",
                    ...labelStyle,
                  }}
                >
                  <PlacePin shape={pinShape} tint={accent} />
                  <span style={{ whiteSpace: "nowrap" }}>{spot.label}</span>
                </div>
              ) : (
                <div
                  className="mg-interactive"
                  onMouseEnter={() => {
                    setLockCamera(false)
                    setFocus(index)
                  }}
                  onMouseLeave={() => {
                    setLockCamera(false)
                    setFocus(-1)
                  }}
                  onPointerDown={(event) => {
                    event.stopPropagation()
                  }}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "max-content",
                    transform: "translate(-50%, -16px)",
                    pointerEvents: "auto",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    href={spot.ctaLink || "/solutions"}
                    className="mg-interactive"
                    onPointerDown={(event) => event.stopPropagation()}
                    aria-label={`${spot.label} — ${spot.ctaLabel || "Explore"}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "6px 12px 6px 8px",
                      borderRadius: 999,
                      background: "#161729",
                      color: "#FEF3E5",
                      textDecoration: "none",
                      border: open ? "1px solid #F47117" : "1px solid rgba(244, 113, 23, 0.55)",
                      boxShadow: open
                        ? "0 0 16px rgba(244, 113, 23, 0.45), 0 8px 24px rgba(0, 0, 0, 0.5)"
                        : "0 2px 10px rgba(0, 0, 0, 0.3)",
                      transition: `box-shadow 0.3s ${EASE_OUT}, border-color 0.3s ${EASE_OUT}`,
                      pointerEvents: "auto",
                      cursor: "pointer",
                      ...labelStyle,
                    }}
                  >
                    <span style={{ position: "relative", width: 10, height: 10, flexShrink: 0 }}>
                      <span
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: "#F47117",
                          animation: "mgPing 2.4s ease-out infinite",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: open ? 8 : 6,
                          height: open ? 8 : 6,
                          borderRadius: "50%",
                          background: "#F47117",
                          boxShadow: "0 0 8px #F47117",
                          transform: "translate(-50%, -50%)",
                          transition: `width 0.3s ${EASE_OUT}, height 0.3s ${EASE_OUT}`,
                        }}
                      />
                    </span>
                    <span style={{ whiteSpace: "nowrap", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>
                      {spot.label}
                    </span>
                    <span style={{ fontSize: 11, color: "#F47117", fontWeight: 700, marginLeft: 2 }} aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                  {hasCard && (
                    <div
                      className="mg-card-popover"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: resolvedCardW,
                        display: "grid",
                        gridTemplateRows: open ? "1fr" : "0fr",
                        paddingTop: open ? 8 : 0,
                        opacity: open ? 1 : 0,
                        pointerEvents: open ? "auto" : "none",
                        transition: `grid-template-rows 0.32s ${EASE_OUT}, opacity 0.24s ${EASE_OUT}, padding-top 0.32s ${EASE_OUT}`,
                        willChange: "grid-template-rows",
                        zIndex: 20,
                      }}
                    >
                      <div style={{ overflow: "hidden", width: "100%" }}>
                        <Link
                          className="mg-interactive"
                          href={spot.ctaLink || "/solutions"}
                          onPointerDown={(e) => e.stopPropagation()}
                          style={{
                            width: "100%",
                            boxSizing: "border-box",
                            padding: "14px 16px",
                            borderRadius: 10,
                            background: "#161729",
                            border: "1px solid rgba(244, 113, 23, 0.55)",
                            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.65)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                            textDecoration: "none",
                            pointerEvents: "auto",
                            cursor: "pointer",
                            transform: open ? "translateY(0)" : "translateY(-6px)",
                            transition: `transform 0.32s ${EASE_OUT}`,
                          }}
                        >
                          {spot.region && (
                            <div
                              style={{
                                font: "400 9px 'IBM Plex Mono', monospace",
                                color: "#F47117",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                              }}
                            >
                              {spot.region}
                            </div>
                          )}
                          <div
                            style={{
                              fontFamily: UI_STACK,
                              fontSize: 13,
                              fontWeight: 700,
                              color: "#FEF3E5",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {spot.label}
                          </div>
                          {spot.body && (
                            <p
                              style={{
                                margin: 0,
                                fontFamily: UI_STACK,
                                fontSize: 12,
                                lineHeight: 1.5,
                                color: "#CBD0D9",
                                opacity: 0.92,
                              }}
                            >
                              {spot.body}
                            </p>
                          )}
                          {spot.ctaLabel && (
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 6,
                                padding: "8px 12px",
                                borderRadius: 4,
                                marginTop: 6,
                                textAlign: "center",
                                fontFamily: "'IBM Plex Mono', monospace",
                                fontSize: 10,
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                                background: "#F47117",
                                color: "#FFFFFF",
                                textTransform: "uppercase",
                              }}
                            >
                              [ {spot.ctaLabel} ] ↗
                            </span>
                          )}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Bottom Interactive Region/Domain Focus Bar — Restores one-click rotate-and-zoom inspection */}
      <div
        className="mg-interactive"
        onPointerDown={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          bottom: 18,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 6,
          width: "max-content",
          maxWidth: "calc(100% - 32px)",
          padding: "6px 10px",
          borderRadius: 16,
          background: "rgba(22, 23, 41, 0.88)",
          border: "1px solid rgba(203, 208, 217, 0.16)",
          backdropFilter: "blur(8px)",
          pointerEvents: "auto",
        }}
      >
        {spots.map((spot, idx) => {
          const isFocused = focus === idx
          return (
            <button
              key={spot.label}
              type="button"
              onClick={() => {
                if (isFocused && lockCamera) {
                  setFocus(-1)
                  setLockCamera(false)
                } else {
                  setFocus(idx)
                  setLockCamera(true)
                }
              }}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 9.5,
                fontWeight: 600,
                letterSpacing: "0.07em",
                padding: "5px 10px",
                borderRadius: 999,
                border: isFocused ? "1px solid #F47117" : "1px solid rgba(203, 208, 217, 0.22)",
                background: isFocused ? "rgba(244, 113, 23, 0.22)" : "rgba(255, 255, 255, 0.03)",
                color: isFocused ? "#FFFFFF" : "#CBD0D9",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
              }}
            >
              {spot.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export const MeridianGlobe = AtomicGlobe
export default AtomicGlobe
