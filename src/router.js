const fs = require('fs');
const path = require('path');
const homeHandler = require('./handler.js');

const extentions = {
  'css': 'text/css',
  'js': 'text/javascript',
  'html': 'text/html',
};



const router = (request, response) => {
  const endPoint = request.url;
  const reqMethod = request.method;

  const extinsion = endPoint.split('.')[1];

  // index.html end point
  if (endPoint === '/' && reqMethod === 'GET') {

    homeHandler(response);

    //static files end point
  } else if (extinsion) {
    const filePath = path.join(__dirname, '..', 'public', endPoint);

    fs.readFile(filePath, (err, file) => {
      if (err) {

        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end('<h1> server error</h1>');

      } else {

        response.writeHead(200, { 'Content-Type': extentions[extinsion] });
        response.end(file);

      }
    });

    // search end point
  } else if (endPoint.includes('/search')) {

    fs.readFile(pathFile, 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(err));
      } else {

        // filter the data and return it in the response

      }
    });
  } else {

    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 Page Not Found</h1>');

  }
};

module.exports = router;