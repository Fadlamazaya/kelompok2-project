// pages/Member.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Member() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaPemilik: "",
    email: "",
    telepon: "",
    alamat: "",
    password: "",
    konfirmasiPassword: "",
    namaHewan: "",
    jenisHewan: "",
    ras: "",
    kelaminHewan: "",
    tanggalLahir: "",
    catatanKesehatan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Member:", formData);
    alert("Pendaftaran berhasil!");
    navigate("/"); // Kembali ke dashboard
  };

  const inputStyle =
    "w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition";

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Formulir Pendaftaran Member</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-purple-600 mb-4">Data Pemilik</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Nama Lengkap</label>
              <input name="namaPemilik" type="text" value={formData.namaPemilik} onChange={handleChange} className={inputStyle} required />
            </div>
            <div>
              <label>Email</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} className={inputStyle} required />
            </div>
            <div>
              <label>Nomor Telepon</label>
              <input name="telepon" type="tel" value={formData.telepon} onChange={handleChange} className={inputStyle} required />
            </div>
            <div>
              <label>Alamat</label>
              <input name="alamat" type="text" value={formData.alamat} onChange={handleChange} className={inputStyle} />
            </div>
            <div>
              <label>Kata Sandi</label>
              <input name="password" type="password" value={formData.password} onChange={handleChange} className={inputStyle} required />
            </div>
            <div>
              <label>Konfirmasi Kata Sandi</label>
              <input name="konfirmasiPassword" type="password" value={formData.konfirmasiPassword} onChange={handleChange} className={inputStyle} required />
            </div>
          </div>
        </section>

        <section>
          <hr className="my-6" />
          <h3 className="text-lg font-semibold text-purple-600 mb-4">Data Hewan Peliharaan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Nama Hewan</label>
              <input name="namaHewan" type="text" value={formData.namaHewan} onChange={handleChange} className={inputStyle} />
            </div>
            <div>
              <label>Jenis Hewan</label>
              <input name="jenisHewan" type="text" value={formData.jenisHewan} onChange={handleChange} className={inputStyle} />
            </div>
            <div>
              <label>Ras Hewan</label>
              <input name="ras" type="text" value={formData.ras} onChange={handleChange} className={inputStyle} />
            </div>
            <div>
              <label>Jenis Kelamin</label>
              <select name="kelaminHewan" value={formData.kelaminHewan} onChange={handleChange} className={inputStyle}>
                <option value="">Pilih Jenis Kelamin</option>
                <option value="jantan">Jantan</option>
                <option value="betina">Betina</option>
              </select>
            </div>
            <div>
              <label>Tanggal Lahir</label>
              <input name="tanggalLahir" type="date" value={formData.tanggalLahir} onChange={handleChange} className={inputStyle} />
            </div>
          </div>
          <div className="mt-4">
            <label>Catatan Kesehatan</label>
            <textarea name="catatanKesehatan" rows={3} value={formData.catatanKesehatan} onChange={handleChange} className={inputStyle}></textarea>
          </div>
        </section>

        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-200">
          Daftar Sekarang
        </button>
      </form>
    </div>
  );
}
