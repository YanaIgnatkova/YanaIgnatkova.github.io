
var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Geometria";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "Рестораны",
        "Бары",
        "Кафе",
        "Кофейни",
        "Магазины",
        "Фаст-фуд",
        "Автомойки",
        "Гостинецы",
        "ВАШ БИЗНЕС",
    ],
    datasets: [
        {
            data: [150, 30, 40, 60, 90, 30, 5, 12, 25],
            backgroundColor: [
                
                "#8F313E",
                "#E7E3D4",
                
                "#C4DBF6",
                "#F8FBFF",
                "#90BEF5",
                "#4D7AB0",
                "#8590AA",
                "#741225",
                "#777",
                
            ],
            borderColor: "#fff",
            borderWidth: 1
        }]
};

var chartOptions = {
  rotation: -Math.PI,
  cutoutPercentage: 50,
  circumference: Math.PI,
  legend: {
    position: 'bottom'
  },
  animation: {
    animateRotate: false,
    animateScale: true
  }
};

var pieChart = new Chart(oilCanvas, {
  type: 'doughnut',
  data: oilData,
  options: chartOptions
});