const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const filterQuery = require('./utils');

const extentions = {
  css: 'text/css',
  js: 'text/javascript',
  html: 'text/html',
};

const serverError = (response, type = 'html', err) => {
  if (type === 'html') {
    response.writeHead(500, { 'Content-Type': extentions.html });
    response.end('<h1>500 | server error</h1>');
  } else if (type === 'json') {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(err));
  }
};

// home page handler
const homeHandler = (response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');

  fs.readFile(filePath, (err, file) => {
    if (err) {
      serverError(response);
    } else {
      response.writeHead(200, { 'Content-Type': extentions.html });
      response.end(file);
    }
  });
};

// static files handler
const publicHandler = (response, endPoint) => {
  const extinsion = endPoint.split('.')[1];

  const filePath = path.join(__dirname, '..', 'public', endPoint);

  fs.readFile(filePath, (err, file) => {
    if (err) {
      serverError(response);
    } else {
      response.writeHead(200, { 'Content-Type': extentions[extinsion] });
      response.end(file);
    }
  });
};

const searchHandler = (response, endPoint) => {
  const query = querystring.parse(endPoint.split('?')[1]);
  const pahtFile = path.join(__dirname, 'data.json');

  fs.readFile(pahtFile, 'utf8', (err, data) => {
    if (err) {
      serverError(response, 'json', err);
    } else {
      let result = [];
      if (query.q) {
        const jsonData = JSON.parse(data);
        result = filterQuery(query.q, jsonData).slice(0, 20);
      }
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result));
    }
  });
};

module.exports = {
  homeHandler,
  publicHandler,
  searchHandler,
};
