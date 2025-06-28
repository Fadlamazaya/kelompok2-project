import React from "react";
import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";

export default function UserHome() {
  return (
    <div>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-purple-100 rounded-xl p-6 mb-4 text-center shadow-md">
          <h2 className="text-3xl font-bold text-purple-700">
            Selamat Datang di Klinik Hewan UPT LVKH
          </h2>
          <p className="text-gray-700 mt-2">
            Solusi layanan kesehatan untuk hewan peliharaanmu. Cepat, mudah, dan terpercaya.
          </p>
        </div>

        {/* Slider */}
        <ImageSlider />

        {/* Rekomendasi Layanan */}
        <RekomendasiLayanan />
      </div>
    </div>
  );
}

// Komponen Slider (letakkan di luar fungsi lain)
function ImageSlider() {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto overflow-hidden rounded-xl shadow mb-6">
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-auto object-contain"
      />

      {/* Bullet Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}



// Komponen Rekomendasi
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
