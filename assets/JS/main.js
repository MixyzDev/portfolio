let burger = document.getElementById("sideNav")
let openBtn = document.getElementById("openBtn")
let closeBtn = document.getElementById("closeBtn")

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav(e) {
    e.preventDefault();
    burger.classList.add("active");
}

function closeNav(e) {
    e.preventDefault();
    burger.classList.remove("active")
}