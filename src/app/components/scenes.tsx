'use client';

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Transition } from "framer-motion";

const INK = '#0a0a0a';
const AMBER = '#f5b301';
const GREEN = '#2e9a48';
const PAPER = '#fafaf7';

export function SceneRooftop() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F2A1C" />
          <stop offset="55%" stopColor="#1B4A2E" />
          <stop offset="100%" stopColor="#2E9A48" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#sky1)" />
      <circle cx="1230" cy="230" r="130" fill="var(--jp-spark)" opacity="0.9" />
      <circle cx="1230" cy="230" r="220" fill="var(--jp-spark)" opacity="0.12" />
      <rect x="0" y="620" width="1600" height="280" fill="#0B1F14" />
      <rect x="120" y="520" width="520" height="120" fill="#0F2A1C" />
      <polygon points="100,520 660,520 380,410" fill="#123322" />
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x={150 + i * 78} y={430} width="66" height="80" fill="#1B4A2E" stroke="#2E9A48" strokeWidth="3" transform={`skewY(-8) translate(${i * 6},0)`} />
      ))}
      <rect x="900" y="560" width="440" height="80" fill="#0F2A1C" />
      <polygon points="880,560 1360,560 1120,470" fill="#123322" />
    </svg>
  );
}

export function SceneHouseArray() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <linearGradient id="houseSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F2A1C" />
          <stop offset="100%" stopColor="#2E9A48" stopOpacity="0.32" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#houseSky)" />
      <circle cx="332" cy="66" r="30" fill="#FFC94A" opacity="0.9" />
      <circle cx="332" cy="66" r="52" fill="#FFC94A" opacity="0.12" />

      <rect x="0" y="238" width="400" height="62" fill="#0B1F14" />

      <rect x="95" y="158" width="210" height="82" fill="#123322" />
      <rect x="230" y="178" width="34" height="62" fill="#0B1F14" />
      <rect x="130" y="190" width="38" height="32" fill="#0F2A1C" stroke="#2E9A48" strokeWidth="2" />
      <line x1="149" y1="190" x2="149" y2="222" stroke="#2E9A48" strokeWidth="1.2" />
      <line x1="130" y1="206" x2="168" y2="206" stroke="#2E9A48" strokeWidth="1.2" />

      <polygon points="110,86 290,86 351,166 49,166" fill="#0F2A1C" />

      <g>
        <polygon points="126.7,96.7 162.5,96.7 152.3,124.3 106.6,124.3" fill="#1B4A2E" stroke="#2E9A48" strokeWidth="1.6" />
        <polygon points="163.6,96.7 199.4,96.7 199.3,124.3 153.7,124.3" fill="#1B4A2E" stroke="#2E9A48" strokeWidth="1.6" />
        <polygon points="200.6,96.7 236.4,96.7 246.3,124.3 200.7,124.3" fill="#1B4A2E" stroke="#2E9A48" strokeWidth="1.6" />
        <polygon points="237.5,96.7 273.3,96.7 293.4,124.3 247.7,124.3" fill="#1B4A2E" stroke="#2E9A48" strokeWidth="1.6" />
        <polygon points="105.6,125.7 151.7,125.7 141.5,153.3 85.5,153.3" fill="#1B4A2E" stroke="#2E9A48" strokeWidth="1.6" />
        <polygon points="153.1,125.7 199.3,125.7 199.1,153.3 143.2,153.3" fill="#1B4A2E" stroke="#2E9A48" strokeWidth="1.6" />
        <polygon points="200.7,125.7 246.9,125.7 256.8,153.3 200.9,153.3" fill="#1B4A2E" stroke="#2E9A48" strokeWidth="1.6" />
        <polygon points="248.3,125.7 294.4,125.7 314.5,153.3 258.5,153.3" fill="#1B4A2E" stroke="#2E9A48" strokeWidth="1.6" />
      </g>

      <ellipse cx="200" cy="120" rx="105" ry="10" fill="#FFC94A" opacity="0.10" />
    </svg>
  );
}

const SCENES = [SceneRooftop, SceneHouseArray];

