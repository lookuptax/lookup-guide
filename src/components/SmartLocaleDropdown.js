import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './SmartLocaleDropdown.css';

/**
 * Custom language switcher that redirects to locale homepage.
 * Uses CSS hover for dropdown visibility to avoid JavaScript issues.
 */
export default function SmartLocaleDropdown({mobile, ...props}) {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const locales = i18n.locales;
  const defaultLocale = i18n.defaultLocale;
  
  // Hardcoded base URL - this never changes
  const trueBaseUrl = '/docs/';
  
  // Generate items with absolute URLs
  const items = locales.map((locale) => {
    let targetUrl;
    if (locale === defaultLocale) {
      targetUrl = trueBaseUrl;
    } else {
      targetUrl = `${trueBaseUrl}${locale}/`;
    }

    const label = locale === 'en' ? 'English' : (locale === 'es' ? 'Español' : locale);
    const isActive = locale === currentLocale;

    return { locale, label, targetUrl, isActive };
  });

  const dropdownLabel = currentLocale === 'en' ? 'English' : (currentLocale === 'es' ? 'Español' : currentLocale);

  return (
    <div className="navbar__item dropdown dropdown--hoverable smart-locale-dropdown">
      <a 
        href="#" 
        className="navbar__link"
        onClick={(e) => e.preventDefault()}
      >
        {dropdownLabel}
      </a>
      <ul className="dropdown__menu">
        {items.map(({ locale, label, targetUrl, isActive }) => (
          <li key={locale}>
            <a 
              href={targetUrl}
              className={`dropdown__link ${isActive ? 'dropdown__link--active' : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
