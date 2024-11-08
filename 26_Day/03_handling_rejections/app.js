let h1 = document.querySelector("h1");

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let no = Math.floor(Math.random() * 5) + 1;
      if (no > 3) {
        reject("Promise rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}!`);
      resolve("color changed!");
    }, delay);
  });
}

async function show() {
  try {
    await colorChange("violet", 1000);
    await colorChange("indigo", 1000);
    await colorChange("green", 1000);
    await colorChange("yellow", 1000);
    await colorChange("orange", 1000);
  } catch (e) {
    console.log("error caught", e);
  }
  let a = 10;
  console.log(a);

  return "done";
}
