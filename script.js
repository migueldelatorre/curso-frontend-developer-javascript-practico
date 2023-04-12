const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const cardsContainer = document.querySelector('.cards-container')

const menuHamicon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carritoCompra = document.querySelector('.navbar-shopping-cart');
const myOrdercart = document.querySelector('#shopingCartDetail');




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

const productList=[];
productList.push({
    nombre: 'Bike',
    precio: '120',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'Pantalla',
    precio: '350',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'Computadora',
    precio: '630',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'Computadora',
    precio: '630',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'Computadora',
    precio: '630',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'Computadora',
    precio: '630',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */


 /*AL crear la funcion podemos reutilizar el ciclo for. Su utilidad seria para tener un codico un poc mas ordenado y poder reutilizarlo
 si tuvieramos un proyector mayor y hubiese que traer inf del backend o de una apirest. Poniendo en el argumento de la llamada de la funcion
 el array que queramos recorrer. En este caso se podría dejar el for sin haber creado ninguna funcion. */
 
function renderProducts(arrayProductList){   

for (product of arrayProductList) {
    // Estamos construyendo el html desde JS.
    const productCard = document.createElement('div'); //CreateElement crea lo del parentesis, en este caso un div y se asigna a productCard.
    productCard.classList.add('product-card');  //classList.add agrega una classe a productCard. (equivale a ponerle una clase al div.)

   const imgn = document.createElement('img'); // Aqui creamos una etiqueta img y la asignamos a la var imgn.
   imgn.setAttribute('src', product.imagen);    //SetAttribute agrega un atributo a la variable imgn que hemos creado, en este caso el atributo src.
    //Ademas le agregamos  lo que venga en product.imagen (para no poner la url directamente y que asi sea dinamico.)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrecio = document.createElement('p');
    productPrecio.innerText = '$' + product.precio;
    const productNombre = document.createElement('p');
    productNombre.innerText = product.nombre;

    productInfoDiv.appendChild(productPrecio);
    productInfoDiv.appendChild(productNombre);

    const productFigure = document.createElement('figure');

    const imgIcon = document.createElement('img');
    imgIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(imgIcon); // Esto hace que imgIcon cuelgue de productFigure.

    productCard.appendChild(imgn);
    productCard.appendChild(productInfo);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);
    
    cardsContainer.appendChild(productCard);

}
};

renderProducts(productList);