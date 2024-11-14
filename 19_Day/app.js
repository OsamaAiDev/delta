// func definition include func name, parameter it will take and the task
// if we not pass val tu parameter its value is undefined
// the code after return statement not run in func

function sum(a, b) {
  console.log("a", a);
  console.log(a + b);
  return a + b;
  console.log("this statement never run");
}

sum(); // NaN
console.log(sum); // return func definition

// func expression another way to write func
// mostly use when we pass func as an argument to another func
// its an anonymous nameless func

// let add = function (a, b) {
//   return a + b;
// };
// console.log(add); // return func definition
// console.log(add(2, 2)); // func call

// add(2 + 2); // err

// Higher order func

// does one or both

// take func as an arg or return a func
