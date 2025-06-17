
import Penjualan from "./pages/Penjualan";
import Riwayat from "./pages/Riwayat";
import Pendaftaran from "./pages/Pendaftaran";
import RiwayatPages from "./pages/RiwayatPages";
import Reminder from "./pages/Reminder";

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import RekomendasiLayanan from "./pages/RekomendasiLayanan";
import LaporanAnalisis from "./pages/LaporanAnalisis";
import FaqLayanan from "./pages/FaqLayanan";
import FormTambahData from "./pages/FormTambahData";
import EducationContentPage from "./pages/EducationContentPages";
import Promosi from "./pages/Promosi";

function App() {
  const [faqs, setFaqs] = useState([
    {
      question: "Apakah saya perlu janji temu terlebih dahulu?",
      answer:
        "Ya, sangat disarankan untuk membuat janji temu agar hewan dapat langsung ditangani tanpa menunggu lama.",
    },
    {
      question: "Berapa biaya konsultasi dasar?",
      answer:
        "Biaya konsultasi awal adalah sekitar Rp 50.000 - Rp 100.000 tergantung jenis hewan.",
    },
    {
      question: "Apakah menerima kunjungan ke peternakan?",
      answer:
        "Ya, tersedia layanan kunjungan lapangan dengan penjadwalan sebelumnya.",
    },
  ]);

  const [laporanData, setLaporanData] = useState([
    { kategori: "Infeksi Paru-paru", jumlah: 12 },
    { kategori: "Masalah Pencernaan", jumlah: 8 },
    { kategori: "Cidera Kaki", jumlah: 6 },
    { kategori: "Demam Tinggi", jumlah: 15 },
  ]);

  const [rekomendasi, setRekomendasi] = useState([
    {
      gejala: "Demam & Nafsu Makan Turun",
      layanan: "Pemeriksaan Darah & Obat Penurun Panas",
    },
    {
      gejala: "Batuk & Sesak Napas",
      layanan: "Pemeriksaan Saluran Pernapasan & Antibiotik",
    },
    {
      gejala: "Luka Terbuka",
      layanan: "Pembersihan Luka & Antibiotik Lokal",
    },
  ]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Penjualan" element={<Penjualan />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/reminder" element={<Reminder />} />
         <Route path="/riwayatPages" element={<RiwayatPages/>} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route
          path="/rekomendasi"
          element={<RekomendasiLayanan rekomendasi={rekomendasi} />}
        />
        <Route
          path="/laporan"
          element={<LaporanAnalisis laporanData={laporanData} />}
        />
        <Route path="/konten-edukasi" element={<EducationContentPage />} />
        <Route path="/filter-hewan" element={<Promosi />} />
        <Route path="/faq" element={<FaqLayanan faqs={faqs} />} />
        <Route
          path="/tambah-data"
          element={
            <FormTambahData
              faqs={faqs}
              setFaqs={setFaqs}
              laporanData={laporanData}
              setLaporanData={setLaporanData}
              rekomendasi={rekomendasi}
              setRekomendasi={setRekomendasi}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
