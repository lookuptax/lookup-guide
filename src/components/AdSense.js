import React, { useEffect } from 'react';

export default function AdSense() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  return (
    <div style={{ 
      minHeight: '250px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'transparent'
    }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minWidth: '300px', minHeight: '250px' }}
        data-ad-client="ca-pub-9381464195828471"
        data-ad-slot="auto"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
