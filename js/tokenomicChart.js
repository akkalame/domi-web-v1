const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {        datasets: [{
            label: '',
            data: [3600000, 4200000, 1800000, 700000, 1700000],
            backgroundColor: [
                'rgba(20, 93, 136, 1)',
                'rgba(246, 206, 57, 1)',
                'rgba(249, 149, 35, 1)',
                'rgba(123, 76, 130, 1)',
                'rgba(57, 64, 155, 1)'
                
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