export default function Scenes() {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % SCENES.length), 6500);
    return () => clearInterval(id);
  }, []);
  
  const ActiveScene = SCENES[active];

  return (
    <div className="inset-0">
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 6.5, ease: 'linear' } }}
          className="absolute inset-0"
        >
          <ActiveScene />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-black/40" />
    </div>
  );
}

function Crosshair({ x, y }: { x: number; y: number }) {
  return (
    <>
      <line x1={x - 10} y1={y} x2={x + 10} y2={y} stroke={INK} strokeWidth="1.4" />
      <line x1={x} y1={y - 10} x2={x} y2={y + 10} stroke={INK} strokeWidth="1.4" />
    </>
  );
}

// Simplified utility-pole marker for each distribution branch's endpoint.
function Pole({ x, baseY, label }: { x: number; baseY: number; label: string }) {
  return (
    <g>
      <line x1={x} y1={baseY} x2={x} y2={baseY - 70} stroke={INK} strokeWidth="2" />
      <line x1={x - 14} y1={baseY - 58} x2={x + 14} y2={baseY - 58} stroke={INK} strokeWidth="1.6" />
      <line x1={x - 10} y1={baseY - 46} x2={x + 10} y2={baseY - 46} stroke={INK} strokeWidth="1.6" />
      <text x={x - 26} y={baseY + 16} fontFamily="var(--font-mono)" fontSize="10" fill={INK}>{label}</text>
    </g>
  );
}

