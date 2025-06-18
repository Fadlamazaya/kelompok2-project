import React from "react";
import { Link } from "react-router-dom";

export default function UserHome() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-pink-100 rounded-xl p-6 mb-10 text-center shadow-md">
        <h2 className="text-3xl font-bold text-pink-700">Selamat Datang di Klinik Hewan Digital</h2>
        <p className="text-gray-700 mt-2">
          Solusi layanan kesehatan untuk hewan peliharaanmu. Cepat, mudah, dan terpercaya.
        </p>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          title="Reminder"
          desc="Pengingat vaksin & obat berikutnya"
          link="/user/reminder"
        />
        <CardMenu
          title="Rekomendasi"
          desc="Lihat saran layanan berdasarkan gejala"
          link="/user/rekomendasi"
        />
        <CardMenu
          title="FAQ"
          desc="Pertanyaan yang sering diajukan"
          link="/user/faq"
        />
        <CardMenu
          title="Konten Edukasi"
          desc="Artikel kesehatan dan perawatan hewan"
          link="/user/konten"
        />
        <CardMenu
          title="Promosi"
          desc="Promo menarik layanan dan produk"
          link="/user/promosi"
        />
      </div>
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
