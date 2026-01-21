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
        <p className="hero__subtitle">API Global para validação de IVA</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://platform.lookuptax.com/auth?page=register">
           Inscreva-se gratuitamente
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
      title={`LookupTax | APIs de Validação de IVA e Guias`}
      description="Valide número de IVA, ABN, GSTIN e mais usando nossas APIs gratuitas, seguras e fáceis de usar.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
