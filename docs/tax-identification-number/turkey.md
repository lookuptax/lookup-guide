---
id: turkey-tax-id-guide
title: Turkey TIN number guide
keywords: [TIN, VKN, Tax ID, Türkiye, Find NIN]
sidebar_label: Türkiye
description: Learn about VKN number in Türkiye. Use Lookuptax for hassle-free tax id validation in Türkiye and other 100+ countries
tags:
  - Türkiye
  - VKN
---

## National Identification Number

Since July 1, 2006, the National Identity Number serves as the unique identifier for Turkish citizens, and all Tax Identification Numbers (TINs) for citizens have been aligned with their National Identification Numbers in the tax database system. Foreigners residing in Turkey for more than six months are also mandated to acquire a TIN. If available, foreign nationals can alternatively utilize their Foreign Identity Numbers instead of a TIN.

The issuance of the Tax Identification Number is based on identification information obtained through central taxpayer registry files. TINs are provided to legal entities, legal entities with no tax liability, foreign nationals lacking a Foreign Identity number, and foreign legal entities.

National Identity Number consists of 11 digits different than the 10 digit TIN.

<table align="center"><tr><td>
  <img src="/docs/img/taxid/nin.PNG" alt="NIN Format"/>
  </td></tr>
  <tr><td align="center">NIN Format</td></tr>
</table>

**Alpha Group Code**: For individuals: Code including their surname and name (between 001-999) For legal entities and ordinary partnerships: Code including their title (between 001-999)

**Sequence Number**: Sequence number of Alpha Group Code in Türkiye

**Control Number**: Check-digit of 9 characters consisting of Alpha Group Code and Sequence
Number

## Vergi Kimlik Numarası

"Vergi Kimlik Numarası" is Turkish for "Tax Identification Number".

It is a unique number assigned by the Revenue Administration to individuals and entities for identification in tax-related affairs in Turkey. Some key points about Vergi Kimlik Numarası:

- It consists of 10 digits - first digit is always 9 for companies, and starts with 1, 2, 3, 4 for individuals
- Companies must register for a Vergi Kimlik Numarası within 30 days of incorporation
- Required for paying taxes, on invoices, for government procedures like tenders etc
- Displayed on tax returns, tax payment forms
- Links a person or company to all their tax affairs and records with the Revenue Administration
- Helps government track tax compliance

So in essence, it serves a similar purpose as VAT registration numbers in Europe or Tax ID numbers in the USA - unique identification for tax administration purposes.

## Frequently Asked Questions

### Why does the "Interactive Tax Office" reject my tax number application?

