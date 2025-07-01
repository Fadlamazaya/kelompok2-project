import { ShieldCheck, Users, Wallet, Cat, Dog } from "lucide-react";

// Data untuk kartu manfaat agar mudah dikelola
const benefitsData = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "Mencegah Penyakit Berbahaya",
    description: "Vaksin melindungi hewan dari penyakit mematikan seperti Rabies, Distemper, dan Parvovirus yang sulit diobati.",
  },
  {
    icon: <Users className="w-8 h-8 text-sky-600" />,
    title: "Melindungi Kesehatan Manusia",
    description: "Mencegah penularan penyakit dari hewan ke manusia (zoonosis), seperti Rabies dan Leptospirosis, menjaga keluarga Anda tetap aman.",
  },
  {
    icon: <Wallet className="w-8 h-8 text-amber-600" />,
    title: "Menghemat Biaya Perawatan",
    description: "Biaya vaksinasi jauh lebih murah dibandingkan biaya pengobatan penyakit serius yang bisa mencapai jutaan rupiah.",
  },
];

export default function PentingnyaVaksinasi() {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* --- Video YouTube --- */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Tonton Penjelasan dari Ahli
          </h2>
          {/* Wrapper untuk membuat video responsif */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/PjxDBwN-lEk?si=WMiC1beSaBbqfsbZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* --- Manfaat Utama Vaksinasi --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefitsData.map((benefit, index) => (
                <div key={index} className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 text-center">
                    <div className="inline-block bg-white p-4 rounded-full mb-4 shadow">
                        {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-purple-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                </div>
            ))}
        </div>

        {/* --- Jadwal Vaksin --- */}
        <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Jadwal Vaksin Umum</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Jadwal untuk Anjing */}
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3"><Dog className="text-purple-700 w-8 h-8" /> Untuk Anjing</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li><strong>6-8 Minggu:</strong> Distemper, Parvovirus (DHPPi/L).</li>
                        <li><strong>9-11 Minggu:</strong> Vaksinasi ulangan DHPPi/L.</li>
                        <li><strong>12-14 Minggu:</strong> Vaksinasi ulangan DHPPi/L + Rabies.</li>
                        <li><strong>Setiap Tahun:</strong> Vaksinasi booster tahunan.</li>
                    </ul>
                </div>

                {/* Jadwal untuk Kucing */}
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3"><Cat className="text-purple-700 w-8 h-8" /> Untuk Kucing</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li><strong>8-10 Minggu:</strong> Feline Panleukopenia, Rhinotracheitis, Calicivirus (FVRCP).</li>
                        <li><strong>11-13 Minggu:</strong> Vaksinasi ulangan FVRCP.</li>
                        <li><strong>14-16 Minggu:</strong> Vaksinasi ulangan FVRCP + Rabies.</li>
                        <li><strong>Setiap Tahun:</strong> Vaksinasi booster tahunan.</li>
                    </ul>
                </div>
            </div>
             <p className="text-center mt-6 text-sm text-gray-500">*Jadwal dapat bervariasi. Konsultasikan dengan dokter hewan kami untuk jadwal yang paling tepat.</p>
        </div>

      </div>
    </div>
  );
}