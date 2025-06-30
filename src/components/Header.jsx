// src/components/Header.jsx

import { Search, User, LogOut, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// Custom Hook untuk deteksi klik di luar elemen
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref untuk dropdown

  // Gunakan custom hook, dropdown akan tertutup saat klik di luar
  useOnClickOutside(dropdownRef, () => setDropdownOpen(false));
  
  const location = useLocation();

  // Membuat breadcrumb dinamis dari path URL
  const pathnames = location.pathname.split('/').filter((x) => x);
  const currentPage = pathnames[pathnames.length - 1] || 'Dashboard';
  const formattedPageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1).replace('-', ' ');

  // Data untuk item dropdown
  const dropdownItems = [
      { name: "Akun", icon: <User size={16}/>, path: "/akun" },
      { name: "Pengaturan", icon: <Settings size={16}/>, path: "/pengaturan" },
      { name: "Sign Out", icon: <LogOut size={16}/>, path: "/signin" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg shadow-sm px-6 py-3 flex justify-between items-center">
      
      {/* Breadcrumb Dinamis */}
      <div className="text-sm text-gray-500 whitespace-nowrap">
        Pages / <span className="text-gray-900 font-semibold">{formattedPageName}</span>
      </div>

      {/* Bagian Kanan */}
      <div className="flex items-center gap-5">
        
        {/* Search Bar Rapi */}
        <div className="relative hidden sm:block group">
          <input
            type="text"
            placeholder="Type here..."
            className="w-48 px-4 py-2 pl-10 text-sm bg-gray-100 border border-transparent rounded-full focus:outline-none focus:w-64 focus:border-purple-300 transition-all duration-300"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500" />
        </div>

        {/* Tombol Member dengan Gradien */}
        <Link
          to="/member"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm transition-transform hover:scale-105"
        >
          Member
        </Link>

        {/* Dropdown Pengguna */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-purple-100 rounded-full transition"
          >
            <User className="w-5 h-5 text-gray-600" />
          </button>

          {/* Menu Dropdown dengan Animasi */}
          <div
            className={`absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-xl py-2 text-sm z-30 transition-all duration-200 ease-out origin-top-right
              ${dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            {dropdownItems.map(item => (
                <Link key={item.name} to={item.path} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-gray-700">
                    {item.icon}
                    <span>{item.name}</span>
                </Link>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;