---
id: abn-verification
title: How to verify Australia Business Number?
keywords: [Verify ABN, Australia, find ABN, Check ABN]
sidebar_label: Australia Business Number
description: Find out how to verify Australia Business Number. Use Lookuptax for hassle-free validation of Australia Business Number in Austalia.
tags:
  - Australia
  - ABN
---

import AlsoAvailable from "@site/src/components/AlsoAvailable";

<AlsoAvailable />

## ABN search on Austrailian Business Register

You can check the validity of an ABN from the Austrailian Business Register Website for free. You can access the ABN lookup service [here](https://abr.business.gov.au/). Using this tool you can search for a company by ABN, ACN or name. Advanced search options are available [here](https://abr.business.gov.au/Search/Advanced)

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/verify/abn-lookup.PNG" alt="ABN lookup" title="ABN lookup"/>
  </td></tr>
  <tr><td align="center">ABN lookup</td></tr>
</table>

Example : 49160299865

The search returns the following details

- Entity name
- ABN status
- Entity type
- Registration status for Goods & Services Tax (GST)
- Main business location

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/verify/abn-details.PNG" alt="ABN verification status" title="ABN verification status"/>
  </td></tr>
  <tr><td align="center">ABN verification status</td></tr>
</table>

## How to verify format of ABN?

Australia Business Number consists of 11 digits

| Regex expressions                | Description                                                                 |
| -------------------------------- | --------------------------------------------------------------------------- |
| `\b\d{2}\.\d{3}\.\d{3}\.\d{3}\b` | Matches a 11-digit number of the format NN.NNN.NNN.NNN delimited by dot.    |
| `\b\d{2}-\d{3}-\d{3}-\d{3}\b`    | Matches a 11-digit number of the format NN-NNN-NNN-NNN delimited by hyphen. |
| `\b\d{2} \d{3} \d{3} \d{3}\b`    | Matches a 11-digit number of the format NN NNN NNN NNN delimited by space.  |
| `\b\d{11}\b`                     | Matches a 11-digit number without a delimiter.                              |

---

**How [Lookuptax](https://lookuptax.com/) can help you in VAT validation?**

**Lookuptax VAT validation** revolutionizes VAT number validation with its robust platform, empowering businesses to seamlessly verify VAT numbers across over 100 countries. Our cutting-edge technology ensures accurate and efficient validation, reducing errors and enhancing compliance.
