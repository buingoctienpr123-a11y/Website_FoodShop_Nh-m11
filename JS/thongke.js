new Chart(categoryDonutChart, {
    type: "doughnut",
    data: {
        labels: ["Gà & Tacos", "Mì", "Nước", "Pizza", "Salad"],
        datasets: [{
            data: [45, 36, 47, 52, 23],
            backgroundColor: [
                "#7C6CFF",
                "#FF7F7F",
                "#39BFCB",
                "#FFB347",
                "#5A9BFF"
            ],
            borderWidth: 3,
            borderColor: "#FFFFFF"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "60%",
        plugins: {
            legend: {
                position: "top"
            }
        }
    }
});

new Chart(revenueBarChart, {
    type: "bar",
    data: {
        labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
        datasets: [{
            label: "Doanh thu",
            data: [5500, 7600, 8500, 6400, 4500, 9600, 7500],
            backgroundColor: "#8176F2",
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});