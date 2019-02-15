let arr = [1,2,3,4,5]
//even-sqaure,odd-cube using map function
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
console.log(arr2);
//even-sqaure,odd-cube using for loop
var arr2=[]
for(var i=0;i<arr.length;i++){
    if ((i%2) === 0)
    {
        arr2[i] = arr[i] * arr[i];
    }
    else
    {
        arr2[i] = arr[i]*arr[i]*arr[i];
    }    
}
console.log(arr2);
//even-sqaure,odd-cube using forEach
var arr2=[];
arr.forEach(function(k){
    if ((k%2) === 0)
    {
        arr2[k] = arr[k] * arr[k];
    }
    else
    {
        arr2[k] = arr[k]*arr[k]*arr[k];
    }    
})
console.log(arr2);
// Javascript hoisting
console.log(a);
var a = 10;
console.log("10" + 20 + 30); 
console.log(10 + 20 + "30");
