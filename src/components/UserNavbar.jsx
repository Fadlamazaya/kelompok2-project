import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sparkles } from "lucide-react"; // Menggunakan ikon baru untuk saran

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V5a2 2 0 10-4 0v.083A6 6 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

function UserNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  // --- Logika untuk Campaign Management ---
  // 1. Data dummy untuk simulasi riwayat & jenis hewan peliharaan pengguna
  const petContext = {
    namaHewan: "Milo",
    jenisHewan: "Kucing Persia",
    layananTerakhir: "Vaksinasi Tahunan",
  };

  // 2. Sistem sederhana untuk menghasilkan saran berdasarkan konteks
  const getServiceSuggestions = (context) => {
    let suggestions = [];

    // Saran berdasarkan jenis hewan
    if (context.jenisHewan.includes("Persia") || context.jenisHewan.includes("Anggora")) {
      suggestions.push({
        title: "Grooming & Perawatan Bulu",
        reason: `Direkomendasikan untuk ${context.jenisHewan} agar bulu tetap sehat.`,
        link: "/user/pendaftaran?service=grooming",
      });
    }

    // Saran berdasarkan layanan terakhir
    if (context.layananTerakhir === "Vaksinasi Tahunan") {
      suggestions.push({
        title: "Pemeriksaan Gigi Rutin",
        reason: "Lanjutan ideal setelah pemeriksaan kesehatan umum.",
        link: "/user/pendaftaran?service=dental",
      });
    }

    // Saran umum sebagai campaign
    suggestions.push({
      title: "Paket Medical Check-Up",
      reason: "Dapatkan promo spesial untuk pemeriksaan kesehatan lengkap!",
      link: "/user/pendaftaran?service=checkup",
    });

    return suggestions;
  };

  const saranLayanan = getServiceSuggestions(petContext);
  // --- Akhir Logika Campaign Management ---

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
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/images/logoupt.png" alt="Logo UPT" className="w-10 h-10 object-contain" />
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">Klinik Hewan</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={({ isActive }) => `relative px-1 py-1 text-base font-medium transition-colors duration-200 ${isActive ? "text-purple-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-purple-600" : "text-gray-600 hover:text-purple-600"}`}>
                {item.name}
              </NavLink>
            ))}
            
            {/* --- Lonceng Notifikasi untuk Campaign Management --- */}
            <div className="relative" onMouseEnter={() => setIsNotifOpen(true)} onMouseLeave={() => setIsNotifOpen(false)}>
              <button className="relative p-1 text-gray-600 hover:text-purple-600 focus:outline-none" aria-label="Saran untuk Anda">
                <BellIcon />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-1 ring-white"></span>
              </button>

              {/* Kotak Pop-up Saran Layanan */}
              {isNotifOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-20">
                  <div className="p-3 font-bold text-gray-800 border-b flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                    Saran Layanan Untuk Anda
                  </div>
                  <ul className="divide-y divide-gray-100">
                    {saranLayanan.map((saran, index) => (
                      <li key={index}>
                        <Link to={saran.link} onClick={() => setIsNotifOpen(false)} className="block p-3 hover:bg-gray-50 group">
                          <p className="font-semibold text-sm text-purple-700 group-hover:text-purple-800">{saran.title}</p>
                          <p className="text-xs text-gray-600 mt-1">{saran.reason}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="p-2 text-center border-t bg-gray-50">
                    <Link to="/user/pendaftaran" onClick={() => setIsNotifOpen(false)} className="text-sm text-purple-600 hover:underline font-medium">Lihat Semua Layanan</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/member" className="ml-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-base font-semibold shadow-md transition-colors duration-200">
              Member
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-md" aria-label="Notifikasi">
              <BellIcon />
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-1 ring-white"></span>
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100" aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={isMenuOpen}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100 py-2" : "max-h-0 opacity-0"} overflow-hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path} onClick={handleLinkClick} className={({ isActive }) => `block px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${isActive ? "bg-purple-100 text-purple-700" : "text-gray-700 hover:bg-gray-50 hover:text-purple-700"}`}>
              {item.name}
            </NavLink>
          ))}
          <Link to="/member" onClick={handleLinkClick} className="block w-full text-center mt-3 bg-red-600 text-white px-4 py-2.5 rounded-md text-base font-semibold shadow-md transition-all duration-200 hover:bg-red-700">
            Member
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;