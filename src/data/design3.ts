/**
 * Design 3 — "Golden Child" (mygoldenchild.com).
 *   `golden`           = Phase A. The template's own content, verbatim.
 *   `brunettaOnGolden` = Phase B. Brunetta content on the same structure —
 *                        real Brunetta food photos, no borrowed imagery.
 */
import { big } from "./photos";

const media = "https://media.mygoldenchild.com/cdn-cgi/image/width=1400,format=auto,fit=scale-down,quality=85";
const gc = (name: string) => `${media}/${name}`;

export const golden = {
  name: "Golden Child",
  home: "/design-3/template",
  navLeft: [
    { label: "Shop", href: "/design-3/template" },
    { label: "Blog", href: "https://mygoldenchild.com/learn" },
    { label: "Vet Professionals", href: "https://mygoldenchild.com/vets" },
  ],
  navCta: { label: "Get Started", href: "https://mygoldenchild.com/intake" },
  hero: {
    image: gc("Styled-Food-BEEF-ORANGE5590-Edit2-1-1.jpg"),
    title: "The new way to mealtime is here",
    sub: "Chef-crafted meals for dogs with taste.",
    cta: { label: "Get the menu", href: "https://mygoldenchild.com/intake" },
    seals: ["Human Grade", "Vet Formulated", "USDA Facility", "AAFCO Complete"],
  },
  splash: {
    eyebrow: "The Golden Touch",
    title: "Food you'll both drool over",
    body: "This is no ordinary dog food. It's a fresh made meal with whole meat and vegetable pieces you can see. From first taste to last lick, your dog will think you're their private chef.",
    cta: { label: "Get Started", href: "https://mygoldenchild.com/intake" },
    image: gc("dalmatian-3x.jpg"),
  },
  bowls: {
    eyebrow: "Bone Appétit",
    title: "Same bowl. Endless variety.",
    body: "Each recipe is tailored to your dog's needs and served as a main and drizzle for a different meal every day of the week.",
    cards: [
      ["Roast Chicken Medley", "Main Chicken and Vegetables · Drizzle Golden Roast Chicken", gc("Roast%20Chicken%20Medley-1.jpg")],
      ["Chicken Peanut Satay", "Main Chicken and Vegetables · Drizzle Golden Peanut Butter", gc("Chicken%20Peanut%20Satay-2.jpg")],
      ["Chicken-Glazed Beef", "Main Beef and Vegetables · Drizzle Golden Roast Chicken", gc("Chicken-Glazed%20Beef-1.jpg")],
      ["Braised Beef Medley", "Main Beef and Vegetables · Drizzle Golden Braised Beef", gc("Braised%20Beef%20Medley-1.jpg")],
      ["Beef-Glazed Chicken", "Main Chicken and Vegetables · Drizzle Golden Braised Beef", gc("Beef-Glazed%20Chicken-1.jpg")],
      ["Beef Peanut Satay", "Main Beef and Vegetables · Drizzle Golden Peanut Butter", gc("Beef%20Peanut%20Satay-1.jpg")],
    ],
  },
  ugc: {
    eyebrow: "Five-Star Effect",
    title: "See why Golden Child is the envy of the pack",
    images: [
      gc("@soltheminiaussie.jpg"),
      gc("Carissa_Neary_2026-05-31_Golden_Child_Creator_Program_video_5304077162151936_1.jpg"),
      gc("@finnthegolden.jpg"),
      gc("Lina_Montealegre_2026-06-02_Golden_Child_Creator_Program_image_6295350245359616_1.jpg"),
      gc("@dogorfruit.jpg"),
      gc("Jessica_Zuazo_2026-05-27_Golden_Child_UGC_Army_image_4894502906789888_1.jpg"),
    ],
  },
  press: ["Refresh Miami", "TechCrunch", "Business Wire", "Forbes", "Petfood Industry", "TrendHunter", "iHeartDogs"],
  nutrition: {
    eyebrow: "Real Food. Real Research.",
    title: "Whole body nutrition in every bite",
    body: "Our food is clinically researched and formulated by a board-certified vet nutritionist to provide the highest standard for your dog with a taste they can't resist.",
    image: gc("GC_selects2-10-8-2.jpg"),
    seals: ["Human Grade", "Vet Formulated", "Chef Developed", "AAFCO Complete"],
    checks: ["AAFCO complete and balanced meals", "Human-grade ingredients", "Formulated by on-staff board-certified vet nutritionists"],
    imageRight: gc("two-panel-2.webp"),
    cta: { label: "Get Started", href: "https://mygoldenchild.com/intake" },
  },
  duo: {
    eyebrow: "Mix & Match",
    title: "Your new daily duo",
    body: "Mealtime is made simple for you and your dog with easy-to-pour, pre-portioned mains and drizzles delivered straight to your door.",
    left: gc("Mains-Hover@2x.jpg"),
    right: gc("Drizzles.png"),
    cta1: { label: "Shop Mains", href: "https://mygoldenchild.com/fresh-dog-food/chicken-recipes" },
    cta2: { label: "Shop Drizzles", href: "https://mygoldenchild.com/products/drizzle-variety-pack" },
  },
  close: {
    image: gc("Dalmatian.jpg"),
    eyebrow: "For Your Golden Child",
    title: "The most beautiful meal of the day",
    cta: { label: "Get Started", href: "https://mygoldenchild.com/intake" },
  },
  footer: {
    cols: [
      { title: "Menu", links: [["Recipes", "https://mygoldenchild.com/fresh-dog-food/chicken-recipes"], ["Drizzles", "https://mygoldenchild.com/products/golden-spoon-peanut-butter-drizzle"], ["Blog", "https://mygoldenchild.com/learn"], ["Vet Professionals", "https://mygoldenchild.com/vets"]] },
      { title: "Socials", links: [["Instagram", "https://www.instagram.com/mygoldenchild"], ["TikTok", "https://www.tiktok.com/@mygoldenchild"], ["LinkedIn", "https://www.linkedin.com/company/my-golden-child/"]] },
      { title: "Legal", links: [["Terms & Conditions", "https://mygoldenchild.com/policies/terms-of-service"], ["Privacy Policy", "https://mygoldenchild.com/policies/privacy-policy"]] },
      { title: "Help", links: [["Concierge Desk", "https://mygoldenchild.com/faq"], ["Contact", "https://mygoldenchild.com/contact"]] },
    ],
    copy: "© 2026 Golden Child. All Rights Reserved.",
    word: "Golden Child",
    marquee: "Five-star meals for your four-legged child",
  },
} as const;

