import { NavLink } from "react-router-dom";
import { BiBookAdd, BiHistory, BiBell, BiHeart, BiSolidTag } from "react-icons/bi"; // Menggunakan ikon solid untuk Promosi

const BottomNavbar = () => {
  // Pisahkan menu biasa dari aksi utama
  const menuItems = [
    { path: "/user/riwayat", label: "Riwayat", icon: <BiHistory size={24} /> },
    { path: "/user/reminder", label: "Reminder", icon: <BiBell size={24} /> },
    { path: "/user/rekomendasi", label: "Rekomendasi", icon: <BiHeart size={24} /> },
    { path: "/user/promosi", label: "Promosi", icon: <BiSolidTag size={24} /> }, // Ikon lebih relevan
  ];

  // Bagi menu menjadi dua untuk sisi kiri dan kanan dari tombol utama
  const leftMenu = menuItems.slice(0, 2);
  const rightMenu = menuItems.slice(2, 4);

  const NavItem = ({ path, label, icon }) => (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 w-full transition-all duration-200 ${
          isActive ? "text-purple-600" : "text-gray-500 hover:text-purple-500"
        }`
      }
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </NavLink>
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t z-50 md:hidden">
      <div className="flex items-center justify-around h-full">
        {/* Menu Kiri */}
        <div className="flex justify-around w-full h-full items-center">
          {leftMenu.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}
        </div>

        {/* Tombol Aksi Utama (FAB) */}
        <div className="relative w-20 flex justify-center">
          <NavLink
            to="/user/pendaftaran" // Path untuk aksi utama
            className={({ isActive }) =>
              `absolute -translate-y-6 flex items-center justify-center h-16 w-16 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-110 ${
                isActive ? "bg-purple-700" : "bg-purple-600"
              }`
            }
          >
            <BiBookAdd size={30} />
          </NavLink>
        </div>

        {/* Menu Kanan */}
        <div className="flex justify-around w-full h-full items-center">
          {rightMenu.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;