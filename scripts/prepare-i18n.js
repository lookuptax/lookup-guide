/**
 * Script to prepare Spanish i18n locale by ensuring only translated docs are published.
 * 
 * This script creates draft placeholder files for untranslated docs in the Spanish locale,
 * preventing Docusaurus from falling back to English content.
 * 
 * Run before building: node scripts/prepare-i18n.js
 */

const fs = require('fs');
const path = require('path');

const LOCALES = ['es', 'zh-Hans']; // Add more locales as needed
const DOCS_DIR = 'docs';
const I18N_DIR = 'i18n';

function getAllSourceDocs(docsDir, basePath = '') {
  const docs = [];
  const fullPath = path.join(docsDir, basePath);
  
  if (!fs.existsSync(fullPath)) return docs;
  
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;
    
    if (entry.isDirectory()) {
      docs.push(...getAllSourceDocs(docsDir, relativePath));
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      // Skip category files
      if (!entry.name.startsWith('_')) {
        docs.push(relativePath);
      }
    }
  }
  
  return docs;
}

function getTranslatedDocs(locale) {
  const translatedDocs = new Set();
  const i18nDocsDir = path.join(I18N_DIR, locale, 'docusaurus-plugin-content-docs', 'current');
  
  if (!fs.existsSync(i18nDocsDir)) return translatedDocs;
  
  function walkDir(dir, basePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;
      
      if (entry.isDirectory()) {
        walkDir(path.join(dir, entry.name), relativePath);
      } else if ((entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) && !entry.name.startsWith('_')) {
        translatedDocs.add(relativePath);
      }
    }
  }
  
  walkDir(i18nDocsDir);
  return translatedDocs;
}

function createDraftPlaceholders(locale) {
  const sourceDocs = getAllSourceDocs(DOCS_DIR);
  const translatedDocs = getTranslatedDocs(locale);
  const i18nDocsDir = path.join(I18N_DIR, locale, 'docusaurus-plugin-content-docs', 'current');
  
  let createdCount = 0;
  
  for (const sourceDoc of sourceDocs) {
    // Check if translation exists (with either .md or .mdx extension)
    const basePathNoExt = sourceDoc.replace(/\.(md|mdx)$/, '');
    const hasMd = translatedDocs.has(`${basePathNoExt}.md`);
    const hasMdx = translatedDocs.has(`${basePathNoExt}.mdx`);
    const hasTranslation = translatedDocs.has(sourceDoc) || hasMd || hasMdx;
    
    if (!hasTranslation) {
      // Create a draft placeholder file
      const placeholderPath = path.join(i18nDocsDir, sourceDoc);
      const placeholderDir = path.dirname(placeholderPath);
      
      // Ensure directory exists
      if (!fs.existsSync(placeholderDir)) {
        fs.mkdirSync(placeholderDir, { recursive: true });
      }
      
      // Read original file to get the id from frontmatter
      const originalPath = path.join(DOCS_DIR, sourceDoc);
      const originalContent = fs.readFileSync(originalPath, 'utf-8');
      
      // Extract frontmatter
      const frontmatterMatch = originalContent.match(/^---\n([\s\S]*?)\n---/);
      let docId = basePathNoExt.split('/').pop();
      
      if (frontmatterMatch) {
        const idMatch = frontmatterMatch[1].match(/id:\s*(.+)/);
        if (idMatch) {
          docId = idMatch[1].trim();
        }
      }
      
      // Create draft placeholder - this will be excluded from the build
      const placeholderContent = `---
id: ${docId}
draft: true
---
`;
      
      fs.writeFileSync(placeholderPath, placeholderContent);
      createdCount++;
    }
  }
  
  console.log(`[${locale}] Created ${createdCount} draft placeholders for untranslated docs`);
}

// Run for all locales
console.log('Preparing i18n locales...\n');

for (const locale of LOCALES) {
  createDraftPlaceholders(locale);
}

console.log('\nDone! Untranslated docs are now marked as drafts.');
