const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

// Configure Nunjucks to use your templates folder
nunjucks.configure('src/templates', { autoescape: true });

// Pages to render
const pages = ['index', 'about', 'contact'];

// Ensure dist folder exists
if (!fs.existsSync('dist')) fs.mkdirSync('dist');

// Render each page
pages.forEach(page => {
  const output = nunjucks.render(`${page}.njk`);
  fs.writeFileSync(path.join('dist', `${page}.html`), output);
  console.log(`${page}.html created`);
});