# Brunetta Tinto & Pasta — What We Need From You to Launch

Short version: we're rebuilding brunettatintoandpasta.com on a new, more premium design.
Most of the work is on us. Below is the short list of things only **you** can give us.
Send these back and we go live.

## First — how booking and contact flow (confirm this is right)

- The new site **showcases the restaurant and drives reservations**. It does not take orders or payments.
- **Reservations** happen in **Reserve with Google** (the same "Book a table" you have now), which opens
  when someone taps **"Make a Reservation."** Parties of 7+ are told to call.
- We are **not** adding online ordering, delivery checkout, or gift-card sales. Nothing changes about
  how you take bookings or get paid.
- ➡️ **Confirm:** keep **Reserve with Google**, or switch to **OpenTable**? (Pick one — we won't show both.)

---

## Part A — Needed to go live (blockers)

1. **Domain access** — you own `brunettatintoandpasta.com`. We need either login to the domain
   registrar or your web person's help to point it at the new site (a DNS change). Who controls it today?
2. **Public phone + email** — confirm **(956) 540-7144** is correct, and give us a **monitored email
   address** to publish and to receive contact-form messages (e.g. `info@brunettatintoandpasta.com`).
   These must match your Google listing exactly.
3. **Google Business Profile** — confirm you can log in / it's verified. Name, address, phone and hours
   there must match the new site.
4. **Hours — resolve the conflict.** Your current site says **Fri & Sat 11:00 AM–12:00 AM (midnight)**,
   but Google and Yelp say **11:00 PM**. Which is right? Also: any regular closed days or holiday hours?
5. **Suite number** — confirm the address: **3300 W Expressway 83, Suite 160, McAllen, TX 78501**.
6. **Analytics** — do you have a Google Analytics account, or should we create one? Any cookie-consent
   requirement you're aware of?

## Part B — Content to provide / confirm

7. **Proofed menu** — this is important. Your current online menu has a lot of misspelled Italian names
   (e.g. "AFFITETI", "VONCOLE", "GAMBERY", "BRUSCCHETTA", "zaferano"). Send us your **official menu
   (PDF or printed)** so we publish correct names, current prices, and any **gluten-free / vegetarian /
   vegan** markers. We will not "fix" dish names ourselves without your say-so.
8. **Wine & drinks list** — "Tinto" is half your name, but there's no wine list anywhere online. Send the
   **wine list (by the glass / bottle), cocktails, and non-alcoholic options.**
9. **Photography** — the biggest visual upgrade. We need **high-resolution** photos:
   - Dining room / interior (wide shots), bar, any private dining area
   - 10–15 signature dishes, ideally shot on dark backgrounds
   - Wine cellar / a wine pour
   - The storefront / exterior
   - A portrait of the owner or executive chef
   If you don't have these, we'll help arrange a photo shoot.
10. **Your story — sign-off + a name.** Confirm the "13 years / family / McAllen" About text is accurate,
    and give us the **owner or head chef's name and a short bio** (2–4 sentences) for the About page.
    Do you want a person featured, or keep it brand-only?
11. **Logo** — send the **vector logo** (`.svg`, `.ai`, or `.eps`). The version on your current site is a
    low-resolution web image.
12. **Reviews to feature** — pick **3–5 real Google reviews** you'd like on the site, and confirm we can
    show the reviewer's first name. (We only publish real reviews.)
13. **Blog** — we're migrating your 4 existing posts. Do you want to **keep publishing** new ones, or
    freeze these four? Any author name to credit? You'll get a simple web page to write and edit posts
    yourself (no developer needed) — we'll need an **email address** to set you up as an editor, and the
    **full text of two old posts** ("food photos for Instagram" and "family-friendly restaurant") that
    wasn't saved when we pulled the old site. See `BLOG-CMS.md`.
14. **Sections to keep or cut** — your current site doesn't mention these, but the new design has slots
    for them. For each: keep, change, or remove?
    - **Catering / private events** — do you offer them?
    - **Gift cards** — do you sell them? (Selling them online is a bigger project — not in this version.)
    - **Email newsletter** — do you have a mailing list and a service (Mailchimp, etc.)?
15. **Design direction** — your current site is **green + gold**. The new design is **dark, warm, with an
    amber/ochre accent** (more upscale, editorial). Are you good with that shift, or do you want to keep
    green?
16. **Delivery** — are you on **DoorDash / Uber Eats**? Should we link them?

## Part C — Legal / licensing

17. **Fonts** — the design uses *Satoshi* (free) and an editorial serif for headlines. We'll confirm
    licensing or use a free equivalent — no action needed unless you have brand fonts you want used.
18. **Privacy policy** — we'll draft one at `/privacy`. It will disclose analytics, the Google Maps
    embed, Reserve with Google, the contact-form service, and web fonts. You review before launch.
19. **Photo rights** — confirm the restaurant owns or has the right to use all photos (not your previous
    website vendor).

## Part D — Optional, for later (not blockers)

- Downloadable PDF menu for the Menu page.
- Private-events / large-party policy text (deposits, minimums, cancellation).
- Branded favicon.
- Any press mentions or awards you'd like featured.

---

## ⚠️ How to send credentials safely

Anything with a password or API key (analytics, domain registrar, form service) — **do not text or
email it.** Paste it into your own dashboard and add us as a user, or use a secure link we send.

**Questions? Just reply.** Once **Part A** is done and we have the proofed menu + photos, we go live.

## Implementation update — September 7, 2026

- Design 1 now uses the supplied restaurant food photography, the dark/cream/amber identity, a full photo gallery, and a single-location map and reservation path. Interior, wine and staff photography are still requested above; food photos are described as food, not interiors or portraits.
- The official contact page links to `https://www.google.com/maps/reserve/v/dine/c/5H5kKRje0fU`. This replaces the malformed placeholder reservation URL. End-to-end Google booking availability still needs a manual check before launch.
- Design 1 omits gift-card promotions, unconfirmed private-event services, and unapproved testimonials. Wine copy points guests to the server for current selections, without inventing bottles or prices.
- Design 2 retains its local list to show a server. Closed dialogs, size selection, quantity totals, storage recovery, mobile navigation and focus behavior have been repaired. No order is transmitted and no online-ordering launch is promised.
- Menu contents remain the existing 83 items in 10 supplied food sections. Kitchen proofing, the beverage list, exact dish/photo confirmation, Friday–Saturday hours, approved testimonials and photography rights remain open. No additional menu items or categories were invented to match the PRD's approximate count.

## Implementation update — September 8, 2026

- The blog now runs on **Sanity** (free hosted CMS) so the client can add and edit posts from a web page without touching code. Publishing a post auto-rebuilds the site. Full setup and client instructions are in `BLOG-CMS.md`.
- The site still builds and shows the 4 migrated posts before Sanity is connected — the CMS is additive, not a blocker.
- **New items needed from the client for the blog:** an email address to be added as an editor, and the full text of the two old posts that had no body captured during intake.
- Hosting target confirmed as **Vercel**; `@astrojs/vercel` adapter added. No secrets in the repo — Sanity project ID and tokens go into Vercel's environment variables (see `.env.example`).
