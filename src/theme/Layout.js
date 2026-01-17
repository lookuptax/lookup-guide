import React from 'react';
import Layout from '@theme-original/Layout';
import HreflangTags from '@site/src/components/HreflangTags';

export default function LayoutWrapper(props) {
  return (
    <>
      <HreflangTags />
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
