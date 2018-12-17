var sq = function(a){
    return a*a;
}
console.log(sq(2));
console.log(typeof(sq));
//Remove function keyword
//Remove parentheses ony if single argument
//Remove Curly brackets
//Remove the return keyword
//Single line function expression, with single argument - No parentheses 
var sq2 = a => a*a;
console.log(sq2(2));
console.log(typeof(sq2));

//Single line function expression,No arguments
var sum = () => 1+2;
console.log(sum());

//Single line function expression, with multiple arguments
var sum = (a,b) => a+b;
console.log(sum(1,2));

//multiple line expression, with multiple arguments, we use curly brackets
var sum = (a,b) => {console.log(a+b);console.log(a*b);}
sum(1,2);