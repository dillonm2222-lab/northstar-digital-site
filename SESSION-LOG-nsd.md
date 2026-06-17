# NSD Site Session Log
# Last updated: 2026-06-16 (session 2)

---

## SESSION 2 SUMMARY — 2026-06-16 (continued)

**4 more goals completed. Build clean throughout. All changes verified.**

| Goal | Status | Commit |
|------|--------|--------|
| 5. Price consistency, fake client claim, robots.txt | ✅ Done | 34db33f |
| 6. Install @tailwindcss/typography — blog prose rendering | ✅ Done | cf2c783 |
| 7. Blog upgrades — related posts, CTA, internal links | ✅ Done | ea5e56b |
| 8. Sitemap /offer exclusion + datetime attributes | ✅ Done | 81670f3 |

---

## GOAL 5 — Critical content fixes
**Commit:** 34db33f

- `services.astro`: website price was "$399 one-time" — contradicted homepage $1,499. Now reads "$1,499 one-time — or bundled into monthly plans" consistently.
- `why-hvac-companies-losing-leads.md`: blog claimed "one of our clients — a masonry contractor..." — NSD has no clients. Rewrote as a clear hypothetical/illustrative scenario.
- `robots.txt`: site URL was `northstardigital.com` (wrong). Fixed to `northstardigital.services`. Added `Disallow: /offer` so crawlers skip the noindex proposal page.

Verified: $1,499 in built services HTML, "Disallow: /offer" and correct domain in built robots.txt.

---

## GOAL 6 — Blog typography plugin
**Commit:** cf2c783

`@tailwindcss/typography` was not installed. The blog post template uses `prose prose-lg prose-headings:*` etc. — all silently no-ops without the plugin. Installed the package and added `@plugin "@tailwindcss/typography"` to `global.css`. 166 `.prose` selectors confirmed in built CSS. Blog posts now render with proper heading sizes, paragraph spacing, list styles, and link colors.

---

## GOAL 7 — Blog upgrades
**Commit:** ea5e56b

`[...slug].astro`: 
- Related posts section (up to 2 other posts, grid layout, hover card)
- Mid-post free-audit CTA block (phone + contact form links)
- Expanded author box with Services and FAQ navigation links
- Byline now includes "North Star Digital, Waukesha, WI" for local SEO

`5-signs-your-business-needs-a-new-website.md`: added `/services` and `/faq` internal links in closing CTA.
`how-much-does-a-website-cost-waukesha.md`: linked "$299/mo" text to `/services`, added `/faq` link, corrected one-time price reference to $1,499.

Verified: 5 internal link matches in built 5-signs post HTML.

---

## GOAL 8 — Sitemap and datetime
**Commit:** 81670f3

- `astro.config.mjs`: sitemap integration now filters out `/offer` — noindex pages shouldn't appear in the sitemap either (belt-and-suspenders with the meta noindex tag). Verified 0 occurrences of `/offer` in built sitemap.
- `blog/index.astro` and `[...slug].astro`: all `<time>` elements now have `datetime="YYYY-MM-DD"` ISO attribute for semantic HTML and screen-reader compatibility. 3 datetime attrs confirmed in blog index.

---

---

## SESSION 3 SUMMARY — 2026-06-16 (continued)

**3 more goals completed. Build passes at 15 pages. All verified.**

| Goal | Status | Commit |
|------|--------|--------|
| 9. Two new SEO blog posts (GBP guide + masonry leads) | ✅ Done | 7ed0301 |
| 10. Service subpages /services/web-design + /services/local-seo | ✅ Done | 820523a |
| 11. Privacy policy at /privacy + footer link | ✅ Done | 8382dd9 |

---

## GOAL 9 — Two new blog posts
**Commit:** 7ed0301

**`google-business-profile-for-contractors-waukesha.md`** — Step-by-step GBP setup guide for Wisconsin contractors. 5 sections: claim/create, fill out every field, add photos, get reviews systematically, keep it active. Targets "Google Business Profile contractor Waukesha" and similar queries. Ends with internal links to /services (local SEO) and /faq.

