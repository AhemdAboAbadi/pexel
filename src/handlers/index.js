const extentions = {
  css: 'text/css',
  js: 'text/javascript',
  html: 'text/html',
};

const serverError = (response, type = 'html', err) => {
  if (type === 'html') {
    response.writeHead(500, { 'Content-Type': extentions });
    response.end('<h1>500 | server error</h1>');
  } else if (type === 'json') {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(err));
  }
};

module.exports = serverError;
