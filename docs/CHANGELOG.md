# Changelog

## [Atualização Recente] - Modal de Pesquisa

### Adicionado
- **Sugestões de Tópicos**: O modal agora exibe badges interativos com sugestões de tópicos (limitado a 10) caso a pesquisa do usuário não retorne nenhum post. Esses badges utilizam as cores do sistema e redirecionam o usuário para a página de tópicos correspondente.
- **Integração com Elemento Nativo**: O modal foi refatorado para utilizar a tag HTML nativa `<dialog>`, garantindo melhor acessibilidade nativa, controle de foco e semântica.
- **Sincronização de Estado**: Adicionado um ouvinte de evento `close` nativo para garantir que o estado do React (`isOpen`) seja sincronizado corretamente caso o modal seja fechado por meios nativos (como a tecla `Esc`).

### Modificado
- **Lógica de Renderização do Modal**: O componente `SearchModal` agora utiliza o método `showModal()` e `close()` do `HTMLDialogElement` através de uma referência (`useRef`), substituindo a renderização condicional baseada em `div` fixa.
- **Estilização do Backdrop**: A camada de fundo opaca com desfoque agora utiliza os pseudo-elementos e utilitários modernos do Tailwind específicos para o elemento de diálogo (`backdrop:bg-gray-900/20 backdrop:backdrop-blur-sm`).
- **Otimização de Performance**: A derivação da lista de tópicos únicos a partir da lista de posts foi otimizada utilizando o hook `useMemo`, prevenindo recálculos desnecessários a cada renderização.