**`how-masonry-contractors-get-more-customers-wisconsin.md`** — Directly targets the GM Masonry prospect segment. Explains the 3 gaps (website, GBP, missed-call follow-up), what ranking on Google looks like for masonry, honest cost comparison (DIY vs agency), and CTA. Tagged with "masonry waukesha wisconsin". Both posts get related posts + mid-post CTA from the blog template. 12 pages built, up from 10.

---

## GOAL 10 — Service subpages
**Commit:** 820523a

`/services/web-design`: Full detail page — includes list, not-included list, 3 stat cards (70% mobile / 3-sec bounce / 1st impression), 3-week timeline, trade list (Masonry, HVAC, Plumbing, Roofing, etc.), CTA. Targets "web design contractor Waukesha".

`/services/local-seo`: Map pack explained, GBP vs organic vs reviews breakdown, monthly includes list, standalone $199/mo pricing with bundle upsell, timeline with honest expectations (4-stage: wk1-2 / month 1 / months 2-3 / month 3+), 30-day guarantee callout. Targets "local SEO Wisconsin contractor".

`services.astro`: Added `slug` field to Website Build and Local SEO entries; service cards now render "Learn More →" links to subpages where a slug exists. 14 pages built, up from 12.

---

## GOAL 11 — Privacy Policy
**Commit:** 8382dd9

`/privacy`: Covers data collected (contact form via Formspree, GA4 cookies), how used, third-party services with links (Google Analytics, Formspree, Calendly), retention, user rights, contact details. Required since the site runs GA4 analytics, a Formspree form, and Calendly links — all of which process personal data.

`Footer.astro`: Privacy Policy link added to copyright bar. 15 pages built total.

---

## SESSION 2 REMAINING RECOMMENDATIONS

1. **Write a 4th blog post** — target "local SEO for contractors Waukesha" or "how to get more masonry leads Wisconsin". Highest SEO value move still available.
2. **Confirm and test Calendly link** — `contact.astro` links to `calendly.com/northstardigital-marketing/30min`. Verify the Calendly account is set up before publishing the site, or update the link.
3. **Test the Formspree form ID** — `contact.astro` submits to `formspree.io/f/xzdowbrw`. Confirm this is a real, active form endpoint.
4. **Swap founder-placeholder.svg for a real photo** — the About page now has the right 2-column layout but shows a placeholder image. A real photo converts better.
5. **Replace GA4 placeholder ID** — `BaseLayout.astro` uses `G-YL55ZMVPWT`. Swap in the real Measurement ID from Google Analytics once the property is created.
6. **Set up Calendly account** — contact page links to Calendly for booking. If the account doesn't exist yet, either create it or remove the booking section temporarily.

---

## SESSION 1 SUMMARY — 2026-06-16

**4 goals completed. Build passes throughout. All pages verified in built HTML.**

| Goal | Status | Commit |
|------|--------|--------|
| 1. Critical fixes (site URL, social proof, about layout, JSON-LD) | ✅ Done | b4f585f |
| 2. One-page offer template at /offer | ✅ Done | c0afb2b |
| 3. FAQ page at /faq — 17 Q&As, FAQPage schema | ✅ Done | 647fd76 |
| 4. GM Masonry full outreach playbook | ✅ Done | 8f0b53a (root repo) |

---

## GOAL 1 — Critical fixes
**Commit:** b4f585f
**Verification:** `npm run build` clean · confirmed in built HTML

Changes:
- `astro.config.mjs`: site URL was `northstardigital.com` — fixed to `northstardigital.services`. Sitemap now generates correct URLs.
- `src/pages/index.astro`: social proof bar "★★★★★ 5-Star Rated" replaced with "✓ 30-Day Results Guarantee" — was misleading for a pre-revenue business; now honest and a real differentiator.
- `src/pages/about.astro`: the story section was a broken `md:grid-cols-2` with only one child. Added right column: founder placeholder image + 4-stat grid (2–3 weeks / 30 days / $0 risk / Local).
- `src/layouts/BaseLayout.astro`: added `telephone` field to LocalBusiness JSON-LD schema.

