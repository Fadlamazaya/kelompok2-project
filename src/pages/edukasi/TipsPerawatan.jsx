import {
  UtensilsCrossed,
  Sparkles,
  HeartPulse,
  ToyBrick,
  Stethoscope,
} from "lucide-react";

// Data untuk setiap kartu tips agar mudah dikelola
const tipsData = [
  {
    icon: <UtensilsCrossed className="w-7 h-7 text-purple-700" />,
    title: "Nutrisi Seimbang",
    description: "Berikan makanan berkualitas yang sesuai dengan usia, ras, dan tingkat aktivitas hewan. Pastikan air bersih selalu tersedia.",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-green-700" />,
    title: "Kebersihan Terjaga",
    description: "Sikat bulu secara rutin, mandikan seperlunya dengan sampo khusus, dan jaga kebersihan telinga, gigi, serta kuku.",
  },
  {
    icon: <HeartPulse className="w-7 h-7 text-rose-700" />,
    title: "Aktivitas & Latihan Fisik",
    description: "Ajak anjing berjalan-jalan setiap hari dan berikan mainan interaktif untuk kucing agar tetap aktif dan tidak stres.",
  },
  {
    icon: <ToyBrick className="w-7 h-7 text-sky-700" />,
    title: "Kesehatan Mental & Kasih Sayang",
    description: "Luangkan waktu berkualitas untuk bermain dan berinteraksi. Perhatian Anda adalah kunci kebahagiaan mereka.",
  },
];

export default function TipsPerawatan() {
  return (
    <div className="bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* --- Gambar Utama --- */}
        <div className="mb-16">
            <img 
                src="/images/anjingdankucing.jpeg" // Pastikan path gambar ini benar
                alt="Merawat anjing dan kucing"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
        </div>

        {/* --- Kumpulan Tips dalam Bentuk Kartu --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tipsData.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-start gap-5"
            >
              <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                {tip.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Blok Konsultasi / Call to Action --- */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-10 rounded-2xl shadow-2xl text-center">
            <Stethoscope className="w-12 h-12 mx-auto mb-4 text-purple-200" />
            <h2 className="text-3xl font-bold mb-2">
                Punya Pertanyaan Lebih Lanjut?
            </h2>
            <p className="max-w-xl mx-auto text-purple-100 mb-6">
                Setiap hewan itu unik. Untuk saran perawatan yang paling sesuai, jangan ragu untuk berkonsultasi dengan dokter hewan profesional kami.
            </p>
            <a href="#kontak" className="bg-white text-purple-700 font-bold px-8 py-3 rounded-full hover:bg-purple-50 transition-colors duration-300">
                Hubungi Kami
            </a>
        </div>
      </div>
    </div>
  );
}