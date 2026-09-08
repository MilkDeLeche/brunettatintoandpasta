# PRD — Brunetta Tinto & Pasta website

**Pipeline:** `client-site-pipeline` · **Step 1 of 5 — `client-web-delivery` (intake).**
**Status:** Intake drafted. Awaiting the clone template + code drop, then proceed to Step 2 (`clone-intake`).
**Prepared:** 2026-09-02 · **Client site:** https://brunettatintoandpasta.com/ · **Clone template:** Amrit Palace (`reference/`)

> This PRD is the brief for a **rebrand clone**: we take an approved template ("Amrit Palace"),
> clone it at near-100% visual fidelity, then re-skin and re-content it as **Brunetta Tinto & Pasta**.
> Every client fact lives in [`src/data/site.ts`](src/data/site.ts) — the single source of truth.

---

## 1. Goal & success metric

**The one job of this site:** get a guest to **book a table** (or call), with "see the menu" as the strong secondary path.

Brunetta is an established (~13-year) Italian fine-dining restaurant in McAllen, TX. It is not trying to sell online or capture leads — it is a **showcase + reservation funnel**. Success = the new site looks materially more premium than the current MyWebsites360 template, loads fast, ranks for "Italian restaurant McAllen," and routes guests cleanly into Reserve-with-Google / the phone.

**Primary CTA everywhere:** *Make a Reservation*.
**Secondary CTA:** *View Menu*.
**Tertiary:** *Call* · *Get Directions*.

---

## 2. Business snapshot (verify all — see setup-list)

