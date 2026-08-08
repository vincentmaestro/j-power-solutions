'use server';
import { client } from ".";
import { SanityDocument } from "next-sanity";

export async function getCommunities() {
    const communitiesQuery = `*[
        _type == "community" &&
        defined(slug.current)
        ][0...5]{
        name,
        slug,
        description,
        image{
            asset->{
            _id,
            url
            }
        },
        images[]{
            caption,
            asset->{
            _id,
            url
            }
        }
    }`;

    return await client.fetch<SanityDocument[]>(
        communitiesQuery,
        {},
        {
            next: {
                revalidate: 60 * 60 * 24 * 7
            }
        }
    );
}
