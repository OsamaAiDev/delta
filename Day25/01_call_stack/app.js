function hello() {
  console.log("hello");
}

function demo() {
  console.log("calling demo function");

  hello();
}
console.log("calling demo function");

demo();

console.log("done", "bye");
