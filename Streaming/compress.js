var fs = require('fs');
var zl = require('zlib');

function compressFile(source, destination, next){
    console.log('compressing file..')
    var read = fs.createReadStream(source);
    var compress = fs.createWriteStream(destination);
    read.pipe(zl.createGzip()).pipe(compress);
    next();    
}

compressFile('Actors.txt','Actors.txt.gz',function(err){
    if(err){
        console.log(err);
    }
})
