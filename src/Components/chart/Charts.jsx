import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['PDFs', 'Word', 'Excel', 'XML', 'Otros'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(255, 99, 133)',
        'rgb(54, 163, 235)',
        'rgb(255, 207, 86)',
        'rgb(75, 192, 192)',
        'rgb(255, 102, 102)',
      ],
      borderColor: [
        '#ff63850',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return <Doughnut data={data} options={{ responsive: true }} />;
}
