# Como adicionar ou editar artigos

Todo o conteúdo do blog está no arquivo `articles.ts`. Para publicar um novo texto manualmente, duplique um objeto do array `articles`, atribua um `id` e um `slug` inéditos, preencha os campos e execute `pnpm build:static`.

| Campo | Uso |
|---|---|
| `title` | Título exibido no card e na página do artigo |
| `slug` | Endereço amigável, em letras minúsculas e separado por hífens |
| `excerpt` | Resumo curto usado na listagem |
| `content` | Texto com subtítulos iniciados por `##`, listas com `-` e negrito com `**` |
| `publishedAt` | Data em formato ISO, por exemplo `2026-09-03T12:00:00.000Z` |
| `categorySlug` | Deve corresponder ao slug de uma categoria existente |
| `tags` | Palavras-chave usadas pela busca local |
| `metaDescription` | Descrição curta para mecanismos de busca |

As imagens de capa são opcionais. Quando usadas, informe uma URL HTTPS estável em `coverImageUrl`. Revise sempre o conteúdo antes de gerar uma nova versão do site.

