import {
  HeartPulse,
  Smile,
  Users,
  XCircle,
  CheckCircle2,
  ClipboardCheck,
  Syringe,
  Home,
} from "lucide-react";

// Data untuk kartu manfaat
const benefitsData = [
  {
    icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
    title: "Kesehatan Jangka Panjang",
    description: "Menurunkan risiko kanker rahim/testis dan infeksi rahim (pyometra) yang mengancam jiwa.",
  },
  {
    icon: <Smile className="w-8 h-8 text-sky-500" />,
    title: "Perilaku Lebih Stabil",
    description: "Mengurangi keinginan untuk berkeliaran, agresi teritorial, dan perilaku menandai wilayah (spraying).",
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-500" />,
    title: "Kontrol Populasi",
    description: "Menjadi langkah paling bertanggung jawab untuk mencegah lahirnya hewan yang tidak diinginkan dan terlantar.",
  },
];

export default function MengenalSterilisasi() {
  return (
    <div className="bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <img
          src="/images/mengenalSterilisasi.png" // Pastikan path gambar ini benar
          alt="Kucing dan anjing yang sudah disteril"
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl mb-16"
        />

        {/* --- Mitos vs Fakta --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Mitos vs. Fakta Sterilisasi
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kolom Mitos */}
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-rose-800 flex items-center gap-3 mb-4">
                <XCircle /> Mitos Umum
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Hewan akan menjadi gemuk dan malas.</li>
                <li>Kepribadian hewan akan berubah total.</li>
                <li>Lebih baik biarkan betina melahirkan sekali.</li>
                <li>Prosedurnya menyakitkan dan berbahaya.</li>
              </ul>
            </div>
            {/* Kolom Fakta */}
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-800 flex items-center gap-3 mb-4">
                <CheckCircle2 /> Fakta Sebenarnya
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kegemukan disebabkan oleh pola makan dan kurang gerak, bukan sterilisasi.</li>
                <li>Hanya perilaku terkait hormon yang berkurang, kepribadian dasar tetap sama.</li>
                <li>Tidak ada manfaat kesehatan bagi hewan untuk melahirkan.</li>
                <li>Prosedur aman dengan anestesi dan manajemen nyeri yang tepat.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Manfaat Utama --- */}
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Manfaat Utama Sterilisasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefitsData.map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                        <div className="inline-block bg-purple-100 p-4 rounded-full mb-4">
                            {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold text-purple-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}