import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';

// Register the components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const TemperatureChart = ({ width = '20%', height = '200px' }) => {
  // Sample data for temperature chart
  const temperatureData = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'], // Time labels
    datasets: [
      {
        label: 'Temperature (°C)', // Chart label
        data: [20, 21, 22, 23, 24, 22], // Sample temperature data
        fill: false,
        backgroundColor: '#00A676',
        borderColor: '#00A676',
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const temperatureOptions = {
    responsive: true,
    maintainAspectRatio: true, // Disable aspect ratio to allow dynamic sizing
    scales: {
      x: {
        title: {
          display: false,
          text: 'Ti (HH:MM)me', // X-axis label
        },
      },
      y: {
        title: {
          display: false,
          text: 'Temperature (°C)', // Y-axis label
        },
        suggestedMin: 18,
        suggestedMax: 26,
      },
    },
  };

  return (
    <div style={{ width, height }}>
      <Line data={temperatureData} options={temperatureOptions} />
    </div>
  );
};

export default TemperatureChart;
