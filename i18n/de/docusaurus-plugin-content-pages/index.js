import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '@site/src/pages/index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">LookupTax</h1>
        <p className="hero__subtitle">Globale API für Umsatzsteuer-Validierung</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://platform.lookuptax.com/auth?page=register">
           Kostenlos anmelden
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`LookupTax | Umsatzsteuer-Validierungs-APIs & Leitfäden`}
      description="Validieren Sie Umsatzsteuer-Nummern, ABN, GSTIN und mehr mit unseren kostenlosen, sicheren und einfach zu bedienenden APIs.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
