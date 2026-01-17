import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory } from '@docusaurus/router';
import BlogPostPage from '@theme-original/BlogPostPage';

/**
 * Theme override for BlogPostPage that redirects Spanish users to homepage.
 * Since there are no Spanish blog translations, we redirect to avoid showing English content.
 */
export default function BlogPostPageWrapper(props) {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();
  const isSpanish = i18n.currentLocale === 'es';

  useEffect(() => {
    if (isSpanish) {
      // Redirect Spanish users to Spanish homepage
      history.replace('/docs/es/');
    }
  }, [isSpanish, history]);

  // For Spanish locale, show a loading message while redirecting
  if (isSpanish) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Redirigiendo a la página principal...</p>
      </div>
    );
  }

  // For English locale, render the normal blog post
  return <BlogPostPage {...props} />;
}
