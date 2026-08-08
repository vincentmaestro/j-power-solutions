'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!images?.length) return null;

  const close = () => setOpenIndex(null);
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(i)}
            className="group relative h-40 md:h-48 border border-black/10 overflow-hidden"
          >
            <Image
            src={src}
            alt={`${title} \u2014 photo ${i + 1}`}
            fill
            sizes="(min-width: 768px) 300px, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={close} className="absolute top-6 right-6 text-white" aria-label="Close">
            <X size={28} />
          </button>

          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <div className="relative w-full max-w-4xl h-[70vh]" onClick={(e) => e.stopPropagation()}>
            <Image
            src={images[openIndex]}
            alt={`${title} \u2014 photo ${openIndex + 1}`}
            fill
            sizes="100vw"
            />
          </div>

          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
