var fs = require('fs');
var zl = require('zlib');

var read = fs.createReadStream('Output.txt');

var write = fs.createWriteStream('Actors-bckp.txt');

read.pipe(write);

