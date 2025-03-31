
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
