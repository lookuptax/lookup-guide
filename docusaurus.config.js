// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const fs = require('fs');
const path = require('path');

function getDraftRoutes() {
  const ignorePatterns = [];
  try {
    const i18nDir = path.join(__dirname, 'i18n');
    if (fs.existsSync(i18nDir)) {
      const locales = fs.readdirSync(i18nDir);
      locales.forEach(locale => {
        const docsDir = path.join(i18nDir, locale, 'docusaurus-plugin-content-docs', 'current');
        if (fs.existsSync(docsDir)) {
          const walk = (dir, subdir = '') => {
            const files = fs.readdirSync(dir);
            files.forEach(file => {
              const fullPath = path.join(dir, file);
              const relativePath = path.join(subdir, file);
              if (fs.statSync(fullPath).isDirectory()) {
                walk(fullPath, relativePath);
              } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (/^draft:\s*true/m.test(content)) {
                  const ext = path.extname(file);
                  let routePath = relativePath.slice(0, -ext.length).replace(/\\/g, '/');
                  if (routePath.endsWith('/index')) routePath = routePath.slice(0, -6);
                  if (routePath === 'index') routePath = ''; 
                  
                  // BaseURL is /docs/
                  // URL structure: /docs/<locale>/<routePath>
                  const pattern = `/docs/${locale}/${routePath}`;
                  ignorePatterns.push(pattern);
                  ignorePatterns.push(pattern + '/');
                }
              }
            });
          };
          walk(docsDir);
        }
      });
    }
  } catch (e) {
    console.warn('Error generating sitemap ignore patterns:', e);
  }
  return ignorePatterns;
}


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LookupTax",
  tagline: "Global API for VAT validation",
  url: "https://lookuptax.com",
  baseUrl: "/docs/",
  onBrokenLinks: "warn",
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
    locales: ['en', 'es', 'zh-Hans', 'de', 'pt'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
      },
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
        htmlLang: 'de',
      },
      pt: {
        label: 'Português',
        direction: 'ltr',
        htmlLang: 'pt',
      },
    },
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
          ignorePatterns: [
            ...getDraftRoutes(),
            // Exclude blog from all non-English locales (no translations exist)
            '/docs/es/blog/**',
            '/docs/de/blog/**',
            '/docs/pt/blog/**',
            '/docs/zh-Hans/blog/**',
          ],
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
        title: "LookupTax",
        logo: {
          alt: "Global API for VAT Validation",
          src: "img/lookuptax-icon.svg",
          href: 'https://lookuptax.com',
          target: '_self',
        },
        items: [
         { to: "category/tax-identification-number", label: "Country guides", position: "right" },
          { to: "https://demo.lookuptax.com/api/", label: "API Docs", position: "right" },
          { to: "category/explainers", label: "Explainers", position: "right" },
          { to: "category/verify-tax-ids", label: "How to Verify Tax IDs", position: "right" },
          {
            type: "custom-SmartLocaleDropdown",
            position: "right",
          },
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
                label: "Sign In",
                to: "https://platform.lookuptax.com/auth?page=login",
              },
              {
                label: "Tutorial",
                to: "/category/tax-identification-number",
              },
               {
                label: "API docs",
                to: "https://demo.lookuptax.com/api/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/lookuptax/",
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
                label: "About us",
                to: "https://lookuptax.com/about",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://lookuptax.com" target="_blank" rel="noopener noreferrer">Lookup</a>, Inc. Built with Docusaurus.`,
      },
      staticWebsites: {
        excludePatterns: ['/tags/**'],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    // Blog cleanup is now handled by scripts/cleanup-locale-blogs.js after the build
    [
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

