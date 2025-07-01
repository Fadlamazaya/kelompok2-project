import React, { useState, useRef, useEffect } from "react";
import {
  User, Mail, Phone, MapPin, Award, Star, Pencil, Calendar, Clock,
  MessageCircle, Send, X, ClipboardList, CheckCircle2, XCircle, History, Stethoscope
} from "lucide-react";

// --- Data Dummy untuk Self-Service ---
// Ganti dengan data dari API pada implementasi nyata
const riwayatLayanan = [
  { 
    id: 1, 
    layanan: 'Vaksinasi Tahunan Kucing', 
    hewan: 'Milo (Kucing Persia)',
    tanggal: '20 Juli 2025', 
    status: 'Terjadwal', 
    hasilDiagnosis: null 
  },
  { 
    id: 2, 
    layanan: 'Konsultasi Kulit', 
    hewan: 'Bruno (Anjing Golden)',
    tanggal: '15 Juni 2025', 
    status: 'Selesai', 
    hasilDiagnosis: 'Ditemukan iritasi ringan akibat jamur pada area telinga. Diberikan resep salep Ketoconazole untuk dioleskan 2x sehari selama 7 hari. Disarankan untuk menjaga area telinga tetap kering.' 
  },
  { 
    id: 3, 
    layanan: 'Grooming Lengkap', 
    hewan: 'Milo (Kucing Persia)',
    tanggal: '01 Juni 2025', 
    status: 'Selesai', 
    hasilDiagnosis: 'Tidak ada kelainan dermatologis yang ditemukan. Kondisi bulu dan kulit dalam keadaan sehat dan bersih.'
  },
  { 
    id: 4, 
    layanan: 'Pemeriksaan Rutin', 
    hewan: 'Bruno (Anjing Golden)',
    tanggal: '10 Mei 2025', 
    status: 'Dibatalkan', 
    hasilDiagnosis: null 
  },
];


// --- Komponen Utama ---

