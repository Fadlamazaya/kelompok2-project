import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (username === "admin123" && password === "admin123") {
      const userData = {
        email: "admin@example.com",
        role: "admin"
      };
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userLogin", JSON.stringify(userData)); // simpan user login
      navigate("/admin");
    } else {
      setError("Username atau password salah!");
    }
  };


  return (
    // Latar belakang dengan gradien baru sesuai tema logo
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-4">

      {/* Kartu Login */}
      <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl px-8 md:px-12 py-10 w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <img
            src="/images/logoupt.png"
            alt="Logo"
            className="w-20 h-20 mx-auto mb-4 rounded-full shadow-lg"
          />
          <h2 className="text-3xl font-bold text-gray-800">
            Login Admin
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Masuk ke dashboard pengelolaan klinik
          </p>
        </div>

        {/* Notifikasi Error */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 text-sm p-3 mb-6 rounded-r-lg">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">

          {/* Input Username dengan Ikon */}
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-shadow duration-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>

          {/* Input Password dengan Ikon */}
          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-shadow duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          {/* Tombol Masuk dengan Gradien */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}