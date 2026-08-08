import Link from "next/link";
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-jp-paper border-t border-black/10">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img src='/logo.svg' alt='Logo' />
              <span className="font-display font-black text-[15px] tracking-wide text-jp-green">
                POWER
                <br />
                SOLUTIONS
              </span>
            </div>
            <p className="font-body text-black/55 text-sm leading-relaxed mt-4 max-w-xs">
              Reliable power solution systems across Nigeria.
              <br />
              Built to NEMSA standard, built to last.
            </p>
          </div>
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-jp-green-dim">Index</span>
            <div className="flex flex-col gap-2.5 mt-4">
              <Link href='#capabilities' className="font-body text-[13.5px] text-black/60 hover:text-jp-green transition-colors">Capabilities</Link>
              <Link href='/projects' className="font-body text-[13.5px] text-black/60 hover:text-jp-green transition-colors">Projects</Link>
              <Link href='/contact' className="font-body text-[13.5px] text-black/60 hover:text-jp-green transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-jp-green-dim">Contact</span>
            <div className="flex flex-col gap-2.5 mt-4">
              <span className="flex items-center gap-2 font-body text-[13.5px] text-black/60"><Mail size={13} /> hello@jpowersolutions.com</span>
              <span className="flex items-center gap-2 font-body text-[13.5px] text-black/60"><Phone size={13} /> +234 705 338 1489</span>
              <span className="flex items-center gap-2 font-body text-[13.5px] text-black/60"><MapPin size={13} />Benin-City, Nigeria</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-jp-green-tint flex flex-col sm:flex-row items-center justify-between gap-3 p-6 border-t border-black/10">
        <p className="font-mono text-sm text-black/40">&copy; {new Date().getFullYear()} J Power Solutions.</p>
        <a
        href="https://vincent-maestro.netlify.app/"
        target="_blank"
        className="font-mono text-[11px] text-black/40 hover:text-jp-green/80 transition-colors duration-150"
        >
          maestro designed it
        </a>
      </div>
    </footer>
  );
}
