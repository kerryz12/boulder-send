import React from "react";
import type { GradeDistributionType } from "../../types";
import { Card } from "..";

// import { Bar } from 'react-chartjs-2'; // Example with Chart.js
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface GradeDistributionProps {
  distribution: GradeDistributionType;
}

const GradeDistribution: React.FC<GradeDistributionProps> = ({
  distribution,
}) => {
  const hasData = Object.keys(distribution).length > 0;

  // const chartData = {
  //   labels: Object.keys(distribution).sort(), // Sort grades for consistent order
  //   datasets: [
  //     {
  //       label: 'Climbs per Grade',
  //       data: Object.keys(distribution).sort().map(grade => distribution[grade]),
  //       backgroundColor: 'rgba(59, 130, 246, 0.5)', // blue-500 with opacity
  //       borderColor: 'rgba(59, 130, 246, 1)',     // blue-500
  //       borderRadius: 4,
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: { legend: { display: false } },
  //   scales: { y: { beginAtZero: true, grid: { color: '#e5e7eb' } }, x: { grid: { display: false } } }
  // };

  return (
    <Card
      title="Grade Distribution"
      titleClassName="text-2xl font-bold text-slate-800 mb-6"
    >
      {hasData ? (
        <div className="h-64 md:h-80 p-1 bg-white border border-slate-200 rounded-lg">
          {/* Placeholder for chart */}
          {/* <Bar options={options} data={chartData} /> */}
          <div className="flex items-center justify-center h-full">
            <p className="text-slate-500 text-center p-4">
              Chart will be displayed here. <br />
            </p>
          </div>
        </div>
      ) : (
        <p className="text-slate-500">
          Not enough climb data to display distribution.
        </p>
      )}
    </Card>
  );
};

export default GradeDistribution;
