import React, { useMemo } from "react";
import { Trash2, UserCheck } from "lucide-react";

// --- KONFIGURASI PENJADWALAN ---

// 1. Prioritas Layanan (Angka lebih kecil = prioritas lebih tinggi)
const PRIORITAS_LAYANAN = {
  "Operasi Darurat": 1,
  "Operasi Terjadwal": 2,
  "Perawatan Intensif": 3,
  "Vaksinasi": 4,
  "Konsultasi": 5,
  "Grooming": 6,
};

// 2. Jadwal & Dokter yang Bertugas
const JADWAL_DOKTER = {
  "Pagi (08:00 - 12:00)": {
    dokter: "Dr. Annisa",
    urutan: 1, // Urutan sesi pagi
  },
  "Siang (13:00 - 16:00)": {
    dokter: "Dr. Budi",
    urutan: 2, // Urutan sesi siang
  },
};

// --- Komponen Utama ---

export default function Penjadwalan({ data = [], onDataUpdate, isAdmin = false }) {
  
  // Memoization untuk mengurutkan jadwal secara efisien
  const jadwalTerurut = useMemo(() => {
    const dataDenganIndeks = data.map((item, index) => ({ ...item, originalIndex: index }));

    // Logika pengurutan jadwal
    dataDenganIndeks.sort((a, b) => {
      // Prioritas 1: Urutkan berdasarkan Tanggal
      if (a.tanggal < b.tanggal) return -1;
      if (a.tanggal > b.tanggal) return 1;

      // Prioritas 2: Urutkan berdasarkan Sesi Jadwal (Pagi dulu, baru Siang)
      const sesiA = JADWAL_DOKTER[a.jadwal]?.urutan || 99;
      const sesiB = JADWAL_DOKTER[b.jadwal]?.urutan || 99;
      if (sesiA !== sesiB) return sesiA - sesiB;

      // Prioritas 3: Urutkan berdasarkan Prioritas Layanan
      const prioritasA = PRIORITAS_LAYANAN[a.pilihLayanan] || 99;
      const prioritasB = PRIORITAS_LAYANAN[b.pilihLayanan] || 99;
      if (prioritasA !== prioritasB) return prioritasA - prioritasB;

      // Jika semua sama, pertahankan urutan asli
      return a.originalIndex - b.originalIndex;
    });
    
    // Tambahkan nomor antrian dan nama dokter setelah diurutkan
    const antrianHarian = {};
    return dataDenganIndeks.map(item => {
      if (!antrianHarian[item.tanggal]) {
        antrianHarian[item.tanggal] = 1;
      }
      const nomorAntrian = antrianHarian[item.tanggal]++;
      const namaDokter = JADWAL_DOKTER[item.jadwal]?.dokter || "N/A";
      return { ...item, nomorAntrian, namaDokter };
    });

  }, [data]);

  const handleDelete = (itemToDelete) => {
    if (!window.confirm(`Hapus jadwal untuk ${itemToDelete.nama}?`)) return;

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
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Jadwal Kunjungan Pasien</h1>
        <p className="text-gray-600 mb-8">Jadwal pasien telah diurutkan berdasarkan prioritas layanan dan sesi dokter.</p>

        {jadwalTerurut.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-md">
            <p className="text-gray-500 text-lg">Belum ada jadwal yang terdaftar.</p>
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
                    <Th>Dokter Bertugas</Th>
                    {isAdmin && <Th>Aksi</Th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {jadwalTerurut.map((item) => (
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
                        <div className="flex items-center gap-2">
                           <UserCheck className="w-4 h-4 text-green-600" />
                           <span className="font-semibold text-gray-800">{item.namaDokter}</span>
                        </div>
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

// Helper komponen untuk Table Header dan Table Data
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