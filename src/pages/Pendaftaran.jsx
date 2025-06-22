import React, { useState, useEffect } from "react";
import {
  PawPrint,
  CalendarDays,
  User,
  Mail,
  AlertCircle,
  Clock,
  UserPlus,
} from "lucide-react";

const daftarLayanan = ["Sterilisasi", "Vaksinasi Rabies", "Pemeriksaan", "Pemeriksaan Darah", "Bedah"];
const daftarJenisHewan = ["Anjing", "Kucing", "Unggas", "Kambing/Domba", "Sapi/Kerbau", "Kuda", "Hewan Lainnya"];



export default function Pendaftaran() {

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pilihLayanan: "",
    jenisHewan: "",
   
    tanggal: "",
    jadwal: "",
    keluhan: "",
  });

  const [opsiJam, setOpsiJam] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    setFormData((prev) => ({ ...prev, [name]: value }));
    

    if (name === "tanggal") {
      const selectedDate = new Date(value);
      const day = selectedDate.getDay(); // 0 = Minggu, 1 = Senin, ..., 6 = Sabtu
      let jam = [];

      switch (day) {
        case 1: // Senin
        case 2: // Selasa
        case 3: // Rabu
          jam = ["08:00 - 12:00", "13:00 - 15:30"];
          break;
        case 4: // Kamis
          jam = ["08:00 - 12:00", "13:00 - 16:00"];
          break;
        case 5: // Jumat
          jam = ["08:00 - 12:00", "13:30 - 16:00"];
          break;
        default:
          jam = []; // Tidak tersedia di Sabtu & Minggu
      }
      setOpsiJam(jam);
    }
  };

  const handleSubmit = () => {
  const lengkap = Object.values(formData).every((val) => val !== "");
  if (!lengkap) return alert("Semua field wajib diisi!");

  const dataSebelumnya = JSON.parse(localStorage.getItem("riwayatKunjungan")) || [];

  // Hitung antrian berdasarkan tanggal yang sama
  const jumlahHariIni = dataSebelumnya.filter(
    (item) => item.tanggal === formData.tanggal
  ).length;

  const nomorAntrian = jumlahHariIni + 1;

  const dataBaru = [...dataSebelumnya, formData];

  localStorage.setItem("riwayatKunjungan", JSON.stringify(dataBaru));

  // Tampilkan popup antrian
  alert(`Pendaftaran berhasil!\nNomor Antrian Anda: ${nomorAntrian}`);

  // Reset
  setFormData({
    nama: "",
    email: "",
    pilihLayanan: "",
    jenisHewan: "",
    
    tanggal: "",
    jadwal: "",
    keluhan: "",
  });
  setOpsiJam([]);
};

  return (
    <div className="max-w-5xl mx-auto p-10 bg-white rounded-3xl shadow-2xl border border-gray-200">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-10 text-center flex items-center justify-center gap-3">
        <UserPlus className="w-8 h-8" /> Formulir Kunjungan Hewan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Nama Lengkap"
          name="nama"
          type="text"
          icon={User}
          value={formData.nama}
          onChange={handleChange}
        />
        <InputField
          label="Email Aktif"
          name="email"
          type="email"
          icon={Mail}
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Tanggal Daftar"
          name="tanggal"
          type="date"
          icon={CalendarDays}
          value={formData.tanggal}
          onChange={handleChange}
        />

        <div>
          <label className="block font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <PawPrint className="w-4 h-4 text-indigo-500" /> Jenis Hewan
          </label>
          <select
            name="jenisHewan"
            value={formData.jenisHewan}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">-- Pilih Jenis Hewan --</option>
            {daftarJenisHewan.map((j) => (
              <option key={j} value={j}>{j}</option>
            ))}
          </select>
        </div>

        

        <div>
          <label className="block font-semibold text-gray-700 mb-2">Pilih Layanan</label>
          <select
            name="pilihLayanan"
            value={formData.pilihLayanan}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">-- Pilih Layanan --</option>
            {daftarLayanan.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-500" /> Pilih Jam
          </label>
          <select
            name="jadwal"
            value={formData.jadwal}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400"
            disabled={opsiJam.length === 0}
          >
            <option value="">-- Pilih Jam --</option>
            {opsiJam.map((jam) => (
              <option key={jam} value={jam}>{jam}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-indigo-500" /> Keluhan
          </label>
          <textarea
            name="keluhan"
            value={formData.keluhan}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 w-full md:w-auto px-10 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-md"
      >
        Daftar Sekarang
      </button>


    </div>
  );
}

const InputField = ({ label, name, type = "text", icon: Icon, value, onChange }) => (
  <div>
    <label className="block font-semibold text-gray-700 mb-2 flex items-center gap-2">
      <Icon className="w-4 h-4 text-indigo-500" /> {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    />
  </div>
);
