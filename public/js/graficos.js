
/* --------------- configuracion del grafico --------------- */

document.addEventListener('DOMContentLoaded', () => {

    function graficos(id, tipo, parametros, config) {
        const selector = document.getElementById(id);
        if (!selector){
            console.warn(`No se encontró el elemento con id: ${id}`);
            return;
        }

        new Chart(selector, {
            type: tipo,
            data: parametros,
            options: config
        });
    }

    const baseConfig = {
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
        },
        interaction: { 
            mode: 'nearest',
            intersect: false,
            axis: 'x'
        },
        animations: {
            radius: {
                duration: 500,
                easing: 'linear',
                loop: (context) => context.active
            },
            tension: {
                duration: 1500,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            },
        },
        hoverRadius: 12,
        hoverBackgroundColor: 'white'
    };

    
    const Config1 = {
        ...baseConfig,  
        plugins: { 
            ...baseConfig.plugins,  
            legend: {
                position: 'bottom'  
            }
        },
        interaction: { 
            ...baseConfig.interaction,  
            mode: 'point'  
        },
       hover:{
        mode: null
       }  
    };

    const Config2 = {
        ...baseConfig,
        plugins: {
            ...baseConfig.plugins,
            legend: {
                position: 'bottom'  
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart'
              }
        },
        hover: {
            mode: null 
        },
        interaction: {
            ...baseConfig.interaction,
            mode: 'point'
        },
        scales: {
            y: {
                beginAtZero: true,
                min: -200,
                max: 200
            }
        }
    }

   
    const NUMBER_CFG = [124, 20, 30, 40, 80, 30, 70, 100, 90, 130, 77, 120];
    const NUMBER_CFH = [12, 56, 78, 90, 23, 182, 120, 34, 23, 45, 67, 89];
    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const data1 = {
        labels: labels,
        datasets: [
            {
                label: 'Campos',
                data: NUMBER_CFG,
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                tension: 0.4,
                borderWidth: 2,
            },
            {
                label: 'Campos CFH',
                data: NUMBER_CFH,
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 26, 255, 0.5)',
                tension: 0.4,
                borderWidth: 2
            }
        ]
    };

    const data2 = {
        labels: labels,
        datasets: [{
            label: 'Resultados',
            data: NUMBER_CFG,
            backgroundColor: [
                'rgb(255, 99, 132)', 'rgba(54, 163, 235, 0.42)', 'rgb(255, 205, 86)',
                'rgb(99, 255, 112)', 'rgb(169, 54, 235)', 'rgb(249, 86, 255)',
                'rgb(255, 143, 99)', 'rgb(54, 214, 235)', 'rgb(86, 255, 213)',
                'rgb(255, 99, 164)', 'rgb(202, 235, 54)', 'rgb(86, 179, 255)'
            ],
            hoverOffset: 4
        }]
    };

    const data3 = {
        labels: labels,
        datasets: [
            {
                label: 'Fully Rounded',
                data: [30, -150, 30, -25, 30, -35, 73,-80, -90, 100, -110, 120], 
                borderColor: '#ffcd56',
                backgroundColor: 'rgb(255, 205, 86)',
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            },
            {
                label: 'Small Radius',
                data: [-50, 109, -15, 60, -25, 30, -35, 73,-80, -90, 100, -111, 120],
                borderColor: '#a936eb',
                backgroundColor: 'rgb(169, 54, 235)',
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            }
        ]
    };
    
  

    graficos('grafico1', 'line', data1, baseConfig); 
    graficos('grafico2', 'doughnut', data2, Config1); 
    graficos('grafico3', 'bar', data3, Config2);  

});


