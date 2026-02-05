/**
 * Plugin to exclude blog from ALL non-English locales.
 * 
 * Since there are no translated blog posts, we don't want English
 * blog posts appearing in any non-English locale (bad for SEO - causes 5xx errors).
 * 
 * This plugin runs post-build to:
 * 1. Remove blog post directories from locale build outputs
 * 2. Create redirects for locale blog index pages
 * 
 * NOTE: In Docusaurus multi-locale builds, postBuild is called once per locale.
 * The outDir is locale-specific (e.g., build/de/, build/pt/).
 * We need to handle blog cleanup relative to the locale's output directory.
 */
module.exports = function excludeBlogForLocales(context, options) {
  return {
    name: 'exclude-blog-for-locales',
    
    // Use postBuild to remove blog posts from this locale's blog after build
    async postBuild({ siteConfig, outDir }) {
      const fs = require('fs');
      const path = require('path');
      
      // Extract the current locale from the outDir path
      // outDir is like: .../build/ or .../build/es/ or .../build/zh-Hans/
      const outDirParts = outDir.split(path.sep);
      const lastPart = outDirParts[outDirParts.length - 1] || outDirParts[outDirParts.length - 2];
      
      // Define all non-English locales
      const locales = ['es', 'de', 'pt', 'zh-Hans'];
      
      // If this is a locale-specific build, only clean this locale's blog
      if (locales.includes(lastPart)) {
        const currentLocale = lastPart;
        const blogDir = path.join(outDir, 'blog');
        
        if (fs.existsSync(blogDir)) {
          console.log(`[exclude-blog-for-locales] Processing ${currentLocale.toUpperCase()} blog directory...`);
          cleanBlogDirectory(fs, path, blogDir, currentLocale);
        }
      } else {
        // This is the main build (English) or combined build
        // Check if locales exist as subdirectories
        for (const locale of locales) {
          const blogDir = path.join(outDir, locale, 'blog');
          
          if (fs.existsSync(blogDir)) {
            console.log(`[exclude-blog-for-locales] Processing ${locale.toUpperCase()} blog directory...`);
            cleanBlogDirectory(fs, path, blogDir, locale);
          }
        }
      }
      
      console.log('[exclude-blog-for-locales] Completed blog cleanup.');
    },
  };
};

function cleanBlogDirectory(fs, path, blogDir, locale) {
  // Get all items in the blog directory
  const items = fs.readdirSync(blogDir);
  let removedCount = 0;
  
  for (const item of items) {
    const itemPath = path.join(blogDir, item);
    
    // Check if it's a directory (blog posts are directories)
    if (fs.statSync(itemPath).isDirectory()) {
      // Check if it's a blog post directory (not 'archive', 'page', 'tags', 'authors')
      if (!['archive', 'page', 'tags', 'authors'].includes(item)) {
        // This is a blog post directory - remove it
        fs.rmSync(itemPath, { recursive: true, force: true });
        removedCount++;
      }
    }
  }
  
  if (removedCount > 0) {
    console.log(`  Removed ${removedCount} blog post(s) from /${locale}/blog/`);
  }
  
  // Create a noindex redirect page for the blog index
  const indexPath = path.join(blogDir, 'index.html');
  const langLabels = {
    es: { lang: 'es', message: 'No hay publicaciones disponibles. Redirigiendo...', link: 'Ir a la página principal' },
    de: { lang: 'de', message: 'Keine Beiträge verfügbar. Weiterleitung...', link: 'Zur Startseite' },
    pt: { lang: 'pt', message: 'Nenhuma publicação disponível. Redirecionando...', link: 'Ir para a página inicial' },
    'zh-Hans': { lang: 'zh-Hans', message: '没有可用的文章。正在重定向...', link: '返回主页' },
  };
  
  const labels = langLabels[locale] || langLabels.es;
  
  const noPostsHtml = `<!DOCTYPE html>
<html lang="${labels.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Blog - LookupTax</title>
  <meta http-equiv="refresh" content="0;url=/docs/${locale}/">
  <link rel="canonical" href="https://lookuptax.com/docs/${locale}/">
</head>
<body>
  <p>${labels.message}</p>
  <a href="/docs/${locale}/">${labels.link}</a>
</body>
</html>`;
  
  fs.writeFileSync(indexPath, noPostsHtml);
  console.log(`  Created redirect for /${locale}/blog/ -> /docs/${locale}/`);
  
  // Also handle archive page
  const archivePath = path.join(blogDir, 'archive');
  if (fs.existsSync(archivePath)) {
    fs.rmSync(archivePath, { recursive: true, force: true });
    console.log(`  Removed archive directory from /${locale}/blog/`);
  }
  
  // Handle authors page
  const authorsPath = path.join(blogDir, 'authors');
  if (fs.existsSync(authorsPath)) {
    fs.rmSync(authorsPath, { recursive: true, force: true });
    console.log(`  Removed authors directory from /${locale}/blog/`);
  }
  
  // Handle tags directory - remove individual tag pages but keep structure
  const tagsPath = path.join(blogDir, 'tags');
  if (fs.existsSync(tagsPath)) {
    fs.rmSync(tagsPath, { recursive: true, force: true });
    console.log(`  Removed tags directory from /${locale}/blog/`);
  }
}
