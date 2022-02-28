const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {        datasets: [{
            label: '',
            data: [9360000, 120000, 720000, 1800000],
            backgroundColor: [
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