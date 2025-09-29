// class User {
//     constructor (username, email) {
//         this.username = username;
//         this.email = email
//     }

//     get username () {
//         return this._username.toUpperCase();
//     }

//     set username (value) {
//         this._username = value
//     }

//     get email () {
//         return this._email.toUpperCase()
//     }

//     set email (value) {
//         this._email = value
//     }
// }

// const usr = new User ('vip0806', 'v@gmail.com')
// console.log(usr.username);
// console.log(usr.email);

// note - don't assign direct value of constructor property in getter/setter method instead use _ otherwise show error on stack overload

// property based getter/setter

// function User (username, email) {
//     this._username = username;
//     this._email = email

//     Object.defineProperty(this, 'username', {
//     get: function username () {
//         return this._username.toUpperCase();
//     },
//     set: function username (value) {
//         this._username = value
//     }
//     })
//     Object.defineProperty(this, 'email', {
//     get: function email () {
//         return this._email.toUpperCase();
//     },
//     set: function email (value) {
//         this._email = value
//     }
//     })
// }

// const chai = new User('sourabh', 's@gmail.com')
// console.log(chai.email);
// console.log(chai.username);

// Object based getter/setter
const user = {
    _email: 'vp@gmail.com',
    _password: 'vp@123',

    get email () {
        return this._email.toUpperCase()
    },

    set email (value) {
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email);
