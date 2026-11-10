import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexHtml = path.join(distDir, 'index.html');

if (!fs.existsSync(distDir) || !fs.existsSync(indexHtml)) {
  console.error('Dist directory or index.html not found!');
  process.exit(1);
}

// 1. Generate 404.html as SPA fallback for GitHub Pages
const notFoundHtml = path.join(distDir, '404.html');
fs.copyFileSync(indexHtml, notFoundHtml);
console.log('Created dist/404.html fallback');

// 2. Ensure CNAME is preserved in dist
const cnameSource = path.join(rootDir, 'CNAME');
const cnameDest = path.join(distDir, 'CNAME');
if (fs.existsSync(cnameSource)) {
  fs.copyFileSync(cnameSource, cnameDest);
  console.log('Preserved CNAME in dist');
}

// 3. Generate static route folders with index.html for 200 OK responses on direct loads
const routes = [
  'about',
  'applications',
  'customer-solutions',
  'careers',
  'contact',
  'solutions', // Legacy alias
];

for (const route of routes) {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.copyFileSync(indexHtml, path.join(routeDir, 'index.html'));
  console.log(`Generated direct entry point for /${route}`);
}

console.log('Postbuild static route generation completed successfully.');
