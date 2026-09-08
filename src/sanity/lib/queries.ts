// GROQ queries. Plain strings (no `groq` tag needed at runtime).
const COVER = `coverImage{ "url": asset->url, alt, "lqip": asset->metadata.lqip, "aspect": asset->metadata.dimensions.aspectRatio }`;

/** Published posts (publishedAt in the past), newest first. */
export const postsQuery = `
  *[_type == "post" && defined(slug.current) && publishedAt <= now()]
  | order(publishedAt desc) {
    "slug": slug.current, title, excerpt, publishedAt, author, tags,
    "cover": ${COVER}
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug && publishedAt <= now()][0] {
    "slug": slug.current, title, excerpt, publishedAt, author, tags, body,
    "cover": ${COVER}
  }
`;

export const slugsQuery = `
  *[_type == "post" && defined(slug.current) && publishedAt <= now()].slug.current
`;
