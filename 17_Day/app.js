// Array mutable linear collection of data (data structure)
let names = ["osama", "bilal", "ali"];
// in js everything is object
// console.log(typeof names);

let fruits = ["apple", "orange", "banana", "mango", "pinapple"];
fruits[12] = "strawberry";
// console.log(fruits);

// return the index of first occurance of search item in an array. -1 if not found
// console.log(fruits.indexOf("orange"));

// include search item and return boolean

// console.log(names.includes("osama"));

// pop, shift (remove and return item)
// push, unshift (add item)

// combine two or more than two arr return new arr
// console.log(names.concat(fruits));

// names.reverse();

// console.log(names);

// slice return part of an array as a new array
// both start and end index parameter are optional
// if we not specify any creates a copy of array. If start index is wrong we get empty array
// console.log(names.slice());

// splice removes, replaces, add elements in place.
// splice(start, deleteCount, items..)
// only start remove and return removed items array
// let removedNames = names.splice(1);
// console.log("remove names", removedNames);

// array references

let arr1 = [1, 2];
let arr2 = [1, 2];
console.log(arr1[0] === arr2[0]); // true yaha value compare kr raha hn
console.log(arr1 == arr2); // false yaha addresses compare ho raha hn
console.log([1] == [1]); // false reference compare ho raha hn

// arr3 = arr1; // reference

// constant array
// can't reassign but can perfrom crud

// const prices = ["10$", "30$"];
// prices = names;
// console.log(prices); //err

// nested array means ek chez ma similar chez ko add krna
// arr is rows and index are colum
const ticTacToe = [
  ["x", "", "0"],
  ["", "x", ""],
  ["0", "", "x"],
];

console.log(ticTacToe);

// Array methods
// pop, shift,unshift,push,includes,indexOf,slice,splice,concat,reverse,sort,map,filter,forach,reduce
