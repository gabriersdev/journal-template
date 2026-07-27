#!/bin/bash
# Este script inicia o servidor de desenvolvimento do Ghost via Docker Compose

echo "Verificando se o Docker está rodando..."
if ! docker info > /dev/null 2>&1; then
  echo "ERRO: O Docker não está rodando ou você não tem permissão."
  echo "Certifique-se de que o Docker está instalado e que você reiniciou a máquina (ou rodou 'newgrp docker') após instalar."
  exit 1
fi

echo "Subindo o servidor do Ghost no Docker..."
docker compose up -d

echo ""
echo "✅ O servidor do Ghost foi iniciado com sucesso!"
echo "👉 Painel Admin: http://localhost:2368/ghost"
echo "👉 Site Público: http://localhost:2368/"
echo ""
echo "Para visualizar os logs, rode: docker compose logs -f"
echo "Para parar o servidor, rode: docker compose down"
