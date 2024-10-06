let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  setTimeout(() => {
    h1.style.color = color;
  }, delay);
}

changeColor("red", 1000);
changeColor("green", 2000);
changeColor("blue", 3000);
