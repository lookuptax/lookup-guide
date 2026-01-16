/**
 * Custom Docusaurus plugin to exclude untranslated docs from non-default locales.
 * 
 * This plugin prevents duplicate content SEO issues by ensuring only translated
 * pages are published in non-default locales.
 */

const fs = require('fs');
const path = require('path');
const globby = require('globby');

/**
 * Get a list of all doc paths that have translations for a given locale
 */
function getTranslatedDocPaths(siteDir, locale) {
  const translatedPaths = new Set();
  const i18nDocsDir = path.join(
    siteDir, 
    'i18n', 
    locale, 
    'docusaurus-plugin-content-docs', 
    'current'
  );
  
  if (!fs.existsSync(i18nDocsDir)) {
    return translatedPaths;
  }

  function walkDir(dir, basePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;
      
      if (entry.isDirectory()) {
        // Skip category files, just recurse into directories
        walkDir(fullPath, relativePath);
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        // Store the path without extension
        const docPath = relativePath.replace(/\.(md|mdx)$/, '');
        translatedPaths.add(docPath);
      }
    }
  }
  
  walkDir(i18nDocsDir);
  return translatedPaths;
}

/**
 * Generate exclude patterns for untranslated docs
 */
function getExcludePatternsForLocale(siteDir, locale, docsDir) {
  const translatedPaths = getTranslatedDocPaths(siteDir, locale);
  const excludePatterns = [];
  
  // Get all source docs
  const sourceDocsDir = path.join(siteDir, docsDir);
  
  function walkSourceDocs(dir, basePath = '') {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;
      
      if (entry.isDirectory()) {
        walkSourceDocs(fullPath, relativePath);
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        const docPath = relativePath.replace(/\.(md|mdx)$/, '');
        
        // If this doc is NOT translated, add it to exclude patterns
        if (!translatedPaths.has(docPath)) {
          // Use glob pattern to exclude this specific file
          excludePatterns.push(`**/${entry.name}`);
        }
      }
    }
  }
  
  walkSourceDocs(sourceDocsDir);
  return excludePatterns;
}

module.exports = {
  getTranslatedDocPaths,
  getExcludePatternsForLocale,
};
