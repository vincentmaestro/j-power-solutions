
import { createClient } from 'next-sanity';
import { SanityImageSource, createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
    projectId: 'lzlax3od',
    dataset: 'production',
    apiVersion: "2024-01-01",
    useCdn: false,
});

export function urlFor(source: SanityImageSource) {
    return createImageUrlBuilder(client).image(source);
}
