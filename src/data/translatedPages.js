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
