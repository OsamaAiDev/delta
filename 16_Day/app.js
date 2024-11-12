let name = "Osama Arshad";

let fName = name.slice(6); // return the part of string as new string
console.log(fName);

// negative indexing
console.log(name.slice(-1));

// indexof return first occurance of some value, -1 if not found

console.log(name.indexOf("rs"));

// method chaning using one method after another

name.trim().slice(-4, -1);

// replace search value and return new string with value replaced (case sensitive)

console.log(name.replace("Arshad", "abdullah"));

// repeat

console.log(name.repeat(3));
