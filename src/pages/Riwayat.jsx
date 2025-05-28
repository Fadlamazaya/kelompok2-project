// src/pages/Riwayat.jsx
import React from "react";

export default function Riwayat({ data }) {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Riwayat Kunjungan</h1>

      {data.length === 0 ? (
        <p className="text-gray-500">Belum ada kunjungan yang tercatat.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dokter
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jenis Hewan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jadwal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{item.nama}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.dokter}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.jenisHewan}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.tanggal}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.jadwal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
