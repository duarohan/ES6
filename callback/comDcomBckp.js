var fs = require('fs');
var zl = require('zlib');

function compressFile(source, destination, next){
    console.log('compressing file..')
    var read = fs.createReadStream(source);
    var compress = fs.createWriteStream(destination);
    read.pipe(zl.createGzip()).pipe(compress);
    console.log('File compressed..')
    next();    
}
function backupFile(source, destination, next){
    console.log('backing up file..')
    var read = fs.createReadStream(source);
    var write = fs.createWriteStream(destination);
    read.pipe(write);    
    console.log('File Backed up..')
    next();
}
function decompressFile(source, destination, next){
    console.log('De compressing file..')
    var unzipFile = fs.createReadStream(source);
    var unzipFiletoTxt = fs.createWriteStream(destination);
    unzipFile.pipe(zl.createGunzip()).pipe(unzipFiletoTxt);    
    console.log('File De compressed..')    
    next();
}

//Passing functions as argument to previous function
function completeprocess(callback){
compressFile('Actors.txt','Actors.txt.gz',function(){
    decompressFile('Actors.txt.gz','ActorsDecom.txt',function(){
        backupFile('ActorsDecom.txt','Actorsbckp.txt',callback)
        })
    })
}

completeprocess(function(){console.log('Process finished...')});


//3 functions run asynchronouslly 
// compressFile('Actors.txt','Actors.txt.gz',function(err){
//     if(err){
//         console.log(err);
//     }
// })
// decompressFile('Actors.txt.gz','Output.txt',function(err){
//     if(err){
//         console.log(err);
//     }
// })
// backupFile('Output.txt','Actorsbckp.txt',function(err){
//     if(err){
//         console.log(err);
//     }
// })
