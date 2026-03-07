---
id: zatca-fatoora-saudi-arabia-einvoicing-zakat-tax-and-customs-authority
title: ZATCA in Saudi Arabia - A Complete Guide
keywords:
  [
    ZATCA in Saudi Arabia,
    Einvoicing regulations in Saudi Arabia,
    ZATCA updates in Saudi Arabia,
    Tax compliance in Saudi Arabia,
    ZATCA status in Saudi Arabia,
    Einvoicing implications in Saudi Arabia,
    Saudi Arabian tax regulations,
    ZATCA compliance requirements,
    Saudi Arabian e-invoicing landscape,
    ZATCA implementation in Saudi Arabia,
  ]
sidebar_label: Saudi Arabia - Zatca
description: Stay up-to-date with the latest Einvoicing regulations, status, and updates on ZATCA in Saudi Arabia. Understand the implications of ZATCA and how it affects tax compliance. This comprehensive article provides expert insights into the e-invoicing landscape in Saudi Arabia under ZATCA. Get the information you need to ensure compliance and navigate the evolving tax regulations.
published: false
tags:
  - Zatca
  - Einvoicing Network
  - Saudi Arabia
  - KSA
  - Fatoora
  - Clearance model
---

<table  >
    <tr>
      <td align="left"><b>Country</b></td>
        <td align="left">Kingdom of Saudi Arabia</td>
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
        <td align="left">Mandatory</td>
    </tr>
  <tr>
        <td align="Left">Status - Non residents</td>
        <td align="left">Not Applicable</td>
    </tr>
  <tr>
        <td align="left">Formats</td>
        <td align="left">QR code on PDF </td>
    </tr>
  <tr>
        <td align="left">Authority</td>
        <td align="left">ZATCA</td>
    </tr>
  <tr>
        <td align="left">Network name</td>
        <td align="left">Digital Zakat(FATOORA)</td>
 </tr>
  <tr>
        <td align="left">Legislation</td>
        <td align="left">E-invoicing regulations, published on Friday December 4th 2020</td>
 </tr>
</table>

## Overview

The Zakat, Tax and Customs Authority is responsible for the implementation of Einvoicing in the Kingdom of Saudi Arabia. The regulations governing E-Invoicing in KSA were issued by the Board of Directors of the Zakat on December 4, 2020. The implementation included 2 phases
Phase 1 known as 'Generation Phase', started from 4th December 2021 and phase 2 known as 'Integration Phase' started from 1st January 2023.
Einvoicing is usually referred to as FATOORA in KSA.

In phase 2, the relevant businesses must integrate their systems with the Tax Authority's system in order to obtain a clearance for Tax Invoices (including the corresponding debit and credit notes) and report the transactions for which Simplified Tax Invoices (including the corresponding debit and credit notes) have been issued.

Tax Invoices must be submitted in XML format (not PDF/A-3) to FATOORA Platform for“ Clearance ”using APIs. FATOORA Platform will validate whether the Tax Invoice is compliant with XML Implementation Standard and run additional referential checks. Once the Tax Invoice pass validation checks, FATOORA Platform will “Clear ”the Tax Invoice by including a Cryptographic Stamp and a QR Code to the XML. The “Cleared ”XML will be sent back to the taxpayer using API.

The taxpayers have an option to generate Simplified Tax Invoices for the B2B transactions if the value of Taxable Supplies is less than 1,000 SAR. It must be noted that for Simplified Invoices for B2C transaction can be generated for any value (even for transactions where
value of Taxable Supplies exceed 1,000 SAR). This limit of 1,000 SAR is only applicable when the supplier chooses to issue Simplified Tax Invoice for B2B transactions.

## Who need to generate einvoice in KSA ?

Phase 2 implementation is in groups. The first group is same as the first group selected for phase 1. All resident businesses who are registered for VAT in Saudi Arabia whose revenues exceed 3 billion riyals for the calendar year 2021 forms this group and are required to implement Phase 2 of e-invoicing between 1 January 2023 to 30 June 2023. The details of the subsequent groups will be announces 6 months in advance before the specific date of linkage with the Tax Authority's system.

## Applicable Transactions

To comply with regulations, you are obligated to generate e-invoices for domestic sales, exports originating from KSA to other nations, and transactions involving prepayments for goods and services. However, e-invoices are not mandatory for transactions exempt from VAT and their associated payments, imports entering KSA, or supplies subject to the reverse charge mechanism.

