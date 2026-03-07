import React from 'react';

export default function JsonLd({ children }) {
  // children is the JSON string passed as a template literal
  const jsonString = typeof children === 'string' ? children : String(children);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
