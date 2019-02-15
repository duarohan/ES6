var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

// intialization, change the scope of variable to global so that it can be initialized once and 
console.log(add());
console.log(add());
console.log(add());

var counter1 = 0;
var add1 = (counter1 => {counter1 += 2})(counter1);

// intialization, change the scope of variable to global so that it can be initialized once and 
console.log(add1());
console.log(add1());
console.log(add1());

var sum = (a,b)=>a+b;

setTimeout((a,b)=>{
  console.log(sum(a,b))
},2000,2,3);


((a,b)=>console.log(a+b))(2,3)
