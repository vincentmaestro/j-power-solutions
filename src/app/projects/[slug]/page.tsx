import { getProjectById } from '@/sanity/queries';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { VideoPlayer } from '@/app/components/mux-video-player';
import { Gallery } from '@/app/components/gallery';
import { urlFor } from '@/sanity';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: {
  params: Promise<{ slug: string }>
}) {
  const currentMetaData = (await params).slug
  const project = await getProjectById(currentMetaData);

  if (!project) return {};

  return {
    title: `\u2014 ${project.title}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: {
  params: Promise<{ slug: string }>
}) {
  const currentSlug = (await params).slug;
  const project = await getProjectById(currentSlug);

  if (!project) notFound();

  return (
    <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wide text-black/60 hover:text-jp-green transition-colors"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      <div className="mt-8">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-jp-green">
          {project.category} &middot; {project.location}
        </span>
        <h1 className="font-display font-black text-black text-[36px] md:text-[52px] leading-tight mt-3">
          {project.title}
        </h1>
        <p className="font-body text-black/70 text-[16px] leading-relaxed max-w-2xl mt-6">
          {project.description}
        </p>
      </div>

      {project.video 
      ? (
        <div className="relative my-10 md:mt-15 md:mb-45 md:h-105 border border-black/10">
          <VideoPlayer video={project.video} />
        </div>
      ) : (
        <div className="relative h-72 md:h-105 my-10 border border-black/10 group overflow-hidden">
          <Image
          src={urlFor(project.coverImage).url()}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 900px, 100vw"
          className="object-cover group-hover:scale-110 transition-transform duration-800"
          />
        </div>
      )}

      <Gallery images={project.images.map(img => ({ imageUrl: urlFor(img.asset).url(), caption: img.caption }))} title={project.title} />
    </main>
  );
}
