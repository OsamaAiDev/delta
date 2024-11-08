let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
  this.style.backgroundColor = "red";
  console.log(this.innerText);
}

// btn.addEventListener("click", function () {
//   //   console.log(this.innerText);
//   //   console.dir(this);
//   this.style.backgroundColor = "red";
//   this.innerText = "clicked";
// });

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
