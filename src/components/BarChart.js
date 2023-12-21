import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ barChartData }) => {
  const data = {
    labels: barChartData.map(item => item.priceRange),
    datasets: [
      {
        label: 'Number of Items',
        data: barChartData.map(item => item.numberOfItems),
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
