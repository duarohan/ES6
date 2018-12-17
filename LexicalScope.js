isHaving = true;

if (isHaving){
var a = 2;
let b = 3;
const c = 4;
};

console.log(a);
//console.log(b);//Refernce Error
//console.log(c);//Refernce Error

let d=0;
const e = 0;
//const f; //Missing initializer in const declaration

d=3;
//e=4;//Assignment to constant variable
//e = e + 1;//Assignment to constant variable

console.log(d);