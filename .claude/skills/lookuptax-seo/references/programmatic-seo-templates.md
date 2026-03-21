# Programmatic SEO Page Templates

Reference for creating template-based landing pages at scale. Each template must produce **unique, substantive content** — not just variable substitution.

## Table of Contents
1. [SDK/Language Landing Pages](#sdklanguage-landing-pages)
2. [Tax ID Entity Hub Pages](#tax-id-entity-hub-pages)
3. [Comparison Pages](#comparison-pages)

---

## SDK/Language Landing Pages

**URL pattern**: `/docs/{language}-vat-validation`
**Title pattern**: "How to Validate VAT Numbers in {Language} — Code Examples & API Guide"
**Schema**: `TechArticle` or `HowTo`

### Required Sections (each must have language-specific content)

```markdown
---
id: {language}-vat-validation
title: "How to Validate VAT Numbers in {Language}"
description: "Complete guide to VAT number validation in {Language} using the LookupTax API. Includes code examples, error handling, and batch validation."
keywords: [{Language} VAT validation, VAT API {Language}, tax ID verification {Language}, {package-manager} VAT]
tags:
  - {language}
  - API
  - developer
---

## Quick Start
- Package installation ({pip/npm/maven/gem/go get/nuget} command)
- API key setup
- First validation call (3-5 lines of idiomatic code)

## Single VAT Validation
- Full code example with imports, error handling, and response parsing
- Language-idiomatic patterns (async/await for JS, context managers for Python, etc.)

## Batch Validation
- How to validate multiple VAT numbers efficiently
- Rate limiting and retry logic in that language's idiom
- Concurrent/parallel processing pattern (asyncio, goroutines, CompletableFuture, etc.)

## Error Handling
- Language-specific exception/error handling patterns
- Common error codes and what they mean
- Retry strategies

## Framework Integration
- {Django/Express/Spring/Rails/Gin/ASP.NET} specific integration
- Middleware or decorator patterns for automatic validation

## Response Format
- Example API response with typed model (dataclass, interface, struct, etc.)

## FAQ
- "Does LookupTax have an official {Language} SDK?"
- "How do I handle rate limits in {Language}?"
- "Can I validate VAT numbers offline with regex before calling the API?"
```

### Language-Specific Differentiation

Each page MUST include content unique to that language ecosystem:

| Language | Unique Content |
|----------|---------------|
| Python | asyncio batch example, Django middleware, type hints with Pydantic models |
| Node.js | Express middleware, TypeScript types, Promise.allSettled for batch |
| PHP | Laravel service provider, Guzzle HTTP client, Composer package |
| Java | Spring Boot integration, Maven/Gradle setup, CompletableFuture batch |
| Ruby | Rails concern, Faraday HTTP, gem creation pattern |
| Go | goroutine batch validation, context cancellation, struct tags |
| C# | ASP.NET middleware, NuGet package, HttpClient with Polly retry |

---

## Tax ID Entity Hub Pages

**Purpose**: Definitive source of truth for a specific tax identifier.

### Hub Structure

```
/docs/tax-identification-number/{country}-tax-id-guide  (HUB)
  ├── Format & structure (regex, checksum, examples)
  ├── How to obtain / register
  ├── How to verify (link to verification guide spoke)
  ├── Cross-border usage (EU VAT, customs/EORI)
  ├── Digital services implications
  ├── Common issues & FAQs (UGC-researched)
  └── Related identifiers (links to spoke pages)
```

### Spoke Pages (link back to hub with descriptive anchors)

```
/docs/how-to-verify/{country}-{id}       → "Verify your {ID} on the official {Country} portal"
/docs/how-to-register/{country}-{id}     → "Register for a {ID} in {Country}"
/docs/einvoicing/{country}               → "{Country} e-invoicing requirements and {ID} usage"
/docs/country/{country}-guidelines       → "Complete {Country} tax compliance guide"
/docs/vat/{country}-vat-rates            → "Current {Country} VAT rates"
```

### Hub-to-Spoke Anchor Text Examples

Good (descriptive, keyword-rich):
- "Learn how to verify your German USt-IdNr on the official BZSt portal"
- "See current German VAT rates and reduced rate categories"
- "Automate German VAT validation with our API"

Bad (generic):
- "Click here"
- "Read more"
- "See our guide"

---

## Comparison Pages

**URL pattern**: `/docs/explainers/{competitor}-vs-lookuptax`
**Title pattern**: "{Competitor} vs LookupTax: Real-Time VAT Validation Compared"
**Schema**: `TechArticle`

### Required Sections

```markdown
## Overview
Brief, factual comparison. Lead with LookupTax's differentiator (real-time official source data).

## Feature Comparison Table
| Feature | LookupTax | {Competitor} |
|---------|-----------|--------------|
| Data source | Real-time official government databases | Cached/third-party |
| Update frequency | Real-time | {frequency} |
| Countries covered | 100+ | {number} |
| Audit trail | Full timestamp + source | {details} |
| GDPR compliant | Yes | {details} |

## Why Data Freshness Matters
Explain the risk of cached data in audit scenarios. Real example: a VAT number that was
valid last month but deregistered this week — cached APIs still return "valid", leading
to invoice rejection and potential penalties.

## Migration Guide
How to switch from {Competitor} to LookupTax (API compatibility, code examples).
```

**Content rules for comparison pages:**
- Be factual, not disparaging — let the data speak
- Focus on data integrity risks (the moat), not feature checklists
- Include "When {Competitor} might be better" section for credibility (E-E-A-T trust signal)
- Cite specific regulatory requirements that demand real-time verification
