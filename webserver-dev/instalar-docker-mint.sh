#!/bin/bash
# Este script instala o Docker e o Docker Compose no Linux Mint do zero.
# Como o Linux Mint é baseado no Ubuntu, usamos o repositório oficial do Ubuntu.

echo "Iniciando a instalação do Docker no Linux Mint..."

# 1. Atualiza o gerenciador de pacotes apt
sudo apt-get update

# 2. Instala os pacotes necessários para permitir que o apt use repositórios via HTTPS
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# 3. Cria a pasta para a chave de segurança do Docker
sudo mkdir -m 0755 -p /etc/apt/keyrings

# 4. Baixa a chave GPG oficial do Docker e salva na pasta criada
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 5. Configura o repositório do Docker para o apt. 
# NOTA: O Linux Mint usa nomes próprios para as versões (ex: 'vanessa', 'vera'). 
# Precisamos pegar o nome da versão do Ubuntu no qual ele é baseado (ex: 'jammy').
UBUNTU_CODENAME=$(cat /etc/os-release | grep UBUNTU_CODENAME | cut -d= -f2)

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $UBUNTU_CODENAME stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 6. Atualiza o apt novamente para reconhecer o novo repositório do Docker
sudo apt-get update

# 7. Instala o Docker, o Docker Compose e outras dependências essenciais
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 8. Adiciona o seu usuário atual ao grupo "docker" para não precisar digitar "sudo" toda vez que for rodar o docker
sudo usermod -aG docker $USER

echo "Instalação concluída!"
echo "IMPORTANTE: Para que a permissão sem 'sudo' funcione, você precisa REINICIAR o computador ou rodar o comando: 'newgrp docker'"
