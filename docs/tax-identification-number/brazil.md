---
id: brazil-tax-id-guide
title: Brazil CNPJ number guide
keywords: [TIN, CNPJ, Tax ID, Brazil, Find CNPJ]
sidebar_label: Brazil
description: Learn about CNPJ number in Brazil. Use Lookuptax for hassle-free tax id validation in Brazil and other 100+ countries
tags:
  - Brazil
  - CNPJ
---

import AlsoAvailable from '@site/src/components/AlsoAvailable';

<AlsoAvailable />

## Cadastro Nacional da Pessoa Jurídica – CNPJ

The “Cadastro Nacional da Pessoa Jurídica – CNPJ” is an identification number issued to entities (including companies, partnerships and foundations) of relevance for the tax administration. (Administrative Act – IN RFB 2.119/22)

**Format** 14-digit number formatted as NN.NNN.NNN/AAAA-CC (the first 8 digits identify the company, the 4 digits after the / identify the branch or subsidiary, the last 2 are check digits)

## Cadastro de Pessoas Físicas – CPF

The “Cadastro de Pessoas Físicas – CPF” is a number attributed to both national and resident taxpayers (Administrative Act – IN 1.548/15). The Secretariat of the Federal Revenue of Brazil (RFB) assigns a unique number to each person enrolled in its registries

**Format** It consists of 11 digits (the 2 last numbers are the result of an arithmetic operation on the 9 previous ones)

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/cpf.PNG" alt="CPF"/>
  </td></tr>
  <tr><td align="center">CPF</td></tr>
</table>

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/id.PNG" alt="CIN"/>
  </td></tr>
  <tr><td align="center">ID Card(“Carteira de Identidade Nacional” – CIN)</td></tr>
</table>

## Foreigners

Typically, individuals or entities, whether natural or legal persons, who are non-residents and possess specific assets in Brazil, such as real estate, vehicles, stakes in a company or partnership, bank accounts, or investments, are obligated to undergo registration with the CPF or CNPJ.

## Frequently Asked Questions

### What is the difference between CNPJ, CPF, and Inscrição Estadual?

