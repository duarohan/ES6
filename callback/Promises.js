var fs = require('fs');
var zl = require('zlib');

function compressFile(source, destination){    
    return new Promise(function(resolve,reject){
            console.log("compressing File")
            var read = fs.createReadStream(source);
            var compress = fs.createWriteStream(destination);
            read.pipe(zl.createGzip()).pipe(compress);
            resolve("false");
    })
}

function decompressFile(source, destination){
    return new Promise(function(resolve,reject){
        console.log("De compressing File")
        var unzipFile = fs.createReadStream(source);
        var unzipFiletoTxt = fs.createWriteStream(destination);
        unzipFile.pipe(zl.createGunzip()).pipe(unzipFiletoTxt);    
        resolve("true");
    })
}

function backupFile(source, destination){
    return new Promise(function(resolve,reject){
        console.log("Backing Up File")
        var read = fs.createReadStream(source);
        var write = fs.createWriteStream(destination);
        read.pipe(write);
        resolve("true");    
    })
}

compressFile('Actors.txt','Actors.txt.gz').then(function(val){
    if(val === "true")
        decompressFile('Actors.txt.gz','ActorsDecom.txt').then(function(val){
            if(val === "true")
                backupFile('ActorsDecom.txt','Actorsbckp.txt').then(console.log("Finished"))
        })
    })
