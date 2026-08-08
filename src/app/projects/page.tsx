import Link from 'next/link';
import { DrawSetupDiagram } from '@/app/components/scenes';
import { PROJECTS } from '@/data/projects';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Projects \u2014 J Power Solutions',
  description: 'Solar, electrical, and mini-grid projects delivered across Nigeria \u2014 residential to community scale.',
};

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-jp-green">Selected work</span>
      <div className="flex flex-col lg:flex-row items-start gap-10 mt-2">
        <div>
          <h1 className="font-display font-black text-black text-[40px] md:text-[56px] leading-tight mb-2">Projects.</h1>
          <p className="font-body text-black/60 text-[16px] max-w-lg leading-relaxed">
            A record of installs across residential, institutional, healthcare, and mini-grid scale.
          </p>
        </div>
        <div className="w-full lg:w-105 shrink-0 border border-black/15">
          <DrawSetupDiagram />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block border border-black/10 hover:border-jp-green/40 transition-colors"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
              src={p.coverImage}
              alt={p.title}
              fill
              className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="font-mono text-[11px] uppercase tracking-wide text-jp-green">
                {p.category} &mdash; {p.location}
              </span>
              <h2 className="font-display font-bold text-black text-[19px] mt-2 flex items-center gap-1.5">
                {p.title}
                <ArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <p className="font-body text-black/60 text-sm leading-relaxed mt-2">{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
