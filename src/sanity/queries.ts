import { sanityFetch } from "./live";
import { SanityImageAssetDocument } from "next-sanity";
import { SanityDocument } from "sanity";

export async function getHeroImages() {
    const queryHeroimages = `*[
    _type == "heroPhotos"]{
        title,
        image
        }`;

    const { data } = await sanityFetch({ query: queryHeroimages });
    return data;
}

export interface ProjectDetails extends SanityDocument {
    slug: string;
    title: string;
    location: string;
    category: string;
    description: string;
    coverImage: SanityImageAssetDocument;
}

export async function getProjects(start: number, end: number): Promise<ProjectDetails[]> {
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
    
    const { data } = await sanityFetch({ query: projectsQuery });
    return data;
}

export async function countProjects() {
    const countProjectsQuery = `count(*[
        _type == "project" && defined(slug.current)
    ])`;

    const { data } = await sanityFetch({ query: countProjectsQuery });
    return data;
}

export interface FullProjectDetails extends SanityDocument {
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

export async function getProjectBySlug(slug: string): Promise<FullProjectDetails> {
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

    const { data } = await sanityFetch({
        query: projectQuery,
        params: { slug }
    });
    return data;
}
