// https://catfact.ninja/fact  - Sends random cat facts.
// https://www.boredapi.com/api/activity - Sends an activity to do when bored.
// https://dog.ceo/api/breeds/image/random - Sends cute dog pictures.

// Accessing json data

let jsonRes =
  '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';
// console.log(jsonRes.fact); // not possible with json undefined
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

// async function getRandomCatFacts() {
//   let jsonResponse = await fetch("https://dog.ceo/api/breeds/image/random");
//   console.log(jsonResponse);
// }

// getRandomCatFacts();
