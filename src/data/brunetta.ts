/**
 * Brunetta Tinto & Pasta — SINGLE SOURCE OF TRUTH for every client-supplied fact.
 *
 * Pipeline step 1 (client-web-delivery). Rules:
 *  - Every fact the site renders comes from THIS file. No hard-coded copy in components.
 *  - Nothing here is invented. Fields we could not verify are marked `UNCONFIRMED`
 *    and listed in ../../SETUP-LIST.md for the client to confirm before launch.
 *  - When the clone template + code arrive, wire the template to this object and
 *    delete the template's placeholder data.
 *
 * Sources: brunettatintoandpasta.com (current MyWebsites360 site, fetched 2026-09-02),
 * Google Business Profile, Instagram @brunetta_restaurant, Yelp, OpenTable, TripAdvisor.
 */

export const business = {
  name: "Brunetta Tinto & Pasta",
  shortName: "Brunetta",
  legalName: "UNCONFIRMED — need registered business entity name for footer / privacy policy",
  tagline: "Discover Authentic Italian Fine Dining",
  category: "Italian fine-dining restaurant",
  cuisine: ["Italian", "Pasta", "Seafood", "Steak", "Wood-fired pizza", "Risotto"],
  yearsInBusiness: 13, // "our journey began 13 years ago" — site copy, 2026. Founded ~2013. UNCONFIRMED exact year.
  serviceArea: "McAllen, TX and the Rio Grande Valley",
  priceRange: "$$$", // entrees ~$20–$52, based on published menu
} as const;

export const contact = {
  phone: "(956) 540-7144",
  phoneE164: "+19565407144",
  email: "UNCONFIRMED — no public email on current site. Need a monitored inbox for the contact form + info@ address.",
  // Party of 7+ must call directly (per current site).
  largePartyNote: "Please call us directly for parties of 7 or more.",
} as const;

export const location = {
  name: "Brunetta Tinto & Pasta",
  street: "3300 W Expressway 83, Suite 160",
  city: "McAllen",
  state: "TX",
  zip: "78501",
  country: "US",
  // Verify precise coordinates from Google Business Profile before embedding a map.
  lat: null as number | null, // UNCONFIRMED
  lng: null as number | null, // UNCONFIRMED
  neighborhood: "Palms Crossing / La Plaza area, next to the McAllen Convention Center",
  landmark: "Right down the street from the McAllen Convention Center; near Kumori Sushi & Teppanyaki.",
  parking: "UNCONFIRMED — shopping-center lot assumed. Confirm free parking / valet.",
  googleMapsPlaceUrl: "UNCONFIRMED — paste the canonical Google Maps share link",
  // Booking path linked from the official contact page, checked 2026-09-07.
  googleReserveUrl: "https://www.google.com/maps/reserve/v/dine/c/5H5kKRje0fU",
} as const;

/**
 * HOURS CONFLICT — must be resolved by the client before launch.
 *  - Current site (/contact-us): Sun–Thu 11:00 AM–10:00 PM, Fri–Sat 11:00 AM–12:00 AM
 *  - Google / Yelp / Instagram bio:                          Fri–Sat 11:00 AM–11:00 PM
 * Using the official-site values below as the draft; SETUP-LIST flags this.
 */
export const hours = {
  source: "current site /contact-us (UNCONFIRMED vs. Google listing — see SETUP-LIST)",
  regular: [
    { day: "Sunday", open: "11:00", close: "22:00" },
    { day: "Monday", open: "11:00", close: "22:00" },
    { day: "Tuesday", open: "11:00", close: "22:00" },
    { day: "Wednesday", open: "11:00", close: "22:00" },
    { day: "Thursday", open: "11:00", close: "22:00" },
    { day: "Friday", open: "11:00", close: "24:00" },
    { day: "Saturday", open: "11:00", close: "24:00" },
  ],
  displayGrouped: [
    { label: "Sunday – Thursday", value: "11:00 AM – 10:00 PM" },
    { label: "Friday – Saturday", value: "11:00 AM – 12:00 AM" },
  ],
  holidayNote: "UNCONFIRMED — get closed dates (Thanksgiving, Christmas, etc.).",
} as const;

export const social = {
  instagram: "https://www.instagram.com/brunetta_restaurant/", // handle @brunetta_restaurant, ~5.1k followers
  facebook: "https://www.facebook.com/BrunettaTintoPasta/",
  snapchat: "https://www.snapchat.com/place/brunettatintopasta/",
  tiktok: "UNCONFIRMED — confirm if an official account exists",
  youtube: null,
} as const;

export const reservations = {
  primary: "google-reserve", // current site sends guests to Reserve with Google
  googleReserveUrl: location.googleReserveUrl,
  fallback: "phone",
  phone: contact.phone,
  largePartyThreshold: 7,
  thirdPartyProfiles: {
    opentable: "https://www.opentable.com/r/brunetta-tinto-and-pasta-mcallen", // listing exists; confirm if actively used
    tripadvisor:
      "https://www.tripadvisor.com/Restaurant_Review-g56255-d26714844-Reviews-Brunetta_Tinto_Pasta-McAllen_Texas.html",
    yelp: "https://www.yelp.com/biz/brunetta-mcallen",
  },
  decisionNeeded:
    "Confirm the ONE reservation path to feature (Reserve with Google vs. OpenTable). Don't show both.",
} as const;

