
'use strict';

// scroll
// ---------------------------------------- //

window.addEventListener("scroll", () => {
  if (100 < window.scrollY) {
    document.getElementById("js-to-top").classList.add("is-active");
  } else {
    document.getElementById("js-to-top").classList.remove("is-active");
  }
});