
/* --------------- configuracion del grafico --------------- */

document.addEventListener('DOMContentLoaded', () =>{

    function graficos(id, tipo, parametros) {
        const selector = document.getElementById(id)
        if(!selector)  return
        new Chart(selector, {
            type: tipo,
            data: parametros,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: { 
                    legend: {
                        position: 'top'
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                interaction: { 
                    mode: 'nearest',
                    intersect: false,
                    axis: 'x'
                },
                animations: {
                    radius: {
                        duration: 400,
                        easing: 'linear',
                        loop: (context) => context.active
                    }
                },
                hoverRadius: 12,
                hoverBackgroundColor: 'yellow'
            }
        });
        
    }


    const NUMBER_CFG  = [1, 20, 3, 40, 80, 30, 70, 100, 90, 130, 10, 120];


    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const data = {
    labels: labels,
    datasets: [
        {
            label: 'campos',
            data: NUMBER_CFG,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            tension: 0.4,
            borderWidth: 2,
        },
        
    ]

}


    graficos('grafico1', 'line',  data)
    graficos('grafico2', 'line',  data)
    graficos('grafico3', 'line',  data)
})

