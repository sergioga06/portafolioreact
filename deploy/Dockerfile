# Etapa 1: Construcción (Build)
FROM node:20-alpine AS build-stage
ARG PROYECTO=portafolio
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor de producción (Siguiendo el estilo de ptaller)
# Usamos Nginx en lugar de Apache (httpd) porque es más eficiente para React Router
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Copiamos una configuración básica para que las rutas de React funcionen (SPA)
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]