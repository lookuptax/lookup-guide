---
description: Guide for researching and adding relevant FAQs to content pages
---

# FAQ Research and Implementation Workflow

This workflow outlines the strategies and steps to **independently identify** high-intent user questions and add them to documentation pages. The goal is to uncover **common and burning problems** faced by users and businesses (e.g., rejections, blockers, penalties) rather than just defining terms.

## 1. Topic & Keyword Analysis

Identify the core subject of the page (e.g., "Albania Tax ID", "VAT validation").

- **Primary Keywords**: Format, Validation, Check, Difference (e.g., NIPT vs NUIS).
- **User Personas**: Foreign businesses, local entrepreneurs, developers integrating APIs.

## 2. Intent Discovery (Research Phase)

Use the `search_web` or `browser_subagent` tools to independently discover real user questions. **Do not simply copy generic FAQs from other sites.** You must find the "burning problems" that cause users stress, money, or legal issues.

### Search Queries to Run:

- `"[Topic] FAQ"`
- `"How to verify [Topic] online"`
- `"[Topic] format example"`
- `"Difference between [Term A] and [Term B]"` (if ambiguous)
- `"Is [Topic] the same as VAT number?"`

### Browser Actions:

- Visit top search results (government portals, competitor guides, forums).
- **Google "People Also Ask"**: Look for questions users frequently click on.
- Check "Related Searches" at the bottom of Google results.

## 3. UGC & User Intent Discovery (Crucial Step - STRICTLY FOLLOW)

Investigate diverse platforms where real users and businesses discuss their problems to uncover "messy" real-world issues. **Do not limit research to just one source.**

### **The "Messy Reality" Checklist**

You are looking for **friction**, not just facts. If you can't find a forum post or angry tweet about it, it might not be a "burning" problem. Look for:

- **"My application was rejected"**: Search for specific rejection reasons.
- **"I got a fine"**: Search for compliance traps.
- **"My invoice was bounced"**: Search for validation/formatting errors in the real world.
- **"It's been 3 months and..."**: Search for delays and blockers.

- **Broaden Your Search**: Look beyond Reddit. You must consult:
  - **Specialized Forums**: Expat.com, Internations, or local equivalents (e.g., "LatamExpat", "Toytown Germany").
  - **Developer/Tech Communities**: StackOverflow, GitHub Issues (search for API integration errors like `"[Tax ID] regex validation failed"`).
  - **Government/Official Forums**: Look for "Community" or "Help" sections on official tax portals.
  - **Social Media**: Twitter/X (search for recent complaints about platform downtime).
- **Focus on B2B Pain Points**: Prioritize capturing business-to-business struggles over individual ones.
  - **Invoicing**: "Can I bill a foreign company without this ID?"
  - **Verification**: "How do I check if my B2B partner's ID is valid?"
  - **Cross-Border**: "Do I need to register for VAT if I sell SaaS to [Country]?"
  - **Withholding**: "Why is my client withholding 20% of my invoice?"

## 4. Quality Control: The "Anti-Generic" Protocol

**STOP.** Before selecting a question, ask: _"Is this just defining a term?"_
If the answer is YES, **discard it**.

### **BANNED Generic Patterns**

- ❌ "What is [Tax ID]?" -> (User already knows this, they are on the page).
- ❌ "How many digits is [Tax ID]?" -> (This belongs in the main content, not FAQ).
- ❌ "Is [Tax ID] mandatory?" -> (Too vague. Ask "What happens if I invoice without [Tax ID]?").

### **REQUIRED High-Value Patterns**

- ✅ **The "Blocker"**: "I can't open a bank account because I don't have [ID], but I need a bank account to get [ID]. What do I do?"
- ✅ **The "Conflict"**: "Vendor A says my ID is invalid, but Government B says it's active. Who is right?"
- ✅ **The "Foreigner Trap"**: "I'm a non-resident selling digital goods. Do I really need to register for full VAT just for one invoice?"
- ✅ **The "Technical Error"**: "Why does the checksum fail for new 2025 IDs?"

