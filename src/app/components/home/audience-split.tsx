'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Building2, HomeIcon } from 'lucide-react';
import { Reveal } from '../reveal';

const AUDIENCES = [
  {
    icon: HomeIcon,
    tag: 'Residential',
    title: 'For Your Home',
    body: 'Rooftop solar, backup power sized to your household need',
    points: [
      'Free site survey & load assessment',
      'System sized to your load demand and your budget',
      'NEMSA-compliant wiring and quality assurance',
      'Workmanship warranty on every install',
    ],
    cta: 'Get a Home Quote',
  },
  {
    icon: Building2,
    tag: 'Business & Community',
    title: 'For Business & Communities',
    body: "Mini-grids, smart metering, industrial arrays, and institutional power for schools, hospitals, and estates",
    points: [
      'Community, estate and mini-grid design',
      'Institutional installs: schools, hospitals, facilities',
      'NEMSA-compliant wiring and quality assurance',
      'Smart metering rollouts at scale',
      'Scheduled maintenance contracts',
    ],
    cta: 'Talk to Our Engineers',
  },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 46 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AudienceSplit() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 my-16">
        <Reveal className="max-w-2xl">
          <h2 className="font-display font-bold text-jp-ink text-[34px] md:text-[42px] leading-tight">
            Residential, Industrial or Community scale {'\u2014'} same standard either way.
          </h2>
        </Reveal>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="grid md:grid-cols-2 gap-6 mt-14">
          {AUDIENCES.map((a) => (
            <motion.div key={a.tag} variants={staggerItem} className="rounded-3xl border border-jp-line bg-white/40 p-8 md:p-10 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-jp-green/10 flex items-center justify-center">
                <a.icon size={22} className="text-jp-green" />
              </div>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-jp-green-dim mt-6">{a.tag}</span>
              <h3 className="font-display font-bold text-jp-ink text-[24px] mt-2">{a.title}</h3>
              <p className="font-body text-jp-ink/65 text-[14.5px] leading-relaxed mt-3">{a.body}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 font-body text-[14px] text-jp-ink/80">
                    <Check size={16} className="text-jp-green mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="mt-8 inline-flex items-center gap-2 self-start font-body text-[14px] font-medium text-jp-ink hover:text-jp-green transition-colors">
                {a.cta} <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
