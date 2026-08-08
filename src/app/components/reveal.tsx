'use client';

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = '' }: {
  children: React.ReactNode;
  delay?: number;
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({ children, delay }: { children: React.ReactNode, delay: number }) {
  return (
      <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
      {children}
      </motion.div>
  );
}

export function TextReveal({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ');
  return (
    <motion.p
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
      className={className}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0.12, y: 6 },
            show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="inline-block mr-[0.28em]"
        >
          {w}
        </motion.span>
      ))}
    </motion.p>
  );
}
