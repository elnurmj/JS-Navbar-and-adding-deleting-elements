let openTop = document.querySelector(".open-btn");
let closeTop = document.getElementById("close-btn");
let navbar = document.querySelector(".nav-bar");

openTop.onclick = function () {
    navbar.classList.remove("close");
}

closeTop.onclick = function () {
    navbar.classList.add("close");
} 
