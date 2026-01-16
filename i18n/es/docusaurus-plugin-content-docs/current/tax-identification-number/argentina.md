---
id: Argentina-tax-id-guide
title: Guía del CUIT en Argentina - Clave Única de Identificación Tributaria
keywords:
  [
    CUIT,
    CUIL,
    CDI,
    AFIP,
    monotributo,
    Argentina,
    número fiscal,
    validar CUIT,
    consultar CUIT,
  ]
sidebar_label: Argentina
description: Guía completa sobre el CUIT (Clave Única de Identificación Tributaria) en Argentina. Aprende su formato, cómo tramitarlo en AFIP y cómo validarlo. Usa LookupTax para verificar CUITs automáticamente.
tags:
  - Argentina
  - CUIT
  - AFIP
---

## CUIT - Clave Única de Identificación Tributaria

El **CUIT (Clave Única de Identificación Tributaria)** es el número que identifica a personas físicas y jurídicas ante la AFIP (Administración Federal de Ingresos Públicos) para todo trámite impositivo en Argentina.

Al obtener tu CUIT, quedás registrado oficialmente como contribuyente y podés:

- Emitir facturas
- Declarar impuestos
- Operar comercialmente de forma legal
- Cobrar haberes o jubilaciones

### Formato del CUIT

El CUIT tiene **11 dígitos** con el formato: `NN-NNNNNNNN-N`

| Componente               | Significado                                                   |
| ------------------------ | ------------------------------------------------------------- |
| **Primeros 2 dígitos**   | Tipo de contribuyente                                         |
| **Siguientes 8 dígitos** | DNI (personas físicas) o número asignado (personas jurídicas) |
| **Último dígito**        | Dígito verificador                                            |

#### Códigos de tipo de contribuyente

| Código         | Tipo                                           |
| -------------- | ---------------------------------------------- |
| 20             | Persona física masculina                       |
| 27             | Persona física femenina                        |
| 23, 24, 25, 26 | Persona física (casos de CUIT duplicado)       |
| 30             | Persona jurídica (empresa)                     |
| 33             | Persona jurídica (empresa, código alternativo) |
| 34             | Sociedad de hecho u otros entes                |

**Ejemplo persona física:** `20-12345678-9`  
**Ejemplo persona jurídica:** `30-12345678-9`

### ¿Dónde consultar un CUIT?

Cualquier persona puede verificar el CUIT de un contribuyente ingresando al sitio web de la AFIP y consultando:

- **Constancia de Inscripción** para contribuyentes del Régimen General
- **Constancia de Monotributo** para pequeños contribuyentes

Portal oficial: [www.afip.gob.ar](https://www.afip.gob.ar/)

---

## CUIL - Clave Única de Identificación Laboral

El **CUIL (Clave Única de Identificación Laboral)** se utiliza para fines laborales y de seguridad social. Lo tramita ANSES y todo trabajador en relación de dependencia debe tenerlo.

El formato del CUIL es idéntico al CUIT: `NN-NNNNNNNN-N`

> **Dato útil:** Si ya tenés CUIL, ese mismo número se convierte en tu CUIT cuando te inscribís como contribuyente.

---

## CDI - Código de Identificación

El **CDI (Código de Identificación)** es un número que la AFIP asigna a personas que no están obligadas a tener CUIT ni CUIL, pero necesitan identificarse para ciertos trámites (por ejemplo, extranjeros no residentes que realizan operaciones puntuales).

---

## ¿Cómo puede ayudarte LookupTax?

**LookupTax** te permite validar CUITs argentinos y números fiscales de más de 100 países de forma automática. Nuestra API verifica:

- ✅ Formato correcto del CUIT
- ✅ Dígito verificador válido
- ✅ Estado del contribuyente ante AFIP

Ideal para:

- Verificación de clientes y proveedores
- Procesos de alta en sistemas de facturación
- Validación masiva de bases de datos
- Cumplimiento normativo en operaciones B2B

[<img src="/docs/es/img/posters/signup-taxid-validation4.png" alt="Registrate en LookupTax para validar IDs fiscales"/>](https://lookuptax.com/)
