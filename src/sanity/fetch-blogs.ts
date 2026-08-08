'use server';
import { client } from ".";
import { SanityDocument } from "next-sanity";

export async function queryPosts(start: number, end: number) {
    const postsQuery = `*[
        _type == "post" && defined(slug.current)]
        [${start}...${end}]{
        "slug": slug.current,
        name,
        body
    }`;
    
    return await client.fetch<SanityDocument[]>(
        postsQuery,
        {},
        {
            next: {
                revalidate: 60 * 60 * 24 * 3
            }
        }
    );
}

export async function countPosts() {
    const countQuery = `count(*[
        _type == "post" && defined(slug.current)
    ])`;

    return client.fetch<number>(countQuery);
}

export async function getPostById(blogId: string) {
    const postQuery = `*[
        _type == "post"
        && slug.current == $slug
        ][0]{
            _id,
            name,
            body,
            image
        }
    `;

    return await client.fetch<SanityDocument>(
        postQuery,
        { slug: blogId }
    );
}
