# Arquitetura estática

O blog funciona integralmente no navegador. Não há banco de dados, autenticação, área administrativa, API, geração por IA, cron ou automação interna. A aplicação é compilada em arquivos HTML, CSS e JavaScript que podem ser publicados em hospedagens estáticas.

| Rota | Finalidade |
|---|---|
| `/` | Página inicial com apresentação, quatro artigos recentes e acesso ao site institucional |
| `/artigos` | Listagem com busca, categorias e paginação local |
| `/artigos/:slug` | Leitura individual, autoria, data, compartilhamento e nota informativa |
| `/sobre` | Apresentação da Dra. Carla Rodrigues e canais institucionais |

## Conteúdo

Artigos e categorias ficam no arquivo `client/src/data/articles.ts`. A busca, os filtros e a localização por slug usam funções puras executadas no navegador. O arquivo `client/src/data/README.md` explica os campos e o procedimento para adicionar textos.

## Build e hospedagem

O comando `pnpm build:static` gera o pacote portátil em `dist/public`. Além da entrada principal, o script cria páginas físicas para a listagem, a página Sobre, cada artigo e a rota de erro. Os arquivos `vercel.json`, `netlify.toml` e `client/public/_redirects` facilitam a publicação em serviços estáticos.

Não há API, banco ou servidor editorial. O artefato principal de entrega continua sendo a pasta `dist/public`. A hospedagem Manus recebe também `dist/index.js`, um wrapper mínimo que somente entrega esses arquivos e escuta a porta definida pelo ambiente.

## Conformidade editorial

Os textos são informativos, evitam promessa de resultado e lembram que cada caso exige análise individualizada. O rodapé apresenta a declaração: “Publicidade informativa em conformidade com o Provimento 205/2021”.
