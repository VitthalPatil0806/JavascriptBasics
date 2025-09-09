// object assign

// const obj1 = {1:'a', 2:'b'}
// const obj2 = {3:'c', 4:'d'}
// const obj3 = {5:'e', 6:'f'}

// const obj4 = {obj1, obj2, obj3} // -> {
//   obj1: { '1': 'a', '2': 'b' },
//   obj2: { '3': 'c', '4': 'd' },
//   obj3: { '5': 'e', '6': 'f' } 
// }

// const obj4 = Object.assign(obj1, obj2, obj3) // -> { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } or
// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// const tinderUser = {name: "vitthal", age: 25, isLoggedIn: true}
// console.log(Object.keys(tinderUser)); -> [ 'name', 'age', 'isLoggedIn' ] can access keys of object
// console.log(Object.values(tinderUser)); -> [ 'vitthal', 25, true ] can access values of object
// console.log(Object.entries(tinderUser)); ->  [ [ 'name', 'vitthal' ], [ 'age', 25 ], [ 'isLoggedIn', true ] ] can access key and value in array pair format