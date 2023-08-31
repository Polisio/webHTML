// menu responsive
const mainItems = document.querySelectorAll(
    '.main-item'
);


// Botón flotante
const trigger = document.querySelector("menu > .trigger");
trigger.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.toggle("abrir");
});


// menu responsive

mainItems.forEach((mainItem) => {
    mainItem.addEventListener('click', () => {
        mainItem.classList.toggle(
            'main-item--open'
        );
    })
});

// Cards

const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content")
const tabContentWrapper = document.querySelector(".tab-content-wrapper");

const shiftTabs = (linkId) => {
    allTabs.forEach((tab, i) => {

        if (tab.id.includes(linkId)) {
            allTabs.forEach((tabItem) => {
                tabItem.style = `transform: translateY(-${i * 300}px);`;
            });
        }
    });
}

allLinks.forEach((elem) => {
    elem.addEventListener('click', function () {
        const linkId = elem.id;
        const hrefLinkClick = elem.href;

        allLinks.forEach((link, i) => {
            if (link.href == hrefLinkClick) {
                link.classList.add("active");
            } else {
                link.classList.remove('active');
            }
        });

        shiftTabs(linkId);
    });
});

//? handle proper selection for initial load
const currentHash = window.location.hash;

let activeLink = document.querySelector(`.tabs a`);

if (currentHash) {
    const visibleHash = document.getElementById(
        `${currentHash.replace('#', '')}`
    );

    if (visibleHash) {
        activeLink = visibleHash;
    }
}

activeLink.classList.toggle('active');

shiftTabs(activeLink.id);