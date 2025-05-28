import React, { useState } from "react";
import { HeartPulse } from "lucide-react";

const RekomendasiLayanan = () => {
  const [rekomendasi, setRekomendasi] = useState([
    {
      gejala: "Demam & Nafsu Makan Turun",
      layanan: "Pemeriksaan Darah & Obat Penurun Panas",
    },
    {
      gejala: "Batuk & Sesak Napas",
      layanan: "Pemeriksaan Saluran Pernapasan & Antibiotik",
    },
    {
      gejala: "Luka Terbuka",
      layanan: "Pembersihan Luka & Antibiotik Lokal",
    },
  ]);

  const [formData, setFormData] = useState({ gejala: "", layanan: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddRekomendasi = (e) => {
    e.preventDefault();
    if (formData.gejala.trim() && formData.layanan.trim()) {
      setRekomendasi([formData, ...rekomendasi]);
      setFormData({ gejala: "", layanan: "" });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-2 mb-6">
        <HeartPulse className="w-6 h-6" /> Rekomendasi Layanan
      </h1>

      {/* FORM TAMBAH REKOMENDASI */}
      <form
        onSubmit={handleAddRekomendasi}
        className="bg-white rounded-xl shadow p-6 mb-8"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Tambah Rekomendasi Baru
        </h2>
        <input
          type="text"
          name="gejala"
          placeholder="Gejala"
          value={formData.gejala}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          type="text"
          name="layanan"
          placeholder="Layanan"
          value={formData.layanan}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Tambah Rekomendasi
        </button>
      </form>

      <p className="mb-6 text-gray-600">
        Temukan layanan yang sesuai berdasarkan gejala hewan ternak.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {rekomendasi.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              🐾 Gejala: {item.gejala}
            </h2>
            <p className="text-gray-600">
              💡 Rekomendasi:{" "}
              <span className="font-medium">{item.layanan}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RekomendasiLayanan;