export default function UserProfile() {
  const [user, setUser] = useState({
    nama: "Adinda Fadla",
    email: "adinda@example.com",
    noHp: "0823-1234-5678",
    alamat: "Jl. Cendrawasih No. 123, Pekanbaru",
    membership: "Gold",
    poin: 120,
    joinDate: "01 Januari 2023",
    lastLogin: "01 Juli 2025, 16:20 WIB", // Sesuai waktu saat ini
    avatarUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7m-lZ7OpAX2buT5725oyFpeblA9UD4i6OA000MIuvC9hrAVw8uGiS_gfn6fWzsKxIVMfSk5dxPIrk80FpEiN_fA",
  });

  // State untuk Avatar Editor
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [tempAvatarUrl, setTempAvatarUrl] = useState(user.avatarUrl);
  
  // State untuk Chatbot
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Halo! Ada yang bisa saya bantu? Silakan ketik pertanyaan Anda.' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  
  // --- State untuk Fitur Self-Service ---
  const [isDiagnosisModalOpen, setIsDiagnosisModalOpen] = useState(false);
  const [selectedLayanan, setSelectedLayanan] = useState(null);
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  

  const handleAvatarSubmit = () => {
    setUser(prevUser => ({ ...prevUser, avatarUrl: tempAvatarUrl }));
    setIsEditingAvatar(false);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    const userMessage = { sender: 'user', text: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 500);
    setInputMessage('');
  };

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('jadwal') || lowerCaseMessage.includes('riwayat')) {
      return 'Anda dapat melihat jadwal dan riwayat layanan pada bagian "Aktivitas & Riwayat Layanan" di halaman profil ini.';
    } else if (lowerCaseMessage.includes('diagnosis')) {
       return 'Tentu, untuk layanan yang sudah "Selesai", Anda bisa mengklik tombol "Lihat Diagnosis" untuk melihat hasilnya.';
    } else if (lowerCaseMessage.includes('member') || lowerCaseMessage.includes('poin')) {
      return `Status member Anda adalah ${user.membership} dengan ${user.poin} poin. Klik tombol "Lihat Keuntungan Member" untuk detail lengkapnya.`;
    } else if (lowerCaseMessage.includes('kontak') || lowerCaseMessage.includes('admin')) {
      return 'Untuk bantuan lebih lanjut atau chat langsung dengan admin, Anda bisa menemukan tombol "Mulai Chat" di notifikasi biru di atas atau di bagian kontak kami.';
    } else if (lowerCaseMessage.includes('terima kasih')) {
        return 'Sama-sama! Senang bisa membantu.';
    } else {
      return 'Maaf, saya tidak mengerti. Anda bisa menanyakan tentang jadwal, diagnosis, atau status member.';
    }
  };

  const StatusBadge = ({ status }) => {
    const statusMap = {
      'Terjadwal': 'bg-blue-100 text-blue-800',
      'Selesai': 'bg-green-100 text-green-800',
      'Dibatalkan': 'bg-red-100 text-red-800',
    };
    const IconMap = {
      'Terjadwal': <History size={14} className="mr-1.5"/>,
      'Selesai': <CheckCircle2 size={14} className="mr-1.5"/>,
      'Dibatalkan': <XCircle size={14} className="mr-1.5"/>,
    }
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusMap[status]}`}>
        {IconMap[status]}
        {status}
      </span>
    );
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl w-full mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 mt-8 md:mt-12">
        
        {/* Header Profil (Tidak ada perubahan) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6 mb-6">
          <div className="relative">
             <img src={user.avatarUrl} alt="Avatar Pengguna" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-purple-200 shadow-md" onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/150"}}/>
             <button onClick={() => { setIsEditingAvatar(true); setTempAvatarUrl(user.avatarUrl); }} className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700 transition-colors duration-200 shadow-lg">
                <Pencil size={16} />
              </button>
            {isEditingAvatar && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-full">
                <div className="bg-white p-4 rounded-lg shadow-xl text-center w-64">
                  <h4 className="font-semibold mb-3">Ubah Avatar</h4>
                  <input type="text" value={tempAvatarUrl} onChange={(e) => setTempAvatarUrl(e.target.value)} placeholder="URL Gambar" className="w-full p-2 border rounded-md mb-3 text-sm focus:ring-purple-500 focus:border-purple-500"/>
                  <div className="flex justify-end gap-2">
                    <button onClick={() => setIsEditingAvatar(false)} className="px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">Batal</button>
                    <button onClick={handleAvatarSubmit} className="px-4 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700">Simpan</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="text-center sm:text-left flex-grow">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">{user.nama}</h2>
            <p className="text-lg text-gray-600 mb-4">Halo, selamat datang kembali!</p>
            <button className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 transition-colors duration-200">
              <Pencil size={16} className="mr-2" /> Edit Profil
            </button>
          </div>
        </div>

        {/* Informasi Pribadi (Tidak ada perubahan) */}
        <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-5">Informasi Pribadi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"><Mail className="w-6 h-6 text-purple-600" /><div><p className="text-sm text-gray-500">Email</p><p className="font-semibold text-gray-800">{user.email}</p></div></div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"><Phone className="w-6 h-6 text-purple-600" /><div><p className="text-sm text-gray-500">Nomor HP</p><p className="font-semibold text-gray-800">{user.noHp}</p></div></div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg md:col-span-2"><MapPin className="w-6 h-6 text-purple-600" /><div><p className="text-sm text-gray-500">Alamat</p><p className="font-semibold text-gray-800">{user.alamat}</p></div></div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"><Calendar className="w-6 h-6 text-purple-600" /><div><p className="text-sm text-gray-500">Bergabung Sejak</p><p className="font-semibold text-gray-800">{user.joinDate}</p></div></div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"><Clock className="w-6 h-6 text-purple-600" /><div><p className="text-sm text-gray-500">Terakhir Login</p><p className="font-semibold text-gray-800">{user.lastLogin}</p></div></div>
            </div>
        </div>
        
        {/* --- BAGIAN BARU: CUSTOMER SELF-SERVICE --- */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
            <ClipboardList className="w-7 h-7" /> Aktivitas & Riwayat Layanan
          </h3>
          <div className="space-y-4">
            {riwayatLayanan.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition hover:shadow-md">
                <div className="flex-grow">
                  <p className="font-bold text-gray-800">{item.layanan}</p>
                  <p className="text-sm text-gray-500">{item.hewan} &bull; {item.tanggal}</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                   <StatusBadge status={item.status} />
                   {item.status === 'Selesai' && (
                     <button 
                       onClick={() => { setSelectedLayanan(item); setIsDiagnosisModalOpen(true); }}
                       className="px-3 py-1.5 text-xs bg-white border border-purple-300 text-purple-700 font-semibold rounded-full hover:bg-purple-50"
                     >
                       Lihat Diagnosis
                     </button>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Member & Poin */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-xl p-6 sm:p-8 flex flex-col items-center text-center">
          <Award className="w-12 h-12 mb-3 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Status Member: {user.membership}</h3>
          <p className="text-lg opacity-90 mb-4">Anda adalah member <span className="font-bold text-yellow-300">{user.membership}</span>, dengan total</p>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-300" /><span className="text-4xl font-extrabold text-yellow-300">{user.poin}</span><span className="text-xl font-semibold">Poin</span>
          </div>
          <button 
             onClick={() => setIsMembershipModalOpen(true)} // Aksi untuk membuka modal member
             className="mt-6 px-6 py-2 bg-yellow-400 text-purple-800 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition-colors duration-200">
            Lihat Keuntungan Member
          </button>
        </div>
      </div>

      {/* Floating Chatbot (Tidak ada perubahan) */}
      <button onClick={() => setIsChatbotOpen(true)} className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 z-50">
        <MessageCircle size={28} />
      </button>

      {/* --- MODAL BARU: SELF-SERVICE --- */}

      {/* Modal untuk Hasil Diagnosis */}
      {isDiagnosisModalOpen && selectedLayanan && (
         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
            <div className="p-5 border-b flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2"><Stethoscope/> Hasil Diagnosis</h3>
                <p className="text-sm text-gray-600 mt-1">{selectedLayanan.layanan} ({selectedLayanan.tanggal})</p>
              </div>
              <button onClick={() => setIsDiagnosisModalOpen(false)} className="p-1"><X size={24} className="text-gray-500"/></button>
            </div>
            <div className="p-5">
              <p className="text-gray-700 whitespace-pre-wrap">{selectedLayanan.hasilDiagnosis}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-b-lg text-right">
                <button onClick={() => setIsDiagnosisModalOpen(false)} className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm">Tutup</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal untuk Info Membership */}
      {isMembershipModalOpen && (
         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="p-5 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2"><Award/> Keuntungan Membership</h3>
              <button onClick={() => setIsMembershipModalOpen(false)} className="p-1"><X size={24} className="text-gray-500"/></button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier Bronze */}
              <div className="border rounded-lg p-4 bg-orange-50"><h4 className="font-bold text-orange-800">Bronze</h4><ul className="list-disc list-inside text-sm text-orange-700 mt-2"><li>Diskon 5% untuk grooming</li><li>Info promo via email</li></ul></div>
              {/* Tier Silver */}
              <div className="border rounded-lg p-4 bg-gray-100"><h4 className="font-bold text-gray-800">Silver</h4><ul className="list-disc list-inside text-sm text-gray-700 mt-2"><li>Semua keuntungan Bronze</li><li>Diskon 10% untuk grooming</li><li>Diskon 5% untuk makanan</li></ul></div>
              {/* Tier Gold */}
              <div className="border-2 border-yellow-400 rounded-lg p-4 bg-yellow-50 relative"><span className="absolute top-2 right-2 text-xs font-bold text-yellow-600">LEVEL ANDA</span><h4 className="font-bold text-yellow-800">Gold</h4><ul className="list-disc list-inside text-sm text-yellow-700 mt-2"><li>Semua keuntungan Silver</li><li>Diskon 15% untuk semua layanan</li><li>Prioritas jadwal</li><li>Konsultasi online gratis 1x/bulan</li></ul></div>
            </div>
             <div className="p-4 bg-gray-50 rounded-b-lg text-right">
                <button onClick={() => setIsMembershipModalOpen(false)} className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm">Tutup</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Chatbot (Tidak ada perubahan) */}
      {isChatbotOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-end justify-end z-[100] p-4 sm:p-8">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-[70vh] flex flex-col">
              <div className="bg-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center"><h3 className="text-lg font-bold">Asisten Virtual</h3><button onClick={() => setIsChatbotOpen(false)}><X size={24} /></button></div>
              <div className="flex-1 p-4 overflow-y-auto space-y-3">{messages.map((msg, index) => (<div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[75%] px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>{msg.text}</div></div>))}</div>
              <div className="p-4 border-t flex items-center gap-2"><input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onKeyPress={(e) => {if (e.key === 'Enter') handleSendMessage();}} placeholder="Ketik pesan..." className="flex-1 p-3 border rounded-full focus:ring-2 focus:ring-purple-400 text-sm"/><button onClick={handleSendMessage} className="bg-purple-600 text-white p-3 rounded-full"><Send size={20} /></button></div>
            </div>
          </div>
      )}
    </div>
  );
}