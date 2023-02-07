
'use strict';

// scroll
// ---------------------------------------- //

const toTop = document.getElementById("js-to-top");

window.addEventListener("scroll", () => {
  if (100 < window.scrollY) {
    toTop.classList.add("is-active");
  } else {
    toTop.classList.remove("is-active");
  }
});