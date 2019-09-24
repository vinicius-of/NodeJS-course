var http = require('http');
var fs = require('fs');

const rs = fs.createReadStream(__dirname + '/index.html');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.writeHead(200, {'Content-type':'text/html'});
    rs.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('Listening!');
