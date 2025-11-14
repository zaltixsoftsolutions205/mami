import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/Mami_Logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Video Consultation", href: "/#video-consultation" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Awards", href: "/#awards" },
  ];

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b-4 border-primary">
      {/* Reduced vertical padding to move header up */}
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            {/* logo size unchanged */}
            <img
              src={logo}
              alt="MAMI Physio Care Logo"
              className="h-12 md:h-20 lg:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* increased font size to text-base */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.includes("#")) {
                    e.preventDefault();
                    const sectionId = item.href.split("#")[1];
                    scrollToSection(sectionId);
                  }
                }}
                className="text-foreground hover:text-primary transition-colors font-semibold text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex bg-gradient-to-r from-primary to-primary hover:opacity-90 text-white font-semibold text-base"
          >
            Contact Me
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.includes("#")) {
                    e.preventDefault();
                    const sectionId = item.href.split("#")[1];
                    scrollToSection(sectionId);
                  }
                }}
                className="block px-4 py-2 text-foreground hover:bg-secondary/20 hover:text-primary rounded-lg transition-colors font-semibold text-base"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-primary to-primary text-white text-base">
              Contact Me
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
