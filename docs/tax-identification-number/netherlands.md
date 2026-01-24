---
id: netherlands-tax-id-guide
title: Netherlands TIN number guide
keywords: [TIN, Find BSN, Tax ID, Netherlands]
sidebar_label: Netherlands
description: Learn about TIN number in Netherlands. Use Lookuptax for hassle-free tax id validation in Netherlands and other 100+ countries
tags:
  - Netherlands
  - TIN
---

## Citizen service number (BSN)(Burgerservicenummer)

The Citizen Service Number (BSN) is an exclusive personal identifier assigned to individuals registered in the Personal Records Database (BRP). Automatic allocation of a BSN occurs for every individual upon registration with the BRP.A BSN is comprised of 8 or 9 digits.The citizen service number has replaced the tax and social insurance number (sofinummer).

**BSN Format**
The Dutch Tax Identification Number (TIN) consists of 9 digits, for example, 999999999. It adheres to specific validation rules and a check digit verification process outlined as follows:

The TIN always comprises 9 digits: N1, N2, N3, N4, N5, N6, N7, N8, N9, where N9 serves as the check digit.

Algorithm for check digit calculation:
((N19) + (N28) + (N37) + (N46) + (N55) + (N64) + (N73) + (N82)) modulo 11
Check digit (N9) equals the remainder from the above algorithm.

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/id-netherlands-front.jpg" alt="ID card Front"  title="ID card Front"/>
  </td><td>
  <img src="/docs/img/taxid/id-netherlands-back.jpg" alt="ID card Back"  title="ID card Back"/>
  </td></tr>
  <tr><td align="center">ID card Front</td><td align="center">ID card Back</td></tr>
</table>

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/dl-netherlands-front.jpg" alt="ID card Front"  title="Driving license Front"/>
  </td><td>
  <img src="/docs/img/taxid/dl-netherlands-back.jpg" alt="ID card Back"  title="Driving license Back"/>
  </td></tr>
  <tr><td align="center">Driving license Front</td><td align="center">Driving license Back</td></tr>
</table>