## Formats

### Standard e-invoice Or Tax Invoice

![Tax Invoice](/img/KSA-tax-invoice-example-fatoora-saudi-arabia.png)

Standard E-Invoices are generally issued in Business to Business (B2B) transactions.A Tax Invoice as per Article 53(1) of VAT Implementing Regulations that is generated and stored in a structured electronic format through electronic means. The format is XML or PDF/A-3 format with embedded XML. Note that a paper invoice that is scanned or its photo is not considered an e-invoice.

### Simplified e-invoice

![Simplified Tax invoice](/img/KSA-simplified-tax-invoice-fatoora-saudi-arabia.png)

A Simplified Tax Invoice as per Article 53(7) of VAT Implementing Regulations that is generated and stored in a structured electronic format generally issued for a B2C (business to consumer) transaction and does not generally include the buyer’s details1. Optionally, Simplified Tax Invoices may also be issued for business-to-business transactions in case the value of supply is below SAR1000. Persons subject to the E-Invoicing Regulation will be required to transmit all Simplified Tax Invoices to the FATOORA Portal within (24) hours from its issuance. Once the Simplified Tax Invoice passvalidation checks, FATOORA Platform will provide an API response.

Simplified Tax Invoices must be generated in XML format or a PDF/A-3 (with embedded XML). Taxpayer’s einvoice generation solution must stamp the XML using CSID issued by ZATCA and also include a QR Code which is compliant with Phase 2 requirements (9 tags in TLV base64 format).

## Types of Einvoices

### Standard e-invoice process

![Standard e-invoice process](/img/standard-tax-einvoices-process.png)

#### Clearance Model of Tax Invoices for B2B and B2G

Clearance is a real-time transaction integration model of Tax Invoices, where after integration, the taxpayer directly sends the electronic invoice prior to sharing with the buyer. Tax Invoices are then validated across several categories of varying level, and if approved, are stamped by the Authority and returned to the taxpayer to be shared with the buyer. Clearance applies to all Tax Invoices and
their associated credit/debit notes.

1. Supplier generates invoice file and sends it to ZATCA platform
2. ZATCA (Fatoora) Platform validates invoice information
3. File is digitally signed by ZATCA
4. Supplier receives cleared and signed invoice
5. Supplier shares invoice with the buyer
6. Buyer can verify invoice clearance status on the platfrom and / or check digital signature

### Simplified e-invoice process

![Simplified einvoice](/img/simplified-einvoice-process.png)

#### Near-real time reporting of Simplified Tax Invoices for B2C

Reporting is a near-real time transaction model, where Simplified Tax Invoices and their associated Credit/Debit notes are uploaded to the FATOORA Portal within 24 hours from issuance. Once uploaded, Simplified Tax Invoices are then validated, and an acknowledgement through the
API is reported back to the taxpayer.

1. Supplier generates invoice with QRcode including digital map
2. Customer can verify invoice authenticity by scanning QR code. Request is also shared with the ZATCA e-invoicing platform to asynchronously verify invoice upload and notify the user once the invoice is uploadedby the taxpayer
3. Invoice data is stored by the supplier under required structure and format in the Supplier's invoicing software
4. Invoice data is shared with ZATCA e-invoicing platform whenever connectivity is available(i.e. as closeto real time as possible)

### Debit Note

Debit notes are issued by the sellers in order to issue a correction in value to buyers. Debit notes are used for increasing the value of the original invoice or the VAT amount. Debit notes follow the same format as the invoice for which they have been issued.

### Credit Note

Credit notes are issued by the sellers in order to refund buyers and are used to correct invoices information if generated with an error. Credit notes follow the same format as the invoice they have been issued upon.

Each stored invoice must follow a naming convention for naming of the file: VAT Registration(tax registration number) + Timestamp (date and time at the point of invoice generation) + Invoice Reference Number

## QR code components

The following information should be present in the QR code

- Seller’s name
- VAT registration number of the seller
- Date and time of invoice/note
- VAT amount
- Total amount (with VAT) of invoice/note

## How to Sign Up for einvoicing?

Entities need to singup with compliant E-Invoice Solutions. The Taxpayers will be able to connect to the API of the FATOORA Portal by following the below steps:

