import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormTambahData = ({
  faqs,
  setFaqs,
  laporanData,
  setLaporanData,
  rekomendasi,
  setRekomendasi,
}) => {
  const navigate = useNavigate();

  // contoh state input untuk FAQ, laporan, rekomendasi
  const [faqInput, setFaqInput] = useState({ question: "", answer: "" });
  const [laporanInput, setLaporanInput] = useState({ kategori: "", jumlah: "" });
  const [rekomendasiInput, setRekomendasiInput] = useState({
    gejala: "",
    layanan: "",
  });

  const handleAddFaq = () => {
    if (faqInput.question && faqInput.answer) {
      setFaqs([...faqs, faqInput]);
      setFaqInput({ question: "", answer: "" });
    }
  };

  const handleAddLaporan = () => {
    if (laporanInput.kategori && laporanInput.jumlah) {
      setLaporanData([
        ...laporanData,
        { ...laporanInput, jumlah: Number(laporanInput.jumlah) },
      ]);
      setLaporanInput({ kategori: "", jumlah: "" });
    }
  };

  const handleAddRekomendasi = () => {
    if (rekomendasiInput.gejala && rekomendasiInput.layanan) {
      setRekomendasi([...rekomendasi, rekomendasiInput]);
      setRekomendasiInput({ gejala: "", layanan: "" });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-purple-700 mb-6">
        Form Tambah Data
      </h1>

      {/* Form Tambah FAQ */}
      <section className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="font-semibold mb-2">Tambah FAQ</h2>
        <input
          type="text"
          placeholder="Pertanyaan"
          className="border p-2 rounded w-full mb-2"
          value={faqInput.question}
          onChange={(e) =>
            setFaqInput({ ...faqInput, question: e.target.value })
          }
        />
        <textarea
          placeholder="Jawaban"
          className="border p-2 rounded w-full mb-2"
          value={faqInput.answer}
          onChange={(e) => setFaqInput({ ...faqInput, answer: e.target.value })}
        />
        <button
          onClick={handleAddFaq}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Tambah FAQ
        </button>
      </section>

      {/* Form Tambah Laporan */}
      <section className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="font-semibold mb-2">Tambah Data Laporan</h2>
        <input
          type="text"
          placeholder="Kategori Kasus"
          className="border p-2 rounded w-full mb-2"
          value={laporanInput.kategori}
          onChange={(e) =>
            setLaporanInput({ ...laporanInput, kategori: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Jumlah Kasus"
          className="border p-2 rounded w-full mb-2"
          value={laporanInput.jumlah}
          onChange={(e) =>
            setLaporanInput({ ...laporanInput, jumlah: e.target.value })
          }
        />
        <button
          onClick={handleAddLaporan}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Tambah Laporan
        </button>
      </section>

      {/* Form Tambah Rekomendasi */}
      <section className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="font-semibold mb-2">Tambah Rekomendasi Layanan</h2>
        <input
          type="text"
          placeholder="Gejala"
          className="border p-2 rounded w-full mb-2"
          value={rekomendasiInput.gejala}
          onChange={(e) =>
            setRekomendasiInput({ ...rekomendasiInput, gejala: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Layanan"
          className="border p-2 rounded w-full mb-2"
          value={rekomendasiInput.layanan}
          onChange={(e) =>
            setRekomendasiInput({ ...rekomendasiInput, layanan: e.target.value })
          }
        />
        <button
          onClick={handleAddRekomendasi}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Tambah Rekomendasi
        </button>
      </section>
    </div>
  );
};

export default FormTambahData;
