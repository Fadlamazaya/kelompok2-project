import { FaDog, FaCat, FaUserClock } from "react-icons/fa";

export default function SegmentationCard({ title, icon: Icon, value, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-blue-600 text-3xl">
          <Icon />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-4xl font-bold text-gray-800">{value}</p>
      <p className="text-gray-500 text-sm mt-2">{description}</p>
    </div>
  );
}
