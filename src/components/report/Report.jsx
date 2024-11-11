import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import "./report.css";
import FullScreenLoader from "../fullscreenloader/FullScreenLoader";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Report = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://acmback.onrender.com/forms/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;

  const countOccurrences = (arr) =>
    arr.reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {});

  const sexData = countOccurrences(data.map((item) => item.sex));
  const educationData = countOccurrences(data.map((item) => item.education));
  const occupationData = countOccurrences(data.map((item) => item.occupation));
  const maritalStatusData = countOccurrences(
    data.map((item) => item.maritalStatus)
  );

  const totalRespondents = data.length;

  const livestockData = {
    goat: data.reduce(
      (sum, item) => sum + (parseInt(item.livestockGoat) || 0),
      0
    ),
    cow: data.reduce(
      (sum, item) => sum + (parseInt(item.livestockCow) || 0),
      0
    ),
    chicken: data.reduce(
      (sum, item) => sum + (parseInt(item.livestockChicken) || 0),
      0
    ),
    others: data.reduce(
      (sum, item) => sum + (parseInt(item.livestockOthers) || 0),
      0
    ),
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
      tooltip: {
        titleColor: "white",
        bodyColor: "white",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
      title: {
        display: true,
        color: "white",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      y: {
        ticks: { color: "white" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  const pieChartData = {
    labels: Object.keys(sexData),
    datasets: [
      {
        data: Object.values(sexData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const barChartData = {
    labels: Object.keys(educationData),
    datasets: [
      {
        label: "Education Level",
        data: Object.values(educationData),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const occupationChartData = {
    labels: Object.keys(occupationData),
    datasets: [
      {
        label: "Occupation",
        data: Object.values(occupationData),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const maritalStatusChartData = {
    labels: Object.keys(maritalStatusData),
    datasets: [
      {
        data: Object.values(maritalStatusData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const respondentsChartData = {
    labels: ["Total Respondents"],
    datasets: [
      {
        data: [totalRespondents],
        backgroundColor: ["#4BC0C0"],
        hoverBackgroundColor: ["#4BC0C0"],
      },
    ],
  };

  const livestockChartData = {
    labels: Object.keys(livestockData),
    datasets: [
      {
        label: "Number of Livestock",
        data: Object.values(livestockData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="survey-statistics-dashboard">
      {loading && <FullScreenLoader />}
      <div className="stat-header">
        <h1>Village Survey Statistics</h1>
        <svg
          width="300"
          height="35"
          viewBox="0 0 462 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 20C260.2 -5.6 415.667 4.66667 461 13M55 32C314.2 6.4 388.667 4.66667 434 13"
            stroke="#FFDE91"
            strokeWidth="6"
          />
        </svg>
      </div>
      <div className="chart-grid">
        <div className="chart-item">
          <h2>Livestock Distribution</h2>
          <Bar data={livestockChartData} options={chartOptions} />
        </div>
        <div className="chart-item">
          <h2>Total Survey Respondents</h2>
          <Doughnut
            data={respondentsChartData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  ...chartOptions.plugins.title,
                  text: `Total Respondents: ${totalRespondents}`,
                },
              },
            }}
          />
        </div>
        <div className="chart-item">
          <h2>Gender Distribution</h2>
          <Pie data={pieChartData} options={chartOptions} />
        </div>
        <div className="chart-item">
          <h2>Education Levels</h2>
          <Bar data={barChartData} options={chartOptions} />
        </div>
        <div className="chart-item">
          <h2>Occupation Distribution</h2>
          <Bar data={occupationChartData} options={chartOptions} />
        </div>
        <div className="chart-item">
          <h2>Marital Status</h2>
          <Pie data={maritalStatusChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Report;
