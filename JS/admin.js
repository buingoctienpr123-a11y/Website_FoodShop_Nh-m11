const revenueChart = document.getElementById("revenueChart");

new Chart(revenueChart, {
    type: "bar",
    data: {
        labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
        datasets: [
            {
                label: "Tuần trước",
                data: [5000, 6000, 4500, 6500, 7600, 4200, 7400],
                backgroundColor: "#8B8CFF"
            },
            {
                label: "Hôm nay",
                data: [5600, 5900, 8700, 7800, 6500, 8500, 9600],
                backgroundColor: "#FF9999"
            }
        ]
    }
});

const orderChart = document.getElementById("orderChart");

new Chart(orderChart, {
    type: "line",
    data: {
        labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
        datasets: [
            {
                label: "Tuần trước",
                data: [30, 50, 75, 60, 55, 95, 65],
                borderColor: "#8B8CFF"
            },
            {
                label: "Hôm nay",
                data: [35, 78, 80, 70, 75, 115, 110],
                borderColor: "#FF9999"
            }
        ]
    }
});

