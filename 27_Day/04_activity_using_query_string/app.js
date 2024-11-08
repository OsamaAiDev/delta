let url = "http://universities.hipolabs.com/search?name=";
// let country = "pakistan";
let btn = document.querySelector("button");

async function getUniversities(country) {
  try {
    let result = await axios.get(url + country);
    return result.data;
    // console.log(result);
  } catch (e) {
    // console.log("Err", e);
    return [];
  }
}

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  document.querySelector("input").value = "";
  console.log("Country:", country);
  let universities = await getUniversities(country);
  //   console.log(universities);
  show(universities);
});

function show(universities) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (let university of universities) {
    let li = document.createElement("li");
    li.innerText = university.name;
    list.appendChild(li);
    // console.log(university.name);
  }
}
