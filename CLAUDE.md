# CLAUDE.md — Northstar Digital Site

> Project-level instructions for Claude Code when working in this repo.
> Global context lives at `C:\Users\dillo\.claude\CLAUDE.md`.
> This file tells you what is specific to THIS project.

## What this is

The marketing website for Northstar Digital (NSD) — a father-son digital
agency in Waukesha / Milwaukee, Wisconsin. We serve local businesses with
websites, CRMs, apps, YouTube channels, and AI automation.

This site is how we win clients. It needs to rank, load fast, and feel like
a real agency — not a generic Wix template.

## Stack

- Framework: Astro 6 (astro@^6.1.8)
- Styling: Tailwind CSS v4 via @tailwindcss/vite
- SEO: @astrojs/sitemap for auto-generated sitemap
- Language: TypeScript
- Node required: >=22.12.0
- Status: v0.0.1 — fresh install, real pages still to be built.

## Commands

- npm install — install dependencies
- npm run dev — local dev server at http://localhost:4321
- npm run build — production build to ./dist/
- npm run preview — preview production build locally

## Structure

- public/ — static assets (images, fonts, favicons)
- src/pages/ — each .astro or .md becomes a route
- src/components/ — reusable components
- astro.config.mjs — Astro + sitemap config

## Design and content principles

- Audience: Local Wisconsin business owners — plumbers, dentists, contractors,
  realtors, landscapers. Not tech people. Not corporate.
- Voice: Direct, confident, human. We build things, they work, we charge fairly.
- Visual: Clean, fast, modern. Trustworthy + sharp. Dark accents ok but not
  full cyberpunk (that is the Control Panel, not the public site).
- SEO first: Every page SSR-able, meta tags, unique title and description.
  Target local keywords like "Waukesha web design", "Milwaukee small business website".
- Performance: Astro ships zero JS by default. Keep it that way unless there
  is a real reason to add client-side JS.

## Pages needed

- Home — hero, what we do, who it is for, CTA
- Services — main + subpages per offering
- Portfolio / Work — case studies as we get them
- About — father-son story is the differentiator
- Contact — form connected to HoneyBook or email
- Blog — Markdown-based, for SEO and authority

## How to help me on this project

- Default to Astro files (.astro), not React, unless interactivity is needed.
- Use Tailwind utility classes; avoid custom CSS unless necessary.
- Write semantic HTML — header, nav, main, section, footer.
- Suggest real copy, not Lorem Ipsum. Specific is better than generic.
- Flag anything that hurts performance or SEO.
- Brand tone default: direct, local, unpretentious, confident without swagger.
