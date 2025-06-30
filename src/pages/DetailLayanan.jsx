import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Data layanan
const layananData = {
  "sterilisasi-hewan": {
    title: "Sterilisasi Hewan",
    image: "/images/Sterilisasi-Kucing.webp",
    desc:
      "Sterilisasi membantu mencegah reproduksi berlebih, menurunkan risiko kanker, serta meningkatkan perilaku dan kesehatan jangka panjang hewan.",
    price: 250000,
  },
  "vaksinasi-rabies": {
    title: "Vaksinasi Rabies",
    image: "/images/vaksinasirabies.jpg",
    desc:
      "Melindungi hewan dari virus rabies yang mematikan. Vaksin ini juga penting untuk keamanan manusia di sekitar hewan peliharaan.",
    price: 150000,
  },
  "pemeriksaan-klinis-(fisik)": {
    title: "Pemeriksaan Klinis (Fisik)",
    image: "/images/pemeriksaan.jpg",
    desc:
      "Dokter akan memeriksa kondisi fisik hewan mulai dari kulit, mata, telinga, hingga denyut jantung untuk mendeteksi masalah sejak dini.",
    price: 100000,
  },
  "usg-kebuntingan-hewan-kesayangan": {
    title: "USG Kebuntingan Hewan Kesayangan",
    image: "/images/USGkucing.png",
    desc:
      "Layanan USG membantu memeriksa kondisi kehamilan hewan peliharaan seperti kucing dan anjing untuk memastikan janin berkembang dengan sehat.",
    price: 300000,
  },
};

export default function DetailLayanan() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const layanan = layananData[slug];

  if (!layanan) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Layanan tidak ditemukan</h2>
        <Link to="/" className="mt-4 inline-block text-purple-600 underline">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const formatRupiah = (angka) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);

  const handleDaftar = () => {
    navigate("/user/pendaftaran");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-purple-600 hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Kembali
      </Link>

      <div className="bg-white shadow rounded-xl overflow-hidden">
        <img
          src={layanan.image}
          alt={layanan.title}
          className="w-full h-[400px] object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-800 mb-2">
            {layanan.title}
          </h1>
          <p className="text-gray-700 mb-4">{layanan.desc}</p>
          <p className="text-lg font-semibold text-purple-700 mb-6">
            Harga: {formatRupiah(layanan.price)}
          </p>

          <button
            onClick={handleDaftar}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
