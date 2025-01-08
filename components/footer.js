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
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%40controlledchaosracingctx%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR34nzyMSffK9JlkQLAcfJxoVfkwIetreKGMrxCNO9zArfgqv0IZ2FWfvC8_aem_Rxg1YUddtS5x8lLeqdnqaQ&h=AT30jOFK99opticqgxxRHLeainKdWW9ZKaGZdbBzLoU6DzwRjMTe5067b2EjoEW3MRyKOjkfmGvu1ZjW7jAm1QDrLe5popK4ceRs8MZJ18Gehs3GbBYBtyaqO7orCQyNZqQF"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaTiktok size={24} />
        </a>

        {/* YouTube */}
        <a
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40ControlledChaosRacingCTX-627%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR34nzyMSffK9JlkQLAcfJxoVfkwIetreKGMrxCNO9zArfgqv0IZ2FWfvC8_aem_Rxg1YUddtS5x8lLeqdnqaQ&h=AT33luM-6qOXUOt4gktVJsGY06JXsnVQ2ETarG4aq7IW2Gwk2eQBOqbBVbrw40l6dc_5FpwK98D4du6lkIJDAPtCWKFjitPDUOIvGdnUbnuGBnQihlzBJh-TzC0i9TZL9CCH"
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