export function DrawSetupDiagram() {
  type DrawSpec = { initial: { pathLength: number }; animate: { pathLength: number }; transition: Transition };
  const groups: Record<'base' | 'panel' | 'angle' | 'wire' | 'load' | 'dim' | 'dist', DrawSpec> = {
    base: { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.7, ease: 'easeInOut' } },
    panel: { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.9, ease: 'easeInOut', delay: 0.55 } },
    angle: { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.7, ease: 'easeInOut', delay: 1.3 } },
    wire: { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.8, ease: 'easeInOut', delay: 1.75 } },
    load: { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.8, ease: 'easeInOut', delay: 2.35 } },
    dim: { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.5, ease: 'easeInOut', delay: 2.95 } },
    dist: { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.9, ease: 'easeInOut', delay: 3.3 } },
  };
  const label = (delay: number) => ({ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay } });

  // Draws in once (via `delay`), then blinks on a 5s loop forever after.
  // Values start and end at 1 so the loop has no seam/double-flicker at
  // the repeat boundary — only the deliberate dip near 85–90% reads as
  // a blink. Two different delays keep the amber/green lights out of
  // phase with each other, so they don't blink in lockstep.
  const blink = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: [1, 1, 0.15, 1] },
    transition: { duration: 5, times: [0, 0.85, 0.9, 1], repeat: Infinity, delay, ease: 'easeInOut' as const },
  });

  return (
    <svg viewBox="0 0 900 560" className="w-full h-full" aria-hidden="true">
      <rect width="900" height="560" fill={PAPER} />

      {/* ground + post */}
      <motion.line {...groups.base} x1="40" y1="460" x2="860" y2="460" stroke={INK} strokeWidth="2" />
      <motion.line {...groups.base} x1="220" y1="460" x2="220" y2="300" stroke={INK} strokeWidth="3" />
      <motion.line {...groups.base} x1="204" y1="460" x2="236" y2="460" stroke={INK} strokeWidth="3" />

      {/* panel + cells */}
      <motion.line {...groups.panel} x1="220" y1="300" x2="429.2" y2="232.0" stroke={INK} strokeWidth="4" />
      <motion.line {...groups.panel} x1="216.9" y1="290.5" x2="426.1" y2="222.5" stroke={INK} strokeWidth="2" />
      <motion.line {...groups.panel} x1="220.0" y1="300.0" x2="216.9" y2="290.5" stroke={INK} strokeWidth="2" />
      <motion.line {...groups.panel} x1="429.2" y1="232.0" x2="426.1" y2="222.5" stroke={INK} strokeWidth="2" />
      <motion.line {...groups.panel} x1="261.8" y1="286.4" x2="258.8" y2="276.9" stroke={INK} strokeWidth="1" />
      <motion.line {...groups.panel} x1="303.7" y1="272.8" x2="300.6" y2="263.3" stroke={INK} strokeWidth="1" />
      <motion.line {...groups.panel} x1="345.5" y1="259.2" x2="342.4" y2="249.7" stroke={INK} strokeWidth="1" />
      <motion.line {...groups.panel} x1="387.4" y1="245.6" x2="384.3" y2="236.1" stroke={INK} strokeWidth="1" />

      {/* strut + tilt angle */}
      <motion.line {...groups.angle} x1="220" y1="360" x2="366.5" y2="252.4" stroke={INK} strokeWidth="2" />
      <motion.path {...groups.angle} d="M 270.0 300.0 A 50 50 0 0 0 267.6 284.5" stroke={INK} strokeWidth="1" fill="none" />
      <motion.line {...groups.angle} x1="220" y1="300" x2="290" y2="300" stroke={INK} strokeWidth="1" strokeDasharray="3 3" />
      <motion.text {...label(1.9)} x="298" y="294" fontFamily="var(--font-mono)" fontSize="13" fill={INK}>TILT</motion.text>

      {/* wire + inverter */}
      <motion.path {...groups.wire} d="M 220 400 C 220 430, 400 400, 420 390" stroke={GREEN} strokeWidth="2.5" fill="none" />
      <motion.rect {...groups.wire} x="420" y="370" width="70" height="90" fill="none" stroke={INK} strokeWidth="2.5" />
      <motion.rect {...groups.wire} x="432" y="384" width="46" height="16" fill="none" stroke={INK} strokeWidth="1.4" />

      {/* two status lights — amber and green, blinking independently every ~5s */}
      <motion.circle {...blink(2.5)} cx="438" cy="422" r="4" fill={AMBER} />
      <motion.circle {...blink(4.0)} cx="452" cy="422" r="4" fill={GREEN} />

      <motion.text {...label(2.5)} x="420" y="360" fontFamily="var(--font-mono)" fontSize="12" fill={INK}>INVERTER</motion.text>

      {/* load side */}
      <motion.line {...groups.load} x1="490" y1="415.0" x2="630" y2="430" stroke={INK} strokeWidth="1.4" strokeDasharray="6 5" />
      <motion.polygon {...groups.load} points="640,390 730,440 550,440" fill="none" stroke={INK} strokeWidth="2" />
      <motion.rect {...groups.load} x="580" y="440" width="150" height="70" fill="none" stroke={INK} strokeWidth="2" />
      <motion.rect {...groups.load} x="625" y="475" width="26" height="35" fill="none" stroke={INK} strokeWidth="1.4" />
      <motion.text {...label(3.1)} x="580" y="380" fontFamily="var(--font-mono)" fontSize="12" fill={INK}>LOAD</motion.text>

      {/* distribution network — arcs above the house rather than through it */}
      <motion.path {...groups.dist} d="M 490 385 C 600 340, 680 260, 770 250" stroke={INK} strokeWidth="1.6" strokeDasharray="5 4" fill="none" />
      <Pole x={770} baseY={250} label="DIST. 01" />
      <motion.path {...groups.dist} d="M 490 400 C 610 370, 700 330, 840 320" stroke={INK} strokeWidth="1.6" strokeDasharray="5 4" fill="none" />
      <Pole x={840} baseY={320} label="DIST. 02" />

      {/* dimension line */}
      <motion.line {...groups.dim} x1="220" y1="490" x2="504" y2="490" stroke={INK} strokeWidth="1" />
      <motion.line {...groups.dim} x1="220" y1="484" x2="220" y2="496" stroke={INK} strokeWidth="1" />
      <motion.line {...groups.dim} x1="504" y1="484" x2="504" y2="496" stroke={INK} strokeWidth="1" />
      <motion.text {...label(3.4)} x="220" y="510" fontFamily="var(--font-mono)" fontSize="11" fill={INK}>PV &#8594; INVERTER &#8594; LOAD</motion.text>

      {/* corner registration marks — static, part of the frame not the drawing */}
      <Crosshair x={24} y={24} />
      <Crosshair x={876} y={24} />
      <Crosshair x={24} y={536} />
      <Crosshair x={876} y={536} />
    </svg>
  );
}
