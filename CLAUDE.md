# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LookupTax documentation and guides site — a Docusaurus 3.9.2 static site deployed on Netlify (`lookup-guides.netlify.app`), served at `lookuptax.com/docs/` via proxy from the main Astro marketing site. The Astro site (separate repo) handles `/`, `/blog`, `/about`; this repo handles everything under `/docs/`.

## Commands

```bash
npm start                # Dev server (English only)
npm run build            # Full production build (all locales): prepare-i18n → docusaurus build → cleanup-locale-blogs → redirect-locale-tags
npm run serve            # Serve production build locally
npm run clear            # Clear Docusaurus cache (use when builds behave unexpectedly)
npx docusaurus start --locale es   # Dev server for a specific locale
```

The build pipeline runs 4 steps sequentially:
1. `scripts/prepare-i18n.js` — creates `draft: true` placeholders for untranslated docs (prevents English fallback)
2. `docusaurus build` — compiles all locales
3. `scripts/cleanup-locale-blogs.js` — removes non-English blog copies from `/build`
4. `scripts/redirect-locale-tags.js` — generates 301 redirects for locale-only tags into `build/_redirects`

## Architecture

### Site Proxy Model

```
lookuptax.com (Astro)
  ├── /blog      → Astro blog (NOT this repo)
  └── /docs/*    → proxied to lookup-guides.netlify.app (this repo)
```

The Astro proxy **strips `/docs/`** before forwarding to Netlify. This has critical implications for redirects — see `.agent/workflows/netlify-redirects.md`.

### Content Structure

- `docs/` — English source content (~237 .md/.mdx files): country guides, tax-identification-number guides, how-to-verify, how-to-register, einvoicing, explainers, glossary, vat, sales-tax
- `i18n/{es,zh-Hans,de,pt}/docusaurus-plugin-content-docs/current/` — translations mirror the `docs/` structure
- `src/components/` — React components (JsonLd, HreflangTags, SmartLocaleDropdown, AlsoAvailable, AdSense, HomepageFeatures)
- `src/theme/` — Docusaurus theme overrides (Layout injects HreflangTags globally)
- `src/data/translatedPages.js` — maps English doc paths to localized slugs (critical for hreflang and AlsoAvailable)
- `scripts/` — build-time Node scripts
- `plugins/` — custom Docusaurus plugins for locale/blog exclusion
- `netlify.toml` — 273+ redirect rules with strict ordering (specific rules → catch-all locale → 404 fallback)

### i18n System

Locales: `en` (default), `es`, `zh-Hans`, `de`, `pt`. Each translated page gets a **localized slug** (not just a locale prefix on the English slug).

Key files for i18n:
- `src/data/translatedPages.js` — slug mappings (keys must match English frontmatter `id`, not filename)
- `src/components/HreflangTags.js` — only emits hreflang for pages with actual translations
- `src/components/AlsoAvailable.js` — always use self-closing `<AlsoAvailable />` (auto-detects translations)
- `i18n/{locale}/docusaurus-plugin-content-docs/current/tags.yml` — locale-specific tag definitions

### SEO & Structured Data

- **JSON-LD schemas**: `HowTo` (verification guides), `FAQPage` (FAQ sections). Must be wrapped in JS template strings or `JSON.stringify()` in MDX to avoid build errors.
- **Hreflang tags**: injected globally via `src/theme/Layout.js` → `HreflangTags` component
- **Sitemaps**: per-locale, referenced in `static/robots.txt`. Draft content auto-excluded via `getDraftRoutes()` in config.
- **Google**: GTM (GTM-KLGV623), AdSense (ca-pub-9381464195828471)

## Workflow References

Before starting any of these tasks, **read the corresponding workflow file** in `.agent/workflows/`:

| Task | Workflow File |
|------|--------------|
| Adding FAQs to a page | `.agent/workflows/research-faq.md` |
| Adding JSON-LD to verification guides | `.agent/workflows/implement-json-ld.md` |
| Writing Netlify redirects | `.agent/workflows/netlify-redirects.md` |
| Translating a page | `.agent/workflows/add-new-translation.md` |

## Critical Rules

### Redirects (netlify.toml)
- `from` paths: **NO `/docs/` prefix** (Netlify receives paths without it)
- `to` paths: **absolute URLs** with `/docs/` (e.g., `https://lookuptax.com/docs/...`)
- Exception: 404 rules use relative `to` paths
- Wildcards: only at end of segment, only one `*` per rule, matched content referenced as `:splat`
- Order matters: specific rules first, catch-all locale redirects (no `force`) last before 404 fallback
- Never use locale-specific 404 catch-alls (causes 5xx via Astro proxy → Google penalties)

### Content & FAQs
- No generic FAQs ("What is X?", "How many digits?"). Only real-world friction from UGC research.
- All citation URLs must be liveness-checked (`curl -I` or equivalent) before adding.
- Citations must point to primary sources (government domains, official legislation). No third-party blogs as authority.
- JSON-LD schema must match visible page content exactly — Google penalizes invisible content.

### Translations
- Translated files must preserve 100% of English source structure (no trimming/summarizing).
- Use `pathname:///docs/...` links for pages that don't exist in the target locale.
- `translatedPages.js` keys must match the English file's frontmatter `id`, not the filename.
- Always use `<AlsoAvailable />` (self-closing), never the legacy `lang`/`href` props.

### MDX/Docusaurus
- JSON-LD in MDX must use JS template strings (`{` `` ` `` `...` `` ` `` `}`) or `JSON.stringify()` to avoid build errors.
- Frontmatter `id` determines the doc route, not the filename. Always check `id` when linking.
- `baseUrl` is `/docs/` — all internal routing is relative to this.
