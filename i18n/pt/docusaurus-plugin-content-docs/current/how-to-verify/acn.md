---
id: australia-company-number-format
slug: /como-verificar/acn-australia
title: Como verificar o ACN na Austrália?
keywords: [formato, ACN, Austrália, Encontrar ACN, validar ACN]
sidebar_label: ACN Austrália
description: Saiba mais sobre o formato do Número de Empresa Australiano (ACN). Use o Lookuptax para validação fácil do ACN na Austrália.
tags:
  - Austrália
  - ACN
---

import AlsoAvailable from "@site/src/components/AlsoAvailable";

<AlsoAvailable />

## Pesquisa de ACN no Registro ASIC

A opção de pesquisa de número ACN está disponível gratuitamente no Registro de Empresas da Australian Securities and Investments Commission (ASIC). Você pode acessar a pesquisa de ACN [aqui](https://connectonline.asic.gov.au/RegistrySearch/faces/landing/SearchRegisters.jspx?_adf.ctrl-state=1du6g3a845_4). Você pode pesquisar no Registro ASIC pelo ABN, ACN ou Nome da empresa.

Exemplo: 001799837

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/verify/acn-asic-australia.PNG" alt="Pesquisa de ACN no registro ASIC" title="Pesquisa de ACN no registro ASIC"/>
  </td></tr>
  <tr><td align="center">Pesquisa de ACN no registro ASIC</td></tr>
</table>

Uma verificação bem-sucedida do ACN no registro ASIC retornará os seguintes detalhes:

- Nome
- ACN
- ABN
- Número estadual anterior
- Estado de registro anterior
- Data de registro
- Data da próxima revisão
- Status
- Tipo
- Localidade do escritório registrado
- Regulador

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/verify/acn-details-asic-australia.PNG" alt="Status de verificação do ACN" title="Status de verificação do ACN"/>
  </td></tr>
  <tr><td align="center">Status de verificação do ACN</td></tr>
</table>

## Formato do ACN

O Número de Empresa Australiano (ACN) consiste em 9 dígitos.

| Expressões Regex          | Descrição                                                   |
| ------------------------- | ----------------------------------------------------------- |
| `\b\d{3}\.\d{3}\.\d{3}\b` | Corresponde a um número de 9 dígitos delimitado por ponto.  |
| `\b\d{3}-\d{3}-\d{3}\b`   | Corresponde a um número de 9 dígitos delimitado por hífen.  |
| `\b\d{3} \d{3} \d{3}\b`   | Corresponde a um número de 9 dígitos delimitado por espaço. |
| `\b\d{9}\b`               | Corresponde a um número de 9 dígitos sem delimitador.       |

Exemplo: 160299865

---

**Como o [Lookuptax](https://lookuptax.com/) pode ajudá-lo na validação de IVA?**

**A validação de IVA do Lookuptax** revoluciona a validação de números de IVA com sua plataforma robusta, capacitando empresas a verificar números de IVA de forma integrada em mais de 100 países. Nossa tecnologia de ponta garante validação precisa e eficiente, reduzindo erros e melhorando a conformidade.
