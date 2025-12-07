import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import HeaderTop from "./HeaderTop";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when location changes
  }, [location]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Internship", path: "/internships" },
    { name: "Verification", path: "/verification"},
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="mb-[-92px] pb-30">
      <HeaderTop />
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo - Navigates to Home */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img src="/CodSpark.svg" alt="" width={200} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-center items-center space-x-6 text-[#0A1930] font-semibold border border-accent py-3 px-5 rounded-full backdrop-blur-lg bg-white/30">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative transition duration-300 ${
                location.pathname === item.path
                  ? "text-accent bg-white/70 border px-2 py-1  rounded-full"
                  : "hover:text-accent hover:text-bold hover:bg-white/50 hover:border px-2 py-1 fix rounded-full hover:scale-105"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      <Button size={"xl"}><Link to={"/contact"}>Get Start Now</Link></Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 py-4">
          <ul className="flex flex-col space-y-4 text-center">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`block py-2 text-gray-700 font-semibold transition duration-300 ${
                    location.pathname === item.path ? "text-blue-600 underline" : "hover:text-blue-600 hover:underline"
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo(0, 0); // Scroll to top after clicking a menu item
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
