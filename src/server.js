const http = require('http');
const router = require('./router');
require('env2')('.env');

const port = process.env.PORT || 8080;

const server = http.createServer(router);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running at : http://localhost:${port}`);
});
