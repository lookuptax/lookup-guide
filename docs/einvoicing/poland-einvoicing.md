---
id: ksef-einvoicing-poland
title: E-invoicing in Poland
keywords:
  [
    Poland e-invoicing,
    Krajowy System e-Faktur,
    SAF-T system,
    JPK file,
    e-invoicing obligations,
    VAT payers in Poland,
    XML invoice format,
    invoice recipient consent,
    KSeF ID,
    Urzędowe Poświadczenie Odbioru,
    technical requirements,
    EDI providers,
    authorization token,
    B2G e-invoicing,
    PEF portal,
    EU directive 2014/55/EU,
    PEPPOL BIS Billing 3.0,
    UBL 2.1,
    UN/CEFACT CII,
  ]
sidebar_label: Poland - KSeF
description: Learn how Poland is revolutionizing e-invoicing in Europe with its Krajowy System e-Faktur (KSeF). Learn about the country's phased approach to implementing e-invoicing obligations, the required invoice format, and the significance of obtaining the recipient's consent. Explore the technical validation process, the role of authorization tokens for high-volume invoice submissions, and the successful adoption of e-invoicing for B2G transactions. Uncover the benefits of the PEF portal and the standards utilized to streamline invoicing processes in compliance with EU directives. Stay informed about Poland's e-invoicing advancements and its impact on business transactions
tags:
  - Poland
  - Einvoicing
  - Clearance model
---

<table  >
    <tr>
      <td align="left"><b>Country</b></td>
        <td align="left">Poland</td>
    </tr>
    <tr>
        <td align="Left">Status - B2G</td>
        <td align="left">Non Mandatory</td>
    </tr>
  <tr>
        <td align="Left">Status - B2B</td>
        <td align="left">Non Mandatory</td>
    </tr>
  <tr>
        <td align="Left">Status - B2C</td>
        <td align="left">NA</td>
    </tr>
  <tr>
        <td align="left">Formats</td>
        <td align="left">PEPPOL BIS, UBL UN/CEFACT CII</td>
    </tr>
  <tr>
        <td align="left">Authority</td>
        <td align="left"></td>
    </tr>
  <tr>
        <td align="left">Network name</td>
        <td align="left"><a href="https://www.podatki.gov.pl/ksef/">Krajowy System e-Faktur(KSeF)</a></td>
 </tr>
 
</table>

Electronic invoicing (e-invoicing) is undergoing a major transformation in Poland. Starting July 2024, businesses will be required to issue and receive invoices through the National e-Invoicing System (Krajowy System e-Faktur or KSeF). This new centralized system represents the biggest change in VAT invoicing and will impact most companies operating in Poland.

The new regulations introduce the concept of a “structured invoice” which must comply with a specific XML format defined by the Ministry of Finance. E-invoices issued and received through KSeF will be given a unique identification number and stored electronically.

## Legal Basis and Timeline

Poland’s mandatory e-invoicing system is being introduced based on the following legal acts:

- Act of 29 October 2021 on amending the VAT Act – introduced voluntary e-invoicing via KSeF from 1 Jan 2022.
- Regulation on the use of the National e-Invoicing System – defines requirements for issuing and receiving e-invoices.
- Council Implementing Decision of 17 June 2022 – authorized Poland to introduce mandatory e-invoicing for Jan 2024 – Dec 2026.
- Act of 16 June 2023 amending the VAT Act – establishes mandatory e-invoicing via KSeF from 1 July 2024.

:::note
**Important Deadlines**

The timeline for KSeF rollout is as follows:

- 1 Jan 2022 – Launch of voluntary KSeF for issuing and receiving e-invoices
- 1 July 2024 – Launch of mandatory e-invoicing for domestic and foreign VAT payers with registered office or fixed establishment in Poland
- 1 Jan 2025 – Penalties introduced for not using KSeF for VAT invoices. Cash register receipts eliminated as simplified invoices.

:::

Poland obtained approval from the EU Council to introduce mandatory e-invoicing for the period from Jan 2024 until Dec 2026. The system will become obligatory for most VAT registered businesses from 1 July 2024.

## Scope of KSeF

### The mandatory scope of KSeF covers B2B invoices issued by:

- Polish VAT payers to domestic and foreign clients
- Foreign taxpayers with a Fixed Establishment (FE) in Poland

### Voluntary e-invoicing via KSeF is permitted for:

- Invoices issued by foreign entities registered for VAT purposes in Poland without FE
- Invoices issued by taxpayers with FE in Poland if FE is not involved

### Excluded from KSeF are:

- B2C invoices issued to non-business individuals
- Invoices under special OSS and IOSS schemes
- Specific cases per Ministry of Finance

There is still uncertainty around which foreign entities will be considered as having a FE in Poland and therefore fall under the mandatory scope. Many companies are applying for individual tax rulings to clarify their status.

