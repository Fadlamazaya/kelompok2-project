import { Link, NavLink } from "react-router-dom";

function UserNavbar() {
  const navItems = [
    { name: "Home", path: "/user/home" },
    { name: "Pendaftaran", path: "/user/pendaftaran" },
    { name: "Riwayat", path: "/user/riwayat" },
    { name: "Profil", path: "/user/profil" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo + Judul */}
          <div className="flex items-center gap-2">
            <img
              src="/images/logoupt.png" // Pastikan path dan file sesuai
              alt="Logo UPT"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-bold text-purple-700">Klinik Hewan</h1>
          </div>

          {/* Bagian kanan navbar */}
          <div className="flex items-center space-x-4">
            {/* Tombol Member */}
            <Link
              to="/member"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition"
            >
              Member
            </Link>

            {/* Navigasi lainnya */}
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "text-purple-700 hover:bg-purple-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar
