let user = document.querySelector("#user");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// when input value change and click anywhere its trigered
// track only between of initial and final value
// user.addEventListener("change", function () {
//   console.log("change event");
//   console.log("final value=", this.value);
// });

// occur on each change
user.addEventListener("input", function () {
  console.log("input event");
  console.log("final value=", this.value);
});
