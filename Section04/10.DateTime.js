// const date = new Date()
// console.log(date); // it returns utc format of date -> 2025-08-25T07:10:11.533Z
// console.log(date.toString()); // it returns string format of date -> Mon Aug 25 2025 12:40:11 GMT+0530 (India Standard Time)
// console.log(date.toLocaleString()); // -> 25/8/2025, 12:42:01 pm
// console.log(date.toLocaleDateString()); // -> 25/8/2025
// console.log(typeof date); // -> object
// const date = new Date(2023, 0, 23) // 2023-01-22T18:30:00.000Z
// const date = new Date(2023, 0, 23, 5, 3)
// const dates = new Date("01-14-2023")
// console.log(dates.toLocaleString());

// let myTimeStamp = Date.now() // it returns milliseconds from 1970 to till date
// console.log(myTimeStamp);
// console.log(dates.getTime()); // it returns milliseconds from 1970 to given date

// console.log(Math.floor(Date.now()/1000)); // it returns seconds of conversion of milliseconds

// const newDate = new Date()
// console.log(newDate.getDate()); // return current day date like this for month and yr present

// console.log(newDate.toLocaleString('default', {
//     weekday: "short"
// })); // used when want to format date