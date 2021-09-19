const hamburger = document.querySelector('.hamburger');
const xButton = document.querySelector('.closebtn');
const links = document.querySelectorAll('.link');
const overlay = document.querySelector('.overlay');


function open() {
  document.getElementById("myNav").style.width = "100%";
}

function close() {
  document.getElementById("myNav").style.width = "0%";
}

function toggle() {
  hamburger.style.color = '#000';
  document.body.style.backgroundColor = '#fff';
}

hamburger.addEventListener('click', open);
xButton.addEventListener('click', close);
links.forEach(link => link.addEventListener('click', close));
