const http = require('http');
require('env2')('.env');
const router = require('./router');

const port = process.env.PORT || 8080;

const server = http.createServer(router);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running at : http://localhost:${port}`);
});
