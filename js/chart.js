var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
    datasets: [{
      label: '숙련도',
      data: [92, 97, 83, 75, 64],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(97, 218, 251, 0.2)',
        'rgba(118, 74, 188, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(97, 218, 251, 1)',
        'rgba(118, 74, 188, 1)',
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: false,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}); 