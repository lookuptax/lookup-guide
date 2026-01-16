import React from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Minimal cross-language linking component for SEO interlinking
 * Usage: <AlsoAvailable lang="es" />
 */
export default function AlsoAvailable({ lang }) {
  const location = useLocation();
  const { siteConfig, i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const defaultLocale = i18n.defaultLocale;
  
  // Get the true base URL (without any locale prefix)
  // siteConfig.baseUrl may include locale prefix like '/docs/es/'
  let baseUrl = siteConfig.baseUrl;
  for (const locale of i18n.locales) {
    if (locale !== defaultLocale && baseUrl.endsWith(`/${locale}/`)) {
      baseUrl = baseUrl.replace(`/${locale}/`, '/');
      break;
    }
  }

  // Don't show if we're already on the target locale
  if (currentLocale === lang) {
    return null;
  }

  // Translation for "This post is also available in" based on current page locale
  const translations = {
    en: 'This post is also available in',
    es: 'Esta página también está disponible en',
    // Add more languages here as needed
  };

  // Language names in their native form
  const languageNames = {
    en: 'English',
    es: 'Español',
    // Add more languages here
  };

  // Construct the target URL
  let targetUrl = location.pathname;
  
  console.log('[AlsoAvailable] Debug:', {
    currentPath: targetUrl,
    currentLocale,
    targetLang: lang,
    defaultLocale,
    baseUrl
  });
  
  // If current is default locale, add the target locale prefix
  if (currentLocale === defaultLocale) {
    // Going from default (en) to non-default (es)
    // Remove baseUrl prefix if present
    if (targetUrl.startsWith(baseUrl)) {
      targetUrl = targetUrl.substring(baseUrl.length);
    }
    targetUrl = `${baseUrl}${lang}/${targetUrl}`;
  } else {
    // Going from non-default locale to another locale
    const localePrefix = `${baseUrl}${currentLocale}/`;
    if (targetUrl.startsWith(localePrefix)) {
      // If target is default locale, just remove the locale prefix
      if (lang === defaultLocale) {
        targetUrl = targetUrl.replace(localePrefix, baseUrl);
        console.log('[AlsoAvailable] Linking to default locale, removed prefix:', targetUrl);
      } else {
        // Otherwise, replace current locale with target locale
        targetUrl = targetUrl.replace(localePrefix, `${baseUrl}${lang}/`);
      }
    }
  }

  const label = translations[currentLocale] || translations.en;
  const targetLangName = languageNames[lang] || lang;

  return (
    <p style={{
      fontSize: '0.8rem',
      color: 'var(--ifm-color-content-secondary)',
      marginTop: '0.25rem',
      marginBottom: '0.75rem',
    }}>
      {label}: <a href={targetUrl} style={{ fontWeight: 500 }}>{targetLangName}</a>
    </p>
  );
}
