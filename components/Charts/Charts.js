import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export const Charts = () => {
    const barChartRef = useRef(null);

    useEffect(() => {
        let barChart;

        if (barChartRef.current) {
            const barCtx = barChartRef.current.getContext("2d");
            barChart = new Chart(barCtx, {
                type: "bar",
                data: {
                    labels: ['Laos','Vietnam','Thailand','Myanmar','Cambodia','India'],
                    datasets: [
                        {
                            label: "SPI",
                            data: [0.14, 0.5, 0.43, -0.4, 0.2, -0.14],
                            backgroundColor: "rgba(54, 162, 235, 0.5)",
                            borderColor: "rgba(54, 162, 235, 1)",
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: "Country SPI",
                            font: {
                                size: 18,
                                weight: 'bold'
                            },
                            padding: {
                                top: 10,
                                bottom: 30
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }

        // Cleanup function
        return () => {
            if (barChart) {
                barChart.destroy();
            }
        };
    }, []);

    return (
        <div className="charts mt-12">
            <div className="bar-chart-container mb-12">
                <canvas ref={barChartRef} />
            </div>
        </div>
    );
};
