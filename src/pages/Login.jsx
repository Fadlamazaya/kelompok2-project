import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin123" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/Admin");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5B2C6F] via-white to-[#3F51B5]">
      <div className="bg-white shadow-2xl rounded-2xl px-12 py-10 w-full max-w-xl">
        <div className="text-center mb-6">
          <img src="/images/logoupt.png" alt="Logo" className="w-20 h-20 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-purple-800">Login Admin</h2>
          <p className="text-sm text-gray-500">Masuk ke dashboard pengelolaan klinik</p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-3 mb-4 rounded-md text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Username</label>
            <input
              type="text"
              className="w-full mt-1 px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin123"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-bold text-lg transition duration-300"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
