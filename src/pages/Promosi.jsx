import { useState } from "react";

export default function Promosi() {
  const [kategori, setKategori] = useState("kucing");

  const semuaProduk = [
    {
      id: 1,
      nama: "Makanan Kucing",
      deskripsi: "Makanan bergizi untuk kesehatan kucing.",
      gambar: "/images/kucing-makanan.jpg",
      kategori: "kucing",
    },
    {
      id: 2,
      nama: "Pasir Kucing Wangi",
      deskripsi: "Pasir dengan aroma segar dan anti bau.",
      gambar: "/images/kucing-pasir.jpg",
      kategori: "kucing",
    },
    {
      id: 3,
      nama: "Kandang Anjing Lipat",
      deskripsi: "Cocok untuk perjalanan atau rumah.",
      gambar: "/images/anjing-kandang.jpg",
      kategori: "anjing",
    },
    {
      id: 4,
      nama: "Vitamin Anjing",
      deskripsi: "Vitamin untuk bulu sehat dan kuat.",
      gambar: "/images/anjing-vitamin.jpg",
      kategori: "anjing",
    },
    {
      id: 5,
      nama: "Mainan Kelinci",
      deskripsi: "Mainan edukatif untuk kelinci aktif.",
      gambar: "/images/kelinci-mainan.jpg",
      kategori: "kelinci",
    },
  ];

  const produkTersaring = semuaProduk.filter((p) => p.kategori === kategori);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Filter Berdasarkan Hewan</h1>

      <div className="flex gap-4 mb-6">
        {["kucing", "anjing", "kelinci"].map((k) => (
          <button
            key={k}
            onClick={() => setKategori(k)}
            className={`px-4 py-2 rounded capitalize ${
              kategori === k
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-blue-100"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produkTersaring.map((produk) => (
          <div
            key={produk.id}
            className="bg-white rounded shadow p-4 flex flex-col"
          >
            <img
              src={produk.gambar}
              alt={produk.nama}
              className="h-40 w-full object-cover rounded mb-3"
            />
            <h2 className="font-semibold text-lg">{produk.nama}</h2>
            <p className="text-gray-500 text-sm mb-2">
              {produk.deskripsi}
            </p>
            <div className="mt-auto flex gap-2">
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm">
                Beli
              </button>
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}