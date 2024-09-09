import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-KLGV623"
          height="0" 
          width="0" 
          style={{display: 'none', visibility: 'hidden'}}
        />
      </noscript>
    </>
  );
}