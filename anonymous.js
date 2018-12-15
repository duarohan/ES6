function mul (a){
    return function (b){
        return function (c){
            return a*b*c;
        }
    }
}

var mulArrow = a => b => c => a*b*c;

console.log(mul(2)(3)(4));

console.log(mulArrow(2)(3)(4))