- **CNPJ (Cadastro Nacional da Pessoa Jurídica):** The federal tax ID for **businesses** and legal entities (14 digits). A company must have this to operate. <sup>[[2]](https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp)</sup>
- **CPF (Cadastro de Pessoas Físicas):** The federal tax ID for **individuals** (11 digits). Every resident (and foreigners with assets) needs one. <sup>[[1]](https://www.gov.br/pt-br/servicos/inscrever-no-cpf-no-exterior)</sup>
- **Inscrição Estadual (IE):** A **state-level** tax registration required _only_ for companies that sell physical goods or provide transport/communication services (ICMS taxpayers). Service providers often don't need this. <sup>[[3]](https://www.sef.sc.gov.br/saiba-mais/cadastro-tributario-inscricao-estadual)</sup>

### How can I verify if a CNPJ is active?

You can check the status of a CNPJ individually on the official [Receita Federal website](https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp). <sup>[[2]](https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp)</sup>

> **Pro Tip:** For reliable, bulk, or API-based verification, we recommend using [Lookuptax](https://lookuptax.com/) to automate compliance checks.

### Can a foreigner get a CPF?

Yes. Foreigners (even non-residents) can and often must obtain a CPF to own assets, open bank accounts, or sometimes even to make online purchases in Brazil. You can apply via the [Receita Federal's online form for foreigners](https://servicos.receita.fazenda.gov.br/Servicos/CPF/InscricaoResidExterior/Default.asp). <sup>[[1]](https://www.gov.br/pt-br/servicos/inscrever-no-cpf-no-exterior)</sup>

### Do I need an Inscrição Estadual (IE)?

You typically only need an IE if your business involves **selling physical goods**, manufacturing, or providing inter-state transportation services. If you are a pure service provider (e.g., consulting, software dev), you usually only need a CNPJ and a municipal registration (Inscrição Municipal). <sup>[[3]](https://www.sef.sc.gov.br/saiba-mais/cadastro-tributario-inscricao-estadual)</sup>

### What formats are used for Brazilian Tax IDs?

- **CNPJ:** 14 digits, formatted as `XX.XXX.XXX/0001-XX`.
- **CPF:** 11 digits, formatted as `XXX.XXX.XXX-XX`.

### My CPF status is "Suspended". What does this mean?

A "Suspended" (Suspensa) status usually means there is a discrepancy in your registration data (e.g., name, mother's name, date of birth) or you failed to vote in an election without justifying it. You must regularize it via the Receita Federal website. <sup>[[1]](https://www.gov.br/pt-br/servicos/inscrever-no-cpf-no-exterior)</sup>

### Can a foreign company issue a "Nota Fiscal" (Invoice) in Brazil?

No, not directly. To issue a valid Brazilian tax invoice (Nota Fiscal), you must have a local **CNPJ** and a **Digital Certificate** (e-CNPJ). This is a major blocker for B2B sales, as Brazilian companies require a Nota Fiscal to deduct the expense. Foreigners typically use a "Merchant of Record" to handle this. <sup>[[2]](https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp)</sup>

### Why do Brazilian clients complain about "Withholding Tax" on my invoice?

When a Brazilian company pays a foreign entity that is not registered in Brazil, they are legally required to withhold significant taxes at the source, including **IRRF** (Income Tax, usually 15% or 25%), CIDE (10%), PIS/COFINS (~9.25%), and ISS (2-5%). This can increase the total cost by **40%+**, making foreign services expensive compared to local competitors. <sup>[[4]](https://taxsummaries.pwc.com/brazil/corporate/withholding-taxes)</sup>

### Can I accept PIX payments without a local entity?

You cannot receive PIX payments directly into a foreign bank account. To accept PIX (Brazil's instant payment system), you must use a local payment processor (PSP) or Merchant of Record that collects the BRL locally and remits the funds to you abroad. <sup>[[5]](https://www.bcb.gov.br/estabilidadefinanceira/pix)</sup>

**How [Lookuptax](https://lookuptax.com/) can help you ?**

**Lookuptax VAT validation** revolutionizes VAT number validation with its robust platform, empowering businesses to seamlessly verify VAT numbers across over 100 countries. Our cutting-edge technology ensures accurate and efficient validation, reducing errors and enhancing compliance.

[<img src="/docs/img/posters/signup-taxid-validation16.png" alt="Sign up on Lookuptax for taxid validation"/>](https://lookuptax.com/)

<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between CNPJ, CPF, and Inscrição Estadual?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CNPJ is the federal tax ID for businesses. CPF is the tax ID for individuals. Inscrição Estadual (IE) is a state-level registration specifically for businesses that sell goods (ICMS taxpayers)."
        }
      },
      {
        "@type": "Question",
        "name": "How can I verify if a CNPJ is active?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can verify a CNPJ on the Receita Federal website. For bulk or API verification, Lookuptax is a recommended solution."
        }
      },
      {
        "@type": "Question",
        "name": "Can a foreigner get a CPF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, foreigners (residents and non-residents) can obtain a CPF via the Receita Federal's online application process."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an Inscrição Estadual (IE)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You generally only need an IE if you sell physical goods or provide transport services. Pure service providers typically do not need it."
        }
      },
      {
        "@type": "Question",
        "name": "Can a foreign company issue a Nota Fiscal in Brazil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, a foreign company cannot directly issue a Brazilian Nota Fiscal without a local CNPJ and Digital Certificate."
        }
      },
      {
        "@type": "Question",
        "name": "Why do Brazilian clients complain about Withholding Tax?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local buyers must pay significant withholding taxes (IRRF, CIDE, PIS/COFINS, ISS) totaling over 40% when paying unregistered foreign entities, making the service much more expensive."
        }
      },
      {
        "@type": "Question",
        "name": "Can I accept PIX payments without a local entity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you cannot receive PIX directly to a foreign account. You must use a local payment processor (PSP) or Merchant of Record."
        }
      },
      {
        "@type": "Question",
        "name": "What formats are used for Brazilian Tax IDs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CNPJ is 14 digits (XX.XXX.XXX/0001-XX) and CPF is 11 digits (XXX.XXX.XXX-XX)."
        }
      },
      {
        "@type": "Question",
        "name": "My CPF status is Suspended. What does this mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Suspended status usually means there is a data discrepancy or issue with voting obligations. It must be regularized via the Receita Federal website."
        }
      }
    ]
  }
`}
</script>
