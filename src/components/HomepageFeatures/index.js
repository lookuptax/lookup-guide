import React from 'react';
import clsx from 'clsx';
import styles from '@site/src/components/HomepageFeatures/styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Spanish feature list
const FeatureListEs = [
  {
    title: 'Guías por País',
    Svg: require('@site/static/img/guides.svg').default,
    description: (
      <>
        Conozca las directrices fiscales y las próximas regulaciones en los países donde opera. <a href="/docs/es/category/tax-identification-number">Explorar más</a>
      </>
    ),
  },
  {
    title: 'Explicadores',
    Svg: require('@site/static/img/explainer.svg').default,
    description: (
      <>
        ¿Confundido con diferentes terminologías? No se preocupe, hemos simplificado varios conceptos de impuestos para usted. <a href="/docs/es/category/explainers">Explorar ahora</a>
      </>
    ),
  },
  {
    title: 'Documentación API',
    Svg: require('@site/static/img/docs.svg').default,
    description: (
      <>
        Integre nuestras APIs globales de validación de IVA y valide IDs fiscales en todo el mundo con una sola API. <a href="https://demo.lookuptax.com/api/">Ir a documentación API</a>
      </>
    ),
  },
];

// English feature list
const FeatureListEn = [
  {
    title: 'Country Guides',
    Svg: require('@site/static/img/guides.svg').default,
    description: (
      <>
        Learn about the taxation guidelines and upcoming regulations in the countries you operate in. <a href="/docs/category/country-tax-guides">Explore more</a>
      </>
    ),
  },
  {
    title: 'Explainers',
    Svg: require('@site/static/img/explainer.svg').default,
    description: (
      <>
       Confused with different terminologies. Don't worry we have simplified various concepts in Taxation for you. <a href="/docs/category/explainers">Explore now</a>
      </>
    ),
  },
  {
    title: 'API Documentation',
    Svg: require('@site/static/img/docs.svg').default,
    description: (
      <>
        Integrate our Global VAT validation APIs and validate TAX IDs across the world with just one API. <a href="https://demo.lookuptax.com/api/">Go to API docs</a>
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

// Portuguese feature list
const FeatureListPt = [
  {
    title: 'Guias de Países',
    Svg: require('@site/static/img/guides.svg').default,
    description: (
      <>
        Saiba sobre as diretrizes fiscais e os próximos regulamentos nos países onde você opera. <a href="/docs/pt/category/tax-identification-number">Explorar mais</a>
      </>
    ),
  },
  {
    title: 'Explicadores',
    Svg: require('@site/static/img/explainer.svg').default,
    description: (
      <>
        Confuso com diferentes terminologias? Não se preocupe, simplificamos vários conceitos de tributação para você. <a href="/docs/pt/category/explainers">Explorar agora</a>
      </>
    ),
  },
  {
    title: 'Documentação da API',
    Svg: require('@site/static/img/docs.svg').default,
    description: (
      <>
        Integre nossas APIs globais de validação de IVA e valide IDs fiscais em todo o mundo com apenas uma API. <a href="https://demo.lookuptax.com/api/">Ir para a documentação da API</a>
      </>
    ),
  },
];

// German feature list
const FeatureListDe = [
  {
    title: 'Länderführer',
    Svg: require('@site/static/img/guides.svg').default,
    description: (
      <>
        Erfahren Sie mehr über die steuerlichen Richtlinien und kommenden Vorschriften in den Ländern, in denen Sie tätig sind. <a href="/docs/de/category/tax-identification-number">Mehr erfahren</a>
      </>
    ),
  },
  {
    title: 'Erklärungen',
    Svg: require('@site/static/img/explainer.svg').default,
    description: (
      <>
        Verwirrt von verschiedenen Fachbegriffen? Keine Sorge, wir haben verschiedene Steuerkonzepte für Sie vereinfacht. <a href="/docs/de/category/explainers">Jetzt erkunden</a>
      </>
    ),
  },
  {
    title: 'API-Dokumentation',
    Svg: require('@site/static/img/docs.svg').default,
    description: (
      <>
        Integrieren Sie unsere globalen APIs zur Umsatzsteuer-Validierung und validieren Sie Steuer-IDs weltweit mit nur einer API. <a href="https://demo.lookuptax.com/api/">Zur API-Dokumentation</a>
      </>
    ),
  },
];

export default function HomepageFeatures() {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  
  // Select feature list based on locale
  let FeatureList;
  switch (currentLocale) {
    case 'es':
      FeatureList = FeatureListEs;
      break;
    case 'pt':
      FeatureList = FeatureListPt;
      break;
    case 'de':
      FeatureList = FeatureListDe;
      break;
    default:
      FeatureList = FeatureListEn;
  }
  
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
