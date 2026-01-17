import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

/**
 * Spanish 404 page - shown for missing pages in the /es/ locale
 */
export default function NotFound() {
  return (
    <Layout title="Página No Encontrada">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div style={{ textAlign: 'center' }}>
              <h1 className="hero__title">Página No Encontrada</h1>
              <p>No pudimos encontrar lo que buscaba.</p>
              <p>
                Por favor, contacte al propietario del sitio que lo enlazó a la URL original y hágale saber que el enlace está roto.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a href="/docs/es/" className="button button--primary button--lg">
                  ← Ir al Inicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
