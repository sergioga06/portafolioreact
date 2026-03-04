# Usamos una imagen ligera de Nginx para servir el contenido estático
FROM nginx:stable-alpine

# Copiamos el resultado de la compilación (la carpeta dist) al directorio de Nginx
COPY dist /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]