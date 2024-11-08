// function savetoDb(data, success, failure) {
//   internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     // console.log("data saved to db", data);
//     success();
//   } else {
//     // console.log("Data not saved internet speed is not stable");
//     failure();
//   }
// }

// savetoDb(
//   "apna school",
//   () => {
//     console.log("data was saved to db");
//     savetoDb(
//       "smit",
//       () => {
//         console.log("success2: data2 saved");
//         savetoDb(
//           "apna college",
//           () => {
//             console.log("success3: data3 saved");
//           },
//           () => {
//             console.log("failure3: data3 not saved");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: data2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("weak connection data not saved to db");
//   }
// );

// Refactoring

// Refactoring with Promises

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Success: data saved to db");
    } else {
      reject("failure: data not saved");
    }
  });
}

// saveToDb("Osama");

// let req = saveToDb("Osama"); // req is a promise obj

// req
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("rejected");
//   });
// console.log(req);

// promise chaning
// db ma data save ho jaye tu then call kro and so on. failure ka case ma catch chala ga

saveToDBPromise("apnacollege")
  .then((res) => {
    console.log("result", result);
    console.log("promise1 resolved");
    return saveToDBPromise("hello world");
  })
  .then((res) => {
    console.log("promise2 resolved", res);
  })
  .catch((err) => {
    console.log("some promise rejected", err);
  });

// refactor callback hell with promises
function saveToDb(data) {
  return new Promise((resolve, reject) => {
    const internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      console.log(`data saved to db: ${data}`);
      resolve();
    } else {
      console.log(`Data not saved. Internet speed is not stable.`);
      reject();
    }
  });
}

saveToDb("apna school")
  .then(() => {
    console.log("success1: data1 saved");
    return saveToDb("smit");
  })
  .then(() => {
    console.log("success2: data2 saved");
    return saveToDb("apna college");
  })
  .then(() => {
    console.log("success3: data3 saved");
  })
  .catch((error) => {
    console.log("failure: data not saved due to weak connection");
  });
