let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete");
  item.appendChild(deleteButton);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  // console.log(event.target);
  // console.log(event.target.nodeName);
  // console.log("button clicked");
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});

// let delButtons = document.querySelectorAll(".delete");

// for (let delButton of delButtons) {
//   delButton.addEventListener("click", function () {
//     let parent = delButton.parentElement;
//     console.log(parent);
//     parent.remove();
//   });
// }
