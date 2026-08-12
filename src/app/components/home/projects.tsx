'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/app/components/reveal';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SanityDocument } from 'next-sanity';
import { urlFor } from '@/sanity';

export default function Projects({ projects }: {
  projects: SanityDocument[]
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 border-t border-black/10">
      <div
        className="max-w-6xl mx-auto px-6 relative"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left + 24);
          y.set(e.clientY - rect.top - 90);
        }}
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-jp-green-dim">Selected work</span>
            <h2 className="font-display font-bold text-black text-[32px] md:text-[40px] leading-tight mt-3">Projects on record.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/projects" className="inline-flex items-center gap-2 font-mono text-[12px] tracking-widest uppercase text-black/70 hover:text-jp-green transition-colors">
              Full index <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-black/15">
          {projects.map((w, i) => (
            <Link
              key={Number(`0${i+1}`)}
              href={`/projects/${w.slug}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center gap-6 py-6 border-b border-black/15"
            >
              <span className="font-mono text-[13px] text-jp-green w-8 shrink-0">{Number(`0${i+1}`)}</span>
              <span className="font-display font-bold text-jp-green text-[19px] md:text-[24px] flex-1 group-hover:text-black transition-colors">
                {w.title}
              </span>
              <span className="font-mono text-[12px] text-black/45 hidden sm:block">{`${w.location} \u2014 ${w.category}`}</span>
              <ArrowUpRight size={16} className="shrink-0 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              style={{ x: springX, y: springY }}
              className="pointer-events-none absolute top-0 left-0 w-55 h-37.5 border border-black/20 overflow-hidden z-10 hidden md:block"
            >
              <Image src={urlFor(projects[hovered].coverImage).url()} alt={projects[hovered].title}  fill sizes="220px" className="object-cover" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