Loaded: `/about` — two-column layout renders, image + stats visible. `/` — social proof bar shows "30-Day Results Guarantee". `sitemap-0.xml` — all URLs use `northstardigital.services`.

---

## GOAL 2 — One-page offer template
**Commit:** c0afb2b
**File:** `src/pages/offer.astro` → `/offer`
**Verification:** `npm run build` clean · 4 × "DECISION NEEDED" confirmed in built HTML

A clean, printable/shareable sales proposal page. `noindex` — not for search engines, only for sharing with prospects.

Sections: header (date + prepared for), problem statement (templated with [CLIENT] placeholders), 4-service deliverables grid (Website / Local SEO / CRM / Automation), 3-week timeline, what-we-need-from-you list, pricing table (all prices = [DECISION NEEDED] — Dillon fills these in before sending), 5-question objection-handling FAQ, 30-day guarantee, why-NSD bullets, CTA footer with phone + email.

**To use with GM Masonry:** Go to `northstardigital.services/offer`, fill in the [CLIENT] placeholders, set the pricing, and either share the URL or print to PDF.

---

## GOAL 3 — FAQ page
**Commit:** 647fd76
**File:** `src/pages/faq.astro` → `/faq`
**Verification:** `npm run build` clean · 17 `<details>` items confirmed · FAQPage JSON-LD `mainEntity` confirmed in built HTML

17 questions across 4 categories: Websites, Local SEO, CRM & Automation, Working With Us. Native `<details>` accordion — zero JavaScript. FAQPage structured data for potential Google rich results. Keywords embedded naturally: "Waukesha web design", "local SEO Wisconsin", "contractor CRM", "masonry website cost".

FAQ link added to nav and footer via `src/data/site.ts` navLinks.

---

## GOAL 4 — GM Masonry outreach playbook
**Commit:** 8f0b53a (root repo, `agent-empire/outreach/gm-masonry-scripts.md`)
**Verification:** 5 major sections confirmed (grep count)

Full outreach sequence for GM Masonry Concrete (0/100 web presence score — top priority prospect):
- Pre-call intel checklist (what to find before dialing)
- Cold call script with 4 branching responses (no website, ranks fine, has someone, busy/not interested) + close sequence
- 40-second voicemail script + immediate text follow-up template
- Text follow-up (call + 24hr nudge)
- 4-email sequence: Day 0 (audit story), Day 3 (exclusivity angle), Day 7 (multiple-choice reply), Day 14 (breakup email)
- Objection handling table (7 objections with responses)
- Call tracking log template
- Notes on best call windows (Tues–Thurs, 7–9am / 5–7pm contractor schedule)

---

## REMAINING RECOMMENDATIONS (not busywork — real value if time allows)

1. **Replace `founder-placeholder.svg` with actual photo** — the about page now has the right layout but shows a placeholder. A real photo of Dillon and his dad would significantly increase trust for visitors. Replace `/public/founder-placeholder.svg` with a real image and update the `<img>` `src`.

2. **Get the GA4 measurement ID** — BaseLayout has `G-YL55ZMVPWT` which is a placeholder (comment says "replace with your real ID"). Swap in the real ID from Google Analytics once the property is created.

3. **Finalize pricing in offer template** — Before sending to GM Masonry, decide: website one-time fee, monthly retainer, setup fee. Edit `/offer` template or customize for each prospect by editing those [DECISION NEEDED] values.

4. **Claim GBP** — The contact page mentions "Headquartered in Waukesha, WI" and the about page says the team is local, but there's no active Google Business Profile yet. Claiming and optimizing a GBP is the highest-ROI single SEO action available before the site has any domain authority.

5. **Add a `robots.txt` disallow for `/offer`** — The page has `noindex` but robots.txt doesn't block it. Not critical, but good hygiene: `Disallow: /offer` prevents crawlers from following links to it even if another page links to it.
