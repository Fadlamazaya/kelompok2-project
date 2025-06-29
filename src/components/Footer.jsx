import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFax,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white pt-12 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Kontak dan Alamat */}
        <div>
          <h3 className="text-lg font-bold mb-3">Alamat & Kontak</h3>
          <p className="mb-1">
            <strong>Alamat:</strong> Jl. Hangtuah No.257, Bencah Lesung,
            <br />
            Kec. Tenayan Raya, Kota Pekanbaru, Riau 28131
          </p>
          <p className="mb-1">
            <strong>Kode Pos:</strong> 28131
          </p>
          <p className="mb-1">
            <strong>Fax:</strong> (0761) 44341, 22817
          </p>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-bold mb-3">Sosial Media</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-pink-400 transition">
              <FaInstagram />
              <a
                href="https://www.instagram.com/lvkh_riau?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                @lvkh_riau
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-blue-300 transition">
              <FaFacebook />
              <span>lvkh.riau</span>
            </li>
            <li className="flex items-center gap-2 hover:text-green-300 transition">
              <FaWhatsapp />
              <span>0812-3456-7890</span>
            </li>
          </ul>
        </div>

        {/* Lokasi Google Maps */}
        <div>
          <h3 className="text-lg font-bold mb-3">Lokasi Kami</h3>
          <p className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt />
            <span>Temukan di Google Maps</span>
          </p>
          <iframe
            title="Lokasi Klinik"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127669.16513490843!2d101.41126222494759!3d0.5081449745090817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x31d5aea3c25cac61%3A0xcdb3a191e7f1daac!2sJl.%20Hangtuah%20No.257%2C%20Bencah%20Lesung%2C%20Kec.%20Tenayan%20Raya%2C%20Kota%20Pekanbaru%2C%20Riau%2028131!3m2!1d0.5081455!2d101.4936642!5e0!3m2!1sen!2sid!4v1751173971179!5m2!1sen!2sid"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow"
          ></iframe>
        </div>
      </div>

      <hr className="border-purple-700 my-6" />

      <div className="text-center text-xs text-purple-200">
        &copy; {new Date().getFullYear()} Klinik Hewan UPT LVKH. All rights reserved.
      </div>
    </footer>
  );
}
