const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

if (!fs.existsSync('aashu-marine-main')) {
  execSync('node -e "const AdmZip = require(\'adm-zip\'); const zip = new AdmZip(\'aashu-marine-main.zip\'); zip.extractAllTo(\'.\', true);"', { stdio: 'inherit' });
}

process.chdir('aashu-marine-main/aashumarine-server');
execSync('npm install', { stdio: 'inherit' });
execSync('node server.js', { stdio: 'inherit' });
