// const num = 100
// console.log(num);

// const num2 = new Number(300)
// console.log(num2); // it specify that value datatype is number
// console.log(num2.toString().length); // convert number to string and find its length

// const num3 = 5.56689
// console.log(num2.toFixed()); // this is used to round the number to its nearest one. it returns 6

// const num4 = 5.56789
// console.log(num4.toFixed(2)); // this returns to round the number and nearest one of given number. for e.g. for 2 -> 5.57, for 3 -> 5.568, for 4 -> 5.5679 like that

// const num5 = 15.56789
// console.log(num5.toFixed(2)); // also it returns round of number which comes after decimal

// const num6 = 0.001658853;
// console.log(num6.toPrecision()); // 0.001658853
// console.log(num6.toPrecision(1)); // 0.002 if value is 0.001358853 then -> 0.001
// console.log(num6.toPrecision(2)); // 0.0017
// console.log(num6.toPrecision(3)); // 0.00166
// console.log(num6.toPrecision(4)); // 0.001659 and so on

// const num7 = 1123.4564;
// console.log(num7.toPrecision(3)); // it returns 1.12e+3 coz due to length is less than number of point.

// const num8 = 123.4564;
// console.log(num8.toPrecision(4)); // it returns 123.5

// note - precision always returns round of number of given length. it can't give precision of zero number

// const hundres = 1000000
// console.log(hundres.toLocaleString()); // -> 10,00,000
// console.log(hundres.toLocaleString('en-US')); // -> 1,000,000

// console.log(Math.abs(-4)); // used to convert -ve to +ve value

// console.log(Math.round(3.4)); // returns nearest number based on number after decimal.
// 3.4 and below -> 3; 3.5 and above -> 4

// console.log(Math.ceil(3.2)); // if want to top value then use it -> 4
// console.log(Math.floor(3.8)); // if want to lower value then use it -> 3

// console.log(Math.max(2,3,5,6,1)); // returns max value
// console.log(Math.min(7,3,5,2,9)); // returns min value

// console.log(Math.random() * 10 + 10);

// function add (max, min) {
//    return Math.floor(Math.random() * (max - min + 1)) + min
// }

// console.log(add(20, 150)); //  this example show random number between given range