import React, { useState, useEffect } from 'react';
import Riwayat from './Riwayat';

export default function RiwayatPages() {
  const [riwayatData, setRiwayatData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const semuaData = JSON.parse(localStorage.getItem("riwayatKunjungan")) || [];
    const userLogin = JSON.parse(localStorage.getItem("userLogin")); // Ambil user login

    if (userLogin?.role === "admin") {
      setRiwayatData(semuaData); // Admin melihat semua data
      setIsAdmin(true);
    } else if (userLogin?.role === "user") {
      const dataUser = semuaData.filter(item => item.email === userLogin.email);
      setRiwayatData(dataUser); // User hanya melihat miliknya
      setIsAdmin(false);
    }
  }, []);

  const handleDataUpdate = (dataBaru) => {
    setRiwayatData(dataBaru);
  };

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
