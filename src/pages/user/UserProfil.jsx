import React, { useState } from "react"; // Import useState
import {
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  Star,
  Pencil,
  Calendar,
  Clock,
  MessageCircle, // Ikon untuk chatbot
  Send, // Ikon untuk tombol kirim pesan
  X, // Ikon untuk menutup modal
} from "lucide-react";

export default function UserProfile() {
  // Dummy data (ganti dengan state/API jika perlu)
  const user = {
    nama: "Adinda Fadla",
    email: "adinda@example.com",
    noHp: "0823-1234-5678",
    alamat: "Jl. Cendrawasih No. 123, Pekanbaru",
    membership: "Gold",
    poin: 120,
    joinDate: "01 Januari 2023",
    lastLogin: "30 Juni 2025, 22:30 WIB", // Sesuai dengan waktu saat ini
    avatarUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7m-lZ7OpAX2buT5725oyFpeblA9UD4i6OA000MIuvC9hrAVw8uGiS_gfn6fWzsKxIVMfSk5dxPIrk80FpEiN_fA",
  };

  // State untuk Avatar Editor (dari implementasi sebelumnya)
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [tempAvatarUrl, setTempAvatarUrl] = useState(user.avatarUrl);

  const handleAvatarSubmit = () => {
    // Validasi URL di sini jika diperlukan
    setUser(prevUser => ({ ...prevUser, avatarUrl: tempAvatarUrl }));
    setIsEditingAvatar(false);
  };

  // State untuk Chatbot
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Halo! Ada yang bisa saya bantu? Silakan ketik pertanyaan Anda.' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Tambahkan pesan pengguna
    const userMessage = { sender: 'user', text: inputMessage };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Respon Chatbot sederhana
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
    }, 500); // Delay untuk simulasi balasan bot

    setInputMessage(''); // Kosongkan input
  };

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('profil')) {
      return 'Di halaman ini Anda bisa melihat dan mengedit informasi profil Anda.';
    } else if (lowerCaseMessage.includes('member') || lowerCaseMessage.includes('poin')) {
      return `Status member Anda adalah ${user.membership} dengan ${user.poin} poin. Anda bisa melihat keuntungan member di bagian bawah halaman.`;
    } else if (lowerCaseMessage.includes('layanan') || lowerCaseMessage.includes('fitur')) {
      return 'Kami menyediakan fitur seperti Campaign Management, Email Campaign, Loyalty Management, dan lainnya. Anda bisa melihat daftar lengkap di halaman utama atau bagian Fitur Marketing & CRM.';
    } else if (lowerCaseMessage.includes('kontak') || lowerCaseMessage.includes('admin')) {
      return 'Untuk bantuan lebih lanjut atau chat langsung dengan admin, Anda bisa menemukan tombol "Mulai Chat" di notifikasi biru di atas atau di bagian kontak kami.';
    } else if (lowerCaseMessage.includes('alamat')) {
      return `Alamat klinik kami di ${user.alamat}.`;
    } else if (lowerCaseMessage.includes('terima kasih') || lowerCaseMessage.includes('makasih')) {
        return 'Sama-sama! Senang bisa membantu.';
    }
    else {
      return 'Maaf, saya tidak mengerti pertanyaan Anda. Bisakah Anda mencoba pertanyaan lain?';
    }
  };


  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen flex justify-center items-start">
      <div className="max-w-4xl w-full mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 mt-8 md:mt-12">
        {/* Header Profil */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6 mb-6">
          <div className="relative">
            <img
              src={user.avatarUrl}
              alt="Avatar Pengguna"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-purple-200 shadow-md"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150/CCCCCC/FFFFFF?text=AD" }}
            />
            <button
              onClick={() => {
                setIsEditingAvatar(true);
                setTempAvatarUrl(user.avatarUrl);
              }}
              className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700 transition-colors duration-200 shadow-lg"
            >
              <Pencil size={16} />
            </button>

            {/* Modal/Input untuk Edit Avatar */}
            {isEditingAvatar && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-full">
                <div className="bg-white p-4 rounded-lg shadow-xl text-center w-64">
                  <h4 className="font-semibold mb-3">Ubah Avatar</h4>
                  <input
                    type="text"
                    value={tempAvatarUrl}
                    onChange={(e) => setTempAvatarUrl(e.target.value)}
                    placeholder="URL Gambar (publik)"
                    className="w-full p-2 border rounded-md mb-3 text-sm focus:ring-purple-500 focus:border-purple-500"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setIsEditingAvatar(false)}
                      className="px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleAvatarSubmit}
                      className="px-4 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="text-center sm:text-left flex-grow">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              {user.nama}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Halo, selamat datang kembali!
            </p>
            <button className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 transition-colors duration-200">
              <Pencil size={16} className="mr-2" /> Edit Profil
            </button>
          </div>
        </div>

        {/* Detail Informasi Dasar */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-5">
            Informasi Pribadi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {/* Email */}
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-6 h-6 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-gray-800">{user.email}</p>
              </div>
            </div>
            {/* Nomor HP */}
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <Phone className="w-6 h-6 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Nomor HP</p>
                <p className="font-semibold text-gray-800">{user.noHp}</p>
              </div>
            </div>
            {/* Alamat */}
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg md:col-span-2">
              <MapPin className="w-6 h-6 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Alamat</p>
                <p className="font-semibold text-gray-800">{user.alamat}</p>
              </div>
            </div>
            {/* Tanggal Bergabung */}
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Bergabung Sejak</p>
                <p className="font-semibold text-gray-800">{user.joinDate}</p>
              </div>
            </div>
            {/* Terakhir Login */}
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Terakhir Login</p>
                <p className="font-semibold text-gray-800">{user.lastLogin}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Member & Poin */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-xl p-6 sm:p-8 flex flex-col items-center text-center">
          <Award className="w-12 h-12 mb-3 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Status Member: {user.membership}</h3>
          <p className="text-lg opacity-90 mb-4">
            Anda adalah member <span className="font-bold text-yellow-300">{user.membership}</span>, dengan total
          </p>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-300" />
            <span className="text-4xl font-extrabold text-yellow-300">
              {user.poin}
            </span>
            <span className="text-xl font-semibold">Poin</span>
          </div>
          <p className="text-sm opacity-80">
            Dapatkan lebih banyak poin dan nikmati keuntungan eksklusif!
          </p>
          <button className="mt-6 px-6 py-2 bg-yellow-400 text-purple-800 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition-colors duration-200">
            Lihat Keuntungan Member
          </button>
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Buka Chatbot"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chatbot Modal */}
      {isChatbotOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100]"> {/* z-index lebih tinggi dari FAB */}
          <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-md h-[80vh] flex flex-col">
            {/* Chatbot Header */}
            <div className="bg-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="text-lg font-bold">Asisten Virtual Klinik Hewan</h3>
              <button
                onClick={() => setIsChatbotOpen(false)}
                className="text-white hover:text-gray-200"
                aria-label="Tutup Chatbot"
              >
                <X size={24} />
              </button>
            </div>

            {/* Chatbot Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db #f3f4f6' }}> {/* Custom scrollbar */}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chatbot Input */}
            <div className="p-4 border-t border-gray-200 flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                placeholder="Ketik pesan Anda..."
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors duration-200"
                aria-label="Kirim pesan"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}