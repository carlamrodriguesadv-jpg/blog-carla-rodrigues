import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "dist", "public");
const source = await readFile(path.join(root, "client", "src", "data", "articles.ts"), "utf8");
const articleSection = source.split("export const articles")[1].split("export function getArticleBySlug")[0];
const slugs = [...articleSection.matchAll(/\n\s+slug: "([^"]+)"/g)].map(match => match[1]);
const routes = ["artigos", "sobre", ...slugs.map(slug => `artigos/${slug}`)];
const siteUrl = (process.env.PUBLIC_SITE_URL || "https://www.carlaadvocac.click/blog").replace(/\/$/, "");

for (const route of routes) {
  const directory = path.join(output, route);
  await mkdir(directory, { recursive: true });
  await copyFile(path.join(output, "index.html"), path.join(directory, "index.html"));
}
await copyFile(path.join(output, "index.html"), path.join(output, "404.html"));
const sitemapRoutes = ["", "artigos", "sobre", ...slugs.map(slug => `artigos/${slug}`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes.map(route => `  <url><loc>${siteUrl}/${route}</loc></url>`).join("\n")}
</urlset>\n`;
await writeFile(path.join(output, "sitemap.xml"), sitemap, "utf8");
await writeFile(path.join(output, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`, "utf8");
console.log(`Static pages generated: ${routes.length + 2}`);
