
import { Routes, Route } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Dashboard from "./pages/Dashboard"
import SalesManagement from "./pages/Penjualan"
import Penjualan from "./pages/Penjualan"
import CustomerManagement from "./pages/CustomerManagement"

function App(){
  return(
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Penjualan" element={<Penjualan/>}/>
        <Route path="/pelanggan" element={<CustomerManagement/>}/>
        </Route>
      </Routes>   
  )
}

export default App