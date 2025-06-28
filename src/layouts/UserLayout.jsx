import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";
import UserNavbar from "../components/UserNavbar";

export default function UserLayout() {
  return (
    <div className="min-h-screen pb-14 bg-gray-50 text-gray-900">
      {/* Navbar utama di atas */}
      <UserNavbar />

      {/* Banner / Hero Image */}
      <div className="w-full my-6">
          <img
            src="/images/fotoupt.webp"
            alt="Hewan Peliharaan"
            className="relative max-w-6xl w-800 h-150 mx-auto overflow-hidden rounded-xl shadow mb-6"
          />
        </div>

      {/* Konten utama halaman */}
      <main className="px-4 pb-20">
        <Outlet />
      </main>

      {/* Bottom Navbar */}
      <BottomNavbar />
    </div>
  );
}
