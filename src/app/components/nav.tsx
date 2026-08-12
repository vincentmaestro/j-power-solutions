'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from "next/image";

const NAV_LINKS = [
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
    className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-jp-paper/90 backdrop-blur-sm border-b border-black/10 py-0'
      : 'bg-transparent border-b border-transparent'
    }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src='/logo-1.svg' alt='Logo' width={45} height={12} />
          <span className="font-display font-black text-[15px] tracking-wide text-jp-green">
            POWER
            <br />
            SOLUTIONS
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href}
            className={`font-mono text-[12px] tracking-[0.15em] uppercase transition-colors hover:text-jp-green 
              ${pathName !== '/' || scrolled ? 'text-black/70' : 'text-white/80'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {/* <button className="hidden sm:inline-block font-mono text-[12px] tracking-widest uppercase bg-jp-green text-white px-4 py-2 hover:bg-jp-green-dim transition-colors">
            Toggle Theme
          </button> */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-black"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-jp-paper border-t border-black/10"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-[13px] tracking-widest uppercase text-black/80"
                >
                  {l.label}
                </Link>
              ))}
              {/* <button
                onClick={() => setOpen(false)}
                className="sm:hidden font-mono text-[12px] tracking-widest uppercase bg-jp-green text-white px-4 py-2.5 text-center"
              >
                Toggle Theme
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
