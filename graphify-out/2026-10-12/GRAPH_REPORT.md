# Graph Report - laundro-hub-website  (2026-10-11)

## Corpus Check
- 51 files · ~409,959 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 243 nodes · 347 edges · 29 communities (13 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d41b14f4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- BUSINESS_INFO
- data.ts
- compilerOptions
- devDependencies
- dependencies
- [slug]/page.tsx
- app/page.tsx
- server.js
- Laundro-Hub website
- postcss.config.mjs
- my-wash/page.tsx
- main.js
- next.config.ts
- tailwind.config.ts
- NavDropdown.tsx
- ContactForm.tsx
- layout.tsx

## God Nodes (most connected - your core abstractions)
1. `BUSINESS_INFO` - 21 edges
2. `WhatsAppIcon()` - 18 edges
3. `compilerOptions` - 16 edges
4. `getServices()` - 9 edges
5. `getSuburbs()` - 9 edges
6. `getPricingPlans()` - 7 edges
7. `Laundro-Hub website` - 6 edges
8. `scripts` - 5 edges
9. `submitPickupRequest()` - 5 edges
10. `getLogisticsFee()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `ContactPage()` --calls--> `getSuburbs()`  [EXTRACTED]
  src/app/contact/page.tsx → src/lib/data.ts
- `ContactForm()` --indirect_call--> `submitContactForm()`  [INFERRED]
  src/components/ContactForm.tsx → src/actions/contact.ts
- `submitPickupRequest()` --calls--> `sendPickupOrderEmail()`  [EXTRACTED]
  src/actions/pickup.ts → src/lib/mail.ts
- `MyWashForm()` --indirect_call--> `submitPickupRequest()`  [INFERRED]
  src/components/my-wash/MyWashForm.tsx → src/actions/pickup.ts
- `ExpressPage()` --calls--> `getSuburbs()`  [EXTRACTED]
  src/app/express/page.tsx → src/lib/data.ts

## Import Cycles
- None detected.

## Communities (29 total, 4 thin omitted)

### Community 0 - "BUSINESS_INFO"
Cohesion: 0.12
Nodes (14): metadata, metadata, metadata, metadata, metadata, metadata, StudentsPage(), metadata (+6 more)

### Community 1 - "data.ts"
Cohesion: 0.13
Nodes (19): PickupRequestData, pickupRequestSchema, PickupSuccessData, submitPickupRequest(), metadata, AVAILABLE_SERVICES, INITIAL_STATE, MyWashForm() (+11 more)

### Community 2 - "compilerOptions"
Cohesion: 0.07
Nodes (26): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+18 more)

### Community 3 - "devDependencies"
Cohesion: 0.08
Nodes (25): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, @types/leaflet, @types/node, @types/react (+17 more)

### Community 4 - "dependencies"
Cohesion: 0.09
Nodes (23): clsx, leaflet, lucide-react, next, nodemailer, dependencies, clsx, leaflet (+15 more)

### Community 5 - "[slug]/page.tsx"
Cohesion: 0.33
Nodes (7): generateMetadata(), generateStaticParams(), ServiceDetailPage(), ServicePageProps, sitemap(), getServiceBySlug(), getServices()

### Community 7 - "app/page.tsx"
Cohesion: 0.23
Nodes (7): metadata, BubbleConfig, BUBBLES, HeroBubbles(), HeroVideoPlayer(), TowersMap(), TowersMapWrapper()

### Community 8 - "server.js"
Cohesion: 0.33
Nodes (5): app, { createServer }, handle, next, { parse }

### Community 9 - "Laundro-Hub website"
Cohesion: 0.29
Nodes (6): Before going live: things to fill in, Contact details used, Laundro-Hub website, Pages, Run it, Structure

### Community 11 - "my-wash/page.tsx"
Cohesion: 0.22
Nodes (9): ExpressPage(), metadata, FAQS, HOW_IT_WORKS_STEPS, metadata, MyWashPage(), HomePage(), COLLECTION_DELIVERY_PRICING (+1 more)

### Community 26 - "NavDropdown.tsx"
Cohesion: 0.33
Nodes (3): NavDropdown(), SECTOR_ITEMS, SectorMenuItem

### Community 27 - "ContactForm.tsx"
Cohesion: 0.17
Nodes (12): ContactFormData, contactFormSchema, submitContactForm(), ContactPage(), metadata, ACCOUNT_CATEGORIES, ContactForm(), initialState (+4 more)

### Community 28 - "layout.tsx"
Cohesion: 0.20
Nodes (8): bricolage, caveat, figtree, jsonLd, metadata, viewport, Footer(), Header()

## Knowledge Gaps
- **102 isolated node(s):** `nextConfig`, `name`, `version`, `private`, `dev` (+97 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 143 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `BUSINESS_INFO` connect `BUSINESS_INFO` to `data.ts`, `[slug]/page.tsx`, `app/page.tsx`, `my-wash/page.tsx`, `ContactForm.tsx`, `layout.tsx`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **What connects `nextConfig`, `name`, `version` to the rest of the system?**
  _102 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `BUSINESS_INFO` be split into smaller, more focused modules?**
  _Cohesion score 0.11954022988505747 - nodes in this community are weakly interconnected._
- **Should `data.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12615384615384614 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._