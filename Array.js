// var Arr = [2,4,6,8,10]
// //output  Arr2=[4,8,12,16,20]
// Arr2 = Object.values(Arr).map(k => k *2);

var euros = [2,2,2,2];

const average = euros.reduce((total, amount,index, array) => {
    total += amount
    return total/array.length
  },0);

console.log(average);