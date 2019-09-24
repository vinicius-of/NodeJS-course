const http = require("http");

//Optional
const pipes = require("./pipes");

//Headers
// Content-type
// Status

const server = http.createServer((request, response) => {
    console.log(`request was made: ${request.url}`);
    response.writeHead(/*Status*/ 200, /*Content-type*/ {
        'Content-type': 'text/plain'
    });
    // response.end("It's working");
    pipes.rs.pipe(response);
});

server.listen(/*Port number*/ 3000, /*IP address*/ '127.0.0.1');
console.log('Listening 3000!');

