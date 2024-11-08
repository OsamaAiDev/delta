// Comparsion operator

console.log(
  "== compare only value and it perform type coercion try to convert one or both operand to the same type before comparision"
);

console.log(123 == "123"); // true
console.log(" " == 0); // true
console.log(null == undefined); // true
console.log(NaN == NaN); // false NaN is a special No not equal to any number

console.log("=== compare both value and type not perform implicit coercion");

console.log(0 === false); // false
console.log(null === undefined); // false

// conditional Statments
console.log("If statement");

if (" ") console.log("true");

// logs

console.error("Error");
console.warn("Warning");
