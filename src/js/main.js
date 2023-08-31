
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