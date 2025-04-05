
function contactarWhatsApp() {
    const what = document.getElementById('whatsapp-button');

    what.addEventListener('click', function() {
        const telefono = "573234447475";
        const mensaje =  ` Hola, estoy interesado en los servicios que ofrecen. \nMe gustaría recibir más información y conocer cómo pueden ayudarme. Muchas gracias.`
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    });
}
contactarWhatsApp() 