import { defineLive } from "next-sanity/live";
import { client } from ".";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: false,
  browserToken: false
});