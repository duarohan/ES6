usersList  = [
    { name : "Rohan", status : "Active",id : 1},
    { name : "Swati", status : "Active",id : 2},
    { name : "Amit", status : "Active", id : 3 },
    { name : "Shivam", status : "Inactive",id : 4}
  ];

var nameStr = "Shivam" ;  
(() =>{
  objIndex = usersList.findIndex((obj => obj.name === nameStr));
  console.log(objIndex);
  usersList[objIndex].status = "Active";
})(nameStr);
 
console.log(usersList);