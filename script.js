const hamburger = document.querySelector(".hamburger-icon");
const xButton = document.querySelector(".closebtn");
const links = document.querySelectorAll(".link");
const overlay = document.querySelector(".overlay");
const headings = Array.from(document.querySelectorAll("h1"));
const toggleSwitch = document.querySelector(".round");
let dark = true;
const text = [document.querySelector(".name"), document.querySelector(".title"),
document.querySelector(".resume"), document.querySelector(".toggle-icon"), document.querySelector(".sun"), hamburger];


function open() {
  document.getElementById("myNav").style.width = "100%";
}

function close() {
  document.getElementById("myNav").style.width = "0%";
}

function toggle() {
  dark = !dark;
  if(!dark){
    overlay.style.backgroundColor = "#000";
    links.forEach(link => link.style.color = "#fff");
    text.forEach(item => item.classList.add("lightmode"));
    headings.forEach(heading => heading.classList.add("lightmode"));
    document.body.style.backgroundColor = "white";
  } else {
    text.forEach(item => item.classList.remove("lightmode"));
    headings.forEach(heading => heading.classList.remove("lightmode"));
    document.body.style.backgroundColor = "black";
  }
}

hamburger.addEventListener("click", open);
xButton.addEventListener("click", close);
links.forEach(link => link.addEventListener("click", close));
toggleSwitch.addEventListener("click", toggle);
