import { Line } from "react-chartjs-2";
import { useState,useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,TimeScale } from "chart.js";
import 'chartjs-adapter-date-fns';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,TimeScale);
const API_CHART_URL = import.meta.env.VITE_COIN_API_URL;

const EMPTY_CHART_DATA = {
    datasets: [],
};

const CoinChart = ({ coinId }) => {
    const [chartData, setChartData] = useState(EMPTY_CHART_DATA);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchChartData = async () => {
            try {
                const response = await fetch(`${API_CHART_URL}/${coinId}/market_chart?vs_currency=usd&days=7`); 
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                const prices = data.prices.map(price => ({ x: new Date(price[0]), y: price[1] }));
                setChartData({ datasets: [{ label: "Price (USD)", data: prices, borderColor: "rgba(75, 192, 192, 1)", backgroundColor: "rgba(75, 192, 192, 0.2)", fill: true, pointRadius: 0, tension: 0.3 }] });
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchChartData();
    }, [coinId]);

    if (loading) {
        return <div style={{ marginTop: '30px' }}>Loading chart...</div>;
    }

    if (error) {
        return <div style={{ marginTop: '30px' }}>Error loading chart: {error}</div>;
    }

    return(
<div style={{marginTop:'30px'}}>
<Line data={chartData} options={{ responsive: true, plugins: { legend: {display:false },tooltip:{mode:'index',intersect:false}}, scales: { x: { type: 'time', time: { unit: 'day' },ticks:{autoSkip:true}}},y: { ticks:{ 
    callback: (value) => `$${value.toLocaleString()}`
} } }}/>
</div>
    )
}

export default CoinChart;
