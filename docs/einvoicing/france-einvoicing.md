---
id: chorus-pro-einvoicing-france
title: E-Invoicing in France - An In-Depth Overview
keywords:
  [
    e-invoicing,
    B2B,
    France,
    obligatory,
    Chorus Pro,
    clearance model,
    taxpayer,
    electronic reporting,
    invoice formats,
    UBL,
    CII,
    Factur-X,
    certified provider,
    digitization platform,
    B2B2G portal,
    EU directive,
    e-reporting,
    digital tax reports,
  ]
sidebar_label: France - Chorus Pro
description: Stay up-to-date with the latest developments in France's mandatory B2B e-invoicing landscape, facilitated by the Chorus Pro platform. Explore the phased implementation, diverse invoice formats (UBL, CII, Factur-X), and the expanded functionalities of the B2B2G portal. Discover the obligations for taxpayers, including electronic reporting, and learn about the government's efforts to enhance transaction data transparency. Stay ahead in the realm of e-invoicing as France embraces a more streamlined and efficient invoicing system.
tags:
  - France
  - Einvoicing
---

<table  >
    <tr>
      <td align="left"><b>Country</b></td>
        <td align="left">France</td>
    </tr>
    <tr>
        <td align="Left">Status - B2G</td>
        <td align="left">Mandatory</td>
    </tr>
  <tr>
        <td align="Left">Status - B2B</td>
        <td align="left">Mandatory</td>
    </tr>
  <tr>
        <td align="Left">Status - B2C</td>
        <td align="left">NA</td>
    </tr>
  <tr>
        <td align="left">Formats</td>
        <td align="left">UBL, CII, or Factur-X</td>
    </tr>
  <tr>
        <td align="left">Authority</td>
        <td align="left"></td>
    </tr>
  <tr>
        <td align="left">Network name</td>
        <td align="left">Chorus Pro</td>
 </tr>
  <tr>
        <td align="left">Legislation</td>
        <td align="left"></td>
 </tr>
</table>

France has been steadily moving towards adopting e-invoicing over the past decade, with legislation and infrastructure being put in place to support the transition. E-invoicing refers to the digital transmission and management of invoices, and France aims to make this the mandatory method for both private companies and public entities.

## Regulatory Framework Driving E-Invoicing Adoption

The push towards e-invoicing in France began with the Law on the Modernization of the Economy (LME) passed in 2008. This law required the French government to accept digitally submitted invoices from suppliers providing goods or services.

This was followed by the Order 2014-697 passed in 2014, which made e-invoicing mandatory between suppliers and public entities according to a staged timeline based on company size:

- January 1, 2017: E-invoicing became mandatory for large companies with over 5000 employees as well as all central and local public entities.
- January 1, 2018: Mandatory for mid-size companies having between 250-5000 employees.
- January 1, 2019: Mandatory for small and medium-sized enterprises with 10 to 250 employees.
- January 1, 2020: Mandatory for micro enterprises with less than 10 employees. This deadline brings all private French companies into the e-invoicing fold.

The 2014 Order covers invoices issued by suppliers to the State, local authorities, and national public institutions. It also applies to contracting parties and subcontractors working on public contracts.

As of January 1, 2020, e-invoicing has become mandatory for all suppliers issuing invoices to the French government, regional and local authorities, public institutions, municipalities, universities, hospitals, schools, and every other public sector organization in France. Non-compliance can lead to invoices being rejected and payments being delayed.

## The Chorus Pro E-Invoicing Platform

To enable suppliers to submit e-invoices to public sector clients, the French government launched the Chorus Pro platform in 2017 after several years of development.

Chorus Pro serves as a central hub for suppliers from all sectors to digitally issue, transmit, track, and archive invoices addressed to public sector entities. It is managed by the Agency for State Financial Information Technology (AIFE).

The platform aims to simplify and streamline the invoicing process through a single centralized portal. It replaces the previous model of suppliers having to submit invoices separately to each public entity.

As per the 2014 Order, use of Chorus Pro is mandatory for all suppliers and public sector entities within scope. Non-compliance can lead to penalties.

## Connecting to Chorus Pro

Suppliers have three main options for connecting to Chorus Pro and submitting e-invoices:

