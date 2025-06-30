import React, { useState, useEffect } from 'react';

// Path impor yang benar karena kedua file ada di folder `pages`
import Riwayat from './Riwayat';

export default function RiwayatPelanggan() {
    // 1. State untuk menampung semua data riwayat
    const [riwayatData, setRiwayatData] = useState([]);

    // 2. useEffect untuk mengambil data dari localStorage saat halaman dibuka
    useEffect(() => {
        const semuaData = JSON.parse(localStorage.getItem("riwayatKunjungan")) || [];
        const userLogin = JSON.parse(localStorage.getItem("userLogin"));
        const dataUser = semuaData.filter(item => item.email === userLogin.email);
        setRiwayatData(dataUser);
    }, []);


    // 3. Fungsi untuk memperbarui data yang akan dikirim ke komponen anak
    const handleDataUpdate = (dataBaru) => {
        setRiwayatData(dataBaru);
    };

    // 4. Pelanggan -> bukan admin
    const isAdmin = false;

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
