import React from "react";

export default function UserProfile() {
  // Dummy data (ganti dengan state/API jika perlu)
  const user = {
    nama: "Adinda Fadla",
    email: "adinda@example.com",
    noHp: "0823-1234-5678",
    alamat: "Jl. Cendrawasih, Pekanbaru",
    membership: "Gold",
    poin: 120,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Profil Pengguna</h2>

        {/* Kartu Data Pengguna */}
        <div className="bg-white shadow rounded-xl p-6 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Nama Lengkap</p>
              <p className="font-semibold text-gray-800">{user.nama}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-gray-800">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Nomor HP</p>
              <p className="font-semibold text-gray-800">{user.noHp}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Alamat</p>
              <p className="font-semibold text-gray-800">{user.alamat}</p>
            </div>
          </div>
        </div>

        {/* Kartu Member & Poin */}
        <div className="bg-yellow-50 border border-yellow-200 shadow rounded-xl p-6">
          <h3 className="text-lg font-bold text-yellow-700 mb-3">Status Member</h3>
          <p className="text-gray-800 mb-1">
            <span className="text-gray-600">Tipe:</span> <strong>{user.membership}</strong>
          </p>
          <p className="text-gray-800">
            <span className="text-gray-600">Total Poin:</span> <strong>{user.poin}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
