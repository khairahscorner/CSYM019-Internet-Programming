FROM php:7.4-apache

# Enable required PHP extensions
RUN docker-php-ext-install mysqli pdo_mysql

# Copy app code to container
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html/
