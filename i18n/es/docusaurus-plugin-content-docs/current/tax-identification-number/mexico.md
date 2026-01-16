---
id: mexico-tax-id-guide
title: Guía del RFC en México - Clave de Identificación Fiscal
keywords:
  [
    RFC,
    Registro Federal de Contribuyentes,
    SAT,
    CFDI,
    factura electrónica,
    México,
    clave fiscal,
    número fiscal México,
  ]
sidebar_label: México
description: Guía completa sobre el RFC (Registro Federal de Contribuyentes) en México. Conoce su formato, cómo obtenerlo ante el SAT y cómo validarlo. Usa LookupTax para verificar RFCs automáticamente.
tags:
  - México
  - RFC
  - SAT
---

import AlsoAvailable from '@site/src/components/AlsoAvailable';

<AlsoAvailable lang="en" />

## RFC - Registro Federal de Contribuyentes

El **Registro Federal de Contribuyentes (RFC)** es la clave de identificación fiscal que el Servicio de Administración Tributaria (SAT) asigna a todas las personas físicas y morales que realizan actividades económicas en México.

### ¿Quiénes deben tramitar el RFC?

El RFC es obligatorio para:

- **Personas físicas mayores de 18 años**, sin importar si realizan actividades económicas o no (desde 2022)
- **Trabajadores asalariados** que perciben ingresos por nómina
- **Personas con actividad empresarial** o servicios profesionales
- **Personas morales** (empresas, sociedades, asociaciones)
- **Quienes abran cuentas bancarias** en instituciones financieras mexicanas
- **Quienes emitan o reciban facturas electrónicas (CFDI)**

### Formato del RFC

El RFC tiene diferente estructura según el tipo de contribuyente:

#### Personas físicas (13 caracteres)

| Posición | Contenido                              | Ejemplo |
| -------- | -------------------------------------- | ------- |
| 1-4      | Letras del nombre (nombre y apellidos) | GAPA    |
| 5-10     | Fecha de nacimiento (AAMMDD)           | 850315  |
| 11-13    | Homoclave (asignada por el SAT)        | LM5     |

**Ejemplo completo:** `GAPA850315LM5`

#### Personas morales (12 caracteres)

| Posición | Contenido                        | Ejemplo |
| -------- | -------------------------------- | ------- |
| 1-3      | Letras de la denominación social | TEC     |
| 4-9      | Fecha de constitución (AAMMDD)   | 200610  |
| 10-12    | Homoclave (asignada por el SAT)  | AB1     |

**Ejemplo completo:** `TEC200610AB1`

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/es/img/taxid/rfc.PNG" alt="Cédula de Identificación Fiscal" title="Cédula de Identificación Fiscal"/>
  </td></tr>
  <tr><td align="center">Cédula de Identificación Fiscal (CIF)</td></tr>
</table>

### ¿Cómo tramitar el RFC ante el SAT?

1. **En línea:** A través del portal del SAT con e.firma o contraseña
2. **Presencial:** En cualquier oficina del SAT con cita previa
3. **Por empleador:** Tu patrón puede registrarte si eres asalariado

### Consulta y validación del RFC

Puedes verificar un RFC directamente en el [portal del SAT](https://www.sat.gob.mx/) o utilizar herramientas automatizadas para validaciones masivas.

---

## ¿Cómo puede ayudarte LookupTax?

**LookupTax** te permite validar RFCs mexicanos y números fiscales de más de 100 países de forma automática. Nuestra plataforma verifica el formato, el dígito verificador y consulta directamente las bases de datos oficiales para darte resultados precisos y en tiempo real.

Ideal para:

- Procesos de onboarding de clientes
- Validación de proveedores
- Automatización de facturación electrónica
- Cumplimiento fiscal en operaciones B2B
