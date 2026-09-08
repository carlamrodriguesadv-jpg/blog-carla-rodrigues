import { readFile } from "node:fs/promises";

const files = {
  css: await readFile(new URL("../client/src/index.css", import.meta.url), "utf8"),
  publicLayout: await readFile(new URL("../client/src/components/PublicLayout.tsx", import.meta.url), "utf8"),
  header: await readFile(new URL("../client/src/components/SiteHeader.tsx", import.meta.url), "utf8"),
  articles: await readFile(new URL("../client/src/pages/Articles.tsx", import.meta.url), "utf8"),
  article: await readFile(new URL("../client/src/pages/ArticleDetail.tsx", import.meta.url), "utf8"),
};

const checks = [
  ["foco global visível", files.css.includes(":focus-visible")],
  ["atalho para conteúdo público", files.publicLayout.includes('href="#main-content"') && files.publicLayout.includes('id="main-content"')],
  ["indicação da página atual no menu público", files.header.includes("aria-current")],
  ["rótulo do botão de menu móvel", files.header.includes('aria-label={open ? "Fechar menu" : "Abrir menu"}')],
  ["rótulo do canal flutuante", files.publicLayout.includes('aria-label="Abrir canal institucional no WhatsApp"')],
  ["rótulo da busca de artigos", files.articles.includes('<span className="sr-only">Buscar artigos</span>')],
  ["retorno acessível do compartilhamento", files.article.includes('aria-live="polite"')],
];

let failed = false;
for (const [name, passes] of checks) {
  console.log(`${passes ? "PASS" : "FAIL"} ${name}`);
  failed ||= !passes;
}
if (failed) process.exitCode = 1;
