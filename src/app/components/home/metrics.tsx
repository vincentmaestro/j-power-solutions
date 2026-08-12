import { Reveal } from '@/app/components/reveal';

const METRICS = [
  { value: '6+', label: 'States served' },
  { value: '1.1MW', label: 'Cumulative installed capacity' },
  { value: '24/7', label: 'Availability for support and maintenance' },
];

export default function Metrics() {
  return (
    <section className="border-t border-black/10 bg-jp-green">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08} className={`py-14 px-6 ${i !== 0 ? 'border-l border-white/25' : ''}`}>
            <div className="font-display font-black text-center text-white text-[38px] md:text-[46px] leading-none">
              {m.value}
            </div>
            <div className="font-mono text-center text-[11.5px] tracking-[0.05em] text-white/70 mt-3">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}