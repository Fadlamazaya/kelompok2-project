import React, { useState, useEffect } from 'react';

// Path impor yang benar karena kedua file ada di folder `pages`
import Riwayat from './Riwayat'; 

export default function RiwayatAdmin() {
  // 1. State untuk menampung semua data riwayat
  const [riwayatData, setRiwayatData] = useState([]);

  // 2. useEffect untuk mengambil data dari localStorage saat halaman dibuka
  useEffect(() => {
    const dataTersimpan = JSON.parse(localStorage.getItem("riwayatKunjungan")) || [];
    setRiwayatData(dataTersimpan);
  }, []);

  // 3. Fungsi untuk memperbarui data yang akan dikirim ke komponen anak
  const handleDataUpdate = (dataBaru) => {
    setRiwayatData(dataBaru);
  };

  // 4. Menentukan peran pengguna (diasumsikan sebagai admin)
  const isAdmin = true; 

  return (
    <div>
      <Riwayat 
        data={riwayatData}
        onDataUpdate={handleDataUpdate}
        isAdmin={isAdmin}
      />
    </div>
  );
}