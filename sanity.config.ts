import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.PUBLIC_SANITY_PROJECT_ID ||
  "";
const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.PUBLIC_SANITY_DATASET ||
  "production";

export default defineConfig({
  name: "brunetta",
  title: "Brunetta Tinto & Pasta",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Blog posts")
              .child(S.documentTypeList("post").title("Blog posts").defaultOrdering([{ field: "publishedAt", direction: "desc" }])),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
