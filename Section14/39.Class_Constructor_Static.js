// class User {
//     constructor (username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword () {
//         return `${this.password}xyz`
//     }
//     toUpprCase () {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const usr = new User("vithhal", "vit@gmail.com", "1234")
// console.log(usr.encryptPassword());
// console.log(usr.toUpprCase());

// same above code we can do  in below format using prototype-

function User (username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}xyz`
}

User.prototype.toUparCase = function () {
    return `${this.email.toUpperCase()}`
}

const chai = new User("vitthal", "v@gmail.com", "1234")
console.log(chai.encryptPassword());
console.log(chai.toUparCase());

