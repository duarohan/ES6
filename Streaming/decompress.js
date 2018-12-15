var fs = require('fs');
var zl = require('zlib');

var unzipFile = fs.createReadStream('Actors.txt.gz');

var unzipFiletoTxt = fs.createWriteStream('Output.txt');

unzipFile.pipe(zl.createGunzip()).pipe(unzipFiletoTxt);