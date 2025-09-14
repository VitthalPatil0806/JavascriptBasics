// note - forEach does not return any value

// const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.filter( (num) => num > 4) // for this line if we use curley braces for arrow function then use return keyword is must otherwise it return empty array []
// console.log(newNums);.

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);

// const newNums = myNumbers.map((n) => n * 10).map((n) => n + 1).filter((f) => f >= 40) // this is called chaining
// console.log(newNums);

// reduce
// const total = myNumbers.reduce((acc, curVal) => acc + curVal, 0)
// console.log(total);
// reduce mostly used in shopping carts to collect total amount