import React from 'react';
import NavbarItem from '@theme/NavbarItem';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SmartLocaleDropdown({mobile, ...props}) {
  const { i18n, siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const defaultLocale = i18n.defaultLocale;
  const locales = i18n.locales;
  const baseUrl = siteConfig.baseUrl;

  // Helper to detect locale from path
  const detectLocaleFromPath = () => {
    const path = location.pathname;
    for (const locale of locales) {
      if (locale === defaultLocale) continue;
      if (path.startsWith(`${baseUrl}${locale}/`) || path.startsWith(`/${locale}/`) || path === `${baseUrl}${locale}` || path === `/${locale}`) {
        return locale;
      }
    }
    return defaultLocale;
  };

  // Use Docusaurus's locale for label/active state (accurate for valid pages)
  const currentLocale = i18n.currentLocale;
  
  // Use URL detection for path construction (handles 404s and edge cases)
  const detectedLocale = detectLocaleFromPath();

  let cleanPath = location.pathname;
  // Strip locale using strict prefixes based on detected locale
  if (detectedLocale !== defaultLocale) {
    const localePrefix = `${baseUrl}${detectedLocale}/`;
    const altLocalePrefix = `/${detectedLocale}/`;
    if (cleanPath.startsWith(localePrefix)) {
      cleanPath = cleanPath.replace(localePrefix, baseUrl);
    } else if (cleanPath.startsWith(altLocalePrefix)) {
      cleanPath = cleanPath.replace(altLocalePrefix, '/');
    } else if (cleanPath === `${baseUrl}${detectedLocale}`) {
      cleanPath = baseUrl;
    } else if (cleanPath === `/${detectedLocale}`) {
      cleanPath = '/';
    }
  }

  const items = locales.map((locale) => {
    let to;
    if (locale === defaultLocale) {
      to = cleanPath;
    } else {
      if (cleanPath.startsWith(baseUrl)) {
        to = cleanPath.replace(baseUrl, `${baseUrl}${locale}/`);
      } else if (cleanPath === '/') {
        to = `/${locale}/`;
      } else {
        to = `/${locale}${cleanPath}`;
      }
    }

    const label = locale === 'en' ? 'English' : (locale === 'es' ? 'Español' : locale);

    return {
      label,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className: locale === currentLocale ? 'dropdown__link--active' : '',
    };
  });

  const dropdownLabel = currentLocale === 'en' ? 'English' : (currentLocale === 'es' ? 'Español' : currentLocale);

  return (
    <NavbarItem
      {...props}
      mobile={mobile}
      items={items}
      label={dropdownLabel}
      type="dropdown"
    />
  );
}
