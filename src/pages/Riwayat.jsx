import React from "react";
import { Trash2 } from "lucide-react";

export default function Riwayat({ data = [], onDataUpdate, isAdmin = false }) {
  const dataDenganAntrian = data.map((item, index, arr) => {
    const tanggalYangSama = arr.filter((d) => d.tanggal === item.tanggal);
    const nomorAntrian = tanggalYangSama.findIndex((d) => d === item) + 1;
    return { ...item, nomorAntrian, originalIndex: index };
  });

  const handleDelete = (itemToDelete) => {
    if (!window.confirm(`Hapus riwayat untuk ${itemToDelete.nama}?`)) return;

    const dataTersimpan = JSON.parse(localStorage.getItem("riwayatKunjungan")) || [];
    const dataBaru = dataTersimpan.filter(
      item => !(item.email === itemToDelete.email && item.tanggal === itemToDelete.tanggal && item.jadwal === itemToDelete.jadwal)
    );
    localStorage.setItem("riwayatKunjungan", JSON.stringify(dataBaru));
    if (onDataUpdate) onDataUpdate(dataBaru);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Riwayat Kunjungan</h1>
        <p className="text-gray-600 mb-8">Daftar semua pasien hewan yang telah terdaftar.</p>

        {dataDenganAntrian.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-md">
            <p className="text-gray-500 text-lg">Belum ada kunjungan yang tercatat.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <Th>Antrian</Th>
                    <Th>Nama Pasien</Th>
                    <Th>Layanan</Th>
                    <Th>Jadwal</Th>
                    <Th>Keluhan</Th>
                    {isAdmin && <Th>Aksi</Th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {dataDenganAntrian.map((item) => (
                    <tr key={item.originalIndex} className="hover:bg-gray-50">
                      <Td className="text-center">
                        <span className="font-bold text-lg text-purple-700">{item.nomorAntrian}</span>
                      </Td>
                      <Td>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center font-bold">
                            {item.nama.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 capitalize">{item.nama}</div>
                            <div className="text-gray-500">{item.email}</div>
                          </div>
                        </div>
                      </Td>
                      <Td>
                        <div className="font-medium text-gray-800">{item.pilihLayanan}</div>
                        <div className="text-gray-500">{item.jenisHewan} ({item.ras})</div>
                      </Td>
                      <Td>
                        <div className="font-medium text-gray-800">{item.tanggal}</div>
                        <div className="text-gray-500">{item.jadwal}</div>
                      </Td>
                      <Td>
                        <p className="max-w-xs whitespace-pre-wrap">{item.keluhan}</p>
                      </Td>
                      {isAdmin && (
                        <Td>
                          <button
                            onClick={() => handleDelete(item)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-full"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </Td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const Th = ({ children, className = "" }) => (
  <th className={`p-4 text-left font-semibold text-gray-600 uppercase tracking-wider ${className}`}>
    {children}
  </th>
);

const Td = ({ children, className = "" }) => (
  <td className={`p-4 align-middle ${className}`}>
    {children}
  </td>
);
