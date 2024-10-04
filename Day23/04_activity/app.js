let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let heading = document.querySelector("h1");
  let randomColor = getRandomColor();
  heading.innerText = randomColor;

  let box = document.querySelector("div");
  box.style.backgroundColor = randomColor;
});

function getRandomColor() {
  // plus 1 nai kia q k 0 sa start krna ha
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
