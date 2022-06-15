const ctx = document.getElementById('myChart').getContext('2d');

// global options

Chart.defaults.global.defaultFontFamily ='Lato';
Chart.defaults.global.defaultFontSize =18;
Chart.defaults.global.defaultFontColor ='#777'

const myChart = new Chart(ctx, {
    type: 'bar',//bar,horizontal,radar,pie
    data: {
        labels: ['Boster', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: [
                689,326,
                185,186,
                153,677,
                117,822,
                111,311,
                95,740
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth:3,
            hoverBorderColor:'black'
        }]
    },
    options: {
        title: {
            display:true,
            text:'Largest Cities',
            fontSize:25
        },
        legend:{
            display:false,
            position:'right',
            labels:{
             fontColor:'#000'
            }
        },
        layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
        },
        tooltips:{
            enabled:true
        }
    }
});