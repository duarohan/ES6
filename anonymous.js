function mul (a){
    return function (b){
        return function (c){
            return a*b*c;
        }
    }
}

//var mul = a => b => c => a*b*c;

console.log(mul(2)(3)(4))