Official Database - [BSN Search](https://www.netherlandsworldwide.nl/mijnoverheid-abroad/how-to-login) . This requires a login using DigiD.

Official Database - [Handelsregister for enitity search](https://www.handelsregister.de/rp_web/normalesuche.xhtml)

## Btw-identificatienummer (btw-id)

Commonly known as VAT identification (VAT ID), btw-id is a crucial component in your interactions with customers and suppliers, signifying your status as a VAT-registered entrepreneur. This identifier, consisting of specific elements, is utilized on your stationery, invoices, and website to highlight your VAT registration.

**Btw-id Format**

The format of VAT ID in Netherlands is as follows:

- Country code: NL
- 9 digits
- Letter B
- 2 digits, commonly referred to as 'subnumber'

An illustration of a VAT ID is NL123456789B01.

## Omzetbelastingnummer (ob-nummer)

The VAT (sales) tax number(Omzetbelastingnummer), also known as the turnover tax number, is composed of either the Legal Entities and Partnerships Information Number (RSIN) or your Citizen Service Number (BSN). Following this, there is a code consisting of 3 characters, falling between B01 and B99. An illustrative example is 123456789B01. This particular number is utilized in all communication with the Tax Administration.

**Ob-nummer Format**

The sales tax number, also referred to as the OB number, is exclusively employed when you get in touch with the tax authorities, be it through writing a letter or calling the Tax Telephone. The format of your OB number is as follows:

- 9 digits, which are the Citizen Service Number (BSN) if you are self-employed
- The letter B
- 2 digits, also known as the 'subnumber'

An illustrative example of an OB number is 111234567B01.

## Kamer van Koophandel nummer (KVK)

The Kamer van Koophandel (KVK) is the Chamber of Commerce in the Netherlands.Upon registering your business in the Dutch Business Register (Handelsregister), you are assigned an 8-digit KVK number. This KVK number serves as evidence of your registration with the Netherlands Chamber of Commerce (KVK), affirming your official business status. Merchants are obliged to state the KVK number on: letters, invoices, quotations, websites, business emails.

When you register your company with the Dutch Chamber of Commerce (KVK), you receive your KVK number, an 8-digit identifier that appears on your Business Register extract, serving as proof of your business registration with the KVK. Subsequently, the Tax and Customs Administration (Belastingdienst) is notified by KVK, and within 3 weeks, you are sent your VAT (btw) identification number (btw-id) and VAT number (btw-nummer) by post. The VAT number, consisting of 14 digits, includes the btw-id. Both the KVK number and VAT number are mandatory to be included on your invoices, with the KVK number obtained during the initial registration and the VAT number provided afterward for tax-related transactions.

Official database - [KVK Search](https://www.kvk.nl/zoeken/)

---

**How [Lookuptax](https://lookuptax.com/) can help you in VAT validation?**

**Lookuptax VAT validation** revolutionizes VAT number validation with its robust platform, empowering businesses to seamlessly verify VAT numbers across over 100 countries. Our cutting-edge technology ensures accurate and efficient validation, reducing errors and enhancing compliance.

## Frequently Asked Questions

### I have a valid Tax ID (BSN). Why are clients refusing to hire me as a freelancer (ZZP) in 2025?

This is likely due to the **"Fake Self-Employment" (DBA Act) enforcement crackdown** starting January 1, 2025.

- **The Issue:** The Dutch Tax Authority (Belastingdienst) is lifting the moratorium on enforcing the DBA Act. Companies hiring freelancers run the risk of being classified as "employers" if the working relationship resembles employment (e.g., you are under their supervision).
- **The Risk:** If classified as an employee, your client faces retroactive payroll taxes and fines. This "fear" leads many companies to stop hiring ZZP'ers directly, even if your Tax ID and VAT number are perfectly valid. <sup>[[1]](https://business.gov.nl/regulation/assessment-employment-status-deregulation-act-dba/)</sup>

### Why was my KVK registration rejected due to my "Business Address"?

The KVK (Chamber of Commerce) has strict "substance" rules for foreign entities to prevent shell companies.

- **P.O. Boxes Banned:** You cannot register a P.O. Box (Postbus) as a business address.
- **Virtual Office Trap:** While some virtual offices are legally accepted, many are flagged if they lack "physical presence" (i.e., you cannot actually work there). Even if KVK accepts it, **Dutch banks often reject bank account applications** for companies using virtual offices due to KYC/AML compliance.
- **Privacy Warning:** Your business address is public. If you register your home address, it will be visible in the Commercial Register. <sup>[[2]](https://business.gov.nl/regulation/register-company-kvk/)</sup>

### My client says my Tax ID is "Invalid" in VIES, but I am looking at it on my letter.

You are likely providing the wrong number. This is a common "privacy vs. public" confusion:

- **The Mistake:** You provided your **Omzetbelastingnummer** (Tax No). This is for _internal_ use with the tax authorities only. VIES cannot validate this number.
- **The Fix:** You must provide your **Btw-identificatienummer** (VAT ID). This is your _public_ ID (e.g., `NL...B01`). This is the only number that works in the [EU VIES validator](https://ec.europa.eu/taxation_customs/vies/). <sup>[[3]](https://business.gov.nl/regulation/vat-id-number/)</sup>

### Why can't I just keep using my RNI (Non-Resident) BSN to work in the Netherlands?

This is a common "expat trap" that leads to fines or registration issues.

- **The Trap:** It is easier to get an RNI BSN (for stays < 4 months) than a BRP BSN (Resident). New arrivals often register for RNI to start working quickly.
- **The Violation:** If you stay longer than 4 months, you **must** switch to the BRP (Personal Records Database).
- **The Blocker:** To register in BRP, you need a **permanent address** (rental contract). You cannot "upgrade" your BSN without an address, leaving you in a limbo where you are technically illegally residing under the wrong status. <sup>[[4]](https://www.netherlandsworldwide.nl/non-residents-records-database/what-is-rni)</sup>

### Should I use the "KOR" (Small Business Scheme) to avoid VAT admin?

Be careful. While the KOR (Kleineondernemersregeling) exempts you from charging VAT if you earn < €20,000/year, it has a major downside for new businesses:

- **The Cost:** You **cannot reclaim VAT** on your business expenses (laptops, software, stock). If you have high startup costs, you lose 21% of that money immediately.
- **The B2B Issue:** Corporate clients cannot reclaim VAT from you (since you didn't charge it), which disrupts their standard accounting invoices. Many B2B suppliers prefer standard VAT invoices. <sup>[[5]](https://business.gov.nl/doing-business-in-the-netherlands/tax-in-the-netherlands/vat-for-foreign-companies/small-businesses-scheme-kor/)</sup>

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "I have a valid Tax ID (BSN). Why are clients refusing to hire me as a freelancer (ZZP) in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is due to the 2025 enforcement crackdown on the DBA Act ('Fake Self-Employment'). Clients fear retroactive fines if the tax authority classifies you as a 'de facto' employee, leading them to avoid hiring freelancers directly."
      }
    },
    {
      "@type": "Question",
      "name": "Why did KVK reject my business registration address?",
      "acceptedAnswer": {
         "@type": "Answer",
         "text": "KVK rejects P.O. Boxes and virtual offices without physical substance. Even if acceptable to KVK, banks may reject account applications for virtual offices due to compliance risks."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my Tax ID show as Invalid in VIES?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You likely provided your private 'Omzetbelastingnummer' (Tax Number) instead of your public 'Btw-identificatienummer' (VAT ID). Only the VAT ID can be validated in VIES."
      }
    },
    {
      "@type": "Question",
      "name": "Can I work long-term with an RNI (Non-Resident) BSN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. If you stay longer than 4 months, you must register in the BRP (Resident Database) with a permanent address. Failing to do so puts you in violation of residency laws."
      }
    },
    {
      "@type": "Question",
      "name": "Is the KOR (Small Business Scheme) worth it for foreign businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It carries risks. While you avoid VAT admin, you lose the ability to reclaim VAT on expenses (increasing startup costs) and may face friction with B2B clients who prefer standard VAT invoices."
      }
    }
  ]
}
`}
</script>
