import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";

export default function UserLayout() {
  return (
    <div className="min-h-screen pb-14 bg-gray-50 text-gray-900">
      

      <main className="p-4">
        <Outlet />
      </main>

      <BottomNavbar />
    </div>
  );
}
