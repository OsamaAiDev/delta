let content = document.querySelector("p");
let box = document.querySelector(".box");

content.addEventListener("click", function () {
  console.log("para was clicked");
});

box.addEventListener("mouseenter", function () {
  console.log("mouse inside box");
});
