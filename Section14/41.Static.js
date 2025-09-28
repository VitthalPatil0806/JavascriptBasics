class User {
    constructor (username) {
        this.username = username
    }

    logMe () {
        console.log(`username is ${this.username}`);
    };

    static userId () { // to avoid access this method and keep unique we use static
        return 123;
    }
}

const chai = new User("sourabh")
// console.log(chai.userId()); // due to static we can't access it

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const coffee = new Teacher('user', 'user@gmail.com')
coffee.logMe()
console.log(coffee.userId()); // in child method also we can't access static method

