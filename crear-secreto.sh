#!/bin/bash

# ==========================================
# Configuración de Credenciales de Docker Hub
# ==========================================
DOCKER_USER="sergiogg06"
DOCKER_PASS="baloncesto13"
DOCKER_EMAIL="sergiogallardog06@gmail.com"

# Nombre del secreto que usará Jenkins/Kaniko
SECRET_NAME="dockerhub-secret"

# ==========================================
# Ejecución del comando
# ==========================================
echo "Creando el secreto '$SECRET_NAME' en MicroK8s..."

microk8s kubectl create secret docker-registry $SECRET_NAME \
  --docker-server=https://index.docker.io/v1/ \
  --docker-username="$DOCKER_USER" \
  --docker-password="$DOCKER_PASS" \
  --docker-email="$DOCKER_EMAIL"

echo "¡Secreto creado correctamente!"