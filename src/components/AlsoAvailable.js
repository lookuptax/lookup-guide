import React from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Cross-language linking component for SEO interlinking
 * Now supports multiple languages on a single line
 * 
 * Usage (single language):
 *   <AlsoAvailable lang="es" href="/docs/es/numero-identificacion-fiscal/guia-rfc-mexico" />
 * 
 * Usage (multiple languages):
 *   <AlsoAvailable lang="es" href="/docs/es/..." />
 *   <AlsoAvailable lang="zh-Hans" href="/docs/zh-Hans/..." />
 * 
 * This will automatically combine into: "This post is also available in: English | 中文"
 */

// Store for collecting all AlsoAvailable instances on a page
const availableLanguages = new Map();
let renderTimer = null;

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
    'zh-Hans': '本文还提供以下语言版本',
  };

  // Language names in their native form
  const languageNames = {
    en: 'English',
    es: 'Español',
    'zh-Hans': '中文',
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
      // Going from default (en) to non-default (es/zh-Hans)
      if (targetUrl.startsWith(baseUrl)) {
        targetUrl = targetUrl.substring(baseUrl.length);
      }
      targetUrl = `${baseUrl}${lang}/${targetUrl}`;
    } else {
      // Going from non-default locale to default or another locale
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

  // Collect this language for combined rendering
  const pageKey = location.pathname;
  if (!availableLanguages.has(pageKey)) {
    availableLanguages.set(pageKey, []);
  }
  
  const languages = availableLanguages.get(pageKey);
  const existingLang = languages.find(l => l.lang === lang);
  
  if (!existingLang) {
    languages.push({
      lang,
      url: targetUrl,
      name: languageNames[lang] || lang
    });
  }

  // Clear and set new timer to batch render
  if (renderTimer) {
    clearTimeout(renderTimer);
  }
  
  // Use state to force re-render after collecting all languages
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  
  renderTimer = setTimeout(() => {
    forceUpdate();
    renderTimer = null;
  }, 0);

  // Only render if we're the first instance
  const isFirst = languages.length > 0 && languages[0].lang === lang;
  
  if (!isFirst) {
    return null;
  }

  const label = translations[currentLocale] || translations.en;

  return (
    <p style={{
      fontSize: '0.8rem',
      color: 'var(--ifm-color-content-secondary)',
      marginTop: '0.25rem',
      marginBottom: '0.75rem',
    }}>
      {label}:{' '}
      {languages.map((l, index) => (
        <React.Fragment key={l.lang}>
          {index > 0 && <span style={{ margin: '0 0.5rem' }}>|</span>}
          <a href={l.url} style={{ fontWeight: 500 }}>
            {l.name}
          </a>
        </React.Fragment>
      ))}
    </p>
  );
}
