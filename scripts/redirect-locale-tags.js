/**
 * Post-build script: Generate 301 redirects for locale-only tags
 * 
 * Problem: Locale builds generate translated tag slugs (e.g., /tags/欧盟, /tags/alemania).
 * If these URLs are indexed by Google without the locale prefix, they 404.
 * 
 * Solution: Scan each locale's tags/ directory, find tags that don't exist in
 * English, and append 301 redirect rules to build/_redirects so Netlify
 * redirects /tags/<locale-slug> → /<locale>/tags/<locale-slug>
 * 
 * SEO: 301 redirects preserve link equity and tell Google where the content lives.
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const locales = ['es', 'de', 'pt', 'zh-Hans'];

console.log('[redirect-locale-tags] Scanning for locale-only tags...');

// Get all English tag slugs
const enTagsDir = path.join(buildDir, 'tags');
const enTags = new Set();
if (fs.existsSync(enTagsDir)) {
  for (const item of fs.readdirSync(enTagsDir)) {
    const itemPath = path.join(enTagsDir, item);
    if (fs.statSync(itemPath).isDirectory() && !item.match(/\.(htm|html)$/)) {
      enTags.add(item);
    }
  }
}
console.log(`  English tags: ${enTags.size}`);

// Collect locale-only tags with their target locale
const redirects = [];

for (const locale of locales) {
  const localeTagsDir = path.join(buildDir, locale, 'tags');
  if (!fs.existsSync(localeTagsDir)) {
    console.log(`  [${locale}] No tags directory found`);
    continue;
  }

  let count = 0;
  for (const item of fs.readdirSync(localeTagsDir)) {
    const itemPath = path.join(localeTagsDir, item);
    if (fs.statSync(itemPath).isDirectory() && !item.match(/\.(htm|html)$/) && item !== 'tags') {
      // Only redirect tags that DON'T exist in English
      if (!enTags.has(item)) {
        // Netlify _redirects format: /from /to statusCode
        // Remember: Netlify sees paths WITHOUT /docs/ prefix
        redirects.push(`/tags/${item}  https://lookuptax.com/docs/${locale}/tags/${item}  301!`);
        count++;
      }
    }
  }
  console.log(`  [${locale}] Found ${count} locale-only tags`);
}

if (redirects.length === 0) {
  console.log('[redirect-locale-tags] No locale-only tags found. Done.');
  process.exit(0);
}

// Append to _redirects file (Netlify merges it with netlify.toml rules)
const redirectsFile = path.join(buildDir, '_redirects');
let existing = '';
if (fs.existsSync(redirectsFile)) {
  existing = fs.readFileSync(redirectsFile, 'utf8').trimEnd() + '\n\n';
}

const header = '# Auto-generated: locale-only tag redirects (301)\n';
const content = existing + header + redirects.join('\n') + '\n';

fs.writeFileSync(redirectsFile, content, 'utf8');
console.log(`[redirect-locale-tags] Wrote ${redirects.length} redirect rules to _redirects`);
