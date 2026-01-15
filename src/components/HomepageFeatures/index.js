import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Country Guides',
    Svg: require('@site/static/img/guides.svg').default,
    description: (
      <>
        Learn about the taxation guidelines and upcoming regulations in the countries you operate in. <a href="https://lookuptax.com/docs/category/country-tax-guides">Explore more</a>
      </>
    ),
  },
  {
    title: 'Explainers',
    Svg: require('@site/static/img/explainer.svg').default,
    description: (
      <>
       Confused with different terminologies. Dont worry we have simplified various concepts in Taxation for you. <a href="https://lookuptax.com/docs/category/explainers">Explore now</a>
      </>
    ),
  },
  {
    title: 'API Documentation',
    Svg: require('@site/static/img/docs.svg').default,
    description: (
      <>
        Integrate our Global Vad validation APIs and validated TAX IDs accross the world with just one API. <a href="https://demo.lookuptax.com/api/">Go to API docs</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
