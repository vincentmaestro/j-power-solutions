'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroReveal } from "../reveal";
import { ArrowRight } from "lucide-react";

const HERO_SLIDES = [
  { src: '/images/hero-1.avif', alt: 'Technician installing rooftop solar panels' },
  { src: '/images/hero-3.jpg', alt: 'Electrician wiring an inverter panel' },
  { src: '/images/hero-4.png', alt: 'Mini grid site' },
];

function HeroSlide({ src, alt, active }: { src: string; alt: string; active: boolean }) {
  return (
    <motion.div
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="absolute inset-0"
    >
      <Image
      src={src}
      alt={alt}
      fill
      priority={active}
      sizes="100vw"
      className="object-cover"
      />
    </motion.div>
  );
}

function HeroBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {HERO_SLIDES.map((slide, i) => (
        <HeroSlide key={slide.src} src={slide.src} alt={slide.alt} active={i === active} />
      ))}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/55 to-black/30" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <HeroReveal delay={0.1}>
            <h1 className="font-display font-black text-white leading-[0.92] tracking-tight">
              <span className="text-[15vw] sm:text-[70px]">ELECTRICAL POWER</span>
              <br />
              <span className="relative inline-block text-jp-green z-0 text-[15vw] sm:text-[68px] md:text-[80px]">
                <span className="absolute inset-x-0 bottom-1 h-4 bg-jp-amber/50 -z-10" />
                ENGINEERED.
              </span>
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.2}>
            <p className="font-body text-white/80 text-[16px] md:text-[18px] max-w-md mt-8 leading-relaxed">
              J Power Solutions designs and installs dependable solar and electrical
              systems for homes, schools, hospitals, mini-grids and communities across Nigeria.
            </p>
          </HeroReveal>
          <HeroReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-3 mt-10">
              <a href="#capabilities" className="inline-flex items-center gap-2 bg-jp-green text-white font-mono text-[13px] tracking-[0.08em] uppercase px-6 py-3.5 hover:bg-jp-green-dim transition-colors">
                View Capabilities <ArrowRight size={15} />
              </a>
              <a href="#note" className="inline-flex items-center gap-2 border border-white/30 text-white font-mono text-[13px] tracking-[0.08em] uppercase px-6 py-3.5 hover:border-jp-green hover:text-jp-green transition-colors">
                Founder's Note
              </a>
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}
