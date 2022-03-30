"use strict";

console.log("Hello, World");

// Import all document sections:
const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-container");

// Page transition logic:
function pageTransition() {
  // active class activation:
  for (let i = 0; i < sectionBtn.length; i++) {
    sectionBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        " "
      );
      this.className += " active-btn";
    });
  }
}

// call transition function:
pageTransition();
