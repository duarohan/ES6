var student = {"name":"bee","Class":"A","Age":2,"Marks":{"Physics":22,"Chemistry": 24,"Maths":29}};

console.log(`
Value of name is ${student.name}
Value of class is ${student.Class}
Value of age is ${student.Age}
Value of Marks is ${student.Marks}
Value of student is ${student}
`);

//Backtick or + , operators for string concatenation
//does not convert the object into JSON format, 
//we have to use JSON.stringify 
console.log(student);
console.log(student.Marks);

console.log(`
Value of name is ${student.name}
Value of class is ${student.Class}
Value of age is ${student.Age}
Value of Marks is ${JSON.stringify(student.Marks)}
Value of student is ${JSON.stringify(student)}
`);

console.log('Value of name is'+ student);
console.log('Value of Marks is' + student.Marks);

console.log('Value of name is'+ JSON.stringify(student));
console.log('Value of Marks is' + JSON.stringify(student.Marks));