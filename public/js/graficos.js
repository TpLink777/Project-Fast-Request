
/* --------------- configuracion del grafico --------------- */

document.addEventListener('DOMContentLoaded', () => {

    function graficos(id, tipo, parametros, config) {
        const selector = document.getElementById(id);
        if (!selector) return;

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
        hoverBackgroundColor: 'yellow'
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
        hoverBackgroundColor: 'black'  
    };

    const Config2 = {
        ...baseConfig,
        plugins: {
            ...baseConfig.plugins,
            legend: {
                position: 'bottom'  
            },
            interaction: {
                ...baseConfig.interaction,
                mode: 'point'
            }
        }
    }

   
    const NUMBER_CFG = [1, 20, 3, 40, 80, 30, 70, 100, 90, 130, 10, 120];
    const NUMBER_CFH = [34, 56, 78, 90, 23, 12, 45, 34, 23, 45, 67, 89];
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
            label: 'Interacción de Datos',
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
        datasets: [{
            label: 'Primer Conjunto de Datos',
            data: NUMBER_CFG,
            backgroundColor: [
                'rgb(255, 99, 132)', 'rgba(54, 163, 235, 0.42)', 'rgb(255, 205, 86)',
                'rgb(99, 255, 112)', 'rgb(169, 54, 235)', 'rgb(249, 86, 255)',
                'rgb(255, 143, 99)', 'rgb(54, 214, 235)', 'rgb(86, 255, 213)',
                'rgb(255, 99, 164)', 'rgb(202, 235, 54)', 'rgb(86, 179, 255)'
            ],
            borderColor: [
                'rgb(255, 99, 132)', 'rgba(54, 163, 235, 0.42)', 'rgb(255, 205, 86)',
                'rgb(99, 255, 112)', 'rgb(169, 54, 235)', 'rgb(249, 86, 255)',
                'rgb(255, 143, 99)', 'rgb(54, 214, 235)', 'rgb(86, 255, 213)',
                'rgb(255, 99, 164)', 'rgb(202, 235, 54)', 'rgb(86, 179, 255)'
            ],
            borderWidth: 2
        }]
    };

   
    graficos('grafico1', 'line', data1, baseConfig); 
    graficos('grafico2', 'doughnut', data2, Config1); 
    graficos('grafico3', 'bar', data3, baseConfig);  

});

/*--------------- menu hamburguesa ---------------*/ 

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
