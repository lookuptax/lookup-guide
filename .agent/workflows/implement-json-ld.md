---
description: Guide for adding JSON-LD (HowTo, FAQPage) to verification guides for maximum GEO/SEO impact.
---

# Implement JSON-LD for Verification Guides

Follow this workflow strictly when adding or updating verification guides (e.g., `docs/how-to-verify/*.md`). This optimizes the page for Generative Engine Optimization (GEO) and SEO.

## 1. Content-First Audit & Refactor

**CRITICAL**: Google penalizes "Invisible Content". The schema MUST match the visible text. Before touching JSON-LD, you must audit the markdown content.

1.  **Granular Steps**: Does the guide have clear, numbered steps? If it's a dense paragraph (e.g., "Go to site and search"), **REFACTOR** it into explicit steps first.
2.  **Technical Hurdles**: Does the process require a Captcha or Security Check? (Check screenshots/context).
    - If YES, ensure there is a visible step: "Step X: Complete the security check/captcha."
    - This is high-trust signal for GEO.
3.  **Rich Details**: Ensure the guide explicitly lists:
    - **Example Inputs**: (e.g., "Enter '123456789' in the ID field")
    - **Result Details**: (e.g., "The system returns: Name, Status, Date...")
    - Note down these details; you will need them for the schema.

## 2. Interlinking Check

Check if a corresponding country guide exists in `docs/country/` OR `docs/tax-identification-number/` (e.g., if editing `abn.md`, check for `docs/country/australia.mdx` or `docs/tax-identification-number/australia.md`).

- **Action**: If it exists, add a semantic link early in the content or near the verification steps.
- **Format**: "For more details on taxes in [Country], see our [Country Guide](link)."

## 3. Implement JSON-LD

Use the `Head` component from Docusaurus.

```javascript
import Head from "@docusaurus/Head";
```

### A. HowTo Schema

Construct the `HowTo` schema.

- **@type**: `HowTo`
- **name**: Title of the guide (e.g., "How to verify Australia Business Number?").
- **description**: Brief summary (1-2 sentences).
- **step**: Array of `HowToStep`.
  - **Strict 1:1 Mapping**: Create one schema step for each VISIBLE number/header in the guide.
  - **Rich Text**: In the `text` property, include the **Example Inputs** and **Result Details** you identified in Step 1.
    - _Bad_: "Search for the company."
    - _Good_: "Enter the ABN (e.g., 49160299865) in the search box. The system will return the Entity Name, ABN Status, and GST Registration status."
  - **Images**: If the markdown has an image for a step, include it as an absolute URL (e.g., `https://lookuptax.com/docs/img/...`).
  - **Captchas**: If you added a Captcha step in Step 1, include it here.

### B. FAQPage Schema

- **Condition**: strict **Visible Content Only**.
- **Action**:
  - If `## FAQ` section exists: specific Q&A pairs to `FAQPage` schema.
  - If NO `## FAQ` section: **DO NOT** generate this schema. **DO NOT** invent questions. Skip this part.

## 4. Code Template

Insert this at the top of the file (after frontmatter/imports):

```jsx
<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "<Guide Title>",
      description: "<Guide Description>",
      totalTime: "PT2M",
      step: [
        {
          "@type": "HowToStep",
          name: "<Step 1 Title>",
          text: "<Step 1 Rich Description with Examples/Results>",
          image: "https://lookuptax.com/docs/img/..." /* Optional */,
          url: "https://..." /* Only if linking to external tool */,
        },
        /* ... repeat for all visible steps ... */
      ],
    })}
  </script>
  {/* Only include if FAQ section exists */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "<Question Text>",
          acceptedAnswer: {
            "@type": "Answer",
            text: "<Answer Text>",
          },
        },
      ],
    })}
  </script>
</Head>
```

## 5. Verification

- **Self-Correction**: Read the final code. Does the schema step count match the markdown step count exactly?
- **Rich Results**: Remind the user to test with [Google Rich Results Test](https://search.google.com/test/rich-results).
