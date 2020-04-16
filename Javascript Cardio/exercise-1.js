function reverseString(value){
    return value.split('').reverse().join('')
  }
  
  function isPalindrome(value){
    if(typeof value === 'number'){
      return reverseInt(value)
    }
    let reverseString = value.split('').reverse().join('')
    return value === reverseString
  }
  
  function reverseInt(value){
    return parseInt(value.toString().split('').reverse().join(''))
  }
  
  function capitalize(value){
    let result = value.split(' ').reduce((acc,el)=>{
      let word = el.split('')
      word[0] = word[0].toUpperCase()
      acc.push(word.join(''))
      return acc
    },[])  
    return result.join(' ')
  }
  
  function maxCharacter(value){
    let result = value.split('').reduce((acc,el)=>{
      if(acc[el]){
        acc[el]++
      }else{
        acc[el] = 1 
      }
      return acc
    },{})
    maxValue = Object.keys(result).reduce((a,b) => result[a] > result[b] ? a : b)
    return maxValue
  }
  
  function fizzBuzz(){
    array = new Array(100).fill(100)
    for (i in array){
      array[i] = parseInt(i) + 1
      array[i] = array[i] % 3 === 0 ? 'Fizz' : array[i]
      array[i] = array[i] % 5 === 0 ? 'Buzz' : array[i]
    }
    return array
  }
  
  function longestWord(value){
    value = value.replace(/,|\.|\s/g,' ').trim()
    valueObj = value.split(' ').reduce((acc,el)=>{
        acc[el] = el.length
        return acc
    },{})
    let maxValue = 0;
    return Object.keys(valueObj).reduce((acc,el)=>{
      if (valueObj[el] >= maxValue){
        maxValue = valueObj[el]
        acc.push(el)
      }
      return acc
    },[])
  }
  
  function chunkArray(value =[], chunks = 0){
    chunkArr = []
    console.log(value.length)
    while(value.length != 0 ){
      chunkArr.push(value.slice(0,chunks))
      value.splice(0,chunks)
    }
    return chunkArr;
  }

console.log(reverseString('elle'))
console.log(isPalindrome('elle'))
console.log(isPalindrome(1234))
console.log(capitalize('every dog has his day'))
console.log(maxCharacter('javascript'))
console.log(fizzBuzz().join(','))
console.log(longestWord('Daytona is a sick track for trekkin.'))
console.log(chunkArray([1,2,3,4,5,6,7,9,10],3))
