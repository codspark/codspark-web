import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when location changes
  }, [location]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Internships", path: "/internships" },
    { name: "About Us", path: "/about" },
    { name: "Verification", path: "/verification"},
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo - Navigates to Home */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img src="/CodSpark.png" alt="" width={200} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative transition duration-300 ${
                location.pathname === item.path
                  ? "text-accent after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-accent"
                  : "hover:text-accent hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-accent hover:scale-105"
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
