'use server';

import { client } from ".";
import { SanityDocument } from "next-sanity";

export async function queryProjects(start: number, end: number) {
    const projectsQuery = `*[
        _type == "project" && defined(slug.current)]
        | order(_createdAt: desc)
        [${start}...${end}]{
        "slug": slug.current,
        title,
        location,
        category,
        description,
        "coverImage": coverImage.asset->url,
    }`;
    
    return await client.fetch<SanityDocument[]>(
        projectsQuery,
        {},
        {
            next: {
                revalidate: 1
            }
            // next: {
            //     revalidate: 60 * 60 * 24 * 3
            // }
        }
    );
}

export async function countProjects() {
    const countQuery = `count(*[
        _type == "project" && defined(slug.current)
    ])`;

    return client.fetch<number>(countQuery);
}

export async function getProjectById(projectId: string) {
    const projectQuery = `*[
        _type == "project"
        && slug.current == $slug
        ][0]{
        "slug": slug.current,
        title,
        location,
        category,
        description,
        "coverImage": coverImage.asset->url,
        images[]{
        "url": asset->url,
        caption
        }
    }`;

    return await client.fetch<SanityDocument>(
        projectQuery,
        { slug: projectId }
    );
}
