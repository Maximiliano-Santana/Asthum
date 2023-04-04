const desktopMenuActivate = document.querySelector('.account-menu')
const desktopMenu = document.querySelector('.desktop-menu')

console.log(desktopMenu.classList)
desktopMenuActivate.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive')
})