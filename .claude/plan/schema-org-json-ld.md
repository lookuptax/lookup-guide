# Implementation Plan: Schema.org JSON-LD for Country Guides & Beyond

## Current State

| Directory | Total Files | With JSON-LD | Coverage |
|-----------|------------|-------------|----------|
| docs/country/ | 7 | 0 | 0% |
| docs/tax-identification-number/ | 120 | 11 (FAQPage) | 9.2% |
| docs/how-to-verify/ | 48 | 2 (HowTo) | 4.2% |

**Two existing patterns:**
- `<JsonLd>` component (used in tax-identification-number/) — wraps raw JSON string
- `<Head><script>` with `JSON.stringify()` (used in how-to-verify/) — recommended by workflow

## Schema Strategy by Page Type

### Country Guides (docs/country/) — 7 files
**Schema**: `GovernmentService` — describes the tax system as a government service, with embedded `areaServed`, tax authority, and rates.

Files: australia.mdx, canada.md, france.md, germany.md, india.md, spain.md, united-kingdom.md

Special cases:
- **india.md** has a FAQ section (5 questions in `<details>` elements) → add `FAQPage` schema too
- **spain.md** has commented-out FAQ section → no FAQPage yet
- **australia.mdx** is .mdx (already supports JSX imports natively)
- All .md files will need to be checked if they support JSX — they do NOT by default in Docusaurus unless configured. Use `<script>` with template literals instead.

### Implementation Approach

**For .md files**: Use `<JsonLd>` component (already exists, used in tax-id files) — requires import line.
**For .mdx files**: Can use either `<Head>` with `JSON.stringify()` or `<JsonLd>`.
**Chosen approach**: Use `<JsonLd>` component consistently (matches existing tax-id pattern, simpler syntax).

Wait — .md files in Docusaurus 3 DO support JSX imports if MDX is enabled (which it is in this project since other .md files import JsonLd). Confirmed: albania.md imports `JsonLd` successfully.

### Implementation Steps

#### Phase 1: Country Guides (7 files) — START HERE
1. Add `GovernmentService` JSON-LD to all 7 country guide files
2. Add `FAQPage` JSON-LD to india.md (has visible FAQ section)
3. Pattern: import JsonLd, add schema at bottom of file

#### Phase 2: Tax ID Guides (109 remaining files)
- Add `FAQPage` schema to files that have FAQ sections but no schema
- For files WITHOUT FAQs: consider adding `Article` schema with tax ID format details

#### Phase 3: How-to-Verify Guides (46 remaining files)
- Add `HowTo` schema following the cnpj-brazil.md pattern
- Follow `.agent/workflows/implement-json-ld.md` strictly

## GovernmentService Template for Country Guides

```jsx
import JsonLd from '@site/src/components/JsonLd';

<JsonLd>
{`
{
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  "name": "[Tax Name] in [Country]",
  "description": "[Brief description of the tax system]",
  "serviceType": "Tax Administration",
  "provider": {
    "@type": "GovernmentOrganization",
    "name": "[Tax Authority Name]",
    "url": "[Tax Authority URL]"
  },
  "areaServed": {
    "@type": "Country",
    "name": "[Country Name]"
  },
  "url": "https://lookuptax.com/docs/country/[slug]"
}
`}
</JsonLd>
```

## Risks and Mitigation

| Risk | Mitigation |
|------|-----------|
| .md files may not support JSX imports | Confirmed: other .md files (albania.md) already import JsonLd successfully |
| Schema content not matching visible content | Only schema what's visibly on the page |
| Build errors from JSON in MDX | Use template literal syntax inside `<JsonLd>` component |
| germany.md has malformed frontmatter (missing `tags:` key) | Fix frontmatter before adding schema |
