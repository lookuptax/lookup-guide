---
id: abn-verification
title: 如何验证澳大利亚商业号码 (ABN)?
slug: /ruhe-yanzheng/aodaliya-abn
keywords:
  [澳大利亚ABN查询, ABN验证, 澳洲企业查询, 澳大利亚商业号码, ABN号码核验]
sidebar_label: 澳大利亚ABN
description: 了解如何验证澳大利亚商业号码(ABN)。使用LookupTax进行澳大利亚ABN号码的批量验证,适用于与澳洲企业的跨境贸易。
tags:
  - Australia
  - ABN
  - 澳大利亚
---

import AlsoAvailable from "@site/src/components/AlsoAvailable";

<AlsoAvailable lang="en" href="/docs/how-to-verify/abn-verification" />

## 在澳大利亚商业注册局(ABR)上查询ABN

您可以在澳大利亚商业注册局（Australian Business Register）网站上免费查询ABN的有效性。您可以在[这里](https://abr.business.gov.au/)访问ABN查询服务。使用此工具，您可以通过ABN、ACN或企业名称搜索公司。高级搜索选项可在[这里](https://abr.business.gov.au/Search/Advanced)找到。

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/verify/abn-lookup.PNG" alt="ABN查询" title="ABN查询"/>
  </td></tr>
  <tr><td align="center">ABN查询界面</td></tr>
</table>

示例: 49160299865

查询将返回以下详细信息:

- 实体名称 (Entity name)
- ABN状态 (ABN status)
- 实体类型 (Entity type)
- 商品和服务税(GST)注册状态 (Registration status for Goods & Services Tax)
- 主要营业地点 (Main business location)

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/verify/abn-details.PNG" alt="ABN验证状态" title="ABN验证状态"/>
  </td></tr>
  <tr><td align="center">ABN验证状态示例</td></tr>
</table>

## 如何验证ABN的格式？

澳大利亚商业号码(ABN)由11位数字组成

| 正则表达式                       | 描述                                                     |
| -------------------------------- | -------------------------------------------------------- |
| `\b\d{2}\.\d{3}\.\d{3}\.\d{3}\b` | 匹配格式为NN.NNN.NNN.NNN的11位数字号码（以点分隔）。     |
| `\b\d{2}-\d{3}-\d{3}-\d{3}\b`    | 匹配格式为NN-NNN-NNN-NNN的11位数字号码（以连字符分隔）。 |
| `\b\d{2} \d{3} \d{3} \d{3}\b`    | 匹配格式为NN NNN NNN NNN的11位数字号码（以空格分隔）。   |
| `\b\d{11}\b`                     | 匹配无分隔符的11位数字号码。                             |

---

**[LookupTax](https://lookuptax.com/) 如何帮助您验证澳大利亚ABN？**

**LookupTax ABN验证服务** 通过强大的平台彻底改变了ABN号码验证。我们的尖端技术确保准确高效的验证，帮助中国企业在与澳大利亚公司进行跨境贸易时快速验证合作伙伴的ABN注册状态，降低贸易风险，提高合规性。
