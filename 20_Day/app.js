// try catch mostly use when use api the code below try will also run incase of err in try block
// try will not work without catch block
// try {
//   console.log(a);
// } catch {
//   console.log("error");
// }

// console.log("I am also run because of try and catch");

// arrow func short syntax of func expression not hosited
// nameless func doest not have func kw
// use mostly when we func as an argument to another func
// let sum = (a, b) => a + b;

// console.log(sum);

// setTimout

// setTimeout(() => {
//   console.log("Hello World");
// }, 1000);

// console.log("Welcome I am not dependent on setTimeout");

// setInterval exec callback again and again after specified time
// to stop it we store its id in variable and use clearInterval func and pass id as an arg

// let id = setInterval(() => {
//   console.log("Call from set Interval");
// }, 2000);

// console.log(id);
// clearInterval(id); // here we clear id immediately so setInterval exec 0 time
// console.log("I am not dependent of setInterval");

// Arrow func

const student = {
  name: "osama",
  age: 25,
  prop: this, // global scope,
  getName: function () {
    return this.name; // scope calling obj
  },
  getAge: () => {
    return this.age; // lexical scope parent scope (undefined)
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // std obj (here arrow func ka parent function h setTimeOut ma tu ya asa callback pass ho raha ha)
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // window obj
    }, 2000);
  },
};
console.log(student);
console.log(student.getName());
console.log(student.getAge());
console.log(student.getInfo1());
console.log(student.getInfo2());
