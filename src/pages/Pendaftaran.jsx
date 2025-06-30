import React, { useState } from "react";
import { User, Mail, PawPrint, CalendarDays, Clock, AlertCircle, Send, CheckCircle, ArrowLeft } from "lucide-react";

// Opsi form (bisa dipindahkan ke file konfigurasi jika perlu)
const DAFTAR_LAYANAN = ["Sterilisasi", "Vaksinasi Rabies", "Pemeriksaan", "Pemeriksaan Darah", "Bedah"];
const DAFTAR_JENIS_HEWAN = ["Anjing", "Kucing", "Unggas", "Kambing/Domba", "Sapi/Kerbau", "Kuda", "Hewan Lainnya"];

// Komponen Input yang Disederhanakan
const InputField = ({ label, icon: Icon, ...props }) => (
  <div>
    <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
      <Icon className="w-4 h-4 text-indigo-500" /> {label}
    </label>
    <input
      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      {...props}
    />
  </div>
);

// Komponen Select yang Disederhanakan
const SelectField = ({ label, icon: Icon, options, ...props }) => (
  <div>
    <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
      <Icon className="w-4 h-4 text-indigo-500" /> {label}
    </label>
    <select
      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      {...props}
    >
      {options.map((opt, i) => <option key={i} value={opt.value}>{opt.label}</option>)}
    </select>
  </div>
);


export default function Pendaftaran() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nama: "", email: "", jenisHewan: "", pilihLayanan: "", keluhan: "", tanggal: "", jadwal: ""
  });
  const [opsiJam, setOpsiJam] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "tanggal") {
      const day = new Date(value).getDay();
      let jam = [];
      if ([1, 2, 3].includes(day)) jam = ["08:00 - 12:00", "13:00 - 15:30"];
      else if (day === 4) jam = ["08:00 - 12:00", "13:00 - 16:00"];
      else if (day === 5) jam = ["08:00 - 12:00", "13:30 - 16:00"];
      setOpsiJam(jam);
      setFormData((prev) => ({ ...prev, jadwal: "" })); // Reset pilihan jam
    }
  };
  
  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    // Validasi final sebelum submit
    const lengkap = Object.values(formData).every((val) => val !== "");
    if (!lengkap) return alert("Harap pastikan semua data di setiap langkah telah diisi!");

    const dataSebelumnya = JSON.parse(localStorage.getItem("riwayatKunjungan")) || [];
    const dataBaru = [...dataSebelumnya, formData];
    localStorage.setItem("riwayatKunjungan", JSON.stringify(dataBaru));
    setIsSubmitted(true);
  };

  // Tampilan Sukses
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-10 bg-white rounded-3xl shadow-2xl border min-h-[500px]">
        <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
        <h2 className="text-3xl font-bold text-gray-800">Pendaftaran Berhasil!</h2>
        <p className="mt-2 text-gray-600">Terima kasih telah mendaftar. Silakan periksa halaman Riwayat untuk detail kunjungan Anda.</p>
        <button
          onClick={() => window.location.reload()} // Reload untuk pendaftaran baru
          className="mt-8 px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
        >
          Buat Pendaftaran Baru
        </button>
      </div>
    );
  }

  // Tampilan Form
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-3xl shadow-2xl border border-gray-100">
      {/* Progress Bar */}
      <div>
        <h3 className="text-sm font-medium text-indigo-600">Langkah {step} dari {totalSteps}</h3>
        <div className="mt-2 bg-gray-200 rounded-full h-2">
          <div
            className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-8">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Informasi Pemilik</h2>
            <InputField label="Nama Lengkap" name="nama" type="text" icon={User} value={formData.nama} onChange={handleChange} />
            <InputField label="Email Aktif" name="email" type="email" icon={Mail} value={formData.email} onChange={handleChange} />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Detail Kunjungan & Hewan</h2>
            <SelectField
              label="Jenis Hewan"
              name="jenisHewan"
              icon={PawPrint}
              value={formData.jenisHewan}
              onChange={handleChange}
              options={[{ value: "", label: "-- Pilih Jenis Hewan --" }, ...DAFTAR_JENIS_HEWAN.map(j => ({ value: j, label: j }))]}
            />
            <SelectField
              label="Pilih Layanan"
              name="pilihLayanan"
              icon={AlertCircle}
              value={formData.pilihLayanan}
              onChange={handleChange}
              options={[{ value: "", label: "-- Pilih Layanan --" }, ...DAFTAR_LAYANAN.map(d => ({ value: d, label: d }))]}
            />
             <InputField label="Tanggal Daftar" name="tanggal" type="date" icon={CalendarDays} value={formData.tanggal} onChange={handleChange} />
             <SelectField
                label="Pilih Jam"
                name="jadwal"
                icon={Clock}
                value={formData.jadwal}
                onChange={handleChange}
                disabled={opsiJam.length === 0}
                options={[{value: "", label: opsiJam.length === 0 ? "-- Pilih Tanggal Dulu --" : "-- Pilih Jam --"}, ...opsiJam.map(jam => ({value: jam, label: jam}))]}
             />
             <div>
                <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700"><AlertCircle className="w-4 h-4 text-indigo-500" /> Keluhan</label>
                <textarea name="keluhan" value={formData.keluhan} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
             </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Konfirmasi Data</h2>
            <p className="text-gray-600 mt-2">Harap periksa kembali data Anda sebelum mendaftar.</p>
            <ul className="mt-6 space-y-4 text-gray-700 bg-indigo-50 p-6 rounded-lg">
              <li><strong>Nama:</strong> {formData.nama}</li>
              <li><strong>Email:</strong> {formData.email}</li>
              <li><strong>Jenis Hewan:</strong> {formData.jenisHewan}</li>
              <li><strong>Layanan:</strong> {formData.pilihLayanan}</li>
              <li><strong>Tanggal:</strong> {formData.tanggal}</li>
              <li><strong>Jadwal:</strong> {formData.jadwal}</li>
              <li><strong>Keluhan:</strong> {formData.keluhan}</li>
            </ul>
          </div>
        )}
      </div>

      {/* Tombol Navigasi */}
      <div className="mt-10 flex justify-between">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg disabled:opacity-50 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali
        </button>
        {step < totalSteps ? (
          <button onClick={nextStep} className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
            Lanjut
          </button>
        ) : (
          <button onClick={handleSubmit} className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 flex items-center gap-2">
            <Send className="w-4 h-4" /> Daftar Sekarang
          </button>
        )}
      </div>
    </div>
  );
}