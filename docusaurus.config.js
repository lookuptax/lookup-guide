// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lookup Tax",
  tagline: "Global API for VAT validation",
  url: "https://lookuptax.com",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "abhilashjp", // Usually your GitHub org/user name.
  projectName: "lookupapp", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          exclude: ['/tags/*'],
        },        blog: {
          showReadingTime: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */    ({
      headTags: [
        {
          tagName: 'meta',
          attributes: {
            name: 'google-adsense-account',
            content: 'ca-pub-9381464195828471',
          },
        },
        {
          tagName: 'script',
          attributes: {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9381464195828471',
            async: true,
            crossorigin: 'anonymous',
          },
        },
        {
          tagName: 'script',
          attributes: {
            async: true,
          },
          innerHTML: `
            (adsbygoogle = window.adsbygoogle || []).push({});
          `,
        },
      ],

      metadata: [
        {
          name: "keywords",
          content: "VAT APIs, Tax guide, Tax invoice, Sales tax",
        },
      ],
      navbar: {
        title: "Lookup Tax",
        logo: {
          alt: "Global API for VAT Validation",
          src: "img/lookuptax-icon.svg",
          href: 'https://lookuptax.com',
          target: '_self',
        },
        items: [
          { to: "category/tax-identification-number", label: "Country guides", position: "right" },
          { to: "/category/explainers", label: "Explainers", position: "right" },
          { to: "/category/einvoicing-guides", label: "Einvoicing", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
          {
            to: "https://platform.lookuptax.com/auth?page=register",
            label: "Signup for Free Trial",
            position: "right",
            className: "button button--secondary button--lg",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/category/tax-identification-number",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "#",
              },
              {
                label: "Discord",
                href: "#",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/lookuptax",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lookup, Inc. Built with Docusaurus.`,
      },
      staticWebsites: {
        excludePatterns: ['/tags/**'],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'],
        redirects: [
          {
            from: '/docs/country/intro',
            to: '/',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-KLGV623',
      },
    ],
  ],
  clientModules: [
    require.resolve('./src/clientModules/adsense.js'),
  ],
};

module.exports = config;

