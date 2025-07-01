// UserNavbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/user/home" },
    { name: "Pendaftaran", path: "/user/pendaftaran" },
    { name: "Riwayat", path: "/user/riwayat" },
    { name: "Profil", path: "/user/profil" },
    { name: "FAQ", path: "/user/faq" },
    { name: "Login", path: "/user/login" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Tinggi navbar sedikit lebih rendah */}
          {/* Logo & Judul */}
          <div className="flex-shrink-0 flex items-center gap-2"> {/* Gap lebih kecil */}
            <img
              src="/images/logoupt.png"
              alt="Logo UPT"
              className="w-10 h-10 object-contain" // Ukuran logo sedikit lebih kecil
            />
            <h1 className="text-xl font-bold text-gray-800 tracking-tight"> {/* Font lebih tebal, warna abu gelap */}
              Klinik Hewan
            </h1>
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-6"> {/* Jarak antar item lebih lebar */}
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-1 py-1 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-purple-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-purple-600" // Underline untuk active
                      : "text-gray-600 hover:text-purple-600" // Hover text color
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/member"
              className="ml-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-base font-semibold shadow-md transition-colors duration-200" // Tombol merah seperti Halodoc
            >
              Member
            </Link>
          </div>

          {/* Tombol Hamburger (hanya tampil di mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-200"
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100 py-2" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-t border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-purple-100 text-purple-700" // Background subtle untuk active
                    : "text-gray-700 hover:bg-gray-50 hover:text-purple-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/member"
            onClick={handleLinkClick}
            className="block w-full text-center mt-3 bg-red-600 text-white px-4 py-2.5 rounded-md text-base font-semibold shadow-md transition-all duration-200 hover:bg-red-700"
          >
            Member
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;