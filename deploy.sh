#!/bin/sh

echo "Switching to branch master"
git checkout main

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ root@45.56.91.36:/var/www/html/heliosenergia.cl/public_html/simulacion/
echo "Deployment complete"