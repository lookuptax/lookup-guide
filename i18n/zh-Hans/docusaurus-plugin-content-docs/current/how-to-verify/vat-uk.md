---
id: vat-verification-uk
title: 如何验证英国增值税号 (UK VAT)?
slug: /ruhe-yanzheng/yingguo-zengzhishui-vat
keywords:
  [英国VAT查询, 英国增值税号, HMRC VAT check, 英国VAT验证, 跨境电商英国税号]
sidebar_label: 英国增值税号 (UK VAT)
description: 了解如何通过HMRC官网验证英国VAT号码。使用LookupTax进行英国增值税号的批量验证，适用于亚马逊/eBay英国站卖家。
tags:
  - United Kingdom
  - VAT
  - UK
---

import AlsoAvailable from "@site/src/components/AlsoAvailable";

<AlsoAvailable lang="en" />

## 使用HMRC服务在线验证英国VAT号码

英国脱欧后，验证英国增值税号（VAT number）变得尤为重要，特别是对于在亚马逊英国站或eBay英国站销售的跨境电商卖家。

您可以免费在英国税务海关总署（HMRC）官网上查询VAT号码的有效性。点击[这里](https://www.tax.service.gov.uk/check-vat-number/enter-vat-details/)访问HMRC VAT查询服务。如果您需要获得查询证明（用于税务合规），建议在查询时同时提交您自己的增值税号。

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/verify/uk-hmrc-vat-verification.PNG" alt="UK VAT lookup" title="英国VAT查询"/>
  </td></tr>
  <tr><td align="center">HMRC网站上的VAT验证界面</td></tr>
</table>

### 验证结果解读

在英国HMRC网站上验证成功后，通常会返回以下详细信息：

- **税号状态**：有效与否
- **咨询号 (Acknowledgement number)**：这是验证过程的唯一凭证，可用作税务审计时的合规证明。
- **企业详情**：
  - 企业名称
  - 注册地址（包括邮政编码）
- **验证时间**

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/verify/hmrc-vat-status.PNG" alt="UK VAT verification status" title="英国VAT验证状态"/>
  </td></tr>
  <tr><td align="center">VAT验证状态示例</td></tr>
</table>

### 验证英国VAT号码格式

英国VAT号码通常包含9位或12位数字。政府部门或卫生部门的税号可能是5位数字。

正则表达式：`(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})`

**解释：**

- `(GB)?`：可选的前缀 "GB"。
- `[0-9]{9}([0-9]{3})?`：匹配9位数字，后面可选跟3位数字（用于分公司）。总共9位或12位数字。
- `[A-Z]{2}[0-9]{3}`：匹配某些特殊类型的税号（2个大写字母及3位数字）。

---

**[LookupTax](https://lookuptax.com/) 如何帮助您验证VAT？**

**LookupTax 增值税验证 API** 为跨境企业提供了更强大的解决方案。我们支持批量验证英国VAT号码，帮助您确保英国业务的税务合规性，避免因无效税号导致的账户风险。
