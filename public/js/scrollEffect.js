
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


document.addEventListener('DOMContentLoaded' ,(e) => {
    menuDesplegable('.btn-menu' , '.menu')
})

function menuDesplegable(btnClick, panelPrincipal) {
    document.addEventListener('click', (e) => {
        if(e.target.matches(btnClick) || e.target.matches(`${btnClick} *`)) {
            e.preventDefault();
            document.querySelector(panelPrincipal).classList.toggle('active');
}
});
}
