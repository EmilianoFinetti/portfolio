# Stage 1: Astro build
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Nginx server
FROM nginx:alpine
# Copy the Nginx configuration file
COPY conf/default.conf /etc/nginx/conf.d/default.conf
# Remove the default Nginx HTML files
RUN rm -rf /usr/share/nginx/html/*
# Copy the built static files from the builder stage to the Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html
# Expose port 80 for the Nginx server
EXPOSE 80
# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]