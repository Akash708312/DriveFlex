
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Cars", path: "/explore" },
    { name: "Special Offers", path: "/offers" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="bg-brand-600 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded group-hover:bg-brand-500 transition-colors">
              D
            </span>
            <span className="text-xl font-heading font-bold text-white">
              <span>Drive</span>
              <span className="text-brand-400">Flex</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-brand-400 ${
                  location.pathname === link.path
                    ? "text-brand-400 font-semibold"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="outline" size="sm" className="flex items-center gap-1 border-gray-600 text-gray-200 hover:bg-gray-800">
                <User size={16} />
                Sign In
              </Button>
            </Link>
            <Link to="/auth?signup=true">
              <Button size="sm" className="bg-brand-600 hover:bg-brand-500 text-white">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-800">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block font-medium ${
                      location.pathname === link.path
                        ? "text-brand-400 font-semibold"
                        : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-800 flex flex-col space-y-3">
                <Link to="/auth" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full justify-center flex items-center gap-1 border-gray-700 text-gray-200 hover:bg-gray-800"
                  >
                    <User size={16} />
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth?signup=true" className="w-full">
                  <Button className="w-full bg-brand-600 hover:bg-brand-500 text-white">
                    Register
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
