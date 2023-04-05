const desktopMenuActivate = document.querySelector('.account-menu')
const desktopMenu = document.querySelector('.desktop-menu')
const MovileMenuActivate = document.querySelector('#menu-icon')
const MovileMenu = document.querySelector('.movile-menu')

console.log(desktopMenu.classList)

desktopMenuActivate.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive')
})

MovileMenuActivate.addEventListener('click', () => {
    console.log('abremenu')
    MovileMenu.classList.toggle('inactive')
})