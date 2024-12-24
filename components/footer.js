import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center text-sm sm:text-base">
      <p>© 2024 Controlled Chaos Racing. All rights reserved.</p>
      <p className="text-gray-400 mt-2">Follow us on social media!</p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaFacebook size={24} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaInstagram size={24} />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaTiktok size={24} />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaYoutube size={24} />
        </a>
      </div>
    </footer>
  );
}
