# Regras de Negócio do Blog/Jornal

## Metadados do Post (Frontmatter)
Todo arquivo `.mdx` em `app/posts` DEVE conter os seguintes metadados em seu cabeçalho (*frontmatter*):
- `title`: (Obrigatório) Título da matéria.
- `description`: (Obrigatório) Resumo da matéria, usado nos cards e na página inicial.
- `date`: (Obrigatório) Data de publicação.
- `author`: (Opcional, Padrão = "The Journal") Autor da matéria.
- `readTime`: (Opcional, Padrão = "1 MIN READ") Tempo de leitura estimado.
- `image`: (Opcional) URL da imagem de capa. Se não fornecida, exibe-se um placeholder genérico.
- `featured`: (Opcional, booleano) Se verdadeiro (`true`), a matéria será exibida com destaque na página inicial (a primeira que tiver true é escolhida).
- `topic`: (Opcional, Padrão = "General") A categoria/tópico ao qual a matéria pertence.

## Geração de Tópicos
O componente lateral (Sidebar) coleta a lista de tópicos dinamicamente:
- A função lê todos os posts e agrupa pela propriedade `topic`.
- Apenas tópicos que possuem 1 ou mais posts cadastrados aparecerão na lista lateral.
- A contagem apresentada ao lado do nome do tópico (ex: "7 issues") reflete o total de matérias publicadas no formato mdx com aquele tópico exato.

## Comportamento da Página Inicial
- O maior post de destaque (`FeaturedPost`) escolhe automaticamente o post mais recente marcado com `featured: true`. Se nenhum post tiver a flag `featured`, o post mais recente no geral será usado.
- A sessão "MORE ISSUES" carrega os posts restantes (excluindo o principal).
- A sessão "Features" da barra lateral (Sidebar) apresenta no máximo os 4 posts mais recentes (excluindo o principal).

## Busca Dinâmica e Navegação por Tópicos
- **Slugificação de Tópicos**: Para garantir a correspondência precisa entre a URL e o conteúdo, tanto o parâmetro da rota de tópicos quanto o tópico do post são normalizados durante a filtragem (letras minúsculas e espaços convertidos em hífens).
- **Exibição do Tópico**: Na página de listagem (`/topic/[topic-name]`), o sistema tenta resgatar a grafia e capitalização originais a partir da propriedade `topic` do primeiro post encontrado. Como plano de contingência (*fallback*), os hífens são convertidos em espaços com a primeira letra maiúscula.
- **Sugestões de Tópicos**: O modal de pesquisa exibe dinamicamente até 10 "badges" únicos de tópicos reais extraídos do repositório de posts caso a pesquisa atual do usuário não retorne correspondências, servindo como uma sugestão rápida de navegação. Ao clicar nessas sugestões, o modal se encerra automaticamente e o usuário é redirecionado para a respectiva página do tópico, evitando "becos sem saída" na navegação.
