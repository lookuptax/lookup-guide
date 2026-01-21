const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const files = [
  'docs/tax-identification-number/united-states.mdx',
  'docs/tax-identification-number/brazil.md'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const { data } = matter(content);
  console.log(`File: ${file}`);
  console.log(`Slug Frontmatter: ${data.slug || 'NONE'}`);
  console.log(`ID Frontmatter: ${data.id || 'NONE'}`);
});
