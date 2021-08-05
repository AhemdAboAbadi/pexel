const fs = require('fs');
const path = require('path');
const serverError = require('./index');

const extentions = {
  css: 'text/css',
  js: 'text/javascript',
  html: 'text/html',
};

// home page handler
const homeHandler = (response) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');

  fs.readFile(filePath, (err, file) => {
    if (err) {
      serverError(response);
    } else {
      response.writeHead(200, { 'Content-Type': extentions.html });
      response.end(file);
    }
  });
};

module.exports = homeHandler;
