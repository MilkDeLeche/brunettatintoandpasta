import { createClient, type SanityClient } from "@sanity/client";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.PUBLIC_SANITY_DATASET as string | undefined) ?? "production";
const token = import.meta.env.SANITY_API_READ_TOKEN as string | undefined;

export const isSanityConfigured = Boolean(projectId);

/** Null until the client's Sanity project id is set (PUBLIC_SANITY_PROJECT_ID). */
export const client: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-10-01",
      useCdn: !token, // token → we may want drafts/fresh data, so skip the CDN
      token,
      perspective: "published",
    })
  : null;
