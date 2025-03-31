import { CountUp } from 'https://cdn.jsdelivr.net/npm/countup.js@2.3.2/dist/countUp.min.js';

function initialize() {
    document.addEventListener("DOMContentLoaded", () => {
        try {
            const elements = {
                levelUp: document.getElementById('levelUp'),
                start: document.getElementById('start'),
                porcentaje1: document.getElementById('porcentaje1'),
                porcentaje2: document.getElementById('porcentaje2'),
            };

            const visualizacion = { threshold: 0.8 };
            const observe = new IntersectionObserver((entries) => {
                try {
                    entries.forEach((entry) => {
                        ///entry.target: Referencia directa al elemento observado, en el cual le aplicaremos un estilo predeterminado
                        entry.target.style.opacity = 1;
                        
                        if (entry.isIntersecting && !entry.target.animated) {
                            // Inicialización de contadores
                            switch (entry.target.id) {
                                case 'levelUp':
                                    new CountUp(entry.target, 1000, {
                                        duration: 10,
                                        separator: ".",
                                        suffix: '+',
                                    }).start();
                                    break;

                                case 'start':
                                    new CountUp(entry.target, 50000, {
                                        prefix: "+",
                                        duration: 10,
                                        separator: ".",
                                        suffix: 'K',
                                    }).start();
                                    break;

                                case 'porcentaje1':
                                    new CountUp(entry.target, 99, {
                                        duration: 10,
                                        separator: ".",
                                        suffix: '%',
                                    }).start();
                                    break;

                                case 'porcentaje2':
                                    new CountUp(entry.target, 98, {
                                        duration: 10,
                                        separator: ".",
                                        suffix: '%',
                                    }).start();
                                    break;
                            }
                            // llamado a la bandera personalizada como verdadera
                            entry.target.animated = true;
                        }
                    });
                } catch (error) {
                    console.error('Error en el callback del observer:', error);
                }
            }, visualizacion);

            //Configuracion de cada observación para cada elemento
            Object.values(elements).forEach((element) => {
                try {
                    element.style.transition = 'opacity 0.5s ease-in-out';
                    element.style.opacity = 0;
                    observe.observe(element);
                } catch (error) {
                    console.error('Error al configurar estilos:', error);
                }
            });

        } catch (error) {
            console.error('Error general:', error);
        }
    });
}

initialize();
