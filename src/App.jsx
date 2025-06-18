import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UserLayout from "./layouts/UserLayout";

// Halaman Admin
import Dashboard from "./pages/Dashboard";
import Penjualan from "./pages/Penjualan";
import Riwayat from "./pages/Riwayat";
import RiwayatPages from "./pages/RiwayatPages";
import Reminder from "./pages/Reminder";
import Pendaftaran from "./pages/Pendaftaran";
import CustomerManagement from "./pages/CustomerManagement";
import RekomendasiLayanan from "./pages/RekomendasiLayanan";
import LaporanAnalisis from "./pages/LaporanAnalisis";
import FaqLayanan from "./pages/FaqLayanan";
import FormTambahData from "./pages/FormTambahData";
import EducationContentPage from "./pages/EducationContentPages";
import Promosi from "./pages/Promosi";
import CustomerSegmentation from "./pages/CustomerSegmentation";

// Halaman User
import Member from "./pages/Member";
import UserHome from "./pages/user/UserHome";

function App() {
  const [faqs, setFaqs] = useState([
    {
      question: "Apakah saya perlu janji temu terlebih dahulu?",
      answer: "Ya, sangat disarankan untuk membuat janji temu agar hewan dapat langsung ditangani tanpa menunggu lama.",
    },
    {
      question: "Berapa biaya konsultasi dasar?",
      answer: "Biaya konsultasi awal adalah sekitar Rp 50.000 - Rp 100.000 tergantung jenis hewan.",
    },
    {
      question: "Apakah menerima kunjungan ke peternakan?",
      answer: "Ya, tersedia layanan kunjungan lapangan dengan penjadwalan sebelumnya.",
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
      {/* Halaman tanpa layout */}
      <Route path="/member" element={<Member />} />

      {/* Layout untuk User */}
<Route element={<UserLayout />}>
  <Route
    path="/user"
    element={
      <UserHome faqs={faqs} rekomendasi={rekomendasi} />
    }
  />
  {/* Opsional: Tetap bisa akses per halaman */}
  <Route path="/user/pendaftaran" element={<Pendaftaran />} />
  <Route path="/user/riwayat" element={<RiwayatPages />} />
  <Route path="/user/reminder" element={<Reminder />} />
  <Route path="/user/rekomendasi" element={<RekomendasiLayanan rekomendasi={rekomendasi} />} />
  <Route path="/user/faq" element={<FaqLayanan faqs={faqs} />} />
  <Route path="/user/konten" element={<EducationContentPage />} />
  <Route path="/user/promosi" element={<Promosi />} />
</Route>


      {/* Layout untuk Admin */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/penjualan" element={<Penjualan />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/riwayatPages" element={<RiwayatPages />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/rekomendasi" element={<RekomendasiLayanan rekomendasi={rekomendasi} />} />
        <Route path="/laporan" element={<LaporanAnalisis laporanData={laporanData} />} />
        <Route path="/faq" element={<FaqLayanan faqs={faqs} />} />
        <Route path="/konten-edukasi" element={<EducationContentPage />} />
        <Route path="/filter-hewan" element={<Promosi />} />
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
        <Route path="/segmentasi" element={<CustomerSegmentation />} />
      </Route>
    </Routes>
  );
}

export default App;
