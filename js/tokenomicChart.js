const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {        datasets: [{
            label: '',
            data: [960000, 3600000, 3000000, 1800000, 480000, 1200000, 960000],
            backgroundColor: [
                'rgba(17, 43, 80, 1)',
                'rgba(20, 93, 136, 1)',
                'rgba(246, 206, 57, 1)',
                'rgba(249, 149, 35, 1)',
                'rgba(123, 76, 130, 1)',
                'rgba(57, 64, 155, 1)'
                ,
                'rgba(213, 115, 3, 1)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
    }
});