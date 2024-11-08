let gameSequence = [];
let userSequence = [];
let buttons = ["yellow", "red", "purple", "green"];

let gameStarted = false;
let level = 0;
let heading = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (gameStarted == false) {
    console.log("game started");
    gameStarted = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp() {
  // when level up
  userSequence = [];
  // changing level
  level++;
  heading.innerText = `Your level is ${level}`;
  // choosing random button
  let randomIndex = Math.floor(Math.random() * 3);
  let randomColor = buttons[randomIndex];
  let randomButton = document.querySelector(`.${randomColor}`);
  gameSequence.push(randomColor);
  // flashing random button
  gameFlash(randomButton);
}

function checkAns(index) {
  if (userSequence[index] == gameSequence[index]) {
    // console.log("same value");
    if (userSequence.length == gameSequence.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    heading.innerHTML = `Game Over! Your score was <strong> ${level} </strong><br/>Press Any Key to Start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 300);
    reset();
  }
}

function btnPress() {
  console.log("you pressed", this);
  let btn = this;
  userFlash(this);
  userColor = btn.getAttribute("id");
  // console.log(userColor);
  userSequence.push(userColor);
  checkAns(userSequence.length - 1);
}

let allButtons = document.querySelectorAll(".btn");

for (let btn of allButtons) {
  btn.addEventListener("click", btnPress);
}

// reset invoke when game end

function reset() {
  gameStarted = false;
  gameSequence = [];
  userSequence = [];
  level = 0;
}
