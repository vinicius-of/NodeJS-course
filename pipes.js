var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', /*'utf8'*/);

//Only readable streams
// myReadStream.pipe(myWriteStream);

module.exports = {
    rs: myReadStream
}