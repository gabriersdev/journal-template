# Estágio 1: Build do Tema
# Usamos a imagem do Node para compilar os arquivos (CSS/JS)
FROM node:20-alpine AS builder

WORKDIR /usr/src/theme

# Copia os arquivos de dependência
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm ci

# Copia todo o código do tema (arquivos hbs, css, js)
COPY . .

# Compila o tema usando a task 'build' do Gulp que está no seu gulpfile.js
RUN npx gulp build


# Estágio 2: Imagem do Ghost para Produção
FROM ghost:5-alpine

# Copia a pasta compilada do estágio anterior diretamente para a pasta de temas do Ghost
COPY --from=builder /usr/src/theme /var/lib/ghost/content/themes/escudo

# Variáveis de ambiente padrão para produção (você pode sobrescrever no Railway)
ENV NODE_ENV=production

# O Railway automaticamente detecta a porta que o Ghost escuta (2368)
EXPOSE 2368