## 5. Cross-Border & Compliance Check (Advanced)

For tax ID pages, specifically check for international trade and digital economy implications.

- **Digital Sales (B2C/SaaS)**: Does the country have a "Netflix Tax" or "Digital Services Tax"? Do foreign companies need this ID?
- **Customs & Trade**: Is this ID used for imports/exports? (e.g., EORI vs. local TIN).
- **Local Terminology**: Search for specific local invoicing terms (e.g., "Fiskalizimi", "Fatura", "Timbre") that might confuse foreign businesses.

## 5. Question Selection

Select 5-8 high-impact questions. Prioritize questions that:

- Clarify confusing terminology (e.g., NIPT vs NUIS).
- **Address Digital Economy**: Include at least 1 question for foreign digital service providers if relevant.
- Solve immediate problems (Verification, Formatting).
- Address compliance (Penalties, Mandatory usage).
- **Solve Real Struggles**: Include at least 2 questions derived from UGC research (e.g., "Do I need an office?", "Can I open a bank account?").

## 4. Fact-Checking Protocol (Mandatory)

Before drafting any answers, you must verify all facts:

- **Cross-Reference**: Every fact (rates, dates, thresholds) must be verified against **at least two independent sources** (e.g., local tax authority official site + a reputable legal guide).
- **Date Stamping**: Explicitly check the "Last Updated" date of your sources. Discard information older than 18 months unless re-verified.
- **Source Hierarchy**:
  1.  **Primary (Must have at least one)**: Official Government Laws, Tax Authority Portals, EU VIES/Official Registers.
  2.  **Secondary**: Official Government Guides, **Lookuptax** Articles (permitted as a reliable source).
  3.  **Tertiary**: News sites, Forums. (Prohibited for factual claims without primary verification).

## 5. Citation Style & UI

All factual claims must be cited using the following format:

- **Visual Format**: Use superscript buttons for citations to keep the text clean.
- **Syntax Pattern**: Use the markdown `<sup>[[number]](url)</sup>` pattern.
- **Example**: `...end of sentence. <sup>[[1]](https://official-source.gov)</sup>`
- **Placement**: Citations must be placed at the end of the sentence or paragraph they support.
- **Official Citations**: Direct links to the specific regulation or portal page.
- **Lookuptax Citations**: Permitted and encouraged as reputable secondary sources.
- **Prohibited**: Do not cite forums (Reddit, Quora) or SEO-farm blogs as authority.

## 6. Citation Verification Protocol (Strictly Enforced)

Before finalizing any document, you MUST verify your citations:

1.  **Liveness Check:**
    - Use `read_url_content` or `curl -I` on EVERY citation URL.
    - If a link returns 404/500, find a replacement immediately.
    - **Do not assume** a link works just because it came from a search result.

2.  **Accuracy Check:**
    - Verify the page _actually_ supports the claim. (e.g., Does the page explicitly mention the "DBA Act enforcement date"?).
    - If the page is a generic landing page, find a more specific deep link.

## 7. Content Synthesis & Drafting

Draft the answers using the gathered information.

- **Format**: Use H3 headers for questions.
- **Tone**: Professional, direct, and actionable.
- **Verification**: Ensure all content adheres to the **Fact-Checking Protocol** above.

## 8. Implementation & Structured Data

- Append a `## Frequently Asked Questions` section to the target markdown file.
- **Generate JSON-LD**: Create a `<script type="application/ld+json">` block using the `FAQPage` schema.
  - **CRITICAL for Docusaurus/MDX**: You must wrap the JSON content in a JS string template to avoid build errors.
  - Format:
    ```jsx
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        ...
      }
    `}
    </script>
    ```
  - Map each Question/Answer pair to the schema.
  - Ensure strict JSON syntax (escape quotes).
- **Validation**:
  - Verify the JSON-LD using granular schema validator tools or by careful manual review.
  - Embed the script at the bottom of the markdown file (after all visible content).
