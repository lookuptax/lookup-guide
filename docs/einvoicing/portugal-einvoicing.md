---
id: espap-einvoicing-portugal
title: E-invoicing in Portugal -eSPap
keywords: [E-invoicing reform Portugal, QR code on invoices Portugal, ATCUD requirement in Portugal, SAF-T reporting Portugal, B2B e-invoicing Portugal, E-invoicing obligation Portugal, B2G e-invoicing Portugal, eSPap platform for B2G e-invoicing, UBL 2.1 CIUS-PT standard, Digital signature requirement for electronic invoices Portugal]
sidebar_label: Portugal - eSPap
description: Despite delays caused by the COVID-19 pandemic, Portugal is implementing crucial e-invoicing reforms. Companies must prepare for the changing landscape, including requirements such as the QR code on invoices since January 1, 2022, and the mandatory inclusion of the ATCUD unique ID from January 1, 2023. Discover the SAF-T reporting specification for trade, agricultural, and industrial sectors, simplifying the electronic transmission of business data and tax returns. While B2B e-invoicing remains optional, stay informed about potential future obligations. Explore the classification of companies based on size and understand the dedicated eSPap platform for B2G e-invoicing, adhering to UBL 2.1 CIUS-PT or CEFACT CIUS-PT standards. Finally, learn about the transition from PDF invoices to digitally signed electronic invoices, effective from January 1, 2023, to ensure compliance with tax purposes in Portugal.
tags:
  - Portugal
  - Einvoicing
---

<table>
    <tr>
      <td align="left"><b>Country</b></td>
        <td align="left">Portugal</td>
    </tr>
    <tr>
        <td align="Left">Status - B2G</td>
        <td align="left">Mandatory</td>
    </tr>
  <tr>
        <td align="Left">Status - B2B</td>
        <td align="left">Voluntary</td>
    </tr>
  <tr>
        <td align="Left">Status - B2C</td>
        <td align="left">NA</td>
    </tr>
  <tr>
        <td align="left">Formats</td>
        <td align="left">UBL 2.1 CIUS-PT or CEFACT CIUS-PT</td>
    </tr>
  <tr>
        <td align="left">Authority</td>
        <td align="left">Entidade de Serviços Partilhados da Administração Pública</td>
    </tr>
  <tr>
        <td align="left">Network name</td>
        <td align="left">eSPap</td>
 </tr>
  <tr>
        <td align="left">Legislation</td>
        <td align="left"><a href="https://diariodarepublica.pt/dr/en/detail/decree-law/123-2018-117514514">DECREE LAW No. 123/2018</a></td>
 </tr>
</table>


Portugal is embarking on an ambitious initiative to modernize and digitize invoicing processes, both in public administration and in business transactions. This major transformation aims to increase efficiency, improve control, and enhance integration with national accounting systems. 

The government has mandated e-invoicing for all suppliers to public entities starting November 2020 based on contract thresholds. There are also plans to eventually require e-invoicing for business-to-business (B2B) and business-to-consumer (B2C) transactions. This article examines how e-invoicing is being implemented in Portugal and key considerations for suppliers, service providers, and taxpayers.

## Public Sector E-Invoicing Mandate

Portugal’s mandate for e-invoicing in public procurement comes from Directive 2014/55/EU on electronic invoicing in public contracts. Domestic legislation was enacted in 2017 to make e-invoicing mandatory for suppliers to government bodies under certain contract values. 

The National Public Procurement Portal (Portal Nacional de Compras Públicas) run by the Central Purchasing Body (Entidade de Serviços Partilhados da Administração Pública or ESPAP) serves as the central platform and single entry point for intake, processing, and management of all e-invoices issued to public entities.

Suppliers must issue structured e-invoices in XML format aligned with the European standard (EN 16931) and submit them via the portal. Public contractors above specified annual thresholds are required to join the portal to receive e-invoices starting November 2020. Remaining public entities must onboard by end of 2022.

The aim is to automate and streamline the entire invoice-to-pay process for public procurement. Electronic invoices registered on the portal will interface seamlessly with the government’s financial management systems. This is expected to reduce processing costs, improve transparency, and speed up payment cycles.

## Private Sector E-Invoicing

For transactions between private companies (B2B) and from businesses to consumers (B2C), e-invoicing in Portugal is still voluntary. The government has signaled intent to eventually mandate e-invoicing across the economy using a phased approach, but no definite timeline has been set yet.

The adoption of e-invoicing for private transactions so far has been driven by large companies implementing it independently to achieve efficiencies and lower costs. Most smaller businesses continue using paper invoices or PDF invoices sent by email.

