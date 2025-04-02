# Stage 1: Build the Angular app
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve using NGINX
FROM nginx:alpine
COPY --from=build /app/dist/* /usr/share/nginx/html
EXPOSE 80
