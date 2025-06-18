import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 whitespace-nowrap">
        Pages / <span className="text-gray-900 font-semibold">Dashboard</span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Type here..."
            className="px-4 py-2 pl-10 text-sm border rounded-full focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        {/* Member Button */}
        <Link
          to="/member"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition"
        >
          Member
        </Link>

        {/* Dropdown User */}
        <div className="relative">
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-sm cursor-pointer text-gray-700 hover:text-purple-700"
          >
            <User className="w-4 h-4" />
            <span>User</span>
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-2 text-sm z-30">
              <Link to="/akun" className="block px-4 py-2 hover:bg-gray-100">Akun</Link>
              <Link to="/signin" className="block px-4 py-2 hover:bg-gray-100">Sign In</Link>
              <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
