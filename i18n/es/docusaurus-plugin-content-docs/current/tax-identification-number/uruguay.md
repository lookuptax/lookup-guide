---
id: Uruguay-tax-id-guide
slug: /numero-identificacion-fiscal/guia-rut-uruguay
title: Guía del RUT en Uruguay - Registro Único Tributario
keywords:
  [
    RUT,
    DGI,
    Uruguay,
    NIE,
    número tributario,
    validar RUT,
    consultar RUT,
    impuestos Uruguay,
  ]
sidebar_label: Uruguay
description: Guía completa sobre el RUT (Registro Único Tributario) en Uruguay. Conoce su formato, cómo obtenerlo en DGI y cómo validarlo. Usa LookupTax para verificar RUTs automáticamente.
tags:
  - Uruguay
  - RUT
  - DGI
---

import AlsoAvailable from '@site/src/components/AlsoAvailable';

<AlsoAvailable lang="en" href="/docs/tax-identification-number/Uruguay-tax-id-guide" />

## RUT - Registro Único Tributario

El **RUT (Registro Único Tributario)** es el número de identificación fiscal que la DGI (Dirección General Impositiva) asigna en Uruguay a personas físicas y jurídicas para la administración de impuestos.

### ¿Quiénes deben tener RUT?

Están obligados a inscribirse en el RUT:

- Personas físicas que realicen actividades económicas
- Personas jurídicas (empresas, sociedades)
- Sucursales de empresas extranjeras
- Entidades sin fines de lucro con obligaciones tributarias
- Cualquier contribuyente con obligaciones ante la DGI

### Formato del RUT

El RUT en Uruguay tiene **12 dígitos** con la siguiente estructura:

**Formato:** `NNNNNNNNNNNN` (12 dígitos continuos)

También se puede representar como: `NN NNNNNN 001X`

| Posición | Descripción                    |
| -------- | ------------------------------ |
| **1-2**  | Número de registro (categoría) |
| **3-8**  | Número de empresa (secuencial) |
| **9-11** | Siempre `001`                  |
| **12**   | Dígito verificador (X)         |

### Ejemplo de RUT

Tomando el ejemplo `12345678001X`:

| Componente         | Valor  | Significado                               |
| ------------------ | ------ | ----------------------------------------- |
| Registro           | 12     | Número de categoría de inscripción        |
| Número de empresa  | 345678 | Número asignado a la empresa              |
| Constante          | 001    | Valor fijo obligatorio                    |
| Dígito verificador | X      | Calculado según los 11 dígitos anteriores |

> **Nota:** El dígito verificador puede ser un número del 0-9 o una letra.

---

## NIE - Número de Identificación del Extranjero

El **NIE (Número de Identificación del Extranjero)** se asigna a personas extranjeras que realizan actividades en Uruguay y no tienen cédula de identidad uruguaya.

### Formato del NIE

El NIE tiene **9 caracteres** con el formato:

**Formato:** `NNNNNNNNX`

| Posición | Descripción                             |
| -------- | --------------------------------------- |
| **1-8**  | Número secuencial (00000001 - 99999999) |
| **9**    | Dígito verificador (X)                  |

### Ejemplo de NIE

`12345678X`

| Componente         | Valor    | Significado                   |
| ------------------ | -------- | ----------------------------- |
| Número             | 12345678 | Número asignado               |
| Dígito verificador | X        | Calculado según los 8 dígitos |

---

## ¿Cómo puede ayudarte LookupTax?

**LookupTax** te permite validar RUTs uruguayos y números fiscales de más de 100 países de forma automática. Nuestra plataforma:

- ✅ Valida el formato del RUT y NIE
- ✅ Verifica el dígito verificador
- ✅ Consulta estado del contribuyente

Ideal para:

- Verificación de clientes y proveedores
- Validación de facturas electrónicas
- Procesos de onboarding automatizado
- Cumplimiento tributario en operaciones B2B
