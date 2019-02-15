usersList  = [
    { name : "Rohan", status : "Active",id : 1},
    { name : "Swati", status : "Active",id : 2},
    { name : "Amit", status : "Active", id : 3 },
    { name : "Shivam", status : "Inactive",id : 4}
  ];


console.log(usersList.filter(data => data.status === 'Active'));
//console.log(Object.filter(usersList).map(data => data.status === 'Active'));