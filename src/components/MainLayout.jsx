import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex w-full">
      {/* Sidebar kiri, pastikan ukuran tetap */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Konten utama kanan */}
      <div id="main-content" className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
