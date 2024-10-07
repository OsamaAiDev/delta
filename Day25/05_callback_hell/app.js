let h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

// pehla color red kro jb red ho jaye tu green kro and then blue ya possible ho ha nextColorChange
// callback ke help sa. yaha callback ma nesting ho rahe ha. Easy to understand nai h callback nesting is lia is ko callback hell bolta hn.
changeColor("red", 1000, () => {
  changeColor("green", 1000, () => {
    changeColor("blue", 1000);
  });
});
