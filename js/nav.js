var menu = document.querySelector('.header__content-hamburger')
var mobileMenu = document.querySelector('.header__content')
var header = document.querySelector('.header')
var overlay = document.querySelector('.header__overlay')

menu.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    header.classList.toggle('open');
    overlay.classList.toggle('open');
})

