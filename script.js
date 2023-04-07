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
    const ismyOrdercartClosed = myOrdercart.classList.contains('inactive');
    if(!ismyOrdercartClosed){
        myOrdercart.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    const ismyOrdercartClosed = myOrdercart.classList.contains('inactive');
    if (!ismyOrdercartClosed){
        myOrdercart.classList.add('inactive');
    };

    mobileMenu.classList.toggle('inactive');
};


function toggleOrderCart(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    };

    if (!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    };

    myOrdercart.classList.toggle('inactive');
};