export const ordering = {
  online: false, // current site has no online ordering / delivery
  delivery: "UNCONFIRMED — confirm if DoorDash / Uber Eats listings should be linked",
  giftCards: false, // template (Amrit Palace) has gift cards; Brunetta currently does not — see PRD open questions
  catering: "UNCONFIRMED — template has a catering section; confirm if Brunetta offers private events / catering",
} as const;

/** Copy for the light Brunetta concept; shared business facts stay above. */
export const design2Content = {
  heroDescription: "Homemade pasta, carefully prepared seafood, and a glass of tinto. Settle in for Italian dining in McAllen.",
  aboutTitle: "Italian at heart. McAllen at home.",
  aboutDescription: "For over a decade, Brunetta has brought classic Italian recipes to the McAllen table. Join us for a relaxed lunch, a dinner for two, or a celebration with the people you love.",
  galleryTitle: "From our kitchen",
  menuTitle: "Find your next favorite.",
  menuDescription: "From antipasti to the last spoonful of dolce.",
  blogTitle: "At the table",
  blogDescription: "Italian food, wine pairings, and stories from Brunetta.",
  visitTitle: "Your table is waiting.",
} as const;

export const reviews = {
  // Aggregate figures seen while researching — DO NOT publish these numbers without a fresh check.
  // Restaurant Guru: ~4.4 / 5 (~332). Yelp: ~20. Restaurantji: ~156. These drift; verify at build time.
  aggregateUnverified: { google: null, note: "pull live rating/count from GBP at build time" },
  postAReviewLinks: {
    google:
      "https://www.google.com/search?q=brunetta+tinto+%26+pasta+reviews",
    facebook: "https://www.facebook.com/BrunettaTintoPasta/reviews",
  },
  // Testimonials to display on-site: NONE approved yet.
  // Do NOT reuse the template's placeholder quotes. Pull 3–5 real Google reviews and get
  // permission to show reviewer first names (SETUP-LIST item).
  approvedTestimonials: [] as { quote: string; name: string; source: string }[],
} as const;

export const nav = {
  /**
   * Left-rail links — same Amrit header chrome; Brunetta destinations.
   * This is DESIGN 1's multi-page routing specifically (paths live under
   * /design-1 now that the project hosts multiple concepts — see the picker
   * at src/pages/index.astro). Design 2 is a single-page site with its own
   * in-page anchor nav and doesn't use this object.
   */
  primary: [
    { label: "Home", href: "/design-1" },
    { label: "About", href: "/design-1/about" },
    { label: "Location", href: "/design-1/location" },
    { label: "Gallery", href: "/design-1/gallery" },
    { label: "Blog", href: "/design-1/blog" },
    { label: "Contact", href: "/design-1/contact" },
  ],
  reserve: { label: "Make a Reservation", href: reservations.googleReserveUrl },
  menu: { label: "View Menu", href: "/design-1/menu" },
  /** @deprecated use reserve — kept so older pages compile */
  primaryCta: { label: "Make a Reservation", href: reservations.googleReserveUrl },
  utility: [
    { label: "Post a Review", href: "/design-1/reviews" },
  ],
} as const;

/**
 * Homepage copy for the Amrit Palace section shells.
 * Rebrand rule: swap strings here only — never change section order, heights, or CSS.
 */
