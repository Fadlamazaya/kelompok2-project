import { Link, useLocation } from "react-router-dom";
import { BiBookAdd, BiHistory, BiBell, BiHeart } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";

const BottomNavbar = () => {
  const location = useLocation();

  const menu = [
    { path: "/user/pendaftaran", label: "Daftar", icon: <BiBookAdd size={22} /> },
    { path: "/user/riwayat", label: "Riwayat", icon: <BiHistory size={22} /> },
    { path: "/user/reminder", label: "Reminder", icon: <BiBell size={22} /> },
    { path: "/user/rekomendasi", label: "Rekomendasi", icon: <BiHeart size={22} /> },
    { path: "/user/promosi", label: "Promosi", icon: <BsFillPlayFill size={22} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow z-50 md:hidden">
      <ul className="flex justify-between px-4 py-2 text-sm text-gray-700">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex flex-col items-center px-2 py-1 ${
                location.pathname === item.path ? "text-purple-600 font-semibold" : ""
              }`}
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavbar;
