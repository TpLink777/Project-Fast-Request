
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');


    if (window.scrollY > 80) {
        header.classList.add('scrolled');

    } else {
        header.classList.remove('scrolled');

    }
});

// esperar hasta que la pagina cargue por completo

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


