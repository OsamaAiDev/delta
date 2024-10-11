let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let image = document.querySelector("#result");

async function getImage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    return "No Image found";
  }
}

btn.addEventListener("click", async () => {
  let link = await getImage();
  image.setAttribute("src", link);
  console.log(link);
});
