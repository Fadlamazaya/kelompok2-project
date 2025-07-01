import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UserLayout from "./layouts/UserLayout";

// Halaman Edukasi Tambahan
import PentingnyaVaksinasi from "./pages/edukasi/PentingnyaVaksinasi";
import TipsPerawatan from "./pages/edukasi/TipsPerawatan";
import MengenalSterilisasi from "./pages/edukasi/MengenalSterilisasi";



// Halaman Admin
import Dashboard from "./pages/Dashboard";
import Penjualan from "./pages/Penjualan";
import Riwayat from "./pages/Riwayat";
import RiwayatAdmin from "./pages/RiwayatAdmin";
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
import UserProfile from "./pages/user/UserProfil";
import Login from "./pages/Login";
import Admin from "./pages/user/AdminHome";
import DetailLayanan from "./pages/DetailLayanan";
import RiwayatPelanggan from "./pages/RiwayatPelanggan";
import RiwayatPages from "./pages/RiwayatPages";

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
      <Route path="/user/login" element={<Login />} />

      {/* Halaman Admin */}
      <Route element={<MainLayout />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/penjualan" element={<Penjualan />} />
        <Route path="/riwayat" element={<RiwayatPages />} />
        <Route path="/riwayatAdmin" element={<RiwayatAdmin />} />
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

      {/* Halaman User */}
      <Route element={<UserLayout />}>
        <Route path="/user" element={<UserHome faqs={faqs} rekomendasi={rekomendasi} />} />
        <Route path="/user/home" element={<UserHome faqs={faqs} rekomendasi={rekomendasi} />} />
        <Route path="/user/pendaftaran" element={<Pendaftaran />} />
        <Route path="/user/riwayat" element={<RiwayatPages />} />
        <Route path="/user/riwayatPelanggan" element={<RiwayatPelanggan />} />
        <Route path="/user/reminder" element={<Reminder />} />
        <Route path="/user/rekomendasi" element={<RekomendasiLayanan rekomendasi={rekomendasi} />} />
        <Route path="/user/faq" element={<FaqLayanan faqs={faqs} />} />
        <Route path="/user/konten" element={<EducationContentPage />} />
        <Route path="/user/promosi" element={<Promosi />} />
        <Route path="/user/profil" element={<UserProfile />} />
        <Route path="/layanan/:slug" element={<DetailLayanan />} />

        {/* Tambahkan routing edukasi */}
        <Route path="/edukasi/pentingnya-vaksinasi" element={<PentingnyaVaksinasi />} />
        <Route path="/edukasi/tips-perawatan" element={<TipsPerawatan />} />
        <Route path="/edukasi/mengenal-sterilisasi" element={<MengenalSterilisasi />} />
      </Route>


      {/* Redirect root path ke /user */}
      <Route path="/" element={<Navigate to="/user/home" replace />} />
    </Routes>
  );
}

export default App;
