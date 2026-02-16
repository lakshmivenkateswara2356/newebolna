import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../Assets/volnaLogo-removebg-preview.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-blue-600 font-semibold"
        : isHomePage && !scrolled
        ? "text-white"
        : "text-gray-800"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isHomePage
            ? scrolled
              ? "bg-white shadow-md"
              : "bg-transparent"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-8" />
            <p
              className={`font-semibold text-lg ${
                isHomePage && !scrolled ? "text-white" : "text-gray-900"
              }`}
            >
              Volna
            </p>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About Us</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
          </ul>

          {/* Hamburger */}
          <button
            className={`md:hidden text-2xl ${
              isHomePage && !scrolled ? "text-white" : "text-black"
            }`}
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* SLIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <img src={logo} alt="logo" className="h-8" />
          <button className="text-2xl" onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <ul className="px-6 text-lg font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block py-4 border-b text-gray-800 hover:text-blue-600 transition"
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
