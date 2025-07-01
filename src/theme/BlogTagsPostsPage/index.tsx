
import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItems from '@theme/BlogPostItems';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogTagsPostsPage';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Very simple pluralization: probably good enough for now
function useBlogPostsPlural() {
  const {selectMessage} = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.blog.post.plurals',
          description:
            'Pluralized label for "blog post". Use as many plural forms as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One blog post|{count} blog posts',
        },
        {count},
      ),
    );
}

function useBlogTagsPostsPageTitle(tag: Props['tag']): string {
  const blogPostsPlural = useBlogPostsPlural();
  return translate(
    {
      id: 'theme.blog.tagTitle',
      description: 'The title of the page for a blog tag',
      message: '{nPosts} tagged with "{tagName}"'
    },
    {nPosts: blogPostsPlural(tag.count), tagName: tag.label},
  );
}

export default function BlogTagsPostsPage({tag, items, sidebar, listMetadata}: Props): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const {title: siteTitle, url: siteUrl} = siteConfig;
  const baseUrl = useBaseUrl('/');

  const title = `Blog Posts on ${tag.label}`;
  const description = `Read blog posts about ${tag.label}. Discover articles, tutorials, and insights on ${tag.label}.`;
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
        name: 'Blog',
        item: `${siteUrl}${baseUrl}blog/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Tags',
        item: `${siteUrl}${baseUrl}blog/tags/`,
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
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <PageMetadata title={title} description={description} keywords={keywords} jsonLd={jsonLd} />
      <SearchMetadata tag="blog_tags_posts" />
      <BlogLayout sidebar={sidebar}>
        <header className="margin-bottom--xl">
          <Heading as="h1">{title}</Heading>
          <Link href={tag.allTagsPath}>
            <Translate
              id="theme.tags.tagsPageLink"
              description="The label of the link targeting the tag list page"> 
              View all tags
            </Translate>
          </Link>
        </header>
        <BlogPostItems items={items} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
