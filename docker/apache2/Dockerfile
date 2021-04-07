FROM php:7.4-apache
ARG USER_UID
ARG USER_GID
ARG USER_NAME
RUN addgroup --gid ${USER_GID} ${USER_NAME}
RUN adduser --uid ${USER_UID} --gid ${USER_GID} --shell /bin/bash ${USER_NAME}
RUN a2enmod rewrite
RUN apt-get update && apt-get install -y \
    bash \
    git \
    libzip-dev \
    netcat \
    zip
#RUN pecl install xdebug-3.0.3 && docker-php-ext-enable xdebug
RUN docker-php-ext-install \
    mysqli \
    pdo_mysql
RUN rm /etc/apache2/sites-enabled/000-default.conf
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
USER root
#COPY ./xdebug.ini /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
COPY hardware.apache.conf /etc/apache2/sites-enabled/hardware.apache.conf
ENV APACHE_RUN_USER=${USER_NAME}
ENV APACHE_RUN_GROUP=${USER_NAME}
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
USER ${USER_NAME}
ENTRYPOINT ["/home/project/bin/build.sh"]

