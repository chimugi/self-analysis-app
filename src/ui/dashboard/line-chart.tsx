'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ labels, positivePoints, negativePoints }: {
  labels: Date[];
  positivePoints: (number | null)[];
  negativePoints: (number | null)[];
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Positive',
        data: positivePoints,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        spanGaps: true,
      },
      {
        label: 'Negative',
        data: negativePoints,
        fill: false,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        spanGaps: true,
      }
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Line Chart Example',
      },
    },
    y: {
      min: -10,
      max: 10,
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
