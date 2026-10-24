const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pagesDir = path.join(root, "pug", "pages");
const skip = new Set(["app_test.pug"]);

const names = fs
  .readdirSync(pagesDir)
  .filter((file) => file.endsWith(".pug") && !skip.has(file))
  .map((file) => file.slice(0, -4))
  .sort((a, b) => (a === "index" ? -1 : b === "index" ? 1 : a.localeCompare(b)));

const urls = names
  .map((name) => {
    const loc = name === "index" ? "https://motmaenbash.ir/" : `https://motmaenbash.ir/${name}.html`;
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), xml);
console.log(`sitemap.xml: ${names.length} urls`);
