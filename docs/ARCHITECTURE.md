# Arquitetura do Blog/Jornal

O projeto utiliza Next.js com App Router. Os conteúdos das matérias são escritos em formato MDX e processados em Server Components.

## Fluxo de Renderização MDX
1. Os arquivos de conteúdo (matérias) são armazenados em `app/posts/` com a extensão `.mdx`.
2. O utilitário `libs/mdx.ts` utiliza o pacote `gray-matter` para extrair os meta-dados (*Frontmatter*) e o corpo do texto de cada arquivo.
3. A página de listagem `app/page.tsx` lê todos os posts, ordena-os por data e exibe resumos em componentes como `FeaturedPost` e `PostCard`.
4. A página de leitura `app/[slug]/page.tsx` faz o matching dinâmico do *slug* na URL com o nome do arquivo, e usa o `next-mdx-remote` para compilar o conteúdo MDX para HTML.

## Estrutura de Componentes
Seguindo o design limpo:
- `header.tsx`: Navegação principal.
- `footer.tsx`: Rodapé.
- `sidebar.tsx`: Coluna lateral da home com tópicos e posts em destaque.
- `featured-post.tsx`: Post grande da página inicial.
- `post-card.tsx`: Lista de posts menores.
- `newsletter.tsx`: Bloco de conversão de emails.

## Estilização
Utilizamos TailwindCSS. Tipografia controlada via `@tailwindcss/typography` (`prose`) para que o HTML gerado a partir do MDX obedeça à estrutura de design system.
