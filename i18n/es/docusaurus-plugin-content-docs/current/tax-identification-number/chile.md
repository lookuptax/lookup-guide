---
id: chile-tax-id-guide
title: Guía del RUT en Chile - Rol Único Tributario
keywords:
  [
    RUT,
    RUN,
    SII,
    Chile,
    número tributario,
    validar RUT,
    consultar RUT,
    factura electrónica Chile,
  ]
sidebar_label: Chile
description: Guía completa sobre el RUT (Rol Único Tributario) en Chile. Conoce su formato, cómo obtenerlo en el SII y cómo validarlo. Usa LookupTax para verificar RUTs automáticamente.
tags:
  - Chile
  - RUT
  - SII

---
import AlsoAvailable from '@site/src/components/AlsoAvailable';

<AlsoAvailable lang="en" />


## RUT - Rol Único Tributario

El **RUT (Rol Único Tributario)** es el número de identificación tributaria que el Servicio de Impuestos Internos (SII) asigna a todas las personas naturales y jurídicas que tienen obligaciones tributarias en Chile.

Fue establecido en 1969 mediante el Decreto N° 3 del Ministerio de Hacienda y es administrado por el SII.

### ¿Quiénes deben tener RUT?

Según el Artículo 66 del Código Tributario, deben inscribirse en el RUT:

- **Personas naturales chilenas:** El RUT es el mismo número que el RUN (Rol Único Nacional) del Registro Civil
- **Personas naturales extranjeras** que realicen actividades en Chile
- **Personas jurídicas** (empresas, sociedades, fundaciones)
- **Entidades sin personalidad jurídica** con obligaciones tributarias
- **Extranjeros sin residencia** que inviertan en Chile (acciones, bienes raíces, etc.)

> **Dato clave:** Para chilenos y extranjeros con residencia, el RUN de la cédula de identidad sirve también como RUT.

### Formato del RUT

El RUT tiene el formato: `XX.XXX.XXX-X` o sin puntos: `XXXXXXXX-X`

| Componente         | Descripción                           |
| ------------------ | ------------------------------------- |
| Número base        | Entre 1 y 8 dígitos (antes del guion) |
| Guion              | Separador obligatorio                 |
| Dígito verificador | Un dígito de 0-9 o la letra K         |

**Ejemplos válidos:**

- `12.345.678-5`
- `9.876.543-K`
- `76543210-1`

### Cálculo del dígito verificador

El dígito verificador se calcula mediante el algoritmo **Módulo 11**:

1. Se multiplican los dígitos del número base por una secuencia de factores (2,3,4,5,6,7)
2. Se suma el resultado
3. Se multiplica por 10
4. Se divide por 11
5. El resto determina el dígito verificador

| Resultado | Dígito verificador |
| --------- | ------------------ |
| 1 a 9     | El mismo número    |
| 10        | Letra **K**        |
| 11        | **0** (cero)       |

### Extranjeros en Chile

Los extranjeros que realizan actividades en Chile deben inscribirse en el RUT según su situación:

| Situación                                 | Proceso de inscripción                                  |
| ----------------------------------------- | ------------------------------------------------------- |
| Extranjero con residencia                 | Presenta Cédula de Identidad para Extranjeros en el SII |
| Extranjero sin residencia (inversionista) | Tramita RUT a través de corredores de bolsa chilenos    |
| Representante legal de empresa extranjera | Solicita RUT directamente en el SII                     |

### Consultar y validar RUT

Puedes verificar la validez de un RUT en la base de datos oficial del SII:

🔗 [Consulta de RUT - SII](https://zeus.sii.cl/cvc/stc/stc.html)

---

## ¿Cómo puede ayudarte LookupTax?

**LookupTax** te permite validar RUTs chilenos y números fiscales de más de 100 países de forma automática. Nuestra plataforma:

- ✅ Valida el formato del RUT
- ✅ Calcula y verifica el dígito verificador
- ✅ Consulta el estado del contribuyente

Ideal para:

- Validación de clientes y proveedores
- Facturación electrónica (DTE)
- Procesos de onboarding automatizado
- Verificación masiva de bases de datos

[<img src="/docs/es/img/posters/signup-taxid-validation20.png" alt="Regístrate en LookupTax para validar IDs fiscales"/>](https://lookuptax.com/)
