---
id: chile-tax-id-guide
title: Chile TIN number guide
keywords: [TIN, RUT, Tax ID, Chile, Find RUT]
sidebar_label: Chile
description: Learn about RUT number in Chile. Use Lookuptax for hassle-free tax id validation in Chile and other 100+ countries
tags:
  - Chile
  - TIN
  - RUT
---

import AlsoAvailable from '@site/src/components/AlsoAvailable';

<AlsoAvailable />

## Rol Unico Tributario (RUT)

All individuals and entities subject to taxation in Chile must undergo registration in the Rol Unico Tributario (RUT or TIN Registry, as per Article 66 of the Tax Code). Established in 1969 through Decree No. 3 of the Ministry of Finance, the TIN Registry's rules are outlined within.

Managed by the Internal Revenue Service (SII), entities, whether resident in Chile or not, must apply for TIN Registry registration through the SII.

The Civil Registry supplies the SII with information regarding National Identity Numbers allocated to individuals. The TIN/RUN is personal and non-transferable, ensuring each number is assigned to a specific person or entity. This number remains constant throughout its legal existence and is never reassigned once the holder's legal existence concludes. The TIN/RUN serves as the primary identification number for interactions with authorities, contract signings, formal agreements, applications, and everyday activities.

**Foreigners**

Foreigners engaging in various activities in Chile, such as investments, representation of legal entities, or receiving income, are required to register for the Unique Tax Roll (RUT). This includes individuals without residence in Chile investing in shares, real estate, or participating in companies. The registration process is facilitated for foreigners without residence, allowing them to obtain the RUT through Chilean stock brokers involved in market operations. Presentation of an Identity Card for Foreigners is necessary during the registration process for foreigners residing in Chile. The RUT is a crucial identification for tax-related activities in the country.

For Chileans and foreigners residing in Chile, the National Identity Number (RUN) from the Civil Registry serves as both the Tax Identification Number (RUT).

Read [more](https://www.sii.cl/contribuyentes/contribuyentes_individuales/chilenos_extranjero/rol_unico_tributario.htm)

**Format**

The Tax Identification Number (TIN) aka RUT comprises two components: the serial number, a dash (-), and the check digit (xx.xxx.xxx-x), derived through an algorithm generating a digit from 0 to 9 or the letter K. The check digit is pivotal for TIN validation, ensuring a singular check digit per number.

To confirm TIN accuracy, apply the algorithm module 11 formula to the pre-hyphen portion. This arithmetic calculation involves summing the multiplication, multiplying by 10, and dividing by 11. If the outcome matches the check digit, the TIN structure is deemed valid. The check digit follows three essential rules:

- It is a digit from 1 to 9 if equal to the result.
- It is 'K' if the result is 10.
- It is '0' (zero) if the result is 11.

Official Database [RUT search](https://zeus.sii.cl/cvc/stc/stc.html)

## Frequently Asked Questions

### Can I open a bank account with a Temporary Investor RUT?

Generally, no. A **Temporary RUT (RUT Provisorio)**—often issued to investors directly by the SII—allows you to pay taxes and buy assets (like property or cars) but **does not grant access to the regular banking system** (e.g., _Cuenta Corriente_). Most banks require a _RUT Definitivo_ (tied to permanent residency) and 1–2 years of local tax history. The main exception is BancoEstado's "CuentaRUT," but it has significant deposit limits (approx. $2,000,000 CLP). <sup>[[1]](https://banco.santander.cl/personas/planes/cuenta-corriente-life)</sup>

### Why am I being charged 19% tax on digital services (Netflix, AWS)?

Since 2020, Chile applies a **19% VAT (IVA)** to foreign digital services. If you are using a foreign credit card in Chile, this tax is often automatically applied by the bank or the service provider. To be exempt, you must register as a VAT taxpayer with a business RUT and provide a valid "Factura" (invoice) to the service provider, proving you are a local business entity rather than a final consumer. <sup>[[2]](https://www.sii.cl/vat/)</sup>

### Do I need a local Chilean sponsor (Mandatario) to get a RUT?

Yes, this is a common "chicken and egg" problem. If you are not a resident, you absolutely **must appoint a legal representative (Mandatario)** who is a Chilean resident or citizen to obtain an Investor RUT. This representative is legally responsible for your tax compliance in Chile. Legal firms typically charge between **$300 to $1,000 USD** per year for this service, which effectively becomes a "maintenance fee" for holding a Chilean Tax ID. <sup>[[3]](https://www.sii.cl/portales/investors/registrese/inscripcion_rut_extranjeros.htm)</sup>

### Why is my passport number rejected on Chilean websites (Lider, Rappi)?

Chilean e-commerce systems are notoriously rigid and often have a hard-coded validation for the 9-digit RUT algorithm (Modulo 11). They frequently reject foreign passport numbers. Foreigners without a RUT often face a "digital blackout" where they cannot order groceries, sign up for gym memberships, or buy bus tickets online. The only official solution is to obtain a Temporary RUT. <sup>[[4]](https://www.reddit.com/r/chile/comments/qz5cfg/buying_online_without_a_rut_or_bank_account/)</sup>

### Is my RUT number private like a Social Security Number?

No. Unlike the US SSN, the Chilean RUT is public information. It is used as a username for everything from supermarket loyalty points to bank logins. Anyone can find a person's name and address using their RUT on public "Rutificador" websites. Because of this, "phishing" using public personal data is a common security risk in Chile. <sup>[[5]](https://digital.gob.cl/biblioteca/regulacion/ley-n-19628-sobre-proteccion-de-la-vida-privada/)</sup>

---

**How [Lookuptax](https://lookuptax.com/) can help you ?**

**Lookuptax VAT validation** revolutionizes VAT number validation with its robust platform, empowering businesses to seamlessly verify VAT numbers across over 100 countries. Our cutting-edge technology ensures accurate and efficient validation, reducing errors and enhancing compliance.

[<img src="/docs/img/posters/signup-taxid-validation20.png" alt="Sign up on Lookuptax for taxid validation"/>](https://lookuptax.com/)

<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Can I open a bank account with a Temporary Investor RUT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, no. A Temporary RUT (RUT Provisorio) allows you to pay taxes and buy assets but does not grant access to the regular banking system. Most banks require a RUT Definitivo (tied to permanent residency) and 1–2 years of local tax history. The main exception is BancoEstado's CuentaRUT, but it has significant deposit limits."
      }
    }, {
      "@type": "Question",
      "name": "Why am I being charged 19% tax on digital services (Netflix, AWS)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Since 2020, Chile applies a 19% VAT (IVA) to foreign digital services. If you are using a foreign credit card in Chile, this tax is often automatically applied. To be exempt, you must register as a VAT taxpayer with a business RUT and provide a valid invoice to the service provider."
      }
    }, {
      "@type": "Question",
      "name": "Do I need a local Chilean sponsor (Mandatario) to get a RUT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If you are not a resident, you must appoint a legal representative (Mandatario) who is a Chilean resident or citizen to obtain an Investor RUT. This representative is legally responsible for your tax compliance in Chile."
      }
    }, {
      "@type": "Question",
      "name": "Why is my passport number rejected on Chilean websites (Lider, Rappi)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chilean e-commerce systems often have a hard-coded validation for the 9-digit RUT algorithm (Modulo 11) and reject passport numbers. The only official solution to access these services is to obtain a Temporary RUT."
      }
    }, {
      "@type": "Question",
      "name": "Is my RUT number private like a Social Security Number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Chilean RUT is public information used as a username for many services. Anyone can find a person's name and address using their RUT on public websites, which makes phishing a common security risk."
      }
    }]
  }
`}
</script>
