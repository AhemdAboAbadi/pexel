const http = require('http')
const router = require('./router.js');
require('env2')('.env')

const port = process.env.PORT || 8080;

const server = http.createServer(router)

server.listen(port, () => {
  console.log(`server is running at : http://localhost:${port}`);
})