import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  PawPrint,
  CalendarCheck,
  AlertTriangle,
  ClipboardList,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const stats = [
    {
      label: "Kunjungan Hari Ini",
      value: "270",
      percent: "+12%",
      color: "green",
      icon: <PawPrint className="w-6 h-6 text-green-500" />,
    },
    {
      label: "Pendapatan Hari ini",
      value: "22 Juta",
      percent: "+8%",
      color: "blue",
      icon: <CalendarCheck className="w-6 h-6 text-blue-500" />,
    },
    {
      label: "Pelanggan Baru",
      value: "5",
      percent: "-3%",
      color: "red",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    },
    {
      label: "Layanan Terlaris",
      value: "Sterilisasi",
      percent: "+15%",
      color: "purple",
      icon: <ClipboardList className="w-6 h-6 text-purple-500" />,
    },
  ];

  const barData = {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    datasets: [
      {
        label: "Jumlah Kunjungan",
        data: [30, 45, 50, 40, 55, 60, 58],
        backgroundColor: "#34D399",
        borderRadius: 10,
        barPercentage: 0.6,
      },
    ],
  };

  const horizontalBarData = {
    labels: ["Sterilisasi", "Vaksinasi Rabies", "Pemeriksaan", "Pemeriksaan Darah", "Bedah"],
    datasets: [
      {
        label: "Layanan Terlaris",
        data: [90, 75, 50, 35, 10],
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"],
        borderRadius: 10,
        barPercentage: 0.6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#1F2937", font: { size: 13, weight: "600" } },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6B7280" },
      },
      y: {
        grid: { color: "#E5E7EB" },
        ticks: { color: "#6B7280" },
      },
    },
  };

  const horizontalChartOptions = {
    indexAxis: "y",
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#1F2937", font: { size: 13, weight: "600" } },
      },
    },
    scales: {
      x: {
        grid: { color: "#E5E7EB" },
        ticks: { color: "#6B7280" },
      },
      y: {
        grid: { display: false },
        ticks: { color: "#6B7280" },
      },
    },
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Klinik Hewan</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, percent, color, icon }) => {
          const isPositive = percent.startsWith("+");
          const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;
          const trendColor = isPositive ? `text-${color}-600` : `text-${color}-600`;

          return (
            <div
              key={label}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-gray-500">{label}</p>
                {icon}
              </div>
              <h2 className={`text-2xl font-bold text-${color}-600 flex items-center gap-2`}>
                {value}
                <span className={`flex items-center text-sm font-semibold ${trendColor}`}>
                  <TrendIcon className="w-4 h-4" />
                  {percent}
                </span>
              </h2>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Jumlah Kunjungan per Hari</h2>
          <p className="text-sm text-gray-500 mb-4">Data mingguan dari Senin sampai Minggu</p>
          <Bar options={chartOptions} data={barData} />
        </div>

        <div className="bg-white rounded-3xl shadow p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Layanan Terlaris</h2>
          <p className="text-sm text-gray-500 mb-4">5 layanan paling sering dipakai minggu ini</p>
          <Bar options={horizontalChartOptions} data={horizontalBarData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
