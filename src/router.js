<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

const extentions = {
  'css': 'text/css',
  'js': 'text/javascript',
  'html': 'text/html',
};
=======
const { homeHandler, publicHandler, searchHandler } = require('./handler');
>>>>>>> 1edd3586373cf98694e37caa935c926d9e29e411

const router = (request, response) => {
  const endPoint = request.url;
  const reqMethod = request.method;
<<<<<<< HEAD
  const extinsion = endPoint.split(".")[1];
=======

  const extinsion = endPoint.split('.')[1];
>>>>>>> 1edd3586373cf98694e37caa935c926d9e29e411

  // index.html end point
  if (endPoint === '/' && reqMethod === 'GET') {
    homeHandler(response);

    // static files end point
  } else if (extinsion) {
<<<<<<< HEAD
    const filePath = path.join(__dirname, '..', 'public', endPoint);

    fs.readFile(filePath, (err, file) => {
      if (err) {

        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end('<h1> server error</h1>');

      } else {

        response.writeHead(200, { 'Content-Type':extentions[extinsion]});
        response.end(file);

      }
    });
=======
    publicHandler(response, endPoint);
>>>>>>> 1edd3586373cf98694e37caa935c926d9e29e411

    // search end point
  } else if (endPoint.includes('/search')) {
    searchHandler(response, endPoint);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 Page Not Found</h1>');
  }
};

module.exports = router;
