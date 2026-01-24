---
id: mexico-tax-id-guide
title: Mexico TIN number guide
keywords: [TIN, Find RFC, Tax ID, Mexico]
sidebar_label: Mexico
description: Learn about TIN number in Mexico. Use Lookuptax for hassle-free tax id validation in Mexico and other 100+ countries
tags:
  - Mexico
  - TIN
---

import AlsoAvailable from '@site/src/components/AlsoAvailable';

<AlsoAvailable />

## Clave en el Registro Federal de Contribuyentes - RFC

The Mexican Tax Administration Service issues a distinct identifier, known as Clave en el Registro Federal de Contribuyentes (RFC), to each individual or legal entity registered in the system. The structure of the RFC varies based on the taxpayer type, distinguishing between individuals and legal entities as outlined in Mexican tax regulations. According to these laws, only individuals and legal entities meeting specific criteria, such as filing periodic tax returns or issuing digital tax invoices, are mandated to register for a Taxpayer Identification Number (TIN).

Furthermore, legal entities and individuals falling under the requirement to open a financial account in Mexican financial institutions must also register for a TIN. Additionally, individuals of legal age (18 years old) are obligated to register in the Federal Taxpayer Registry, irrespective of their engagement in business activities.

Entities further have the responsibility to submit notifications, as specified in the Federal Fiscal Code, regarding their legal representatives, partners, and shareholders.

**RFC Format**

Individuals in Mexico are assigned a 13-character identifier, comprising 4 letters followed by 6 digits and 3 alphanumeric characters. The initial 4 letters represent the name, followed by 6 digits indicating the date of birth, and the last 3 characters are check digits.

For entities, the identifier is 12 characters long, consisting of 3 letters followed by 6 digits and 3 alphanumeric characters. The first 3 letters pertain to the name, the subsequent 6 digits indicate the date of incorporation, and the final 3 characters are check digits.

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/rfc.PNG" alt="TAX IDENTIFICATION CARD" title="TAX IDENTIFICATION CARD"/>
  </td></tr>
  <tr><td align="center">TAX IDENTIFICATION CARD</td></tr>
</table>

---

