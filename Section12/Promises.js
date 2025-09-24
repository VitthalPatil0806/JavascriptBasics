// 1. // const promiseOne = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log('async task is complete'); 
//         resolve() 
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log('promise consumed');
// }) /

// both task perform same
// 2. // new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function (){
//     console.log("Async 2 resolved");
// })

// 3. // const promiseThree = new Promise(function (res, rej) {
//     setTimeout(function(){
//         res('vitthal patil') // here we can pass anything like string, array, object, numbers...
//     }, 1000)
// })

// promiseThree.then(function (name) {
//     console.log(name);
// })

// const promiseFour = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let error = true
//         if(!error) {
//             res({username:'vitthal', password:'1234'})
//         } else {
//             rej('error found')
//         }
//     }, 1000)
// })

// note - we can't store return type from promiseFour.then to store it use another .then
// promiseFour.then((obj) => {
//     console.log(obj);
//     return obj.username
// }).then((username) => { // here we get return value 
//     console.log(username);
// }).catch(function (error) {
//     console.log(error)
// }).finally(() => {
//     console.log('finally come here'); // this line execute always either promise reject or resolve
// })


// const promiseFive = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let err = true
//         if (!err) {
//             res({userName: 'vitthal', password: '1234'})
//         } else {
//             rej('error found')
//         }
//     }, 1000)
// })

// async function consumePromiseFive () {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (err) {
//         console.log(err);
//     }
    
// }

// consumePromiseFive()

// async function getAllUsers() { // this code have err of fetch
//     try {
//         const response = await fetch('https://dummyjson.com/products')
//         const data = await response.json()
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getAllUsers()


// fetch('https://dummyjson.com/products') // this code have err of fetch
// .then((res) => {
//     return res.json
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => console.log(err)
// )