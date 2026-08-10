import { createClient } from "next-sanity";
import { SanityClient } from "next-sanity-client/dist/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const sanityClient = new SanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

export { client, sanityClient };
