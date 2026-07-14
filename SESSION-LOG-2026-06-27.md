# Session Log — 2026-06-27 (North Star Digital SEO + Pricing Overhaul)

**Repo:** `dillonm2222-lab/northstar-digital-site` (Astro, deployed on Vercel, prod = `main`)
**Pricing source of truth:** `src/data/site.ts`

---

## Why we started
A cold SEO outreach email (junk folder) claimed the site wasn't ranking. It was spam — but the underlying claim was partly true. Decided to audit the site instead of replying.

## What the audit found
- **Only the homepage was indexed by Google.** Root cause: `public/robots.txt` pointed to a dead sitemap at `northstardigital.com/sitemap-index.xml` (wrong domain — `.com`, not `.services`).
- **Pricing was inconsistent on the live site:** most pages showed $147/$297/$797 while `/services` showed a stale $299/$499/$999 (old Vercel deploy).
- **www vs non-www mismatch:** server redirected non-www → www, but canonical/config used non-www.
- **Footer NAP** said only "Wisconsin" instead of the real city.
- **Repo hygiene problems:** a duplicate nested clone (`northstar-digital-site/northstar-digital-site`), stale git worktrees (`nsd-main`, `nsd-wt`), a stuck `.git/index.lock`, and the local checkout parked on a stale branch (`deploy-subheading`, 6 commits behind main).

## Decisions made
- **Raised pricing to $247 / $447 / $849** (Starter / Core / Core + SEO). Kept plan names. Reasoning: $147 was underpriced for a fully-managed system; $247 entry hits $10K/mo at ~40 clients vs 68. Prices confirmed good for the services offered.
- Standardized domain on **www** (matches the existing server redirect).
- Standardized HQ location to **Pewaukee, WI** (matches LLC + Google Business Profile).

## Changes shipped (all merged to main, live)
**PR #2 — pricing + SEO fixes (24 files):**
- Pricing → $247/$447/$849 across all pages + blog posts + `site.ts`
- `public/robots.txt` → `https://www.northstardigital.services/sitemap-index.xml`
- `astro.config.mjs` + `site.ts baseUrl` → `https://www.northstardigital.services`
- Footer NAP → Pewaukee, WI

**PR #3 — Google Search Console verification:**
- Added `google-site-verification` meta tag to `BaseLayout.astro` `<head>`

## Google Search Console
- Property: `https://www.northstardigital.services` (URL-prefix)
- Verified via **HTML tag** method (GA method failed twice with Google-side internal errors)
- Submitted sitemap `sitemap-index.xml` — confirmed live and serving valid XML
- Status showed "Couldn't fetch" immediately after submission — this is normal first-read lag and should flip to "Success" within ~a day

## Process notes (for next time)
- The stuck `.git/index.lock` blocked all local git ops. Worked around it by cloning fresh and pushing branches via one-click `.bat` scripts (`git apply --3way` handled the Linux/Windows line-ending mismatch).
- A `cleanup.bat` was created to delete throwaway clones, leftover patch/script files, clear git locks, and prune stale worktrees. (Does NOT auto-delete the nested duplicate folder — review and delete that manually.)

## Open / recommended next steps
1. **Tomorrow:** confirm GSC sitemap flipped to "Success" and pages are being discovered.
2. **This week:** run `cleanup.bat`; delete the nested duplicate project folder after eyeballing it.
3. **Revenue upside:** add a 4th **Pro** tier (~$1,200–1,500/mo) to monetize the AI Voice Agent (advertised but not currently purchasable). Also price-anchors $849 as the middle option.
4. **Local SEO:** ensure Google Business Profile name/address/phone matches the site exactly (Pewaukee, WI).
5. Request indexing on `/services`, `/pricing`, `/portfolio`, and the homepage via URL Inspection.

## Final state
Went from 1 indexed page + broken sitemap → corrected live pricing, fixed robots/sitemap, www canonical, Pewaukee NAP, GSC verified, sitemap submitted and confirmed reachable.
