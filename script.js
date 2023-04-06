const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamicon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carritoCompra = document.querySelector('.navbar-shopping-cart');
const myOrdercart = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamicon.addEventListener('click', toggleMobileMenu);
carritoCompra.addEventListener('click', toggleOrderCart);




function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
};

function toggleOrderCart(){
    myOrdercart.classList.toggle('inactive');
};

