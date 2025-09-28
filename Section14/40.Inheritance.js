class User {
    constructor (username) {
        this.username = username
    }

    logMe () {
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor (username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCouse () {
        console.log(`new course added by ${this.username}`);
    }
}

const chai = new Teacher("vitthal", "vitthal@g.com", "0806")
// chai.addCouse()
// chai.logMe()

const usr = new User("sourabh")
// usr.logMe()

// console.log(chai === usr); -> false
// console.log(chai === Teacher); -> false

// console.log(chai instanceof Teacher); -> true
// console.log(chai instanceof User); -> true


