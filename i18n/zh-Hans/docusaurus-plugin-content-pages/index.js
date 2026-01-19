import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">全球税号验证API</h1>
        <p className="hero__subtitle">在100+个国家验证税号、增值税号和营业执照</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://platform.lookuptax.com/auth?page=register">
            免费注册试用 ⏱️
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
      title={`全球税号验证API`}
      description="跨境贸易税号验证。在100+个国家验证增值税号、税号和营业执照号码，支持欧盟VIES、美国EIN、中国税号等。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
