var promise = new Promise(function(resolve,reject){
    resolve(3);
})

promise.then((val)=>val = val + 1).then((val)=>val = val + 2)