/**
 * Plugin to exclude blog from Spanish locale.
 * 
 * Since there are no Spanish blog translations, we don't want English
 * blog posts appearing in the Spanish locale (bad for SEO).
 */
module.exports = function excludeBlogForSpanish(context, options) {
  return {
    name: 'exclude-blog-for-spanish',
    
    // Use postBuild to remove blog posts from Spanish locale after build
    async postBuild({ siteConfig, outDir }) {
      const fs = require('fs');
      const path = require('path');
      
      // Target the Spanish blog directory directly
      // In combined build, Spanish content is in /es/ subfolder
      const esBlogDir = path.join(outDir, 'es', 'blog');
      
      if (fs.existsSync(esBlogDir)) {
        console.log('[exclude-blog-for-spanish] Processing Spanish blog directory...');
        
        // Get all items in the blog directory
        const items = fs.readdirSync(esBlogDir);
        
        for (const item of items) {
          const itemPath = path.join(esBlogDir, item);
          
          // Skip files (like index.html, page folder)
          if (fs.statSync(itemPath).isDirectory()) {
            // Check if it's a blog post directory (not 'archive', 'page', 'tags')
            if (!['archive', 'page', 'tags'].includes(item)) {
              // This is a blog post directory - remove it
              fs.rmSync(itemPath, { recursive: true, force: true });
              console.log(`  Removed blog post: ${item}`);
            }
          }
        }
        
        // Create a simple redirect for /es/blog/
        const indexPath = path.join(esBlogDir, 'index.html');
        const noPostsHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Blog - LookupTax</title>
  <meta http-equiv="refresh" content="0;url=/docs/es/">
  <link rel="canonical" href="https://lookuptax.com/docs/es/">
</head>
<body>
  <p>No hay publicaciones disponibles. Redirigiendo...</p>
  <a href="/docs/es/">Ir a la página principal</a>
</body>
</html>`;
        
        fs.writeFileSync(indexPath, noPostsHtml);
        console.log('  Created redirect for /es/blog/ -> /docs/es/');
      } else {
        // Silent - blog directory not ready yet during multi-locale build
      }
    },
  };
};
