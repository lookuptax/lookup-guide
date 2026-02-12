---
description: How to write Netlify redirects for lookuptax.com/docs — site architecture, syntax rules, and common pitfalls
---

# Netlify Redirects for LookupTax Docs

## Site Architecture

```
lookuptax.com (Astro site — deployed separately, NOT this repo)
   └── /docs/* → proxied to lookup-guides.netlify.app (this repo)
```

- **lookuptax.com** = Astro marketing site, deployed independently
- **lookuptax.com/docs/** = Docusaurus site from this repo (`lookuptax/lookup-guide`)
- **Netlify site name**: `lookup-guides.netlify.app`
- **Docusaurus baseUrl**: `/docs/`
- The Astro site **proxies** `/docs/*` to the Netlify app, **stripping the `/docs/` prefix**
- So Netlify receives paths like `/tax-identification-number/china-tax-id-guide` (no `/docs/`)

## Redirect Path Rules

### `from` paths — NO `/docs/` prefix

Netlify receives paths **without** `/docs/`, so all `from` paths must NOT include it:

```toml
# CORRECT
from = "/de/tax-identification-number/*"

# WRONG — will never match
from = "/docs/de/tax-identification-number/*"
```

### `to` paths — use ABSOLUTE URLs with `/docs/`

Since Netlify sends the `Location` header back through the Astro proxy, relative `to` paths resolve against `lookuptax.com` root (the Astro site), not `/docs/`. Always use absolute URLs:

```toml
# CORRECT — browser navigates to the docs site
to = "https://lookuptax.com/docs/tax-identification-number/:splat"

# WRONG — browser navigates to lookuptax.com/tax-identification-number/ (Astro site, 404)
to = "/tax-identification-number/:splat"
```

### Exception: 404 status rules

404 catch-all rules use relative `to` paths because they serve files directly (no redirect):

```toml
# CORRECT — serves the file from Netlify's build output
[[redirects]]
  from = "/es/*"
  to = "/es/404.html"
  status = 404
```

## Netlify Wildcard Syntax Rules

### Rule 1: `*` only at END of path segment

Netlify only supports wildcards (`*`) at the **end** of a path segment. Mid-segment wildcards are **silently ignored**:

```toml
# CORRECT
from = "/de/tax-identification-number/*"

# WRONG — silently ignored, never matches
from = "/de/tax-identification-number/*-tax-id-guide"
```

### Rule 2: Only ONE `*` per rule

Netlify only supports **one** wildcard per `from` path. Double wildcards are invalid:

```toml
# CORRECT — use separate rules per locale
from = "/es/docs/*"

# WRONG — two wildcards, invalid
from = "/*/docs/*"
```

### Rule 3: Use `:splat` in `to` for wildcard matches

The portion matched by `*` is referenced as `:splat` in the `to` path:

```toml
from = "/es/tax-identification-number/*"
to = "https://lookuptax.com/docs/tax-identification-number/:splat"
```

### Rule 4: `force = true` for overriding existing files

Without `force = true`, Netlify won't redirect if a file exists at the `from` path:

```toml
force = true  # Always set for 301 redirects
```

### Rule 5: Order matters

Netlify processes rules top-to-bottom and applies the **first match**. Place more specific rules above general catch-alls.

## Build Output Structure

- English pages: `build/tax-identification-number/china-tax-id-guide/index.html`
- Locale pages: `build/de/steuerliche-identifikationsnummer/deutschland-steuer-id/index.html`
- Locale folders at root: `build/es/`, `build/de/`, `build/pt/`, `build/zh-Hans/`
- 404 pages: `build/de/404.html`, `build/es/404.html`, etc.

## Sitemaps

- English: `https://lookuptax.com/docs/sitemap.xml`
- Locale: `https://lookuptax.com/docs/{locale}/sitemap.xml`
- All referenced in `static/robots.txt`
- Blog URLs should NOT appear in locale sitemaps (handled by `scripts/cleanup-locale-blogs.js`)

## Testing Redirects

Always test redirects against the **Netlify app directly**, not through the Astro proxy:

```powershell
# Test directly on Netlify (no proxy interference)
Invoke-WebRequest -Uri "https://lookup-guides.netlify.app/de/tax-identification-number/china-tax-id-guide" -MaximumRedirection 0

# Then verify through the proxy
Invoke-WebRequest -Uri "https://lookuptax.com/docs/de/tax-identification-number/china-tax-id-guide" -MaximumRedirection 0
```

## Common Mistakes to Avoid

1. **Adding `/docs/` to `from` paths** — Netlify never sees this prefix
2. **Using relative `to` paths for 301 redirects** — resolves against Astro root, not `/docs/`
3. **Using `*` mid-segment** (e.g., `*-tax-id-guide`) — silently ignored
4. **Using multiple `*` in one rule** — only one wildcard allowed
5. **Forgetting `force = true`** — redirect won't fire if a static file exists at the path
6. **Not testing on `lookup-guides.netlify.app`** — always test the Netlify app first
