import { describe, expect, it } from "vitest";
import { articles, categories, filterArticles, getArticleBySlug } from "./articles";

describe("arquivo local de artigos", () => {
  it("mantém slugs únicos e campos editoriais obrigatórios", () => {
    expect(new Set(articles.map(article => article.slug)).size).toBe(articles.length);
    for (const article of articles) {
      expect(article.title.length).toBeGreaterThan(20);
      expect(article.content.length).toBeGreaterThan(300);
      expect(article.authorName).toBe("Dra. Carla Rodrigues");
      expect(categories.some(category => category.slug === article.categorySlug)).toBe(true);
    }
  });

  it("localiza artigo pelo slug sem consultar servidor", () => {
    expect(getArticleBySlug("direito-ao-silencio-protecao-constitucional")?.id).toBe(3);
    expect(getArticleBySlug("nao-existe")).toBeUndefined();
  });

  it("filtra localmente por texto e categoria", () => {
    expect(filterArticles("silêncio")).toHaveLength(1);
    expect(filterArticles("", "habeas-corpus")).toHaveLength(1);
    expect(filterArticles("audiência", "defesa-criminal")).toHaveLength(0);
  });

  it("não contém alegações promocionais incompatíveis com o caráter informativo", () => {
    const content = JSON.stringify(articles).toLocaleLowerCase("pt-BR");
    for (const expression of ["resultado garantido", "garantia de resultado", "100% de sucesso", "consulta grátis", "o melhor advogado"]) {
      expect(content).not.toContain(expression);
    }
  });
});
