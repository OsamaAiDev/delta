// function getNo() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let no = Math.floor(Math.random() * 10) + 1;
//       console.log(no);
//       res();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNo();
//   await getNo();
//   await getNo();
// }

let h1 = document.querySelector("h1");

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}!`);
      resolve("color changed!");
    }, delay);
  });
}

async function show() {
  await colorChange("violet", 1000);
  await colorChange("indigo", 1000);
  await colorChange("green", 1000);
  await colorChange("yellow", 1000);
  await colorChange("orange", 1000);

  return "done";
}
