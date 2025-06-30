import {
  LayoutDashboard, Users, HeartHandshake, FileBarChart2, HelpCircle, Settings, LogIn, Utensils,
  BookCheck, History, ShoppingBasket, BellRing, FileText, BadgePercent,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaUserShield, FaUser } from "react-icons/fa";

// --- Data menu yang sudah dikelompokkan untuk kerapian ---
const menuGroups = [
  {
    title: "Utama",
    items: [
      { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/Dashboard" },
      { name: "Pendaftaran", icon: <BookCheck size={20} />, path: "/pendaftaran" },
    ],
  },
  {
    title: "Manajemen",
    items: [
      { name: "Riwayat", icon: <History size={20} />, path: "/riwayatadmin" },
      { name: "Penjualan", icon: <ShoppingBasket size={20} />, path: "/Penjualan" },
      { name: "Pelanggan", icon: <Users size={20} />, path: "/pelanggan" },
      { name: "Reminder", icon: <BellRing size={20} />, path: "/Reminder" },
    ],
  },
  {
    title: "Konten & Analisis",
    items: [
      { name: "Rekomendasi", icon: <HeartHandshake size={20} />, path: "/rekomendasi" },
      { name: "Laporan", icon: <FileBarChart2 size={20} />, path: "/laporan" },
      { name: "Konten Edukasi", icon: <FileText size={20} />, path: "/konten-edukasi" },
      { name: "Promosi", icon: <BadgePercent size={20} />, path: "/filter-hewan" },
      { name: "FAQ", icon: <HelpCircle size={20} />, path: "/faq" },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isLoginMenuOpen, setLoginMenuOpen] = useState(false);

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-xl px-4 py-6 flex flex-col z-30 hidden md:block">
      {/* Logo */}
      <Link to="/Dashboard" className="flex items-center gap-3 text-2xl font-bold mb-8 text-gray-800 px-3">
        <img
          src="/images/logoupt.png"
          alt="Logo UPT"
          className="w-10 h-10 object-contain"
        />
        <span>LVKH</span>
      </Link>

      {/* Wrapper untuk menu agar bisa di-scroll */}
      <div className="flex-grow overflow-y-auto pr-2">
        {/* Loop untuk setiap grup menu */}
        {menuGroups.map((group) => (
          <div key={group.title} className="mb-6">
            {/* Judul grup */}
            <h3 className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              {group.title}
            </h3>
            {/* Loop untuk item di dalam grup */}
            <nav className="space-y-1">
              {group.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-4 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-purple-100 hover:text-purple-800"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium text-sm">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
          {/* Submenu "Masuk sebagai" */}
          <div>
            <button
              onClick={() => setLoginMenuOpen(!isLoginMenuOpen)}
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg hover:bg-purple-100 transition text-gray-600"
            >
              <div className="flex items-center gap-4">
                <LogIn size={20} />
                <span className="font-medium text-sm">Masuk sebagai</span>
              </div>
              <span className={`transition-transform duration-300 ${isLoginMenuOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
            {/* Transisi untuk submenu */}
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isLoginMenuOpen ? "max-h-40 mt-1" : "max-h-0"}`}>
              <div className="pl-8 space-y-1">
                <Link to="/admin" className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${isActive("/admin") ? "text-purple-800 font-semibold" : "text-gray-500 hover:text-purple-800"}`}>
                  <FaUserShield /> Admin
                </Link>
                <Link to="/user" className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${isActive("/user") ? "text-purple-800 font-semibold" : "text-gray-500 hover:text-purple-800"}`}>
                  <FaUser /> Pelanggan
                </Link>
              </div>
            </div>
          </div>
    </aside>
  );
};

export default Sidebar;