// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter); // ->{
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // we can't change value of pi coz for it disable property of writable with hardcoded

// const chai = {
//     name: 'lahsun chai',
//     price: '2000 per cup',
//     isAvailable: 'on demand only'
// }

// console.log(Object.getOwnPropertyDescriptor(chai, "name")); -> {
//   value: 'lahsun chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Object.defineProperty(chai, "name", { // we can create our own property rule here
//   writable: false,
//   enumerable: false,
//   configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// const coffee = {
//     name: 'black coffee',
//     price: '2000 per cup',
//     isAvailable: 'on demand only',

//     orderChai: function () {
//         console.log('coffee not made');
        
//     }
// }

// Object.defineProperty(coffee, 'name', {
//     enumerable: false
// }) // here we apply enumrable property on name due to it is not iteratable

// for (let [key, value] of Object.entries(coffee)){
//     if (typeof value !== 'function') {
//         console.log(`${key}: ${value}`);
//     }
// }