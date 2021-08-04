const fs = require('fs');
const path = require('path');

const extentions = {
    'css': 'text/css',
    'js': 'text/javascript',
    'html': 'text/html',
};


function serverError(response) {
    response.writeHead(500, { 'Content-Type': extentions['html'] });
    response.end('<h1> server error</h1>');
}


// home page handler
function homeHandler(response) {

    const filePath = path.join(__dirname, '..', 'public', 'index.html');

    fs.readFile(filePath, (err, file) => {
        if (err) {

            serverError(response);

        } else {
            response.writeHead(200, { 'Content-Type': extentions['html'] });
            response.end(file);
        }
    });
}

// static files handler
function publicHandler(response, endPoint) {

    const extinsion = endPoint.split('.')[1];

    const filePath = path.join(__dirname, '..', 'public', endPoint);

    fs.readFile(filePath, (err, file) => {
        if (err) {

            serverError(response);

        } else {

            response.writeHead(200, { 'Content-Type': extentions[extinsion] });
            response.end(file);

        }
    });
}


module.exports = {
    homeHandler,
    publicHandler
};