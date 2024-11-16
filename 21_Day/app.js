let fruits = ["apple", "mango", "banana", "pomegranate"];

// foreach
// fruits.forEach(() => {
//   return "Hello";
// }); // undefined

// fruits.forEach(() => {
//   console.log("Hello World"); // print arr.length times
// });

// fruits.forEach((elem, index) => {
//   console.log(elem, index);
// });

// Map - return new array perform operation on each elem and store in new arr length equal to arr.
// if we dont use return statement each item is undefined in new arr

// let fruitsLength = fruits.map((elem) => elem.length);

// console.log(fruitsLength);

// filter -> return new array here we pass condition in callback if condition is true it store the elem in new arr

// let newFruits = fruits.filter((elem) => {
//   return elem.length > 7;
// });

// console.log(newFruits);

// Every  - true if every elem in an arr gives true for some func

// let evens = [2, 4, 6, 8];

// console.log(
//   evens.every((elem) => {
//     return elem % 2 == 0;
//   })
// );

// sum -> return true if any elem return true for some func

// console.log(
//   [1, 2, 3, 5, 6].some((elem) => {
//     return elem % 2 == 0;
//   })
// );

// reduce -> reduce arr to single value
// reduce callback takes two parameter accumulator and elem in first iteration acc value is 0 and second its value equal to return value of callback.
console.log([1, 2, 3].reduce((acc, elem) => acc + elem));

// default parameter give the default value to parameter it must be last in parameter list

// function sum(a, b = 1) {
//   console.log(a + b);
// }

// spread operator expand iterable into multiple values
// let numbers = [1, 2, 3, 4];
// console.log(Math.min(...numbers));

// spread operator - allow func to take n no of arguments it bundle them into arr it must be last in parameter list

// function sum(a, ...rest) {}

// arr destructuring - storing values of an arr into multiple variables

// let [winner, runnerUp] = ["osama", "ali", "abdullah"];
// console.log(winner, runnerUp);

// obj destructuring - store value of keys in variable
// if key not found in obj variable value is undefined

// let student = {
//   name: "osama",
//   age: 25,
//   course_enrolled: ["SMIT"],
// };

// here we pass default val to parameter incase key not found
// let { name: name = "osama", courses: courses = [] } = student;
// let { name: naam = "bilal", course_enrolled = [] } = student;

// console.log(name, courses);
// console.log(naam, course_enrolled);
