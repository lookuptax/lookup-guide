---
id: vat-verification-uk
title: How to verify VAT Number in UK?
keywords: [Verify VAT UK, UK, find VAT UK, Check VAT UK, United Kingdom]
sidebar_label: UK VAT Number
description: Find out how to verify VAT Number in UK. Use Lookuptax for hassle-free validation of VAT Number in UK.
tags:
  - United Kingdom
  - VAT
  - UK
---

import AlsoAvailable from "@site/src/components/AlsoAvailable";

<AlsoAvailable lang="zh-Hans" />

## Verify VAT number in UK online using HMRC service

You can check the validity of an VAT number from the HMRC Website for free. You can access the HMRC VAT lookup service [here](https://www.tax.service.gov.uk/check-vat-number/enter-vat-details/). You should submit your VAT number along with the number you wish to verify in case you wish to get an acknowledgement number

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/verify/uk-hmrc-vat-verification.PNG" alt="UK VAT lookup" title="UK VAT lookup"/>
  </td></tr>
  <tr><td align="center">VAT verification on HMRC website</td></tr>
</table>

A successful vat number verification on the UK HRMC site returns the following details

- Status of the vat number
- Acknowledgement number which acts as the proof of the verification.
- Details of the business
  - Name of the business
  - Registered address including zipcode
- Time of validation

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/verify/hmrc-vat-status.PNG" alt="UK VAT verification status" title="UK VAT verification status"/>
  </td></tr>
  <tr><td align="center">VAT verification status</td></tr>
</table>

## Validate syntax UK VAT number

VAT number in UK has either 9 or 12 numbers. It can also be 5 digits in case of Government department or Health department.

Regex - `(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})`

Explanation

- `(GB)?`: This part specifies an optional prefix "GB". The question mark "?" makes the preceding group, in this case, "GB", optional. So, it matches either "GB" or nothing.
- `[0-9]{9}([0-9]{3})?`: This part matches a sequence of nine digits `[0-9]{9}`, optionally followed by another group of three digits `([0-9]{3})?`. The question mark "?" after the group makes it optional. So, this part matches either nine digits, or twelve digits in total.
- `[A-Z]{2}[0-9]{3}`: This part matches two uppercase letters `[A-Z]{2}` followed by three digits `[0-9]{3}`. This part matches a two-letter country code followed by three digits.

---

**How [Lookuptax](https://lookuptax.com/) can help you in VAT validation?**

**Lookuptax VAT validation** revolutionizes VAT number validation with its robust platform, empowering businesses to seamlessly verify VAT numbers across over 100 countries. Our cutting-edge technology ensures accurate and efficient validation, reducing errors and enhancing compliance.
