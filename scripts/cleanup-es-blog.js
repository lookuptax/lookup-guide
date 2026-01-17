/**
 * Post-build script to exclude blog from Spanish locale.
 * 
 * Since there are no Spanish blog translations, we remove English
 * blog posts from the Spanish locale build to avoid negative SEO.
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const esBlogDir = path.join(buildDir, 'es', 'blog');

console.log('[cleanup-es-blog] Starting cleanup...');

if (fs.existsSync(esBlogDir)) {
  console.log('[cleanup-es-blog] Processing Spanish blog directory:', esBlogDir);
  
  // Get all items in the blog directory
  const items = fs.readdirSync(esBlogDir);
  
  for (const item of items) {
    const itemPath = path.join(esBlogDir, item);
    
    // Check if it's a directory and not archive/page/tags
    if (fs.statSync(itemPath).isDirectory()) {
      if (!['archive', 'page', 'tags'].includes(item)) {
        // This is a blog post directory - remove it
        fs.rmSync(itemPath, { recursive: true, force: true });
        console.log(`  Removed blog post: ${item}`);
      }
    }
  }
  
  // Create a redirect index.html for /es/blog/
  const indexPath = path.join(esBlogDir, 'index.html');
  const redirectHtml = `<!DOCTYPE html>
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
  
  fs.writeFileSync(indexPath, redirectHtml);
  console.log('  Created redirect for /es/blog/ -> /docs/es/');
  
  console.log('[cleanup-es-blog] Cleanup complete!');
} else {
  console.log('[cleanup-es-blog] No Spanish blog directory found at:', esBlogDir);
}
