import React from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translatedPages, getAllTranslations } from '@site/src/data/translatedPages';

/**
 * HreflangTags Component
 * 
 * Injects hreflang tags to help search engines understand language relationships.
 * Only generates hreflang links when a translation actually exists.
 * 
 * Following Google's best practices:
 * - Only add hreflang when target page exists
 * - Include x-default pointing to English version
 * - Use full absolute URLs
 */
export default function HreflangTags() {
  const location = useLocation();
  const { siteConfig, i18n } = useDocusaurusContext();
  
  const currentLocale = i18n.currentLocale;
  const defaultLocale = i18n.defaultLocale;
  const siteUrl = siteConfig.url; // https://lookuptax.com
  
  // Use fixed base URL to avoid double-nested locale paths
  // siteConfig.baseUrl can be /docs/es/ on locale pages, causing /docs/es/de/ issues
  const baseUrl = '/docs/';
  
  // Get the current path relative to baseUrl (without locale prefix)
  let relativePath = location.pathname;
  
  // Strip baseUrl
  if (relativePath.startsWith(baseUrl)) {
    relativePath = relativePath.substring(baseUrl.length);
  }
  
  // Strip locale prefix if present
  if (currentLocale !== defaultLocale) {
    const localePrefix = `${currentLocale}/`;
    if (relativePath.startsWith(localePrefix)) {
      relativePath = relativePath.substring(localePrefix.length);
    }
  }
  
  // Normalize: ensure starts with /, remove trailing slash except for root
  relativePath = '/' + relativePath.replace(/^\/+/, '').replace(/\/$/, '');
  if (relativePath === '') relativePath = '/';
  
  // Find the English path and check for translations
  let englishPath = relativePath;
  let translations = {};
  let hasTranslation = false;
  
  if (currentLocale === defaultLocale) {
    // On English page - check if translations exist
    translations = getAllTranslations(relativePath);
    hasTranslation = Object.keys(translations).length > 0;
    englishPath = relativePath;
  } else {
    // On localized page - reverse lookup the English path
    for (const [enPath, locales] of Object.entries(translatedPages)) {
      for (const [locale, localePath] of Object.entries(locales)) {
        if (locale === currentLocale && (localePath === relativePath || localePath === relativePath.replace(/^\//, ''))) {
          hasTranslation = true;
          englishPath = enPath;
          translations = locales;
          break;
        }
      }
      if (hasTranslation) break;
    }
  }
  
  // If no translation exists, don't render hreflang tags
  if (!hasTranslation) {
    return null;
  }
  
  // Build absolute URLs for all available languages
  const englishUrl = `${siteUrl}${baseUrl}${englishPath.replace(/^\//, '')}`.replace(/\/$/, '') || `${siteUrl}${baseUrl}`;
  
  const hreflangLinks = [
    <link key="en" rel="alternate" hreflang="en" href={englishUrl} />
  ];
  
  // Add Spanish if available
  if (translations.es) {
    const spanishUrl = `${siteUrl}${baseUrl}es/${translations.es.replace(/^\//, '')}`.replace(/\/$/, '');
    hreflangLinks.push(
      <link key="es" rel="alternate" hreflang="es" href={spanishUrl} />
    );
  }
  
  // Add Chinese if available
  if (translations['zh-Hans']) {
    const chineseUrl = `${siteUrl}${baseUrl}zh-Hans/${translations['zh-Hans'].replace(/^\//, '')}`.replace(/\/$/, '');
    hreflangLinks.push(
      <link key="zh-Hans" rel="alternate" hreflang="zh-Hans" href={chineseUrl} />
    );
  }
  
  // Add German if available
  if (translations.de) {
    const germanUrl = `${siteUrl}${baseUrl}de/${translations.de.replace(/^\//, '')}`.replace(/\/$/, '');
    hreflangLinks.push(
      <link key="de" rel="alternate" hreflang="de" href={germanUrl} />
    );
  }
  
  // Add Portuguese if available
  if (translations.pt) {
    const portugueseUrl = `${siteUrl}${baseUrl}pt/${translations.pt.replace(/^\//, '')}`.replace(/\/$/, '');
    hreflangLinks.push(
      <link key="pt" rel="alternate" hreflang="pt" href={portugueseUrl} />
    );
  }
  
  // Add x-default pointing to English
  hreflangLinks.push(
    <link key="x-default" rel="alternate" hreflang="x-default" href={englishUrl} />
  );
  
  return (
    <Head>
      {hreflangLinks}
    </Head>
  );
}
