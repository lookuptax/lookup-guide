import React from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { hasSpanishTranslation, getSpanishPath, translatedPages } from '@site/src/data/translatedPages';

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
  const baseUrl = siteConfig.baseUrl; // /docs/
  
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
  
  // Check if this page is one of the translated pages
  // For Spanish pages, we need to reverse-lookup the English path
  let englishPath = relativePath;
  let spanishPath = null;
  let hasTranslation = false;
  
  if (currentLocale === defaultLocale) {
    // On English page - check if Spanish translation exists
    hasTranslation = hasSpanishTranslation(relativePath);
    if (hasTranslation) {
      spanishPath = getSpanishPath(relativePath);
      englishPath = relativePath;
    }
  } else {
    // On Spanish page - check if this is a translated page
    // Look up by Spanish path (reverse lookup)
    for (const [enPath, esPath] of Object.entries(translatedPages)) {
      if (esPath === relativePath || esPath === relativePath.replace(/^\//, '')) {
        hasTranslation = true;
        englishPath = enPath;
        spanishPath = esPath;
        break;
      }
    }
  }
  
  // If no translation exists, don't render hreflang tags
  if (!hasTranslation) {
    return null;
  }
  
  // Build absolute URLs
  const englishUrl = `${siteUrl}${baseUrl}${englishPath.replace(/^\//, '')}`.replace(/\/$/, '') || `${siteUrl}${baseUrl}`;
  const spanishUrl = `${siteUrl}${baseUrl}es/${spanishPath.replace(/^\//, '')}`.replace(/\/$/, '');
  
  return (
    <Head>
      <link rel="alternate" hreflang="en" href={englishUrl} />
      <link rel="alternate" hreflang="es" href={spanishUrl} />
      <link rel="alternate" hreflang="x-default" href={englishUrl} />
    </Head>
  );
}
