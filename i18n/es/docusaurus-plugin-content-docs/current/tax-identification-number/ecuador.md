---
id: ecuador-tax-id-guide
title: Guía del RUC en Ecuador - Registro Único de Contribuyentes
keywords:
  [
    RUC,
    SRI,
    Ecuador,
    número tributario,
    validar RUC,
    consultar RUC,
    cédula Ecuador,
    factura electrónica Ecuador,
  ]
sidebar_label: Ecuador
description: Guía completa sobre el RUC (Registro Único de Contribuyentes) en Ecuador. Conoce su formato para personas naturales, empresas privadas y públicas. Usa LookupTax para verificar RUCs automáticamente.
tags:
  - Ecuador
  - RUC
  - SRI

---
import AlsoAvailable from '@site/src/components/AlsoAvailable';

<AlsoAvailable lang="en" />


## RUC - Registro Único de Contribuyentes

El **RUC (Registro Único de Contribuyentes)** es el número de identificación tributaria que el SRI (Servicio de Rentas Internas) asigna en Ecuador. Es indispensable para registrar e identificar a los contribuyentes y obtener información relevante para la administración tributaria.

### ¿Quiénes deben obtener el RUC?

Están obligados a inscribirse en el RUC:

1. **Personas naturales y jurídicas:**

   - Nacionales o extranjeros que realicen actividades económicas en Ecuador (permanentes u ocasionales)
   - Titulares de bienes o derechos que generen utilidades, beneficios u otros ingresos gravados

2. **Entidades del sector público:**

   - Incluye Fuerzas Armadas, Policía Nacional, entidades, fundaciones, cooperativas, corporaciones

3. **Empresas extranjeras con bienes inmuebles en Ecuador:**
   - Aplica incluso si el inmueble no genera ingresos gravados
   - Obligatorio para notarios y registradores de la propiedad

### Exenciones

**No están obligados** a obtener RUC:

- Organismos internacionales
- Embajadas, consulados y oficinas comerciales de países con relaciones diplomáticas con Ecuador

_(Aunque pueden obtenerlo voluntariamente)_

### Formato del RUC

El RUC tiene **13 dígitos** y su estructura varía según el tipo de contribuyente:

#### Personas naturales

| Componente              | Descripción                                |
| ----------------------- | ------------------------------------------ |
| **Primeros 10 dígitos** | Número de cédula de identidad o ciudadanía |
| **Últimos 3 dígitos**   | Siempre `001`                              |

**Ejemplo:** `1712345678001`

#### Empresas privadas (sociedades)

| Posición | Descripción                                |
| -------- | ------------------------------------------ |
| 1-2      | Código de provincia donde se emitió el RUC |
| 3        | Siempre **9** (identifica empresa privada) |
| 4-9      | Número secuencial                          |
| 10       | Dígito verificador                         |
| 11-13    | Siempre `001`                              |

**Ejemplo:** `1790123456001`

#### Empresas públicas

| Posición | Descripción                                |
| -------- | ------------------------------------------ |
| 1-2      | Código de provincia                        |
| 3        | Siempre **6** (identifica empresa pública) |
| 4-8      | Número consecutivo                         |
| 9        | Dígito verificador                         |
| 10       | Siempre **0**                              |
| 11-13    | Siempre `001`                              |

**Ejemplo:** `1760012340001`

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/es/img/taxid/ruc.PNG" alt="RUC Personas Naturales"/>
  </td><td>
  <img src="/docs/es/img/taxid/ruc-private-companies.PNG" alt="RUC Empresas Privadas"/>
  </td>
  <td> <img src="/docs/es/img/taxid/ruc-public-companies.PNG" alt="RUC Empresas Públicas"/>
  </td></tr>
  <tr><td align="center">Personas naturales</td><td align="center">Empresas privadas</td><td align="center">Empresas públicas</td></tr>
</table>

---

## Cédula de identidad

La Ley Orgánica de Gestión de la Identidad y Datos Civiles establece que la cédula de identidad es el documento público principal para identificar a personas ecuatorianas y extranjeras en Ecuador.

### ¿Quiénes deben tenerla?

- **Ecuatorianos:** Obligatoria desde los 18 años
- **Extranjeros:** Obligatoria para quienes residan en Ecuador

### Formato

La cédula tiene **10 dígitos**.

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/es/img/taxid/id-ecuador-front.PNG" alt="Cédula de identidad - Anverso"/>
  </td></tr>
  <tr><td align="center">Cédula de identidad - Anverso</td></tr>
</table>

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/es/img/taxid/id-ecuador-back.PNG" alt="Cédula de identidad - Reverso"/>
  </td></tr>
  <tr><td align="center">Cédula de identidad - Reverso</td></tr>
</table>

---

## ¿Cómo puede ayudarte LookupTax?

**LookupTax** te permite validar RUCs ecuatorianos y números fiscales de más de 100 países de forma automática. Nuestra plataforma:

- ✅ Valida el formato del RUC según tipo de contribuyente
- ✅ Verifica el dígito verificador
- ✅ Identifica si es persona natural, empresa privada o pública

Ideal para:

- Validación de proveedores y clientes
- Facturación electrónica
- Procesos de debida diligencia
- Cumplimiento tributario automatizado
