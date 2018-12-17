function printList(a,b,callback) {
    console.log(a);
    console.log(b);
    console.log('printList is done');
    callback();
  }
  
  function updateDB(b,c,callback) {
    console.log(b);
    console.log(c);    
    console.log('updateDB is done');
    callback();
  }
  
  function getDistanceWithLatLong(c,d,callback) {
    console.log(c);
    console.log(d);  
    console.log('getDistanceWithLatLong is done');
    callback();
  }
  
  function runSearchInOrder(callback) {
      getDistanceWithLatLong(3,4,function() {
          updateDB(2,3,function() {
              printList(1,2,callback);
          });
      });
  }
  
  runSearchInOrder(function(){console.log('finished')});