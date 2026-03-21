# JSON-LD Schema Templates for LookupTax

Reference templates for each page type. Read this when implementing or auditing JSON-LD.

## Table of Contents
1. [FAQPage (Country Hubs)](#faqpage)
2. [HowTo (Verification Guides)](#howto)
3. [GovernmentService (Official Verification)](#governmentservice)
4. [TechArticle (SDK/API Docs)](#techarticle)
5. [Dataset (Rates/Codes)](#dataset)
6. [SoftwareApplication (Product Pages)](#softwareapplication)

---

## FAQPage

Use for country tax ID pages and country hub pages that have a visible FAQ section.

```jsx
import Head from "@docusaurus/Head";

<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What happens if I invoice without a valid German USt-IdNr?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Invoices without a valid USt-IdNr may be rejected by the recipient's ERP system. Under §14 UStG, the seller may also lose the right to charge VAT, resulting in the tax authority treating the amount as gross (reducing your revenue by the VAT portion)."
          }
        },
        // ... more Q&A pairs (only for visible FAQ content)
      ]
    })}
  </script>
</Head>
```

**Rules:**
- Only include questions that are visibly rendered on the page
- Never invent questions — each must correspond to an H3 in the FAQ section
- Answers must match visible text (can be slightly condensed but not fabricated)

---

## HowTo

Use for verification guides, integration guides, and SDK how-to pages.

```jsx
<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Verify an Australian ABN",
      description: "Step-by-step guide to verify Australian Business Numbers using the official ABR portal and the LookupTax API.",
      totalTime: "PT2M",
      step: [
        {
          "@type": "HowToStep",
          name: "Navigate to the ABR Lookup portal",
          text: "Go to abr.business.gov.au and click 'ABN Lookup'. The portal is free and does not require login.",
          url: "https://abr.business.gov.au",
          image: "https://lookuptax.com/docs/img/abn-lookup-portal.png"
        },
        {
          "@type": "HowToStep",
          name: "Enter the ABN",
          text: "Enter the 11-digit ABN (e.g., 49160299865) in the search box. The system accepts ABN with or without spaces.",
        },
        {
          "@type": "HowToStep",
          name: "Complete the security check",
          text: "Solve the CAPTCHA if prompted. This is required for automated lookups but may not appear for manual searches."
        },
        {
          "@type": "HowToStep",
          name: "Review the results",
          text: "The system returns: Entity Name, ABN Status (Active/Cancelled), Entity Type, GST Registration status, and Main Business Location."
        }
      ]
    })}
  </script>
</Head>
```

**Rules:**
- One `HowToStep` per visible numbered step — strict 1:1 mapping
- Include example inputs and result details in `text`
- If the process has a CAPTCHA, include it as an explicit step
- Only schema the primary/official method if multiple methods exist

---

## GovernmentService

Use for "how to verify" pages that describe an official government verification portal.

```jsx
<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      name: "VIES VAT Number Validation",
      description: "Official European Commission service for verifying VAT identification numbers of EU member states.",
      serviceType: "Tax ID Verification",
      provider: {
        "@type": "GovernmentOrganization",
        name: "European Commission - Taxation and Customs Union",
        url: "https://ec.europa.eu/taxation_customs/"
      },
      areaServed: {
        "@type": "Place",
        name: "European Union"
      },
      url: "https://ec.europa.eu/taxation_customs/vies/"
    })}
  </script>
</Head>
```

**When to combine with HowTo:** If the page is a step-by-step guide to using a government service, include both `GovernmentService` and `HowTo` as separate JSON-LD blocks.

---

## TechArticle

Use for SDK documentation, API guides, and developer-focused content.

```jsx
<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: "How to Validate VAT Numbers in Python",
      description: "Complete guide to integrating LookupTax VAT validation API in Python applications with code examples, error handling, and batch validation patterns.",
      proficiencyLevel: "Beginner",
      dependencies: "Python 3.8+, requests library",
      keywords: "Python VAT validation, VAT API Python, tax ID verification Python",
      author: {
        "@type": "Organization",
        name: "LookupTax",
        url: "https://lookuptax.com"
      },
      publisher: {
        "@type": "Organization",
        name: "LookupTax",
        url: "https://lookuptax.com"
      }
    })}
  </script>
</Head>
```

---

## Dataset

Use for VAT rate tables, tax code lookup pages, and structured reference data.

```jsx
<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "EU VAT Rates by Country (2025)",
      description: "Standard, reduced, and super-reduced VAT rates for all 27 EU member states, updated quarterly from official sources.",
      url: "https://lookuptax.com/docs/vat/eu-vat-rates",
      keywords: ["EU VAT rates", "European VAT", "value added tax rates"],
      temporalCoverage: "2025",
      spatialCoverage: {
        "@type": "Place",
        name: "European Union"
      },
      creator: {
        "@type": "Organization",
        name: "LookupTax",
        url: "https://lookuptax.com"
      },
      license: "https://lookuptax.com/docs/terms-conditions"
    })}
  </script>
</Head>
```

---

## SoftwareApplication

Use for the main product/homepage (Astro site, not Docusaurus — included here for reference).

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LookupTax",
  "description": "Global API for real-time VAT validation, tax ID verification, and tax compliance — sourced directly from official government databases.",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free trial available"
  },
  "author": {
    "@type": "Organization",
    "name": "LookupTax",
    "url": "https://lookuptax.com"
  }
}
```
