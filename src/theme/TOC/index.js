// src/theme/TOC/index.js
import React from 'react';
import TOC from '@theme-original/TOC';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Configuration object for different sections and their promotional images
// Note: paths should NOT include /docs/ prefix - useBaseUrl will add the correct base
const PROMO_CONFIG = {
  '/tax-identification-number/': {
    image: '/img/lookuptax_signup.gif',
    alt: 'LookupTax Signup',
    link: 'https://platform.lookuptax.com/auth?page=register'
  },
  '/how-to-verify/': {
    image: '/img/lookuptax_signup.gif',
    alt: 'LookupTax Signup',
    link: 'https://platform.lookuptax.com/auth?page=register'
  },
  '/country/': {
    image: '/img/lookuptax_signup_1.png',
    alt: 'LookupTax Signup',
    link: 'https://platform.lookuptax.com/auth?page=register'
  },
  '/explainers/': {
    image: '/img/lookuptax_signup_2.gif',
    alt: 'LookupTax Signup',
    link: 'https://platform.lookuptax.com/auth?page=register'
  },
  '/einvoicing/': {
    image: '/img/lookuptax_signup_1.png',
    alt: 'LookupTax Signup',
    link: 'https://platform.lookuptax.com/auth?page=register'
  },
};

// Custom component for the promotional image
function PromoImage({ config }) {
  // useBaseUrl handles the locale prefix automatically
  const imageSrc = useBaseUrl(config?.image);
  
  if (!config) return null;

  return (
    <div 
      style={{
        marginTop: '1.5rem',
        paddingTop: '1rem',
        borderTop: '1px solid var(--ifm-color-emphasis-200)'
      }}
    >
      <a 
        href={config.link} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <img 
          src={imageSrc} 
          alt={config.alt}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '4px',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        />
      </a>
    </div>
  );
}


export default function TOCWrapper(props) {
  const location = useLocation();
  
  // Find matching promo configuration based on current pathname
  const getPromoConfig = () => {
    for (const [path, config] of Object.entries(PROMO_CONFIG)) {
      if (location.pathname.includes(path)) {
        return config;
      }
    }
    return null;
  };

  const promoConfig = getPromoConfig();
  
  // If no promo config, return original TOC unchanged
  if (!promoConfig) {
    return <TOC {...props} />;
  }
  
  // Wrapper with height constraint to enable sticky behavior
  return (
    <div style={{
      position: 'sticky',
      top: 'calc(var(--ifm-navbar-height) + 1rem)',
      maxHeight: 'calc(100vh - var(--ifm-navbar-height) - 2rem)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        flex: '1 1 auto',
        overflow: 'auto',
        minHeight: 0
      }}>
        <TOC {...props} />
      </div>
      <div style={{
        flex: '0 0 auto',
        position: 'sticky',
        bottom: 0,
        backgroundColor: 'var(--ifm-background-color)',
        zIndex: 1
      }}>
        <PromoImage config={promoConfig} />
      </div>
    </div>
  );
}