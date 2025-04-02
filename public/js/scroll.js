
const lenis = new Lenis({
    smooth: true,  
    duration: 4,  // Velocidad del scroll
    wheelMultiplier: 1,  // Sensibilidad
    touchMultiplier: 2,  // Mejor respuesta en móviles
    infinite: false, // Evita que el scroll sea infinito
    gestureOrientation: 'vertical', 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})


function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)