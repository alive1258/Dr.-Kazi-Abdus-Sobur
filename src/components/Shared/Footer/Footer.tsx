import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-10 px-4 border-t border-white/10 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#2C1B61_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      <div className="container">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="bg-linear-to-r from-[#2C1B61] to-[#6D28D9] bg-clip-text text-transparent">
            OMS
          </span>
        </h2>
        {/* Main Footer - 5 Column Grid */}
     

        {/* Brand & Social Section */}
        <div className="">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div>
              <div className="text-center md:text-left">
                <p className="text-gray-500 text-sm">
                  © {currentYear}{" "}
                  <span className="text-[#6D28D9] font-medium">OMS</span>. All
                  rights reserved.
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  AI-powered marketing excellence
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/sitemap"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6D28D9]/50 hover:bg-white/10 transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6D28D9]/50 hover:bg-white/10 transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6D28D9]/50 hover:bg-white/10 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6D28D9]/50 hover:bg-white/10 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6D28D9]/50 hover:bg-white/10 transition-all duration-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
