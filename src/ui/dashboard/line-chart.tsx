'use client';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineChart = ({ labels, positivePoints, negativePoints, belongsToData }: {
  labels: string[];
  positivePoints: (number | null)[];
  negativePoints: (number | null)[];
  belongsToData: {
    label: string;
    data: (number | null)[];
    backgroundColor: string;
  }[];
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Positive',
        data: positivePoints,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.8)',
        borderColor: 'rgba(75,192,192,1)',
        spanGaps: true,
        tension: 0.1,
      },
      {
        label: 'Negative',
        data: negativePoints,
        fill: true,
        backgroundColor: 'rgba(255,99,132,0.8)',
        borderColor: 'rgba(255,99,132,1)',
        spanGaps: true,
        tension: 0.1,
      },
      // Positive Area
      ...belongsToData.map(({ label, data, backgroundColor }) => ({
        label,
        data,
        fill: true,
        backgroundColor,
      })),
      // Negative Area
      ...belongsToData.map(({ data, backgroundColor }) => ({
        label: 'Negative Area',
        data: data.map(point => point === null ? null : -point),
        fill: true,
        backgroundColor,
      })),
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          filter: function(item: { text: string }) {
            return item.text !== 'Negative Area';
          },
          font: {
            size: 16,
          },
        }
      },
      title: {
        display: true,
        text: 'Motivation Chart',
        font: {
          size: 24,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 18, // Adjust the size as needed
          },
        },
      },
      y: {
        min: -10,
        max: 10,
        ticks: {
          font: {
            size: 18, // Adjust the size as needed
          },
        },
      },
    },
  };

  return (
    <div className='flex max-w-full max-h-full bg-white mx-6 p-6'>
      <Line data={data}
        options={options}
        className='flex flex-row w-full h-full'/>
    </div>
  );
};

export default LineChart;
