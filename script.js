let dark = true;
const hamburger = document.querySelector(".hamburger-icon");
const xButton = document.querySelector(".closebtn");
const links = document.querySelectorAll(".nav-link");
const overlay = document.querySelector(".overlay");
const headings = Array.from(document.querySelectorAll("h1"));
const labels = Array.from(document.querySelectorAll(".skill-name"));
const icons = document.querySelectorAll(".icon");
const projLinks = document.querySelectorAll(".projl");
const toggleSwitch = document.querySelector(".round");

const text = [document.querySelector(".name"), document.querySelector(".title"),
document.querySelector(".resume"), document.querySelector(".toggle-icon"), document.querySelector(".sun"), hamburger,
document.getElementsByClassName("content")[0], document.getElementsByClassName("content")[1], document.getElementsByClassName("projh")[0],
document.getElementsByClassName("projh")[1], document.getElementsByClassName("projh")[2], document.getElementsByClassName("projt")[0],
document.getElementsByClassName("projt")[1], document.getElementsByClassName("projt")[2], document.getElementsByClassName("projp")[0],
document.getElementsByClassName("projp")[1], document.getElementsByClassName("projp")[2],
document.getElementsByClassName("nav-link")[0], document.getElementsByClassName("nav-link")[1],
document.getElementsByClassName("nav-link")[2], document.getElementsByClassName("nav-link")[3]];


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
    links.forEach(link => link.style.color = "#000");
    xButton.style.color = "#fff";
    document.querySelector(".resume").style.border = "1px solid #000";

    text.forEach(item => item.classList.add("lightmode"));
    headings.forEach(heading => heading.classList.add("lightmode"));
    icons.forEach(icon => icon.style.color = "#000");
    labels.forEach(label => label.style.color = "#000");
    projLinks.forEach(link => link.style.color = "#000");


  } else {
    document.body.style.backgroundColor = "black";
    document.querySelector(".resume").style.border = "1px solid #fff";
    links.forEach(link => link.style.color = "#fff");
    text.forEach(item => item.classList.remove("lightmode"));
    headings.forEach(heading => heading.classList.remove("lightmode"));
    icons.forEach(icon => icon.style.color = "#fff");
    labels.forEach(label => label.style.color = "#fff");


  }
}

hamburger.addEventListener("click", open);
xButton.addEventListener("click", close);
links.forEach(link => link.addEventListener("click", close));
toggleSwitch.addEventListener("click", toggle);
