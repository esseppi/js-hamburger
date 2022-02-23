let burger = document.querySelector('.header-right > a');
let closeMenu = document.querySelector(".close");
let hamburgerMenu = document.querySelector('header div.hamburger-menu');

burger.addEventListener ('click', function() {
    hamburgerMenu.classList.toggle ("active");
});
closeMenu.addEventListener ('click', function() {
    hamburgerMenu.classList.toggle ("active");
});

