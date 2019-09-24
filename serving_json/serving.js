var http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.statusCode);
    response.writeHead(200, {'Content-type':'application/json'});
    const myObj = {
        name: 'Jonas',
        age: '36',
        like: 'games'
    };

    //response.end(myObj);
    response.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Listening!');