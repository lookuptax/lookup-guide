/**
 * Post-build script to exclude blog from ALL non-English locales.
 * 
 * Since there are no translated blog posts, we remove English
 * blog posts from all non-English locale builds to avoid negative SEO.
 * 
 * This runs AFTER docusaurus build completes, avoiding conflicts with
 * the client-redirects plugin.
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');

// All non-English locales
const locales = ['es', 'de', 'pt', 'zh-Hans'];

// Language-specific labels for redirect pages
const langLabels = {
  es: { lang: 'es', message: 'No hay publicaciones disponibles. Redirigiendo...', link: 'Ir a la página principal' },
  de: { lang: 'de', message: 'Keine Beiträge verfügbar. Weiterleitung...', link: 'Zur Startseite' },
  pt: { lang: 'pt', message: 'Nenhuma publicação disponível. Redirecionando...', link: 'Ir para a página inicial' },
  'zh-Hans': { lang: 'zh-Hans', message: '没有可用的文章。正在重定向...', link: '返回主页' },
};

console.log('[cleanup-locale-blogs] Starting cleanup for all non-English locales...');

let totalRemoved = 0;

for (const locale of locales) {
  const blogDir = path.join(buildDir, locale, 'blog');
  
  if (fs.existsSync(blogDir)) {
    console.log(`\n[${locale.toUpperCase()}] Processing blog directory: ${blogDir}`);
    
    // Get all items in the blog directory
    const items = fs.readdirSync(blogDir);
    let removedCount = 0;
    
    for (const item of items) {
      const itemPath = path.join(blogDir, item);
      
      // Check if it's a directory and not archive/page/tags/authors
      if (fs.statSync(itemPath).isDirectory()) {
        if (!['archive', 'page', 'tags', 'authors'].includes(item)) {
          // This is a blog post directory - remove it
          fs.rmSync(itemPath, { recursive: true, force: true });
          console.log(`  Removed: ${item}`);
          removedCount++;
        }
      }
    }
    
    // Also remove archive, authors, and tags directories for cleaner build
    const dirsToRemove = ['archive', 'authors', 'tags'];
    for (const dir of dirsToRemove) {
      const dirPath = path.join(blogDir, dir);
      if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
        console.log(`  Removed directory: ${dir}/`);
      }
    }
    
    // Create a redirect index.html for /<locale>/blog/
    const labels = langLabels[locale] || langLabels.es;
    const indexPath = path.join(blogDir, 'index.html');
    const redirectHtml = `<!DOCTYPE html>
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
    
    fs.writeFileSync(indexPath, redirectHtml);
    console.log(`  Created redirect: /${locale}/blog/ -> /docs/${locale}/`);
    
    totalRemoved += removedCount;
    console.log(`[${locale.toUpperCase()}] Removed ${removedCount} blog post(s)`);
  } else {
    console.log(`\n[${locale.toUpperCase()}] No blog directory found at: ${blogDir}`);
  }
}

console.log(`\n[cleanup-locale-blogs] Complete! Total blog posts removed: ${totalRemoved}`);
