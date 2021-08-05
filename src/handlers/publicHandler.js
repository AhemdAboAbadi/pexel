const fs = require('fs');
const path = require('path');
const serverError = require('./index');

const extentions = {
  css: 'text/css',
  js: 'text/javascript',
  html: 'text/html',
};

// static files handler
const publicHandler = (response, endPoint) => {
  const extinsion = endPoint.split('.')[1];

  const filePath = path.join(__dirname, '..', '..', 'public', endPoint);

  fs.readFile(filePath, (err, file) => {
    if (err) {
      serverError(response);
    } else {
      response.writeHead(200, { 'Content-Type': extentions[extinsion] });
      response.end(file);
    }
  });
};

module.exports = publicHandler;
