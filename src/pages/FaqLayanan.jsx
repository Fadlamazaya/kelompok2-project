import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

const FaqLayanan = () => {
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
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({ question: "", answer: "" });

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddFaq = (e) => {
    e.preventDefault();
    if (formData.question.trim() && formData.answer.trim()) {
      setFaqs([formData, ...faqs]);
      setFormData({ question: "", answer: "" });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6" /> FAQ Layanan Mandiri
      </h1>

      {/* FORM TAMBAH FAQ */}
      <form
        onSubmit={handleAddFaq}
        className="bg-white rounded-xl shadow p-6 mb-8"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Tambah FAQ Baru
        </h2>
        <input
          type="text"
          name="question"
          placeholder="Pertanyaan"
          value={formData.question}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <textarea
          name="answer"
          placeholder="Jawaban"
          value={formData.answer}
          onChange={handleChange}
          rows={3}
          className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Tambah FAQ
        </button>
      </form>

      <p className="text-gray-600 mb-6">
        Jawaban atas pertanyaan umum seputar layanan dan prosedur klinik/labor.
      </p>

      {/* FAQ LIST */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm transition hover:shadow-md"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-gray-800 font-medium">{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-purple-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-sm text-gray-600 animate-fade-in-down">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqLayanan;
