const http = require('http');
const fs = require('fs');

function responseHTML(res, file) {
    try {
        res.writeHead(200, {'Content-type': 'text/html'})
        fs.createReadStream(__dirname + `/${file}.html`).pipe(res);
    } catch (error) {
        res.writeHead(404, {'Content-type': 'text/plain'})
        res.end(error);
    }
}

function responseJSON(res, data) {
    try {
        const dataJSON = JSON.stringify(data);
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(dataJSON);
    } catch (error) {
        res.writeHead(404, {'Content-type': 'text/plain'})
        res.end(error);
    }
}

function error404(message){
    const msg = message;
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.end("Error 404, " + msg);
}

module.exports = {
    responseHTML: responseHTML,
    responseJSON: responseJSON
}