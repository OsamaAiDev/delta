async function greet() {
  return "hello world!"; // returns a promise
}

let hello = async () => {
  throw "some random error";
  return "never execute";
}; // returns a promise state is rejected

greet()
  .then((data) => {
    console.log("promise was resolved with data", data);
  })
  .catch((err) => {
    console.log("promise was rejected with error:", err);
  });
