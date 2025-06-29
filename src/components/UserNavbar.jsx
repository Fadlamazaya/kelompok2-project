import { Link, NavLink } from "react-router-dom";

function UserNavbar() {
  const navItems = [
    { name: "Home", path: "/user/home" },
    { name: "Pendaftaran", path: "/user/pendaftaran" },
    { name: "Riwayat", path: "/user/riwayat" },
    { name: "Profil", path: "/user/profil" },
    { name: "Login", path: "/user/login" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo & Judul */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logoupt.png"
            alt="Logo UPT"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide">
            Klinik Hewan
          </h1>
        </div>

        {/* Navigasi */}
        <div className="flex items-center gap-4">
          {/* Member Button */}
          <Link
            to="/member"
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm transition-transform hover:scale-105"
          >
            Member
          </Link>

          {/* Menu Nav */}
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-purple-600 text-white shadow"
                    : "text-purple-700 hover:bg-purple-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
