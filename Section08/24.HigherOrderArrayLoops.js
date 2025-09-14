// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', 'United State of America')
// map.set('IN', 'India')

// console.log(map); // -> Map(2) { 'IN' => 'India', 'USA' => 'United State of America' }

// for (const [key, value] of map) {
//     console.log(key, ':-', value); // -> IN :- India USA :- United State of America
// } 

// note map is iteratable using for of but object are not.

//  const myObject =  {
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four'
//  }

//  for (const key in myObject) {
    // console.log(myObject[key]); // -> one, two, three, four
    // console.log(key); // -> 1, 2, 3, 4
//  }

// note -> we can iterate for in loop over array also and for key they return index and for values actual array values. we can't iterate for in over map.

// forEach loops 
// const nums = [1,2,3,4,5,6,7,8]
// nums.forEach((e) => {
//     console.log(e);
// })