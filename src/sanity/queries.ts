import { SanityImageAssetDocument } from "next-sanity";
import { client } from ".";
import { SanityDocument } from "sanity";

export async function getHeroImages() {
    const queryHeroimages = `*[
    _type == "heroPhotos"]{
        title,
        image
        }`;

    return await client.fetch<SanityDocument[]>(
        queryHeroimages,
        {},
        {
            next: {
                revalidate: 1
            }
        }
    );
}

interface ProjectDetails extends SanityDocument {
    slug: string;
    title: string;
    location: string;
    category: string;
    description: string;
    coverImage: SanityImageAssetDocument;
}

export async function getProjects(start: number, end: number) {
    const projectsQuery = `*[
        _type == "project" && defined(slug.current)]
        | order(_createdAt desc)
        [${start}...${end}]{
        "slug": slug.current,
        title,
        location,
        category,
        description,
        coverImage
    }`;
    
    return await client.fetch<ProjectDetails[]>(
        projectsQuery,
        {},
        {
            next: {
                revalidate: 1
            }
        }
    );
}

export async function countProjects() {
    const countProjectsQuery = `count(*[
        _type == "project" && defined(slug.current)
    ])`;

    return client.fetch<number>(countProjectsQuery);
}

interface FullProjectDetails extends SanityDocument {
    title: string;
    location: string;
    category: string;
    description: string;
    coverImage: SanityImageAssetDocument;
    images: {
        asset: SanityImageAssetDocument,
        caption?: string
    }[],
    video: any
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
        coverImage,
        images[]{
        asset,
        caption
        },
        video{
            asset->{
                playbackId,
                assetId,
                status,
                data{
                duration,
                aspect_ratio
                }
            }
        }
    }`;

    return await client.fetch<FullProjectDetails>(
        projectQuery,
        { slug: projectId }
    );
}