1. Taxpayer accesses FATOORA portal website (FATOORA.zatca.gov.sa) and logs in using ERAD credentials
2. Taxpayer requests OTP code for the solution to integrate
3. Taxpayer populates OTP code in E-Invoice Solution
4. Taxpayer reviews if solution was successfully on-boarded

## Editing Einvoices

Eivoices generated cannot be edited. Nonetheless, it is possible to generate electronic invoices for VAT-compliant debit and credit notes, using on ZATCA's platform. These notes should be linked to the initial invoice that was originally issued. Suppose, for example, that a buyer returns a product and you are unable to modify the original invoice. In such cases, you can generate a credit note on the e-invoicing system . It is important to note that all invoicing and note issuance activities must be conducted through the same e-invoicing system and adhere to ZATCA's regulations. This approach establishes a standardized process for transactions, ensuring uniformity and secure storage of information.

## Things to Note

- The e-invoicing requirements will be applicable to all taxable goods and services, regardless of whether they are subject to standard or zero-rated VAT.
- E-invoicing is mandatory for all transactions involving business-to-business (B2B), business-to-government (B2G), and business-to-consumer (B2C) interactions. When issuing an e-invoice to a buyer, it is necessary to provide a printed copy as well.
- The invoices must be in Arabic. While it is possible to translate or include additional languages, issuing the e-invoice in Arabic is a mandatory requirement.
- All business owners registered for VAT within KSA, with the exception of non-resident taxable individuals, are required to adopt the e-invoicing process for both domestic and international sales. Additionally, if you act as a third party in KSA and issue tax invoices on behalf of a taxable person, you must also comply with the e-invoicing regulations.

## Frequently Asked Questions