| Field | Value | Confidence |
|---|---|---|
| Name | Brunetta Tinto & Pasta | ✅ |
| Concept | Authentic Italian fine dining — pasta, seafood, steak, risotto, wood-fired pizza | ✅ |
| Address | 3300 W Expressway 83, Suite 160, McAllen, TX 78501 | ✅ (confirm suite) |
| Phone | (956) 540-7144 | ✅ |
| Email | *none published* | ❌ need one |
| Hours | Sun–Thu 11:00 AM–10:00 PM · Fri–Sat 11:00 AM–**12:00 AM** | ⚠️ **conflict** — Google/Yelp/IG say Fri–Sat close **11:00 PM** |
| Reservations | "Reserve with Google" widget; call for parties of 7+ | ✅ |
| Instagram | [@brunetta_restaurant](https://www.instagram.com/brunetta_restaurant/) (~5.1k) | ✅ |
| Facebook | [/BrunettaTintoPasta](https://www.facebook.com/BrunettaTintoPasta/) | ✅ |
| Founder / chef name | *not published anywhere* | ❌ request |
| Neighborhood | By the McAllen Convention Center; near Kumori; Palms Crossing / La Plaza area | ✅ |
| Current platform | MyWebsites360 (`static.mywebsites360.com`) | ✅ |
| Domain | `brunettatintoandpasta.com` (already owned, on current builder) | ✅ (need registrar/DNS access) |

**Aggregate reviews (do NOT publish without a live re-check):** ~4.4★ on Restaurant Guru (~330), plus Yelp / TripAdvisor / OpenTable listings.

---

## 3. Source material we have

### 3a. Current website — content pulled 2026-09-02
Pages: Home · About Us · Menu · Location · Gallery · Post a Review · Blog · Contact Us · Make a Reservation.

- **Full menu** — ~90 items across 11 sections, with prices, transcribed verbatim into `src/data/site.ts`.
  ⚠️ The live menu has **many misspelled Italian names** ("AFFITETI", "VONCOLE", "GAMBERY", "zaferano", "saron", "BRUSCCHETTA"). We captured them as-is and flagged `menuNeedsProofing`. Client must supply a proofed menu / PDF before launch — we will not silently "correct" their dish names.
- **About / story** — one ~230-word paragraph, captured verbatim. No founder name, no team bios.
- **Blog** — 4 posts (Italian menu terms; food photography; wine + pasta pairing; family-friendly dining). Full bodies captured. Migrate all 4, keep slugs for redirects.
- **Gallery** — only 6 low-res food photos + 1 interior. Not enough for a premium build.
- **Reservations** — Reserve with Google (path `dine/c/5H5kKRje0fU`).
- **Reviews** — "Post a Review" page links to Google + Facebook only.

### 3b. Clone template — `reference/`
| File | What it is |
|---|---|
| `reference.txt` | 5,656-line JSX/Tailwind DOM dump of amritpalace.com (DivMagic export) — the clone target markup |
| `screencapture-amritpalace-…png` | Full-page screenshot (1912×11766) — visual reference |
| `videoreference.mp4` | 33s scroll-through screen recording — **motion reference** |
| `DESIGN.md` / `SKILL.md` | TypeUI token files (fonts, colour, spacing, motion) for the template |

**Amrit Palace** is a dark, editorial, warm-amber **multi-location Indian restaurant + catering** template (locations: Ocala & Gainesville, FL). Sections, top → bottom:

1. Sticky header — links + a persistent Trustpilot-style "Excellent 4.7★" chip
2. Hero — full-bleed dark interior photo, giant serif headline ("FLAVORS THAT STAY"), staggered reveal
3. "The spirit of Indian dining" — image + short intro + button
4. **Signature Plates** — amber menu panel with dotted price leaders, next to "Signature dishes. Classic roots." + hero dish photo
5. **Catering** — "Catering the Amrit Way" + 3 cards (Buffet Displays / Professional Service Team / Years of Experience)
6. **Drinks** — "Drinks that complete the experience" list + two moody cocktail photos
7. **Gift cards** — "Gift a taste of tradition" — light-grey section, fanned gift-card photos
8. "Rooted in experience" — interior photo + copy
9. **Testimonials** — "What our guests say" — 4-column quotes + rating chip
10. Footer — Locations / Hours / Contact / Newsletter, then Discover / Legals / Actions / Socials, then a full-width `AMRIT PALACE` wordmark

---

## 4. Template → Brunetta mapping

| Amrit Palace section | Brunetta treatment |
|---|---|
| Hero headline "FLAVORS THAT STAY" | Replace with Brunetta line — e.g. *"Discover Authentic Italian Fine Dining"* or a tighter original. Hero photo → **new** Brunetta dining-room shot. |
| "Spirit of Indian dining" intro | → "The heart of Italian dining" — pull from the About story. |
| Signature Plates (amber menu panel) | → Brunetta signature dishes: pick 6–8 from *La Pasta Fresca*, *Risotti*, *Piatto Forte*. Real prices from the data file. |
| Catering (3 cards) | ⚠️ **Decision needed.** Brunetta doesn't advertise catering. Options: (a) drop the section, (b) repurpose as "Private Events / Group Dining," (c) keep only if client confirms catering. Default: **repurpose as Private Events**, or cut. |
| Drinks list | → **Wine program** ("Tinto" = red wine — it's half the name). Needs the real wine/cocktail list. If unavailable at launch: short curated "By the glass / Cellar selections" teaser + "ask your server." |
| Gift cards | ⚠️ **Decision needed.** Not offered today. Default: **remove** unless client wants to start selling them (would add a fulfillment step — out of scope for v1). |
| "Rooted in experience" | → Keep. Brunetta's "13 years in McAllen" story + interior photo. |
| Testimonials (4 quotes) | → 3–5 **real** Google reviews, with permission to show first names. No placeholder quotes ship. |
| Multi-location footer (Ocala/Gainesville) | → **Single location.** Collapse to one address block + hours + map. |
| Newsletter signup | ⚠️ Only keep if there's a real list (Mailchimp/etc.) and a destination. Default: **remove** for v1. |
| Trustpilot "Excellent 4.7★" chip | → Swap for **Google** rating, pulled/verified live at build. Don't fabricate a number. |
| Order Now / gift-card nav items | → Remove. Nav = Home / About / Menu / Location / Gallery / Blog / Contact + **Reserve** button. |
| `AMRIT PALACE` footer wordmark | → `BRUNETTA` (or full `BRUNETTA TINTO & PASTA`). |

---

## 5. Information architecture

```
/                     Home (all key sections, reservation funnel)
/about                Story, 13 years, values, founder/chef (pending), interior
/menu                 Full menu — 11 sections, ~90 items, prices, proofed copy
/location             Address, map, hours, parking, directions, "near the Convention Center"
/gallery              Food + interior + ambiance photo grid (needs new photography)
/blog                 Index of 4 posts
/blog/[slug]          Post detail (migrate 4, preserve slugs)
/reviews              "Post a Review" → Google + Facebook
/contact              Phone, email, hours, map, reservation CTA, contact form
/privacy              NEW — privacy policy (launch-gate requirement)
/404                  NEW — custom not-found
```

Redirects (Step 5): old MyWebsites360 paths → new. Notably `/about-us → /about`, `/contact-us → /contact`, `/post/{slug} → /blog/{slug}`, `/post-a-review → /reviews`, `/make-a-reservation →` Reserve URL or `/contact`.

---

## 6. Page requirements

### Home
Hero (new photo + headline + Reserve/Menu CTAs) → intro/story teaser → signature dishes (amber panel, real items) → wine/beverage teaser → "13 years in McAllen" band with interior photo → real Google testimonials + live rating → location + hours + map → footer. Sticky header with Reserve button; sticky/again-visible rating chip optional.

### About
Full story (verbatim, client-signed-off) · "13 years" · values list · **founder/chef bio + portrait (pending)** · 2–3 interior/ambiance photos · CTA to reserve.

### Menu
All 11 sections in template's dotted-leader style: Antipasti · Insalate · Le Zuppe · La Pasta · Risotti · Piatto Forte di Manzo · La Pasta Fresca · Dal Mare · Le Pizze · I Dolci (+ beverages when supplied). Section jump-nav on mobile. "Prices subject to change" line. Link to downloadable PDF menu once supplied. **Blocked on proofed copy.**

### Location
Map embed (confirm coordinates), full address, grouped hours (resolve the Fri–Sat conflict), parking note, "right down the street from the McAllen Convention Center," Get Directions button, Reserve CTA, phone.

### Gallery
Responsive grid, lazy-loaded, alt text on every image, lightbox. **Blocked on new photography** — current 6 images are not enough / too low-res.

### Blog
Index + detail. Migrate all 4 posts with bodies already captured. Add real publish dates (have 2 of 4). Author = "Brunetta Tinto & Pasta" unless client names one. Article JSON-LD.

### Contact / Reviews
Contact: form (Name, Email, Phone, Party size, Date, Message) → **destination inbox required**; phone; hours; map; Reserve CTA; large-party note. Reviews: Google + Facebook buttons.

### Privacy (new)
Discloses: analytics tool, any chat widget, Reserve-with-Google, Google Maps embed, web-font CDN, contact-form processor. Plus data-subject rights. Draft in Step 4.

---

## 7. Content inventory — have vs. need

| Item | Have | Need from client |
|---|---|---|
| Business NAP | ✅ | Confirm suite # + exact hours (Fri–Sat) |
| Menu items + prices | ✅ verbatim | **Proofed menu / official PDF** (spelling, current prices, dietary/GF flags) |
| Wine & cocktail list | ❌ | Full beverage list |
| Story / About copy | ✅ verbatim | Sign-off; founder/chef name + bio |
| Team photos/bios | ❌ | Owner/chef portrait (min.) |
| Photography | ⚠️ 7 low-res | Hi-res: hero interior, 10–15 dish shots, wine/cellar, exterior, ambiance |
| Logo | ⚠️ web PNG | **Vector** logo (SVG/EPS/AI) + lockups |
| Reviews to feature | ❌ | 3–5 real reviews + OK to use first names |
| Blog dates/authors | ⚠️ 2/4 dates | Remaining dates; author name (optional) |
| Email + form inbox | ❌ | Monitored inbox |
| Domain/DNS | ✅ owned | Registrar access or ability to change DNS |
| Analytics account | ❔ | GA4 (or preference) + region cookie/consent needs |
| Fonts | ❔ | Confirm Satoshi + chosen display serif licensing, or approve free equivalents |

---

## 8. Design direction

Target = the **Amrit Palace** aesthetic, re-skinned. Dark, warm, editorial, restaurant-premium. Starting tokens (from `reference/DESIGN.md` + screenshot; finalize in Step 3):

- **Type:** editorial high-contrast **serif** for display (all-caps, light weight, huge scale — up to ~92px); **Satoshi** sans for body/UI (base ~19px / 500). Display family TBD — license a real one or a free equivalent (e.g. Fraunces, PP Editorial-alike).
- **Colour:** warm near-black `#242022` / true black `#000`, cream `~#efe7d8`, warm taupe `#bfb4a3`, **amber/ochre accent `~#c9a15e`**, body text `#2c2c2c`, muted border `#d8cbb8`.
  ⚠️ Current site uses **green + gold**. Confirm the client is OK moving to the dark/amber direction.
- **Spacing:** 4 / 8 / 12 / 20 / 28 / 32 / 52. **Radius:** ~3px (nearly square). **Motion:** 350–450ms; scroll-reveal sections, subtle hero parallax, staggered clip-reveal on headlines (capture exact curves from `videoreference.mp4` in Step 2).
- **Imagery:** food on dark backgrounds, warm tungsten lighting, shallow depth of field — matches template. New Brunetta photography should be art-directed to match.
- **Accessibility:** WCAG 2.2 AA — contrast, visible focus, keyboard-first, `prefers-reduced-motion` honored.

---

## 9. Integrations & data flow

| Concern | System | Notes |
|---|---|---|
| Reservations | **Reserve with Google** | External; opens from every Reserve button. No booking data touches our site. Confirm canonical URL. Decide: Google vs. OpenTable — feature one. |
| Large parties (7+) | Phone | `tel:+19565407144` |
| Contact form | Form service → inbox (e.g. Formspree / Netlify Forms / provider) | **Needs a destination inbox.** No PII stored by us beyond transit. |
| Maps | Google Maps embed | Static or iframe; lazy-load; disclose in privacy. |
| Reviews | Google + Facebook | Outbound links only. |
| Analytics | GA4 (assumed) | Confirm tool + consent requirements. |
| Fonts | Self-host if licensing allows, else CDN | Disclose CDN in privacy. |
| Payments / e-commerce | **None** | No checkout, no gift-card sales, no online ordering in v1. |

**Secrets rule:** any API key (form service, analytics) goes into the host's env vars / the client's own dashboard — **never pasted in chat**.

---

## 10. Technical requirements

- **Stack:** Astro (per `clone-workflow`), static output, Tailwind (template is Tailwind-based). Zero client JS where possible; islands only for the gallery lightbox / mobile nav / scroll-reveal.
- **Hosting:** Vercel or Netlify, auto-deploy from the deploy branch. Green production build locally first.
- **Performance:** Lighthouse ≥ 95 mobile; responsive images (AVIF/WebP), lazy-loading, preloaded display font, no layout shift on hero.
- **SEO/GEO (Step 5 detail, but built in from the start):**
  - SSR/static HTML — non-empty view-source (the current builder site and the template dump are JS-heavy; the rebuild must ship real HTML).
  - Unique `<title>` + meta description per page; canonical tags; `html lang="en"`.
  - `Restaurant` + `LocalBusiness` + `Menu` + `BreadcrumbList` + `Article` (blog) JSON-LD.
  - `robots.txt` that **allows** AI crawlers; `sitemap.xml`; OG image per page; `llms.txt`.
  - Alt text on every image; no exposed source maps or secrets.
- **Legal (Step 4 gate):** `/privacy` live; real testimonials only; custom 404; cookie/consent if analytics + region requires.
- **Analytics:** GA4 + Google Search Console verified at launch.

---

## 11. Content-integrity rules (non-negotiable)

1. **No invented facts.** Prices, hours, reviews, awards, chef credentials, "voted best," years — only what the client confirms. Placeholder + setup-list otherwise.
2. **Menu names ship only after client proofing.** Current spellings are preserved verbatim until then.
3. **Testimonials must be real** and name-approved. Template placeholder quotes are deleted.
4. **Ratings pulled live**, never typed from memory.
5. **AI / stock imagery labeled illustrative**; prefer real photography.
6. **One data file** (`src/data/site.ts`); **one setup-list** (`SETUP-LIST.md`).

---

## 12. Open questions / decisions needed

1. **Hours:** Fri–Sat close at 11:00 PM or 12:00 AM? (Site vs. Google disagree.)
2. **Catering / private events:** offered? Keep, repurpose, or cut that section?
3. **Gift cards:** start selling, or remove the section? (Selling = out of scope for v1.)
4. **Newsletter:** real list + destination, or remove?
5. **Reservations:** feature Reserve-with-Google *or* OpenTable — which?
6. **Design shift:** OK to move from the current green/gold to the template's dark/amber palette?
7. **Founder/chef:** name + bio + portrait for the About page — yes or keep it brand-only?
8. **Domain/DNS:** who controls `brunettatintoandpasta.com` and can we get access to repoint it?
9. **Delivery:** any DoorDash/Uber Eats presence to link?
10. **Blog:** keep publishing (ongoing) or freeze the 4 migrated posts?

---

## 13. Out of scope (v1)

Online ordering / delivery checkout · gift-card commerce · loyalty program · events ticketing · multi-language · customer accounts / logins · CMS admin UI (content stays in the data file for v1) · native reservation engine (using Reserve with Google).

---

## 14. Definition of done (v1)

- [ ] Template cloned at ≥95% visual fidelity, then fully re-skinned to Brunetta (no "Amrit"/Indian/Ocala/Gainesville residue).
- [ ] All copy from `src/data/site.ts`; no hard-coded facts in components.
- [ ] Menu live with **client-proofed** names + prices.
- [ ] Real photography in hero, gallery, about, signature dishes.
- [ ] Real Google testimonials + live rating.
- [ ] Single-location footer; nav trimmed; catering/gift-card/newsletter decisions applied.
- [ ] `launch-audit` (Step 4) passes: view-source, 404, titles, OG, JSON-LD, canonical, robots-allows-AI, sitemap, lang, alt text, no secrets, `/privacy` live, testimonials real.
- [ ] Green production build → deployed → **live URL verified** (not just the build).
- [ ] Domain + base URL set so canonical/OG/sitemap point at production.
- [ ] `seo` (Step 5): GBP claimed/consistent, 301s from old URLs, no stray `noindex`, Search Console verified.

---

## 15. Pipeline status & next step

| Step | Skill | State |
|---|---|---|
| **1** | `client-web-delivery` | ✅ Done — PRD + `src/data/brunetta.ts` + `SETUP-LIST.md` drafted. **Send setup-list to client.** |
| **2** | `clone-intake` | ✅ Done — live URL (amritpalace.com) fetched and verified: Webflow site, real stack confirmed (Lenis + GSAP/ScrollTrigger + SplitType + Splide), real hex colors + font names pulled straight from the shipped CSS (corrected earlier eyedropper guesses — see `brand.colors`/`brand.fonts` in the data file). Motion video contact sheet built. One gap: no per-section DOM dumps were captured (only the one full-page `reference.txt`) — mitigated by having the live HTML/CSS as the authoritative source instead. |
| **3** | `clone-workflow` | 🟡 **In progress.** Astro 7 + Tailwind v4 project scaffolded; homepage + About, Menu, Location, Gallery, Blog (index + 4 posts), Contact, Reviews, Privacy, 404 built and rebranded from `src/data/brunetta.ts` only — zero template residue (verified: no "Amrit/Ocala/Gainesville/Indian" strings anywhere in the build). Reveal-on-scroll + word-mask headline motion implemented in CSS + IntersectionObserver (no new JS deps, per the skill's rule) — not yet the full marquee/parallax vocabulary from the video. Photography is dimension-exact placeholder art, not real or borrowed images. **Not yet done:** visual QA in an actual browser (no headless-browser tool was available this session), mobile-viewport pass, marquee/parallax polish. |
| 4 | `launch-audit` | ⛔ After build is content-complete, on `npm run build` output, before go-live. |
| 5 | `seo` | ⛔ After live. **Snapshot current `brunettatintoandpasta.com` URLs + rankings BEFORE finishing Step 3.** |

**Immediate actions:**
1. Send `SETUP-LIST.md` to the client; get answers to §12 — real photos + proofed menu are the biggest visual blockers left.
2. Open `npm run dev` locally (or ask for a browser-driven pass) to eyeball the build against the screenshot/video and fix anything off.
3. Snapshot the current site's indexed URLs + rankings (for the Step 5 migration) before this replaces it.
4. Decide the §12 open questions (hours conflict, catering/gift-cards/newsletter, Reserve-with-Google vs OpenTable).
