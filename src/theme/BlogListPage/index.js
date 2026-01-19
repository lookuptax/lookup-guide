import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory } from '@docusaurus/router';
import BlogListPage from '@theme-original/BlogListPage';

/**
 * Theme override for BlogListPage that redirects non-English users to homepage.
 * Since there are no Spanish/Chinese blog translations, we redirect to avoid showing English content.
 */
export default function BlogListPageWrapper(props) {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();
  const isNonEnglish = i18n.currentLocale !== 'en';

  useEffect(() => {
    if (isNonEnglish) {
      // Redirect non-English users to their locale homepage
      history.replace(`/docs/${i18n.currentLocale}/`);
    }
  }, [isNonEnglish, history, i18n.currentLocale]);

  // For non-English locale, show a loading message while redirecting
  if (isNonEnglish) {
    const redirectMessage = i18n.currentLocale === 'es' 
      ? 'Redirigiendo a la página principal...'
      : i18n.currentLocale === 'zh-Hans'
      ? '正在重定向到首页...'
      : 'Redirecting to homepage...';
    
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>{redirectMessage}</p>
      </div>
    );
  }

  // For English locale, render the normal blog list
  return <BlogListPage {...props} />;
}
