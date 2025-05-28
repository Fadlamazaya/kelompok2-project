// src/pages/Riwayat.jsx
import React from "react";

export default function Riwayat({ data }) {
  if (!data.length) {
    return <p className="text-gray-500">Belum ada kunjungan yang tercatat.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Riwayat Kunjungan</h2>
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Nama</th>
            <th className="border p-2">Dokter</th>
            <th className="border p-2">Jenis Hewan</th>
            <th className="border p-2">Tanggal</th>
            <th className="border p-2">Jadwal</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="text-center">
              <td className="border p-2">{item.nama}</td>
              <td className="border p-2">{item.dokter}</td>
              <td className="border p-2">{item.jenisHewan}</td>
              <td className="border p-2">{item.tanggal}</td>
              <td className="border p-2">{item.jadwal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}