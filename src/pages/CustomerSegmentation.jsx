import SegmentationCard from "../components/SegmentationCard";
import { FaDog, FaCat, FaUserClock } from "react-icons/fa";

export default function CustomerSegmentation() {
  // Contoh data segmentasi (bisa diganti dari backend/DB)
  const data = [
    {
      title: "Pelanggan Kucing",
      icon: FaCat,
      value: 120,
      description: "Pelanggan yang membawa kucing ke klinik",
    },
    {
      title: "Pelanggan Anjing",
      icon: FaDog,
      value: 85,
      description: "Pelanggan yang membawa anjing ke klinik",
    },
    {
      title: "Sering Berkunjung",
      icon: FaUserClock,
      value: 45,
      description: "Pelanggan dengan kunjungan lebih dari 3 kali",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Segmentasi Pelanggan
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <SegmentationCard
            key={index}
            title={item.title}
            icon={item.icon}
            value={item.value}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
