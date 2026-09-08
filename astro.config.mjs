import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV ?? "", process.cwd(), "");
const SANITY_PROJECT_ID = env.PUBLIC_SANITY_PROJECT_ID ?? "";
const SANITY_DATASET = env.PUBLIC_SANITY_DATASET ?? "production";

/**
 * The Sanity integration only loads once a project id is set. Before the client
 * creates their Sanity project the site still builds — the blog just falls back
 * to the seed posts in src/lib/posts.ts. See BLOG-CMS.md.
 *
 * The editing UI (Studio) is deployed separately to brunetta.sanity.studio via
 * `npm run studio:deploy`, so the Astro site stays fully static — no /studio
 * route, no server rendering.
 */
const integrations = [react()];
if (SANITY_PROJECT_ID) {
  integrations.push(
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: "2024-10-01",
      useCdn: true,
    })
  );
}

export default defineConfig({
  site: "https://brunettatintoandpasta.com",
  adapter: vercel(),
  integrations,
  vite: { plugins: [tailwindcss()] },
});
