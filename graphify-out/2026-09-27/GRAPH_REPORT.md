# Graph Report - laundro-hub-website  (2026-09-27)

## Corpus Check
- 47 files · ~251,474 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 214 nodes · 301 edges · 25 communities (10 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- BUSINESS_INFO
- MyWashForm.tsx
- compilerOptions
- devDependencies
- dependencies
- data.ts
- app/page.tsx
- Laundro-Hub website
- postcss.config.mjs
- my-wash/page.tsx
- main.js
- next.config.ts
- tailwind.config.ts
- NavDropdown.tsx

## God Nodes (most connected - your core abstractions)
1. `BUSINESS_INFO` - 20 edges
2. `WhatsAppIcon()` - 19 edges
3. `compilerOptions` - 16 edges
4. `getServices()` - 9 edges
5. `getSuburbs()` - 9 edges
6. `getPricingPlans()` - 7 edges
7. `Laundro-Hub website` - 6 edges
8. `scripts` - 5 edges
9. `ActionState` - 5 edges
10. `include` - 5 edges

## Surprising Connections (you probably didn't know these)
- `ContactForm()` --indirect_call--> `submitContactForm()`  [INFERRED]
  src/components/ContactForm.tsx → src/actions/contact.ts
- `MyWashForm()` --indirect_call--> `submitPickupRequest()`  [INFERRED]
  src/components/my-wash/MyWashForm.tsx → src/actions/pickup.ts
- `ContactPage()` --calls--> `getSuburbs()`  [EXTRACTED]
  src/app/contact/page.tsx → src/lib/data.ts
- `ExpressPage()` --calls--> `getSuburbs()`  [EXTRACTED]
  src/app/express/page.tsx → src/lib/data.ts
- `MyWashPage()` --calls--> `getSuburbs()`  [EXTRACTED]
  src/app/my-wash/page.tsx → src/lib/data.ts

## Import Cycles
- None detected.

## Communities (25 total, 4 thin omitted)

### Community 0 - "BUSINESS_INFO"
Cohesion: 0.09
Nodes (17): metadata, metadata, metadata, bricolage, figtree, jsonLd, metadata, viewport (+9 more)

### Community 1 - "MyWashForm.tsx"
Cohesion: 0.13
Nodes (16): ContactFormData, contactFormSchema, submitContactForm(), PickupRequestData, pickupRequestSchema, PickupSuccessData, submitPickupRequest(), ACCOUNT_CATEGORIES (+8 more)

### Community 2 - "compilerOptions"
Cohesion: 0.07
Nodes (26): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+18 more)

### Community 3 - "devDependencies"
Cohesion: 0.08
Nodes (23): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom (+15 more)

### Community 4 - "dependencies"
Cohesion: 0.13
Nodes (15): clsx, lucide-react, next, dependencies, clsx, lucide-react, next, react (+7 more)

### Community 5 - "data.ts"
Cohesion: 0.12
Nodes (19): metadata, HomePage(), generateMetadata(), generateStaticParams(), ServiceDetailPage(), ServicePageProps, sitemap(), metadata (+11 more)

### Community 7 - "app/page.tsx"
Cohesion: 0.32
Nodes (5): metadata, BubbleConfig, BUBBLES, HeroBubbles(), HeroVideoPlayer()

### Community 9 - "Laundro-Hub website"
Cohesion: 0.29
Nodes (6): Before going live: things to fill in, Contact details used, Laundro-Hub website, Pages, Run it, Structure

### Community 11 - "my-wash/page.tsx"
Cohesion: 0.21
Nodes (9): ContactPage(), metadata, ExpressPage(), metadata, FAQS, HOW_IT_WORKS_STEPS, metadata, MyWashPage() (+1 more)

### Community 26 - "NavDropdown.tsx"
Cohesion: 0.33
Nodes (3): NavDropdown(), SECTOR_ITEMS, SectorMenuItem

## Knowledge Gaps
- **90 isolated node(s):** `nextConfig`, `name`, `version`, `private`, `dev` (+85 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 130 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `BUSINESS_INFO` connect `BUSINESS_INFO` to `MyWashForm.tsx`, `my-wash/page.tsx`, `data.ts`, `app/page.tsx`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `WhatsAppIcon()` connect `BUSINESS_INFO` to `MyWashForm.tsx`, `my-wash/page.tsx`, `data.ts`, `app/page.tsx`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `nextConfig`, `name`, `version` to the rest of the system?**
  _90 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `BUSINESS_INFO` be split into smaller, more focused modules?**
  _Cohesion score 0.09411764705882353 - nodes in this community are weakly interconnected._
- **Should `MyWashForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13043478260869565 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._