export const homepage = {
  hero: {
    // Same 2-line + side-caption composition as Amrit's "flavors / that stay"
    line1: "tinto",
    line2: "& pasta",
    captionLeft: "serving mcallen, texas",
    captionRight: "authentic italian dining",
    blurb:
      "Homemade pasta. A glass of tinto. Italian dining worth making time for, right here in McAllen.",
  },
  spirit: {
    title: "The Heart of Italian Dining",
    subtitle:
      "Fine dining that feels like home. Come together over homemade pasta, steak, seafood, and the simple pleasure of a good meal.",
    cta: { label: "About Us", href: "/design-1/about" },
    mediaLabel: "Pizza with prosciutto, figs and arugula at Brunetta",
  },
  signature: {
    panelTitle: "signature plates",
    sideTitle: "Handmade Pasta. Italian Roots.",
    sideBody:
      "Explore homemade pasta, creamy risotti, and carefully prepared steaks. A taste of our kitchen, with the full menu just a moment away.",
    cta: { label: "Make a Reservation", href: reservations.googleReserveUrl },
    imageLabel: "Brunetta's squid-ink pasta with shrimp and greens",
    dishNames: [
      "Risotto Aragosta",
      "Filetto di Manzo al Vino Rosso",
      "Pappardelle Nero Gamberi",
      "Pappardelle Boscaiola",
      "Ravioli Prosciutto e Funghi",
      "Gnocchi Gorgonzola",
      "Medaglioni al Marsala",
    ],
  },
  privateEvents: {
    // Same headline grid as Amrit catering: big / caption / big / caption
    line1: "gatherings",
    captionLeft: "Exceptional food",
    line2: "the brunetta way",
    captionRight: "Your table",
    body: "Rehearsal dinners, corporate nights, and parties of seven or more — we pace the room so the evening stays personal. Call us and we’ll plan the table around your guests.",
    ctaNote: contact.largePartyNote,
    cards: [
      {
        title: "Private Dining",
        description: "Intimate tables and larger parties staged so service stays smooth and the room still feels special.",
        imageLabel: "Brunetta private dining / long table (client photo)",
      },
      {
        title: "Attentive Service",
        description: "Our team keeps the evening paced and personal — from the first pour to the last dolce.",
        imageLabel: "Brunetta service / dining room (client photo)",
      },
      {
        title: "Thirteen Years In",
        description: "Thirteen years of hosting McAllen celebrations means fewer surprises and a night your guests remember.",
        imageLabel: "Brunetta celebration / guests dining (client photo)",
      },
    ],
  },
  drinks: {
    title: "A Little Tinto. A Little Time.",
    subtitle: "Tinto is half our name. Settle in, choose your plate, and ask your server for a wine to go with it.",
    cta: { label: "View Menu", href: "/design-1/menu" },
    items: [
      { name: "By the Glass", detail: "Ask your server about today's available pours." },
      { name: "Cellar Selections", detail: "Explore the current bottle selection with our team." },
      { name: "At Your Table", detail: "Tell us what you're ordering. We'll help you find a pairing." },
    ],
    imageLabels: ["Brunetta's cheese and charcuterie board", "Tiramisù with cocoa and fresh berries at Brunetta"],
  },
  gift: {
    // Same centered headline + orbit + center visual shell as Amrit gift cards.
    // Brunetta does not sell gift cards yet — this slot is a “treat someone” reservation CTA.
    title: "Gift a Night of Pasta",
    body: "Birthdays, anniversaries, or a simple thank-you — the best gift is an evening at our table in McAllen. Call us and we’ll help you reserve the night.",
    cta: { label: "Reserve a Table", href: reservations.googleReserveUrl },
    orbitLeft: "Share the table.",
    orbitRight: "Give an evening they’ll remember.",
    imageLabel: "Brunetta table setting / celebration placeholder (client photo)",
  },
  rooted: {
    title: "Rooted in Experience",
    body: "For the past 13 years, Brunetta Tinto & Pasta has been a place for celebration, connection, and Italian food made with heart — right down the street from the McAllen Convention Center. We believe fine dining should feel elegant and comfortable, and that the best meals stay with you long after the last bite.",
    imageLabel: "Slow-cooked short ribs served at Brunetta",
  },
  testimonials: {
    title: "What Our Guests Say",
    reviewCta: {
      prompt: "Have you already visited Brunetta and left with great memories?",
      action: "Be sure to leave us a review!",
      href: reviews.postAReviewLinks.google,
    },
    quotes: reviews.approvedTestimonials,
  },
  footerWordmark: "brunetta",
} as const;

/**
 * ABOUT / STORY — verbatim from current site (brunettatintoandpasta.com/about-us).
 * Client sign-off needed before reuse. No founder/chef name is published anywhere — request it.
 */
export const about = {
  headline: "Discover Authentic Italian Fine Dining",
  short:
    "For over a decade, Brunetta Tinto & Pasta has been a cherished culinary gem in McAllen, built on authentic, high-quality ingredients and classic recipes.",
  storyVerbatim:
    "For the past 13 years, we at Brunetta Tinto & Pasta have been driven by a singular passion: creating and sharing exceptional Italian food. Our story began with a simple belief that the best meals are made with heart, using the freshest, highest-quality ingredients. From the moment you step through our doors, you'll feel the warmth of our welcoming atmosphere, designed to make you feel right at home. We believe that fine dining doesn't have to be stuffy—it should be an experience that is both elegant and comfortable, a place where you can relax and truly savor your meal. Our team is more than just staff; we are a family dedicated to our craft and to our guests. Every dish, from our rich, savory pastas to our perfectly cooked steaks and seafood, is a testament to our commitment to excellence. We have spent over a decade perfecting our recipes and refining our techniques, all to ensure that your dining experience is nothing short of perfect. We are proud of the connections we have built within the McAllen community and are honored to be a part of your celebrations, date nights, and everyday moments. Our kitchen is where our passion comes to life, and our dining room is where we get to share it with you. Thank you for making us a part of your story; we look forward to serving you for many more years to come.",
  values: [
    "Heart-centered cooking",
    "Fresh, high-quality ingredients",
    "Elegant yet comfortable atmosphere",
    "Family-oriented team culture",
    "Commitment to excellence",
  ],
  founderName: "UNCONFIRMED — request owner / executive chef name + a short bio + headshot",
  team: [] as { name: string; role: string; bio: string; photo: string }[], // none published
} as const;

