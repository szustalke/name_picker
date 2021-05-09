"use strict";

// VARIABLES

let score;
let d;
let x;
let y;

const execute = function () {
  //   CREATING RANDOM NUMBER- up to the number of options chosen (variable d)

  score = Math.trunc(Math.random() * d + 1);

  //   DISPLAYING THE NAME ACCORDING TO NUMBER

  document.getElementById("name-final").textContent = document.getElementById(
    `name${score}`
  ).value;
};

// HIDING/DISPLAYING BASED ON HOW MANY OPTIONS

// 1 READING NUMBER OF OPTIONS FROM USER'S INPUT (VARIABLE d)
function val() {
  d = document.querySelector(".noOptionsEl").value;
}

// 2 ADDING MORE/REMOVING INPUTS ACCORDING TO USER'S INPUT

document.querySelector(".btn-apply").addEventListener("click", function () {
  y = d - x;

  //   ADDING MORE INPUTS
  if (y > 0) {
    x = d;

    for (let i = 1; i <= x; i++) {
      document.getElementById(`name${i}`).classList.remove("hidden");
    }

    // REMOVING INPUTS
  } else if (y < 0) {
    x = d;

    // IF INPUT IS SAME
    for (let i = 6; i > d; i--) {
      document.getElementById(`name${i}`).classList.add("hidden");
    }

    // DISPLAYING FIRST INPUT
  } else if (!y) {
    x = d;

    for (let i = 1; i <= d; i++) {
      document.getElementById(`name${i}`).classList.remove("hidden");
    }
  }
});

// SHUFFLING- SHOWING THE NAME PICKED
document.querySelector(".btn-shuffle").addEventListener("click", execute);

// CHANGING BACKGROUND COLOUR depending on girl or boy chosen
document.querySelector(".btn-girl").addEventListener("click", function () {
  document.querySelector("body").classList.remove("boy");
  document.querySelector("body").classList.add("girl");
});

document.querySelector(".btn-boy").addEventListener("click", function () {
  document.querySelector("body").classList.add("boy");
  document.querySelector("body").classList.remove("girl");
});

// INTRO INSTRUCTION- DISSAPPEARS ONCE YOU PRESS THE BUTTON
document.querySelector(".btn-play").addEventListener("click", function () {
  document.querySelector(".app").classList.remove("hide");
  document.querySelector(".intro").classList.add("hide");
});
