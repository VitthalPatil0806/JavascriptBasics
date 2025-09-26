// const user = {
//     userName: 'vitthal',
//     isSignIn: true,

//     getUserDetails: function () {
//         console.log(`Username: ${this.userName}`); // indicates current context
//         console.log(this); // -> return current object
        
//     }
// }   
// console.log(this); // -> empty object and window object in browser console

function Users (userName, loginCount, isLoggedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

// const userOne = Users('vitthal', 24, true)
// const userTwo = Users('udhav', 29, true) // here this values are override on above values
// console.log(userOne);

// const userOne = new Users('vitthal', 24, true) 
// const userTwo = new Users('udhav', 29, true) // new keyword create new instance for both objects due to that values are not getting override
// console.log(userOne);
// console.log(userOne.constructor);  // -> [Function: Users] this means constructor is reference about current object
// console.log(userTwo);

