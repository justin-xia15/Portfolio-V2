const hamburger = document.querySelector('.hamburger');
const xButton = document.querySelector('.closebtn');
const links = document.querySelectorAll('.link');
const overlay = document.querySelector('.overlay');
const toggleSwitch = document.querySelector('.round');
let dark = true;
const text = [document.querySelector('.main-heading'), document.querySelector('.name'), document.querySelector('.title'),
document.querySelector('.resume'), document.querySelector('.toggle-icon'), document.querySelector('.sun'), hamburger];


function open() {
  document.getElementById("myNav").style.width = "100%";
}

function close() {
  document.getElementById("myNav").style.width = "0%";
}

function toggle() {
  dark = !dark;
  console.log(dark);
  if(!dark){
    text.forEach(item => item.style.color = "black");
    document.body.style.backgroundColor = "white";
  } else {
    text.forEach(item => item.style.color = "white");
    document.body.style.backgroundColor = "black";
  }
}

hamburger.addEventListener('click', open);
xButton.addEventListener('click', close);
links.forEach(link => link.addEventListener('click', close));
toggleSwitch.addEventListener('click', toggle);

// white to black: hamburger, overlay, links, .main-heading, .name, .title, .resume, .toggle-icon