The most common error for foreigners is the character mismatch between the English "I" and the Turkish "İ". When verifying passport data, the Turkish system expects an exact match. If your keyboard types "I" (upper case i) but the system expects "İ" (dotted capital I) or vice versa, the validation will fail. **Tip**: Use a virtual Turkish keyboard or copy-paste the specific characters if your passport contains them. Also, ensure your name is entered in all CAPITAL LETTERS exactly as it appears in the machine-readable zone (MRZ) of your passport. <sup>[[1]](https://ivd.gib.gov.tr)</sup>

### Do foreign companies need to pay VAT on B2B services to Turkey?

Typically, no. Turkey uses a **Reverse Charge Mechanism (VAT 2 / KDV 2)** for B2B services provided by non-resident entities to Turkish businesses. This means the **Turkish buyer** is responsible for calculating, declaring, and paying the 20% VAT to the tax authority. <sup>[[2]](https://www.gib.gov.tr/yardim-ve-kaynaklar/mevzuat/kanunlar/3065)</sup> You do not need to charge Turkish VAT on your invoice, but you should add a note: _"Invoice subject to Reverse Charge Mechanism (KDV 2) in Turkey"_.

### Is there Withholding Tax (Stopaj) on software invoices from abroad?

Yes. Payments for professional services, including software licensing, engineering, and data analysis, are generally subject to a **20% Withholding Tax (Stopaj)**. <sup>[[3]](https://www.gib.gov.tr/yardim-ve-kaynaklar/mevzuat/kanunlar/5520)</sup> The Turkish client must deduct this from your payment. However, if your country has a **Double Taxation Treaty (DTT)** with Turkey, this rate can often be reduced (e.g., to 10% or 0%) if you provide a Certificate of Residence.

### Does the 7.5% Digital Services Tax (DST) apply to my B2B software?

It is unlikely for small to mid-sized B2B suppliers. Turkey's **Digital Services Tax (7.5%)** applies only if your global revenue from digital services exceeds **€750 million** AND your Turkish-sourced revenue exceeds **TRY 20 million**. <sup>[[4]](https://www.resmigazete.gov.tr/eskiler/2019/12/20191207-1.htm)</sup> If you are below these thresholds, you are exempt from DST, regardless of whether you sell B2B or B2C.

### Why is my VKN validation failing on third-party tools?

This often happens due to format confusion.

- **Foreigners & Citizens (TCKN)**: Use an **11-digit** number.
- **Companies (VKN)**: Use a **10-digit** number.
  If you are validating a foreign individual's tax number (Yabancı Kimlik No) using a 10-digit VKN algorithm, it will fail. Ensure you are using the correct algorithm (TCKN vs VKN) for the entity type. <sup>[[5]](https://tckimlik.nvi.gov.tr/)</sup>

### Can I open a bank account with just a 'Potential Tax Number'?

Legally, yes. Practically, it is difficult. A "Potential Tax Number" (_Potansiyel Vergi Kimlik Numarası_) is valid for banking. However, due to strict KYC/AML verification risks, many branch managers refuse to open accounts for foreigners without a valid Residence Permit (_Ikamet_) or a substantial deposit, even if they hold a potential tax number. <sup>[[6]](https://ivd.gib.gov.tr)</sup>

### Can a foreign company issue a Turkish "e-Fatura" without a local entity?

Yes, but it requires a VKN. Foreign entities can voluntarily register for the Turkish e-Invoice system (_e-Fatura_) without establishing a permanent establishment. You must obtain a VKN and work with an authorized **Special Integrator** to digitally sign and transmit invoices. <sup>[[7]](https://ebelge.gib.gov.tr/)</sup>

### How do I verify a Turkish VKN active status?

You can verify if a tax number is active and registered via the official **Interactive Tax Office (GİB)**:

- Go to **[ivd.gib.gov.tr](https://ivd.gib.gov.tr)**
- Select "Doğrulamalar" (Verifications) -> "Vergi Kimlik Numarası Doğrulama".
- Enter the 10-digit VKN to check the title and taxation status.

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why does the Interactive Tax Office reject my tax number application?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The most common error is the character mismatch between English 'I' and Turkish 'İ'. The system requires an exact match to your passport data. Ensure you use the specific Turkish characters or copy-paste them, and enter your name in all CAPITAL LETTERS exactly as shown in your passport's MRZ zone."
    }
  }, {
    "@type": "Question",
    "name": "Do foreign companies need to pay VAT on B2B services to Turkey?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Typically, no. Turkey applies a Reverse Charge Mechanism (KDV 2) for B2B services. The Turkish buyer is responsible for declaring and paying the 20% VAT. You should invoice without VAT and note 'Subject to Reverse Charge Mechanism (KDV 2)'."
    }
  }, {
    "@type": "Question",
    "name": "Is there Withholding Tax (Stopaj) on software invoices from abroad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, payments for professional services and software are generally subject to a 20% Withholding Tax. This can often be reduced if a Double Taxation Treaty (DTT) exists between your country and Turkey."
    }
  }, {
    "@type": "Question",
    "name": "Does the 7.5% Digital Services Tax (DST) apply to my B2B software?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Likely not. DST applies only if your global digital revenue exceeds €750 million AND Turkish revenue exceeds TRY 20 million. Smaller B2B suppliers are exempt."
    }
  }, {
    "@type": "Question",
    "name": "Why is my VKN validation failing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Validation often fails due to length mismatch. Companies use a 10-digit VKN, while citizens and resident foreigners use an 11-digit TCKN/YKN. Ensure you are using the correct algorithm for the specific ID type."
    }
  }, {
    "@type": "Question",
    "name": "Can I open a bank account with just a Potential Tax Number?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Legally yes, but practically difficult. Many banks refuse 'Potential' numbers without a Residence Permit (Ikamet) due to internal compliance policies, despite the tax number being valid."
    }
  }]
}
`}
</script>

---

**How [Lookuptax](https://lookuptax.com/) can help you ?**
**Lookuptax VAT validation** revolutionizes VAT number validation with its robust platform, empowering businesses to seamlessly verify VAT numbers across over 100 countries. Our cutting-edge technology ensures accurate and efficient validation, reducing errors and enhancing compliance.
