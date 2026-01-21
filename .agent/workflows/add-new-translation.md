---
description: Guide for adding a new translation (es, zh-Hans, etc.) for a page
---

# Adding a New Page Translation

This guide covers the standard operating procedure (SOP) for translating a page to any target language (e.g., `es`, `zh-Hans`) with correct SEO and architecture setup.

## Quick Checklist

- [ ] **Create File**: Copy English markdown file to `i18n/[locale]/docusaurus-plugin-content-docs/current/...`
- [ ] **Frontmatter**: Add localized `slug`, title, description, keywords, and tags.
- [ ] **AlsoAvailable**: Update component to self-closing `<AlsoAvailable />`.
- [ ] **Internal Links**: Use `pathname:///docs/...` for links to pages that don't exist in the target language.
- [ ] **Mapping**: Update `src/data/translatedPages.js` to map the English path to the new localized slug.
- [ ] **Tags**: Ensure any new tags in frontmatter are defined in the locale's `tags.yml`.
- [ ] **Verify**: Build and check for broken links.

---

## Step 1: Create Localized File

Copy the English file to the appropriate `i18n` folder:

**Spanish Example**:

```
docs/tax-identification-number/germany.md
  ↓ copy to ↓
i18n/es/docusaurus-plugin-content-docs/current/tax-identification-number/germany.md
```

**Chinese Example**:

```
i18n/zh-Hans/docusaurus-plugin-content-docs/current/tax-identification-number/germany.md
```

**German Example**:

```
i18n/de/docusaurus-plugin-content-docs/current/tax-identification-number/germany.md
```

## Step 2: Update Frontmatter & Slugs

Update metadata for SEO. **Crucially, customize the slug.**

```yaml
---
id: germany-tax-id-guide # Keep same ID as English (for Docusaurus pairing)
slug: /numero-identificacion-fiscal/guia-steuernummer-alemania # Localized SEO slug
title: Guía del Steuernummer en Alemania
keywords: [Steuernummer, Alemania, número fiscal, USt-IdNr]
sidebar_label: Alemania
description: Guía completa sobre el número de identificación fiscal en Alemania...
tags:
  - alemania
  - steuernummer
---
```

### Slug Strategy

- **Do not** use the English slug.
- Use localized keywords matching the user's search intent.
- **Examples**:
  - Spanish: `/numero-identificacion-fiscal/guia-rfc-mexico`
  - Chinese: `/shuiwu-shibie-haoma/deguo-shuihao`
  - German: `/steuerliche-identifikationsnummer/deutschland-steuer-id`

## Step 3: Add AlsoAvailable Component

Use the **new self-closing syntax**. The component automatically detects available translations based on `translatedPages.js`.

### In All Files (English + Translations):

```jsx
import AlsoAvailable from "@site/src/components/AlsoAvailable";

<AlsoAvailable />;
```

> **Note**: You no longer need `lang` or `href` props. The component autodetects everything.

## Step 4: Robust Internal Linking

Links to other documentation pages need careful handling in translated files.

### Scenario A: Target Page IS Translated

Use relative links as normal. Docusaurus will resolve them to the Spanish version.
`[Link Text](../other-page.md)`

### Scenario B: Target Page IS NOT Translated (IMPORTANT)

If you link to a page that only exists in English (e.g., UK Guide, India Guide), **relative links will fail** during build because the file doesn't exist in the `i18n/es` folder.

**Solution**: Use `pathname://` protocol to force a link to the English path.

```markdown
[Guía de Reino Unido](pathname:///docs/country/uk-vat-guidelines-sales-tax-indirect-tax-united-kingdom)
```

## Step 5: Update Translation Mapping

For the Language Switcher and `<AlsoAvailable />` to work with your custom slugs, you **must** map them.

Edit `src/data/translatedPages.js`:

```javascript
export const translatedPages = {
  // ... existing mappings ...

  // Add new mapping:
  "/tax-identification-number/germany-tax-id-guide": {
    es: "/numero-identificacion-fiscal/guia-steuernummer-alemania",
  },
};
```

