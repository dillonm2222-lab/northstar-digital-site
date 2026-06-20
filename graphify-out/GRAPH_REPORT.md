# Graph Report - .  (2026-06-20)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 60 nodes · 70 edges · 13 communities (9 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c0253e22`
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
1. `scripts` - 5 edges
2. `siteConfig` - 4 edges
3. `run()` - 4 edges
4. `plans` - 3 edges
5. `engines` - 2 edges
6. `speak()` - 2 edges
7. `addBubble()` - 2 edges
8. `typeInto()` - 2 edges
9. `node` - 1 edges
10. `dev` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (13 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.18
Nodes (10): dependencies, astro, @astrojs/sitemap, tailwindcss, @tailwindcss/vite, engines, node, name (+2 more)

### Community 2 - "Community 2"
Cohesion: 0.31
Nodes (4): addBubble(), run(), speak(), typeInto()

### Community 3 - "Community 3"
Cohesion: 0.33
Nodes (4): ../styles/global.css, canonicalUrl, ogImageUrl, schema

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (3): navLinks, services, siteConfig

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (5): scripts, astro, build, dev, preview

### Community 6 - "Community 6"
Cohesion: 0.50
Nodes (3): exclude, extends, include

## Knowledge Gaps
- **25 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `Community 5` to `Community 0`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._