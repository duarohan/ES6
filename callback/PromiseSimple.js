var promise = new Promise(function(resolve, reject) {
    resolve(3);
  });
  
  promise.then(function(val) {
    console.log(val); // 3
    return val + 2;
  }).then(function(val) {
    console.log(val); // 5
  })