# Small Dockerfile to serve the static site with nginx (lightweight)
FROM nginx:alpine

# Copy site files into nginx html directory
# Note: this will overwrite nginx's default index.html with your project's index.html
COPY . /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# nginx:alpine default CMD will run nginx in foreground
# (no HEALTHCHECK to keep image minimal and portable)