/**
 * MENU — transcribed verbatim from brunettatintoandpasta.com/menu on 2026-09-02.
 * Spellings are the restaurant's own (several Italian words appear misspelled, e.g.
 * "AFFITETI"/"VONCOLE"/"GAMBERY"/"zaferano"/"saron"). DO NOT silently correct them —
 * SETUP-LIST asks the client to supply a proofed menu. Prices in USD.
 * `menuNeedsProofing` gates whether this can go live as-is.
 */
export const menuMeta = {
  needsProofing: true,
  currency: "USD",
  disclaimer: "Menu and pricing subject to change. Confirm current menu with the restaurant.",
  pdfUrl: "UNCONFIRMED — request the current print/PDF menu",
} as const;

export const menu: {
  section: string;
  italianSection?: string;
  items: { name: string; price: string; description: string }[];
}[] = [
  {
    section: "Antipasti",
    items: [
      { name: "Tartare di Tonno", price: "$24", description: "Finely chopped fresh tuna with olive oil, dijon mustard, lime juice, capers, parsley, salt and black pepper over arugula." },
      { name: "Carpaccio di Salmone", price: "$18", description: "Thinly sliced salmon marinated in lime juice, capers, onion, parsley, salt, black pepper and olive oil." },
      { name: "Carpaccio di Manzo", price: "$22", description: "Thinly sliced beef tenderloin marinated in olive oil, lime juice, mushrooms, chopped onion, parsley, capers and shaved parmesan." },
      { name: "Carpaccio Brunetta", price: "$26", description: "Combination of beef and salmon with tuna tartar over arugula and olive oil." },
      { name: "Bruschetta Brunetta", price: "$15", description: "Toasted crostini, goat cheese, basil, garlic, olive oil marinated cherry tomatoes." },
      { name: "Affettati Misto", price: "Piccolo $25 / Grande $38", description: "Charcuterie board with brie, provolone, prosciutto, calabrese salami, salami, parmesan cheese, mozzarella, gorgonzola cheese and grapes, with balsamic reduction glaze, peach habanero and fig preserves." },
      { name: "Calamari alla Romana", price: "$19", description: "Fried calamari with lime juice, served with an Italian tartar sauce." },
      { name: "Provolone Affumicato", price: "$16", description: "Smoked melted provolone cheese." },
      { name: "Funghi alla Siciliana", price: "$12", description: "Sautéed mushrooms in olive oil, garlic, guajillo chili, white wine, parmesan cheese and lime juice." },
      { name: "Asparagus Prosciutto", price: "$14", description: "Asparagus tips with melted parmesan cheese and thin slices of prosciutto." },
    ],
  },
  {
    section: "Insalate",
    items: [
      { name: "Mista", price: "$10", description: "Mixed greens with seasonal vegetables, carrots, tomatoes, mushrooms, celery and cucumber." },
      { name: "San Danielle", price: "$21", description: "Arugula salad with roasted peach slices, tomato, caramelized pecans, feta cheese, sliced prosciutto, honey balsamic dressing." },
      { name: "Brunetta", price: "$18", description: "Mixed greens with hearts of palm, olives, tomatoes, shaved parmesan cheese, grilled chicken breast, salt and black pepper with italian and caesar dressing." },
      { name: "Caprese", price: "$15", description: "Slices of mozzarella cheese, tomato, basil, pesto sauce over spring mix, salt, pepper and apple cider vinegar." },
      { name: "Spinaci e Gamberi Caprino", price: "$21", description: "Spinach salad, arugula, tomato slices, goat cheese, grilled shrimp and italian lime dressing." },
    ],
  },
  {
    section: "Le Zuppe",
    items: [
      { name: "Minestrone di Verdure", price: "$9", description: "Tasty combination of seasonal vegetables, sautéed in olive oil, chicken stock, white beans and pomodoro sauce." },
      { name: "Crema Funghi Tartufo Nero", price: "$14", description: "Mushroom cream with a light taste of black truffle." },
      { name: "Zuppa di Cipolla", price: "$9", description: "Classic onion soup with Oporto wine, melted cheese and croutons." },
      { name: "Zuppa di Lenticchie", price: "$9", description: "Lentil soup with pancetta, fresh tomato, garlic, onion, chicken stock and pomodoro sauce." },
    ],
  },
  {
    section: "La Pasta",
    items: [
      { name: "Spaghetti Vongole Gamberi Zucchini", price: "$28", description: "Combination of spaghetti with fresh clams, shrimp, zucchini, brandy, olive oil and white wine." },
      { name: "Spaghetti Aglio Olio", price: "$20", description: "Spaghetti with finely chopped garlic, sautéed with brandy, white wine, olive oil and parsley." },
      { name: "Spaghetti Pesto", price: "$25", description: "Sautéed pasta made with Italian basil, pine nuts, pecans and olive oil." },
      { name: "Spaghetti Frutti di Mare", price: "$28", description: "Spaghetti with seafood flamed with white wine, brandy and pomodoro sauce." },
      { name: "Rigatoni Matriciana", price: "$25", description: "Macaroni with pancetta, chile de árbol, white wine, pomodoro sauce and parmesan cheese." },
      { name: "Spaghetti alla Toscana", price: "$26", description: "Crispy bacon, mushrooms, spinach, parmesan cheese, wine, chile de árbol, white wine and a hint of cream." },
      { name: "Penne Salmone e Finocchio", price: "$29", description: "Penne pasta, with fresh salmon with a twist of licorice, garlic, onion, olive oil, cherry tomatoes, mozzarella cheese and pomodoro sauce." },
      { name: "Fettuccini Mediterraneo", price: "$28", description: "With broccoli, shrimp, white wine and a hint of cream." },
      { name: "Fusilli Pomodoro Secchi Carciofi", price: "$28", description: "Fusilli pasta, red chili flakes, artichoke, sundried tomato, goat cheese, parmesan cheese, with a garlic olive oil." },
      { name: "Fettuccini 4 Formaggi", price: "$24", description: "Roquefort cheese sauce, smoked, mozzarella and parmesan cheese." },
    ],
  },
  {
    section: "Risotti",
    items: [
      { name: "Risotto Frutti di Mare", price: "$28", description: "Combination of seafood sautéed with white rice, flamed with brandy and white wine, pomodoro sauce and parmesan cheese." },
      { name: "Risotto Nero di Seppie", price: "$28", description: "Calamari and shrimp sautéed with Italian rice, squid ink, butter and parmesan cheese." },
      { name: "Risotto Funghi Tartufo", price: "$26", description: "Italian rice sautéed with seasonal mushrooms, olive oil, white wine, black truffle sauce and parmesan cheese." },
      { name: "Risotto Aragosta", price: "$43", description: "The perfect combination of Italian rice with lobster meat, olives, capers, cherry tomato with a white wine and butter sauce and parmesan cheese." },
      { name: "Risotto Gamberi Zafferano", price: "$28", description: "Italian rice with saffron, shrimp, asparagus, white wine, butter and parmesan cheese." },
    ],
  },
  {
    section: "Piatto Forte di Manzo",
    items: [
      { name: "Filetto di Manzo al Vino Rosso", price: "$41", description: "8 oz filet, red wine reduction, herbs de provence, seared smoked provolone." },
      { name: "Filetto di Manzo al Burro Fine Erbette", price: "$38", description: "Grilled beef tenderloin infused with fine herb butter served with steamed vegetables." },
      { name: "Costolette di Manzo al Oporto", price: "$34", description: "Slow cooked short ribs with sherry wine reduction." },
      { name: "Rib Eye Funghi Porcini", price: "$44", description: "Rib eye covered in porcini mushroom sauce with grilled vegetables." },
      { name: "Rib Eye Prime alla Griglia", price: "$52", description: "16 oz prime rib eye grilled to perfection with rosemary butter potatoes." },
      { name: "Rib Eye al Pepe Verde", price: "$36", description: "Juicy rib eye steak smothered in butter, white wine, aromatic herbs and green pepper." },
      { name: "Petto di Pollo alla Cacciatora", price: "$26", description: "Grilled chicken breast with white wine sauce, olives, capers, green onions and pomodoro sauce." },
      { name: "Medaglioni al Marsala", price: "$38", description: "Beef medallions with a rich sweet red wine reduction." },
      { name: "Petto di Pollo alla Parmigiana", price: "$26", description: "Grilled chicken breast with melted mozzarella, parmesan cheese and pomodoro sauce." },
    ],
  },
  {
    section: "La Pasta Fresca",
    items: [
      { name: "Pappardelle Boscaiola", price: "$26", description: "Our house made pappardelle pasta with mushroom sauce, cherry tomatoes, prosciutto, white wine and a hint of cream." },
      { name: "Pappardelle Aragosta Zafferano", price: "$36", description: "Lobster tail with our house made pappardelle pasta, with saffron, asparagus, cherry tomato and white wine sauce." },
      { name: "Pappardelle Nero Gamberi", price: "$32", description: "Squid ink pappardelle, shrimp, garlic, calabrian chile, white wine, arugula, parmesan, parsley." },
      { name: "Ravioli di Formaggi e Spinaci", price: "$22", description: "Stuffed pasta with ricotta, parmesan and mozzarella cheese with spinach with sauce of your choice: pomodoro or four cheese." },
      { name: "Ravioli di Carne", price: "$24", description: "Stuffed pasta with spices, cold meats, parmesan cheese, with sauce of your choice: pomodoro or four cheese." },
      { name: "Ravioli Prosciutto e Funghi", price: "$26", description: "Mushroom stuffed ravioli, mozzarella, italian style prosciutto, truffle cream, parmesan." },
      { name: "Ravioli di Salmone", price: "$29", description: "Salmon stuffed ravioli, mozzarella, white wine, cream, pomodoro and parmesan." },
      { name: "Tortelloni di Barbabietole", price: "$23", description: "Ricotta and beet stuffed tortelloni, salsa arrabbiata, pesto, shaved parmesan." },
      { name: "Gnocchi Gorgonzola", price: "$24", description: "House made potato gnocchi with choice of pesto or gorgonzola cream sauce." },
      { name: "Lasagna Emiliana", price: "$26", description: "Meat lasagna with pasta, cream, parmesan, and mozzarella cheese." },
      { name: "Fettuccini al Pesto e Tartufo", price: "$28", description: "House made fettuccini pasta, truffle-pesto sauce topped with pine nuts." },
      { name: "Cannelloni", price: "$24", description: "Spinach pasta stuffed with ricotta cheese and spinach, with parmesan, mozzarella cheese, cream and pomodoro sauce." },
      { name: "Tortelloni Carciofi e Ricotta", price: "$23", description: "Artichoke & ricotta stuffed tortelloni, mozzarella, parmesan, white wine butter sage sauce." },
    ],
  },
  {
    section: "Dal Mare",
    items: [
      { name: "Filetto di Salmone Scalogno", price: "$29", description: "Salmon marinated with caramelized shallots, white wine sauce, cream and capers." },
      { name: "Filetto di Salmone ai Funghi Porcini", price: "$31", description: "Salmon with porcini mushroom sauce, white wine and butter." },
      { name: "Gamberoni alla Mostarda Dijon", price: "$26", description: "Shrimp with Dijon mustard, white wine and melted mozzarella cheese." },
      { name: "Gamberoni Finocchio al Limone", price: "$29", description: "Grilled shrimp covered in a fennel sauce, white wine and Italian lime juice." },
      { name: "Tonno alla Piastra e Pistacchio", price: "$29", description: "Seared tuna with pistachio custard over fresh arugula, spinach and rich citric reduction." },
      { name: "Pesce Siciliana", price: "$36", description: "Halibut and shrimp with a butter-garlic wine sauce, lime and guajillo chili." },
      { name: "Spiedino dal Mare", price: "$35", description: "Grilled shrimp, salmon and fish kebab with onions and green peppers covered in toasted garlic, white wine and lime juice." },
    ],
  },
  {
    section: "Le Pizze",
    items: [
      { name: "Margherita", price: "$20", description: "Pomodoro sauce, mozzarella cheese, tomato slices, basil leaves and olive oil." },
      { name: "Prosciutto Rucola", price: "$25", description: "Pomodoro sauce, mozzarella cheese, prosciutto, arugula and olive oil." },
      { name: "Pomodoro Secchi Caprino", price: "$20", description: "Pomodoro sauce, mozzarella cheese, artichokes, green chile, goat cheese, sun dried tomatoes and olive oil." },
      { name: "Salsiccia Friarielli", price: "$20", description: "Pomodoro sauce, mozzarella cheese, Italian sausage, fresh spinach, turnip and olive oil." },
      { name: "Dolce Forte", price: "$23", description: "Pomodoro sauce, mozzarella, gorgonzola, arugula, fresh pear and caramelized onions." },
      { name: "Dall'Orto", price: "$24", description: "Pomodoro sauce, mozzarella cheese, zucchini, eggplant, mushrooms and asparagus." },
      { name: "4 Formaggi", price: "$18", description: "Mozzarella, provolone, Roquefort, parmesan cheese and olive oil." },
      { name: "Affumicato e Prosciutto", price: "$25", description: "Pomodoro sauce, fresh mozzarella, smoked cheese, prosciutto and olive oil." },
      { name: "Burrata", price: "$27", description: "Pomodoro sauce, mozzarella cheese, prosciutto, arugula, olive oil and burrata cheese on top." },
      { name: "Pizza Toscana", price: "$27", description: "Garlic cream sauce, mozzarella, prosciutto, arugula, figs, balsamic reduction." },
    ],
  },
  {
    section: "I Dolci",
    items: [
      { name: "Cannoli Siciliani", price: "$12", description: "Ricotta cheese, cream, red fruit, grated chocolate." },
      { name: "Torta alla Crema Tiramisù", price: "$14", description: "Layered chocolate and vanilla cake drenched in an italian tiramisu cream." },
      { name: "Torta di Cioccolato", price: "$14", description: "Chocolate cake with hazelnuts and covered with a thin layer of cacao cream and vanilla ice cream." },
      { name: "Torta alle Noci", price: "$16", description: "Delicious baked pecan pie with ice cream." },
      { name: "Tiramisù", price: "$12", description: "The classic Italian dessert with ladyfinger biscuits, mascarpone, coffee and cocoa." },
      { name: "Pane di Cioccolato", price: "$12", description: "The traditional chocolate brownie with vanilla ice cream." },
      { name: "Panna Cotta", price: "$10", description: "Baked cream with liquor, mixed berry marmalade and seasonal fruit." },
      { name: "Strudel di Mele", price: "$12", description: "Apple pastry with cinnamon, raisins and sugar with vanilla ice cream." },
      { name: "Profiteroles", price: "$12", description: "Puff pastries filled with choice of sweet cream or ice cream covered in chocolate, almonds and pecans." },
      { name: "Crème Brûlée", price: "$10", description: "Lightly baked custard with a touch of Baileys topped with caramelized sugar." },
    ],
  },
];

