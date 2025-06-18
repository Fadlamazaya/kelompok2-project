import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";

export default function UserLayout() {
  return (
    <div className="min-h-screen pb-14 bg-gray-50 text-gray-900">
      <header className="bg-purple-600 text-white p-4 text-center font-semibold">
        Klinik Hewan – Pelanggan
      </header>

      <main className="p-4">
        <Outlet />
      </main>

      <BottomNavbar />
    </div>
  );
}
