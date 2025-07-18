import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const RekomendasiLayanan = () => {
  const [formData, setFormData] = useState({
    jenis_hewan: "",
    jk_hewan: "",
    keluhan: "",
  });

  const rawData = [
    { layanan: "pemeriksaan dan pengobatan", akurasi: 100 },
    { layanan: "sterilisasi", akurasi: 100 },
    { layanan: "vaksinasi rabies", akurasi: 100 },
    { layanan: "usg kebuntingan", akurasi: 100 },
    { layanan: "tindakan bedah", akurasi: 100 },
  ];

  const [hasil, setHasil] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://9944f701b3c0.ngrok-free.app/predict";

  const jenisHewanOptions = ["Kucing", "Anjing", "Kelinci", "Burung"];
  const jenisKelaminOptions = ["jantan", "betina"];
  const keluhanOptions = [
    "Sering birahi",
    "Ingin steril",
    "Ingin vaksinasi rabies tahunan",
    "Mengikuti program vaksinasi rabies",
    "Tidak nafsu makan",
    "Kulit gatal dan kemerahan",
    "Perubahan perilaku secara mendadak",
    "Mengecek kehamilan",
    "Pemantauan kesehatan janin hewan",
    "Ada benjolan yang dicurigai",
    "Dianjurkan operasi oleh dokter sebelumnya",
  ];

  const data = hasil
    ? rawData
      .filter((item) => item.layanan === hasil.layanan)
      .map((item) => ({
        layanan: item.layanan,
        akurasi: item.akurasi / 100,
      }))
    : [];


  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setHasil(null);
    try {
      const response = await axios.post(API_URL, formData);
      setHasil({
        layanan: response.data.predicted_layanan,
        keluhan: formData.keluhan,
        jenis_hewan: formData.jenis_hewan,
      });
    } catch (error) {
      console.error(error);
      alert("Gagal menghubungi backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-purple-700">
        🧾 Form Gejala Hewan
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 mb-8 space-y-4"
      >
        {/* Jenis Hewan */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Jenis Hewan
          </label>
          <select
            name="jenis_hewan"
            value={formData.jenis_hewan}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          >
            <option value="">-- Pilih Jenis Hewan --</option>
            {jenisHewanOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Jenis Kelamin */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Jenis Kelamin
          </label>
          <select
            name="jk_hewan"
            value={formData.jk_hewan}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          >
            <option value="">-- Pilih Jenis Kelamin --</option>
            {jenisKelaminOptions.map((item) => (
              <option key={item} value={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Keluhan */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Keluhan</label>
          <select
            name="keluhan"
            value={formData.keluhan}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          >
            <option value="">-- Pilih Keluhan --</option>
            {keluhanOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Dapatkan Rekomendasi"}
        </button>
      </form>

      {/* Hasil dan Visualisasi */}
      {hasil && (
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            💡 Rekomendasi Layanan
          </h2>
          <p className="text-gray-700 mb-4">
            Untuk <strong>{hasil.jenis_hewan}</strong> yang mengalami{" "}
            <em>"{hasil.keluhan}"</em>, layanan yang direkomendasikan adalah:
          </p>
          <div className="text-purple-600 text-lg font-bold mb-6">
            {hasil.layanan}
          </div>

          <h3 className="text-md font-medium mb-2 text-gray-600">
            Visualisasi Akurasi Model:
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="layanan" />
              <YAxis
                domain={[0, 1]}
                tickFormatter={(tick) => `${tick * 100}%`}
              />
              <Tooltip
                formatter={(value) => `${(value * 100).toFixed(0)}%`}
              />
              <Bar dataKey="akurasi" fill="#8b5cf6" name="Akurasi Model" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default RekomendasiLayanan;
