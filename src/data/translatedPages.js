/**
 * Mapping of English page slugs to their Spanish translations.
 * This is used by HreflangTags to only generate hreflang links for pages
 * that actually have translations.
 * 
 * Format: { englishSlug: spanishSlug }
 * 
 * IMPORTANT: Update this file when adding new translations!
 */

export const translatedPages = {
  // Tax ID Guides - English slug to Spanish slug mapping
  '/tax-identification-number/mexico-tax-id-guide': '/numero-identificacion-fiscal/guia-rfc-mexico',
  '/tax-identification-number/Argentina-tax-id-guide': '/numero-identificacion-fiscal/guia-cuit-argentina',
  '/tax-identification-number/colombia-tax-id-guide': '/numero-identificacion-fiscal/guia-nit-colombia',
  '/tax-identification-number/chile-tax-id-guide': '/numero-identificacion-fiscal/guia-rut-chile',
  '/tax-identification-number/peru-tax-id-guide': '/numero-identificacion-fiscal/guia-ruc-peru',
  '/tax-identification-number/ecuador-tax-id-guide': '/numero-identificacion-fiscal/guia-ruc-ecuador',
  '/tax-identification-number/venezuela-tax-id-guide': '/numero-identificacion-fiscal/guia-rif-venezuela',
  '/tax-identification-number/Uruguay-tax-id-guide': '/numero-identificacion-fiscal/guia-rut-uruguay',
  '/tax-identification-number/brazil-tax-id-guide': '/numero-identificacion-fiscal/guia-cnpj-cpf-brasil',
  
  // How to Verify - English slug to Spanish slug mapping
  '/how-to-verify/cuit-verification-argentina': '/como-verificar/verificacion-cuit-argentina',
  '/how-to-verify/curp-verification-mexico': '/como-verificar/verificacion-curp-mexico',
  '/how-to-verify/rut-verification-chile': '/como-verificar/verificacion-rut-chile',
  '/how-to-verify/dni-verification-argentina': '/como-verificar/verificacion-dni-argentina',
  '/how-to-verify/cnpj-verification-brazil': '/como-verificar/verificacion-cnpj-brasil',
  '/how-to-verify/cpf-verification-brazil': '/como-verificar/verificacion-cpf-brasil',
  
  // Explainers - English slug to Spanish slug mapping
  '/explainers/import-one-stop-shop-ioss': '/explicadores/guia-ioss-importacion',
  '/explainers/reverse-charge': '/explicadores/inversion-sujeto-pasivo-iva',
  '/explainers/dac7-compliance': '/explicadores/directiva-dac7',
  '/explainers/guide-to-vat-one-stop-shop': '/explicadores/guia-oss-ventanilla-unica',
  '/explainers/vies-intrastat-detailed-guide-for-traders': '/explicadores/vies-intrastat-guia',
  
  // Homepage
  '/': '/',
};

/**
 * Check if a page has a Spanish translation
 * @param {string} englishPath - English page path (without baseUrl or locale prefix)
 * @returns {boolean}
 */
export function hasSpanishTranslation(englishPath) {
  // Normalize path (remove trailing slashes)
  const normalizedPath = englishPath.replace(/\/$/, '') || '/';
  return normalizedPath in translatedPages;
}

/**
 * Get the Spanish URL for an English page
 * @param {string} englishPath - English page path
 * @returns {string|null} Spanish path or null if no translation exists
 */
export function getSpanishPath(englishPath) {
  const normalizedPath = englishPath.replace(/\/$/, '') || '/';
  return translatedPages[normalizedPath] || null;
}
