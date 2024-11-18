// document object

// console.log(document);
// show the prop and methods of document obj
// console.dir(document);

// all prop val is html collection that contains all html tags inform of obj
// console.log(document.all);

// select element based on id return null if not found
// let img = document.getElementById("arrow");
// console.log(img);

// console.log(img.src);
// console.log(img.tagName);
// console.log(img.id);

// select element by className
// return element as html colleciton or empty collection if not found
// it looks like arr but we can't use push pop methods but can perform iteration and access through index
// console.log(document.getElementsByClassName("arrow"));

// get element by tag name
// return elemenr as html collection or empty collection if not found

// let images = document.getElementsByTagName("img");
// console.log(images);

// query selector
// allow us to use any css selector return elem inform of obj

// let image = document.querySelector("img"); // select first img element
// let imageById = document.querySelector("#arrow"); // select first img element whose id is arrow
// console.log(image);

// query selector all return nodelist
// let images = document.querySelectorAll("img");
// console.log(images);

// setting content in obj

// using prop
// innerText only show visible text on screen not show hidden display none content
// console.log(document.querySelector("p").innerText);

// textContent show full text including hidden
// console.log(document.querySelector("p").textContent);

// innerHTML
// show full markup inside of node (element)
// console.log(document.querySelector("p").innerHTML);

// Manipulating attribute

// getting attribute value return null if attr not found

// console.log(document.querySelector("p").getAttribute("id"));

// setting attr value or add attr to element

// document.querySelector("p").setAttribute("class", "para p");

// Manipulating style
// here we use camelCase for property
// apply styling as inline that's why we dont use it too much
// we cannot select internal or external css with it

// document.querySelector("p").style.color = "#fff";

// Manipulating styling using class list
// add only one class at a time
// remove to remove exisiting class
// contains chk class exisit or not
// toggle to add or remove class if class exisit remove return false if not exist add class return true
// document.querySelector("p").classList.add("naam");

// console.log(document.querySelector("p").classList.contains("name"));

// Insert element

// first create and then insert
// insert using append, appendChild, Prepend,insertAdjacentEelement

// let para = document.createElement("p");
// para.textContent = "Hello World";
// let container = document.querySelector(".container");
// console.log(container);
// console.dir(container);

// append can append both elem or text
// container.append(para);
// add before the container element
// container.insertAdjacentElement("beforebegin", para); // here line 88 override by this code

// removing element
// remove child and return it
// let removed = container.removeChild(document.querySelector(".container p"));
// console.log(removed);

// direct remove not return removed element
// console.log(container.remove());
