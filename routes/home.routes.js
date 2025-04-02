const express = require('express')
const router = express.Router();
require('dotenv').config();




// llamada a la vista principal
router.get('/', (req, res) => {
    res.render('index' , { title: 'Inicio', 
        customCSS: '<link rel="stylesheet" href="/css/style.css">',
        customJS: '<script src="/js/scrollEffect.js"></script>' 
    });  
});


// llamada a la vista de nosotros
router.get('/nosotros', (req, res) => {
    res.render('secciones/nosotros', { title: 'Nosotros',
        customCSS: '<link rel="stylesheet" href="/css/nosotros.css">',
        customJS: `<script src="/js/nosotros.js"></script>
          <script src="/js/countUp.js" type="module" ></script>` });
    });


// llamaada a la vista Politica de privacidad
router.get('/politica', (req, res) => {
    res.render('secciones/politica', { title: 'Politica de Privacidad',
        customCSS: '<link rel="stylesheet" href="/css/privacidad.css">',
        customJS: '<script src="/js/privacidad.js"></script>',
        hideFooter: true
    });
})


// llamada a la vista servicios
router.get('/servicios', (req, res) => {
    res.render('secciones/servicios', { title: 'Servicios', 
        hideFooter: true,
        customCSS: '<link rel="stylesheet" href="/css/servicios.css">',
        customJS: '<script src="/js/servicios.js"></script>' 
    });
});


// llamada a la vista Contactanos
router.get('/contactanos', (req, res) => {
    res.render('secciones/contactanos', { title: 'Contactanos',
        customCSS: '<link rel="stylesheet" href="/css/contactanos.css">',
        customJS: `<script src="/js/contactanos.js"></script>`
    });
})



// llamada a la vista terminos de servicios
router.get('/terminos', (req, res) => {
    res.render('secciones/terminos', { title: 'Terminos y condiciones', 
        customCSS: '<link rel="stylesheet" href="/css/terminos.css">',
        customJS: '<script src="/js/terminos.js"></script>',
        hideFooter: true
    })
})

module.exports = router;
