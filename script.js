const hamburger = document.querySelector(".hamburger-icon");
const xButton = document.querySelector(".closebtn");
const links = document.querySelectorAll(".link");
const overlay = document.querySelector(".overlay");
const headings = Array.from(document.querySelectorAll("h1"));
const toggleSwitch = document.querySelector(".round");
let dark = true;
const icons = document.querySelectorAll(".icon");
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
    document.body.style.backgroundColor = "#fff";
    overlay.style.backgroundColor = "#000";
    links.forEach(link => link.style.color = "#fff");
    xButton.style.color = "#fff";
    document.querySelector(".resume").style.border = "1px solid #000";

    text.forEach(item => item.classList.add("lightmode"));
    headings.forEach(heading => heading.classList.add("lightmode"));

  } else {
    document.body.style.backgroundColor = "black";
    document.querySelector(".resume").style.border = "1px solid #fff";
    text.forEach(item => item.classList.remove("lightmode"));
    headings.forEach(heading => heading.classList.remove("lightmode"));
  }
}

hamburger.addEventListener("click", open);
xButton.addEventListener("click", close);
links.forEach(link => link.addEventListener("click", close));
toggleSwitch.addEventListener("click", toggle);
