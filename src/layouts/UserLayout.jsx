// BARU: Import Link dan beberapa ikon dari lucide-react untuk konten edukasi
import { Link, Outlet } from "react-router-dom";
import { Syringe, ShieldCheck, HeartPulse } from "lucide-react"; 
import BottomNavbar from "../components/BottomNavbar";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";

// BARU: Data statis untuk konten edukasi.
const edukasiData = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />,
    title: "Pentingnya Vaksinasi",
    description: "Ketahui jadwal dan jenis vaksin yang wajib untuk menjaga hewan kesayangan Anda dari penyakit berbahaya.",
    link: "/edukasi/pentingnya-vaksinasi",
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-purple-600 mb-4" />,
    title: "Tips Merawat Anjing & Kucing",
    description: "Panduan praktis perawatan harian, mulai dari makanan, kebersihan, hingga aktivitas fisik yang ideal.",
    link: "/edukasi/tips-perawatan",
  },
  {
    icon: <Syringe className="w-10 h-10 text-purple-600 mb-4" />,
    title: "Mengenal Sterilisasi",
    description: "Pahami manfaat sterilisasi untuk mengontrol populasi dan meningkatkan kesehatan jangka panjang hewan Anda.",
    link: "/edukasi/mengenal-sterilisasi",
  },
];

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
              Solusi layanan kesehatan untuk hewan peliharaanmu. Cepat, mudah,
              dan terpercaya.
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

      {/* BARU: Seksi Konten Edukasi */}
      <section className="w-full py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-800">
            Edukasi & Tips Kesehatan Hewan
          </h2>
          <p className="text-gray-600 mt-2">
            Informasi penting untuk menjaga sahabat kecil Anda tetap sehat dan bahagia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {edukasiData.map((item, index) => (
            <Link to={item.link} key={index} className="block group">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full">
                {item.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-purple-700">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
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