---
description: How to add a new Spanish translation for a page
---

# Adding a New Spanish Translation

This guide covers all the steps needed to properly translate a page to Spanish with correct SEO setup.

## Quick Checklist

- [ ] Create Spanish markdown file in `i18n/es/docusaurus-plugin-content-docs/current/`
- [ ] Add Spanish `slug` in frontmatter (SEO-friendly Spanish URL)
- [ ] Translate title, description, keywords in frontmatter
- [ ] Add Spanish tags in frontmatter
- [ ] Add `AlsoAvailable` component linking to English version
- [ ] Update English page with `AlsoAvailable` component linking to Spanish version
- [ ] Add mapping to `src/data/translatedPages.js` for hreflang
- [ ] Add tag definitions to `tags.yml` (if using new tags)
- [ ] Build and verify no broken links

---

## Step 1: Create Spanish File

Copy the English file to the Spanish i18n folder:

```
docs/tax-identification-number/germany.md
  ↓ copy to ↓
i18n/es/docusaurus-plugin-content-docs/current/tax-identification-number/germany.md
```

## Step 2: Update Spanish Frontmatter

```yaml
---
id: germany-tax-id-guide # Keep same ID as English (for Docusaurus pairing)
slug: /numero-identificacion-fiscal/guia-steuernummer-alemania # Spanish SEO slug
title: Guía del Steuernummer en Alemania
keywords: [Steuernummer, Alemania, número fiscal, USt-IdNr]
sidebar_label: Alemania
description: Guía completa sobre el número de identificación fiscal en Alemania...
tags:
  - Alemania
  - Steuernummer
---
```

### Slug Naming Convention

- Use `/numero-identificacion-fiscal/guia-[local-tax-id]-[country]`
- Examples:
  - Mexico: `/numero-identificacion-fiscal/guia-rfc-mexico`
  - Germany: `/numero-identificacion-fiscal/guia-steuernummer-alemania`

## Step 3: Add AlsoAvailable Component

### In Spanish file (link to English):

```jsx
import AlsoAvailable from "@site/src/components/AlsoAvailable";

<AlsoAvailable
  lang="en"
  href="/docs/tax-identification-number/germany-tax-id-guide"
/>;
```

### In English file (link to Spanish):

```jsx
import AlsoAvailable from "@site/src/components/AlsoAvailable";

<AlsoAvailable
  lang="es"
  href="/docs/es/numero-identificacion-fiscal/guia-steuernummer-alemania"
/>;
```

> **Important**: Always use explicit `href` prop since Spanish pages have different slugs.

## Step 4: Update Translation Mapping (for hreflang)

Edit `src/data/translatedPages.js`:

```javascript
export const translatedPages = {
  // Existing translations...
  "/tax-identification-number/mexico-tax-id-guide":
    "/numero-identificacion-fiscal/guia-rfc-mexico",

  // Add new translation:
  "/tax-identification-number/germany-tax-id-guide":
    "/numero-identificacion-fiscal/guia-steuernummer-alemania",
};
```

This enables proper hreflang tags for SEO (only generated for pages with confirmed translations).

## Step 5: Add Tag SEO Descriptions (if using new tags)

Edit `i18n/es/docusaurus-plugin-content-docs/current/tags.yml`:

```yaml
alemania:
  label: Alemania
  description: Guía completa sobre el Steuernummer de Alemania. Cómo obtener, validar y consultar el número fiscal alemán.

steuernummer:
  label: Steuernummer
  description: Steuernummer - Número de identificación fiscal de Alemania. Formato, validación y consulta.
```

This adds SEO meta descriptions to tag pages like `/docs/es/tags/alemania`.

## Step 6: Translate Content

- Translate all headings and body text
- Keep technical terms (RFC, CUIT, VAT) as-is where appropriate
- Update any internal links to point to Spanish versions if they exist

## Step 7: Build and Verify

```bash
// turbo
npm run build
```

Check for:

- No broken link warnings for your new page
- Spanish page accessible at the new slug URL
- AlsoAvailable links work in both directions

---

## File Reference

| File                                                      | Purpose                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- |
| `src/data/translatedPages.js`                             | Mapping for hreflang generation                           |
| `src/components/AlsoAvailable.js`                         | Cross-language link component                             |
| `src/components/HreflangTags.js`                          | Generates hreflang meta tags                              |
| `src/components/SmartLocaleDropdown.js`                   | Custom language switcher with CSS hover dropdown          |
| `src/components/HomepageFeatures/index.js`                | Locale-aware homepage features                            |
| `src/theme/DocTagDocListPage/index.js`                    | Custom tag page with locale-aware titles and descriptions |
| `src/theme/DocTagsListPage/`                              | Custom tags list page                                     |
| `i18n/es/docusaurus-plugin-content-docs/current/`         | Spanish doc translations                                  |
| `i18n/es/docusaurus-plugin-content-docs/current/tags.yml` | Tag SEO descriptions (24 tags)                            |
| `i18n/es/docusaurus-plugin-content-pages/index.js`        | Spanish homepage                                          |
| `i18n/es/code.json`                                       | Theme string translations                                 |

---

## Architecture Summary

### Components and Theme Overrides

