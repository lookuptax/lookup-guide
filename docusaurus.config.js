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
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/abhilashjp/lookupapp/blob/main/",
        },
        blog: {
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl: "https://github.com/abhilashjp/lookupapp/blob/main/",
        },
      /**  googleAnalytics: {
          trackingID: "G-D5YNWHF9Q3",
          anonymizeIP: false,
        },*/
      /*  gtag: {
          trackingID: "GTM-KLGV623",
          anonymizeIP: false,
        },
*/
        sitemap: {
          changefreq: 'weekly',
        priority: 0.5,
        
        

        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
         
      }),
    ],
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=GTM-KLGV623',
      },
    },
    {
      tagName: 'script',
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-KLGV623');
      `,
    },
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
   
    ({
      gtag: {
        trackingID: 'GTM-KLGV623',
        anonymizeIP: false,
      },

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
         /** {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Country guide",
          },*/
          { to: "category/tax-identification-number", label: "Country guides", position: "right" },
          { to: "/category/explainers", label: "Explainers", position: "right" },
          { to: "/category/einvoicing-guides", label: "Einvoicing", position: "right" },

          { to: "/blog", label: "Blog", position: "right" },
           {
            to: "https://lookuptax.com",
            label: "Signup for Free Trial",
            position: "right",
            className: "button button--secondary button--lg",
          },
         /**  {
            href: "https://github.com/abhilashjp/lookupapp",
            label: "GitHub",
            position: "right",
          },*/
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
                /**href: "https://stackoverflow.com/questions/tagged/lookuptax",
                **/
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
             /** {
                label: "GitHub",
                href: "https://github.com/abhilashjp/lookupapp/",
              },*/
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lookup, Inc. Built with Docusaurus.`,
      },
      
      // Add the plugin export code here
    plugins: [
      [
        '@docusaurus/plugin-client-redirects',
        {
          fromExtensions: ['html', 'htm'],
          toExtensions: ['exe', 'zip'],
          redirects: [
            {
              to: '/docs/',
              from: '/docs/country/intro/',
            },
           
          ],
          createRedirects(existingPath) {
            if (existingPath.includes('/community')) {
              return [
                existingPath.replace('/community', '/docs/team'),
                existingPath.replace('/community', '/docs/support'),
              ];
            }
            return undefined;
          },
        },
      ],
    ],
    // End of plugin export code
      staticWebsites: {
    excludePatterns: ['/tags/**'],
  },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      
 //   
// algolia: {
      // The application ID provided by Algolia
     // appId: 'K9ZHSRY4ZV',

      // Public API key: it is safe to commit it
     // apiKey: '779e74fdc3513898e45fe9d1a8b3ac37',

/// indexName: 'Lookuptax',

      // Optional: see doc section below
     // contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
     // replaceSearchResultPathname: {
      //  from: '/docs/', // or as RegExp: /\/docs\//
     //   to: '/',
      //},

      // Optional: Algolia search parameters
     // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
     // searchPagePath: 'search',

      //... other Algolia params
   // },
//

    }),
};

module.exports = config;

