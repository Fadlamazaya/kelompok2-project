import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Komponen Ikon bisa dibuat terpisah atau langsung di dalam komponen utama seperti ini
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function UserNavbar() {
  // State untuk mengontrol visibilitas menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/user/home" },
    { name: "Pendaftaran", path: "/user/pendaftaran" },
    { name: "Riwayat", path: "/user/riwayat" },
    { name: "Profil", path: "/user/profil" },
    { name: "Login", path: "/user/login" },
  ];

  const handleLinkClick = () => {
    // Menutup menu mobile ketika salah satu link di-klik
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Judul */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              src="/images/logoupt.png"
              alt="Logo UPT"
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide">
              Klinik Hewan
            </h1>
          </div>

          {/* Navigasi Desktop (sembunyi di mobile) */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-purple-700 hover:bg-purple-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/member"
              className="ml-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm transition-transform hover:scale-105"
            >
              Member
            </Link>
          </div>

          {/* Tombol Hamburger (hanya tampil di mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-700 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (tampil/sembunyi berdasarkan state) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "text-purple-700 hover:bg-purple-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
           <Link
              to="/member"
              onClick={handleLinkClick}
              className="block w-full text-left mt-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-2 rounded-md text-base font-semibold shadow-sm"
            >
              Member
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;