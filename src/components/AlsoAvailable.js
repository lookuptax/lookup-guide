import React from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Component to display "Also available in [language]" notice
 * Usage in MDX: <AlsoAvailable lang="es" />
 */
export default function AlsoAvailable({ lang, label }) {
  const location = useLocation();
  const { siteConfig, i18n } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;
  const currentLocale = i18n.currentLocale;
  const defaultLocale = i18n.defaultLocale;

  // Don't show if we're already on the target locale
  if (currentLocale === lang) {
    return null;
  }

  // Construct the target URL
  let targetUrl = location.pathname;
  
  // If current is default locale, add the target locale prefix
  if (currentLocale === defaultLocale) {
    // Remove baseUrl prefix if present
    if (targetUrl.startsWith(baseUrl)) {
      targetUrl = targetUrl.substring(baseUrl.length);
    }
    targetUrl = `${baseUrl}${lang}/${targetUrl}`;
  } else {
    // Replace current locale with target locale
    const localePrefix = `${baseUrl}${currentLocale}/`;
    if (targetUrl.startsWith(localePrefix)) {
      targetUrl = targetUrl.replace(localePrefix, `${baseUrl}${lang}/`);
    }
  }

  // Default labels based on locale
  const labels = {
    es: '🌐 También disponible en Español',
    en: '🌐 Also available in English',
  };

  const displayLabel = label || labels[lang] || `Also available in ${lang}`;

  return (
    <div style={{
      backgroundColor: 'var(--ifm-color-primary-lightest)',
      borderLeft: '4px solid var(--ifm-color-primary)',
      padding: '1rem 1.5rem',
      marginBottom: '2rem',
      borderRadius: '4px',
      fontSize: '1rem',
    }}>
      <a 
        href={targetUrl}
        style={{
          color: 'var(--ifm-color-primary-dark)',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        {displayLabel} →
      </a>
    </div>
  );
}
