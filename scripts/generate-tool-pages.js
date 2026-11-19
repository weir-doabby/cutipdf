/**
 * CutiPDF (cutipdf.com) - SEO & Static Page Generator
 * Generates static index.html pages for all 30 tools, sitemap.xml, and robots.txt
 * Ensures AI chatbots (ChatGPT, Claude, etc.) and search engines get HTTP 200 OK with full metadata.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const appJsPath = path.join(rootDir, 'app.js');
const masterHtmlPath = path.join(rootDir, 'index.html');

// 1. Extract TOOLS_CATALOG dynamically from app.js
const appJsContent = fs.readFileSync(appJsPath, 'utf8');
const start = appJsContent.indexOf('const TOOLS_CATALOG =');
const end = appJsContent.indexOf('\n// Application State', start);
const catalogCode = appJsContent.slice(start, end).replace('const TOOLS_CATALOG', 'globalThis.TOOLS_CATALOG');
const sandbox = {};
vm.runInNewContext(catalogCode, sandbox);

const catalog = sandbox.TOOLS_CATALOG;
if (!catalog) {
  console.error('Failed to parse TOOLS_CATALOG');
  process.exit(1);
}

const tools = [];
for (const [category, toolList] of Object.entries(catalog)) {
  for (const t of toolList) {
    tools.push({ category, ...t });
  }
}

console.log(`Loaded ${tools.length} tools from TOOLS_CATALOG.`);

// 2. Read Master index.html
const masterHtml = fs.readFileSync(masterHtmlPath, 'utf8');

// 3. Generate static directory and index.html for each tool
let generatedCount = 0;
for (const tool of tools) {
  const toolDir = path.join(rootDir, tool.id);
  if (!fs.existsSync(toolDir)) {
    fs.mkdirSync(toolDir, { recursive: true });
  }

  // Generate customized HTML with SEO meta tags & relative assets
  let html = masterHtml;

  // Title & Description
  const title = `${tool.title} Online • CutiPDF`;
  const desc = `${tool.desc} 100% free, private, client-side PDF tool in your browser.`;
  const canonicalUrl = `https://cutipdf.com/${tool.id}`;

  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?">/,
    `<meta name="description" content="${desc}">\n  <link rel="canonical" href="${canonicalUrl}">`
  );

  // Open Graph & Twitter & Schema.org JSON-LD
  const seoHeadTags = `
  <!-- Open Graph / Social Media Meta Tags -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="CutiPDF">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${desc}">

  <!-- Schema.org WebApplication Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "${tool.title} - CutiPDF",
    "url": "${canonicalUrl}",
    "description": "${tool.desc}",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }
  </script>`;

  html = html.replace('</head>', `${seoHeadTags}\n</head>`);

  // Fix relative asset paths for subdirectories (one level up)
  html = html
    .replace(/href="style\.css\?/g, 'href="../style.css?')
    .replace(/src="vectors\.js\?/g, 'src="../vectors.js?')
    .replace(/src="app\.js\?/g, 'src="../app.js?')
    .replace(/href="assets\//g, 'href="../assets/')
    .replace(/src="assets\//g, 'src="../assets/')
    .replace(/href="\.\//g, 'href="../');

  const toolHtmlPath = path.join(toolDir, 'index.html');
  fs.writeFileSync(toolHtmlPath, html, 'utf8');
  generatedCount++;
}

console.log(`Generated ${generatedCount} dedicated static tool pages.`);

// 4. Generate sitemap.xml
const today = new Date().toISOString().split('T')[0];
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cutipdf.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

for (const tool of tools) {
  sitemap += `  <url>
    <loc>https://cutipdf.com/${tool.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

sitemap += `</urlset>\n`;
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemap, 'utf8');
console.log(`Generated sitemap.xml with all ${tools.length} tools.`);

// 5. Generate robots.txt
const robots = `# CutiPDF Robots.txt
# Welcome all web crawlers, search engines, and AI chatbots

User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://cutipdf.com/sitemap.xml
Sitemap: https://weir-doabby.github.io/cutipdf/sitemap.xml
`;

fs.writeFileSync(path.join(rootDir, 'robots.txt'), robots, 'utf8');
console.log('Generated robots.txt.');
