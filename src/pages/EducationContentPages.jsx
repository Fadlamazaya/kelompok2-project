import { useState, useEffect } from "react";
export default function EducationContentPage() {
  const [contents, setContents] = useState(() => {
    const saved = localStorage.getItem("educationContents");
    return saved ? JSON.parse(saved) : [];
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");

  useEffect(() => {
    localStorage.setItem("educationContents", JSON.stringify(contents));
  }, [contents]);

  const handleAddContent = () => {
  if (!title || !description || !mediaUrl) {
    alert("Semua field harus diisi.");
    return;
  }

  let finalMediaUrl = mediaUrl;

  // Cek dan ubah URL YouTube ke format embed
  if (mediaUrl.includes("youtube.com/watch?v=")) {
    const videoId = mediaUrl.split("v=")[1].split("&")[0];
    finalMediaUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (mediaUrl.includes("youtu.be/")) {
    const videoId = mediaUrl.split("youtu.be/")[1].split("?")[0];
    finalMediaUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  const newContent = {
    id: Date.now(),
    title,
    description,
    mediaUrl: finalMediaUrl,
  };

  setContents([...contents, newContent]);
  setTitle("");
  setDescription("");
  setMediaUrl("");
};

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus konten ini?")) {
      setContents(contents.filter((c) => c.id !== id));
    }
  };

  // Fungsi untuk mengonversi URL YouTube ke format embed
  const convertToEmbed = (url) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be")) {
      const id = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Manajemen Konten Edukasi</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-bold mb-2">Tambah Konten Baru</h2>
        <input
          type="text"
          placeholder="Judul"
          className="w-full border p-2 rounded mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Deskripsi"
          className="w-full border p-2 rounded mb-2"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL Gambar/Video (YouTube/embed)"
          className="w-full border p-2 rounded mb-2"
          value={mediaUrl}
          onChange={(e) => setMediaUrl(e.target.value)}
        />
        <button
          onClick={handleAddContent}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Tambahkan Konten
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contents.map((content) => (
          <div key={content.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg">{content.title}</h3>
            <p className="text-gray-700 mb-2">{content.description}</p>

            {content.mediaUrl.includes("youtube") || content.mediaUrl.includes("youtu.be") ? (
              <iframe
                className="w-full h-48 mb-2 rounded"
                src={convertToEmbed(content.mediaUrl)}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={content.mediaUrl}
                alt={content.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
            )}

            <button
              onClick={() => handleDelete(content.id)}
              className="text-red-600 text-sm hover:underline"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}