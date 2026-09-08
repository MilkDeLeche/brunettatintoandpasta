/**
 * Single source of truth for blog posts.
 *
 * Reads from Sanity when it's configured (PUBLIC_SANITY_PROJECT_ID set), and
 * falls back to the seed posts in src/data/brunetta.ts until then — so the
 * site builds and the blog works before the client creates their Sanity
 * project. Once Sanity has posts, they take over automatically.
 */
import { toHTML, type PortableTextComponents } from "@portabletext/to-html";
import { client } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";
import { postsQuery, postBySlugQuery } from "../sanity/lib/queries";
import { blog as seedPosts } from "../data/brunetta";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, or "" when unknown (seed data). */
  publishedAt: string;
  /** "March 4, 2026" or "". */
  dateLabel: string;
  author: string;
  tags: string[];
  cover: { url: string; alt: string } | null;
  /** Rendered HTML for the post body, or null on the index (not fetched). */
  bodyHtml: string | null;
}

const fmt = (iso: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "";

const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const b = urlForImage(value);
      if (!b) return "";
      const src = b.width(1400).auto("format").url();
      const alt = (value.alt as string) || "";
      return `<img src="${src}" alt="${alt}" loading="lazy" />`;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value?.href as string) || "#";
      const ext = /^https?:\/\//.test(href);
      return `<a href="${href}"${ext ? ' target="_blank" rel="noopener"' : ""}>${children}</a>`;
    },
  },
};

/* ---- Sanity shapes ---- */
type SanityCover = { url?: string; alt?: string } | null;
interface SanityPostBase {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author?: string;
  tags?: string[];
  cover?: SanityCover;
}
interface SanityPostFull extends SanityPostBase {
  body: unknown;
}

function fromSanity(p: SanityPostBase, bodyHtml: string | null): Post {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    publishedAt: p.publishedAt ?? "",
    dateLabel: fmt(p.publishedAt ?? ""),
    author: p.author || "Brunetta Tinto & Pasta",
    tags: p.tags ?? [],
    cover: p.cover?.url ? { url: p.cover.url, alt: p.cover.alt || "" } : null,
    bodyHtml,
  };
}

function fromSeed(p: (typeof seedPosts)[number], withBody: boolean): Post {
  const iso = p.date && p.date !== "UNCONFIRMED" ? p.date : "";
  const bodyHtml =
    withBody && p.body
      ? p.body.map((para) => `<p>${escapeHtml(para)}</p>`).join("\n")
      : withBody
        ? `<p>${escapeHtml(p.excerpt)}</p><p><em>Full post coming soon.</em></p>`
        : null;
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    publishedAt: iso,
    dateLabel: fmt(iso),
    author: "Brunetta Tinto & Pasta",
    tags: [...((p as { topics?: string[] }).topics ?? [])],
    cover: null,
    bodyHtml,
  };
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* ---- public API ---- */

export async function getPosts(): Promise<Post[]> {
  if (client) {
    try {
      const rows = await client.fetch<SanityPostBase[]>(postsQuery);
      if (rows?.length) return rows.map((r) => fromSanity(r, null));
    } catch (err) {
      console.warn("[posts] Sanity fetch failed, using seed posts:", err);
    }
  }
  return seedPosts.map((p) => fromSeed(p, false));
}

export async function getPost(slug: string): Promise<Post | null> {
  if (client) {
    try {
      const row = await client.fetch<SanityPostFull | null>(postBySlugQuery, { slug });
      if (row) {
        const html = row.body ? toHTML(row.body as never, { components: ptComponents }) : "";
        return fromSanity(row, html);
      }
    } catch (err) {
      console.warn("[posts] Sanity fetch failed, using seed post:", err);
    }
  }
  const seed = seedPosts.find((p) => p.slug === slug);
  return seed ? fromSeed(seed, true) : null;
}
