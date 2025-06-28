import React from "react";

export default function Riwayat({ data }) {
  // Nomor antrian berdasarkan tanggal
  const dataDenganAntrian = data.map((item, index, arr) => {
    const tanggalYangSama = arr.filter((d) => d.tanggal === item.tanggal);
    const nomorAntrian = tanggalYangSama.findIndex((d) => d === item) + 1;
    return { ...item, nomorAntrian };
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-10">
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
        Riwayat Kunjungan Pasien Hewan
      </h1>

      {dataDenganAntrian.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Belum ada kunjungan yang tercatat.
        </p>
      ) : (
        <div className="bg-white w-full shadow rounded-xl">
          <table className="table-auto w-full text-sm text-gray-700 border border-gray-300">
            <thead className="bg-purple-100 text-purple-800">
              <tr>
                <Th>Antrian</Th>
                <Th>Nama</Th>
                <Th>Email</Th>
                <Th>Layanan</Th>
                <Th>Jenis</Th>
                <Th>Ras</Th>
                <Th>Tanggal</Th>
                <Th>Jadwal</Th>
                <Th>Keluhan</Th>
              </tr>
            </thead>
            <tbody>
              {dataDenganAntrian.map((item, i) => (
                <tr
                  key={i}
                  className="hover:bg-purple-50 transition duration-200"
                >
                  <Td>{item.nomorAntrian}</Td>
                  <Td>{item.nama}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.pilihLayanan}</Td>
                  <Td>{item.jenisHewan}</Td>
                  <Td>{item.ras}</Td>
                  <Td>{item.tanggal}</Td>
                  <Td>{item.jadwal}</Td>
                  <Td>{item.keluhan}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Komponen Header Tabel
const Th = ({ children }) => (
  <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold whitespace-nowrap">
    {children}
  </th>
);

// Komponen Data Tabel
const Td = ({ children }) => (
  <td className="border border-gray-300 px-3 py-2 text-sm align-top">
    {children}
  </td>
);
