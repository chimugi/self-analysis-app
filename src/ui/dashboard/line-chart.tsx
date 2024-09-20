// 'use client';
// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import { getExperiences, getResumes } from '@/lib/getter';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// export async function getServerSideProps() {
//   const resumes = await getResumes();
//   const experiences = await getExperiences();

//   return {
//     props: {
//       resumes,
//       experiences,
//     },
//   };
// }

// const LineChart = ({ resumes, experiences }) => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   };
  
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//       },
//       title: {
//         display: true,
//         text: 'Line Chart Example',
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };

// export default LineChart;
