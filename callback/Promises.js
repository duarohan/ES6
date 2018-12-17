var fs = require('fs');
var zl = require('zlib');

var decompressPromise = new Promise((resolve,reject) => {
    decompressFile('Actors.txt','Actors.txt.gz',function(err){
        if(err){
            reject(console.log(err));
        }
    resolve()    
    })
    console.log('De compressing file..')
    var unzipFile = fs.createReadStream(source);
    var unzipFiletoTxt = fs.createWriteStream(destination);
    unzipFile.pipe(zl.createGunzip()).pipe(unzipFiletoTxt);    
    console.log('File De compressed..')    
    next();
})

var backupPromise = new Promise((resolve,reject) => {
    console.log('backing up file..')
    var read = fs.createReadStream(source);
    var write = fs.createWriteStream(destination);
    read.pipe(write);    
    console.log('File Backed up..')
    next();    
    decompressFile('Actors.txt','Actors.txt.gz',function(err){
        if(err){
            reject(console.log(err));
        }
    resolve()    
    })
})

var compressPromise = (source, destination) => {
    return new Promise((resolve,reject) => {
        function compressFile(err, source, destination){
            console.log('compressing file..')
            var read = fs.createReadStream(source);
            var compress = fs.createWriteStream(destination);
            read.pipe(zl.createGzip()).pipe(compress);
        }
        if(err){
            reject(console.log(err));
        }
        else{
            resolve()
        }    
    })
}

compressPromise('Actors.txt','Actors.txt.gz')
.then(
    decompressPromise('Actors.txt.gz','ActorsDecom.txt')
    .then(
        backupPromise('ActorsDecom.txt','Actorsbckp.txt')
        .then(()=> console.log("Finished"))
        .catch(console.log(err))
    )
    .catch(console.log(err))
)
.catch(console.log(err));     