## Access to KSeF

To access KSeF, taxpayers must authenticate using:

- Qualified electronic signature
- Qualified electronic stamp
- Trusted ePUAP Profile
- Unique TOKEN generated and assigned by KSeF

Authorizations to issue, receive or correct e-invoices can be granted electronically to other entities. Alternatively, paper authorizations can be filed for entities without an e-stamp.

When granting authorizations, it’s important to restrict access only to selected individuals and prevent unmonitored access to all invoices.

## Structured E-Invoice Format

E-invoices issued and received via KSeF must comply with an XML schema format published by the Ministry of Finance.

The FA(2) format specifies:

- Mandatory fields required by VAT Act
- Non-mandatory fields commonly used
- Single structure for all invoice types

Issuing non-compliant e-invoices will result in penalties. Taxpayers should validate invoices against the FA(2) schema before sending to KSeF.

The format does not allow attaching supplementary files or documentation to e-invoices. Any additional information must be provided via links or separate communication.

## Issuing and Receiving E-Invoices via KSeF

There are several methods for issuing and receiving e-invoices via KSeF:

- Commercial invoicing software integrated with KSeF API
- Additional external platforms linking company systems with KSeF
- Free KSeF tools provided by Ministry of Finance

E-invoices can be sent individually or in batches. KSeF verifies the invoice format and credentials before assigning a unique KSeF identification number.

Buyers can access e-invoices by providing:

- KSeF identification number
- Seller’s invoice number
- Buyer tax ID or other identifier
- Buyer name
- Invoice total amount

An e-invoice is considered issued when submitted to KSeF and received when the identification number is assigned. Dates are key for accounting and VAT reporting.

### KSeF number format

The KSeF number is a unique number that identifies the invoice in the National e-Invoice System

<table align="center" border="1px" border-color="#dedede"><tr><td>
  <img src="/docs/img/ksef-number-format.png" alt="KSeF number format"/>
  </td></tr>
  <tr><td align="center">KSeF number format</td></tr>
</table>

## E-Invoice Corrections

The use of KSeF simplifies the process for correcting e-invoices:

- Value reductions are accounted for in the period the correction is received
- No formal acceptance by buyer is required
- Correcting non-structured invoices must still follow standard procedures

Corrections of invoices issued before 1 July 2024 must also be handled via KSeF. This requires retaining details of invoices issued outside the system.

## KSeF Breakdowns and Unavailability

Special rules apply when KSeF is unavailable due to system failures or taxpayer issues:

- System Failure – Invoices can be issued in any format. Structured e-invoices must be resent within 7 days.
- Taxpayer Issues – Structured e-invoices must be issued. Resending to KSeF required within 1 day.

In these situations, alternate invoice delivery should be agreed with trading partners to avoid disruptions. The exact timing and format requirements differ depending on the nature of the outage.

## Advantages and Challenges

The KSeF brings several benefits but also key challenges:

**Advantages:**

- Faster VAT refunds (40 instead of 60 days)
- Easier process for correcting invoices
- Invoice archiving for 10 years
- Single e-invoicing standard

**Challenges:**

- Adapting sales and purchase invoice workflows
- New format requires more invoice data
- Determining KSeF mandatory scope for foreign clients
- Changing dates of issuance and receipt
- Integrating accounting systems with KSeF
- New procedures for KSeF unavailability

## Security Concerns

As a central repository of B2B invoices, the KSeF will contain sensitive information attractive for cyberattacks. Key recommendations:

- Apply multi-factor authentication for system access
- Encrypt invoice transmissions
- Carefully restrict user authorization levels
- Validate integration points between company systems and KSeF
- Actively monitor for unauthorized access attempts

## Implementation Recommendations

To ensure a smooth transition to e-invoicing, companies should take the following steps:

1. Conduct impact analysis of invoice flows and data availability
2. Assess required changes to accommodate new formats
3. Consult with clients on e-invoice information and integration
4. Prioritize KSeF in IT development plans
5. Test invoice handling with KSeF in advance
6. Update internal controls and procedures
7. Validate issuer-receiver business processes end-to-end
8. Provide KSeF training and support for impacted staff

Companies that prepare thoroughly and test KSeF integrations well before the deadlines will avoid disruptions. It's recommended to engage closely with the IT department and external software vendors early in the process.

## Reference links

- [About KSeF](https://www.podatki.gov.pl/ksef/informacje-o-ksef/)
- [e-Invoice XML format](https://www.podatki.gov.pl/media/9512/broszura-informacyjna-struktury-logicznej-fa-2.pdf)
- [Free KSeF tools provided by Ministry of Finance](https://www.podatki.gov.pl/ksef/aplikacja-podatnika-ksef-i-inne-narzedzia/)
