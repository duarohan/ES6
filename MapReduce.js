//Datatype when object is assigned - object
// var student = [{"Student1":{"name":"bee","Class":"A","Age":23,"Marks":{"Physics":22,"Chemistry": 24,"Maths":29}}},
// {"Student2":{"name":"Archie","Class":"A","Age":23,"Marks":{"Physics":20,"Chemistry": 20,"Maths":20}}}];

var student = [{"name":"bee","Class":"A","Age":23,"Marks":{"Physics":22,"Chemistry": 24,"Maths":29}},
{"name":"Archie","Class":"A","Sex":"M","Age":23,"Marks":{"Physics":20,"Chemistry": 20,"Maths":20}}];

// console.log(`Value of student is ${student}`);
// console.log(`Value of name is ${student.name}`);
// console.log(`Value of class is ${student.Class}`);
// console.log(`Value of age is ${student.Age}`);
// console.log(`-----------------------------------`);
// console.log(`Type of name is ${typeof(student.name)}`);
// console.log(`Type of class is ${typeof(student.Class)}`);
// console.log(`Type of age is ${typeof(student.Age)}`);
// console.log(`Type of Marks is ${typeof(student.Marks)}`);
// console.log(`-----------------------------------`);
// console.log(`Value of Marks is ${student.Marks}`);
// console.log(`Value of Physics Marks is ${student.Marks.Physics}`);
// console.log(`Value of Chemistry Marks is ${student.Marks.Chemistry}`);
// console.log(`Value of Maths Marks is ${student.Marks.Maths}`);
// console.log(`-----------------------------------`);

// for(key in student) {
//     if(student.hasOwnProperty(key)) {
//         var value = student[key];
//         console.log(`Name --> ${value} -- Type --> ${typeof(value)}`)
//     }
// }

// console.log(Object.keys(student))
for (i in student) 
Object.keys(student[i]).map(k => console.log(student[i][k]))
// Object.keys(student).map(k => console.log(`${k} of type ${typeof(student[k])} having value ${student[k]}`))
