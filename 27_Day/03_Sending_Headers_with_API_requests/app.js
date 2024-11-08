let url = "https://icanhazdadjoke.com";

async function getRandomJoke() {
  const config = { headers: { Accept: "application/json" } };
  let res = await axios.get(url, config);
  console.log(res.data.joke);
}
