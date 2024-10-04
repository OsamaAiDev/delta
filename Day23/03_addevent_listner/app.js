let btns = document.querySelectorAll("button");

for (let btn of btns) {
  // not possible only last one sayName call.
  //   btn.onclick = sayHello;
  //   btn.onclick = sayName;

  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);
  btn.addEventListener("dblclick", () => {
    alert("double clicked");
  });
}

function sayHello() {
  console.log("Hello");
}

function sayName() {
  console.log("Osama");
}
