var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

// intialization, change the scope of variable to global so that it can be initialized once and 
console.log(add());
console.log(add());
console.log(add());
