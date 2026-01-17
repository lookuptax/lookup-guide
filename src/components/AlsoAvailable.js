import React from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Minimal cross-language linking component for SEO interlinking
 * 
 * Usage (with explicit URL - recommended for custom slugs):
 *   <AlsoAvailable lang="es" href="/docs/es/numero-identificacion-fiscal/guia-rfc-mexico" />
 * 
 * Usage (auto-generated URL - only works if both locales have same slug):
 *   <AlsoAvailable lang="es" />
 */
export default function AlsoAvailable({ lang, href }) {
  const location = useLocation();
  const { siteConfig, i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const defaultLocale = i18n.defaultLocale;
  
  // Don't show if we're already on the target locale
  if (currentLocale === lang) {
    return null;
  }

  // Translation for "This post is also available in" based on current page locale
  const translations = {
    en: 'This post is also available in',
    es: 'Esta página también está disponible en',
  };

  // Language names in their native form
  const languageNames = {
    en: 'English',
    es: 'Español',
  };

  // Use explicit href if provided, otherwise construct from path
  let targetUrl = href;
  
  if (!targetUrl) {
    // Auto-generate URL (only works for same-slug translations)
    let baseUrl = siteConfig.baseUrl;
    for (const locale of i18n.locales) {
      if (locale !== defaultLocale && baseUrl.endsWith(`/${locale}/`)) {
        baseUrl = baseUrl.replace(`/${locale}/`, '/');
        break;
      }
    }
    
    targetUrl = location.pathname;
    
    if (currentLocale === defaultLocale) {
      // Going from default (en) to non-default (es)
      if (targetUrl.startsWith(baseUrl)) {
        targetUrl = targetUrl.substring(baseUrl.length);
      }
      targetUrl = `${baseUrl}${lang}/${targetUrl}`;
    } else {
      // Going from non-default locale to default
      const localePrefix = `${baseUrl}${currentLocale}/`;
      if (targetUrl.startsWith(localePrefix)) {
        if (lang === defaultLocale) {
          targetUrl = targetUrl.replace(localePrefix, baseUrl);
        } else {
          targetUrl = targetUrl.replace(localePrefix, `${baseUrl}${lang}/`);
        }
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
