const burger = document.querySelector(".header-right .fa-bars")
const closeMenu = document.querySelector(".hamburger-menu .fa-times")
const menu = document.querySelector(".hamburger-menu");
burger.addEventListener ('click', function(){
    menu.style.display = "block";
});
closeMenu.addEventListener ('click', function(){
    menu.style.display = "none";
});