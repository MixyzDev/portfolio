let burger = document.getElementById("sideNav")
let openBtn = document.getElementById("openBtn")
let closeBtn = document.getElementById("closeBtn")

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    burger.classList.add("active");
}

function closeNav() {
    burger.classList.remove("active")
}