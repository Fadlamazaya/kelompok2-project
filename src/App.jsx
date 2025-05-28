
import { Routes, Route } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Dashboard from "./pages/Dashboard"
import SalesManagement from "./pages/Penjualan"
import Penjualan from "./pages/Penjualan"
import Reminder from "./pages/Reminder"
import Feedback from "./pages/Feedback"
import RiwayatPages from "./pages/RiwayatPages"
import Riwayat from "./pages/Riwayat"

function App(){
  return(
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Penjualan" element={<Penjualan/>}/>
        <Route path="/Reminder" element={<Reminder/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
        <Route path="/RiwayatPages" element={<RiwayatPages/>}/>
        <Route path="/Riwayat" element={<Riwayat/>}/>
        </Route>
      </Routes>   
  )
}

export default App