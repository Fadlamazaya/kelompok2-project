import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer"; // Pastikan file ini sudah dibuat

export default function UserLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-200 text-gray-900 flex flex-col">
      {/* Navbar */}
      <UserNavbar />

      {/* Hero Section */}
      <section className="w-full bg-white shadow-sm py-12 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 leading-snug">
              Selamat Datang di Klinik Hewan UPT LVKH
            </h1>
            <p className="text-md md:text-lg text-gray-600 mt-4">
              Solusi layanan kesehatan untuk hewan peliharaanmu. Cepat, mudah, dan terpercaya.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src="/images/fotoupt.webp"
              alt="Gedung Klinik"
              className="rounded-2xl shadow-xl max-w-[90%] md:max-w-[440px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* Konten Utama */}
      <main className="w-full px-6 md:px-20 pb-20 flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bottom Navbar (opsional untuk mobile view) */}
      <BottomNavbar />
    </div>
  );
}