Portugal is closely monitoring the experience of nearby countries like Spain and Italy which have embarked on mandated B2B e-invoicing to inform their own timeline. The rollout is expected to focus first on large taxpayers and then gradually extend to medium and small-sized enterprises.

## E-Invoicing Formats and Platforms

For public procurement, e-invoices must be submitted to the National Public Procurement Portal in the XML format defined by the European standard EN 16931. The portal offers several options for suppliers to generate and transmit compliant invoices including:

- Procure-to-pay software integrated via the portal's API
- Free browser-based invoice creation tool 
- Uploading XML files generated from other systems
- Third-party e-invoicing platforms connected to the portal

For private sector e-invoicing, any format like PDF can currently be used as long as the invoice data is transmitted electronically. The government has not yet designated any centralized platforms for transmission of structured e-invoices between companies. Adoption so far has utilized various private networks and service providers.

## Issuing and Receiving E-Invoices

Suppliers issuing e-invoices to government entities must electronically sign and submit structured invoices in XML format to the National Public Procurement Portal. These undergo automatic validation checks on the format and issuer credentials before accepting. 

The portal returns a unique registry number upon receipt that identifies the invoice in the national e-invoicing system. It then makes the e-invoice and issuance data available to the buying entity, automatically triggering the start of the payment process. 

Suppliers can track status and retrieve both invoices and issuance receipts from the portal. Buyers can look up invoice details based on search parameters like supplier tax ID, invoice number, date, value etc.

For B2B and B2C invoices, issuers and receivers exchange invoices in formats and methods mutually agreed upon, such as EDI, email, web uploads etc. However, businesses are likely to transition to structured e-invoicing over time, especially if it gets mandated.

## E-Invoice Processing and Integration

The National Public Procurement Portal automates much of the invoice receipt, registration and routing process for government entities. Invoice data can be fed into the entity’s financial system, avoiding manual re-entry.

However, proper integration still needs to be implemented by each public entity to update payables in accounting, post against appropriate cost centers, reconcile invoices and perform three-way matching with purchase orders. 

Private companies face similar integration challenges to incorporate inbound e-invoices into their financial systems and ERPs seamlessly. Adoption of automated workflows for handling and approval of e-invoices can significantly optimize the order-to-pay cycle.

## Asynchronous document exchange flow
<table  align="center" border="1px" border-color="#dedede"><tr><td align="center">
  <img src="/docs/img/asynchronous-document-exchange-flow.PNG" alt="Asynchronous document exchange flow"/>
  </td></tr>
  <tr><td align="center">Asynchronous document exchange flow</td></tr>
</table>

1. Emitter system (ERP) sends a legal document (invoice, credit note, or debit note) and immediately receives (synchronously) a RequestId.
2. If the document is processed successfully (quality control with no reported errors),eSPap sends the document to the receiving system through the established communication channel.
3. At any time, the emitter system can inquire with eSPap systems using the RequestId, sent in the document submission response (1), to obtain the result of the document processing.
4. As soon as the emitter system obtains the processing result, it can inquire about the document's status at any time, using either the RequestId or the Business Key.
5. The receiving system sends N status messages according to the processing and validation of the document in its systems.

## Benefits and Challenges of E-Invoicing

The transition to e-invoicing brings significant benefits but also some change management challenges:

Key Benefits:

- Cost reduction from eliminating paper and manual processing
- Faster settlement of invoices and improved cash flow
- Increased accuracy of data for accounting and tax reporting
- Enhanced visibility into invoice processing status
- Better archival and analytics on invoice data
- Seamless integration with national reporting systems

Key Challenges:

- Change management and user training on new processes
- Upgrading existing finance systems and integration work needed
- Dependency on reliability of central e-invoicing platform
- Adapting workflows to handle exceptions like rejections
- Getting buy-in and transitioning suppliers currently issuing paper invoices
- Cybersecurity risks from increasing digital attack surfaces

Overall, the gains for government, private entities, and the national economy from transitioning to automated e-invoicing at scale justify the temporary disruptions and costs involved.

## Recommendations for Smooth Transition

Both private and public sector organizations in Portugal should take the following steps for a successful transition to e-invoicing:

1. Do a comprehensive review of existing invoice workflows and data needs – identify changes required to extract and provide all information required for structured e-invoicing.
2. Assess software systems and determine upgrades, integrations, and new solutions needed – including accounting software, ERPs, procurement systems, etc.
3. Consult with major existing suppliers and key customers on their e-invoicing readiness and capabilities.
4. Provide technical specifications and testing facilities early on to involve suppliers in the transition.
5. Validate that all electronic invoice formats and transmission methods comply with legal requirements. 
6. Train accounts payable and procurement teams on new e-invoicing procedures and exception management.
7. Implement robust cybersecurity controls to prevent unauthorized access to invoice data during transmission or storage.
8. Start transition by onboarding larger suppliers first followed by smaller suppliers – conduct pilot tests before full-scale rollout.
9. Plan for contingencies and business continuity procedures in case of disruptions to availability of e-invoicing platforms.

