
'use strict';

// scroll
// ---------------------------------------- //
window.addEventListener("scroll", function () {
  const elm = document.querySelector(".js-to-top");
  const scroll = window.pageYOffset;
  if (scroll > 800) {
    elm.style.opacity = "display: block;";
    // console.log(scroll);
  } else {
    elm.style.opacity = "display: none;";
    // console.log(scroll);
  }
});