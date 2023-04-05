const desktopMenuActivate = document.querySelector('.account-menu')
const desktopMenu = document.querySelector('.desktop-menu')
const movileMenuActivate = document.querySelector('#menu-icon')
const movileMenu = document.querySelector('.movile-menu')
const shoppingCartActivate = document.querySelector('.shopping-cart-icon')
const shoppingCart = document.querySelector('.my-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')

const productList = [];

class Product {
    constructor(name, price, image) {
        this.name = name
        this.price = price
        this.image = image
    }
}

productList.push(new Product('Hoodie', 230, 'https://images.pexels.com/photos/1749495/pexels-photo-1749495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'));
productList.push(new Product('Bike', 230, 'https://images.pexels.com/photos/1749495/pexels-photo-1749495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'));

desktopMenuActivate.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive')
    shoppingCart.classList.add('inactive')
})

movileMenuActivate.addEventListener('click', () => {
    movileMenu.classList.toggle('inactive')
    shoppingCart.classList.add('inactive')
})

shoppingCartActivate.addEventListener('click', () => {
    shoppingCart.classList.toggle('inactive')
    movileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
})

productList.forEach((product) => {
    cardsContainer.innerHTML += `
    <div class="product-card">
        <div class="image-card">
            <img src="${product.image}">
        </div>
        <div class="footer-product-card">
            <div class="data-product-card">
                <p class="product-card-name">${product.name}</p>
                <p class="product-card-price">${product.price} $</p>
            </div>
            <img src="img/shopping-cart.png" alt="" id="shopping-car-image">
        </div>
    </div>
    `
})