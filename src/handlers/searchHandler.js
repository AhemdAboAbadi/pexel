const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const filterQuery = require('../utils/filter');
const serverError = require('./index');

// search Handler
const searchHandler = (response, endPoint) => {
  const query = querystring.parse(endPoint.split('?')[1]);
  const pahtFile = path.join(__dirname, '..', 'data.json');

  fs.readFile(pahtFile, 'utf8', (err, data) => {
    if (err) {
      serverError(response, 'json', err);
    } else {
      let result = [];
      if (query.q) {
        const jsonData = JSON.parse(data);
        result = filterQuery(query.q, jsonData).slice(0, 5);
      }
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result));
    }
  });
};

module.exports = searchHandler;
