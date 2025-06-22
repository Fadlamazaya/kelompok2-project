// src/pages/RiwayatPages.js
import React, { useEffect, useState } from "react";
import Riwayat from "./Riwayat";

export default function RiwayatPages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const riwayat = localStorage.getItem("riwayatKunjungan");
    if (riwayat) {
      setData(JSON.parse(riwayat));
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      
      <Riwayat data={data} />
    </div>
  );
}