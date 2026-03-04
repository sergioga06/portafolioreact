# ETAPA 1: Construcción (Node)
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ETAPA 2: Servidor (Nginx)
FROM nginx:stable-alpine
# Copiamos desde la etapa 'build' directamente
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]