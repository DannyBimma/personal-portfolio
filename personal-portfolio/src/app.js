"use strict";

console.log("Hello, World");

// Import all document sections:
const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-container");

// Page transition logic:
function pageTransition() {
  // active class activation for btns:
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

  // active class activation for sections:
  allSections.addEventListener("click", function (e) {
    // console.log(e.target);
    const id = e.target.dataset.id;

    if (id) {
      // remove class on other btns:
      sectionBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // hide other sections:
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

// call transition function:
pageTransition();
