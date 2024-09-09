---
id: india-gst-guidelines-indirect-tax-sales-tax-india
title: India GST guidelines 
keywords: [India GST,GSTIN,GST rules, GST guidelines, GST registration, GST filing, Indian tax laws, GST compliance, GST for businesses, GST in India]
sidebar_label: India
description: Learn about the GST rules and guidelines in India for businesses with our comprehensive country guide. From registration to filing returns, our article covers everything you need to know to stay compliant with Indian tax laws.
tags:
  - India
  - GST
---

<table>
  <thead>
    <tr>
      <th colspan="2">FACTSHEET</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Country code</td>
      <td><b>IN</b></td>
    </tr>
     <tr>
      <td>Tax name</td>
      <td>Goods and Services Tax(GST)</td>
    </tr>
    <tr>
      <td>Tax Authority</td>
      <td>Central Board Of Indirect Taxes & Customs</td>
    </tr>
  </tbody>
</table>

## Overview

Indirect taxes in India is called GST (Goods and Services Tax). It came into effect in July 2017. It replaced several indirect taxes such as VAT, excise duty, services taxes etc.  Read [more](/files/GST-Concept-and-Status01062019.pdf)

## Registration 

The registration in GST is PAN based and State specific. Supplier has to register in each of such State or Union territory from where he effectssupply. A person registered in one State is considered ‘unregistered person’ outside the State. 

If a person has unit in SEZ(Special Economic Zone) or is a SEZ developer and also unit in domestic tariff Area (i.e. outside the SEZ) in the same State, then he has to take separate registration for his SEZ unit / as a SEZ developer as a separate place of business of him. The GST law does not have the facility of centralized registration for units across multiple states. 

Read [more](/files/registration-under-gst.pdf) 

### Who should register for GST 

Threshold limits of aggregate turnover for exemption from registration and payment of GST for the suppliers of goods is Rs.40 lakhs and Rs.20 lakhs in the States of Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Puducherry, Sikkim, Telangana, Tripura and Uttarakhand with effect from 01.04.2019

Threshold limit of aggregate turnover for exemption from registrationand payment of GST for suppliers of services is Rs.20 lakhs and Rs.10 lakhs in the States of Manipur, Mizoram, Nagaland and Tripura.


#### Where to register? 

