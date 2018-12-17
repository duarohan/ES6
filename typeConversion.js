var str = "0625";
var num = parseInt(str);
var num2 = Number(str);
console.log(num); 
console.log(num2); 

var num = 23
console.log(typeof(String(num))); 
console.log(typeof(num.toString()));

console.log(typeof(5 + null)  )// returns 5         because null is converted to 0
console.log(typeof("5" + null))  // returns "5null"   because null is converted to "null"
console.log(typeof("5" + 2)  )// returns "52"      because 2 is converted to "2"
console.log(typeof("5" - 2)  )// returns 3         because "5" is converted to 5
console.log(typeof("5" * "2")) // returns 10        because "5" and "2" are converted to 5 and 2

//Number to boolean
var number = 0 
console.log(Boolean(number));
var number1 = 1
console.log(Boolean(number1));
var number2 = 2
console.log(Boolean(number2));

//String to boolean
var string = "true" 
console.log(Boolean(string));
var string1 = "false"
console.log(Boolean(string1));
var string2 = "abcdefghi"
console.log(Boolean(string2));