| Component/Override      | Purpose                                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SmartLocaleDropdown** | Custom language switcher using CSS hover dropdown. Redirects to locale homepage (`/docs/` or `/docs/es/`) with hardcoded URLs to avoid Docusaurus link processing issues. |
| **HreflangTags**        | Generates hreflang meta tags only for pages with confirmed translations (uses `translatedPages.js` mapping).                                                              |
| **AlsoAvailable**       | Shows "Also available in [language]" link with explicit URL support for localized slugs.                                                                                  |
| **HomepageFeatures**    | Locale-aware component that shows Spanish or English features based on current locale.                                                                                    |
| **DocTagDocListPage**   | Theme override for tag pages. Provides locale-aware titles ("Guías de [tag] - Número de identificación fiscal") and descriptions.                                         |

### SEO Best Practices Applied

1. **Localized slugs** - Spanish keywords in URL for vernacular SEO
2. **Hreflang tags** - Only on pages with actual translations (Google best practice)
3. **x-default** - Points to English version
4. **Localized metadata** - Spanish title, description, keywords in frontmatter
5. **Cross-language links** - "Also available in..." for discoverability
6. **Tag page SEO** - `tags.yml` provides meta descriptions for tag pages
7. **Tag page titles** - `DocTagDocListPage` override provides Spanish headings and titles
8. **Theme translations** - `code.json` translates all Docusaurus theme strings

### URL Structure

| Locale  | Homepage    | Tax ID Guide (Mexico)                                   | Tag Page (AFIP)      |
| ------- | ----------- | ------------------------------------------------------- | -------------------- |
| English | `/docs/`    | `/docs/tax-identification-number/mexico-tax-id-guide`   | `/docs/tags/afip`    |
| Spanish | `/docs/es/` | `/docs/es/numero-identificacion-fiscal/guia-rfc-mexico` | `/docs/es/tags/afip` |

---

## Current Translated Pages

| English Page     | Spanish URL                                                  |
| ---------------- | ------------------------------------------------------------ |
| Mexico Tax ID    | `/docs/es/numero-identificacion-fiscal/guia-rfc-mexico`      |
| Argentina Tax ID | `/docs/es/numero-identificacion-fiscal/guia-cuit-argentina`  |
| Colombia Tax ID  | `/docs/es/numero-identificacion-fiscal/guia-nit-colombia`    |
| Chile Tax ID     | `/docs/es/numero-identificacion-fiscal/guia-rut-chile`       |
| Peru Tax ID      | `/docs/es/numero-identificacion-fiscal/guia-ruc-peru`        |
| Ecuador Tax ID   | `/docs/es/numero-identificacion-fiscal/guia-ruc-ecuador`     |
| Venezuela Tax ID | `/docs/es/numero-identificacion-fiscal/guia-rif-venezuela`   |
| Uruguay Tax ID   | `/docs/es/numero-identificacion-fiscal/guia-rut-uruguay`     |
| Brazil Tax ID    | `/docs/es/numero-identificacion-fiscal/guia-cnpj-cpf-brasil` |

---

## Tags with SEO Descriptions (tags.yml)

The `i18n/es/docusaurus-plugin-content-docs/current/tags.yml` file includes SEO descriptions for:

- **Countries**: Argentina, México, Chile, Colombia, Perú, Ecuador, Venezuela, Uruguay, Brasil
- **Tax IDs**: RFC, CUIT, RUT, RUC, NIT, RIF, CNPJ, CPF
- **Agencies**: SAT, AFIP, SII, DIAN, SUNAT, SRI, SENIAT, DGI

---

## Translating "How to Verify" Pages

### Folder Structure

```
docs/how-to-verify/gstin-verification-india.md
  ↓ copy to ↓
i18n/es/docusaurus-plugin-content-docs/current/how-to-verify/gstin-verification-india.md
```

### Slug Convention for How to Verify

Use: `/como-verificar/verificacion-[tax-id]-[country]`

Examples:

- GSTIN India: `/como-verificar/verificacion-gstin-india`
- VAT EU: `/como-verificar/verificacion-iva-union-europea`
- RFC Mexico: `/como-verificar/verificacion-rfc-mexico`

### Category Translation

Create `i18n/es/docusaurus-plugin-content-docs/current/how-to-verify/_category_.json`:

```json
{
  "label": "Cómo verificar IDs fiscales",
  "position": 5,
  "className": "category-how-to-verify"
}
```

---

## ⚠️ Important Gotchas (Lessons Learned)

### 1. Navbar Links

**Problem:** Using `to` prop for navbar links causes locale path prepending (`/docs/es/docs/...`).  
**Solution:** Use external `href` with full URL for links that should always go to English:

```javascript
{ href: "https://lookuptax.com/docs/category/verify-tax-ids", label: "How to Verify Tax IDs" }
```

### 2. Blog Posts

**Problem:** Untranslated blog posts appear in Spanish locale (bad SEO).  
**Solution:** Theme overrides (`BlogListPage`, `BlogPostPage`) + cleanup script handle this automatically.

### 3. Tag Pages

**Problem:** Tag page headings showed in English.  
**Solution:** `DocTagDocListPage` theme override checks locale and shows Spanish titles.

### 4. Tags Must Be Defined

**Warning:** Tags used in Spanish docs must be defined in `tags.yml` or you'll see warnings.  
Add new tags to `i18n/es/docusaurus-plugin-content-docs/current/tags.yml`.

### 5. Hreflang Mapping

**Reminder:** Every translated page must be added to `src/data/translatedPages.js` for proper hreflang tags.

---

## Build Process

The build script (`npm run build`) automatically:

1. Runs `prepare-i18n.js` - Marks untranslated docs as draft
2. Runs `docusaurus build` - Builds both locales
3. Runs `cleanup-es-blog.js` - Removes blog posts from Spanish build