/**
 * WINE / BEVERAGE — "Tinto" (red wine) is in the restaurant's name and a blog post
 * references an in-house wine cellar and pairings, but NO wine list is published.
 * Request the full wine / cocktail / beverage list. The Amrit Palace template has a
 * dedicated "Drinks" section that should be filled with Brunetta's real wine program.
 */
export const beverages = {
  hasPublishedList: false,
  note: "Request wine list (by the glass / bottle), cocktail list, and non-alcoholic options.",
} as const;

/**
 * BLOG — 4 posts on the current site (MyWebsites360 /post/ URLs). Migrate all 4,
 * preserve slugs where possible for redirects. Full bodies captured during intake.
 */
export const blog = [
  {
    title: "4 Italian Menu Terms You Need to Know for Your Next Visit to Brunetta",
    slug: "4-italian-menu-terms-you-need-to-know-for-your-next-visit-to-brunetta",
    date: "2026-03-04",
    excerpt:
      "Unlock the secrets of Italian dining at Brunetta Tinto & Pasta by learning four essential menu terms.",
    topics: ["Antipasti", "Al Dente", "Risotto", "Dolce"],
    body: [
      "Understanding Italian culinary language enhances the dining experience — here are four essential terms you'll see on our menu.",
      "Antipasti — translates to \"before the meal.\" These are sophisticated opening dishes designed to awaken the palate before the main course.",
      "Al Dente — means \"to the tooth.\" It describes pasta cooked to remain firm when bitten, preserving its texture so sauces and ingredients stand out.",
      "Risotto — a northern Italian technique using high-starch Arborio rice that is slow-cooked with broth to achieve a luxurious, velvety consistency.",
      "Dolce — means \"sweet.\" It refers to the final dessert course, providing a decadent conclusion to your culinary journey.",
      "We invite you to visit Brunetta Tinto & Pasta in McAllen to experience these traditions firsthand.",
    ],
  },
  {
    title: "How to Take Amazing Food Photos for Instagram",
    slug: "how-to-take-amazing-food-photos-for-instagram",
    date: "UNCONFIRMED",
    excerpt:
      "At Brunetta Tinto & Pasta, we believe that every meal is a work of art worth sharing.",
    body: null, // full body not captured during intake — pending re-fetch or client copy
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
    body: null, // full body not captured during intake — pending re-fetch or client copy
  },
] as const;