Portugal’s e-invoicing mandate for the public sector aims to increase efficiency, improve financial controls, close revenue gaps, and integrate with national reporting systems. The cost savings for government alone are estimated at €195 million annually. The digital invoicing transformation will deliver significant productivity gains and economic benefits nationally in the long term.

## Frequently Asked Questions
Here are answers to some common questions about e-invoicing in Portugal:

<details>
  <summary>What is considered an electronic invoice?</summary>
 To comply with the EU standard, an electronic invoice must be in a structured digital format (XML or EDI) that allows for automatic and electronic processing. PDFs attached to emails or other formats do not qualify. 
</details>
<details>
  <summary>Who is required to issue electronic invoices? </summary>
  For public procurement, all suppliers to government entities above specified contract values must issue e-invoices since Nov 2020. Private companies can adopt e-invoicing voluntarily for now.
</details>
<details>
  <summary>Does the e-invoicing mandate apply to all public contracts?</summary>
No, only contracts above the annual thresholds must follow e-invoicing – see question below for details. Contracts below threshold can continue paper or PDF invoices.
</details>
<details>
  <summary>What are the invoice value thresholds for public contracts?</summary>
Suppliers must issue e-invoices for contracts over €10,000 for entities above €3 million threshold and over €30,000 for others. See Regulation 289/2020, Article 4.
</details>
<details>
  <summary>How do suppliers issue electronic invoices to public entities?</summary>
All e-invoices must be submitted in XML format to the National Public Procurement Portal (Portal Nacional de Compras Públicas) run by ESPAP.
</details>
<details>
  <summary>What is the Micro Portal for SMEs?</summary>
  The e-Micro Company Portal (Portal e-Micro Empresa) allows small businesses to join the e-invoicing system and easily issue and retrieve e-invoices via this free online tool.
</details>
<details>
  <summary>Can the public entity invoice receiver share access to electronic invoices with others?</summary>
Yes, the authorized entity user with access can grant permissions to view or manage e-invoices to other users under their control, following the entity's access policies.
</details>
<details>
  <summary>How does a supplier initiate e-invoicing if the public entity receiver is not yet ready?</summary>
In case the public entity is not yet exchanging e-invoices with suppliers, the supplier should contact the project support team at ESPAP via the support request form available on their website.
</details>
<details>
  <summary>If a supplier faces issues sending e-invoices, what should they do?</summary>
The supplier should contact the ESPAP support team through the support request form describing the issue faced. The team will provide troubleshooting and resolution.
</details>
<details>
  <summary>How can a supplier check the onboarding status of public entities?</summary>
The list of entities already exchanging electronic invoices with suppliers through the National Public Procurement Portal is published and updated on the ESPAP website.
</details>
<details>
  <summary>What is the EN 16931 standard for e-invoices?</summary>
  EN 16931 defines the semantic data model and syntax for the core elements of an electronic invoice in the EU. All e-invoices issued through the portal must comply with this standard.
</details>
<details>
  <summary>How are PDF invoices sent via email considered? </summary>
While submission of scans or PDF invoices attached to emails can suffice for contracts below threshold, these are not considered full electronic invoices under the EU standard.
</details>
<details>
  <summary>Can buyers retrieve electronic invoices without logging into the system?</summary>
  Yes, the National Public Procurement Portal allows buyers to look up an invoice by providing key details like seller tax ID, invoice number, date and value without having to log in. This facilitates occasional access.
</details>
<details>
  <summary>If a user sees the error "Invalid Login" in the e-invoices portal, what should be done?</summary>
This error indicates that a user is trying to enter the system with credentials that either do not exist in the system or are incorrect. The password and user ID should be checked and tried again.
</details>
<details>
  <summary>How can someone without access get information or request access to the e-Invoicing system? </summary>
  To request information or access to the National Public Procurement Portal, prospective users should fill out the supplier registration questionnaire form available on the ESPAP website. Access requests will be evaluated per entity onboarding rules.
</details>
<details>
  <summary> What is the EN 16931 standard for e-invoices? </summary>
  EN 16931 defines the semantic data model and syntax for the core elements of an electronic invoice in the EU. All e-invoices issued through the portal must comply with this standard.
</details>

## Reference Link
* [e-Invoice Format](https://www.espap.gov.pt/Imagens/Documento.ashx?id=269)
* [Fatura Eletrónica – FE-AP einvoicing portal](https://www.feap.gov.pt/Paginas/Default.aspx)

