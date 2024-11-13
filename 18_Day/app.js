// loops are used to iterate a piece of code

// if loop has single statement we can ommit {}
// for (let i = 0; i < 10; i += 2)
// console.log("hello");

//

// for (let i = 0; i < 10; ) {
//   console.log(i);
//   i++;
// }

// Nested loop with nested array

// let heros = [
//   ["spiderman", "ironman", "thor"],
//   ["superman", "wonder women", "flash"],
// ];

// for (let i = 0; i < heros.length; i++) {
//   console.log(`List ${i}`);
//   for (let j = 0; j < heros[i].length; j++) {
//     console.log(`Hero ${heros[i][j]}`);
//   }
// }

// for of loop element of collection
// for of loop not work on internet explorer

// for (let hero of heros) {
//   console.log(`List ${hero}`);
//   for (let element of hero) {
//     console.log(element);
//   }
// }

// todo app

let todos = [];
let req = prompt("please enter your request!").toLowerCase();

while (true) {
  if (req == "add") {
    let item = prompt("Enter task");
    todos.push(item);
    console.log(`${item} added successfuly`);
  } else if (req == "quit") {
    console.log("quitting app");
    break;
  } else if (req == "list") {
    for (let todo of todos) {
      console.log(todo);
    }
  } else if (req == "delete") {
    let itemToDelete = prompt("Enter task that you want to delete");
    if (todos.includes(itemToDelete)) {
      let index = todos.indexOf(itemToDelete);
      let deletedItem = todos.splice(index, 1);
      console.log(`Your todo ${deletedItem} deleted successfully`);
    } else {
      console.error("Todo not found try again!");
    }
  } else {
    req = prompt("Invalid Request! Enter values from the list").toLowerCase();
  }
  req = prompt("please enter your request!").toLowerCase();
}
