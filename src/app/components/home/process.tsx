'use client'

import { useRef } from 'react';
import { Reveal } from '@/app/components/reveal';
import { motion, useScroll, useTransform, } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

const PROCESS = [
  { n: '01', title: 'Survey', body: 'Site visit, load audit, feasibility check.' },
  { n: '02', title: 'Design', body: 'System sizing, drawings, fixed quote.' },
  { n: '03', title: 'Install', body: 'Certified crew, tested and signed off.' },
  { n: '04', title: 'Maintain', body: 'Scheduled servicing, on-call support.' },
];

function ProcessNode({ progress, x, index, total }: { progress: MotionValue<number>; x: number; index: number; total: number }) {
  const nodeProgress = useTransform(progress, [index / (total - 1) - 0.05, index / (total - 1) + 0.05], [0, 1]);
  return <motion.circle cx={x} cy={20} r={7} fill='#2e9a48' style={{ scale: nodeProgress }} />;
}

function ProcessLine({ progress }: { progress: MotionValue<number> }) {
  const nodeX = [80, 360, 640, 920];
  return (
    <svg viewBox="0 0 1000 40" preserveAspectRatio="none" className="w-full h-10">
      <line x1="80" y1="20" x2="920" y2="20" stroke="black" strokeOpacity="0.12" strokeWidth="2" />
      <motion.line x1="80" y1="20" x2="920" y2="20" stroke="black" strokeWidth="2" style={{ pathLength: progress }} />
      {nodeX.map((x, i) => (
        <ProcessNode key={x} progress={progress} x={x} index={i} total={nodeX.length} />
      ))}
    </svg>
  );
}

function ProcessNodeDot({ progress, index, total }: { progress: MotionValue<number>; index: number; total: number }) {
  const scale = useTransform(progress, [index / (total - 1) - 0.05, index / (total - 1) + 0.05], [0, 1]);
  return <motion.div style={{ scale }} className="absolute -left-1.25 w-3 h-3 rounded-full bg-jp-green" />;
}

function ProcessLineVertical({ progress }: { progress: MotionValue<number> }) {
  const heightPct = useTransform(progress, (v) => `${v * 100}%`);
  return (
    <div className="relative w-px bg-black/12 self-stretch shrink-0">
      <motion.div style={{ height: heightPct }} className="absolute top-0 left-0 w-px bg-jp-green" />
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="absolute left-0" style={{ top: `${(i / 3) * 100}%` }}>
          <ProcessNodeDot progress={progress} index={i} total={4} />
        </div>
      ))}
    </div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.4'] });

  return (
    <section id="process" ref={ref} className="py-24 md:py-32 border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-jp-green-dim">Process</span>
          <h2 className="font-display font-bold text-black text-[32px] md:text-[40px] leading-tight mt-3">Four steps, start to commissioning.</h2>
        </Reveal>

        <div className="hidden md:block mt-16">
          <ProcessLine progress={scrollYProgress} />
          <div className="grid grid-cols-4 gap-8 mt-6">
            {PROCESS.map((p) => (
              <div key={p.n} className="text-center">
                <span className="font-mono text-[12px] text-jp-green">{p.n}</span>
                <h3 className="font-display font-bold text-black text-[17px] mt-1">{p.title}</h3>
                <p className="font-body text-black/55 text-[13.5px] leading-relaxed mt-1.5 max-w-40 mx-auto">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden mt-14 flex gap-6">
          <ProcessLineVertical progress={scrollYProgress} />
          <div className="flex-1 flex flex-col gap-10">
            {PROCESS.map((p) => (
              <div key={p.n}>
                <span className="font-mono text-[12px] text-jp-green">{p.n}</span>
                <h3 className="font-display font-bold text-black text-[17px] mt-1">{p.title}</h3>
                <p className="font-body text-black/55 text-[13.5px] leading-relaxed mt-1.5 max-w-65">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
