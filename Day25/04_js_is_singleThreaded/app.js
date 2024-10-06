// Single threaded one line exec at a time
// synchronous nature

console.log("Hello World");
console.log("Hello World 2");

// dealing with single threaded nature
// asynchronous nature
setTimeout(function () {
  console.log("sapna college");
}, 2000);
setTimeout(function () {
  console.log("hello world");
}, 2000);

console.log("hello ...");
