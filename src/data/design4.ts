/**
 * Design 4 — "Picnic" (trypicnic.com).
 *   `picnic`            = Phase A. The template's own content, verbatim.
 *   `brunettaOnPicnic`  = Phase B. Brunetta content on the same structure,
 *                         with real Brunetta food photos.
 */
import { big } from "./photos";

const px = (id: string, w = 1200) =>
  `https://images.prismic.io/hubs-main/${id}?auto=format,compress&w=${w}`;

export const picnic = {
  name: "Picnic",
  home: "/design-4/template",
  nav: [
    { label: "For Offices", href: "https://trypicnic.com" },
    { label: "For Restaurants", href: "https://trypicnic.com/for-restaurants" },
    { label: "Resources", href: "https://trypicnic.com/blog" },
  ],
  ctaPrimary: { label: "Order", href: "https://order.trypicnic.com/" },
  ctaSecondary: { label: "Request Picnic", href: "https://trypicnic.com/request" },
  hero: {
    image: px("Z2PsMJbqstJ98qp8_picnic-hp-hero.webp", 1600),
    titleBefore: "50+ restaurants delivered to your",
    titleAccent: "office",
    titleAfter: "",
    sub: "Picnic is a unique office delivery service that brings your team the best food brands — without the delivery fees.",
    ctas: [
      { label: "Already on Picnic? Order here", href: "https://order.trypicnic.com/" },
      { label: "View Picnic Demo", href: "https://trypicnic.com/demo" },
    ],
  },
  press: ["goop kitchen", "Hawaiian Bros", "Just Salad", "Mendocino Farms", "Dig"],
  solutions: {
    title: "Our solutions",
    items: [
      { name: "Office meals", desc: "Individual meals ordered by employees and delivered together for a seamless lunchtime experience." },
      { name: "Team orders", desc: "Team orders placed individually, delivered together and paid together." },
      { name: "Catering", desc: "Fee-free catering for events, fully coordinated with the restaurant to ensure everything runs smoothly." },
      { name: "Subsidized meals", desc: "Flexible solutions for companies that want to subsidize employee lunches, helping drive satisfaction and engagement." },
      { name: "Office building delivery", desc: "A variety of meals from multiple restaurants, delivered together — eliminating the need for physical food courts." },
    ],
    media: { image: px("Z1LWwZbqstJ98H81_our-solutions-image.webp", 900), label: "See how it works" },
  },
  why: {
    title: "Why Picnic?",
    sub: "Our new generation of digital food courts and batching technology allows us to substantially lower the costs and bring the best service on the market when it comes to office lunch delivery.",
    cards: [
      { title: "No fees, no tips", body: "Unlike traditional meal delivery services, Picnic eliminates fees and tips, offering a simple and transparent experience for businesses and employees alike." },
      { title: "Convenient delivery", body: "We deliver all orders together, ensuring meals arrive fresh, on time, and hassle-free — perfect for offices and team gatherings." },
      { title: "Tailored options for every team", body: "Daily lunches, a big catering event, or a subsidized lunch program for hybrid teams — Picnic has a solution that fits your needs." },
      { title: "Streamlined ordering process", body: "With over 50+ restaurant options and no delivery fees, employees can easily order their favorite meals, and everything is delivered at once." },
    ],
  },
  feature1: {
    titleBefore: "One delivery for",
    titleEm: "many",
    titleAfter: "orders",
    body: "Orders delivered together to a designated Picnic shelf, removing the hassle of pickup.",
    ctas: [
      { label: "Order now", href: "https://order.trypicnic.com/" },
      { label: "Request Picnic", href: "https://trypicnic.com/request" },
    ],
    image: px("aSQKiWGnmrmGqKMs_Picnicbagcity.png", 900),
  },
  ticker: [
    ["Salads"], ["Tacos", "em"], ["Sandwiches"], ["Dessert", "em"], ["Bowls"], ["Wraps", "em"],
    ["Mediterranean"], ["Thai", "em"], ["Sushi"], ["Mexican", "em"], ["Burgers"], ["Poke", "em"],
    ["Greek", "em"], ["Indian"], ["Vegan", "em"], ["Chinese"], ["Pizza"], ["Soup"],
  ] as const,
  quote: {
    head: "See how we changed office lunch delivery for MBK Real Estate",
    text: "Picnic is revolutionizing the way our team is having lunch daily.",
    cite: "Ed Stokx, CFO at MBK Real Estate",
    cta: { label: "See how it works", href: "https://trypicnic.com/case-studies" },
  },
  feature2: {
    titleBefore: "All the options without",
    titleEm: "the fees",
    titleAfter: "",
    body: "Our batching technology allows us to offer you 50+ restaurants without any fees.",
    ctas: [
      { label: "Order now", href: "https://order.trypicnic.com/" },
      { label: "Request Picnic", href: "https://trypicnic.com/request" },
    ],
    image: px("aNFByJ5xUNkB0-Jm_Slider.png", 900),
  },
  trusted: { title: "Trusted by many", logos: ["Live Nation", "KPMG", "Wells Fargo", "Chubb", "EY"] },
  insta: {
    handle: "@picnicatwork",
    images: [px("Z72hFZ7c43Q3gL83_ig-1.webp", 500), px("Z72hIp7c43Q3gL87_ig-2.webp", 500), px("Z72hLZ7c43Q3gL9E_ig-3.webp", 500), px("Z72hNp7c43Q3gL9M_ig-4.webp", 500)],
  },
  footer: {
    blurb: "Discover our zero-fees, zero-tips office lunch delivery service, catering for large events, group ordering, and subsidized lunch programs with trypicnic.com.",
    ctas: [
      { label: "Get started", href: "https://order.trypicnic.com/" },
      { label: "Request Picnic", href: "https://trypicnic.com/request" },
    ],
    cols: [
      { title: "Our services", links: [["Office meals", "#"], ["Team Orders", "#"], ["Catering", "#"], ["Subsidized meals", "#"], ["Office building delivery", "#"]] },
      { title: "Resources", links: [["Picnic blog", "#"], ["Become a Driver", "#"]] },
      { title: "Company", links: [["About", "#"], ["Careers", "#"], ["Referral Program", "#"]] },
      { title: "Legal", links: [["Terms of service", "#"], ["Privacy policy", "#"]] },
    ],
    word: "Picnic",
    copy: "© 2026 Picnic inc. All rights reserved.",
  },
} as const;

