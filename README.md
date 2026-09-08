# Blog jurídico estático — Dra. Carla Rodrigues

Aplicação React totalmente estática, sem banco de dados, autenticação, API, automações internas ou sistema administrativo. Os artigos são mantidos manualmente em `client/src/data/articles.ts`.

## Execução

| Comando | Finalidade |
|---|---|
| `pnpm dev` | Inicia o ambiente local |
| `pnpm test` | Valida o arquivo de artigos e as regras editoriais básicas |
| `pnpm check` | Verifica a tipagem TypeScript |
| `pnpm build:static` | Gera somente os arquivos estáticos em `dist/public` |
| `pnpm build` | Gera o pacote estático em `dist/public` e o wrapper de hospedagem em `dist/index.js` |

## Hospedagem externa

Para Vercel, Netlify ou outro serviço estático, publique a pasta `dist/public` gerada por `pnpm build:static`. O script cria páginas físicas para a listagem, a página Sobre, cada artigo e a rota de erro, facilitando acesso direto aos endereços.

Para gerar `sitemap.xml` e `robots.txt` com outro domínio, execute `PUBLIC_SITE_URL=https://seu-dominio.com pnpm build:static`. Sem essa variável, o endereço padrão será `https://www.carlaadvocac.click/blog`.

Para GitHub Pages em um repositório de projeto, use também o caminho base: `PUBLIC_BASE_PATH=/nome-do-repositorio/ PUBLIC_SITE_URL=https://usuario.github.io/nome-do-repositorio pnpm build:static`. O workflow `.github/workflows/pages.yml` já calcula essas variáveis e publica `dist/public`. Em sites de usuário com repositório terminado em `.github.io`, o workflow usa automaticamente a raiz `/`.

O projeto não contém API nem servidor editorial. Para compatibilidade com a hospedagem Manus, `pnpm start` executa um wrapper mínimo que apenas entrega os arquivos de `dist/public` na porta definida pelo ambiente.
