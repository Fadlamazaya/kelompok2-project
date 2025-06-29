import { BiBarChartAlt2 } from "react-icons/bi";
import { BsFillSkipStartBtnFill } from "react-icons/bs";
import { BiBookAdd, BiBasket } from "react-icons/bi";
import { CgNotifications } from "react-icons/cg";
import {
  LayoutDashboard,
  Users,
  HeartHandshake,
  FileBarChart2,
  HelpCircle,
  Settings,
  LogIn,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaUserShield, FaUser } from "react-icons/fa"; // icon Admin dan User


const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard />, path: "/Dashboard" },
  { name: "Pendaftaran online", icon: <BiBookAdd />, path: "/pendaftaran" },
  { name: "Riwayat", icon: <BiBookAdd />, path: "/riwayatpages" },
  { name: "Penjualan", icon: <BiBasket />, path: "/Penjualan" },
  { name: "Reminder", icon: <CgNotifications />, path: "/Reminder" },
  { name: "Pelanggan", icon: <Users />, path: "/pelanggan" },
  { name: "Rekomendasi", icon: <HeartHandshake />, path: "/rekomendasi" },
  { name: "Laporan & Analisis", icon: <FileBarChart2 />, path: "/laporan" },
  { name: "FAQ", icon: <HelpCircle />, path: "/faq" },
  { name: "Konten", icon: <BiBookAdd />, path: "/konten-edukasi" },
  { name: "Promosi", icon: <BsFillSkipStartBtnFill />, path: "/filter-hewan" },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [isLoginMenuOpen, setLoginMenuOpen] = useState(false);

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg px-4 py-6 overflow-y-auto z-30 hidden md:block">
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-bold mb-8 text-purple-700">
        <img
          src="/images/logoupt.png"
          alt="Logo UPT"
          className="w-10 h-10 object-contain"
        />
        UPT LVKH
      </div>

      {/* Menu Utama */}
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${isActive(item.path)
              ? "bg-purple-200 text-purple-800 font-semibold"
              : "text-gray-700"
              }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Akun */}
      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {/* Submenu masuk sebagai */}
        <div>
          <button
            onClick={() => setLoginMenuOpen(!isLoginMenuOpen)}
            className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-purple-100 transition text-gray-700"
          >
            <div className="flex items-center gap-3">
              <LogIn className="w-5 h-5" />
              <span>Masuk sebagai</span>
            </div>
            <span className="text-xs">
              {isLoginMenuOpen ? "▲" : "▼"}
            </span>
          </button>

          {isLoginMenuOpen && (
            <div className="ml-8 mt-1 space-y-1">
              <Link
                to="/admin"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-purple-100 transition ${isActive("/admin")
                    ? "bg-purple-200 text-purple-800 font-semibold"
                    : "text-gray-700"
                  }`}
              >
                <FaUserShield className="text-purple-700" />
                <span>Admin</span>
              </Link>

              <Link
                to="/user"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-purple-100 transition ${isActive("/user")
                    ? "bg-purple-200 text-purple-800 font-semibold"
                    : "text-gray-700"
                  }`}
              >
                <FaUser className="text-purple-700" />
                <span>Pelanggan</span>
              </Link>
            </div>
          )}

        </div>

        {/* Pengaturan Akun */}
        <Link
          to="/akun"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${isActive("/akun")
            ? "bg-purple-200 text-purple-800 font-semibold"
            : "text-gray-700"
            }`}
        >
          <Settings className="w-5 h-5" />
          Pengaturan Akun
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
