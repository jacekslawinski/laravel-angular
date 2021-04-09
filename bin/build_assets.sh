#!/bin/sh
echo "********** npm install starts **********"
cd /home/project/src/resources
npm i
echo "********** npm installed **********"
echo "********** angular compilation starts **********"
./node_modules/.bin/gulp build
echo "********** angular application started **********"
echo "********** DONE **********"
tail -f /dev/null 