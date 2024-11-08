// select first btn
// let btn = document.querySelector("button");
// log button obj on console
// console.dir(btn);
// here we set the onlick property value to a func this func will  trigred everytime when btn is clicked.
// btn.onclick = function () {
//   console.log("button was clicked");
// };

function sayHello() {
  alert("Hello");
}

// btn.onclick = sayHello;

let btns = document.querySelectorAll("button");
for (let btn of btns) {
  btn.onclick = sayHello;
  btn.onmouseenter = function () {
    console.log("You enter the btn");
  };
  console.dir(btn);
}