<details>
  <summary>How can a taxpayer verify that their E-Invoice Solution has been successfully integrated?</summary>
  The Taxpayers can use the FATOORA Portal (https://FATOORA.zatca.gov.sa/) in order to view a summary list of all their integrated E-Invoice Solutions This list is availble under the section View List of Solutions and Devices. 
</details>
<details>
  <summary>If one VAT Registration Number has multiple devices, should each device be registered?</summary>
  Yes, every device issuing invoices with the same VAT number should be registered. 
</details>
<details>
<summary>Can I submit the same invoice twice?</summary>
No, ZATCA does not allow the same document to be submitted twice. However, this will not be rejected at the time of submission.
</details>
<details>
<summary>For Tax Invoices, what should be done if the clearance fails before issuing the invoice to the buyer?</summary>
In case of Tax Invoices, if clearing fails (Response is 400 Error), then the taxpayer must submit another invoice for clearance after rectifying the errors. Please note that every document shall have its own hash and counter value. Rejected document’s hash and counter
value should not be changed or updated.
</details>
<details>
<summary>Is it possible to issue a credit note without a reference to an invoice?</summary>
Issuing Credit Note without reference to Original Invoice will be violating requirements of Article 54 of KSA VAT Regulations
</details>
<details>
<summary>Do we need to send to ZATCA the Invoices where all sold items and services are “Services outside scope of tax / Not subject to VAT”?</summary>
“The Tax Category Code O is for those transactions where invoice may contain a line item with Standard Rate supply and other with” “Not Subject to VAT”. There is no need to issue a Tax Invoice (or E Invoice) where the transaction solely covers supplies which are “Not Subject to VAT”.
</details>
<details>
<summary>We have some customers that issue invoices to companies with VAT in Saudi Arabia, but that are non-residents as they have no physical address in KSA territory. Is it possible to indicate a foreign address although the VAT is registered in Saudi Arabia?</summary>
Yes. It is possible to indicate a foreign address although the buyer is VAT is registered in KSA
</details>

## Latest updates

:::note Latest updates on FATOORA

- `28-Apr-2023` **Criteria for selecting the taxpayers in Wave 4 for implementing phase 2**
  - The Fourth wave include all taxpayers whose revenues subject to VAT exceeded 150 Million Saudi Riyals during 2021 or 2022. VAT registered taxpayers meeting the criteria should integrate their e-invoicing solutions with (FATOORA) Platform starting from November 1, 2023.
    [Learn More](https://zatca.gov.sa/en/MediaCenter/News/Pages/news_1039.aspx)

- `24-Mar-2023` **Criteria for selecting the taxpayers in Wave 3 for implementing phase 2**
  - The Third wave include all taxpayers whose revenues subject to VAT exceeded 250 Million Saudi Riyals during 2021 or 2022. VAT registered taxpayers meeting the criteria should integrate their e-invoicing solutions with (FATOORA) Platform starting from October 1, 2023.
    [Learn More](https://zatca.gov.sa/en/MediaCenter/News/Pages/news_1023.aspx)

- `23-Dec-2022` **Criteria for selecting the taxpayers in Wave 2 for implementing phase 2**
  - The second wave include all taxpayers whose revenues subject to VAT exceeded (half a billion Saudi riyals) during 2021. VAT registered taxpayers meeting the criteria should integrated their E-invoicing solutions with (FATOORA) Platform starting from July 1, 2023.
    [Learn More](https://zatca.gov.sa/en/MediaCenter/News/Pages/News_987.aspx)

:::

## Glossary

### Clearance

Clearance involves the Authority verifying that the Electronic Tax Invoices and their associated Electronic Notes, submitted by individuals or entities, meet the specified controls and requirements. The Authority will apply a Cryptographic Stamp only to the Invoices and Notes that satisfy these controls and requirements. It's important to note that the Clearance process does not apply to Simplified Tax Invoices.

### Invoice Reference Number

The E-Invoice Solution assigns a distinct and consecutive number to each issued invoice, as mandated by article 53 of the VAT Implementing Regulations. The regulations, however, do not prescribe a particular format for the Invoice Reference Number. As a result, the reference numbers can vary, such as having a separate sequential reference number for each branch, as long as the Tax Invoice is clearly defined and follows a logical sequence.

### Cryptographic Stamp

A cryptographic electronic stamp is generated using algorithms to guarantee the authenticity of the source and the integrity of the content of data for Electronic Invoices and their associated Electronic Notes. It also verifies the identity of the issuer for the Invoices and Notes, ensuring adherence to the provisions and controls outlined in the VAT Law and its Implementing Regulation concerning the generation of Electronic Invoices and Notes.

### Cryptographic Stamp Identifier(CSID)

The Cryptographic Stamp Identifier (CSID) serves as a distinct identifier that establishes a connection between the E-Invoice Solution Unit and a reliable third party capable of verifying the identity of the individual or entity subject to the E-Invoicing Regulation.

### UUID

A 128-bit identifier, produced through an algorithm specifically designed to minimize the chances of generating the same identifier by any other entity in the known universe using the same algorithm. The UUID (Universally Unique Identifier) is created by an E-Invoice Solution that complies with the required standards, and it is embedded within the XML invoice. It is worth noting that in Windows operating systems, UUIDs are commonly referred to as GUIDs (Globally Unique Identifiers).

### Hash

A hash function is a type of function that can be utilized to convert data of any size into fixed-size values known as hashes, which occupy minimal space. The process of hashing is deterministic, which implies that it consistently generates the same hash value for a specific input value. It is impossible to reverse-engineer the original data from a hash, highlighting that the purpose of hashing is to ensure the integrity of a file or data by verifying that it has not been modified

## Important Links

- [Roll out Phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [E-invoicing regulations- Arabic](https://zatca.gov.sa/ar/E-Invoicing/Introduction/LawsAndRegulations/Documents/E-invoicing_Reg_AR.pdf)
- [E-invoicing regulations- EN](https://zatca.gov.sa/en/E-Invoicing/Introduction/LawsAndRegulations/Documents/E-invoicing%20Regulation%20EN.pdf)
- [Sandbox for testing](https://sandbox.zatca.gov.sa/)

## Reference Links

- [Phase 2 Groups](https://zatca.gov.sa/ar/MediaCenter/News/Pages/News_912.aspx)
- [Phase 2 summary](https://www.ey.com/en_gl/tax-alerts/saudi-arabia-releases-final-e-invoicing-regulations-for-phase-2)
- [Official implementation guideline](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [Fatoora Portal User Guide](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/Fatoora_Portal_User_Manual_English.pdf)
- [XML Standards](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20220624_ZATCA_Electronic_Invoice_XML_Implementation_Standard_vF.pdf)
- [Data Dictionary](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/EInvoice_Data_Dictionary.xlsx)
