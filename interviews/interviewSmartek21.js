//adding using anonymous functions
var add = x => y => y ? add(x + y) : x
console.log(add (2)(3)(5)())

//multiplication using addition
var mul = function mul(a,b){
  var sum = 0;
  while(b > 0){
    sum = a + sum;
    b = b - 1;
  }
  return sum;
}
console.log(mul(2,9))
