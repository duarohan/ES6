var sq = function(a){
    return a*a;
}
//Remove function keyword
//Remove parentheses ony if single argument
//Remove Curly brackets
//Remove the return keyword
 var sq2 = a => a*a;


console.log(sq(2));
console.log(sq2(2));

console.log(typeof(sq));
console.log(typeof(sq2));
