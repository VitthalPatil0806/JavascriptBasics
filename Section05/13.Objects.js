// when  object become with constructor then it is a singleton and when become with literal then it is not singleton

const mySym = Symbol("key1") // interview Q. how write and declare symbol in object

const obj = {
    name: "vitthal",
    age: 25,
    married: false,
    "full Name": "vitthal patil",
    [mySym]: "value123" // iQ.
}

// console.log(obj.age); 
// console.log(obj["full Name"]); // mostly use this way to access object elements
// console.log(obj[mySym]); iQ

// obj.age = 26
// Object.freeze(obj) // freeze or lock object. after it not any change happens in object
// obj.age = 27

// obj.Greeting = () => {console.log("Hello js user");}
// obj.GreetingTwo = () => {console.log(`Hello js user, ${this.name}`)} // You're using an arrow function, which doesn't have its own this — it inherits this from its enclosing scope (which is likely the global scope or module). So this.name will be undefined.

obj.Greeting = function () {
    console.log("Hello js user");
}

obj.GreetingTwo = function () {
    console.log(`Hello js user ${this.name}`);
}
console.log(obj.Greeting());
console.log(obj.GreetingTwo());
