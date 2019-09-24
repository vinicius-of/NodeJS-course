var http = require('http');
var fs = require('fs');
var routes = require('./routes_pack')

const myJson = {
    name: 'Json',
    age: '???',
    like: "KILL"
}

const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url === '/home' || request.url === '/') {
        // response.writeHead(200, {'Content-type': 'text/html'});
        // fs.createReadStream(__dirname + '/index.html').pipe(response);
        routes.responseHTML(response, 'index');
    } else if (request.url === '/contact') {
        response.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(response);
    } else if (request.url === '/json'){
        // response.writeHead(200, {'Content-type': 'application/json'})
        // response.end(JSON.stringify(myJson));
        routes.responseJSON(response, myJson);
    } else {
        response.writeHead(404, {'Content-type': 'text/plain'}, 'utf8')
        response.end('Error 404, You\' done some mistake');
    }
});

server.listen(3000, '127.0.0.1');
console.log('Listening!');
