import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt, // Mengganti FaFax dengan ikon telepon yang lebih umum
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; // Ikon untuk Email

export default function Footer() {
  // --- Data dipusatkan agar mudah diubah ---
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="mt-1 flex-shrink-0" />,
      text: "Jl. Hangtuah Ujung, Bencah Lesung, Kec. Tenayan Raya, Kota Pekanbaru, Riau 28285",
      href: "https://maps.app.goo.gl/tHhgGgnR4iif2E5H7", // Link Google Maps langsung
    },
    {
      icon: <FaPhoneAlt className="mt-1 flex-shrink-0" />,
      text: "(0761) 44341 / 22817",
      href: "tel:+6276144341", // Link agar bisa langsung telepon
    },
    {
      icon: <HiOutlineMail className="mt-1 flex-shrink-0" />,
      text: "labkeswan.riau@gmail.com",
      href: "mailto:labkeswan.riau@gmail.com", // Link untuk langsung kirim email
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      label: "@lvkh_riau",
      href: "https://www.instagram.com/lvkh_riau",
      hoverClass: "hover:text-pink-400",
    },
    {
      icon: <FaFacebook />,
      label: "lvkh.riau",
      href: "#", // Ganti dengan URL Facebook Anda
      hoverClass: "hover:text-blue-400",
    },
    {
      icon: <FaWhatsapp />,
      label: "0812-7013-1090",
      // Gunakan format internasional tanpa spasi/strip untuk link WhatsApp
      href: "https://wa.me/6281270131090",
      hoverClass: "hover:text-green-400",
    },
  ];

  return (
    <footer className="bg-purple-900 text-purple-50 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-12 text-sm">
        {/* Kolom Alamat & Kontak */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mb-4 tracking-wider">
            Kontak Kami
          </h3>
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-purple-200 hover:text-white transition-colors"
            >
              {item.icon}
              <span>{item.text}</span>
            </a>
          ))}
        </div>

        {/* Kolom Sosial Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mb-4 tracking-wider">
            Sosial Media
          </h3>
          <ul className="space-y-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-purple-200 transition-colors ${social.hoverClass}`}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom Lokasi Google Maps */}
        <div className="space-y-4 md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold text-white mb-4 tracking-wider">
            Lokasi Kami
          </h3>
          <div className="overflow-hidden rounded-lg shadow-xl border border-purple-700">
            <iframe
              title="Lokasi Klinik Hewan UPT LVKH"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.658315270178!2d101.49257097496465!3d0.5042830994998818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ae52960f2303%3A0x1c17293a525f2081!2sUPT.%20Laboratorium%20Veteriner%20Klinik%20Hewan%20(LVKH)!5e0!3m2!1sen!2sid!4v1719734005607!5m2!1sen!2sid"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <hr className="border-purple-800 my-8" />

      <div className="text-center text-xs text-purple-300">
        © {new Date().getFullYear()} Klinik Hewan UPT LVKH. All rights reserved.
      </div>
    </footer>
  );
}