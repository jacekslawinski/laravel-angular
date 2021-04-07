#!/bin/sh
service apache2 restart
cd /home/project
composer install
until nc -z -v -w30 172.28.1.1 3306
do
  echo "Waiting for database connection..."
  # wait for 5 seconds before check again
  sleep 5
done
php artisan migrate
php artisan db:seed
tail -f /dev/null
