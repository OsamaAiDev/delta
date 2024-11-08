let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // let user = document.querySelector("#user");
  // let pass = document.querySelector("#pass");
  // alert(`Hi ${user.value}, your password set to ${pass.value}`);
  // another way to select inside form elements
  let user = this.elements[0];
  let pass = this.elements[1];
  alert(`Hi ${user.value}, your password set to ${pass.value}`);
});
