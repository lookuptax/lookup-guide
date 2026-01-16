import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Translations
const translations = {
  es: {
    title: '🌐 Página No Disponible en Español',
    notTranslated: 'Esta página aún no ha sido traducida al español.',
    viewEnglish: '📖 Mientras tanto, puede consultar la versión en inglés:',
    viewEnglishButton: 'Ver en Inglés →',
    workingOnIt: 'Estamos trabajando para traducir más contenido. Vuelva pronto.',
    goHome: '← Ir al inicio',
    viewGuides: 'Ver guías disponibles',
  },
};

const defaultTranslations = {
  title: 'Page Not Found',
  p1: 'We could not find what you were looking for.',
  p2: 'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.',
  goHome: 'Go to homepage',
};

export default function NotFound() {
  const location = useLocation();
  const { i18n, siteConfig } = useDocusaurusContext();
  const defaultLocale = i18n.defaultLocale;
  const baseUrl = siteConfig.baseUrl;

  const detectLocaleFromPath = () => {
    const path = location.pathname;
    // Strict prefix check
    for (const locale of i18n.locales) {
      if (locale === defaultLocale) continue;
      if (path.startsWith(`${baseUrl}${locale}/`) || path.startsWith(`/${locale}/`) || path === `${baseUrl}${locale}` || path === `/${locale}`) {
        return locale;
      }
    }
    return defaultLocale;
  };

  const detectedLocale = detectLocaleFromPath();
  const t = translations[detectedLocale] || null;
  const isNonDefaultLocale = detectedLocale !== defaultLocale && t;

  // Calculate links
  let cleanPath = location.pathname;
  if (detectedLocale !== defaultLocale) {
     const localePrefix = `${baseUrl}${detectedLocale}/`;
     const altLocalePrefix = `/${detectedLocale}/`;
     if (cleanPath.startsWith(localePrefix)) cleanPath = cleanPath.replace(localePrefix, baseUrl);
     else if (cleanPath.startsWith(altLocalePrefix)) cleanPath = cleanPath.replace(altLocalePrefix, '/');
     else if (cleanPath === `${baseUrl}${detectedLocale}`) cleanPath = baseUrl;
     else if (cleanPath === `/${detectedLocale}`) cleanPath = '/';
  }

  const defaultLocaleUrl = cleanPath;
  const homeUrl = isNonDefaultLocale ? `${baseUrl}${detectedLocale}/` : baseUrl;
  const categoryUrl = isNonDefaultLocale ? `${baseUrl}${detectedLocale}/category/tax-identification-number` : `${baseUrl}category/tax-identification-number`;

  return (
    <Layout title={isNonDefaultLocale ? t.title : defaultTranslations.title}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div style={{ textAlign: 'center' }}>
              {isNonDefaultLocale ? (
                <>
                  <h1 className="hero__title">{t.title}</h1>
                  <p style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>{t.notTranslated}</p>
                  <div style={{ backgroundColor: 'var(--ifm-color-primary-lightest)', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', marginBottom: '2rem' }}>
                    <p style={{ margin: 0, fontWeight: 500 }}>{t.viewEnglish}</p>
                    <a href={defaultLocaleUrl} style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: 'var(--ifm-color-primary)', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}>{t.viewEnglishButton}</a>
                  </div>
                  <p style={{ color: 'var(--ifm-color-content-secondary)' }}>{t.workingOnIt}</p>
                  <div style={{ marginTop: '2rem' }}>
                    <a href={homeUrl} style={{ marginRight: '1rem' }}>{t.goHome}</a>
                    <a href={categoryUrl}>{t.viewGuides}</a>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="hero__title">{defaultTranslations.title}</h1>
                  <p>{defaultTranslations.p1}</p>
                  <p>{defaultTranslations.p2}</p>
                  <a href={baseUrl}>{defaultTranslations.goHome}</a>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
