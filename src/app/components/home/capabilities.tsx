'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const CAPABILITIES = [
  { n: '01', title: 'Solar Array Design & Installation', body: 'Load-calculated PV systems sized to your budget and load demand \u2014 residential through commercial.' },
  { n: '02', title: 'Mini-Grid & Community Power', body: 'Estate, community-scale and mini-grid design, from feasibility study through commissioning.' },
  { n: '03', title: 'Electrical Works & Wiring', body: 'LV Panel fittings/upgrades, house wiring/rewiring, and certified electrical installation across residential and commercial sites.' },
  { n: '04', title: 'Metering & Monitoring', body: 'Smart and prepaid metering installations, configuration, real-time usage visibility and remote monitoring.' },
  { n: '05', title: 'Maintenance & Diagnostics', body: 'Scheduled maintenance and rapid-response troubleshooting to keep systems at full output.' },
];

export default function Capabilities() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="capabilities" className="py-24 border-t border-black/10">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-jp-green-dim">Capabilities</span>
          <h2 className="font-display font-bold text-black text-[32px] md:text-[40px] leading-tight mt-3">What we do.</h2>
        </Reveal>

        <div className="mt-14 border-t border-black/15">
          {CAPABILITIES.map((c, i) => {
            const isOpen = open === i;
            return (
              <div key={c.n} className="border-b border-black/15">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center gap-6 py-6 text-left group">
                  <span className="font-mono text-[13px] text-jp-green w-8 shrink-0">{c.n}</span>
                  <span className="font-display font-bold text-jp-green text-[18px] md:text-[22px] flex-1 group-hover:text-black transition-colors">
                    {c.title}
                  </span>
                  <Plus size={18} className={`shrink-0 transition-all duration-300 ${isOpen ? 'rotate-45 text-jp-green' : 'text-black'}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="font-body text-black/60 text-[14.5px] leading-relaxed pb-6 pl-14 max-w-xl">{c.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
