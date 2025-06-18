import React, { useState, useEffect } from "react";
import Riwayat from "./Riwayat";
import { PawPrint, CalendarDays, User, Mail, AlertCircle, Clock, UserPlus } from "lucide-react";

const daftarLayanan = ["Sterilisasi", "Vaksinasi Rabies", "Pemeriksaan", "Pemeriksaan Darah", "Bedah"];
const daftarJenisHewan = ["Anjing", "Kucing", "Kelinci"];
const daftarRas = {
  Anjing: ["Golden Retriever", "Pomeranian", "Beagle", "Kintamani"],
  Kucing: ["Persia", "Anggora", "Kampung", "Bengal"],
  Kelinci: ["Lop", "Anggora", "Netherland Dwarf"]
};
const daftarJam = ["08:00 - 10:00", "10:00 - 12:00", "13:00 - 15:00", "15:00 - 17:00"];

export default function Pendaftaran() {
  const [riwayatKunjungan, setRiwayatKunjungan] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pilihLayanan: "",
    jenisHewan: "",
    ras: "",
    tanggal: "",
    jadwal: "",
    keluhan: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("riwayatKunjungan");
    if (data) {
      setRiwayatKunjungan(JSON.parse(data));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "jenisHewan") {
      setFormData((prev) => ({ ...prev, [name]: value, ras: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const lengkap = Object.values(formData).every((val) => val !== "");
    if (!lengkap) return alert("Semua field wajib diisi!");

    const dataSebelumnya = JSON.parse(localStorage.getItem("riwayatKunjungan")) || [];
    const dataBaru = [...dataSebelumnya, formData];

    localStorage.setItem("riwayatKunjungan", JSON.stringify(dataBaru));
    setRiwayatKunjungan(dataBaru);
    alert("Pendaftaran berhasil!");

    setFormData({
      nama: "",
      email: "",
      pilihLayanan: "",
      jenisHewan: "",
      ras: "",
      tanggal: "",
      jadwal: "",
      keluhan: "",
    });
  };

  const InputField = ({ label, name, type = "text", icon: Icon }) => (
    <div>
      <label className="block font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <Icon className="w-4 h-4 text-indigo-500" /> {label}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      />
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-10 bg-white rounded-3xl shadow-2xl border border-gray-200">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-10 text-center flex items-center justify-center gap-3">
        <UserPlus className="w-8 h-8" /> Formulir Kunjungan Hewan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Nama Lengkap" name="nama" icon={User} />
        <InputField label="Email Aktif" name="email" icon={Mail} />
        <InputField label="Tanggal Daftar" name="tanggal" type="date" icon={CalendarDays} />

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
          <label className="block font-semibold text-gray-700 mb-2">Ras</label>
          <select
            name="ras"
            value={formData.ras}
            onChange={handleChange}
            disabled={!formData.jenisHewan}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">-- Pilih Ras --</option>
            {formData.jenisHewan && daftarRas[formData.jenisHewan].map((r) => (
              <option key={r} value={r}>{r}</option>
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
          >
            <option value="">-- Pilih Jam --</option>
            {daftarJam.map((jam) => (
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

      <div className="mt-16">
        <Riwayat data={riwayatKunjungan} />
      </div>
    </div>
  );
}