/**
 * PHOTOGRAPHY INVENTORY — what the current site exposes. All low/medium-res, hosted on
 * static.mywebsites360.com. NOT enough for a premium build. SETUP-LIST requests
 * high-resolution originals.
 */
export const photos = {
  haveFromCurrentSite: [
    { file: "M316551---Logo_web.png", type: "logo", notes: "web-res PNG wordmark; need vector (SVG/EPS/AI)" },
    { file: "DSC09509.jpg", type: "interior", notes: "dining room" },
    { file: "Gallery (4).jpg", type: "food", notes: "plated dish" },
    { file: "Gallery (5).jpg", type: "food", notes: "plated dish" },
    { file: "Copy of 14.JPG", type: "food", notes: "plated dish" },
    { file: "DSC09499.jpg", type: "food", notes: "plated dish" },
    { file: "DSC08704.jpg", type: "food", notes: "plated dish" },
    { file: "DSC09745.jpg", type: "food", notes: "plated dish" },
  ],
  need: [
    "Vector logo (SVG/EPS/AI) + horizontal + stacked + icon-only lockups",
    "Hero-quality interior photography (wide dining room, bar, private area) — landscape, ≥ 2400px",
    "10–15 signature-dish photos on dark backgrounds (matches template art direction)",
    "Wine cellar / wine pour shots (the 'Tinto' half of the brand)",
    "Exterior / storefront shot for the Location page and Google",
    "Owner / chef portrait for the About page",
    "Ambiance / guests-dining lifestyle shots",
  ],
  rights:
    "Confirm the restaurant owns/licenses all photos (not the previous web vendor). Get written permission or reshoot.",
} as const;

