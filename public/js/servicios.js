

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




document.addEventListener('DOMContentLoaded' , e => {

    menuHamburguesa('.panel-btn' , '.sidebar' , '.sidebar-nav')
    menuInicial('.menu-btn' , '.menu', '.menu-act a')
})


function menuHamburguesa(btn, panel, panelLink){

    document.addEventListener('click' , (e) => {
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            e.preventDefault()
            document.querySelector(panel).classList.toggle('is-active')
        }

        if(e.target.matches(panelLink) || e.target.closest(panelLink)){
            e.preventDefault()
            document.querySelector(panel).classList.remove('is-active')
            
        }
    })
}



function menuInicial(btnClick, panelPrincipal, navClick) {
    document.addEventListener('click', (e) => {
        if(e.target.matches(btnClick) || e.target.matches(`${btnClick} *`)) {
            e.preventDefault();
            document.querySelector(panelPrincipal).classList.toggle('is-activee');
        }
    });
}
