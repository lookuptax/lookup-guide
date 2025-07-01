/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import TagsListByLetter from '@theme/TagsListByLetter';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DocTagsListPage({tags}) {
  const tagNames = Object.keys(tags);
  const {siteConfig} = useDocusaurusContext();
  const {url: siteUrl} = siteConfig;
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
        item: `${siteUrl}${baseUrl}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Tags',
        item: `${siteUrl}${baseUrl}tags/`,
      },
    ],
  };

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.docsPages,
        ThemeClassNames.page.docsTagsListPage,
      )}>
      <PageMetadata title={title} description={description} keywords={keywords} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      <SearchMetadata tag="doc_tags_list" />
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--8 col--offset-2">
            <Heading as="h1">{title}</Heading>
            <TagsListByLetter tags={tags} />
          </main>
        </div>
      </div>
    </HtmlClassNameProvider>
  );
}
