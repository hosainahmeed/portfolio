import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Branding Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl font-semibold">Farzana Houqe</h1>
          <p className="mt-4 text-gray-400">
            Bringing you the best in digital solutions. We strive to deliver
            excellence in every project.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:text-orange-500"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {currentYear}, Farzana Houqe. All Rights Reserved.</p>
        <p className="flex items-center mt-4 md:mt-0">
          Make your website our first priority SEO frindly
          <span className="text-red-500 mx-1">❤️</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
