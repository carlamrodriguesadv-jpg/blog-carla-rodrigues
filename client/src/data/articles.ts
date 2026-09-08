export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  color: string;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  authorName: string;
  categoryName: string;
  categorySlug: string;
  categoryColor: string;
  tags: string[];
  metaDescription: string;
  coverImageUrl?: string;
  sourceName?: string;
  sourceUrl?: string;
};

export const categories: Category[] = [
  { id: 1, name: "Defesa Criminal", slug: "defesa-criminal", description: "Garantias, procedimentos e direitos fundamentais no processo penal.", color: "#2D5A5A" },
  { id: 2, name: "Direitos Fundamentais", slug: "direitos-fundamentais", description: "Presunção de inocência, direito ao silêncio e devido processo legal.", color: "#C9822B" },
  { id: 3, name: "Audiência de Custódia", slug: "audiencia-de-custodia", description: "Finalidade, etapas e direitos relacionados à apresentação judicial.", color: "#2D5A5A" },
  { id: 4, name: "Habeas Corpus", slug: "habeas-corpus", description: "Informação sobre a proteção da liberdade de locomoção.", color: "#C9822B" },
];

export const articles: Article[] = [
  {
    id: 1,
    title: "Presunção de inocência: o que esse direito significa no processo penal",
    slug: "presuncao-de-inocencia-no-processo-penal",
    excerpt: "Entenda por que uma acusação não equivale a uma condenação e como a presunção de inocência orienta o processo penal.",
    publishedAt: "2026-08-28T12:00:00.000Z",
    authorName: "Dra. Carla Rodrigues",
    categoryName: "Direitos Fundamentais",
    categorySlug: "direitos-fundamentais",
    categoryColor: "#C9822B",
    tags: ["presunção de inocência", "processo penal", "garantias"],
    metaDescription: "Conteúdo informativo sobre presunção de inocência, prova e garantias no processo penal brasileiro.",
    content: `## Acusação não é condenação

A presunção de inocência é uma garantia fundamental: ninguém deve ser tratado como culpado antes de uma decisão condenatória definitiva. No cotidiano, isso significa que a existência de uma investigação ou de um processo não autoriza conclusões antecipadas sobre a responsabilidade de uma pessoa.

## A prova deve ser produzida de forma regular

Cabe à acusação demonstrar os fatos que sustenta, respeitando o contraditório e a ampla defesa. A defesa pode questionar provas, apresentar documentos, requerer diligências e expor uma versão dos acontecimentos. O resultado deve decorrer do que foi validamente produzido no processo, e não de impressões externas.

## O cuidado com julgamentos antecipados

Uma acusação criminal pode afetar relações familiares, profissionais e sociais antes mesmo do julgamento. Por isso, informações sobre processos devem ser analisadas com prudência, contexto e respeito à dignidade das pessoas envolvidas.

## Cada situação exige análise própria

Prazos, provas e estratégias dependem das particularidades do caso. Este texto apresenta noções gerais e não substitui orientação jurídica individualizada.`
  },
  {
    id: 2,
    title: "Fui acusado injustamente: quais cuidados tomar no início do processo",
    slug: "acusado-injustamente-cuidados-iniciais",
    excerpt: "Organização de documentos, preservação de provas e atenção às comunicações oficiais são medidas importantes desde o primeiro momento.",
    publishedAt: "2026-08-18T12:00:00.000Z",
    authorName: "Dra. Carla Rodrigues",
    categoryName: "Defesa Criminal",
    categorySlug: "defesa-criminal",
    categoryColor: "#2D5A5A",
    tags: ["acusação", "defesa", "provas"],
    metaDescription: "Orientações informativas sobre cuidados iniciais diante de uma acusação criminal considerada injusta.",
    content: `## Mantenha registros organizados

Documentos, mensagens, comprovantes, fotografias e informações sobre testemunhas podem ajudar a reconstruir os acontecimentos. Preserve os arquivos originais e evite alterações que dificultem a verificação de autenticidade.

## Não ignore intimações

Comunicações policiais ou judiciais possuem prazos e finalidades específicas. Anote datas, guarde cópias e busque compreender exatamente qual providência foi solicitada.

## Evite discussões públicas sobre o caso

Publicações em redes sociais e conversas fora do ambiente adequado podem ser retiradas de contexto. A discrição costuma contribuir para a organização responsável da defesa e para a proteção da privacidade.

## Reúna uma linha do tempo

Registrar datas, locais, pessoas presentes e fatos relevantes enquanto a memória está recente facilita a compreensão do caso. Não é necessário elaborar conclusões jurídicas: o mais importante é conservar informações objetivas.

## Informação não substitui orientação individual

Cada processo possui circunstâncias próprias. A definição de providências depende da análise dos documentos e da fase processual.`
  },
  {
    id: 3,
    title: "Direito ao silêncio: proteção constitucional e exercício consciente",
    slug: "direito-ao-silencio-protecao-constitucional",
    excerpt: "O silêncio não representa confissão. Conheça o sentido dessa garantia e a importância de compreender cada ato do procedimento.",
    publishedAt: "2026-08-08T12:00:00.000Z",
    authorName: "Dra. Carla Rodrigues",
    categoryName: "Direitos Fundamentais",
    categorySlug: "direitos-fundamentais",
    categoryColor: "#C9822B",
    tags: ["direito ao silêncio", "interrogatório", "garantias"],
    metaDescription: "Explicação acessível sobre o direito ao silêncio e sua função no processo criminal.",
    content: `## O que é o direito ao silêncio

O direito ao silêncio protege a pessoa contra a obrigação de produzir prova contra si mesma. Seu exercício não pode ser interpretado automaticamente como admissão dos fatos.

## Silêncio e defesa técnica

Falar ou permanecer em silêncio são decisões que devem considerar o contexto do procedimento, as informações já disponíveis e os riscos de interpretações equivocadas. A escolha consciente depende da compreensão do ato e de suas possíveis consequências.

## Declarações precisam ser livres

Informações prestadas em procedimentos oficiais devem resultar de manifestação livre, sem constrangimento ou pressão indevida. A pessoa também deve conhecer os direitos relacionados ao ato.

## Atenção ao caso concreto

Este conteúdo apresenta uma garantia em termos gerais. A avaliação da conduta adequada depende das circunstâncias e dos elementos existentes em cada situação.`
  },
  {
    id: 4,
    title: "Audiência de custódia: finalidade, etapas e direitos da pessoa presa",
    slug: "audiencia-de-custodia-finalidade-etapas-direitos",
    excerpt: "Saiba o que é analisado na audiência de custódia e por que ela não corresponde ao julgamento definitivo da acusação.",
    publishedAt: "2026-07-29T12:00:00.000Z",
    authorName: "Dra. Carla Rodrigues",
    categoryName: "Audiência de Custódia",
    categorySlug: "audiencia-de-custodia",
    categoryColor: "#2D5A5A",
    tags: ["audiência de custódia", "prisão", "liberdade"],
    metaDescription: "Informações gerais sobre finalidade, etapas e direitos na audiência de custódia.",
    content: `## Qual é a finalidade

A audiência de custódia permite que a pessoa presa seja apresentada à autoridade judicial em prazo adequado. Nesse momento são analisadas a legalidade da prisão, a necessidade de sua manutenção e eventuais relatos de violência ou tratamento inadequado.

## Não é o julgamento do processo

Em regra, a audiência não decide de forma definitiva se houve ou não o crime atribuído. O processo poderá seguir com produção de provas, manifestações das partes e decisão posterior.

## Possíveis decisões

Conforme as circunstâncias, a autoridade judicial pode avaliar o relaxamento de prisão ilegal, a concessão de liberdade com ou sem medidas cautelares, ou a conversão para outra modalidade de prisão prevista em lei.

## Análise individualizada

As decisões dependem das informações apresentadas, dos fundamentos legais e das particularidades da situação. Este texto possui finalidade exclusivamente informativa.`
  },
  {
    id: 5,
    title: "Habeas corpus: quando essa garantia pode ser considerada",
    slug: "habeas-corpus-quando-pode-ser-considerado",
    excerpt: "Uma visão introdutória sobre a função do habeas corpus na proteção da liberdade de locomoção diante de ilegalidade ou abuso de poder.",
    publishedAt: "2026-07-17T12:00:00.000Z",
    authorName: "Dra. Carla Rodrigues",
    categoryName: "Habeas Corpus",
    categorySlug: "habeas-corpus",
    categoryColor: "#C9822B",
    tags: ["habeas corpus", "liberdade", "ilegalidade"],
    metaDescription: "Introdução informativa ao habeas corpus e sua relação com a liberdade de locomoção.",
    content: `## Proteção da liberdade de locomoção

O habeas corpus é uma garantia voltada à proteção do direito de ir e vir quando existe ameaça ou restrição relacionada a ilegalidade ou abuso de poder.

## Análise dos fundamentos

Não basta discordar de uma decisão. É necessário examinar o ato questionado, a autoridade responsável, os fundamentos apresentados e a existência de uma ameaça ou restrição juridicamente relevante.

## Caráter preventivo ou liberatório

Dependendo da situação, a medida pode buscar impedir uma ameaça concreta à liberdade ou questionar uma restrição que já ocorreu. A adequação depende do contexto e das vias processuais disponíveis.

## Limites deste conteúdo

O cabimento de qualquer medida exige análise técnica individualizada. Este artigo não antecipa resultados nem substitui a avaliação dos documentos do caso.`
  },
  {
    id: 6,
    title: "Como funciona a produção de provas em um processo criminal",
    slug: "producao-de-provas-processo-criminal",
    excerpt: "Conheça, em linhas gerais, como documentos, testemunhos e perícias são apresentados e debatidos no processo penal.",
    publishedAt: "2026-07-03T12:00:00.000Z",
    authorName: "Dra. Carla Rodrigues",
    categoryName: "Defesa Criminal",
    categorySlug: "defesa-criminal",
    categoryColor: "#2D5A5A",
    tags: ["provas", "testemunhas", "perícia"],
    metaDescription: "Conteúdo introdutório sobre produção, análise e contraditório das provas no processo criminal.",
    content: `## A prova deve integrar o processo

Documentos, depoimentos, exames e outros elementos precisam ser apresentados conforme as regras aplicáveis. A regularidade da obtenção e a possibilidade de questionamento são aspectos relevantes para sua análise.

## Contraditório

As partes podem conhecer e debater os elementos utilizados no processo. Isso inclui formular perguntas, apontar inconsistências, apresentar contrapontos e requerer esclarecimentos quando cabíveis.

## Qualidade importa mais do que quantidade

Um grande volume de documentos não significa, por si só, prova suficiente. Coerência, origem, autenticidade e relação com os fatos precisam ser examinadas com cuidado.

## Decisão baseada no conjunto

A conclusão deve considerar o conjunto probatório produzido de forma válida. Cada situação possui dinâmica própria, e este material oferece apenas uma visão geral do tema.`
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find(article => article.slug === slug);
}

export function filterArticles(query = "", category = "") {
  const normalized = query.trim().toLocaleLowerCase("pt-BR");
  return articles.filter(article => {
    const categoryMatches = !category || article.categorySlug === category;
    const searchable = [article.title, article.excerpt, article.content, article.categoryName, ...article.tags].join(" ").toLocaleLowerCase("pt-BR");
    return categoryMatches && (!normalized || searchable.includes(normalized));
  });
}

