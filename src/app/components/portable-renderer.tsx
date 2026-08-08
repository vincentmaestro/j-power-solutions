/* eslint-disable */

'use client';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity';

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null
      
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).quality(80).url()}
            alt={value.caption || 'Image'}
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => (
      <a 
        href={value.href}
        target={value.href.startsWith('http') ? '_blank' : undefined}
        rel={value.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-etinpower-blue hover:underline"
      >
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-bold mt-6 mb-3 text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-gray-900">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 text-base sm:text-lg text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
  },
}

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={portableTextComponents} />
}
