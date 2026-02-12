import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Custom 404 page - helps users find what they're looking for
 * instead of just showing an error message.
 */
export default function NotFound() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const baseUrl = siteConfig.baseUrl;

  // Try to extract a meaningful suggestion from the current URL
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  // Check if user is on a locale path - suggest English version
  const localeMatch = currentPath.match(/\/docs\/(es|de|pt|zh-Hans)\/(.*)/);
  const suggestedEnglishUrl = localeMatch ? `/docs/${localeMatch[2]}` : null;

  const popularPages = [
    {
      title: '🌍 Country Guides',
      description: 'Tax ID guides for 100+ countries',
      url: `${baseUrl}`,
    },
    {
      title: '🔍 Verify Tax IDs',
      description: 'Step-by-step verification guides',
      url: `${baseUrl}category/verify-tax-ids`,
    },
    {
      title: '📘 Explainers',
      description: 'VAT, IOSS, OSS and more explained',
      url: `${baseUrl}category/explainers`,
    },
    {
      title: '📝 Blog',
      description: 'Latest tax compliance insights',
      url: `${baseUrl}blog`,
    },
  ];

  return (
    <Layout title="Page Not Found">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 className="hero__title" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                404
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#506690' }}>
                This page doesn't exist or may have moved.
              </p>
            </div>

            {/* Suggest English version if on a locale path */}
            {suggestedEnglishUrl && (
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  background: '#f0f7ff',
                  borderRadius: '8px',
                  border: '1px solid #d0e3ff',
                  marginBottom: '2rem',
                  textAlign: 'center',
                }}
              >
                <p style={{ margin: '0 0 0.75rem', fontWeight: 600 }}>
                  🌐 This page may not be available in your language yet.
                </p>
                <a
                  href={suggestedEnglishUrl}
                  className="button button--primary"
                >
                  View English Version
                </a>
              </div>
            )}

            {/* Popular sections */}
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#3c4858' }}>
              Browse Our Guides
            </h2>
            <div
              className="row"
              style={{ marginBottom: '2rem' }}
            >
              {popularPages.map((page, idx) => (
                <div className="col col--6" key={idx} style={{ marginBottom: '1rem' }}>
                  <a
                    href={page.url}
                    style={{
                      display: 'block',
                      padding: '1.25rem',
                      borderRadius: '8px',
                      border: '1px solid #e8edf3',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'box-shadow 0.2s, border-color 0.2s',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
                      e.currentTarget.style.boxShadow = '0 2px 12px rgba(31,147,255,0.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = '#e8edf3';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem' }}>
                      {page.title}
                    </h3>
                    <p style={{ margin: 0, color: '#506690', fontSize: '0.9rem' }}>
                      {page.description}
                    </p>
                  </a>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href={baseUrl} className="button button--outline button--primary button--lg">
                ← Go to Homepage
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
