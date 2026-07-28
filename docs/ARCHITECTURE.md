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

## Pesquisa e Filtros (Modal de Busca)
- `search-modal.tsx`: Componente utilizando a tag nativa `<dialog>` HTML5.
  - **Controle de Estado:** A abertura e fechamento são controlados nativamente via métodos de DOM (`showModal()` e `close()`) acessados por meio de um `useRef`. Um event listener nativo monitora o evento `close` da tag `<dialog>` para garantir sincronia bidirecional com o estado React (como fechamentos via tecla `Esc`).
  - **Otimização:** A lista de tópicos únicos para sugestão é derivada e memoizada com `useMemo`, evitando recálculo de array em iterações de filtro.
  - **Estilização e Acessibilidade:** A visibilidade é controlada garantindo perfeita acessibilidade e foco. A interface com efeito de desfoque é atingida de forma nativa e semântica através da pseudo-classe `backdrop:` (ex: `backdrop:backdrop-blur-sm`). A listagem permite busca em tempo real nos metadados (*title*, *description* e *topic*).

## Roteamento de Tópicos
- `app/topic/[topic-name]/page.tsx`: Página de arquivo que lista todos os posts de um tópico específico. Recebe o parâmetro dinâmico da URL de forma assíncrona (Next.js 15+), realiza um processo de "slugificação" para garantir a comparação resiliente entre o nome da URL e os tópicos declarados nos MDXs, e exibe as listagens num formato espelhado à seção principal.