**How [Lookuptax](https://lookuptax.com/) can help you in VAT validation?**

**Lookuptax VAT validation** revolutionizes VAT number validation with its robust platform, empowering businesses to seamlessly verify VAT numbers across over 100 countries. Our cutting-edge technology ensures accurate and efficient validation, reducing errors and enhancing compliance.

## Frequently Asked Questions

### Why is my invoice being rejected for "Name Mismatch" (Error CFDI40145)?

This is the #1 pain point with **CFDI 4.0**. The SAT's validation engine requires the "Name" (Nombre/Razón Social) to match the **Constancia de Situación Fiscal** _exactly_—character for character, usually in ALL CAPS, and **without** the corporate regime (e.g., "SA DE CV").

- **The Error**: `CFDI40145` ("El nombre del receptor no coincide...").
- **The Fix**: Ensure your provider captures your name exactly as it appears in the SAT registry, not your commercial name. If you are a foreign entity, the name must match exactly how it was entered in the client's system for the generic RFC. <sup>[[1]](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm)</sup>

### Why is my client asking for a "Constancia de Situación Fiscal" if I'm a foreigner?

Mexican accounting norms (CFDI 4.0) force local companies to validate the "Zip Code" and "Tax Regime" of every supplier. Since foreign residents don't have a Mexican Tax ID (RFC) or a _Constancia_, this creates a stalemate.

- **The Solution**: Provide your client with the official foreign parameters defined in the **RMF**:
  - **RFC**: `XEXX010101000`
  - **Regime**: `616` (Sin obligaciones fiscales)
  - **Zip Code**: Use the generic foreign zip code or the one the client's ERP defaults to.
  - **Document**: Provide a **Tax Residency Certificate** from your home country (e.g., IRS Form 6166) instead of the Constancia. <sup>[[2]](https://www.sat.gob.mx/normatividad/17392/miscelanea-fiscal)</sup>

### What are the "Carta Porte" risks for foreign logistics?

If you are a US/Canada logistics provider moving goods into Mexico, you are subject to the **Carta Porte (CCP)** supplement rules once you cross the border.

- **The "Gotcha"**: Missing the **Pedimento** (customs entry number) for imported goods is an immediate cause for fines and seizure.
- **Penalties**: Fines for errors in the ~180 fields of the Carta Porte range from **$19,000 to $90,000 MXN**, plus the potential confiscation of the merchandise by the Guardia Nacional. <sup>[[3]](http://omawww.sat.gob.mx/cartaporte/Paginas/default.htm)</sup>

### Why was my payment blocked due to a "Negative Opinion" (Opinión de Cumplimiento)?

Large Mexican buyers (e.g., Walmart, Bimbo, Cemex) verify the **Article 32-D Compliance Opinion** of their suppliers monthly via automated bots.

- **Trigger**: A "Negative" opinion can be triggered by a discrepancy as small as a few pesos or a late "DIOT" declaration.
- **Consequence**: Most large Master Service Agreements (MSAs) trigger an automatic "Stop Payment" lock until you provide a "Positive" opinion, which can disrupt cash flow for weeks. <sup>[[4]](https://www.sat.gob.mx/consultas/20777/consulta-tu-opinion-de-cumplimiento-de-obligaciones-fiscales)</sup>

### How do I avoid the 25% or 35% Withholding Tax (Retención ISR)?

Payments to foreign residents for technical assistance, royalties, or digital services are subject to high withholding taxes (25% or 35%) by default.

- **The Fix**: To access lower Treaty rates (0%, 4.9%, or 10%), you **must** provide a valid, apostilled **Tax Residency Certificate** to your Mexican client _before_ the payment is made. Without this document, the Mexican client is legally required to withhold the maximum statutory rate to protect their own deductibility. <sup>[[5]](https://www.sat.gob.mx/normatividad/98/tratados-en-materia-fiscal)</sup>

### Do foreign SaaS companies really need to register for RFC?

**Yes.** Under the 2020 Tax Reform, _foreign_ residents providing digital services to recipients in Mexico must register for the "RFC de Plataformas Tecnológicas".

- **Myth**: "I only need to register if I sell more than X amount."
- **Fact**: There is **no minimum threshold**. If you sell B2C or B2B digital services, you are obligated to register. The SAT publishes a specific list of _Prestadores de Servicios Digitales Inscritos_ every two months. <sup>[[6]](https://www.sat.gob.mx/minisitio/PlataformasTecnologicas/PlataformasTecnologicas_ServiciosDigitales/pt_sd_inicio.html)</sup>

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is my invoice being rejected for \\"Name Mismatch\\" (Error CFDI40145)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is the #1 pain point with CFDI 4.0. The SAT's validation logic requires the Name to match the Constancia de Situación Fiscal exactly (character for character, usually ALL CAPS, no corporate regime). If you are a foreign entity using the generic RFC, the name must match exactly how the client entered it in their ERP."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my client asking for a \\"Constancia de Situación Fiscal\\" if I'm a foreigner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CFDI 4.0 rules force validation of Zip Code and Regime. Since foreigners don't have a Constancia, you must instruct clients to use the foreign parameters: RFC XEXX010101000, Regime 616 (Sin obligaciones fiscales), and the generic foreign zip code. Provide a Tax Residency Certificate instead."
      }
    },
    {
      "@type": "Question",
      "name": "What are the \\"Carta Porte\\" risks for foreign logistics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you transport goods on Mexican federal highways, you must issue a CFDI with the Carta Porte supplement. Missing the \\"Pedimento\\" number for imported goods is a critical error. Penalties for errors in the Carta Porte range from $19,000 to $90,000 MXN plus potential seizure of goods."
      }
    },
    {
      "@type": "Question",
      "name": "Why was my payment blocked due to a \\"Negative Opinion\\" (Opinión de Cumplimiento)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Large Mexican buyers check the Article 32-D Compliance Opinion monthly. A \\"Negative\\" opinion (even for minor discrepancies) typically triggers an automatic \\"Stop Payment\\" lock in their ERPs until you provide a Positive opinion."
      }
    },
    {
      "@type": "Question",
      "name": "How do I avoid the 25% or 35% Withholding Tax (Retención ISR)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To access lower Double Taxation Treaty rates (0-10%) instead of the default 25-35%, you must provide a valid, apostilled Tax Residency Certificate to your Mexican client before the payment is made."
      }
    },
    {
      "@type": "Question",
      "name": "Do foreign SaaS companies really need to register for RFC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. There is no minimum threshold. Foreign residents providing digital services in Mexico must register for the \\"RFC de Plataformas Tecnológicas\\". The SAT publishes a list of registered providers bimonthly."
      }
    }
  ]
}
`}
</script>
