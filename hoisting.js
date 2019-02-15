//Use of backtics
//Types of datatypes
//var/no var doesn't matter - variable hoisting

//Datatype when space is assigned - string
var y = '';
console.log(`Value of y is ${y}`);
console.log(`Type of y is ${typeof(y)}`);

//Datatype when number is assigned - number
var z = 1;
console.log(`Value of z is ${z}`);
console.log(`Type of z is ${typeof(z)}`);

//Datatype when boolean is assigned - boolean
var d = true;
console.log(`Value of d is ${d}`);
console.log(`Type of d is ${typeof(d)}`);

//Datatype when object is assigned - object
var g = {"name":"bee","Class":"A","Age":2};
console.log(`Value of name is ${g.name}`);
console.log(`Value of class is ${g.Class}`);
console.log(`Value of age is ${g.Age}`);
console.log(`Type of name is ${typeof(g.name)}`);
console.log(`Type of class is ${typeof(g.Class)}`);
console.log(`Type of age is ${typeof(g.Age)}`);

//Datatype when Array is assigned - object
var Arr = []
console.log(`Value of Arr is ${Arr}`);
console.log(`Type of Arr is ${typeof(Arr)}`);


//Datatype when datatype is hoisted and number is assigned - number
a = 1;
console.log(`Value of a is ${a}`);
console.log(`Type of a is ${typeof(a)}`);

//Datatype when datatype is hoisted and number is assigned - string
b = 'a';
console.log(`Value of b is ${b}`);
console.log(`Type of b is ${typeof(b)}`);

e = false;
console.log(`Value of e is ${e}`);
console.log(`Type of e is ${typeof(e)}`);

//Differece between Null and undefined
var f;
console.log(`Value of f is ${f}`);
console.log(`Type of f is ${typeof(f)}`);

//Datatype when null is assigned - object
var x = null;
console.log(`Value of x is ${x}`);
console.log(`Type of x is ${typeof(x)}`);

//Datatype when object is assigned - object
var student = {"name":"bee","Class":"A","Age":2,"Marks":{"Physics":22,"Chemistry": 24,"Maths":29}};
console.log(`Value of student is ${student}`);
console.log(`Value of name is ${student.name}`);
console.log(`Value of class is ${student.Class}`);
console.log(`Value of age is ${student.Age}`);
console.log(`Type of name is ${typeof(student.name)}`);
console.log(`Type of class is ${typeof(student.Class)}`);
console.log(`Type of age is ${typeof(student.Age)}`);
console.log(`Type of Marks is ${typeof(student.Marks)}`);
console.log(`Value of Marks is ${student.Marks}`);
console.log(`Value of Physics Marks is ${student.Marks.Physics}`);
console.log(`Value of Chemistry Marks is ${student.Marks.Chemistry}`);
console.log(`Value of Maths Marks is ${student.Marks.Maths}`);

for(key in student) {
    if(student.hasOwnProperty(key)) {
        var value = student[key];
        console.log(`Name --> ${value} -- Type --> ${typeof(value)}`)
    }
}
// Object.keys(student)
// Object.keys(student).map(k => console.log(student[k]))
// Object.keys(student).map(k => console.log(`Type --> ${typeof(student[k])} --- Name --> ${student[k]} -- `))

console.log("last operation")
console.log(typeof(typeof(1)))

let lnum  = 10;
console.log(`Value of let lnum is ${lnum}`);

lnum  = 12;
console.log(`Value of let lnum is ${lnum}`);

var num  = 10;
console.log(`Value of let vnum is ${num}`);

num  = 12;
console.log(`Value of let vnum is ${num}`);

//variable typing
var stringNum = 10;
stringNum = "string"
console.log(stringNum);