const RESERVE = "https://www.google.com/maps/reserve/v/dine/c/5H5kKRje0fU";
const MENU = "/design-3/menu";

export const brunettaOnGolden = {
  name: "Brunetta",
  home: "/design-3",
  navLeft: [
    { label: "Menu", href: MENU },
    { label: "About", href: "/design-3/about" },
    { label: "Location", href: "/design-3/location" },
  ],
  navCta: { label: "Reserve", href: RESERVE },
  hero: {
    image: big("DSC08704"),
    title: "The new way to dinner is here",
    sub: "Handmade pasta, wood-fired pizza, steak and seafood — thirteen years in the heart of McAllen.",
    cta: { label: "Reserve a table", href: RESERVE },
    seals: ["McAllen, TX", "Thirteen Years", "Handmade Pasta", "Wood-fired"],
  },
  splash: {
    eyebrow: "The Brunetta Table",
    title: "Food you'll both come back for",
    body: "For thirteen years Brunetta Tinto & Pasta has cooked Italian food with heart — house-made pasta, wood-fired pizza, and seafood finished with care. Fine dining that still feels like home.",
    cta: { label: "See the menu", href: MENU },
    image: big("DSC01349"),
  },
  bowls: {
    eyebrow: "Signature Plates",
    title: "Same table. Endless plates.",
    body: "Every dish is from our McAllen kitchen — pasta, risotto, steak and seafood, cooked the way our regulars order them.",
    cards: [
      ["Pappardelle Nero", "Pasta House-made squid-ink pappardelle · Sauce Shrimp, calabrian chile, white wine", big("DSC08704")],
      ["Risotto Aragosta", "Rice Italian arborio, lobster · Finish White wine, butter, parmesan", big("DSC09489")],
      ["Filetto al Vino Rosso", "Cut 8 oz filet · Sauce Red wine reduction, seared smoked provolone", big("DSC05579")],
      ["Pesce Siciliana", "Fish Halibut and shrimp · Sauce Butter-garlic wine, lime, guajillo", big("DSC05501")],
      ["Burrata", "Base Wood-fired pomodoro, mozzarella · Top Prosciutto, arugula, burrata", big("DSC01349")],
      ["Tiramisù", "Layers Ladyfingers, mascarpone · Finish Coffee, cocoa", big("DSC09499")],
    ],
  },
  ugc: {
    eyebrow: "What Guests Say",
    title: "See why Brunetta is the table people keep",
    images: [big("DSC09683"), big("DSC09728"), big("DSC06626"), big("DSC09697"), big("DSC01335")],
  },
  press: ["Google", "Yelp", "OpenTable", "TripAdvisor", "Facebook"],
  nutrition: {
    eyebrow: "Real Food. Real Kitchen.",
    title: "Handmade pasta in every plate",
    body: "House-made pasta and risotto, a cellar built for the plate, and a dining room right down the street from the McAllen Convention Center.",
    image: big("DSC09697"),
    seals: ["House-made Pasta", "Wood-fired", "Thirteen Years", "McAllen"],
    checks: ["House-made pasta and risotto", "Steak and seafood finished to order", "A cellar chosen for the plate"],
    imageRight: big("DSC06525"),
    cta: { label: "Reserve a table", href: RESERVE },
  },
  duo: {
    eyebrow: "Pasta & Tinto",
    title: "Your new daily duo",
    body: "Pasta and tinto — the two halves of our name. Come for the plate, stay for the pour. Ask your server for tonight's by-the-glass list.",
    left: big("DSC01335"),
    right: big("DSC09499"),
    cta1: { label: "View Menu", href: MENU },
    cta2: { label: "Reserve", href: RESERVE },
  },
  close: {
    image: big("DSC08704"),
    eyebrow: "McAllen, Texas",
    title: "The most beautiful meal of the day",
    cta: { label: "Reserve a table", href: RESERVE },
  },
  footer: {
    cols: [
      { title: "Discover", links: [["Home", "/design-3"], ["About", "/design-3/about"], ["Menu", MENU], ["Gallery", "/design-3/gallery"]] },
      { title: "Socials", links: [["Instagram", "https://www.instagram.com/brunetta_restaurant/"], ["Facebook", "https://www.facebook.com/BrunettaTintoPasta/"]] },
      { title: "Legal", links: [["Privacy Policy", "/design-3/privacy"]] },
      { title: "Visit", links: [["Location", "/design-3/location"], ["Contact", "/design-3/contact"], ["Reserve", RESERVE]] },
    ],
    copy: "© 2026 Brunetta Tinto & Pasta. All Rights Reserved.",
    word: "Brunetta",
    marquee: "Handmade pasta and tinto in McAllen",
  },
} as const;
