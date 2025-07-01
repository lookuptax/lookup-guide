import React from 'react';
import DocTagsListPage from '@theme-original/DocTagsListPage';
import {PageMetadata} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DocTagsListPageWrapper(props) {
  const tagNames = Object.keys(props.tags);
  const {siteConfig} = useDocusaurusContext();
  const {title: siteTitle, url: siteUrl} = siteConfig;
  const baseUrl = useBaseUrl('/');

  const title = 'Document Tags';
  const description = 'Explore content by tags. Browse through all the tags in our documentation to find relevant articles and topics.';
  const keywords = tagNames.join(', ');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Docs',
        item: `${siteUrl}${baseUrl}docs/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Tags',
        item: `${siteUrl}${baseUrl}docs/tags/`,
      },
    ],
  };

  return (
    <>
      <PageMetadata title={title} description={description} keywords={keywords} jsonLd={jsonLd} />
      <DocTagsListPage {...props} />
    </>
  );
}