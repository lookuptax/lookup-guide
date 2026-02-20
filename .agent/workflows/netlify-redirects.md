---
description: How to write Netlify redirects for lookuptax.com/docs — site architecture, syntax rules, and common pitfalls
---

# Netlify Redirects for LookupTax Docs

## Site Architecture

```
lookuptax.com (Astro site — deployed separately, NOT this repo)
   ├── /blog      → Astro blog (NOT Docusaurus — blog moved here)
   └── /docs/*    → proxied to lookup-guides.netlify.app (this repo)
```

- **lookuptax.com** = Astro marketing site, deployed independently
- **lookuptax.com/docs/** = Docusaurus site from this repo (`lookuptax/lookup-guide`)
- **lookuptax.com/blog** = Blog lives on the Astro site, NOT in Docusaurus
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
  from = "/*"
  to = "/404.html"
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

### Rule 4: `force = true` — use carefully

- **With `force = true`**: Redirect fires EVEN IF a static file exists at the path
- **Without `force = true`**: Static files take precedence; redirect only fires if no file exists
- Use `force = true` for specific known redirects (e.g., blog locale redirects)
- **Do NOT use `force = true` on catch-all locale redirects** — it would override real translated pages

```toml
# Specific redirect — use force to always redirect
[[redirects]]
  from = "/es/blog/*"
  to = "https://lookuptax.com/blog/:splat"
  status = 301
  force = true

# Catch-all — NO force, so translated pages (static files) are served normally
[[redirects]]
  from = "/es/*"
  to = "https://lookuptax.com/docs/:splat"
  status = 301
```

### Rule 5: Order matters — critical for catch-alls

Netlify processes rules top-to-bottom and applies the **first match**:

```
1. Specific rules (blog redirects, tag redirects, etc.)
2. Catch-all locale redirects (no force) — redirect unmatched locale paths to English
3. Translated slug catch-alls at root (e.g., /steuerliche-identifikationsnummer/*)
4. 404 fallback (/* → /404.html) — MUST BE LAST
```

## Catch-All Locale Redirect Strategy

### Why catch-alls are essential

Without catch-all redirects, unmatched locale paths (e.g., `/de/tax-identification-number/hungary-tax-id-guide` when Hungary isn't translated to German) fall through all specific rules to the 404. The Astro proxy may convert upstream 404s to **5xx errors**, which Google treats as "server is broken" — causing **indexing penalties and impression drops**.

### The correct pattern

```toml
# After all specific redirect rules, BEFORE the 404 fallback:

# Catch-all: unmatched locale paths → English equivalent (301)
[[redirects]]
  from = "/es/*"
  to = "https://lookuptax.com/docs/:splat"
  status = 301
# No force = true! Real translated pages (static files) served normally.

# Same for /de/*, /pt/*, /zh-Hans/*
```

### What happens when a locale path is requested

```
1. Static file exists (translated page)?  → Served directly (200) ✅
2. Specific redirect rule matches?         → Redirect fires (301) ✅
3. Neither? → Catch-all fires:
   a. English page exists?                 → 301 → English page (200) ✅
   b. English page also doesn't exist?     → 301 → English path → root 404 (404) ✅
```

**Google sees either 301→200 or 301→404** — both are clean signals. Never 5xx.

### NEVER use locale-specific 404 catch-alls

```toml
# WRONG — causes 5xx when Astro proxy receives the 404
[[redirects]]
  from = "/es/*"
  to = "/es/404.html"
  status = 404

# CORRECT — clean 301 redirect, Google-friendly
[[redirects]]
  from = "/es/*"
  to = "https://lookuptax.com/docs/:splat"
  status = 301
```

## Cross-Locale Slug Patterns

When translated content exists in multiple locales, a slug from one locale can appear in another locale's path (e.g., Google may index `/de/numero-identificacao-fiscal/guia-nif-portugal` — a PT slug in DE locale). The catch-all locale redirects handle this automatically:

```
/de/numero-identificacao-fiscal/guia-nif-portugal
  → catch-all: 301 → /docs/numero-identificacao-fiscal/guia-nif-portugal
  → English doesn't have this slug either → 404
```

For translated slugs appearing at the **root** (without any locale prefix), add explicit redirects:

```toml
# German slugs at root
from = "/steuerliche-identifikationsnummer/*"
to = "https://lookuptax.com/docs/de/steuerliche-identifikationsnummer/:splat"

# Chinese slugs at root
from = "/shuiwu-shibie-haoma/*"
to = "https://lookuptax.com/docs/zh-Hans/shuiwu-shibie-haoma/:splat"
```

## Blog Redirects

The blog has been moved from Docusaurus (`/docs/blog`) to the Astro site (`/blog`). All blog redirects must point to `https://lookuptax.com/blog/...` (NOT `/docs/blog/`):

```toml
# CORRECT — blog is on the Astro site now
to = "https://lookuptax.com/blog/:splat"

# WRONG — creates redirect loop (Astro → Netlify → redirect to Astro → Netlify → ...)
to = "https://lookuptax.com/docs/blog/:splat"
```

## Auto-Generated Redirects

The build adds locale tag redirects automatically via `scripts/redirect-locale-tags.js`. These are written to `build/_redirects` and handle non-ASCII tag paths (e.g., `/tags/欧盟` → `/zh-Hans/tags/欧盟`).

## Build Output Structure

- English pages: `build/tax-identification-number/china-tax-id-guide/index.html`
- Locale pages: `build/de/steuerliche-identifikationsnummer/deutschland-steuer-id/index.html`
- Locale folders at root: `build/es/`, `build/de/`, `build/pt/`, `build/zh-Hans/`
- 404 page: `build/404.html` (custom, via swizzled `src/theme/NotFound/Content/index.js`)
- Auto-generated redirects: `build/_redirects`

## Sitemaps

- English: `https://lookuptax.com/docs/sitemap.xml`
- Locale: `https://lookuptax.com/docs/{locale}/sitemap.xml`
- All referenced in `static/robots.txt`
- Blog URLs should NOT appear in locale sitemaps (handled by `scripts/cleanup-locale-blogs.js`)

## Testing Redirects

Always test redirects against the **Netlify app directly**, not through the Astro proxy:

```powershell
# Test directly on Netlify (no proxy interference)
curl.exe -s -o NUL -w "Status: %{http_code}\nRedirect: %{redirect_url}\n" "https://lookup-guides.netlify.app/de/tax-identification-number/china-tax-id-guide"

# Then verify through the proxy (full chain)
curl.exe -v -L --max-redirs 5 -o NUL "https://lookuptax.com/docs/de/tax-identification-number/china-tax-id-guide" 2>&1 | Select-String "(< HTTP|< location|> GET)"
```

> **Note**: Use `curl.exe` (not `curl`) in PowerShell — `curl` is aliased to `Invoke-WebRequest`.

## Common Mistakes to Avoid

1. **Adding `/docs/` to `from` paths** — Netlify never sees this prefix
2. **Using relative `to` paths for 301 redirects** — resolves against Astro root, not `/docs/`
3. **Using `*` mid-segment** (e.g., `*-tax-id-guide`) — silently ignored
4. **Using multiple `*` in one rule** — only one wildcard allowed
5. **Using `force = true` on catch-all locale redirects** — overrides real translated pages
6. **Using locale-specific 404 catch-alls** — Astro proxy may convert to 5xx, causing Google penalties
7. **Pointing blog redirects to `/docs/blog/`** — creates redirect loops since blog moved to `/blog`
8. **Not testing on `lookup-guides.netlify.app`** — always test the Netlify app first
9. **Forgetting that redirect order matters** — specific rules first, catch-alls last, 404 fallback very last
10. **Not deploying changes** — verify `git log origin/main..HEAD` shows no unpushed commits
