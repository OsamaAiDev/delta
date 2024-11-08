let btn = document.querySelector("button");
let textBox = document.querySelector("input");

// btn.addEventListener("click", function (event) {
//   console.log(event);
// });

// textBox.addEventListener("keydown", function () {
//   console.log("key pressed");
// });
textBox.addEventListener("keyup", function (event) {
  console.log("key was released");
  console.log(`You pressed ${event.key}`);
});