1. EDI Mode: The supplier's accounting or ERP system can be directly integrated with Chorus Pro to enable automated transmission of invoice data in EDI format (electronic data interchange). This allows seamless transfer of structured invoice data without manual rekeying.
2. API Mode: The supplier's accounting system can connect to Chorus Pro via API (application programming interface) to access the platform's invoicing functions like submitting invoices, adding attachments, looking up invoice status etc. This is suitable if suppliers already have business portals or if they want to connect via their third-party integrator.
3. Portal Mode: Suppliers can manually upload PDF invoices through the Chorus Pro portal. They can also enter the invoice details manually using the portal's forms. This is the easiest way for small suppliers with low invoice volumes. However, it requires manual work for every invoice.

EDI and API modes require more upfront work to develop the technical integration but they automate the entire invoicing process after that. Portal mode is the simplest to get started but remains manual.

## Key Capabilities of Chorus Pro

Some of the key capabilities provided by Chorus Pro include:

- Central platform for suppliers to submit all e-invoices addressed to French public sector clients
- Lookup directory of all eligible public sector entities along with key info like payment terms, service codes etc. Helps suppliers address invoices correctly.
- Ability to transmit invoices either as structured data or as PDFs
- Archiving of invoices for 10 years on behalf of the suppliers
- Audit trail of status updates at every step of the invoice processing lifecycle
- Ability for suppliers to add attachments and supporting documents for complex invoices
- Extensive reporting capabilities for both suppliers and clients
- Rules and validations engine that checks all invoices for errors before acceptance
- Workflow capabilities for invoices needing approval like subcontractor payment requests
- Option for suppliers to "recycle" rejected invoices with corrections
- API access to integrate Chorus Pro capabilities into partner portals or accounting systems
- Responsive support team that can be reached via the portal or by email
- High availability (24 x 7) with extensive monitoring and alerts.

## Functional scope of Chorus Pro

<table align="center" border="1px" border-color="#dedede"><tr><td>
  <img src="/docs/img/Functional-scope-of-Chorus-Pro.PNG" alt="Functional scope of Chorus Pro"/>
  </td></tr>
  <tr><td align="center">Functional scope of Chorus Pro</td></tr>
</table>

## Onboarding Process for Suppliers

Private companies supplying goods or services to French public sector entities have to go through several steps to get fully setup on Chorus Pro:

1. Create a supplier company account on Chorus Pro – This will be linked to their official SIRET number which serves as a unique French company identifier.
2. Add users to the account and assign roles like manager, accounting etc along with permissions.
3. Select their mode of connection: EDI, Portal or API.
4. For EDI mode:
   - Analyze invoice data formats required by Chorus Pro
   - Develop EDI connector as per technical specifications
   - Conduct end-to-end testing of invoice transfer
   - Obtain EDI production credentials from Chorus Pro
5. For API mode:
   - Analyze Chorus Pro’s API documentation
   - Develop API integration within their portal or accounting software
   - Conduct testing to validate invoice submission, status updates etc
6. For Portal mode:
   - No integration required. User training needed on portal usage.
7. Start submitting e-invoices to clients via Chorus Pro in production mode
8. Monitor invoice status on an ongoing basis and take action in case of any rejections
9. Ensure accounting team is familiar with new workflow - e.g. logs into portal to check status, download invoices etc

## Public Sector Onboarding

French public sector entities from central government to municipalities also need to go through an extensive onboarding process:

1. Create an organizational account on Chorus Pro using their SIRET number
2. Add users and configure their roles like manager, accountant, accounting assistant etc
3. Make configurations required by their accounting workflows – e.g. making service codes mandatory on supplier invoices
4. Test invoice submission scenarios in the Chorus Pro sandbox environment
5. Communicate instructions to suppliers on formats, mandatory info, validations etc
6. Start receiving e-invoices from suppliers through Chorus Pro
7. Handle exceptions like rejects, disputes, reminders etc
8. Integrate Chorus Pro with their financial system to enable automated posting of approved invoices
9. archiving
   Train employees on new paperless processes for invoicing, approvals, payments and archiving.

Many public entities find the transition challenging due to the deep integration required with their legacy financial systems and business processes.

## Supplier Identification

Within Chorus Pro, every supplier organization is uniquely identified based on:

- Country code
- Identifier type:
  - SIRET number for suppliers based in France
  - EU VAT number for EU-based suppliers
  - First 16 characters of company legal name for suppliers outside EU
- Identifier: The actual registration number or name component based on the identifier type

This composite identifier enables accurate identification of suppliers across country borders.

For public sector entities, the 14-digit SIRET number alone uniquely identifies them on the Chorus Pro platform.

## Invoice Submission Protocols

To get their invoices accepted, suppliers need to follow certain protocols laid out by Chorus Pro:

- Invoice number must be unique for every invoice for a client in a calendar year
- Standard invoice details must be provided – date, client ID, supplier ID, addresses, payment terms, line items, taxes etc
- For public works projects, relevant contracts and milestones should be referenced
- Any supplementary documents like timesheets or work certificates should be attached as needed
- Service codes may need to be provided as mandatory info for certain clients
- Invoice value should be in Euros; foreign currency invoices get converted
- Rejected or failed invoices can be resubmitted after correction

Once submitted to Chorus Pro, invoices go through multiple validation checks:

- Identifier checks - Valid SIRET numbers for supplier and client?
- Completeness checks – Are all mandatory fields like invoice no., date etc. entered?
- Consistency checks – Do service codes, tax amounts etc. align with client instructions?
- Uniqueness check – Is this a duplicate invoice already submitted?
- Date validations – Is invoice date in the past?

Any invoices failing these checks will be automatically rejected by Chorus Pro and the supplier has to make corrections and re-submit. This could be due to something as minor as a wrong client SIRET number.

## Invoice Processing Stages

Once submitted to Chorus Pro, the invoice goes through several stages:

1. Available to client: Invoice becomes visible under “Received Invoices” in the client’s Chorus Pro account. An email notification is also sent.
2. Processing: Client reviews invoice for accuracy, contract references, calculations etc. They may reject, ask for clarifications or approve it.
3. Payment mandated: If approved, the invoice moves to downstream financial systems for payment processing as per the client’s workflows.
4. Released for payment: The accounting system issues the final payment order to the bank.
5. Payment confirmation: Supplier receives payment in their bank account from the client.

The Chorus Pro platform automatically updates the status at each stage, providing an audit trail. Suppliers receive alerts whenever their invoice status changes. They can also log in and check manually.

For fully automated clients, invoices may go from received to released for payment within minutes. More complex workflows take longer depending on approvals required. Rejected invoices add delays and must be corrected and resubmitted after clarification.

## Archiving of Invoices

Chorus Pro archives a copy of the invoice for 10 years on behalf of the supplier. This meets the fiscal requirements of the French government.

Suppliers can access these archived invoices as PDFs through an audit trail that shows the various statuses and timestamps.

## Long-Term Impacts on Stakeholders

Adoption of e-invoicing through Chorus Pro is having significant long-term impact across French businesses and public sector entities:

- Suppliers must digitize their processes, train staff on new tools, and integrate with Chorus Pro technically. This requires overcoming resistance to change.
- SMEs face a steep learning curve and major procedural overhaul. Most need to work with external integrators to implement solutions.
- Public sector entities have to modernize legacy systems, adjust accounting workflows, and help suppliers with transition. Storage moves from physical to digital.
- Solution providers have a vast new market to cater to across France – for EDI, PDF, PDF signing, cloud storage etc. They also provide integration services.
- All stakeholders must ensure their invoice security and archival processes meet French fiscal requirements.

The scope of changes is vast, but the transition is leading to more efficient and transparent processes for invoicing, payment, and recordkeeping between French public agencies and private businesses. This is enhancing accountability while reducing costs for all parties in the long run.

## Latest updates

:::note Latest updates on Einvoicing

- `28-July-2023` **Postponement of the mandatory einvoicing schduled for july 2024**
  - French [General Directorate of Public Finance](https://www.impots.gouv.fr/actualite/facturation-electronique-report-de-lentree-en-vigueur-prevue-en-2024) announced the postponement of the the planned einvoicing implementation from 1sy july 2024. Revised implementation date is yet to be announced. [Learn More](https://presse.economie.gouv.fr/28072023-generalisation-de-la-facturation-electronique-report-de-lentree-en-vigueur-prevue-en-2024/)

:::
