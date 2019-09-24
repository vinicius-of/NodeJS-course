/*
    Buffers 

    - Temporary storage spot for a chunk of data that is being tranferred from one place to another
    - The buffer is filled with data, then passed along
    - Transfer small chunks of data at a time

    OBS: You can define the amount of data into a buffer, search it!

    Stream

    A stream of data that flows over time from one place to another

    - Writable streams - Allow nodejs to write data to a stream (Server to the client)
    - Readble streams - Allow nodejs to read data from a stream (Client to the server)
    - Duplex - can read and write to a stream (Both)
*/

var fs = require('fs');

var myWriteStream = fs.createWriteStream(__dirname + '/written.txt');
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', /*'utf8'*/);

//Readble stream example
myReadStream.on('data', (chunk) => {
    console.log('New chuck has been detected!');
    console.log(chunk);
});

// Writable stream example
myReadStream.on('data', (chunk) => {
    console.log('New chuck has been detected!');
    myWriteStream.write(chunk);
});