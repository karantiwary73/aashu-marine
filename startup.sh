#!/bin/bash
apt-get install -y unzip
unzip -o aashu-marine-main.zip
cd aashu-marine-main/aashumarine-server
npm install
node server.js
