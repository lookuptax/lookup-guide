import React from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translatedPages } from '@site/src/data/translatedPages';

/**
 * Cross-language linking component for SEO interlinking
 * Uses translatedPages.js to auto-detect language-specific slugs
 * 
 * Usage (auto-detect all translations):
 *   <AlsoAvailable />
 * 
 * Usage (legacy - still supported):
 *   <AlsoAvailable lang="es" href="/docs/es/..." />
 */

export default function AlsoAvailable({ lang, href }) {
  const location = useLocation();
  const { siteConfig, i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const defaultLocale = i18n.defaultLocale;
  
  // Use fixed base URL (not locale-dependent)
  const baseUrl = '/docs/';

  const translations = {
    en: 'This post is also available in',
    es: 'Esta página también está disponible en',
    'zh-Hans': '本文还提供以下语言版本',
    de: 'Dieser Beitrag ist auch verfügbar in',
    pt: 'Esta página também está disponível em',
  };

  const languageNames = {
    en: 'English',
    es: 'Español',
    'zh-Hans': '中文',
    de: 'Deutsch',
    pt: 'Português',
  };

  // Helper: Get the current page's English key
  const getCurrentEnglishKey = () => {
    let relativePath = location.pathname;
    
    // Strip baseUrl (handles both /docs/ and /docs/zh-Hans/ cases)
    if (relativePath.startsWith(baseUrl)) {
      relativePath = relativePath.substring(baseUrl.length);
    }
    
    // Strip current locale prefix if present (e.g., "zh-Hans/ruhe-yanzheng/...")
    if (currentLocale !== defaultLocale) {
      const localePrefix = `${currentLocale}/`;
      if (relativePath.startsWith(localePrefix)) {
        relativePath = relativePath.substring(localePrefix.length);
      }
    }
    
    // Normalize: ensure leading slash
    relativePath = '/' + relativePath.replace(/^\/+/, '').replace(/\/$/, '');
    if (relativePath === '') relativePath = '/';

    // Find English key
    if (currentLocale === defaultLocale) {
      // On English page - key is the current path
      return translatedPages[relativePath] ? relativePath : null;
    } else {
      // On localized page - reverse lookup to find English key
      for (const [enPath, locales] of Object.entries(translatedPages)) {
        for (const [locale, localePath] of Object.entries(locales)) {
          const normalizedLocalePath = '/' + localePath.replace(/^\/+/, '');
          if (locale === currentLocale && normalizedLocalePath === relativePath) {
            return enPath;
          }
        }
      }
    }
    return null;
  };

  // Helper: Build URL for target language
  const resolveUrlForLanguage = (targetLang, englishKey) => {
    if (!englishKey) return null;

    let targetSlug = null;
    
    if (targetLang === defaultLocale) {
      // Target is English - use the English key as slug
      targetSlug = englishKey;
    } else {
      // Target is non-English - look up the localized slug
      const mapping = translatedPages[englishKey];
      if (mapping && mapping[targetLang]) {
        targetSlug = mapping[targetLang];
      }
    }

    if (!targetSlug) return null;

    // Remove leading slash for URL construction
    targetSlug = targetSlug.replace(/^\/+/, '');
    
    // Build URL: /docs/ + optional(locale/) + slug
    if (targetLang === defaultLocale) {
      return `${baseUrl}${targetSlug}`;
    } else {
      return `${baseUrl}${targetLang}/${targetSlug}`;
    }
  };

  // Get English key for current page
  const englishKey = getCurrentEnglishKey();

  // NEW MODE: No lang prop = auto-detect all translations
  if (!lang) {
    if (!englishKey) return null;

    const availableLocales = i18n.locales || ['en'];
    const availableTranslations = [];
    
    for (const locale of availableLocales) {
      if (locale === currentLocale) continue;
      const url = resolveUrlForLanguage(locale, englishKey);
      if (url) {
        availableTranslations.push({
          locale,
          url,
          name: languageNames[locale] || locale,
        });
      }
    }

    if (availableTranslations.length === 0) return null;

    const label = translations[currentLocale] || translations.en;

    return (
      <p style={{
        fontSize: '0.8rem',
        color: 'var(--ifm-color-content-secondary)',
        marginTop: '0.25rem',
        marginBottom: '0.75rem',
      }}>
        {label}:{' '}
        {availableTranslations.map((t, index) => (
          <React.Fragment key={t.locale}>
            {index > 0 && <span style={{ margin: '0 0.5rem' }}>|</span>}
            <a href={t.url} style={{ fontWeight: 500 }}>{t.name}</a>
          </React.Fragment>
        ))}
      </p>
    );
  }

  // LEGACY MODE: lang prop provided
  if (currentLocale === lang) return null;

  // Resolve URL: use explicit href if provided, else auto-detect
  let targetUrl = href || resolveUrlForLanguage(lang, englishKey);
  if (!targetUrl) return null;

  const label = translations[currentLocale] || translations.en;
  const langName = languageNames[lang] || lang;

  return (
    <p style={{
      fontSize: '0.8rem',
      color: 'var(--ifm-color-content-secondary)',
      marginTop: '0.25rem',
      marginBottom: '0.75rem',
    }}>
      {label}:{' '}
      <a href={targetUrl} style={{ fontWeight: 500 }}>{langName}</a>
    </p>
  );
}
