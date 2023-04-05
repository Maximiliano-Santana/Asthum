const desktopMenuActivate = document.querySelector('.account-menu')
const desktopMenu = document.querySelector('.desktop-menu')
const movileMenuActivate = document.querySelector('#menu-icon')
const movileMenu = document.querySelector('.movile-menu')
const shoppingCartActivate = document.querySelector('.shopping-cart-icon')
const shoppingCart = document.querySelector('.my-shopping-cart')

console.log(desktopMenu.classList)

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
    console.log('abbre carrito')
})