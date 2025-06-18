import { BiBarChartAlt2 } from "react-icons/bi"; 
import { BsFillSkipStartBtnFill } from "react-icons/bs"; 
import { BiBookAdd } from "react-icons/bi";
import { FaHistory } from "react-icons/fa"; 
import { CgNotifications } from "react-icons/cg"; 
import { MdFeedback } from "react-icons/md"; 
import { BiBasket } from "react-icons/bi"; 
import { FcSalesPerformance } from "react-icons/fc"; 
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  LogIn,
  UserPlus,
  HeartHandshake,
  FileBarChart2,
  HelpCircle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard />, path: "/" },
  //{ name: "Produk", icon: <Box />, path: "/produk" },
  //{ name: "Pelanggan", icon: <Users />, path: "/pelanggan" },
  //{ name: "Laporan", icon: <BarChart2 />, path: "/laporan" },
  //{ name: "Penjualan", icon: <BarChart2 />, path: "/Penjualan" },
  { name: "Pendaftaran online", icon: <BiBookAdd />, path: "/pendaftaran" },
  // { name: "Riwayat", icon: <BiBookAdd />, path: "/riwayat" },
  { name: "Riwayat", icon: <BiBookAdd />, path: "/riwayatpages" },
  //{ name: "Produk", icon: <Box />, path: "/produk" },
  //{ name: "Laporan", icon: <BarChart2 />, path: "/laporan" },
  { name: "Penjualan", icon: <BiBasket /> , path: "/Penjualan" },
  //{ name: "Feedback", icon: <MdFeedback /> , path: "/Feedback" },
  { name: "Reminder", icon: <CgNotifications /> , path: "/Reminder" },
  //{ name: "Riwayat", icon: <FaHistory /> , path: "/RiwayatPages" },
  { name: "Pelanggan", icon: <Users />, path: "/pelanggan" },
  //{ name: "Penjualan", icon: <ShoppingCart />, path: "/penjualan" },
  { name: "Rekomendasi", icon: <HeartHandshake />, path: "/rekomendasi" },
  { name: "Laporan & Analisis", icon: <FileBarChart2 />, path: "/laporan" },
  { name: "FAQ", icon: <HelpCircle />, path: "/faq" },
  { name: "Konten", icon: <BiBookAdd />, path: "/konten-edukasi" },
  { name: "Promosi", icon: <BsFillSkipStartBtnFill /> , path: "/filter-hewan" },
  { name: "Segmentasi Pelanggan", icon: <BiBarChartAlt2 />, path: "/segmentasi" }

  // Menu Tambah Data baru
  //{ name: "Tambah Data", icon: <UserPlus />, path: "/tambah-data" },
];

const accountItems = [
  { name: "Pengaturan Akun", icon: <Settings />, path: "/akun" },
  { name: "Sign In", icon: <LogIn />, path: "/signin" },
  { name: "Sign Up", icon: <UserPlus />, path: "/signup" },
];

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="text-xl font-bold mb-8 text-purple-700">UMKM CRM</div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? "bg-purple-200 text-purple-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? "bg-purple-200 text-purple-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
