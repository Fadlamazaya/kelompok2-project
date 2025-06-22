import React from "react";
import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";

export default function UserHome() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-pink-100 rounded-xl p-6 mb-4 text-center shadow-md">
        <h2 className="text-3xl font-bold text-pink-700">
          Selamat Datang di Klinik Hewan UPT LVKH
        </h2>
        <p className="text-gray-700 mt-2">
          Solusi layanan kesehatan untuk hewan peliharaanmu. Cepat, mudah, dan terpercaya.
        </p>
      </div>

      {/* Tombol Member di bawah hero, kanan */}
      <div className="flex justify-end mb-10">
        <Link
          to="/member"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition"
        >
          Member
        </Link>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <CardMenu
          title="Pendaftaran"
          desc="Daftarkan hewan peliharaan untuk pemeriksaan"
          link="/user/pendaftaran"
        />
        <CardMenu
          title="Riwayat"
          desc="Lihat catatan medis dan layanan sebelumnya"
          link="/user/riwayat"
        />
        <CardMenu
          title="Profil"
          desc="Lihat point kamu di sini"
          link="/user/reminder"
        />
      </div>

      {/* Rekomendasi Layanan */}
      <RekomendasiLayanan />
    </div>
  );
}

// Komponen Kartu Menu
function CardMenu({ title, desc, link }) {
  return (
    <Link to={link}>
      <div className="bg-white hover:bg-pink-50 transition-all p-5 rounded-xl shadow hover:shadow-lg h-full">
        <h3 className="text-xl font-semibold text-pink-600 mb-1">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </Link>
  );
}

// Komponen Rekomendasi Layanan
function RekomendasiLayanan() {
  const rekomendasi = [
    {
      layanan: "Sterilisasi Hewan",
      gambar: "https://img.icons8.com/color/96/pet-commands-stay.png",
      deskripsi:
        "Sterilisasi membantu mencegah reproduksi berlebih, menurunkan risiko kanker, serta meningkatkan perilaku dan kesehatan jangka panjang hewan.",
    },
    {
      layanan: "Vaksinasi Rabies",
      gambar: "https://img.icons8.com/color/96/syringe.png",
      deskripsi:
        "Melindungi hewan dari virus rabies yang mematikan. Vaksin ini juga penting untuk keamanan manusia di sekitar hewan peliharaan.",
    },
    {
      layanan: "Pemeriksaan Klinis (Fisik)",
      gambar: "https://img.icons8.com/color/96/veterinarian.png",
      deskripsi:
        "Dokter akan memeriksa kondisi fisik hewan mulai dari kulit, mata, telinga, hingga denyut jantung untuk mendeteksi masalah sejak dini.",
    },
    {
      layanan: "USG Kebuntingan Hewan Kesayangan",
      gambar: "https://img.icons8.com/color/96/ultrasound.png",
      deskripsi:
        "Layanan USG membantu memeriksa kondisi kehamilan hewan peliharaan seperti kucing dan anjing untuk memastikan janin berkembang dengan sehat.",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full mx-auto">
      <h2 className="text-2xl font-bold text-purple-700 flex items-center gap-2 mb-6">
        <HeartPulse className="w-6 h-6" /> Rekomendasi Layanan
      </h2>
      <p className="text-gray-600 mb-6">
        Temukan layanan yang sesuai berdasarkan gejala hewan peliharaanmu.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {rekomendasi.map((item, index) => (
          <div
            key={index}
            className="bg-purple-50 border border-purple-200 rounded-xl p-5 shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.gambar}
                alt="icon"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-purple-800">
                  🐾 {item.layanan}
                </h3>
              </div>
            </div>
            <p className="text-gray-700 text-sm">{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