Visit [GST portal](https://www.gst.gov.in/). Go to  Services > Registration > [New Regisrtration](https://reg.gst.gov.in/registration/). 

## Tax Registration number - GSTIN 
Once GST regsitration is complete a supplier is issued a 15 digit GST identification number(GSTIN). The first 2 digits of the GSTIN is the State code, next 10 digits are the PAN of the legal entity, the next two digits are for entity code, and the last digit is check sum number. Registration under GST is not tax specific which means that there is a single registration for all the taxes i.e. CGST, SGST/UTGST, IGST and cesses

### GSTIN Format

#### Regular Registration

![GSTIN format regular registration](/img/GSTIN-format-regular-registration.png)

 Following are the details of the **GSTIN** format 

 1. 1st 2 digits: This is the state code as per the Indian Census 2011
 2. Next 10 digits:This is the PAN of the business entity.
 3. 13th digit: This denotes the serial number of registrations the business entity has for business verticals in the state, under the same PAN. It can range from 1-9 for businesses with up to 9 business vertical registrations in the state and for more than 9 registrations, from A-Z.
 4. 14th digit:This will be ‘Z’ by default.
 5. 15th digit: This digit denotes a ‘checksum’. It may be an alphabet or a number.

#### Regular Expression(Regex)
``` 
\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}
 ```

#### Non Resident Taxable Persons (NRTP) for OIDAR Sevices (Online Information Data Base Access and Retrieval)
![GSTIN format OIDAR](/img/GSTIN-format-OIDAR.png)

* Special Code 99 for 'Other Country'
* Special Code 97 for 'Other Terrritory'

## Tax rates
On Intra state transactions [CGST](/files/CGST-Act-Updated-30092020.pdf) and SGST/UTGST are applied. In case of intersate transction [IGST](/files/IGST-updated-law.pdf) is appiled . Following are the currently allowed tax rates. Along with these 'cess' might be levied by the state governments on some items

|CGST (%)|SGST (%)|IGST (%)|
|-|-|-|
|0|0|0|
|0.05|0.05|0.1|
|0.125|0.125|0.25|
|1.5|1.5|3|
|2.5|2.5|5|
|6|6|12|
|9|9|18|
|14|14|28|
|0.25|0.25|0.5|

## Invoice Format
There is no particular prescribed format but the following fields are mandatory 
1. Name, address and GSTIN of the supplier
2. A consecutive serial number, in one or multiple series, containing alphabets or numerals or special characters like hyphen or dash and slash symbolised as “-” and “/” respectively, and any combination there of, unique for a financial year
3. Date of its issue
4. Name, address and GSTIN or UIN, if registered, of the recipient
5. Name and address of the recipient and the address of delivery, along with the name of State and its code, if such recipient is un-registered and where the value of taxable supply is fifty thousand rupees or more
6. HSN code of goods or Accounting Code of Services
7. Description of goods or services
8. Quantity in case of goods and unit or Unique Quantity Code there of
9. Total value of supply of goods or services or both
10. Taxable value of supply of goods or services or both, taking into account the discount or abatement, if any
11. Rate of tax (Central tax, State tax, Integrated tax, union territory tax or cess)
12. Amount of tax charged in respect of taxable goods or services (Central tax, State tax, Integrated tax, union territory tax or cess)
13. Place of supply along with the name of State, in case of a supply in the course of inter-State trade or commerce
14. Address of delivery where the same is different from the place of supply
15. Whether the tax is payable on reverse charge basis
16. Signature or digital signature of the supplier or his authorized representative 


## Einvoicing in India
Einvoicing is mandatory for businesses with a turnover of more than Rs.20 crores. This is the revised threshold limit as per the [notification on Feb'22](https://einv-apisandbox.nic.in/downloads/notfctn-01-central-tax-english-2022.pdf) with effect from 1st day of April, 2022. 

Einvoicing in india is enabled by Invoice Regsritaion Portal (IRP). Invoices issues by the supplier has to be regestered with the IRP. On successful registration IRP returns a QR code and an IRN(invoice reference number). The QR code has to be affixed on the invoice before sending it to the buyer. Some supplier also add the IRN number on the invoice in addition to the QR code. 

Note that IRP portal is registration network and not an einvoice delivery network. This implies that merchants have to send the invoice to the receivers themselves after registering it with the IRP. This is in contrast with other einvoicing networks such as Peppol, which sends the einvoices to the end receipient.  


### Auto-population of einvoice for returns filing
The invoices successfully registered on the IRP will be automatically popluated on GSTR-1. This will be available for download as an excel file. Read [more..](https://tutorial.gst.gov.in/downloads/news/e-invoice_advisory_gstr-1_dashboard.pdf)


### State code
It is noticed that the state codes defined by the GST council doesnot match with the [ISO code](https://www.iso.org/obp/ui/#iso:code:3166:IN). 

* [Numeric State code](https://docs.ewaybillgst.gov.in/apidocs/state-code.html)
* [Official Pdf](https://ddvat.gov.in/docs/List%20of%20State%20Code.pdf)

### [Exemptions](https://cbic-gst.gov.in/pdf/igst-exemption-concession-list-03.06.2017.pdf)

### Offenses
Following are considered as offenses under GST law.

1. Making a supply without invoice or with false/incorrect invoice;  
2. Issuing an invoice without making supply;  
3. Not paying tax collected for a period exceeding three months;  
4. Not paying tax collected in contravention of the CGST/SGST Act for a period exceeding 3 months;  
5. Non deduction or lower deduction of tax deducted at source or not depositing tax deducted at source under section 51; 
6. Non  collection  or  lower  collection  of  or  non- payment of tax collectible at source under section 52; 
7. Availing/utilizing    input    tax    credit    without actual receipt of goods and/or services; 
8. Fraudulently obtaining any refund;  
9. Availing/distributing input tax  credit by an Input Service Distributor in violation of  Section 20; 
10. Furnishing false information or falsification of financial  records  or  furnishing  of  fake  accounts/documents with intent to evade payment of tax;
11. Failure to register despite being liable to pay tax;  
12. Furnishing false information regarding registration particulars either at the time of applying for registration or subsequently; 
13. Obstructing or preventing any official in discharge of his duty;  
14. Transporting goods without prescribed documents;  
15. Suppressing turnover leading to tax evasion;  
16. Failure  to  maintain  accounts/documents in the manner  specified in the Act or failure to retain accounts/documents for the period specified in the Act; 
17. Failure to furnish information/documents required by an officer in terms of the Act/Rules or furnishing false information/documents during the course of any proceeding; 
18. Supplying/transporting/storing any goods liable to confiscation; 
19. Issuing invoice or document using GSTIN of another person;  
20. Tampering/destroying any material evidence;  
21. Disposing of/tampering with goods detained/seized/attached under the Act.


### Penalty

Any taxable person who has committed any of the offences shall be punished with a penalty that shall be higher of the following amounts: 
* The amount of tax evaded, fraudulently obtained as refund, availed as credit, or not deducted or collected or short deducted or short collected, or  
* A sum of Rs.10,000/-

Any registered person who has not paid tax or makes a short payment of tax on supplies shall be a liable to penalty which will be the higher of: 
* 10% of the tax not paid or short paid, or 
* A sum of Rs.10,000/-

Any person who contravenes any provision of the Act or the rules  made  under  this  Act  for  which no separate penalty has  been  prescribed  shall  be  punishable with a penalty that may extend to Rs.25,000/-

## Frequently Asked Questions
<details>
  <summary>Do I need to add digital signature on the einvoice ? </summary>
Though there are several documents available online saying that digital signature is necesssary on GST einvoices, but as per the <a href="https://www.cbic.gov.in/resources/htdocs-cbec/gst/notfctn-74-central-tax-english-2018.pdf"> 14th amendment</a> digital signatures are not necessary on an GST invoice if its an einvoice.  Refer to <a href="https://www.cbic.gov.in/resources//htdocs-cbec/gst/30.07.2020_CGST%20Rules,%202017_(Part-A_Rules).pdf">GST rules</a> Rule 46 page 51 end of the section. According to the <a href="https://einvoice1.gst.gov.in/Others/Faqs" >IRP portal</a> "The digitally signed invoice is one which has been digitally or electronically signed by the IRP after receiving the invoice details from the supplier. That is, the government is authenticating the genuineness of the invoice details submitted/registered by the taxpayer". 
</details>

<details>
  <summary>Do I need to genererate einvoices for b2c sales? </summary>
  All the businesses whose annual turnover exceed 500 crores in any preceding financial year (starting from 2017-18) are mandated to display QR code on their B2C invoices from 1st December 2020 as per the <a href="https://einvoice1.gst.gov.in/Documents/B2B_einvoiceQRCodevsB2CDynamicQRCode.pdf">GST rules</a>. The dynamic QR code will have the payment details and thus ‘scan and pay’ in one go will be possible. This requirement has no relevance or connection with e-invoicing mandated for B2B Supplies and Exports by notified class of taxpayers. Hence IRN generation is not required and you need not upload B2C invoices to IRP. If uploaded, IRP will reject such invoices.

</details>

<details>
  <summary>Can I cancel an IRN ? </summary>
  Yes, you can cancel an IRN within 24 hours of its generetion. IRN cannot be cancelled, if a valid or active ewaybill exists for the same. Note that you can't delete or modify an IRN or invoice. It can only be cancelled and report a new document a with new invoice number and generate a fresh IRN (ideally issue credit note and then generate a new invoice)
</details>

<details>
  <summary>Is partial cancellation allowed on an IRN ? </summary>
E-Invoice or IRN can’t be partially cancelled. It has to be fully cancelled. 

</details>

## Important Wesbites

|Description|Website|
|---|----|
|GST council|[Website](https://gstcouncil.gov.in/)|
|GST law|[Website](https://cbic-gst.gov.in/gst-acts.html)|
|GST State code|[Official Pdf](https://ddvat.gov.in/docs/List%20of%20State%20Code.pdf)|
|HSN code search|[Website](https://services.gst.gov.in/services/searchhsnsac)|
|GST rates|[Wesbite](https://cbic-gst.gov.in/gst-goods-services-rates.html)|
|Help Desk Number|1800-103-4786|
|GSTIN Lookup|[Search](https://services.gst.gov.in/services/searchtp)|
|GST Login|[Visit Website](https://services.gst.gov.in/services/login)|
|Notifications|[GST Notifications](https://taxinformation.cbic.gov.in/content-page/explore-notification)|

## Latest updates 
:::note Latest updates on GST
* `10-May-2023` **E-Invoicing threshhold limit reduced to Rs. 5 Crore from 01st August 2023**
  * CBIC issued a notification mandating businesses with turnover of over 5 crore required to generate e-invoice from August 1. The current limit is 10cr. [Learn More](https://taxinformation.cbic.gov.in/view-pdf/1009732/ENG/Notifications)
*  `06-May-2023` **Deferment of implementation of time limit on reporting old einvoices**
  *  The imposition of time limit of 7 days on reporting old e-invoices on the e-invoice IRP portals for taxpayers with aggregate turnover greater than or equal to 100 crores has been deferred by three months [Learn More](https://www.gst.gov.in/newsandupdates/read/582)
* `13-Apr-2023` **Time limit for reporting invoices on the IRP portal** 
  * The invoices should be reported to IRP within 7 days of generation. This is applicable to businesses with annual turnover of 100Cr and above. [Learn More](https://einvoice.gst.gov.in/einvoice/newsandupdates/timeLimit) 
  * Example, if an invoice has a date of April 1, 2023, it cannot be reported after April 8, 2023
:::

## Reference links
* [GST core concepts](/files/GST-Concept-and-Status01062019.pdf)
* [Notification No. 01/2022 – Central Tax](https://einv-apisandbox.nic.in/downloads/notfctn-01-central-tax-english-2022.pdf)
* [FAQs on SEZs](https://www.nsez.gov.in/Resources/SEZ%20FAQs.pdf)
* [GST help](https://www.gst.gov.in/help/helpmodules/)
* [Offences, Penalties, Prosecution and Compounding, Page 438](/files/Final-GST-FQ-31218.pdf)
* [ISO Code](https://www.iso.org/obp/ui/#iso:code:3166:IN)
* [Cancellation of einvoice . Refer page 4 & 11](https://einvoice1.gst.gov.in/Documents/GST_eInvoiceSystemDetailedOverview.pdf)
* [Einvoice Cancellation](https://einvoice1.gst.gov.in/Others/Faqs)
* [India einvoice user manual](https://einvoice1.gst.gov.in/Documents/EINVOICE_UserManual_Web.pdf)
* [Invoice Format](https://cbic-gst.gov.in/hindi/pdf/e-version-gst-fliers/tax-invoice-efliers.pdf)
* [GSTIN Format](http://idtc-icai.s3.amazonaws.com/download/knowledgeShare18-19/Structure-of-GSTIN.pdf)
* [OIDAR Services in GST](https://old.cbic.gov.in/resources//htdocs-cbec/gst/51_GST_Flyer_Chapter42.pdf)



