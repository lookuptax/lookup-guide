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

| File                                                      | Purpose                         |
| --------------------------------------------------------- | ------------------------------- |
| `src/data/translatedPages.js`                             | Mapping for hreflang generation |
| `src/components/AlsoAvailable.js`                         | Cross-language link component   |
| `src/components/HreflangTags.js`                          | Generates hreflang meta tags    |
| `src/components/SmartLocaleDropdown.js`                   | Custom language switcher        |
| `src/components/HomepageFeatures/index.js`                | Locale-aware homepage features  |
| `i18n/es/docusaurus-plugin-content-docs/current/`         | Spanish doc translations        |
| `i18n/es/docusaurus-plugin-content-docs/current/tags.yml` | Tag SEO descriptions            |
| `i18n/es/docusaurus-plugin-content-pages/index.js`        | Spanish homepage                |
| `i18n/es/code.json`                                       | Theme string translations       |

---

## Architecture Summary

### Components Created

| Component               | Purpose                                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SmartLocaleDropdown** | Custom language switcher that redirects to locale homepage (`/docs/` or `/docs/es/`). Uses raw `<a>` tags to avoid Docusaurus link processing issues. |
| **HreflangTags**        | Generates hreflang meta tags only for pages with confirmed translations (uses `translatedPages.js` mapping).                                          |
| **AlsoAvailable**       | Shows "Also available in [language]" link with explicit URL support for localized slugs.                                                              |
| **HomepageFeatures**    | Locale-aware component that shows Spanish or English features based on current locale.                                                                |

### SEO Best Practices Applied

1. **Localized slugs** - Spanish keywords in URL for vernacular SEO
2. **Hreflang tags** - Only on pages with actual translations (Google best practice)
3. **x-default** - Points to English version
4. **Localized metadata** - Spanish title, description, keywords in frontmatter
5. **Cross-language links** - "Also available in..." for discoverability
6. **Tag SEO** - `tags.yml` provides meta descriptions for tag pages
7. **Theme translations** - `code.json` translates all Docusaurus theme strings

### URL Structure

| Locale  | Homepage    | Tax ID Guide (Mexico)                                   |
| ------- | ----------- | ------------------------------------------------------- |
| English | `/docs/`    | `/docs/tax-identification-number/mexico-tax-id-guide`   |
| Spanish | `/docs/es/` | `/docs/es/numero-identificacion-fiscal/guia-rfc-mexico` |

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
