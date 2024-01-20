'use strict'

// Declaro como constantes el Botón del Header y el Nav del Header
const headerButton = document.querySelector('.header__button')
const headerNav = document.querySelector('.header__nav')

// Los muestro por consola para ver que no hay error en la declaración
console.log(headerButton)
console.log(headerNav)

// Cuando hago 'click' en .header__button
    // Le TOGGLE 'active' a .header__nav
    // Le TOGGLE 'active' a .header__button

headerButton.addEventListener('click', () => {
    headerNav.classList.toggle('active')
    headerButton.classList.toggle('active')
})