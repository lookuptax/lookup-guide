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
  // Check VAT Number - Core page with all translations
  '/check-vat-number-free-links-to-official-national-database-search-VAT-number': {
    de: '/umsatzsteuer-identifikationsnummer-pruefen',
    es: '/comprobar-numero-iva',
    pt: '/verificar-numero-iva',
    'zh-Hans': '/chaxun-zengzhishui-hao',
  },

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
  '/tax-identification-number/italy-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-partita-iva-italia',
  },
  '/tax-identification-number/portugal-tax-id-guide': {
    pt: '/numero-identificacao-fiscal/guia-nif-portugal',
  },
  '/tax-identification-number/united-states-tax-id-guide': {
    pt: '/numero-identificacao-fiscal/guia-ein-eua',
  },
  
  // How to Verify - English slug to localized slug mappings
  '/how-to-verify/eori-verification-eu-vies': {
    'zh-Hans': '/ruhe-yanzheng/eori-haiguan-qingguan-hao-ouzhou',
  },



  '/how-to-verify/dni-verification-argentina': {
    es: '/como-verificar/verificacion-dni-argentina',
  },

  '/how-to-verify/cpf-verification-brazil': {
    es: '/como-verificar/verificacion-cpf-brasil',
    pt: '/como-verificar/cpf-brasil',
  },
  '/how-to-verify/vat-verification-eu-vies': {
    es: '/como-verificar/verificacion-iva-ue-vies',
    'zh-Hans': '/ruhe-yanzheng/ouzhou-zengzhishui-vies',
    de: '/wie-man-ueberprueft/eu-mehrwertsteuer-vies',
  },
  '/how-to-verify/vat-verification-uk': {
    'zh-Hans': '/ruhe-yanzheng/yingguo-zengzhishui-vat',
  },
  '/how-to-verify/uid-verification-switzerland': {
    de: '/wie-man-ueberprueft/schweiz-uid-nummer',
  },
  '/how-to-verify/ein-verification-united-states': {
    es: '/como-verificar/verificacion-ein-estados-unidos',
    'zh-Hans': '/ruhe-yanzheng/meiguo-ein-shuihao',
    de: '/wie-man-ueberprueft/usa-ein-verifizierung',
    pt: '/como-verificar/ein-estados-unidos',
  },
  '/how-to-verify/nif-verification-spain': {
    es: '/como-verificar/verificacion-nif-espana',
  },
  // Tier 3: APAC & Regional Hubs
  '/how-to-verify/find-gst-singapore': {
    'zh-Hans': '/ruhe-yanzheng/xinjiapo-xiaofeishui-gst',
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
  // Portuguese Mappings
  '/check-vat-number': {
    pt: '/verificar-numero-iva',
  },

  '/tax-identification-number/portugal-tax-id-guide': {
    pt: '/numero-identificacao-fiscal/guia-nif-portugal',
  },

  '/country/Spain': {
    pt: '/numero-identificacao-fiscal/guia-nif-espanha',
  },
  // Verification Pages
  '/how-to-verify/cnpj-verification-brazil': {
    es: '/como-verificar/verificacion-cnpj-brasil',
    pt: '/como-verificar/cnpj-brasil',
  },


  '/how-to-verify/australia-company-number-format': {
    pt: '/como-verificar/acn-australia',
  },
  '/how-to-verify/cuit-verification-argentina': {
    es: '/como-verificar/verificacion-cuit-argentina',
    de: '/wie-man-ueberprueft/cuit-argentina',
    pt: '/como-verificar/cuit-argentina',
  },
  '/how-to-verify/rut-verification-chile': {
     es: '/como-verificar/verificacion-rut-chile',
     pt: '/como-verificar/rut-chile',
  },
  '/how-to-verify/curp-verification-mexico': {
      es: '/como-verificar/verificacion-curp-mexico',
      pt: '/como-verificar/crup-mexico',
  },

  // Explainers
  '/explainers/reverse-charge': {
    es: '/explicadores/inversion-sujeto-pasivo-iva',
    'zh-Hans': '/jieshipage/nixiang-zhengshou-jizhi-iva',
    de: '/erklaerung/umkehrung-der-steuerschuldnerschaft',
    pt: '/explicacao/inversao-sujeito-passivo',
  },
  '/explainers/gobd-compliance': {
    de: '/erklaerung/gobd-konformitaet',
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
  
  // Tax Identification Number - Country Pages
  '/tax-identification-number/germany-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-steuernummer-alemania',
    de: '/steuerliche-identifikationsnummer/deutschland-steuer-id',
    'zh-Hans': '/shuiwu-shibie-haoma/deguo-shuihao',
  },
  '/tax-identification-number/united-states-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-ein-estados-unidos',
    de: '/steuernummer/usa-steuer-id',
    pt: '/numero-identificacao-fiscal/guia-impostos-estados-unidos',
  },
  '/tax-identification-number/brazil-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-cnpj-cpf-brasil',
    pt: '/numero-identificacao-fiscal/guia-cnpj-cpf-brasil',
  },
  '/tax-identification-number/france-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-siren-siret-francia',
    de: '/steuerliche-identifikationsnummer/frankreich-siren-siret',
  },
  '/tax-identification-number/united-kingdom-tax-id-guide': {
    es: '/numero-identificacion-fiscal/guia-iva-reino-unido',
    de: '/steuerliche-identifikationsnummer/uk-vat-guide',
  },
  '/tax-identification-number/japan-tax-id-guide': {
    'zh-Hans': '/shuiwu-shibie-haoma/riben-shuihao',
  },
  '/tax-identification-number/korea-tax-id-guide': {
    'zh-Hans': '/shuiwu-shibie-haoma/hanguo-shuihao',
  },
  '/tax-identification-number/vietnam-tax-id-guide': {
    'zh-Hans': '/shuiwu-shibie-haoma/yuenan-shuihao',
  },
  '/tax-identification-number/thailand-tax-id-guide': {
    'zh-Hans': '/shuiwu-shibie-haoma/taiguo-shuihao',
  },
  '/tax-identification-number/malaysia-tax-id-guide': {
    'zh-Hans': '/shuiwu-shibie-haoma/malaixiya-shuihao',
  },
  '/tax-identification-number/indonesia-tax-id-guide': {
    'zh-Hans': '/shuiwu-shibie-haoma/yinni-shuihao',
  },

  // Check VAT Number Page
  '/check-vat-number-free-links-to-official-national-database-search-VAT-number': {
    es: '/comprobar-numero-iva',
    'zh-Hans': '/chaxun-zengzhishui-hao',
    de: '/umsatzsteuer-identifikationsnummer-pruefen',
  },
  
  // Homepage
  '/': {
    es: '/',
    'zh-Hans': '/',
    de: '/',
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
