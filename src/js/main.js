
// Botón flotante
const trigger = document.querySelector("menu > .trigger");
trigger.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.toggle("abrir");
});


// menu responsive
const mainItems = document.querySelectorAll('.main-item');
mainItems.forEach((mainItem) => {
    mainItem.addEventListener('click', () => {
        mainItem.classList.toggle(
            'main-item--open'
        );
    })
});

// Card con carrusel

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'fade',
    loop: true,
    speed: 300,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// Carrusel para cards

document.addEventListener('DOMContentLoaded', function () {
    let imagenesQro = [
        {img: '../src/img/fichas/Qro/img1.jpg'},
        {img: '../src/img/fichas/Qro/img2.jpg'},
        {img: '../src/img/fichas/Qro/img3.jpg'},
        {img: '../src/img/fichas/Qro/img4.jpg'},
        {img: '../src/img/fichas/Qro/img5.jpg'}
    ]
    let contador = 0;
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const cardQro = document.querySelectorAll('.cardGaleria qro img');
    const imgSlideShow = document.querySelector('.slideshow img')
})