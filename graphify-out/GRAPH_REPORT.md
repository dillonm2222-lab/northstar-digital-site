# Graph Report - northstar-digital-site  (2026-06-20)

## Corpus Check
- 21 files · ~11,400 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 60 nodes · 70 edges · 13 communities (10 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8da275f1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `../layouts/BaseLayout.astro` - 15 edges
2. `scripts` - 5 edges
3. `siteConfig` - 4 edges
4. `run()` - 4 edges
5. `plans` - 3 edges
6. `engines` - 2 edges
7. `../components/Footer.astro` - 2 edges
8. `../components/Navbar.astro` - 2 edges
9. `speak()` - 2 edges
10. `addBubble()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (13 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.18
Nodes (10): dependencies, astro, @astrojs/sitemap, tailwindcss, @tailwindcss/vite, engines, node, name (+2 more)

### Community 2 - "Community 2"
Cohesion: 0.31
Nodes (5): ../components/HeroGrid.astro, addBubble(), run(), speak(), typeInto()

### Community 3 - "Community 3"
Cohesion: 0.33
Nodes (5): ../styles/global.css, ../layouts/BaseLayout.astro, canonicalUrl, ogImageUrl, schema

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (3): navLinks, services, siteConfig

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (5): scripts, astro, build, dev, preview

### Community 6 - "Community 6"
Cohesion: 0.50
Nodes (3): exclude, extends, include

### Community 7 - "Community 7"
Cohesion: 0.67
Nodes (3): ../data/site, ../components/Footer.astro, ../components/Navbar.astro

## Knowledge Gaps
- **26 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+21 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `../layouts/BaseLayout.astro` connect `Community 3` to `Community 1`, `Community 2`, `Community 4`, `Community 7`, `Community 8`?**
  _High betweenness centrality (0.216) - this node is a cross-community bridge._
- **Why does `scripts` connect `Community 5` to `Community 0`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _26 weakly-connected nodes found - possible documentation gaps or missing edges._