var studentSingle =
    {"name":"bee","Class":"A","Age":23,
    "Marks":
        {"Physics":22,"Chemistry": 24,"Maths":29}
    };

console.log(
`Value of student is ${studentSingle}
Value of name is ${studentSingle.name}
Value of class is ${studentSingle.Class}
Value of age is ${studentSingle.Age}
-----------------------------------
Type of name is ${typeof(studentSingle.name)}
Type of class is ${typeof(studentSingle.Class)}
Type of age is ${typeof(studentSingle.Age)}
Type of Marks is ${typeof(studentSingle.Marks)}
-----------------------------------
Value of Marks is ${studentSingle.Marks}
Value of Physics Marks is ${studentSingle.Marks.Physics}
Value of Chemistry Marks is ${studentSingle.Marks.Chemistry}
Value of Maths Marks is ${studentSingle.Marks.Maths}
-----------------------------------`);    

for(key in studentSingle) {
    if(studentSingle.hasOwnProperty(key)) {
        var value = studentSingle[key];
        console.log(`Name --> ${value} -- Type --> ${typeof(value)}`)
    }
}

Object.keys(studentSingle).map(k => console.log(
    `${studentSingle[k]}`))

//Array of Objects
var studentMultiple = [
    {"name":"bee","Class":"A","Age":23,
    "Marks":
        {"Physics":22,"Chemistry": 24,"Maths":29}
    },
    {"name":"Archie","Class":"A","Sex":"M","Age":23,
    "Marks":
        {"Physics":20,"Chemistry": 20,"Maths":20}
    }
];

//Accessing Array of Objects as Type String/Numeric
for (i in studentMultiple) 
Object.keys(studentMultiple[i]).map(k => console.log(studentMultiple[i][k]))
//Accessing Array of Objects as Type Object
Object.keys(studentMultiple).map(k => console.log(studentMultiple[k]))

//even-sqaure,odd-cube using map function
let arr = [1,2,3,4,5]

//Object.keys(arr).map(function(k)
// k =[0,1,2,3,4] by default the enumerator is set to position value in an array
arr2 = Object.keys(arr).map(function(k){
    if (k%2 === 0)
    {
        return arr[k] * arr[k];
    }
    else
    {
        return arr[k]*arr[k]*arr[k];
    }    
})

