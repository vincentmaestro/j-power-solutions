import { Reveal } from '@/app/components/reveal';
import { Mail, Phone } from 'lucide-react';

function Crosshair({ x, y }: { x: number; y: number }) {
  return (
    <>
      <line x1={x - 10} y1={y} x2={x + 10} y2={y} stroke='#eaf5ec' strokeWidth="1.4" />
      <line x1={x} y1={y - 10} x2={x} y2={y + 10} stroke='#eaf5ec' strokeWidth="1.4" />
    </>
  );
}

export default function CTA() {
  return (
    <section id="note" className='bg-jp-green-tint'>
      <div className="max-w-6xl lg:max-w-5xl v mx-auto text-center px-10 py-16 md:py-24 border-t border-black/10">
        <Reveal>
          <p className="font-display font-medium text-black/80 leading-snug italic">
            &ldquo;Whether it&lsquo;s powering rural communities through solar infrastructure—including solar-powered boreholes, street lighting, mini-grids, and rural electrification—or delivering dependable electrical and solar solutions for homes, schools, hotels, and commercial facilities, we execute every project to the highest standards of safety, quality, and professionalism.
            <br />
            <br />
            Choosing us means partnering with a team committed to long-term service, reliability, and trust. Backed by years of experience and industry best practices, we deliver solutions engineered for lasting performance and dependable results.&rdquo;
          </p>
          <br />
          <div className="mt-6 font-mono text-[12px] tracking-widest uppercase text-black/50">
            Johnpaul Ofremu &mdash; Founder & CEO, J Power Solutions
          </div>
        </Reveal>
      </div>

      <div className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/70" />
        <svg viewBox="0 0 900 40" className="absolute top-6 left-0 w-full h-10 pointer-events-none" aria-hidden="true">
          <Crosshair x={24} y={20} />
          <Crosshair x={876} y={20} />
        </svg>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-white/40 font-mono text-[11px] tracking-[0.2em] uppercase">GET IN TOUCH</span>
          <h2 className="font-display font-black text-white text-[34px] md:text-[52px] leading-[1.05] mt-5">
            LET&rsquo;S POWER
            <br /> YOUR NEXT PROJECT.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <a href="mailto:hello@jpowersolutions.com" className="inline-flex items-center gap-2 bg-jp-green text-white font-mono text-[13px] tracking-[0.08em] uppercase px-6 py-3.5 hover:bg-jp-green-dim transition-colors">
              <Mail size={15} /> hello@jpowersolutions.com
            </a>
            <a href="tel:+234 705 338 1489" className="inline-flex items-center gap-2 border border-white/25 text-white font-mono text-[13px] tracking-[0.08em] uppercase px-6 py-3.5 hover:border-jp-green hover:text-jp-green transition-colors">
              <Phone size={15} /> Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}