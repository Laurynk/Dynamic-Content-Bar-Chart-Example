import { useState, useEffect } from "react"
import styles from './BarChart.module.css'

import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["sun", "mon","tue", "wed","thurs","fri","sat"],
            datasets: [
                {
                    labels : 'sales $',
                    data: [14321, 37291, 18933, 13718, 37183, 13819, 31931],
                    borderColor: "white",
                    backgroundColor: "rgba(55, 169,250,0.4)"
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return (
        <>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions}/>
            </div>
        </>
    )
}