> [!CAUTION]
>
> ### Critical: Mapping Keys Must Match English `id` Frontmatter
>
> The **key** in `translatedPages.js` must be the `id` from the **English source file's frontmatter**, prefixed with the doc path. This is NOT the filename!
>
> **Example**: If `docs/how-to-verify/ein-us.md` has `id: ein-verification-united-states`, then the key must be:
>
> ```javascript
> '/how-to-verify/ein-verification-united-states': {  // ← id, not filename!
>   es: '/como-verificar/verificacion-ein-estados-unidos',
> }
> ```
>
> **Incorrect** (causes "hallucinated URLs"):
>
> ```javascript
> '/how-to-verify/ein-us': { ... }  // ✗ This is the filename, not the id!
> ```

## Step 6: Tag Management

If you added new tags in the frontmatter (e.g., `alemania`), you must define them in the localized `tags.yml` or the build will warn/fail.

Edit `i18n/es/docusaurus-plugin-content-docs/current/tags.yml`:

```yaml
alemania:
  label: Alemania
  description: Guía completa sobre el Steuernummer de Alemania...
```

---

## Critical Lessons Learned

> [!IMPORTANT]
> These rules were learned from production issues. Follow them strictly.

### 1. Translation Fidelity: Never Trim Content

When translating, **preserve 100% of the English source structure**. Do not:

- Summarize or condense sections
- Remove examples, tables, or lists
- Skip "less important" sections

**Verification**: Compare file sizes. Translated files should be similar size (±20%) to the English source. Use:

```powershell
Get-Item "docs/path/to/english.md", "i18n/[locale]/docusaurus-plugin-content-docs/current/path/to/translated.md" | Select-Object Name, Length
```

### 2. AlsoAvailable Component: Use Auto-Detect Only

**Always use the self-closing tag**: `<AlsoAvailable />`

**Never use legacy syntax**:

```jsx
// ✗ BAD - Legacy syntax causes inconsistent display
<AlsoAvailable lang="en" href="/docs/..." />
<AlsoAvailable lang="es" href="/docs/es/..." />

// ✓ GOOD - Auto-detect shows all available translations
<AlsoAvailable />
```

### 3. AlsoAvailable Labels Must Be Localized

The component label "This post is also available in:" must be translated for each locale.

If adding a new locale, update `src/components/AlsoAvailable.js`:

```javascript
const translations = {
  en: "This post is also available in",
  es: "Esta página también está disponible en",
  "zh-Hans": "本文还提供以下语言版本",
  de: "Dieser Beitrag ist auch verfügbar in",
  pt: "Esta página também está disponível em",
  // Add new locale here
};

const languageNames = {
  en: "English",
  es: "Español",
  "zh-Hans": "中文",
  de: "Deutsch",
  pt: "Português",
  // Add new locale here
};
```

### 4. File Content Must Match Frontmatter ID

If a file has `id: acn` (Australia Company Number), the **content must be about ACN**, not something else.

**Real example of a bug**: A Portuguese file had:

- Frontmatter: `id: acn` (pointing to Australia content)
- Actual content: China USCI information

**Fix**: Either correct the content OR create a separate file with the correct `id`.

### 5. Deduplication Before Adding Mappings

Before adding a new mapping to `translatedPages.js`:

1. Search for similar existing entries
2. Check for both id-based and filename-based keys
3. Consolidate if duplicates exist

```powershell
# Search for existing mappings
Select-String -Path "src/data/translatedPages.js" -Pattern "cpf|cnpj|ein" -CaseSensitive:$false
```

---

## Step 7: Build and Verify

```bash
npm run build 2>&1 | Select-String -Pattern "broken|error"
```

### Verification Checklist

1. **Broken Links**: Ensure build has 0 broken links.
2. **Language Switcher**: Go to the English page, switch to Spanish. It should take you to your **new custom slug**.
3. **AlsoAvailable**: Should appear and function correctly, with localized label text.
4. **Content Parity**: Compare file sizes to English source (should be ±20%).
5. **No Duplicate Mappings**: Run `npm run build` and check for warnings about duplicate routes.