/**
 * BRAND / DESIGN — target direction comes from the approved clone template
 * ("Amrit Palace"). Colors and font names below are VERIFIED from the live
 * template's shipped CSS (amritpalace.webflow.shared.css, fetched 2026-09-04),
 * not guessed from the screenshot. This is the STARTING POINT to re-skin for
 * Brunetta; final palette locked during the build.
 */
export const brand = {
  template: {
    name: "Amrit Palace",
    sourceUrl: "https://amritpalace.com/",
    platform: "Webflow (cdn.prod.website-files.com)",
    stack: {
      smoothScroll: "Lenis 0.2.28",
      animation: "GSAP 3.11.3 + ScrollTrigger",
      textSplit: "SplitType (drives the word/char stagger reveal on headlines)",
      carousel: "Splide 3.2.2 (.slider1, perPage 3, gap 8px, speed 800ms)",
      reserveButton: "[data-open-reserve] opens an in-page reservation modal, not a hard navigation",
      other: "Webflow native IX2 (data-w-id/data-hover/data-delay) for nav + card hovers; a CSS marquee (.marquee_track, translateX(-50%), infinite)",
    },
    files: ["assets/reference/reference.txt", "assets/reference/screencapture-amritpalace-2026-09-02-15_43_58.png", "assets/reference/videoreference.mp4", "assets/reference/DESIGN.md", "assets/reference/SKILL.md"],
    note: "We reimplement the *effect* of this stack with CSS + IntersectionObserver (clone-workflow rule: no new dependencies) rather than shipping Lenis/GSAP/Splide.",
  },
  fonts: {
    // Verified via `font-family:` in the live stylesheet.
    displaySerif: "TT Ramillas Variable, Georgia, serif", // paid (TypeType) — NOT licensed for Brunetta. Build uses the free substitute below.
    displaySerifSubstitute: "Fraunces, Georgia, serif", // Google Fonts, variable, closest free equivalent in weight contrast + warmth
    bodySans: "Satoshi, Arial, sans-serif", // free via Fontshare CDN — exact match, no substitution needed
    accentScript: "Bad Script, cursive", // verified — free on Google Fonts, exact match. Used sparingly for small accent labels.
    baseSizePx: 19.12,
    baseWeight: 500,
    scalePx: { xs: 15.3, sm: 17.21, md: 18.07, lg: 19.12, xl: 20.08, "2xl": 66.92, "3xl": 86.04, "4xl": 91.78 },
  },
  colors: {
    // Verified hex values pulled directly from the live template's CSS (not eyedropper-approximated).
    textPrimary: "#2c2c2c",
    borderMuted: "#d8cbb8",
    textTertiary: "#dfdad5",
    surfaceBlack: "#010101",
    surfaceStrong: "#292622", // warm near-black section background
    surfaceRaised: "#bfb4a3", // warm taupe
    surfaceRaisedAlt: "#d0c2ad",
    surfaceRaisedAlt2: "#c7baa5",
    accentAmber: "#d49653", // verified — the real menu-panel / wordmark amber (corrects an earlier eyedropper guess of #c9a15e)
    accentAmberDeep: "#ba8449", // verified — deeper bronze variant, used for hover/active states
    cream: "#efe7d8", // light section background (approx — recheck against screenshot per-section)
  },
  spacingPx: { 1: 4, 2: 8, 3: 12, 4: 20, 5: 28, 6: 32, 7: 52 },
  radiusPx: { xs: 3 },
  motion: {
    durationMs: { instant: 350, fast: 400, normal: 450 },
    style:
      "Scroll-driven section reveals + subtle hero parallax + staggered word-clip reveal on display headings (verified via assets/reference/videoreference.mp4 contact sheet + the live SplitType/GSAP source).",
  },
  accessibilityTarget: "WCAG 2.2 AA",
  currentSitePaletteForReference:
    "Current MyWebsites360 site leans dark green + cream + gold; the new build follows the Amrit Palace dark/amber direction instead. Confirm the client is OK moving away from green.",
} as const;

