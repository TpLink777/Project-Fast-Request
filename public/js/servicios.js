

// esperar hasta que la pagina cargue por completo

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});



// Se usa la API IntersectionObserver, que detecta cuándo un elemento entra o sale de la pantalla.


const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.sidebar-nav a');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navItems.forEach(item => item.classList.remove('active'));
            const targetId = entry.target.id;
            const targetLink = document.querySelector(`a[href="#${targetId}"]`);
            targetLink.classList.add('active');
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(section => observer.observe(section));

// Scroll suave

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
})



