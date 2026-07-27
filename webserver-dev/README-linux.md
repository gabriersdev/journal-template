# Desenvolvimento no Linux Mint com Docker

Este guia explica como configurar o ambiente de desenvolvimento deste tema Ghost no Linux Mint (ou Ubuntu) usando o Docker, sem precisar se preocupar com dependências como o SQLite e erros de compilação.

## 1. Instalação do Docker
Se você ainda não tem o Docker instalado na sua máquina Linux, nós preparamos um script que automatiza o processo instalando pelos repositórios oficiais e adicionando as permissões necessárias.

Abra o terminal na pasta do projeto e rode:
```bash
chmod +x instalar-docker-mint.sh
./instalar-docker-mint.sh
```

**⚠️ Atenção:** Após o script finalizar, é **obrigatório** reiniciar a máquina (ou fechar totalmente sua sessão/terminal e abrir de novo) para que as permissões de usuário funcionem e você não precise usar `sudo docker`.

## 2. Iniciar o Projeto (Servidor Ghost)
Para ligar o banco de dados e o servidor principal do Ghost (que vai renderizar as páginas), basta rodar o script de inicialização:

```bash
chmod +x run-project.sh
./run-project.sh
```

Quando o comando finalizar, o Ghost estará rodando no seu computador!
- **Painel de Controle:** [http://localhost:2368/ghost](http://localhost:2368/ghost)
- Você deve acessar o painel, criar seu usuário inicial, ir em **Settings > Design > Change Theme > Installed** e ativar o tema `escudo`.

## 3. Compilando o Tema ao Vivo (Live Reload)
O Docker está apenas rodando o servidor. Você ainda precisa que seus arquivos `CSS` e `JS` sejam compilados enquanto você programa. Para isso, no Linux, você deve ter o Node.js instalado normalmente (pode usar o nvm para baixar o Node v20, que roda liso no Linux).

Na mesma pasta, deixe rodando em outro terminal:
```bash
npm install
npm run dev
```

Pronto! Agora você edita seus arquivos, o Gulp compila os assets, o volume do Docker automaticamente repassa os novos arquivos pro Ghost e você só precisa recarregar o navegador.

## Dicas Úteis
- **Para ver os logs do Ghost:** `docker compose logs -f`
- **Para parar o servidor:** `docker compose down`
- **Para jogar pra Produção (Railway):** Existe um arquivo `Dockerfile` na raiz pronto para build de produção usando Multi-stage build. 
