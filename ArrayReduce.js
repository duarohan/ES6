var euros = [2,2,2,2];

const average = euros.reduce((total, amount,index, array) => {
    total += amount
    return total/array.length
  },0);

console.log(average);