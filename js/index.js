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

// Declaro como constantes TODOS los botones de Update y el div .update__largo (contenedor de las 4 noticias de la sección, ubicado dentro del carrousel)
const updateButton = document.querySelectorAll('.update__button')
const updateLargo = document.querySelector('.update__largo')

// Los muestro por consola para ver que no hay error en la declaración
console.log(updateButton)
console.log(updateLargo)
    
//  Cuando hago CLICK en .update__button
    // .update__largo hace TRANSLATEX() -> INDEX * (100 / 4)
    // Le REMOVE 'active' a TODOS .update__button
    // Le ADD 'active' a .update__button de MISMO INDEX

updateButton.forEach((eachUpdateButton, index) => {
    updateButton[index].addEventListener('click', () => {
        
        // Declaro la variable cálculo, que utilizaré como estilo aplicado a .update__largo
        let calculo = index * (100 / 4)
        // La muestro por consola para comprobar que ejecuta bien el cálculo
        console.log(calculo)

        updateLargo.style.transform = `translateX(-${calculo}%)`
        updateButton.forEach((eachUpdateButton, index) => {
            updateButton[index].classList.remove('active')
        })
        updateButton[index].classList.add('active')
    })
})


// Al tener problemas para ajustar la altura de las dos secciones de Update, debido a sus diferenes estructuras, cuando están una al lado de otra mediante CSS (hasta 960px de ancho de pantalla), tuve que ayudarme de JavaScript para equilibrarlas.
    // Para ello, declaré como constantes al Carrousel, a la lista de eventos, y como variable let a la altura del Carrousel
const updateCarrousel = document.querySelector('.update__carrousel')
const updateUl = document.querySelector('.update__ul')
let carrouselAltura = updateCarrousel.offsetHeight

// Con esta función ajusto la altura de ambos como comentaba previamente
function ajustaAltura() {
// Para que el STYLE se aplique en pantallas de más de 960px de ancho
  if (window.innerWidth >= 960) {
    // Le STYLE height igual a la altura del Carrousel con la variable declarada
    updateUl.style.height = carrouselAltura + 'px'
} 
// Para que se adapte de manera automática como ya tenía aplicado en CSS
  else {
    updateUl.style.height = 'auto'
  }
}
// Para ejecutar la función cuando se carga la página
ajustaAltura()
// Para ejecutar la función al cambiar el tamaño de la ventana, ya que al comprobar el responsive, la altura del Carrousel variaba pero la del Ul de eventos se mantenía
window.addEventListener('resize', ajustaAltura)


// Para el funcionamiento de los botones del Finder, declaro como constantes:
    // TODOS los botones que representan a cada provincia (.finder__button) y cada municipio o región (.finder__open)
    // Las listas que contienen estos botones (.finder__ul) y TODAS las (.finder__courts)
    // Los mapas que tienen que ocultarse (.finder__andalucia) y mostrarse TODOS (.finder__provincia)
    // El botón que tiene que mostrarse (.finder__back)
const finderButton = document.querySelectorAll('.finder__button')
const finderCourts = document.querySelectorAll('.finder__courts')
const finderAndalucia = document.querySelector('.finder__andalucia')
const finderUl = document.querySelector('.finder__ul')
const finderBack = document.querySelector('.finder__back')
const finderOpen = document.querySelectorAll('.finder__open')
const finderProvincia = document.querySelectorAll('.finder__provincia')

// Las muestro por consola para ver que no hay error en la declaración
console.log(finderButton)
console.log(finderAndalucia)
console.log(finderUl)
console.log(finderCourts)
console.log(finderBack)
console.log(finderProvincia)

// Cuando CLICK en .finder__button
// Le ADD 'active' a .finder__courts de MISMO INDEX
    // Le ADD 'active' a .finder__andalucia
    // Le ADD 'active' a .finder__ul
    // Le ADD 'active' a .finder__back
    // Le ADD 'active' a .finder__provincia de MISMO INDEX

finderButton.forEach((eachButton, index) => {
    finderButton[index].addEventListener('click', () => {
            finderCourts[index].classList.add('active')
            finderAndalucia.classList.add('active')
            finderUl.classList.add('active')
            finderBack.classList.add('active')
            finderProvincia[index].classList.add('active')
    })
})


// Cuando CLICK en .finder__back
    // Le REMOVE 'active' a .finder__back
    // Le REMOVE 'active' a .finder__ul
    // Le REMOVE 'active' a .finder__andalucia
    // Le REMOVE 'active' a TODOS los .finder__provincia
    // Le REMOVE 'active' a TODOS los .finder__courts

finderBack.addEventListener('click', () => {
    finderBack.classList.remove('active')
    finderUl.classList.remove('active')
    finderAndalucia.classList.remove('active')
    finderProvincia.forEach((eachProvincia, index) => {
        finderProvincia[index].classList.remove('active')
    })
    finderCourts.forEach((eachCourt, index) => {
        finderCourts[index].classList.remove('active')
    })
})


// Declaro como constantes al Lightbox y su TODOS sus contenidos que se refieren a cada pista
// También declaro como array las alturas de estos contenidos del lightbox, ya que las necesitaré más adelante para centrar verticalmente
const lightbox = document.querySelector('.lightbox')
const lightboxPista = document.querySelectorAll('.lightbox__pista')
const alturasLightbox = []

// Los muestro por consola para ver que no hay error en la declaración
console.log(lightbox)
console.log(lightboxPista)

// Mediante push, recojo las alturas de cada .lightbox__pista, ya que al tener contenidos diferentes, no son alturas iguales para todos
lightboxPista.forEach((eachLightboxPista , index) => {
    alturasLightbox.push(lightboxPista[index].offsetHeight)
})

// Muestro por consola el array de alturas para ver que las ha recogido correctamente
console.log(alturasLightbox)

// Cuando hago CLICK en .finder__open
    // Le ADD 'active' a .lightbox
    // Le ADD 'active' a .lightbox__pista del MISMO INDEX
    // Le REMOVE 'active' a .finder__back

finderOpen.forEach((eachButtonPista, index) => {
    finderOpen[index].addEventListener('click', function() {
        lightbox.classList.add('active')
        lightboxPista[index].classList.add('active')
        lightboxPista.forEach((eachPista, index) => {
            // Al probar la web en móvil, no se centraba al medio como debía con la propiedad de CSS "top". Por lo que decidí mediante esta condición, que a partir del ancho máximo de pantalla 480px, cada .lightbox__pista se colocase a 2rem del "top"
            if (window.innerWidth < 480) {
                lightboxPista[index].style.top = '2rem'
            } 
            // Aquí si, gracias al array de alturas que recogí, los centro verticalmente
            else {
                lightboxPista[index].style.top = `calc(50% - ${alturasLightbox[index] / 2}px)`
            }
        })
        finderBack.classList.remove('active')
    })
})

// Declaro como constantes a TODOS los botones de cada contenido de Lightbox
const lightboxButton = document.querySelectorAll('.lightbox__button')

// Las muestro por consola para ver que no hay error en la declaración
console.log(lightboxButton)

// Cuando hago CLICK en lightbox__button
    // Le REMOVE 'active' a .lightbox
    // Le REMOVE 'active' a TODOS .lightbox__pista
    // Le ADD 'active' a .finder__back

lightboxButton.forEach((eachLightboxButton , index) => {
    lightboxButton[index].addEventListener('click' , function(){
        lightbox.classList.remove('active')
        lightboxPista.forEach((eachLichtboxPista , index) => {
            lightboxPista[index].classList.remove('active')
        })
        finderBack.classList.add('active')
    })
})
