const http = require('http')
const fs = require('fs')
const path = require('path')
require('env2')('.env')

const router = (request , response)=> {
  response.end()
}

const port = process.env.PORT || 8080 ;
console.log(port);

const server = http.createServer(router)
server.listen(port,()=>{
  console.log(`server is running at : http://localhost:${port}`);
})