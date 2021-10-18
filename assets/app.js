$(document).ready(function () {

const menu = document.querySelector('.header__content-hamburger')
const nav = document.querySelector('.header__content')
const header = document.querySelector('.header')
const overlay = document.querySelector('.header__overlay')

menu.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('open');
    header.classList.toggle('open');
    overlay.classList.toggle('open');
})

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight)


const stickyNav = function (entries) {
    const [entry] = entries;

    // console.log(entry)
    if (!entry.isIntersecting) {
    nav.classList.add('sticky');
    setTimeout(() => {
        nav.classList.add('down')
    }, 500);
}
    else  {
        setTimeout(() => {
            nav.classList.remove('sticky')
        }, 500);
        nav.classList.remove('down');
    }
 }


const observerHeader = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: '500px',
});

observerHeader.observe(header);

const allSections = document.querySelectorAll('section')

const revealSection = function (entries, observer) { 
    const [entry] = entries;
    entry.target.classList.remove('hide')
    // console.log(entry)
 }

 const sectionObserver = new IntersectionObserver(revealSection, {
     root: null,
     threshold: .15,
 })
 allSections.forEach(function (section) { 
    sectionObserver.observe(section)
    section.classList.add('hide');
 })

})

const cartIcon = document.querySelector('.header__content-cart');
const cartDrawer = document.querySelector('cart-drawer');

function openDrawer() {
    if (cartDrawer.dataset.state === 'open') {
    cartDrawer.setAttribute('data-state', 'closed');
    } else {
    cartDrawer.setAttribute('data-state', 'open');
    }
    console.log()
 }

 cartIcon.addEventListener('click', openDrawer, false)