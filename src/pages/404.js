import React from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';

/**
 * Custom 404 page that works for all locales.
 * For non-default locales, shows a helpful message with link to English version.
 * Easily extensible to any new language by adding translations to i18n files.
 */
export default function NotFound() {
  const location = useLocation();
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const defaultLocale = i18n.defaultLocale;
  
  // Check if we're on a non-default (non-English) locale
  const isNonDefaultLocale = currentLocale !== defaultLocale;
  
  // Get the default locale (English) equivalent URL
  const getDefaultLocaleUrl = () => {
    const path = location.pathname;
    // Remove /docs/{locale}/ and replace with /docs/
    const localePattern = new RegExp(`/docs/${currentLocale}/`);
    if (localePattern.test(path)) {
      return path.replace(localePattern, '/docs/');
    }
    // Remove /{locale}/ prefix for other paths
    const prefixPattern = new RegExp(`^/${currentLocale}/`);
    if (prefixPattern.test(path)) {
      return path.replace(prefixPattern, '/');
    }
    return path;
  };

  const defaultLocaleUrl = getDefaultLocaleUrl();

  return (
    <Layout
      title={translate({
        id: 'theme.NotFound.title',
        message: 'Page Not Found',
      })}
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div style={{ textAlign: 'center' }}>
              
              {isNonDefaultLocale ? (
                // Non-default locale (Spanish, French, etc.) - show translation notice
                <>
                  <h1 className="hero__title">
                    <Translate
                      id="notFound.title.nonDefault"
                      description="Title for 404 page in non-default locales"
                    >
                      🌐 Page Not Available in This Language
                    </Translate>
                  </h1>
                  
                  <p style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>
                    <Translate
                      id="notFound.message.notTranslated"
                      description="Message explaining page is not translated"
                    >
                      This page has not been translated yet.
                    </Translate>
                  </p>
                  
                  <div style={{ 
                    backgroundColor: 'var(--ifm-color-primary-lightest)', 
                    padding: '1.5rem', 
                    borderRadius: '8px',
                    marginTop: '2rem',
                    marginBottom: '2rem'
                  }}>
                    <p style={{ margin: 0, fontWeight: 500 }}>
                      <Translate
                        id="notFound.message.viewEnglish"
                        description="Prompt to view English version"
                      >
                        📖 In the meantime, you can view the English version:
                      </Translate>
                    </p>
                    <a 
                      href={defaultLocaleUrl}
                      style={{ 
                        display: 'inline-block',
                        marginTop: '1rem',
                        padding: '0.75rem 1.5rem',
                        backgroundColor: 'var(--ifm-color-primary)',
                        color: 'white',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 600
                      }}
                    >
                      <Translate
                        id="notFound.button.viewEnglish"
                        description="Button text to view English version"
                      >
                        View in English →
                      </Translate>
                    </a>
                  </div>

                  <p style={{ color: 'var(--ifm-color-content-secondary)' }}>
                    <Translate
                      id="notFound.message.workingOnIt"
                      description="Message about ongoing translation work"
                    >
                      We are working on translating more content. Check back soon for updates.
                    </Translate>
                  </p>

                  <div style={{ marginTop: '2rem' }}>
                    <a href={`/docs/${currentLocale}/`} style={{ marginRight: '1rem' }}>
                      <Translate
                        id="notFound.link.home"
                        description="Link to go home"
                      >
                        ← Go to home
                      </Translate>
                    </a>
                    <a href={`/docs/${currentLocale}/category/tax-identification-number`}>
                      <Translate
                        id="notFound.link.availableGuides"
                        description="Link to view available guides"
                      >
                        View available guides
                      </Translate>
                    </a>
                  </div>
                </>
              ) : (
                // Default locale (English) - standard 404 message
                <>
                  <h1 className="hero__title">
                    <Translate
                      id="theme.NotFound.title"
                      description="The title of the 404 page"
                    >
                      Page Not Found
                    </Translate>
                  </h1>
                  <p>
                    <Translate
                      id="theme.NotFound.p1"
                      description="The first paragraph of the 404 page"
                    >
                      We could not find what you were looking for.
                    </Translate>
                  </p>
                  <p>
                    <Translate
                      id="theme.NotFound.p2"
                      description="The second paragraph of the 404 page"
                    >
                      Please contact the owner of the site that linked you to the
                      original URL and let them know their link is broken.
                    </Translate>
                  </p>
                  <a href="/docs/">
                    <Translate
                      id="notFound.link.homeDefault"
                      description="Link to homepage for default locale"
                    >
                      Go to homepage
                    </Translate>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
