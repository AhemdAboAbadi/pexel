const fs = require('fs');
const path = require('path');



function homeHandler(response) {

    const filePath = path.join(__dirname, '..', 'public', 'index.html');

    fs.readFile(filePath, (err, file) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end('<h1> server error</h1>');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(file);
        }
    });
}


module.exports = homeHandler;