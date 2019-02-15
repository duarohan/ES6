//scope of this variable is global(only initialization)
a = 4;
//scope of this variable is global(initialization and declaration)
var c = 30;
//scope of this variable is global(only declaration)
var d;

//self invoking function
(() =>
{
    //not initialized -- undefined
    console.log(d);    
    //declared within scope (declaration hoisted, value undefined)
    console.log(b);
    //scope global within scope
    //console.log(e);
    
    d = 20;   
    e = 50;
    var b = 20;
    console.log(b);
    console.log(a);
    console.log(c);
})()
console.log(d);
