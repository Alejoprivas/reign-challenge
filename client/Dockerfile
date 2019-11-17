# Create image based on the Skaffolder Angular 6 PWA image
FROM node:alpine as builder

# Copy source files
WORKDIR /source 
COPY . /source


# Install dependencies
RUN npm install

# Move source file with node_modules
RUN mv /source/node_modules /build/node_modules

# Build prod
RUN npm run build:prod

# ----------------------------------
# Prepare production environment
FROM nginx:alpine
# ----------------------------------

# Clean nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy dist
COPY --from=builder /build/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

# Permission
RUN chown root /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html/*

# Expose port
EXPOSE 2000

# Start
CMD ["nginx", "-g", "daemon off;"]
