import React, { useState } from "react";
import { BarChart2 } from "lucide-react";

const LaporanAnalisis = () => {
  const [laporanData, setLaporanData] = useState([
    { kategori: "Infeksi Paru-paru", jumlah: 12 },
    { kategori: "Masalah Pencernaan", jumlah: 8 },
    { kategori: "Cidera Kaki", jumlah: 6 },
    { kategori: "Demam Tinggi", jumlah: 15 },
  ]);

  const [formData, setFormData] = useState({ kategori: "", jumlah: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddLaporan = (e) => {
    e.preventDefault();
    if (formData.kategori.trim() && formData.jumlah.trim()) {
      const jumlahNum = Number(formData.jumlah);
      if (isNaN(jumlahNum) || jumlahNum < 0) {
        alert("Jumlah harus berupa angka positif.");
        return;
      }
      setLaporanData([{ kategori: formData.kategori, jumlah: jumlahNum }, ...laporanData]);
      setFormData({ kategori: "", jumlah: "" });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-2 mb-6">
        <BarChart2 className="w-6 h-6" /> Laporan & Analisis
      </h1>

      {/* FORM TAMBAH LAPORAN */}
      <form
        onSubmit={handleAddLaporan}
        className="bg-white rounded-xl shadow p-6 mb-8"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Tambah Data Laporan
        </h2>
        <input
          type="text"
          name="kategori"
          placeholder="Kategori"
          value={formData.kategori}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          type="number"
          name="jumlah"
          placeholder="Jumlah"
          value={formData.jumlah}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          min="0"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Tambah Data
        </button>
      </form>

      <p className="mb-6 text-gray-600">
        Data laporan kasus penyakit hewan ternak berdasarkan kategori.
      </p>

      {/* TABEL LAPORAN */}
      <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b border-gray-300 p-3 font-semibold text-gray-700">
                Kategori
              </th>
              <th className="border-b border-gray-300 p-3 font-semibold text-gray-700">
                Jumlah Kasus
              </th>
            </tr>
          </thead>
          <tbody>
            {laporanData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border-b border-gray-200 p-3">{item.kategori}</td>
                <td className="border-b border-gray-200 p-3">{item.jumlah}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LaporanAnalisis;
