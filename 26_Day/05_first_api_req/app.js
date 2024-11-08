let url = "https://catfact.ninja/fact";
// fetch(url);

// go to network tab yaha req show hn ge jo hm na send ke hn
// fact req pr click kre ga response tab ma res show ho ga.

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     // data readable form ma a jaye ga ya bhe ek promise return kre ga
//     // console.log(res.json());
//     res.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// refactor above code
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("data1 = ", data.fact);
    return fetch(url);
  })
  .then((res) => {
    return res.json();
  })
  .then((data2) => {
    console.log("data2 = ", data2.fact);
  })
  .catch((err) => {
    console.log("ERROR = ", err);
  });
