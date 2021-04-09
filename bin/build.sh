#!/bin/sh
echo "********** service apache2 starts **********"
service apache2 restart
echo "********** service apache2 started **********"
cd /home/project
echo "********** composer starts install packages **********"
composer install
chmod -R 777 storage
chmod -R 777 bootstrap/cache
echo "********** composer packages installed **********"
echo "********** laravel migration starts **********"
until nc -z -v -w30 172.28.1.1 3306
do
  echo "Waiting for database connection..."
  # wait for 5 seconds before check again
  sleep 5
done
php artisan migrate
echo "********** laravel database migrated **********"
echo "********** laravel seeder starts **********"
php artisan db:seed
echo "********** laravel database seeded **********"
echo "********** npm install starts **********"
cd /home/project/src/resources
npm i
echo "********** npm installed **********"
echo "********** angular compilation starts **********"
./node_modules/.bin/gulp build
echo "********** angular application started **********"
echo "********** DONE **********"
tail -f /dev/null 