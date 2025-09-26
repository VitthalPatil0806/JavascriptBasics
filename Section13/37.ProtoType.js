// function multipleBy5 (num) {
//     return num * 5;
// }

// multipleBy5.power = 2
// console.log(multipleBy5(5)); -> 25
// console.log(multipleBy5.power); -> 2
// console.log(multipleBy5.prototype); -> {}

// prototype - it is prototypal behaviour of js like inheritance properties from parent into child. array, object and function means all things in js are object



// below createUser code indicates that we can create method like length, map, forEach for function also using prototype
// function createUser (username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function () {
//     return this.score++
// }

// createUser.prototype.printMe = function () {
//     console.log(`score is ${this.score}`);   
// }

// const chai = new createUser('chai', 25)
// const tea = new createUser('tea', 250)

// chai.printMe()
// console.log(chai.increment());
// console.log(chai.increment());
// console.log(tea.increment());
// console.log(tea.increment());

// notes - *** Here's what happens behind the scenes when the new keyword is used: A new object is created: The new keyword initiates the creation of a new JavaScript object. 

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. Thi means that it has access to properties and methods define on the constructor's prototype. 

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


// ***********
// below we have challenge that we need to create method when we apply it then it give trueLenght(by removing extra spaces)

// let str = 'chaiAurCode   '
// String.prototype.trueLength = function () {
//     console.log(`true length is ${this.trim().length}`);
// }
// console.log(str.trueLength());

// console.log(str.trim().length); // this return true length but we need to add trim always.

// let myHeros = ["Thor", "Spiderman"]

// let heroPower =  {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function () {
//         console.log(`spider power is ${this.spiderman}`); 
//     }
// }

// Object.prototype.Vitthal = () => {
//     console.log('Vitthal is present everywhere');
// } // here we create global property/method which is available in everywhere in js coz we assign to global object of js using prototype

// heroPower.Vitthal()
// myHeros.Vitthal()

// Array.prototype.heyVitthal = () => {
//     console.log('Hello Vitthal');
// }

// heroPower.heyVitthal() -> this give err coz we give property/method only to Array not object or global object

// myHeros.heyVitthal() -> give output proper


// below is example of prototypal inheritance which means we can access/put properties one object into another one using prototype
// const user = {
//     name: 'chai',
//     email: 'chai@gmail.com'
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = user
