import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';
import SearchMetadata from '@theme/SearchMetadata';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function DocItem({doc}) {
  return (
    <article className="margin-vert--lg">
      <Link to={doc.permalink}>
        <Heading as="h2">{doc.title}</Heading>
      </Link>
      {doc.description && <p>{doc.description}</p>}
    </article>
  );
}

function DocTagDocListPageContent({tag, title}) {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.page.docsTagDocListPage)}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--8 col--offset-2">
            {tag.unlisted && <Unlisted />}
            <header className="margin-bottom--xl">
              <Heading as="h1">{title}</Heading>
              {tag.description && <p>{tag.description}</p>}
              <Link href={tag.allTagsPath}>
                <Translate
                  id="theme.tags.tagsPageLink"
                  description="The label of the link targeting the tag list page">
                  View all tags
                </Translate>
              </Link>
            </header>
            <section className="margin-vert--lg">
              {tag.items.map((doc) => (
                <DocItem key={doc.id} doc={doc} />
              ))}
            </section>
          </main>
        </div>
      </div>
    </HtmlClassNameProvider>
  );
}

export default function DocTagDocListPage(props) {
  const {tag} = props;
  const {siteConfig} = useDocusaurusContext();
  const {url: siteUrl} = siteConfig;
  const baseUrl = useBaseUrl('/');

  const title = `Documentation on ${tag.label}`;
  const description = `Find all documentation related to ${tag.label}. Explore our guides and articles on ${tag.label}.`;
  const keywords = tag.label;

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
      {
        '@type': 'ListItem',
        position: 4,
        name: tag.label,
        item: `${siteUrl}${tag.permalink}`,
      },
    ],
  };

  return (
    <>
      <PageMetadata title={title} description={description} keywords={keywords} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      <SearchMetadata tag="doc_tag_doc_list" />
      <DocTagDocListPageContent {...props} title={title} />
    </>
  );
}
