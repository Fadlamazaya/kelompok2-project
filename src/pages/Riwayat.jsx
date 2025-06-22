// src/pages/Riwayat.jsx
import React from "react";

export default function Riwayat({ data }) {
  // Menambahkan nomor antrian per tanggal
  const dataDenganAntrian = data.map((item, index, arr) => {
    const tanggalYangSama = arr.filter((d) => d.tanggal === item.tanggal);
    const nomorAntrian = tanggalYangSama.findIndex((d) => d === item) + 1;
    return { ...item, nomorAntrian };
  });

  return (
    <div className=" w-screen bg-white px-8 py-10">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
        Riwayat Kunjungan Pasien Hewan
      </h1>

      {dataDenganAntrian.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Belum ada kunjungan yang tercatat.
        </p>
      ) : (
        //<div className="overflow-auto">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-indigo-100 text-indigo-800 font-semibold">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Antrian</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Nama</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Layanan</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Jenis Hewan</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Ras</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Tanggal</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Jadwal</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Keluhan</th>
              </tr>
            </thead>
            <tbody>
              {dataDenganAntrian.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{item.nomorAntrian}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.nama}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.pilihLayanan}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.jenisHewan}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.ras}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.tanggal}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.jadwal}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.keluhan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        //</div>
      )}
    </div>
  );
}
