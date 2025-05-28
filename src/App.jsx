import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import SalesManagement from "./pages/Penjualan";
import Penjualan from "./pages/Penjualan";
import CustomerManagement from "./pages/CustomerManagement";
import PendaftaranOnline from "./pages/Pendaftaran";
import Riwayat from "./pages/Riwayat";
import Pendaftaran from "./pages/Pendaftaran";
import RiwayatPages from "./pages/RiwayatPages";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Penjualan" element={<Penjualan />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/riwayat" element={<Riwayat />} />
         <Route path="/riwayatPages" element={<RiwayatPages/>} />
      </Route>
    </Routes>
  );
}
export default App;