const RESERVE = "https://www.google.com/maps/reserve/v/dine/c/5H5kKRje0fU";
const MENU = "/design-4/menu";

export const brunettaOnPicnic = {
  name: "Brunetta",
  home: "/design-4",
  nav: [
    { label: "Menu", href: MENU },
    { label: "About", href: "/design-4/about" },
    { label: "Location", href: "/design-4/location" },
  ],
  ctaPrimary: { label: "Reserve", href: RESERVE },
  ctaSecondary: { label: "View Menu", href: MENU },
  hero: {
    image: big("DSC01349"),
    titleBefore: "Authentic Italian dining in the heart of",
    titleAccent: "McAllen",
    titleAfter: "",
    sub: "Thirteen years of handmade pasta, wood-fired pizza, steak and seafood — a dining room that still feels like home.",
    ctas: [
      { label: "Reserve a table", href: RESERVE },
      { label: "View the menu", href: MENU },
    ],
  },
  press: ["Google", "Yelp", "OpenTable", "TripAdvisor", "Facebook"],
  solutions: {
    title: "On the table",
    items: [
      { name: "Antipasti & Salumi", desc: "Tuna tartare, beef carpaccio, a charcuterie board with brie, prosciutto and fig preserves." },
      { name: "House-made Pasta", desc: "Pappardelle, ravioli and gnocchi rolled in our kitchen — squid-ink, four-cheese, truffle." },
      { name: "Risotti", desc: "Arborio finished tableside — seafood, black truffle, saffron, or lobster." },
      { name: "Wood-fired Pizza", desc: "Margherita, burrata, prosciutto and arugula, or Toscana with fig and balsamic." },
      { name: "Steak & Seafood", desc: "Filet in a red-wine reduction, prime rib eye, halibut and shrimp in butter-garlic wine." },
    ],
    media: { image: big("DSC09697"), label: "See the menu" },
  },
  why: {
    title: "Why Brunetta?",
    sub: "For thirteen years we've cooked Italian food with heart — the freshest ingredients, classic technique, and a room that's elegant without being stuffy.",
    cards: [
      { title: "Made in house", body: "Pasta, risotto and dessert are made in our own kitchen every day — nothing arrives pre-portioned." },
      { title: "Wood-fired", body: "Our pizzas come off a wood-fired oven — blistered crust, pomodoro, fresh mozzarella and olive oil." },
      { title: "A cellar for the plate", body: "\"Tinto\" is half our name. Crisp whites for seafood, bold reds for tomato and meat — ask your server for tonight's pours." },
      { title: "Thirteen years in McAllen", body: "Right down the street from the McAllen Convention Center — a table for date nights, family, and everyday celebrations." },
    ],
  },
  feature1: {
    titleBefore: "One table for",
    titleEm: "every",
    titleAfter: "occasion",
    body: "Cozy and refined at once — a romantic dinner, a family celebration, or a relaxed lunch.",
    ctas: [
      { label: "Reserve a table", href: RESERVE },
      { label: "View menu", href: MENU },
    ],
    image: big("DSC08704"),
  },
  ticker: [
    ["Antipasti"], ["Pasta", "em"], ["Risotto"], ["Pizza", "em"], ["Bistecca"], ["Pesce", "em"],
    ["Insalate"], ["Zuppa", "em"], ["Carpaccio"], ["Gnocchi", "em"], ["Ravioli"], ["Tiramisù", "em"],
    ["Cannoli", "em"], ["Burrata"], ["Prosciutto", "em"], ["Tartufo"], ["Vino", "em"], ["Dolci"],
  ] as const,
  quote: {
    head: "See why Brunetta is the table people keep",
    text: "Some of the best handmade pasta and pizza in the Valley — the mushroom soup alone is worth the trip.",
    cite: "Google Reviews",
    cta: { label: "Read our reviews", href: "https://www.google.com/search?q=brunetta+tinto+%26+pasta" },
  },
  feature2: {
    titleBefore: "Every plate made",
    titleEm: "in house",
    titleAfter: "",
    body: "House-made pasta and risotto, seafood finished to order, and dessert from our own kitchen.",
    ctas: [
      { label: "Reserve a table", href: RESERVE },
      { label: "View menu", href: MENU },
    ],
    image: big("DSC06525"),
  },
  trusted: { title: "Loved by the Valley", logos: ["Google 4.4★", "Yelp", "OpenTable", "TripAdvisor", "Restaurant Guru"] },
  insta: {
    handle: "@brunetta_restaurant",
    images: [big("DSC09683"), big("DSC01335"), big("DSC09728"), big("DSC06626")],
  },
  footer: {
    blurb: "Authentic Italian fine dining in McAllen, TX — handmade pasta, wood-fired pizza, steak and seafood. Thirteen years in the heart of the city.",
    ctas: [
      { label: "Reserve a table", href: RESERVE },
      { label: "View menu", href: MENU },
    ],
    cols: [
      { title: "Discover", links: [["Home", "/design-4"], ["About", "/design-4/about"], ["Menu", MENU], ["Gallery", "/design-4/gallery"]] },
      { title: "Visit", links: [["Location", "/design-4/location"], ["Contact", "/design-4/contact"], ["Reserve", RESERVE]] },
      { title: "Socials", links: [["Instagram", "https://www.instagram.com/brunetta_restaurant/"], ["Facebook", "https://www.facebook.com/BrunettaTintoPasta/"]] },
      { title: "Legal", links: [["Privacy policy", "/design-4/privacy"]] },
    ],
    word: "Brunetta",
    copy: "© 2026 Brunetta Tinto & Pasta. All rights reserved.",
  },
} as const;
