// const user = {
//     username: "vitthal",
//     price: 999,

//     welcomeMsg: function () {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this) // represent current function call return of object and current object
//     },
// }

// user.welcomeMsg()
// user.username = "sourabh"
// user.welcomeMsg()

// console.log(this); // return empty object in node env and return window object in browser console

// this importance

// function chai () {
//     console.log(this); // return methods in this
//     let username = "vitthal"
//     console.log(this.username); // -> undefined
// }
// chai()

// const chai = () => {
//     let username = "sourabh"
//     console.log(this); // it returns empty object
// }

// chai()


// arrow function 

// type 1 : explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));


// type 2: implicit return
// const addTwo = (num1, num2) =>  num1 + num2 // or
// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(3,4));

// const name = () => ({username: "hitesh"}) // for object
// console.log(name());