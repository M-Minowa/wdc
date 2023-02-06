
'use strict';

// scroll
// ---------------------------------------- //
window.addEventListener("scroll", function () {
  const elm = document.querySelector(".pege-top");
  const scroll = window.pageYOffset;
  if (scroll > 100) {
    elm.style.display = "block";
    // console.log(scroll);
  } else {
    elm.style.display = "none";
    // console.log(scroll);
  }
});