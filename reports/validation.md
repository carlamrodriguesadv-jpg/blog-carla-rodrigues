# Validação da versão estática

## Qualidade técnica

| Verificação | Resultado |
|---|---|
| TypeScript (`pnpm check`) | Aprovado, sem erros |
| Testes Vitest (`pnpm test`) | 4 testes do arquivo local de artigos aprovados |
| Build estático (`pnpm build`) | Concluído com sucesso |
| Entrada da hospedagem gerenciada | `dist/index.js` gerado e iniciado com sucesso |
| Simulação HTTP de produção | HTTP 200 em `/`, `/artigos`, artigo individual, `/sobre`, `robots.txt` e `sitemap.xml`; HTTP 404 em rota inexistente |
| GitHub Pages | Build em subdiretório validado com assets prefixados, sitemap correto e workflow de publicação |
| Artefato final | `dist/public`, com aproximadamente 632 KB |
| Páginas geradas | Home, listagem, Sobre, seis artigos e `404.html` |
| Arquitetura | Sem servidor de aplicação, banco, autenticação, API, IA ou cron |

## Acessibilidade

| Verificação | Resultado |
|---|---|
| Contraste da paleta | Oito combinações principais aprovadas no nível AA; menor razão: 4,96:1 |
| Foco visível | Regra global `:focus-visible` presente |
| Atalho de navegação | “Pular para o conteúdo” presente no layout público |
| Página atual | `aria-current` aplicado ao menu público |
| Busca | Campo com rótulo acessível |
| Compartilhamento | Mensagem de erro anunciada por `aria-live` |
| Menu móvel e WhatsApp | Controles com rótulos acessíveis |

## Verificação visual

As rotas `/`, `/artigos`, `/artigos/presuncao-de-inocencia-no-processo-penal` e `/sobre` foram verificadas em desktop, com viewport de 1280 × 900, e em celular, com viewport de 390 × 844. A fotografia original, o menu móvel, os cards, a leitura individual, o rodapé e o botão flutuante de WhatsApp permaneceram legíveis e responsivos. O cartão editorial anteriormente sobreposto à foto foi removido, deixando a faixa com o nome da Dra. Carla totalmente visível.

## Portabilidade

O build cria páginas físicas para as rotas públicas e gera `sitemap.xml` e `robots.txt` a partir do arquivo local. Há configurações prontas para Vercel e Netlify. O GitHub Pages possui workflow próprio e suporte a caminho de repositório por `PUBLIC_BASE_PATH`; outros provedores podem publicar diretamente a pasta `dist/public`.