export const legal = {
  privacyPolicy: "TO BE WRITTEN at /privacy — must disclose analytics, any chat widget, Google Reserve, fonts CDN, map embeds.",
  termsUrl: null,
  copyrightHolder: business.name,
  aiDisclosure: "Site built with AI assistance; any AI/stock imagery to be labeled illustrative.",
  accessibilityStatement: "Recommended at /accessibility.",
} as const;

export const seo = {
  currentPlatform: "MyWebsites360 (static.mywebsites360.com CDN)",
  domain: "brunettatintoandpasta.com",
  primaryKeywords: [
    "Italian restaurant McAllen",
    "fine dining McAllen TX",
    "pasta McAllen",
    "Italian restaurant near McAllen Convention Center",
    "date night restaurant McAllen",
    "handmade pasta Rio Grande Valley",
  ],
  tasksBeforeMigration: [
    "Snapshot current URLs + rankings BEFORE rebuild (pipeline step 5 note)",
    "Map old MyWebsites360 URLs (/about-us, /post/*, /post-a-review) to new paths with 301s",
    "Preserve/claim Google Business Profile; keep NAP identical to site",
    "Add Restaurant + Menu + LocalBusiness JSON-LD",
  ],
} as const;

export const siteData = {
  business,
  contact,
  location,
  hours,
  social,
  reservations,
  ordering,
  reviews,
  nav,
  homepage,
  about,
  menuMeta,
  menu,
  beverages,
  blog,
  photos,
  brand,
  legal,
  seo,
};

export default siteData;
