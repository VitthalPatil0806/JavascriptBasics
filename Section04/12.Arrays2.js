const marvel = ["ironman","thor","dr.strenge"]
const dc = ["superman","batman","flash"]

// marvel.push(dc)
// console.log(marvel); // it takes another array as element

// const newArr = marvel.concat(dc)
// console.log(newArr); // it concant both array

// const allArr = [...marvel, ...dc]
// console.log(allArr); // it spread all the elements

// const another_array = [1,2,3,[4,5,[6,7],[8,9]],[10,[11,[12,[13]]]]]
// console.log(another_array); // -> [ 1, 2, 3, [ 4, 5, [ 6, 7 ], [ 8, 9 ] ], [ 10, [ 11, [Array] ] ] ]
// const real_another_array = another_array.flat(4)
// console.log(real_another_array); // -> [1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13] // flat return all nested array into single format. we can use infinte keyword instead of range if we don't know the range in flat

// console.log(Array.isArray("Vitthal")); // to check array or not
// console.log(Array.from("Vitthal")); // to convert into array

// console.log(Array.from({name: 'vitthal'})); // return [] coz not able to convert

// const num1 = 100
// const num2 = 200
// const num3 = 300
// console.log(Array.of(num1, num2, num3)); // return set of array