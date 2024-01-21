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

// Declaro como constantes y un array con sus alturas
const patrocinadoresContainer = document.querySelectorAll('.patrocinadores__container')
const alturasContainer = []

    // Sus alturas (offsetHeight) son recogidas mediante 'push'
    patrocinadoresContainer.forEach((eachContainer, index) => {
        alturasContainer.push(patrocinadoresContainer[index].offsetHeight)
        // Le STYLE 'height = 0' a los .patrocinadores__container
        patrocinadoresContainer[index].style.height = 0
    })

// Los muestro por consola para ver que no hay error en la declaración
console.log(patrocinadoresContainer)
console.log(alturasContainer)

// Declaro como constantes TODOS los elementos de la lista de patrocinadores
const patrocinadoresLi = document.querySelectorAll('.patrocinadores__li')

// Cuando hago CLICK en .patrocinadores__li
    //  Le STYLE "height = 0" a TODOS los .patrocinadores__container
    //  Le ADD 'active' a .patrocinadores__container de MISMO INDEX
    //  Le STYLE "height = alturasContainer (de MISMO INDEX)"
    
patrocinadoresLi.forEach((eachLi, index) => 
    patrocinadoresLi[index].addEventListener('click', () => {
        patrocinadoresContainer.forEach((eachContainer, index) => patrocinadoresContainer[index].style.height = '0')
        patrocinadoresContainer[index].classList.add('active')
        patrocinadoresContainer[index].style.height = alturasContainer[index] + 'px'
    })
)


