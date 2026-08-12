import { MetadataRoute } from "next";
import { client } from '@/sanity';
import { SanityDocument } from "next-sanity";

export const BASE_URL = 'https://j-power.com';

const projectsQuery = `*[
    _type == "project" && defined(slug.current)]
    | order(_createdAt desc){
    "slug": slug.current
}`;
const projects = await client.fetch<SanityDocument[]>(projectsQuery);

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            lastModified: new Date('2026-08-12'),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: `${BASE_URL}/projects`,
            lastModified: new Date('2026-08-12'),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        ...projects.map(p => ({
            url: `${BASE_URL}/projects/${p.slug}`,
            lastModified: p._updatedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.8
        })),
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date('2026-08-12'),
            changeFrequency: 'yearly',
            priority: 0.6
        }
    ];
}
