// ./components/BarChart.js

import React from "react";
//import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const BarChart = () => {

  const labels = ["January", "February", "March", "April", "May", "June","July","August","September","October"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "PROCESSED_BOD",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [9, 10, 5, 2, 20, 30, 45, 3,98, 78, 2],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;