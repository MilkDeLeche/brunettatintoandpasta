/**
 * Generates seed/blog.ndjson from the seed posts, ready for:
 *   npx sanity dataset import scripts/blog.ndjson production
 *
 * Run once when the client's Sanity project is first set up. After that,
 * Sanity is the source of truth and this script is only for reference.
 *
 *   node scripts/blog-to-ndjson.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Kept in sync with `blog` in src/data/brunetta.ts. */
const posts = [
  {
    title: "4 Italian Menu Terms You Need to Know for Your Next Visit to Brunetta",
    slug: "4-italian-menu-terms-you-need-to-know-for-your-next-visit-to-brunetta",
    date: "2026-03-04",
    excerpt:
      "Unlock the secrets of Italian dining at Brunetta Tinto & Pasta by learning four essential menu terms.",
    topics: ["Antipasti", "Al Dente", "Risotto", "Dolce"],
    body: [
      "Understanding Italian culinary language enhances the dining experience — here are four essential terms you'll see on our menu.",
      'Antipasti — translates to "before the meal." These are sophisticated opening dishes designed to awaken the palate before the main course.',
      'Al Dente — means "to the tooth." It describes pasta cooked to remain firm when bitten, preserving its texture so sauces and ingredients stand out.',
      "Risotto — a northern Italian technique using high-starch Arborio rice that is slow-cooked with broth to achieve a luxurious, velvety consistency.",
      'Dolce — means "sweet." It refers to the final dessert course, providing a decadent conclusion to your culinary journey.',
      "We invite you to visit Brunetta Tinto & Pasta in McAllen to experience these traditions firsthand.",
    ],
  },
  {
    title: "How to Take Amazing Food Photos for Instagram",
    slug: "how-to-take-amazing-food-photos-for-instagram",
    date: "UNCONFIRMED",
    excerpt:
      "At Brunetta Tinto & Pasta, we believe that every meal is a work of art worth sharing.",
    body: null,
  },
  {
    title: "How to Pair Wine With Your Favorite Pasta",
    slug: "how-to-pair-wine-with-your-favorite-pasta",
    date: "2026-01-28",
    excerpt:
      "Discover the perfect wine to pair with your favorite pasta at Brunetta Tinto & Pasta.",
    body: [
      "At Brunetta Tinto & Pasta, we believe that a truly exceptional meal is more than just the sum of its ingredients; it is an experience where every element works in harmony. Finding the perfect wine to complement a plate of house-made pasta can elevate your dining experience from delicious to unforgettable.",
      "Light Whites for Fresh Seafood and Zesty Sauces — when we serve delicate seafood dishes like our Spaghetti Frutti di Mare or zesty, citrus-forward recipes, we recommend a crisp white wine. Light-bodied varietals such as Pinot Grigio or a vibrant Sauvignon Blanc provide a clean acidity that cuts through the richness of the seafood without overpowering its subtle, fresh flavors.",
      "Rich Reds for Hearty Meat and Bold Tomato Bases — for those who lean toward the robust depth of a Lasagna Emiliana or a savory bolognese, we suggest a medium to full-bodied red. A classic Sangiovese or a bold Cabernet Sauvignon offers the tannins to stand up to hearty meat sauces and sun-ripened tomatoes.",
      "Creamy Textures Paired with Elegant Chardonnays — creamy pasta dishes, such as our Fettuccini 4 Formaggi or Gnocchi Gorgonzola, call for a wine with enough body to match their velvet texture. We often point our guests toward an oaked Chardonnay or a smooth Viognier.",
      "Earthy Tones for Truffles and Savory Mushrooms — when the menu features earthy ingredients like black truffle or porcini, we look for wines that share those deep, forest-floor characteristics. An elegant Pinot Noir or a sophisticated Nebbiolo pairs beautifully with our Pappardelle Boscaiola.",
      "We invite you to explore our cellar and discover your new favorite combination — visit us today, or browse our menu online to plan your next visit.",
    ],
  },
  {
    title: "How to Find a Great Family-Friendly Restaurant in McAllen, TX",
    slug: "how-to-find-a-great-family-friendly-restaurant-in-mcallen-tx",
    date: "UNCONFIRMED",
    excerpt:
      "Discover how to find the best family-friendly restaurants in McAllen, TX, where quality food meets a welcoming atmosphere.",
    body: null,
  },
];

// Posts without a confirmed date get spaced out before the earliest known post
// so ordering stays stable. The client can fix the real dates in the Studio.
let fallback = Date.parse("2026-01-01T12:00:00Z");
const isoFor = (d) => {
  if (d && d !== "UNCONFIRMED") return `${d}T12:00:00Z`;
  fallback -= 24 * 3600 * 1000;
  return new Date(fallback).toISOString();
};

const block = (text, i) => ({
  _type: "block",
  _key: `b${i}`,
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: `b${i}s`, text, marks: [] }],
});

const docs = posts.map((p) => {
  const bodyText = p.body ?? [p.excerpt, "Full post coming soon."];
  return {
    _type: "post",
    _id: `post.${p.slug}`,
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    publishedAt: isoFor(p.date),
    excerpt: p.excerpt,
    author: "Brunetta Tinto & Pasta",
    tags: p.topics ?? [],
    body: bodyText.map(block),
  };
});

const ndjson = docs.map((d) => JSON.stringify(d)).join("\n") + "\n";
mkdirSync(join(root, "scripts"), { recursive: true });
writeFileSync(join(root, "scripts", "blog.ndjson"), ndjson);
console.log(`Wrote scripts/blog.ndjson — ${docs.length} posts.`);
