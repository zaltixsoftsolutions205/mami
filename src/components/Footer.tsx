import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "../assets/logo.png"; // Adjust the path based on your file structure

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="MTN Logo" className="w-20 h-20 object-contain" />
            <span className="text-xl font-bold">Mami Physiocare</span>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <p className="opacity-90">
              <a href="mailto:drramyakrishna.expert@gmail.com">drramyakrishna.expert@gmail.com</a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-primary-foreground/20 my-6"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm opacity-75">
          © {new Date().getFullYear()} Mami Physiocare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
