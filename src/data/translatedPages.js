/**
 * Mapping of English page slugs to their translations in other languages.
 * This is used by HreflangTags to only generate hreflang links for pages
 * that actually have translations.
 * 
 * Format: { englishSlug: { es: spanishSlug, 'zh-Hans': chineseSlug } }
 * 
 * IMPORTANT: Update this file when adding new translations!
 */

export const translatedPages = {
  // Tax ID Guides - English slug to localized slug mappings
  '/tax-identification-number/mexico-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-rfc-mexico',
  },
  '/tax-identification-number/Argentina-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-cuit-argentina',
  },
  '/tax-identification-number/colombia-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-nit-colombia',
  },
  '/tax-identification-number/chile-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-rut-chile',
  },
  '/tax-identification-number/peru-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-ruc-peru',
  },
  '/tax-identification-number/ecuador-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-ruc-ecuador',
  },
  '/tax-identification-number/venezuela-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-rif-venezuela',
  },
  '/tax-identification-number/Uruguay-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-rut-uruguay',
  },
  '/tax-identification-number/brazil-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-cnpj-cpf-brasil',
  },
  
  // How to Verify - English slug to localized slug mappings
  '/how-to-verify/eori-verification-eu-vies': {
    'zh-Hans': '/ruhe-yanzheng/eori-haiguan-qingguan-hao-ouzhou',
  },
  '/how-to-verify/cuit-verification-argentina': {
    es: '/como-verificar/verificacion-cuit-argentina',
  },
  '/how-to-verify/curp-verification-mexico': {
    es: '/como-verificar/verificacion-curp-mexico',
  },
  '/how-to-verify/rut-verification-chile': {
    es: '/como-verificar/verificacion-rut-chile',
  },
  '/how-to-verify/dni-verification-argentina': {
    es: '/como-verificar/verificacion-dni-argentina',
  },
  '/how-to-verify/cnpj-verification-brazil': {
    es: '/como-verificar/verificacion-cnpj-brasil',
  },
  '/how-to-verify/cpf-verification-brazil': {
    es: '/como-verificar/verificacion-cpf-brasil',
  },
  '/how-to-verify/vat-verification-eu-vies': {
    es: '/como-verificar/verificacion-iva-ue-vies',
    'zh-Hans': '/ruhe-yanzheng/ouzhou-zengzhishui-vies',
  },
  '/how-to-verify/vat-verification-uk': {
    'zh-Hans': '/ruhe-yanzheng/yingguo-zengzhishui-vat',
  },
  '/how-to-verify/ein-verification-united-states': {
    es: '/como-verificar/verificacion-ein-estados-unidos',
    'zh-Hans': '/ruhe-yanzheng/meiguo-ein-shuihao',
  },
  '/how-to-verify/nif-verification-spain': {
    es: '/como-verificar/verificacion-nif-espana',
  },
  // Tier 3: APAC & Regional Hubs
  '/how-to-verify/find-gst-singapore': {
    'zh-Hans': '/ruhe-yanzheng/xinjiapo-xiaofei shui-gst',
  },
  '/how-to-verify/abn-verification': {
    'zh-Hans': '/ruhe-yanzheng/aodaliya-abn',
  },
  '/how-to-verify/gstin-verification-india': {
    'zh-Hans': '/ruhe-yanzheng/yindu-gstin',
  },
  '/how-to-verify/find-uen-singapore': {
    'zh-Hans': '/ruhe-yanzheng/xinjiapo-uen',
  },
  '/how-to-verify/nzbn-verification': {
    'zh-Hans': '/ruhe-yanzheng/xinxilan-nzbn',
  },
  
  // Explainers - English slug to localized slug mappings
  '/explainers/import-one-stop-shop-ioss': {
    es: '/explicadores/guia-ioss-importacion',
    'zh-Hans': '/jieshipage/ioss-ouzhou-jinkou-yizhanshi',
  },
  '/explainers/reverse-charge': {
    es: '/explicadores/inversion-sujeto-pasivo-iva',
    'zh-Hans': '/jieshipage/nixiang-zhengshou-jizhi-iva',
  },
  '/explainers/dac7-compliance': {
    es: '/explicadores/directiva-dac7',
  },
  '/explainers/guide-to-vat-one-stop-shop': {
    es: '/explicadores/guia-oss-ventanilla-unica',
    'zh-Hans': '/jieshipage/oss-ouzhou-zengzhishui-yizhanshi',
  },
  '/explainers/vies-intrastat-detailed-guide-for-traders': {
    es: '/explicadores/vies-intrastat-guia',
    'zh-Hans': '/jieshipage/vies-intrastat-ouzhou-maoyi-zhinan',
  },
  
  // Homepage
  '/': {
    es: '/',
    'zh-Hans': '/',
  },
};

/**
 * Check if a page has any translation
 * @param {string} englishPath - English page path (without baseUrl or locale prefix)
 * @returns {boolean}
 */
export function hasTranslation(englishPath) {
  const normalizedPath = englishPath.replace(/\/$/, '') || '/';
  return normalizedPath in translatedPages;
}

/**
 * Check if a page has a Spanish translation
 * @param {string} englishPath - English page path (without baseUrl or locale prefix)
 * @returns {boolean}
 */
export function hasSpanishTranslation(englishPath) {
  const normalizedPath = englishPath.replace(/\/$/, '') || '/';
  return normalizedPath in translatedPages && 'es' in (translatedPages[normalizedPath] || {});
}

/**
 * Check if a page has a Chinese translation
 * @param {string} englishPath - English page path (without baseUrl or locale prefix)
 * @returns {boolean}
 */
export function hasChineseTranslation(englishPath) {
  const normalizedPath = englishPath.replace(/\/$/, '') || '/';
  return normalizedPath in translatedPages && 'zh-Hans' in (translatedPages[normalizedPath] || {});
}

/**
 * Get the Spanish URL for an English page
 * @param {string} englishPath - English page path
 * @returns {string|null} Spanish path or null if no translation exists
 */
export function getSpanishPath(englishPath) {
  const normalizedPath = englishPath.replace(/\/$/, '') || '/';
  return translatedPages[normalizedPath]?.es || null;
}

/**
 * Get the Chinese URL for an English page
 * @param {string} englishPath - English page path
 * @returns {string|null} Chinese path or null if no translation exists
 */
export function getChinesePath(englishPath) {
  const normalizedPath = englishPath.replace(/\/$/, '') || '/';
  return translatedPages[normalizedPath]?.['zh-Hans'] || null;
}

/**
 * Get all available translations for a page
 * @param {string} englishPath - English page path
 * @returns {Object} Object with locale keys and their paths
 */
export function getAllTranslations(englishPath) {
  const normalizedPath = englishPath.replace(/\/$/, '') || '/';
  return translatedPages[normalizedPath] || {};
}
