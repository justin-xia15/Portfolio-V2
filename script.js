const hamburger = document.querySelector('.hamburger');
const xButton = document.querySelector('.closebtn');
const links = document.querySelector('.overlay-content');


/* Open when someone clicks on the span element */
function open() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function close() {
  document.getElementById("myNav").style.width = "0%";
}

hamburger.addEventListener('click', open);
xButton.addEventListener('click', close);
