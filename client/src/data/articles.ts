import type { Article } from "./articles";

// Artigos do blog da Dra. Carla Rodrigues

export const articles: Article[] = [
  {
    id: 1,
    title: "Firmadas após 2ª guerra, bases do Direito Penal Internacional estão em xeque",
    slug: "firmadas-apos-2-guerra-bases-do-direito-penal-internacional-",
    excerpt: "Informação jurídica sobre firmadas após 2ª guerra, bases do direito penal internacional. Conteúdo informativo pela Dra. Carla Rodrigues.",
    publishedAt: "2026-09-10T08:01:36.000Z",
    authorName: "Dra. Carla Rodrigues",
    categoryName: "Defesa Criminal",
    categorySlug: "defesa-criminal",
    categoryColor: "#2D5A5A",
    tags: ["conjur", "direito penal", "direito criminal"],
    metaDescription: "Conteúdo informativo sobre Direito Penal Internacional. Direito Criminal — Dra. Carla Rodrigues.",
    content: `## Firmadas após 2ª guerra, bases do Direito Penal Internacional estão em xeque

Notícia publicada originalmente pelo **Conjur**.

### Contexto jurídico

Acompanhar as atualizações do cenário jurídico criminal é essencial para compreender direitos e possibilidades de defesa.

### Análise informativa

Este conteúdo tem caráter exclusivamente informativo e não substitui orientação jurídica individualizada.

> *Conteúdo adaptado de matéria publicada por Conjur.*`
  },
  {
    id: 2,
    title: "Presunção de inocência: um direito que precisa ser respeitado",
    slug: "presuncao-de-inocencia-um-direito-que-precisa-ser-respeitado",
    excerpt: "Entenda o que significa a presunção de inocência, como ela protege o cidadão no processo penal e por que uma acusação não é o mesmo que uma condenação.",
    publishedAt: "2026-09-10T12:00:00.000Z",
    authorName: "Dra. Carla Rodrigues",
    categoryName: "Direitos Fundamentais",
    categorySlug: "direitos-fundamentais",
    categoryColor: "#C9822B",
    tags: ["presunção de inocência", "direitos fundamentais", "processo penal", "defesa"],
    metaDescription: "Artigo informativo sobre o direito à presunção de inocência no processo penal brasileiro. Conteúdo educativo pela Dra. Carla Rodrigues.",
    content: `## Presunção de inocência: um direito que precisa ser respeitado

Você já ouviu aquela frase "fulano é culpado até que se prove o contrário"? Pois saiba que no Direito brasileiro o princípio é exatamente o oposto: **ninguém é culpado até que haja uma condenação definitiva**.

Esse é o princípio da presunção de inocência, previsto no artigo 5º, inciso LVII, da Constituição Federal. Ele é uma das garantias mais importantes de um Estado Democrático de Direito.

### O que significa na prática?

Na prática, a presunção de inocência significa que:

- **A acusação precisa provar.** Quem acusa tem o ônus de demonstrar, com provas concretas e válidas, que a pessoa cometeu o crime. Não é o acusado quem precisa provar que é inocente.
- **Dúvida favorece o réu.** Se não houver provas suficientes para uma condenação segura, a absolvição deve ser a regra. No Direito Penal, a dúvida não pode condenar.
- **Tratamento digno durante o processo.** A pessoa que responde a um processo não pode ser tratada como se já estivesse condenada. Isso vale para o respeito da sociedade e também para as autoridades.

### Presunção de inocência vs. opinião pública

Vivemos num tempo em que casos judiciais são amplamente discutidos nas redes sociais e na imprensa. Muitas vezes, a opinião pública já "condenou" alguém antes mesmo de o processo terminar.

É importante lembrar que:

- **Investigação não é culpa.** A existência de um inquérito policial ou de uma ação penal não significa que a pessoa seja culpada. Significa apenas que há suspeitas que precisam ser investigadas.
- **Processo justo leva tempo.** Produzir provas, ouvir testemunhas, analisar documentos — tudo isso demanda tempo. Um julgamento célere é desejável, mas não pode sacrificar o direito de defesa.
- **Opinião pública não substitui a Justiça.** As conclusões nas redes sociais não valem como prova. Apenas o processo judicial, com todas as garantias legais, pode determinar a culpa ou a inocência de alguém.

### O que a lei diz

A Constituição Federal estabelece que "ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória" (art. 5º, LVII). Isso significa que:

- Durante toda a investigação e o processo, a pessoa é **presumidamente inocente**
- Ela só será considerada culpada quando não couber mais recurso contra a condenação
- Até lá, todas as garantias processuais devem ser respeitadas

### Conclusão

A presunção de inocência não é um "benefício" dado ao acusado — é um **direito fundamental** que protege toda a sociedade. Ela garante que ninguém seja condenado sem provas, sem defesa e sem um julgamento justo.

Informar-se sobre esse e outros direitos é o primeiro passo para exercer a cidadania plena. Este conteúdo tem caráter exclusivamente informativo e não substitui orientação jurídica individualizada.

> *"É melhor absolver dez culpados do que condenar um inocente."*`
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find(article => article.slug === slug);
}

export function filterArticles(query: string = "", category: string = "") {
  const normalized = query.trim().toLocaleLowerCase("pt-BR");
  return articles.filter(article => {
    const categoryMatches = !category || article.categorySlug === category;
    const searchable = [article.title, article.excerpt, article.content, article.categoryName, ...article.tags].join(" ").toLocaleLowerCase("pt-BR");
    return categoryMatches && (!normalized || searchable.includes(normalized));
  });
}

export const categories = [
  { id: 1, name: "Defesa Criminal", slug: "defesa-criminal", description: "Garantias, procedimentos e direitos fundamentais no processo penal.", color: "#2D5A5A" },
  { id: 2, name: "Direitos Fundamentais", slug: "direitos-fundamentais", description: "Presunção de inocência, direito ao silêncio e devido processo legal.", color: "#C9822B" },
  { id: 3, name: "Audiência de Custódia", slug: "audiencia-de-custodia", description: "Finalidade, etapas e direitos relacionados à apresentação judicial.", color: "#2D5A5A" },
  { id: 4, name: "Habeas Corpus", slug: "habeas-corpus", description: "Informação sobre a proteção da liberdade de locomoção.", color: "#C9822B" },
];