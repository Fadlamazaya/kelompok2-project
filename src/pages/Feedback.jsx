// Feedback.jsx
import { useState, useEffect } from "react";

const initialFeedbacks = [
  { id: 1, name: "Budi", rating: 4, comment: "Pelayanan sangat baik!", replyInput: "", savedReply: "", showReply: false, replied: false },
  { id: 2, name: "Siti", rating: 5, comment: "Dokternya ramah dan informatif.", replyInput: "", savedReply: "", showReply: false, replied: false },
  { id: 3, name: "Agus", rating: 3, comment: "Cukup memuaskan, tapi ruang tunggunya penuh.", replyInput: "", savedReply: "", showReply: false, replied: false },
];

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const saved = localStorage.getItem("feedbacks");
    return saved ? JSON.parse(saved) : initialFeedbacks;
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleReplyChange = (id, value) => {
    setFeedbacks((prev) =>
      prev.map((fb) => (fb.id === id ? { ...fb, replyInput: value } : fb))
    );
  };

  const handleSubmitReply = (id) => {
    setFeedbacks((prev) =>
      prev.map((fb) =>
        fb.id === id
          ? {
              ...fb,
              savedReply: fb.replyInput,
              showReply: true,
              replied: true,
            }
          : fb
      )
    );
    alert(`Balasan telah dikirim untuk feedback ID ${id}`);
  };

  const handleDeleteReply = (id) => {
    const confirmed = window.confirm("Yakin ingin menghapus balasan ini?");
    if (!confirmed) return;
    setFeedbacks((prev) =>
      prev.map((fb) =>
        fb.id === id
          ? {
              ...fb,
              savedReply: "",
              showReply: false,
              replied: false,
              replyInput: "",
            }
          : fb
      )
    );
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Feedback & Review</h1>
      <div className="space-y-6">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="bg-white p-4 rounded shadow relative">
            <div className="absolute top-2 right-2">
              <span
                className={`text-xs px-2 py-1 rounded ${
                  fb.replied
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {fb.replied ? "Sudah Dibalas" : "Belum Dibalas"}
              </span>
            </div>
            <h2 className="font-bold text-lg">{fb.name}</h2>
            <p className="text-yellow-500 mb-1">{"⭐".repeat(fb.rating)}</p>
            <p className="text-gray-700 mb-2">{fb.comment}</p>

            {fb.showReply && fb.savedReply && (
              <div className="bg-gray-100 p-3 rounded mb-2 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  <strong>Admin:</strong> {fb.savedReply}
                </p>
                <button
                  onClick={() => handleDeleteReply(fb.id)}
                  className="ml-4 text-red-600 text-sm hover:underline"
                >
                  Hapus Balasan
                </button>
              </div>
            )}

            <div className="mt-2">
              <label className="block mb-1 font-medium">Balas:</label>
              <textarea
                value={fb.replyInput}
                onChange={(e) => handleReplyChange(fb.id, e.target.value)}
                className="w-full p-2 border rounded mb-2"
                rows={2}
              ></textarea>
              <button
                onClick={() => handleSubmitReply(fb.id)}
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Kirim Balasan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}