# Blog CMS — How the Blog Works

The blog is powered by **Sanity**, a free hosted content editor. Once it's set
up, you (or anyone you invite) can write, edit, and publish posts from a web
page — no code, no developer needed. Publishing a post automatically rebuilds
the website within a couple of minutes.

Until Sanity is connected, the site still works: it shows the 4 existing posts
that were migrated from the old site.

---

## Part 1 — One-time setup (developer, ~20 minutes)

### 1. Create the Sanity project

```bash
npm install
npx sanity login          # opens the browser — sign in with Google
npx sanity init --project-plan free
```

When prompted:
- **Create new project** → name it `Brunetta Tinto & Pasta`
- **Use the default dataset configuration?** → Yes (`production`, public)
- It will detect the existing `sanity.config.ts` — keep it, don't overwrite.

Copy the **Project ID** it prints (also at <https://sanity.io/manage>).

### 2. Add the environment variables

Locally, copy `.env.example` to `.env` and fill in the Project ID (all four
`*_PROJECT_ID` lines get the same value).

In **Vercel** → Project → Settings → Environment Variables, add:

| Name | Value | Environments |
|---|---|---|
| `PUBLIC_SANITY_PROJECT_ID` | your project ID | Production, Preview, Development |
| `PUBLIC_SANITY_DATASET` | `production` | all |
| `SANITY_STUDIO_PROJECT_ID` | your project ID | all |

### 3. Import the 4 existing posts

```bash
npm run blog:ndjson      # regenerates scripts/blog.ndjson from the seed data
npm run blog:import       # uploads them to Sanity
```

Two of the four old posts (the Instagram and family-restaurant ones) never had
their full text captured — they import with a "Full post coming soon" note.
Paste the real text into the editor when you have it, or delete them.

### 4. Publish the editor

```bash
npm run studio:deploy
```

This puts the editing page online at **https://brunetta.sanity.studio**.
(You can also run it locally any time with `npm run studio`.)

### 5. Auto-rebuild the site when a post is published

1. **Vercel** → Project → Settings → Git → **Deploy Hooks**. Create one named
   `Sanity publish`, branch `main`. Copy the URL it gives you.
2. **https://sanity.io/manage** → your project → **API** → **Webhooks** → Create:
   - URL: *(the Vercel deploy hook URL)*
   - Trigger on: **Create, Update, Delete**
   - Filter: `_type == "post"`
   - Leave the projection and secret blank.

Now every publish/edit in the editor triggers a fresh deploy.

### 6. Invite the client

**https://sanity.io/manage** → Members → **Invite** → enter their email,
role **Editor**. They'll get a login link.

---

## Part 2 — For the client: writing a post

1. Go to **https://brunetta.sanity.studio** and sign in.
2. Click **Blog posts** → **＋** (new).
3. Fill in:
   - **Title** — the headline.
   - **Slug** — click **Generate**; this becomes the web address. Leave it once set.
   - **Published at** — the date/time the post goes live. Set it in the future
     to schedule; the post only appears on the site once that time passes *and*
     the site rebuilds.
   - **Excerpt** — one or two sentences shown on the blog list and in Google.
   - **Cover image** — optional; drag a photo in. Add a short **alt text**
     describing it (for accessibility and search).
   - **Author** — defaults to *Brunetta Tinto & Pasta*; change if a person wrote it.
   - **Tags** — optional keywords.
   - **Body** — the article. Use the style menu for headings, quotes, and lists.
     You can drop images straight into the text.
4. Click **Publish** (bottom right).
5. Wait ~2 minutes, then check **brunettatintoandpasta.com/design-1/blog**.

**Editing or deleting** an existing post works the same way — open it, change
it, Publish. Deletes also rebuild the site.

**Unpublishing:** set **Published at** to a future date and Publish, or delete
the post.

---

## How it fits together (developer reference)

| Piece | File |
|---|---|
| Schema (post fields, rich text) | `src/sanity/schemaTypes/` |
| Editor config | `sanity.config.ts`, `sanity.cli.ts` |
| Read client + image URLs + queries | `src/sanity/lib/` |
| Sanity-or-seed abstraction | `src/lib/posts.ts` |
| Blog pages | `src/pages/design-1/blog/index.astro`, `[slug].astro` |
| Astro integration (loads only when project ID is set) | `astro.config.mjs` |
| Seed / fallback posts | `blog` array in `src/data/brunetta.ts` |

The site is statically built. `src/lib/posts.ts` fetches from Sanity at build
time; if Sanity isn't configured or returns nothing, it falls back to the seed
posts. That's why the blog never breaks the build.
