// const { homeHandler, publicHandler, searchHandler } = require("./handler");
const homeHandler = require('./handlers/homeHandler');
const publicHandler = require('./handlers/publicHandler');
const searchHandler = require('./handlers/searchHandler');

const router = (request, response) => {
  const endPoint = request.url;
  const reqMethod = request.method;

  const extinsion = endPoint.split('.')[1];

  // index.html end point
  if (endPoint === '/' && reqMethod === 'GET') {
    homeHandler(response);

    // static files end point
  } else if (extinsion) {
    publicHandler(response, endPoint);

    // search end point
  } else if (endPoint.includes('/search')) {
    searchHandler(response, endPoint);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 Page Not Found</h1>');
  }
};

module.exports = router;
